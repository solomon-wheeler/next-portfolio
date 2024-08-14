import React from 'react';
import { RoughNotation } from 'react-rough-notation';
import { SpotifyPlaying } from '../SpotifyPlaying/spotifyPlaying.component';
import TechStack from '../TechStack/techStack.component';
import ExampleProjects from '../ExampleProjects/exampleProjects.component';
import ContactMe from '../ContactMe/contactMe.component';
import { DelayTimingWithInitial } from './homepage.utils';
import './homepage.style.css';
import Typewriter from 'typewriter-effect';
import Qualifications from '../Qualifications/qualifications.component';
export default function Homepage() {
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900 py-12 pt-16 lg:py-24 xl:py-32 px-2">
        <div className="container px-4 md:px-6 pt-12">
          <div className="grid gap-6 md:gap-8 lg:gap-10">
            <div className="space-y-2">
              <h1 className="text-3xl pb-2 font-bold tracking-tighter sm:text-4xl md:text-5xl text-black dark:text-white h-24 flex items-center justify-center">
                <Typewriter
                  options={{
                    strings: [
                      'Hi',
                      `I'm Solomon Wheeler`,
                      'Welcome to my portfolio',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
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
                  animationDelay={DelayTimingWithInitial(0)}
                >
                  outgoing
                </RoughNotation>
                ,{' '}
                <RoughNotation
                  type="underline"
                  color="#ADD8E6"
                  show={true}
                  animationDelay={DelayTimingWithInitial(1)}
                >
                  highly motivated
                </RoughNotation>
                <RoughNotation
                  type="circle"
                  color="#ADD8E6"
                  show={true}
                  animationDelay={DelayTimingWithInitial(2)}
                >
                  , team worker
                </RoughNotation>{' '}
                ,with a strong ability for{' '}
                <RoughNotation
                  type="underline"
                  color="#ADD8E6"
                  show={true}
                  animationDelay={DelayTimingWithInitial(3)}
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
                  animationDelay={DelayTimingWithInitial(4)}
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
      <Qualifications />

      <SpotifyPlaying />
      <ExampleProjects />
      <ContactMe />
    </>
  );
}
