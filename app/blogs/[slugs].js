  async function fetchPost(id) {
    const postResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  
    console.log("Fetching blog post with id: ", id);
  
    return postResponse.json();
  }
  
  export default async function BlogPost({ params }) {
    const { id } = params;
  
    const post = await fetchPost(id);
  
    console.log("Rerendering BlogPost component");
  
    return (
      <div className="flex flex-col p-12">
        <h1 className="text-5xl max-w-4xl font-bold leading-tight">
          {post.title}
        </h1>
        <article className="text-lg font-medium max-w-4xl mt-8 text-gray-200">
          {post.body}
        </article>
      </div>
    );
  }