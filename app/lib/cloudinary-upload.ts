export async function uploadToCloudinary(
  files: FileList | File[],
  uploadPreset: string,
  cloudName: string,
): Promise<string[]> {
  const urls: string[] = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const formDataUpload = new FormData();
    formDataUpload.append("file", file);
    formDataUpload.append("upload_preset", uploadPreset);
    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formDataUpload,
        },
      );
      const data = await res.json();
      if (data.secure_url) {
        urls.push(data.secure_url);
      }
    } catch (err) {
    }
  }
  return urls;
}
