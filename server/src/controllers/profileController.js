import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProfile = async (req, res) => {
  try {
    const profile = await prisma.profile.findUnique({
      where: { userId: req.user.userId },
    });
    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }
    res.json(profile);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Fetching profile failed", details: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { firstName, lastName, bio } = req.body;
    const profile = await prisma.profile.update({
      where: { userId: req.user.userId },
      data: {
        firstName,
        lastName,
        bio,
      },
    });
    res.json(profile);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Updating profile failed", details: error.message });
  }
};

export const deleteProfile = async (req, res) => {
    try {
      await prisma.profile.delete({
        where: { userId: req.user.userId },
      });
      res.status(204).end();
    } catch (error) {
      res
       .status(500)
       .json({ error: "Deleting profile failed", details: error.message });
    }
  
}