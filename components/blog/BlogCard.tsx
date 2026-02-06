"use client";

import Link from "next/link";
import { BlogPost } from "@/types/blog";
import { MdArrowForward } from "react-icons/md";

interface BlogCardProps {
  post: BlogPost;
}

const CATEGORY_COLORS: Record<string, string> = {
  Engineering: "bg-orange-50 text-orange-600",
  Design: "bg-purple-50 text-purple-600",
  Career: "bg-teal-50 text-teal-600",
  Tutorials: "bg-blue-50 text-blue-600",
};

export default function BlogCard({ post }: BlogCardProps) {
  const categoryColor = CATEGORY_COLORS[post.category] || "bg-gray-50 text-gray-600";

  return (
    <article className="group relative bg-white dark:bg-surface-dark border border-gray-200 dark:border-subtle-dark rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/40 hover:-translate-y-1">
      <div className="flex justify-between items-start mb-3">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold ${categoryColor}`}
        >
          {post.category}
        </span>
        <span className="text-xs text-gray-400 font-medium">
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>
      <h2 className="text-xl font-display font-bold text-gray-900 dark:text-stone-100 mb-2 group-hover:text-primary transition-colors">
        {post.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
        {post.excerpt}
      </p>
      <div className="flex items-center text-primary text-sm font-bold">
        Read Article
        <MdArrowForward className="text-sm ml-1 transition-transform group-hover:translate-x-1" />
      </div>
      {/* Absolute link overlay for better accessibility/UX on cards */}
      <Link
        href={`/blog/${post.slug}`}
        aria-label={`Read full article: ${post.title}`}
        className="absolute inset-0 z-10"
      />
    </article>
  );
}
