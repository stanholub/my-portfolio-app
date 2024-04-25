import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { HiOutlineCommandLine } from "react-icons/hi2";
import Job from "./components/Job";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialIcons: { [key: string]: JSX.Element } = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
};

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
        {profile &&
          profile.map((data) => (
            <div key={data._id} className="lg:max-w-2xl max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                {data.headline}
              </h1>
              <p className="text-base text-zinc-400 leading-relaxed">
                {data.shortBio}
              </p>
              <ul className="flex items-center gap-x-6 my-10">
                {Object.entries(data.socialLinks)
                  .sort()
                  .map(([key, value], id) => (
                    <li key={id}>
                      <a
                        href={value}
                        rel="noreferer noopener"
                        className="flex items-center gap-x-3 mb-5 hover:text-cyan-400 text-xl duration-300"
                      >
                        {socialIcons[key]}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}

        <HiOutlineCommandLine className="text-9xl text-slate-200" />
      </section>
      <Job />
    </main>
  );
}
