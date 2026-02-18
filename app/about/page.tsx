import Image from "next/image";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import Container from "@/app/components/global/Container";
import Tooltip from "@/app/components/global/Tooltip";
import { PortableText } from "@portabletext/react";
import { createBasePortableTextComponents } from "@/components/portableText/basePortableTextComponents";
import { Metadata } from "next";
import { stripHtml } from "@/lib/utils";

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
  SiNextdotjs,
} from "react-icons/si";
import React from "react";

export const metadata: Metadata = {
  title: "About | Stanislav Holub Portfolio",
  description:
    "Learn more about Stanislav Holub, a Frontend Developer passionate about building beautiful web applications.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Stanislav Holub Portfolio",
    description:
      "Learn more about Stanislav Holub, a Frontend Developer passionate about building beautiful web applications.",
    url: "https://www.pigeondev.eu/about",
    type: "profile",
  },
};

const skillIcons: { [key: string]: React.JSX.Element } = {
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

const aboutComponents = createBasePortableTextComponents({
  normalClassName: "",
  bulletListClassName: "mb-4 list-disc space-y-1 pl-5",
  numberListClassName: "mb-4 list-decimal space-y-1 pl-5",
  strongClassName: "font-semibold text-stone-800 dark:text-stone-200",
  linkClassName:
    "text-primary underline decoration-primary/40 underline-offset-2 transition-colors hover:decoration-primary",
});

const SURNAME_EXPLANATION_FALLBACK =
  "In my native language, my surname Holub translates to Pigeon. While I don't deliver messages via leg-straps anymore, I still specialize in delivering high-performance code and seamless user experiences.";

export default async function About() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main>
      <Container className="space-y-24 pt-10 pb-24">
        {profile &&
          profile.map((data) => {
            let firstName = data.firstName;
            let lastName = data.lastName;

            if (!firstName && data.fullName) {
              const parts = data.fullName.split(" ");
              firstName = parts[0];
              if (parts.length > 1) {
                lastName = parts.slice(1).join(" ");
              }
            }

            const tooltipText =
              data.surnameExplanation || SURNAME_EXPLANATION_FALLBACK;

            const jsonLd = {
              "@context": "https://schema.org",
              "@type": "Person",
              name: stripHtml(data.fullName),
              jobTitle: stripHtml(data.headline),
              image: data.profileImage.image,
              description: stripHtml(data.shortBio),
              url: "https://www.pigeondev.eu/about",
              sameAs: Object.values(data.socialLinks),
              email: data.email,
              address: {
                "@type": "PostalAddress",
                addressLocality: stripHtml(data.location),
              },
              knowsAbout: data.skills,
            };

            return (
              <div key={data._id}>
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd)
                      .replace(/</g, "\\u003c")
                      .replace(/>/g, "\\u003e"),
                  }}
                />
                <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 justify-items-center">
                  <div className="order-2 lg:order-0">
                    <h1 className="lg:text-5xl text-4xl lg:leading-tight basis-1/2 font-display font-bold mb-8 text-stone-900 dark:text-white">
                      I&apos;m {firstName}
                      {lastName ? (
                        <>
                          {" "}
                          <Tooltip content={tooltipText}>{lastName}</Tooltip>
                        </>
                      ) : null}
                      , a Frontend Developer in {data.location}.
                    </h1>

                    <div className="flex flex-col gap-y-3 text-stone-600 dark:text-stone-400 leading-relaxed text-lg">
                      <PortableText
                        value={data.fullBio}
                        components={aboutComponents}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-0 mb-12">
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

                <section className="mt-24 max-w-4xl mx-auto">
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
            );
          })}
      </Container>
    </main>
  );
}
