import { PrismaClient } from "@prisma/client";

export const getCounsellors = async (req, res) => {
  try {
    const counsellors = await prisma.counsellor.findMany({
      where: { approved: true },
      include: {
        user: true,
      },
    });
    res.json(counsellors);
  } catch (error) {
    res.status(500).json({ error: "Failed to get counsellors" });
  }
};
