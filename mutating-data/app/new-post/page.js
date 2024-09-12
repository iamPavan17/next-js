import { redirect } from "next/navigation";

import { storePost } from "@/lib/posts";
import FormSubmit from "@/components/FormSubmit";

export default function NewPostPage() {
  async function createPost(formData) {
    "use server";

    // should have name property in the input field
    const title = formData.get("title");
    const image = formData.get("image");
    const content = formData.get("content");

    await storePost({
      imageUrl: "",
      title,
      content,
      userId: 1,
    });

    // We can also call this method, inside the component as well.
    // This will take a string that defines the path to which, we wanna redirect.
    redirect("/feed");
  }

  return (
    <>
      <h1>Create a new post</h1>
      <form action={createPost}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        <p className="form-actions">
          <FormSubmit />
        </p>
      </form>
    </>
  );
}
