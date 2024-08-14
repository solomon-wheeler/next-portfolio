import React from 'react';
import { RoughNotation } from 'react-rough-notation';
import { SpotifyPlaying } from './SpotifyPlaying/spotifyPlaying.component';
import TechStack from './TechStack/TechStack.component';
import ExampleProjects from './ExampleProjects/exampleProjects.component';
import ContactMe from './ContactMe/contactMe.component';
import { DelayTiming } from './homepage.utils';

const modules = [
  { name: 'Computer systems architecture 1 & 2', mark: 81 },
  { name: 'Discrete mathematics and database', mark: 95 },
  { name: 'Principles of programming 1 & 2', mark: 81 },
  { name: 'Mathematics for computation', mark: 76 },
  { name: 'Artificial intelligence', mark: 84 },
  { name: 'Software processes and modelling', mark: 68 },
];

export default function Homepage() {
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900 py-12 pt-16 lg:py-24 xl:py-32 px-2">
        <div className="container px-4 md:px-6 pt-12">
          <div className="grid gap-6 md:gap-8 lg:gap-10">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black dark:text-white">
                👋 I’m Solomon Wheeler
              </h1>
              <h6 className="inline text-lg font-semibold text-black dark:text-white">
                Full Stack Developer
              </h6>
            </div>
            <div className="space-y-4">
              <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                {' '}
                An{' '}
                <RoughNotation
                  type="box"
                  color="#ADD8E6"
                  show={true}
                  animationDelay={DelayTiming(0)}
                >
                  outgoing
                </RoughNotation>
                ,{' '}
                <RoughNotation
                  type="underline"
                  color="#ADD8E6"
                  show={true}
                  animationDelay={DelayTiming(1)}
                >
                  highly motivated
                </RoughNotation>
                <RoughNotation
                  type="circle"
                  color="#ADD8E6"
                  show={true}
                  animationDelay={DelayTiming(2)}
                >
                  , team worker
                </RoughNotation>{' '}
                ,with a strong ability for{' '}
                <RoughNotation
                  type="underline"
                  color="#ADD8E6"
                  show={true}
                  animationDelay={DelayTiming(3)}
                >
                  communication{' '}
                </RoughNotation>
                and supporting the development of others. Highly technically
                competent , with a specific interest in data science, machine
                learning and problem-solving. An exceptional academic record and
                the{' '}
                <RoughNotation
                  type="circle"
                  color="#ADD8E6"
                  show={true}
                  animationDelay={DelayTiming(4)}
                >
                  enthusiasm{' '}
                </RoughNotation>{' '}
                to adapt to new challenges. Currently studying a degree in
                Computer Science at the University of Bath.
              </p>
              <div className="grid gap-2 md:grid-cols-2">
                <div>
                  <h3 className="inline text-lg font-semibold text-black dark:text-white">
                    Name
                  </h3>
                  <p className="text-black dark:text-white">
                    🧑‍💻Solomon Wheeler
                  </p>
                </div>
                <div>
                  <h3 className="inline text-lg font-semibold text-black dark:text-white">
                    Location
                  </h3>
                  <p className="text-black dark:text-white">
                    📌London/Bath, UK
                  </p>
                </div>
                <div>
                  <h3 className="inline text-lg font-semibold text-black dark:text-white">
                    Email
                  </h3>
                  <p className="text-black dark:text-white">
                    📧
                    <a
                      href="mailto:hello@solomonwheeler.co.uk"
                      className="underline"
                    >
                      hello@solomonwheeler.co.uk
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="inline text-lg font-semibold text-black dark:text-white">
                    Website
                  </h3>
                  <p className="text-black dark:text-white">
                    🏡
                    <a
                      href="https://solomonwheeler.co.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      solomonwheeler.co.uk
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TechStack />

      <section className="py-12 md:py-24 lg:py-32 xl:py-48" key="section3">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-black dark:text-white tracking-tighter sm:text-4xl md:text-5xl">
                Qualifications
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I am currently studying a degree in Computer Science at the
                University of Bath. Here are some of the modules I have studied:
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white shadow-md rounded-md dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-black dark:text-white">
                  Modules
                </h2>
                {modules.map((module, index) => (
                  <li className="text-black dark:text-white" key={index}>
                    {module.name}
                  </li>
                ))}
              </div>
              <div className="p-4 bg-white shadow-md rounded-md dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-black dark:text-white">
                  Marks
                </h2>
                {modules.map((module, index) => (
                  <li className="text-black dark:text-white" key={index}>
                    {module.mark}%
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <SpotifyPlaying />
      <ExampleProjects />
      <ContactMe />
    </>
  );
}
