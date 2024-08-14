import React, { useState } from 'react';
import { RoughNotation } from 'react-rough-notation';
import { useInView } from 'react-intersection-observer';
import {
  ReactIcon,
  PythonIcon,
  CIcon,
  KubernetesIcon,
  NestJSIcon,
  JavaSciptIcon,
  CodeIcon,
  PromIcon,
  NextIcon,
  GithubIcon,
  WindIcon,
  DatabaseIcon,
} from '../../Icons/proggramingLanguage.icon';
import { DelayTiming } from '../Homepage/homepage.utils';

const techStack = [
  {
    category: 'Front end/ Full stack',
    items: [
      {
        name: 'React',
        description:
          'Experience building, testing and deploying web applications with React, including state management, hooks, and server-side rendering.',
        icon: <ReactIcon />,
      },
      {
        name: 'Next.js',
        description: `Experience in building server-rendered React applications (like the one you're looking at!) with Next.js, leveraging file-based routing, API routes, and static site generation.`,
        icon: <NextIcon />,
      },
      {
        name: 'Tailwind CSS',
        description: `Experienced in using Tailwind CSS to build responsive UIs (like the one you're looking at!)`,
        icon: <WindIcon />,
      },
      {
        name: 'C',
        description:
          'Projects completed in C, including memory allocation, and systems controls. For instance building a home security system, doorbell, and smart weighing scale. ',
        icon: <CIcon />,
      },
    ],
  },
  {
    category: 'Back end',
    items: [
      {
        name: 'NestJS',
        description:
          'Experience building scalable, maintainable APIs with NestJS, including authentication, validation, and database integration, as well as maintaning libraries',
        icon: <NestJSIcon />,
      },
      {
        name: 'TypeScript/JavaScript',
        description:
          'Extensive experience using TypeScript to build robust, scalable, and maintainable applications across the full stack.',
        icon: <JavaSciptIcon />,
      },
      {
        name: 'Python',
        description:
          'Experienced in using Python for data science and machine learning models, including popular libraries like Flask and PyTorch.',
        icon: <PythonIcon />,
      },
      {
        name: 'Databases',
        description:
          'Experience with MSSQL, including relational databases, querying and optimisation. This was done using ORMs, functions, views and stored procedures. As well as noSQL databases like Firebase.',
        icon: <DatabaseIcon />,
      },
      {
        name: 'Java',
        description: 'Experience with Java, including multithreading and GUIs',
        icon: <CodeIcon />,
      },
    ],
  },
  {
    category: 'DevOps',
    items: [
      {
        name: 'CI',
        description:
          'Involvement with CI pipelines, including GitHub Actions, Gitlab pipelines, and Jenkins. For instance, setting up a CI pipeline for this website, including build, linting and testing ',
        icon: <GithubIcon />,
      },
      {
        name: 'CD',
        description:
          'Involvement with CD, for instance using Vercel to deploy this website',
        icon: <CodeIcon />,
      },
      {
        name: 'Kubernetes',
        description:
          'Experience in using Docker to containerize and deploy applications, including experience with Docker Compose and container orchestration platforms like Kubernetes.',
        icon: <KubernetesIcon />,
      },

      {
        name: 'Observability',
        description:
          'Experience with observability tools like Grafana and Prometheus, (try typing /metrics at the end of the URL!)',
        icon: <PromIcon />,
      },
    ],
  },
];

export default function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const [openSections, setOpenSections] = useState([false, false, false]);

  const toggleSection = (index: number) => {
    setOpenSections((prev) => {
      const newOpenSections = [...prev];
      newOpenSections[index] = !newOpenSections[index];
      return newOpenSections;
    });
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black dark:text-white">
            My Tech Stack
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-black dark:text-white">
            I&apos;m proficient in a wide range of languages, frameworks, and
            tools.{' '}
          </p>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-black dark:text-white">
            <span className="font-bold  ">
              Click on each section for more information
            </span>
          </p>
        </div>
        {techStack.map((category, index) => (
          <div
            key={index}
            className={`p-4 border-dashed border-2 border-gray-300 rounded-lg transition-colors duration-300 ease-in-out 
         ${index % 2 === 0 ? 'hover:bg-gray-100 dark:hover:bg-gray-700' : 'hover:bg-gray-200 dark:hover:bg-gray-600'}`}
            style={{ minWidth: '50vw' }}
          >
            <h3
              className="text-2xl font-semibold text-black dark:text-white mb-4 cursor-pointer"
              onClick={() => toggleSection(index)}
            >
              {category.category}
            </h3>

            {openSections[index] && (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
                {category.items.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="relative overflow-hidden rounded-lg bg-card p-6 transition-transform duration-300 ease-in-out group hover:shadow-xl hover:-translate-y-2 bg-gray-50 dark:bg-gray-900"
                  >
                    <div
                      ref={ref}
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-primary"
                    >
                      {tech.icon}
                    </div>
                    <RoughNotation
                      type="highlight"
                      color="#007BFF"
                      show={inView}
                      animationDelay={DelayTiming(techIndex)}
                    >
                      <h3 className="mt-4 text-lg font-semibold text-black dark:text-white">
                        {tech.name}
                      </h3>
                    </RoughNotation>

                    <p className="text-sm text-muted-foreground text-black dark:text-white">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
