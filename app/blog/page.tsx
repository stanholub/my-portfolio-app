import { getBlogPosts } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";

export const metadata = {
  title: "Writing | Stanislav Portfolio",
  description: "Thoughts on engineering and building accessible products.",
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="max-w-7xl mx-auto px-6 pt-8 pb-20">
      <header className="mb-12 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-display font-bold text-gray-900 dark:text-stone-100 mb-2">
          Writing
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
          Thoughts on engineering and building accessible products.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
