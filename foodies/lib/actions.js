"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

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
  /*
    revalidatePath function allows you to remove cached data on-demand for a specific path.

    Example:
        If we know that we want to visit the meals page after submiting a meal,
        and that the meals page, depends on the data that changes. So we can tell,
        NextJS to revalidate the /meals page. And with that, the path would be revalidated. 
            -> revalidatePath("/meals");
        By default, onlt this path will be revalidated, no nested paths. So if we had
        some nested path there in our meals folder, that also depends on all the meals
        data, We would have to revalidate that separately.

        Alternatively, we can pass a second argument to revalidate function, and set it to
        layout. 
            -> revalidatePath("/meals", layout);

        The default is page, -> revalidatePath("/meals", page); // page is optional.
        which means only the page for the path will be revalidated.
        If we set it to layout as a second argument, then the whole pages under meals folder,
        will be revalidated, which as we learned, also wraps nested pages and therefore, with
        this, all nested pages will be revalidated as well.

        And revalidated simply means that NextJS removes the cache that is associated 
        with those pages.
  */
  revalidatePath("/meals");
  redirect("/meals"); // As the name says, it redirects to the provided URL
}
