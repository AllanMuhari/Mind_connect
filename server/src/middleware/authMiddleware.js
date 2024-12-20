// import jwt from "jsonwebtoken";

// // export const authMiddleware = async (req, res, next) => {
// //   const token = req.headers.authorization;

// //   if (!token) {
// //     return res.status(401).json({ error: "Not authorized, no token" });
// //   }

// //   try {
// //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
// //     req.user = decoded;
// //     next();
// //   } catch (error) {
// //     res.status(401).json({ error: "Not authorized, token failed" });
// //   }
// // };

// export const authMiddleware = async (req, res, next) => {
//   try {
//     const { id, email } = req.body;
//     if (!id || !email) {
//       throw new Error("Invalid user credentials");
//     }
//   } catch (error) {
//     res.status(401).json({ error: "Not authorized" });
//   }
// };
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Not authorized, no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });

    if (!user) {
      return res.status(401).json({ error: "Not authorized, user not found" });
    }

    if (user.role !== "ADMIN") {
      return res.status(403).json({ error: "Not authorized, admin only" });
    }

    next();
  } catch (error) {
    res.status(401).json({ error: "Not authorized, token failed" });
  }
};

export default authMiddleware;
