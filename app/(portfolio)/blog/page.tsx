import { getBlogPosts } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";
import Container from "@/app/components/global/Container";

export const metadata = {
  title: "Writing",
  description: "Thoughts on engineering and building accessible products.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    url: "/blog",
    type: "website",
  },
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main>
      <Container className="pt-8 pb-20">
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
      </Container>
    </main>
  );
}
