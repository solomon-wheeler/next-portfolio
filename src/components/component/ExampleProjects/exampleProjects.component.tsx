import React from 'react';
import Link from 'next/link';

export default function ExampleProjects() {
  return (
    <section
      className="bg-gray-50 dark:bg-gray-900 py-12 md:py-24 lg:py-32 xl:py-48"
      key="section4"
    >
      <div className="container px-4 md:px-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl text-black dark:text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
              My Projects
            </h2>
            <p className="text-gray-500 text-black dark:text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Here are some of the projects I’ve been working on.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            <div className="p-4 bg-white shadow-md rounded-md dark:bg-gray-800">
              <Link
                className="font-medium underline text-black dark:text-white"
                href="#"
                aria-label="project"
              >
                Sudoku Solver
              </Link>
              <p
                role="paragraph"
                aria-label="description"
                className="text-sm text-gray-500 text-black dark:text-white"
              >
                A Sudoku solving implementation which models the Sudoku as a
                constraint satisfaction problem, and uses a depth-first search
                with backtracking to explore the search space.{' '}
              </p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-md dark:bg-gray-800 text-black dark:text-white">
              <Link
                className="font-medium underline text-black dark:text-white"
                href="#"
                aria-label="project"
              >
                Spam Filtering
              </Link>
              <p
                role="paragraph"
                aria-label="description"
                className="text-sm text-gray-500 text-black dark:text-white"
              >
                A spam filter which used naive bayes based on number of
                keywords, to predict wether an item was spam or not. It then
                used k-fold cross validation on our training/test dataset to
                workout a predicted accurary for the filter
              </p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-md dark:bg-gray-800">
              <Link
                className="font-medium underline text-black dark:text-white"
                href="#"
                aria-label="project"
              >
                Graph & Minimum Spanning tree
              </Link>
              <p
                role="paragraph"
                aria-label="description"
                className="text-sm text-gray-500 text-black dark:text-white"
              >
                This program allows for the visualisation of directed and
                undirected graphs, which can be randomly created or made by the
                user. The program will then use Primm&apos;s algorithm to find
                the minimum spanning tree for this graph from a specified node
              </p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-md dark:bg-gray-800">
              <Link
                className="font-medium underline text-black dark:text-white"
                href="#"
              >
                Mental Health Hackathon Project{' '}
              </Link>
              <p
                role="paragraph"
                aria-label="description"
                className="text-sm text-gray-500 text-black dark:text-white"
              >
                It lets you write messages to others when you are feeling good,
                and get messages from others if you&apos;re having a rough day.
                Includes tracking of how you&apos;re feeling over time, so you
                can see your progress
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
