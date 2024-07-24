import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createResource = async (req, res) => {
  try {
    const { title, url, description } = req.body;
    const resource = await prisma.resource.create({
      data: {
        title,
        url,
        description,
        userId: req.user.userId, // Associate resource with the logged-in user
      },
    });
    res.json(resource);
  } catch (error) {
    res.status(500).json({ error: "Failed to create resource" });
  }
};

export const getResources = async (req, res) => {
  try {
    const resources = await prisma.resource.findMany();
    res.json(resources);
  } catch (error) {
    res.status(500).json({ error: "Failed to get resources" });
  }
};

export const updateResource = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, url, description } = req.body;
    const resource = await prisma.resource.update({
      where: {
        id,
      },
      data: {
        title,
        url,
        description,
      },
    });
    res.json(resource);
  } catch (error) {
    res.status(500).json({ error: "Failed to update resource" });
  }
};

export const deleteResource = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.resource.delete({
      where: {
        id,
      },
    });
    res.json({ message: "Resource deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete resource" });
  }
};

export const getResourcesByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const resources = await prisma.resource.findMany({
      where: {
        userId,
      },
    });
    res.json(resources);
  } catch (error) {
    res.status(500).json({ error: "Failed to get resources by user" });
  }
};
