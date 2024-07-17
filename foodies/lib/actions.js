"use server";

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"), // "title" is the name of the input field.
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  // this will be shown in the terminal as this is the server function
  console.log(meal);
}
