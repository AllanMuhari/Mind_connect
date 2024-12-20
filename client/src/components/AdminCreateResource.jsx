import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("file", image);

  const uploadPreset = "ml_default";
  const cloudName = "dejzpe433";
  formData.append("upload_preset", uploadPreset);
  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    if (!data) return null;
    return data.secure_url;
  } catch (err) {
    return null;
  }
};

const AdminCreateResource = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleCreateResource = async () => {
    const uploadedImageUrl = await uploadImage(image);

    if (!uploadedImageUrl) {
      toast.error("Image upload failed");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/resources",
        {
          title,
          url: uploadedImageUrl,
          description,
        },
        { withCredentials: true }
      );
      toast.success("Resource created successfully!");
    } catch (error) {
      toast.error("Failed to create resource");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-4xl mt-8">
        <h2 className="text-2xl mb-4">Create Resource</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Video File</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded"></textarea>
        </div>
        <button
          onClick={handleCreateResource}
          className="bg-blue-500 text-white px-4 py-2 rounded">
          Create Resource
        </button>
      </div>
    </div>
  );
};

export default AdminCreateResource;
