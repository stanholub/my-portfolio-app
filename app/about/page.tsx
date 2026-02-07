import Image from "next/image";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";

import {
  SiReact,
  SiAngular,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiExpress,
  SiNextdotjs
} from "react-icons/si";

const skillIcons: { [key: string]: JSX.Element } = {
  react: <SiReact />,
  angular: <SiAngular />,
  javascript: <SiJavascript />,
  typescript: <SiTypescript />,
  html: <SiHtml5 />,
  css: <SiCss3 />,
  sass: <SiSass />,
  tailwindcss: <SiTailwindcss />,
  express: <SiExpress />,
  nextjs: <SiNextdotjs />,
};

export default async function About() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="px-6 space-y-24 max-w-4xl mx-auto pt-10">
      {profile &&
        profile.map((data) => (
          <div key={data._id}>
            <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 justify-items-center">
              <div className="order-2 lg:order-none">
                <h1 className="lg:text-5xl text-4xl lg:leading-tight basis-1/2 font-display font-bold mb-8 text-stone-900 dark:text-white">
                  I&apos;m {data.fullName}. I live in {data.location}.
                </h1>

                <div className="flex flex-col gap-y-3 text-stone-600 dark:text-stone-400 leading-relaxed text-lg">
                  <PortableText value={data.fullBio} />
                </div>
              </div>

              <div className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
                <div>
                  <Image
                    className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top bg-stone-100 dark:bg-stone-800"
                    src={data.profileImage.image}
                    width={400}
                    height={600}
                    quality={100}
                    alt={data.profileImage.alt}
                  />
                </div>

              </div>
            </section>

            <section className="mt-24 max-w-2xl">
              <h2 className="font-display font-bold text-4xl mb-4 text-stone-900 dark:text-white">
                To build beautiful software, I use these technologies.
              </h2>

              <ul className="flex flex-wrap items-center justify-start gap-6 mt-8">
                {data.skills.map((skill, id) => (
                  <li
                    key={id}
                    className="text-stone-400 hover:text-primary duration-300 text-5xl transition-colors"
                  >
                    {skillIcons[skill.toLocaleLowerCase()] || skill}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        ))}
    </main>
  );
}
