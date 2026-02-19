import { PortableTextBlock } from "sanity";

export interface BlogPost {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;       // ISO date string
  readTime: string;   // e.g. "5 min read"
  category: string;   // e.g. "Engineering", "AI"
  mainImage?: {
    image: string;
    alt?: string;
  };
  content: PortableTextBlock[];
}