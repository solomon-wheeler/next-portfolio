import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RoughNotation } from "react-rough-notation";
import { useInView } from "react-intersection-observer";
import { useState, ChangeEvent, useEffect } from "react";
import { row1Items } from "../Icons/proggramingLanguage.icon";
import { row2Items } from "../Icons/proggramingLanguage.icon";
import { PopupDialog } from "./popupDialog.component";
import { SpotifyPlaying } from "./spotifyPlaying.component";

const modules = [
  { name: "Computer systems architecture 1 & 2", mark: 81 },
  { name: "Discrete mathematics and database", mark: 95 },
  { name: "Principles of programming 1 & 2", mark: 81 },
  { name: "Mathematics for computation", mark: 76 },
  { name: "Artificial intelligence", mark: 84 },
  { name: "Software processes and modelling", mark: 68 },
];

export default function Homepage() {
  const initialDelay = 500;
  const delayConst = 1000;

  const delayTiming = (index: number) => {
    return initialDelay + index * delayConst;
  };

  const [ref, inView] = useInView({
    triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes in view
  });

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogDescription, setDialogDescription] = useState("");
  const [dialogTitle, setDialogTitle] = useState("");
  const [isEmailLoading, setIsEmailLoading] = useState(false);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMsgChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsEmailLoading(true);

    const requestBody = JSON.stringify({ name, email, message });
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
    });

    if (response.ok) {
      setDialogTitle("Success🎉");
      setDialogDescription("Email sent successfully");
    } else {
      console.log(response.status);
      console.log(response);
      setDialogTitle("Uh ohh...❌");
      setDialogDescription("Error sending email");
    }
    setDialogOpen(true);
    setIsEmailLoading(false);
  };

  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900 py-12 pt-16 lg:py-24 xl:py-32 px-2">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:gap-8 lg:gap-10">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                👋 I’m Solomon Wheeler
              </h1>
              <h6 className="inline text-lg font-semibold">
                Full Stack Developer
              </h6>
            </div>
            <div className="space-y-4">
              <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                {" "}
                An{" "}
                <RoughNotation
                  type="box"
                  color="#ADD8E6"
                  show={true}
                  animationDelay={delayTiming(0)}
                >
                  outgoing
                </RoughNotation>
                ,{" "}
                <RoughNotation
                  type="underline"
                  color="#ADD8E6"
                  show={true}
                  animationDelay={delayTiming(1)}
                >
                  highly motivated
                </RoughNotation>
                <RoughNotation
                  type="circle"
                  color="#ADD8E6"
                  show={true}
                  animationDelay={delayTiming(2)}
                >
                  , team worker
                </RoughNotation>{" "}
                ,with a strong ability for{" "}
                <RoughNotation
                  type="underline"
                  color="#ADD8E6"
                  show={true}
                  animationDelay={delayTiming(3)}
                >
                  communication{" "}
                </RoughNotation>
                and supporting the development of others. Highly technically
                competent , with a specific interest in data science, machine
                learning and problem-solving. An exceptional academic record and
                the{" "}
                <RoughNotation
                  type="circle"
                  color="#ADD8E6"
                  show={true}
                  animationDelay={delayTiming(4)}
                >
                  enthusiasm{" "}
                </RoughNotation>{" "}
                to adapt to new challenges. Currently studying a degree in
                Computer Science at the University of Bath.
              </p>
              <div className="grid gap-2 md:grid-cols-2">
                <div>
                  <h3 className="inline text-lg font-semibold">Name</h3>
                  <p>🧑‍💻Solomon Wheeler</p>
                </div>
                <div>
                  <h3 className="inline text-lg font-semibold">Location</h3>
                  <p>📌London/Bath, UK</p>
                </div>
                <div>
                  <h3 className="inline text-lg font-semibold">Email</h3>
                  <p>📧hello@solomonwheeler.co.uk</p>
                </div>
                <div>
                  <h3 className="inline text-lg font-semibold">Website</h3>
                  <p>🏡solomonwheeler.co.uk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-12 md:py-24 lg:py-32 xl:py-48" key="section2">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                My Skills
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I have a depth of understanding in succesfully building,
                testing, and deploying software applications.
              </p>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Here are some of languages and tools I have experience with:
              </p>
            </div>
            <div className="grid gap-4 md:gap-6 lg:gap-8" ref={ref}>
              <div className="grid gap-2 md:grid-cols-2">
                {row1Items.map((item, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center space-x-2"
                  >
                    <RoughNotation
                      type="highlight"
                      color="#007BFF"
                      show={inView}
                      animationDelay={delayTiming(4)}
                    >
                      <item.Icon className="w-5 h-5" />
                    </RoughNotation>
                    <span className="font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
              <div className="grid gap-2 md:grid-cols-2">
                {row2Items.map((item, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center space-x-2"
                  >
                    <RoughNotation
                      type="highlight"
                      color="#007BFF"
                      show={inView}
                      animationDelay={delayTiming(5)}
                    >
                      <item.Icon className="w-5 h-5" />
                    </RoughNotation>
                    <span className="font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32 xl:py-48" key="section3">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Qualifications
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I am currently studying a degree in Computer Science at the
                University of Bath. Here are some of the modules I have studied:
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white shadow-md rounded-md dark:bg-gray-800">
                <h2 className="text-2xl font-bold">Modules</h2>
                {modules.map((module, index) => (
                  <li key={index}>{module.name}</li>
                ))}
              </div>
              <div className="p-4 bg-white shadow-md rounded-md dark:bg-gray-800">
                <h2 className="text-2xl font-bold">Marks</h2>
                {modules.map((module, index) => (
                  <li key={index}>{module.mark}%</li>
                ))}
              </div>
            </div>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              And I have the following other qualifications:
            </p>
          </div>
        </div>
      </section>
      <SpotifyPlaying />

      <section
        className="bg-gray-50 dark:bg-gray-900 py-12 md:py-24 lg:py-32 xl:py-48"
        key="section4"
      >
        <div className="container px-4 md:px-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                My Projects
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Here are some of the projects I’ve been working on.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              <div className="p-4 bg-white shadow-md rounded-md dark:bg-gray-800">
                <Link className="font-medium underline" href="#">
                  Sudoku Solver
                </Link>
                <p className="text-sm text-gray-500">
                  A Sudoku solving implementation which models the Sudoku as a
                  constraint satisfaction problem, and uses a depth-first search
                  with backtracking to explore the search space.{" "}
                </p>
              </div>
              <div className="p-4 bg-white shadow-md rounded-md dark:bg-gray-800">
                <Link className="font-medium underline" href="#">
                  Spam Filtering
                </Link>
                <p className="text-sm text-gray-500">
                  A spam filter which used naive bayes based on number of
                  keywords, to predict wether an item was spam or not. It then
                  used k-fold cross validation on our training/test dataset to
                  workout a predicted accurary for the filter
                </p>
              </div>
              <div className="p-4 bg-white shadow-md rounded-md dark:bg-gray-800">
                <Link className="font-medium underline" href="#">
                  Graph & Minimum Spanning tree
                </Link>
                <p className="text-sm text-gray-500">
                  This program allows for the visualisation of directed and
                  undirected graphs, which can be randomly created or made by
                  the user. The program will then use Primm&apos;s algorithm to
                  find the minimum spanning tree for this graph from a specified
                  node
                </p>
              </div>
              <div className="p-4 bg-white shadow-md rounded-md dark:bg-gray-800">
                <Link className="font-medium underline" href="#">
                  Mental Health Hackathon Project{" "}
                </Link>
                <p className="text-sm text-gray-500">
                  It lets you write messages to others when you are feeling
                  good, and get messages from others if you&apos;re having a
                  rough day. Includes tracking of how you&apos;re feeling over
                  time, so you can see your progress
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32 xl:py-48" key="section5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-4 md:gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contact Me
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {"Get in touch 😀"}
              </p>
            </div>
            <form className="grid gap-4 md:gap-6">
              <div className="grid gap-2">
                <Label className="text-sm" htmlFor="name">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  required
                  onChange={handleNameChange}
                />
              </div>
              <div className="grid gap-2">
                <Label className="text-sm" htmlFor="email">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  required
                  type="email"
                  onChange={handleEmailChange}
                />
              </div>
              <div className="grid gap-2">
                <Label className="text-sm" htmlFor="message">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  required
                  onChange={handleMsgChange}
                />
              </div>
              <Button
                type="submit"
                onClick={handleSubmit}
                className={`bg-blue-500 text-white px-4 py-2 ${
                  isEmailLoading ? "animate-pulse" : ""
                }`}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
      <PopupDialog
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        dialogDescription={dialogDescription}
        dialogTitle={dialogTitle}
      />
    </>
  );
}
