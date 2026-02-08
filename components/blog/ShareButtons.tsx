"use client";

import { useEffect, useState } from "react";
import {
  FaXTwitter,
  FaLinkedin,
  FaThreads,
  FaShareNodes,
} from "react-icons/fa6";

interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  if (!url) {
    return (
      <div className="flex gap-4">
        {[FaXTwitter, FaLinkedin, FaThreads, FaShareNodes].map((Icon, i) => (
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
    <div className="flex gap-4 items-center">
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
      <button
        onClick={handleNativeShare}
        className={`text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-200 ${
          copied
            ? "text-green-500 hover:text-green-600 dark:text-green-400"
            : ""
        }`}
        aria-label="Share Link"
      >
        <FaShareNodes size={24} />
      </button>
    </div>
  );
}
