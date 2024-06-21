export default function MealPage({ params }) {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        This is a Meal page
      </h1>
      <h2 style={{ color: "white", textAlign: "center" }}>{params.slug}</h2>
    </main>
  );
}
