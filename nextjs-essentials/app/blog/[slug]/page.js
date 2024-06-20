export default function BlogPostPage(props) {
  // O/P, If we click on Post 2: { params: { slug: 'post-2' }, searchParams: {} }
  console.log(props);
  return (
    <main>
      <h1>Blog Page</h1>
      <p>{props.params.slug}</p>
    </main>
  );
}
