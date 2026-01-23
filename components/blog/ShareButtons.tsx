"use client";

import { useEffect, useState } from "react";
import { FaXTwitter, FaLinkedin, FaThreads } from "react-icons/fa6";

interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  if (!url) {
    return (
       <div className="flex gap-4">
         {[FaXTwitter, FaLinkedin, FaThreads].map((Icon, i) => (
            <div key={i} className="text-gray-300 dark:text-gray-700">
               <Icon size={24} />
            </div>
         ))}
       </div>
    );
  }

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      name: "X (Twitter)",
      icon: FaXTwitter,
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: "hover:text-black dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "hover:text-[#0077b5] dark:hover:text-[#0a66c2]",
    },
    {
      name: "Threads",
      icon: FaThreads,
      href: `https://www.threads.net/intent/post?text=${encodedTitle}%20${encodedUrl}`,
      color: "hover:text-black dark:hover:text-white",
    },
  ];

  return (
    <div className="flex gap-4">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-400 transition-colors ${link.color}`}
          aria-label={`Share on ${link.name}`}
        >
          <link.icon size={24} />
        </a>
      ))}
    </div>
  );
}
