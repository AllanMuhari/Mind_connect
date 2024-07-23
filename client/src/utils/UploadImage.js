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

export default uploadImage;
