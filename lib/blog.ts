import { BlogPost } from "@/types/blog";

const BLOG_POSTS: BlogPost[] = [
  {
    slug: "migrating-from-redux-to-zustand",
    title: "Migrating from Redux to Zustand",
    excerpt: "Why we decided to switch our state management library and the performance improvements we saw in our main dashboard.",
    date: "2023-10-24",
    readTime: "5 min read",
    category: "Engineering",
    content: `
      <p class="text-lg leading-relaxed text-gray-500 font-medium mb-8">
        State management has always been a hot topic in the React ecosystem. For years, Redux was the undisputed king, offering a robust solution for complex applications. However, the boilerplate often felt like overkill.
      </p>
      <p class="leading-relaxed">
        Recently, we decided to migrate our main dashboard to <span class="font-semibold text-gray-900">Zustand</span>. The primary motivation was simplicity. We wanted to reduce the mental overhead for new engineers joining the team and strip away layers of abstraction that weren't adding value to our users.
      </p>
      <h3 class="text-xl font-bold mb-4 mt-10">Why the switch?</h3>
      <p class="leading-relaxed">
        Zustand provides a minimal API that is incredibly easy to grasp. It uses hooks as the primary consumption method, which feels very natural in a modern React codebase. Unlike Redux, there's no need to wrap your app in providers.
      </p>
      <div class="my-10 rounded-xl bg-gray-900 p-5 overflow-hidden shadow-xl border border-gray-800">
        <div class="flex items-center justify-between mb-4 border-b border-gray-800 pb-3">
          <div class="flex gap-1.5">
            <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-green-500"></div>
          </div>
          <span class="text-[10px] text-gray-500 font-mono uppercase tracking-wider">store.js</span>
        </div>
        <pre class="font-mono text-sm text-gray-300 leading-relaxed overflow-x-auto no-scrollbar">import create from 'zustand'

const useStore = create(set => ({
  bears: 0,
  increasePopulation: () => 
    set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
}))

export default useStore</pre>
      </div>
      <p class="leading-relaxed">
        The migration process was surprisingly smooth. We started by moving our global UI state—modals, toasts, and sidebar visibility—and gradually tackled the more complex data fetching layers. The reduction in code size was immediately noticeable, dropping our bundle size by roughly 12kb.
      </p>
    `
  },
  {
    slug: "building-accessible-components",
    title: "Building Accessible Components",
    excerpt: "A deep dive into ARIA labels, keyboard navigation, and making the web open for everyone regardless of ability.",
    date: "2023-10-15",
    readTime: "7 min read",
    category: "Design",
    content: `
      <p class="text-lg leading-relaxed text-gray-500 font-medium mb-8">
        Accessibility should never be an afterthought. It is a fundamental part of the web.
      </p>
      <p class="leading-relaxed">
        In this article, we'll explore how to build components that are inclusive by default. We will look at semantic HTML, managing focus with JavaScript, and ensuring sufficient color contrast.
      </p>
    `
  },
  {
    slug: "the-senior-engineer-mindset",
    title: "The Senior Engineer Mindset",
    excerpt: "Moving beyond code: how to think about systems, business value, and effective mentorship within your team.",
    date: "2023-10-15",
    readTime: "6 min read",
    category: "Career",
    content: `
      <p class="text-lg leading-relaxed text-gray-500 font-medium mb-8">
        Becoming a senior engineer isn't just about years of experience or knowing every framework. It is about impact.
      </p>
      <p class="leading-relaxed">
        We discuss the shift from individual contribution to force multiplication—how your work can help others do their best work.
      </p>
    `
  },
  {
    slug: "tailwind-css-best-practices",
    title: "Tailwind CSS Best Practices",
    excerpt: "Structuring your utility classes, using @apply responsibly, and maintaining a clean design system.",
    date: "2023-09-28",
    readTime: "4 min read",
    category: "Tutorials",
    content: `
      <p class="text-lg leading-relaxed text-gray-500 font-medium mb-8">
        Tailwind CSS gives you superpowers, but with great power comes great responsibility.
      </p>
      <p class="leading-relaxed">
        We'll cover how to avoid "utility soup", when to extract components, and how to configure your design tokens effectively.
      </p>
    `
  }
];

export async function getBlogPosts(): Promise<BlogPost[]> {
  // Simulate network delay if needed, or just return static
  return BLOG_POSTS;
}

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
