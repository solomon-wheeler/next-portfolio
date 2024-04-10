/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/dAAEQKeVkkX
 */
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RoughNotation } from "react-rough-notation";
import { useInView } from "react-intersection-observer";

const row1Items = [
  { name: "C", Icon: LayoutIcon },
  { name: "React", Icon: ComponentIcon },
  { name: "Tailwind CSS", Icon: WindIcon },
  { name: "TypeScript", Icon: TypeIcon },
  { name: "Kubernetes", Icon: TypeIcon },
  { name: "Nest js", Icon: TypeIcon },
];

const row2Items = [
  { name: "Python", Icon: TypeIcon },
  { name: "Next.js", Icon: NavigationIcon },
  { name: "Git", Icon: GithubIcon },
  { name: "SQL", Icon: CodeIcon },
  { name: "TypeScript", Icon: TypeIcon },
  { name: "CI/CD", Icon: TypeIcon },
];

export default function Homepage() {
  const initialDelay = 500;
  const delayConst = 1000;

  const delayTiming = (index: number) => {
    return initialDelay + index * delayConst;
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });

  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900 py-12 lg:py-24 xl:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:gap-8 lg:gap-10">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                👋 I’m Solomon Wheeler
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Designer. Developer.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
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
                  type="circle"
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
                computer science at the University of Bath.
              </p>
              <div className="grid gap-2 md:grid-cols-2">
                <div>
                  <h3 className="inline text-lg font-semibold">Name</h3>
                  <p>Solomon Wheeler</p>
                </div>
                <div>
                  <h3 className="inline text-lg font-semibold">Location</h3>
                  <p>London/Bath, UK</p>
                </div>
                <div>
                  <h3 className="inline text-lg font-semibold">Email</h3>
                  <p>solly.wheeler@gmail.com</p>
                </div>
                <div>
                  <h3 className="inline text-lg font-semibold">Website</h3>
                  <p>solomonwheeler.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                My Skills
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I’m experienced with a variety of design and development tools.
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
                      animationDelay={delayTiming(1)}
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
                      animationDelay={delayTiming(1)}
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

      <section className="bg-gray-50 dark:bg-gray-900 py-12 md:py-24 lg:py-32 xl:py-48">
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
                  Project 1
                </Link>
                <p className="text-sm text-gray-500">
                  Description of project 1.
                </p>
              </div>
              <div className="p-4 bg-white shadow-md rounded-md dark:bg-gray-800">
                <Link className="font-medium underline" href="#">
                  Project 2
                </Link>
                <p className="text-sm text-gray-500">
                  Description of project 2.
                </p>
              </div>
              <div className="p-4 bg-white shadow-md rounded-md dark:bg-gray-800">
                <Link className="font-medium underline" href="#">
                  Project 3
                </Link>
                <p className="text-sm text-gray-500">
                  Description of project 3.
                </p>
              </div>
              <div className="p-4 bg-white shadow-md rounded-md dark:bg-gray-800">
                <Link className="font-medium underline" href="#">
                  Project 4
                </Link>
                <p className="text-sm text-gray-500">
                  Description of project 4.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-4 md:gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contact Me
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {"Get in touch :)"}
              </p>
            </div>
            <form className="grid gap-4 md:gap-6">
              <div className="grid gap-2">
                <Label className="text-sm" htmlFor="name">
                  Name
                </Label>
                <Input id="name" placeholder="Enter your name" required />
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
                />
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function LayoutIcon(props: any) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <line x1="9" x2="9" y1="21" y2="9" />
    </svg>
  );
}

function ComponentIcon(props: any) {
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
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
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

function FigmaIcon(props: any) {
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
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  );
}

function NavigationIcon(props: any) {
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
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
}

function GithubIcon(props: any) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function CodeIcon(props: any) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
