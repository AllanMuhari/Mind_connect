import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createGroup = async (req, res) => {
  try {
    const { name, desciprtion } = req.body;
    const group = await prisma.group.create({
      data: {
        name,
        desciprtion,
        members: {
          connect: {
            id: req.user.id,
          },
        },
      },
    });
    res.status(201).json(group);
  } catch (error) {
    res.status(500).json({ error: "Failed to create group" });
  }
};

export const getGroups = async (req, res) => {
  try {
    const groups = await prisma.group.findMany({
      where: {
        members: {
          some: {
            id: req.user.id,
          },
        },
      },
    });
  } catch (error) {
    res.status(500).json({ error: " Failed to get " });
  }
};

export const getGroupById = async (req, res) => {
  try {
    const id = req.params.id;
    const group = await prisma.group.findUnique({
      where: {
        id: id,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to get group" });
  }
};
export const deleteGroup = async (req, res) => {
  try {
    const id = req.params.id;
    await prisma.group.delete({
      where: {
        id: id,
      },
    });
    res.status(200).json({ message: "Group deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to deleted group" });
  }
};

export const updateGroup = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, description } = req.body;
    const group = await prisma.group.update({
      where: {
        id: id,
      },
      data: {
        name,
        description,
      },
    });
    res.status(200).json({ message: "Group updated" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update group" });
  }
};
