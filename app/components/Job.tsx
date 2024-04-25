import Image from "next/image";
import { getJob } from "@/sanity/sanity.query";
import type { JobType } from "@/types";

export default async function Job() {
  const jobs: JobType[] = await getJob();

  return (
    <section className="mt-32">
      <div className="mb-16">
        <h2 className="font-semibold text-4xl mb-4">Work Experience</h2>
      </div>

      <div className="flex justify-between gap-12">
        {jobs.sort((a, b) => a.startDate < b.startDate ? 1 : -1).map((data) => (
          <div
            key={data._id}
            className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative hover:text-cyan-400 duration-300"
          >
            <div className="flex flex-col items-start">
              <a href={data.url} rel="noreferrer noopener">
                <h3 className="text-xl font-bold">{data.name}</h3>
              </a>
              <p className="text-zinc-100">{data.jobTitle}</p>
              <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                {data?.startDate ? data.startDate.toString() : "-"} -{" "}
                {data?.endDate ? data.endDate.toString() : "Present"}
              </small>
              <p className="text-base text-zinc-400 my-4">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
