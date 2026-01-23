import { getJob } from "@/sanity/sanity.query";
import type { JobType } from "@/types";

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

export default async function Job() {
  const jobs: JobType[] = await getJob();

  return (
    <section>
      <h2 className="text-2xl font-display font-bold text-stone-900 dark:text-white mb-6">Work Experience</h2>
      <div className="space-y-6 relative border-l border-stone-200 dark:border-stone-800 ml-3 pl-8">
        {jobs.sort((a, b) => a.startDate < b.startDate ? 1 : -1).map((data) => {
          const isPresent = !data.endDate;
          return (
            <div key={data._id} className="relative">
              <span className={`absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background-light dark:border-background-dark ${isPresent ? 'bg-primary' : 'bg-stone-300 dark:bg-stone-700'}`}></span>
              <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <a href={data.url} rel="noreferrer noopener" className="hover:text-primary transition-colors duration-300">
                  <h3 className="text-xl font-bold text-stone-900 dark:text-white">{data.name}</h3>
                </a>
                <span className={`text-xs font-semibold tracking-wider uppercase px-2 py-1 rounded w-fit mt-1 sm:mt-0 ${isPresent ? 'text-primary bg-primary/10' : 'text-stone-500 dark:text-stone-500 bg-stone-100 dark:bg-stone-800'}`}>
                  {data?.startDate ? formatDate(data.startDate.toString()) : "-"} -{" "}
                  {data?.endDate ? formatDate(data.endDate.toString()) : "Present"}
                </span>
              </div>
              <p className="text-stone-500 dark:text-stone-300 font-medium text-sm mb-3">{data.jobTitle}</p>
              <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                {data.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
