import React from 'react';
import NextIconIamge from '../../../public/32px-NestJS.png';
import ReactIconSVG from '../../../public/react-icon.svg';
import PythonIconImage from '../../../public/Python.svg.png';
import Image from 'next/image';
import CIconImage from '../../../public/C_Programming_Language.svg.png';
import JavaScriptIconImage from '../../../public/64px-JavaScript-logo.png';
import KubernetesLogo from '../../../public/Kubernetes_logo_without_workmark.svg';

export function ReactIcon(props: any) {
  return (
    <a
      title="Facebook, Public domain, via Wikimedia Commons"
      href="https://commons.wikimedia.org/wiki/File:React-icon.svg"
    >
      <Image
        alt="React"
        src={ReactIconSVG}
        width="24"
        height="24"
        style={{ filter: 'grayscale(50%)' }}
        {...props}
      />
    </a>
  );
}

export function PythonIcon(props: any) {
  return (
    <a
      title="The people from the Tango! project., CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
      href="https://commons.wikimedia.org/wiki/File:Python.svg"
    >
      <Image
        alt="Python"
        src={PythonIconImage}
        width="24"
        height="24"
        style={{ filter: 'grayscale(50%)' }}
        {...props}
      />
    </a>
  );
}
export function CodeIcon(props: any) {
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
export function GithubIcon(props: any) {
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

export function CIcon(props: any) {
  return (
    <a
      title="ElodinKaldwin, Public domain, via Wikimedia Commons"
      href="https://commons.wikimedia.org/wiki/File:C_Programming_Language.svg"
    >
      <Image
        alt="CIcon"
        src={CIconImage}
        width="24"
        height="24"
        style={{ filter: 'grayscale(50%)' }}
        {...props}
      />
    </a>
  );
}

export function NestJSIcon(props: any) {
  return (
    <a
      title="NestJS, Public domain, via Wikimedia Commons"
      href="https://commons.wikimedia.org/wiki/File:NestJS.svg"
    >
      <Image
        alt="NestJS"
        src={NextIconIamge}
        width="24"
        height="24"
        style={{ filter: 'grayscale(50%)' }}
        {...props}
      />
    </a>
  );
}
export function JavaSciptIcon(props: any) {
  return (
    <a
      title="Christopher Williams, Public domain, via Wikimedia Commons"
      href="https://commons.wikimedia.org/wiki/File:JavaScript-logo.png"
    >
      <Image
        alt="JavaScrptIcon"
        src={JavaScriptIconImage}
        width="24"
        height="24"
        style={{ filter: 'grayscale(50%)' }}
        {...props}
      />
    </a>
  );
}

export function KubernetesIcon(props: any) {
  return (
    <a
      title="Google, Public domain, via Wikimedia Commons"
      href="https://commons.wikimedia.org/wiki/File:Kubernetes_logo_without_workmark.svg"
    >
      <Image
        alt="KubernetesIcon"
        src={KubernetesLogo}
        width="24"
        height="24"
        style={{ filter: 'grayscale(50%)' }}
        {...props}
      />
    </a>
  );
}
export function NavigationIcon(props: any) {
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

export function TypeIcon(props: any) {
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

export const row1Items = [
  { name: 'Python', Icon: PythonIcon },
  { name: 'React', Icon: ReactIcon },
  { name: 'SQL', Icon: CodeIcon },
  { name: 'Git', Icon: GithubIcon },
  { name: 'C', Icon: CIcon },
];

export const row2Items = [
  { name: 'TypeScript/JavaScript', Icon: JavaSciptIcon },
  { name: 'NestJS', Icon: NestJSIcon },
  { name: 'Kubernetes', Icon: KubernetesIcon },
  { name: 'Next.js', Icon: NavigationIcon },
  { name: 'TypeScript', Icon: TypeIcon },
];
