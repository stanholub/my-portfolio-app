import { createClient, groq } from "next-sanity";
import client from "@/sanity/sanity.client";
import { BlogPost } from "@/types/blog";

// Function to get all blog posts
export async function getBlogPosts(): Promise<BlogPost[]> {
    return client.fetch(
        groq`*[_type == "post"] | order(publishedAt desc){
          _id,
          title,
          "slug": slug.current,
          "mainImage": {
            "image": mainImage.asset->url,
            "alt": mainImage.alt
          },
          category,
          "date": publishedAt,
          readTime,
          excerpt,
        }`
      );
}

// Function to get a single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
    return client.fetch(
        groq`*[_type == "post" && slug.current == $slug][0]{
          _id,
          title,
          "slug": slug.current,
          "mainImage": {
            "image": mainImage.asset->url,
            "alt": mainImage.alt
          },
          category,
          "date": publishedAt,
          readTime,
          excerpt,
          "content": body
        }`,
        { slug }
      );
}
