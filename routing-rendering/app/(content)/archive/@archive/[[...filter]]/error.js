"use client";

export default function FilterError({ error }) {
  return (
    <div id="error">
      <h2>An error occurred!</h2>
      {/* error.message contains, the text which is passed in new Error() method. */}
      {/* As per our example, the value will be - Invalid filter. */}
      <p>{error.message}</p>
    </div>
  );
}
