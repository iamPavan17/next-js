"use server";

import { redirect } from "next/navigation";

import { storePost } from "@/lib/posts";
import { uploadImage } from "@/lib/cloudinary";

async function createPost(_prevState, formData) {
  // should have name property in the input field
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  let errors = [];

  if (!title || title.trim().length === 0) {
    errors.push("Title is required");
  }

  if (!image || image.size === 0) {
    errors.push("Image is required");
  }

  if (!content || content.trim().length === 0) {
    errors.push("Content is required");
  }

  if (errors.length > 0) {
    return { errors };
  }

  let imageUrl;

  try {
    imageUrl = await uploadImage(image);
  } catch (e) {
    throw new Error(
      "Image upload failed, post was not created. Please try again later."
    );
  }

  await storePost({
    imageUrl,
    title,
    content,
    userId: 1,
  });

  // We can also call this method, inside the component as well.
  // This will take a string that defines the path to which, we wanna redirect.
  redirect("/feed");
}

export { createPost };
