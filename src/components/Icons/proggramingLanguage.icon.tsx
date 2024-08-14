import React from 'react';
import Image from 'next/image';
import NextIconIamge from '../../../public/32px-NestJS.png';
import ReactIconSVG from '../../../public/react-icon.svg';
import PythonIconImage from '../../../public/Python.svg.png';
import CIconImage from '../../../public/C_Programming_Language.svg.png';
import JavaScriptIconImage from '../../../public/64px-JavaScript-logo.png';
import KubernetesLogo from '../../../public/Kubernetes_logo_without_workmark.svg';
import NextIconImage from '../../../public/Nextjs-logo.svg';
import PromIconImage from '../../../public/Prometheus_software_logo.svg';
import GithubIconImage from '../../../public/Octicons-mark-github.svg';
export function DatabaseIcon(props: any) {
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

export function WindIcon(props: any) {
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
    <a
      title="GitHub Inc., MIT &lt;http://opensource.org/licenses/mit-license.php&gt;, via Wikimedia Commons"
      href="https://commons.wikimedia.org/wiki/File:Octicons-mark-github.svg"
    >
      <Image
        alt="GithubIconImage"
        src={GithubIconImage}
        width="24"
        height="24"
        style={{ filter: 'grayscale(50%)' }}
        {...props}
      />
    </a>
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

export function NextIcon(props: any) {
  return (
    <a
      title="Vercel, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons"
      href="https://commons.wikimedia.org/wiki/File:Nextjs-logo.svg"
    >
      <Image
        alt="NextJSIcon"
        src={NextIconImage}
        width="24"
        height="24"
        style={{ filter: 'grayscale(50%)' }}
        {...props}
      />
    </a>
  );
}

export function PromIcon(props: any) {
  return (
    <a
      title="Alexander Schwartz (ahus1)[1][2], Apache License 2.0 &lt;http://www.apache.org/licenses/LICENSE-2.0&gt;, via Wikimedia Common"
      href="https://commons.wikimedia.org/wiki/File:Prometheus_software_logo.svg"
    >
      <Image
        alt="PromIcon"
        src={PromIconImage}
        width="24"
        height="24"
        style={{ filter: 'grayscale(50%)' }}
        {...props}
      />
    </a>
  );
}
