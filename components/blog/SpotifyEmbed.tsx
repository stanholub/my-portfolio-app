"use client";

interface SpotifyEmbedProps {
  url: string;
}

export default function SpotifyEmbed({ url }: SpotifyEmbedProps) {
  // Validate that this is actually a Spotify embed URL
  if (!url || !url.includes("open.spotify.com/embed")) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 my-6">
        <p className="text-red-600 dark:text-red-400 text-sm">
          Invalid Spotify embed URL
        </p>
      </div>
    );
  }

  // Determine height based on embed type
  // Episodes and shows use compact player (152px)
  // Tracks, albums, and playlists use full player (352px)
  const isCompact = url.includes("/episode/") || url.includes("/show/");
  const height = isCompact ? 152 : 352;

  return (
    <div className="my-8">
      <iframe
        src={url}
        width="100%"
        height={height}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-xl"
      />
    </div>
  );
}
