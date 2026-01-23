export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;       // ISO date string mostly
  readTime: string;   // e.g. "5 min read"
  category: string;   // e.g. "Engineering", "Design"
  content: string;    // HTML content for now
  imageUrl?: string;  // Optional cover image URL
}
