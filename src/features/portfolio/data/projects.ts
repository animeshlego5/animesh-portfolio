import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "notespy",
    title: "NoteSpy",
    period: {
      start: "01.2026",
    },
    link: "https://notespy.vercel.app/",
    logo: "/animesh-portfolio/icon.png",
    skills: [
      "Next.js",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Machine Learning",
      "NumPy",
      "Audio Fingerprinting",
    ],
    description: `Music Recognition & Recommendation Engine

A Shazam-like web app with advanced audio fingerprinting capabilities:
- Implemented a FastAPI backend with spectral peak hashing and MFCC features for audio fingerprinting
- Achieved 85%+ accuracy on sub-second song identification
- Built a vectorized fingerprint search pipeline using NumPy

[Read Medium Article](#)`,
    isExpanded: true,
  },
  {
    id: "thinkweave-ai",
    title: "Think Weave.ai",
    period: {
      start: "01.2025",
    },
    link: "https://think-weave.vercel.app/",
    logo: "/animesh-portfolio/thinkweave-logo.svg",
    skills: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Docker",
      "OpenAI API",
      "Stable Diffusion",
    ],
    description: `Unified GenAI Orchestration Gateway

Full-stack SaaS serving AI text/image generation:
- Per-user quota enforcement and rate limiting middleware
- Tiered billing (free/premium) with dynamic credit tracking
- Integration with OpenAI and Stable Diffusion providers`,
    isExpanded: true,
  },
];
