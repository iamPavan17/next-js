"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"), // "title" is the name of the input field.
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  function isInvalidText(text) {
    return !text || text.trim() === "";
  }

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email)
  ) {
    // This throw error calles the error page.
    // throw new Error("Invalid Form values!");

    // Values can be strings, numbers, arrays, objects.
    return {
      message: "Invalid form values!",
    };
  }

  await saveMeal(meal);
  redirect("/meals"); // As the name says, it redirects to the provided URL
}
