import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getBlogPost } from "@/lib/blog";
import { PortableText } from "@portabletext/react";
import { MdArrowBack } from "react-icons/md";
import ShareButtons from "@/components/blog/ShareButtons";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);
  if (!post) return { title: "Article Not Found" };
  
  return {
    title: `${post.title} | Stanislav Portfolio`,
    description: post.excerpt,
  };
}

const CATEGORY_COLORS: Record<string, string> = {
  Engineering: "bg-orange-50 text-orange-600",
  Design: "bg-purple-50 text-purple-600",
  Career: "bg-teal-50 text-teal-600",
  Tutorials: "bg-blue-50 text-blue-600",
};

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const categoryColor = CATEGORY_COLORS[post.category] || "bg-gray-50 text-gray-600";

  return (
    <main className="max-w-xl mx-auto px-6 pt-8 pb-32">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="w-10 h-10 -ml-2 flex items-center justify-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-stone-100 hover:bg-gray-50 dark:hover:bg-subtle-dark rounded-full transition-colors"
        >
          <MdArrowBack className="text-2xl" />
        </Link>
      </div>

      <header className="mb-8 animate-fade-in">
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold uppercase tracking-wider ${categoryColor}`}
          >
            {post.category}
          </span>
          <span className="text-xs text-gray-400 font-medium flex items-center gap-2">
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric"
            })}
            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
            {post.readTime}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-stone-100 leading-tight mb-6">
          {post.title}
        </h1>
        
        {/* Cover Image */}
        {post.mainImage ? (
          <div className="w-full aspect-[16/9] bg-gray-100 dark:bg-surface-dark border border-gray-100 dark:border-subtle-dark rounded-2xl mb-8 relative overflow-hidden">
            <Image
              src={post.mainImage.image}
              alt={post.mainImage.alt || post.title}
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        ) : (
        <div className="w-full aspect-[16/9] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-surface-dark dark:to-subtle-dark border border-gray-100 dark:border-subtle-dark rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden group">
          <svg
            className="w-16 h-16 text-gray-200 dark:text-gray-600 group-hover:text-gray-300 dark:group-hover:text-gray-500 transition-colors duration-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
          </svg>
        </div>
        )}
      </header>

      <article 
        className="prose prose-lg prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-headings:font-display prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-stone-100 max-w-none dark:prose-invert"
      >
        <PortableText value={post.content} />
      </article>
      
      <hr className="border-gray-100 dark:border-subtle-dark my-10" />
      
      {/* Share Section */}
      <div className="mb-12">
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
          Share this article
        </h4>
        <ShareButtons title={post.title} />
      </div>
    </main>
  );
}