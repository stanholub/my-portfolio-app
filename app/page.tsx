import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import Job from "./components/Job";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdTerminal } from "react-icons/md";

const socialIcons: { [key: string]: JSX.Element } = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  twitter: <FaTwitter />,
  instagram: <FaInstagram />,
  facebook: <FaFacebook />,
};

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="px-6 space-y-24 max-w-4xl mx-auto pt-10">
      <section className="flex flex-col items-start gap-6 relative">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="w-20 h-20 bg-white dark:bg-stone-800 rounded-2xl flex items-center justify-center shadow-lg border border-stone-200 dark:border-stone-700 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <MdTerminal className="text-4xl text-primary" />
        </div>

        {profile &&
          profile.map((data) => (
            <div key={data._id} className="space-y-4 max-w-lg z-10">
              <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight text-stone-900 dark:text-white">
                {data.headline}
              </h1>
              <p className="text-stone-600 dark:text-stone-400 text-lg leading-relaxed">
                {data.shortBio}
              </p>
              <div className="flex gap-4 pt-2">
                {Object.entries(data.socialLinks)
                  .sort()
                  .map(([key, value], id) => (
                    <a
                      key={id}
                      href={value}
                      rel="noreferer noopener"
                      target="_blank"
                      className="p-3 bg-white dark:bg-surface-dark rounded-full shadow-sm border border-stone-200 dark:border-stone-700 hover:border-primary/50 hover:text-primary transition-all text-stone-600 dark:text-stone-300"
                    >
                      <span className="text-xl">
                        {socialIcons[key.toLowerCase()] || socialIcons[key] || null}
                      </span>
                    </a>
                  ))}
              </div>
            </div>
          ))}
      </section>
      <Job />
    </main>
  );
}
