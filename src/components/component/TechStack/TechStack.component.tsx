import React, { useState } from 'react';
import {
  ReactIcon,
  PythonIcon,
  CIcon,
  KubernetesIcon,
  NestJSIcon,
  JavaSciptIcon,
  CodeIcon,
} from '../../Icons/proggramingLanguage.icon';

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
        description: `Experience in building server-rendered React applications (like the one you're looking at) with Next.js, leveraging file-based routing, API routes, and static site generation.`,
        icon: <CodepenIcon />,
      },
      {
        name: 'Tailwind CSS',
        description:
          'Experienced in using Tailwind CSS to build responsive UIs',
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
          'Experience with MSQL, including relational databases, querying and optimisation. This was done using ORMs, functions, views and stored procedures. As well as noSQL databases like Firebase.',
        icon: <DatabaseIcon />,
      },
      {
        name: 'Java',
        description: 'Experience with Java',
        icon: <DatabaseIcon />,
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
        icon: <CodeIcon />,
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
          'Some experience in using Docker to containerize and deploy applications, including experience with Docker Compose and container orchestration platforms like Kubernetes.',
        icon: <KubernetesIcon />,
      },

      {
        name: 'Observability',
        description:
          'Experience with observability tools like Grafana and Prometheus, (try typing /metrics at the end of the URL)',
        icon: <NestJSIcon />,
      },
    ],
  },
];

export default function TechStack() {
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
            I'm proficient in a wide range of languages, frameworks, and tools.
          </p>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-black dark:text-white">
            Click on each section for more information{' '}
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
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                      {tech.icon}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black dark:text-white">
                      {tech.name}
                    </h3>
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
function CodepenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  );
}

function DatabaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function DockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 8h20" />
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M6 16h12" />
    </svg>
  );
}

function NetworkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  );
}

function PaletteIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

function TypeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  );
}

function WindIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}
