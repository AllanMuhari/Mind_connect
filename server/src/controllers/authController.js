// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export const registerUser = async (req, res) => {
//   const { email, password, role, username } = req.body;

//   if (!email || !password || !role || !username) {
//     return res
//       .status(400)
//       .json({ error: "Please provide all required fields" });
//   }

//   try {
//     const existingUser = await prisma.user.findUnique({ where: { email } });
//     const existingUsername = await prisma.user.findUnique({
//       where: { username },
//     });

//     if (existingUser) {
//       return res.status(400).json({ error: "User already exists" });
//     }

//     if (existingUsername) {
//       return res.status(400).json({ error: "Username already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await prisma.user.create({
//       data: {
//         email,
//         password: hashedPassword,
//         role,
//         username,
//       },
//     });

//     res.status(201).json({
//       id: user.id,
//       email: user.email,
//       role: user.role,
//       username: user.username,
//     });
//   } catch (error) {
//     console.error("Error registering user", error);
//     res.status(400).json({ error: "Invalid user data" });
//   }
// };

// export const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       res.status(400).json({ error: "Please provide email and password" });
//       return;
//     }

//     const user = await prisma.user.findUnique({
//       where: { email },
//     });

//     if (!user) {
//       res.status(401).json({ error: "Email does not exist" });
//       return;
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       res.status(401).json({ error: "Invalid email or password" });
//       return;
//     }

//     const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     res.json({
//       id: user.id,
//       email: user.email,
//       role: user.role,
//       username: user.username,
//       profilePhoto: user.profilePhoto,
//       token,
//     });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to login" });
//   }
// };

// export const getUserProfile = async (req, res) => {
//   try {
//     const user = await prisma.user.findUnique({
//       where: {
//         id: req.user.userId,
//       },
//       include: {
//         profile: true,
//       },
//     });
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(401);
//     throw new Error("Not authorized");
//   }
// };
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const registerUser = async (req, res) => {
  const { email, password, role, username } = req.body;

  if (!email || !password || !role || !username) {
    return res
      .status(400)
      .json({ error: "Please provide all required fields" });
  }

  try {
    const existingUserByEmail = await prisma.user.findUnique({
      where: { email },
    });
    const existingUserByUsername = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUserByEmail) {
      return res.status(400).json({ error: "User already exists" });
    }

    if (existingUserByUsername) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role,
        username,
      },
    });

    // If the role is COUNSELOR, create a corresponding Counselor entry
    if (role === "COUNSELOR") {
      await prisma.counselor.create({
        data: {
          userId: user.id,
        },
      });
    }

    res.status(201).json({
      id: user.id,
      email: user.email,
      role: user.role,
      username: user.username,
    });
  } catch (error) {
    console.error("Error registering user", error);
    res.status(500).json({ error: "Error registering user" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Please provide email and password" });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ error: "Email does not exist" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({
      id: user.id,
      email: user.email,
      role: user.role,
      username: user.username,
      profileImage: user.profileImage,
      token,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to login" });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.userId,
      },
      include: {
        counselor: true, // Include counselor information if the user is a counselor
      },
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error getting user profile", error);
    res.status(401).json({ error: "Not authorized" });
  }
};
