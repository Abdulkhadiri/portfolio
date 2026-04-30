import React from 'react';
import { Layers, Code2, Terminal, Server, Cpu, Workflow, Sparkles, Globe, Shield, Database } from 'lucide-react';

export const PROFILE_IMAGE =
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800';

export const PROJECTS = [
  {
    title: 'Enterprise Project Management Suite',
    description:
      'A professional platform for large-scale team collaboration, tracking complex tasks with n8n workflow automation.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1400',
    tech: ['Next.js', 'PostgreSQL', 'GCP', 'n8n'],
    highlights: ['RBAC Implementation', 'Interactive Gantt Charts', 'Automated Workflows'],
  },
  {
    title: 'Cloud-Native Automation Engine',
    description: 'Distributed workflow engine designed for high-throughput enterprise data processing pipelines.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1400',
    tech: ['Node.js', 'Vertex AI', 'Docker', 'GCP'],
    highlights: ['99.9% Uptime', 'AI-Powered Logic', 'Low-Latency Execution'],
  },
];

export const SKILLS = [
  { name: 'Next.js', category: 'Frontend', icon: React.createElement(Layers, { className: 'w-5 h-5' }), size: 'large' },
  { name: 'React', category: 'Frontend', icon: React.createElement(Code2, { className: 'w-5 h-5' }), size: 'small' },
  {
    name: 'TypeScript',
    category: 'Language',
    icon: React.createElement(Terminal, { className: 'w-5 h-5' }),
    size: 'small',
  },
  { name: 'Node.js', category: 'Backend', icon: React.createElement(Server, { className: 'w-5 h-5' }), size: 'medium' },
  {
    name: 'PostgreSQL',
    category: 'Database',
    icon: React.createElement(Database, { className: 'w-5 h-5' }),
    size: 'medium',
  },
  { name: 'GCP', category: 'Cloud', icon: React.createElement(Cpu, { className: 'w-5 h-5' }), size: 'large' },
  {
    name: 'n8n',
    category: 'Automation',
    icon: React.createElement(Workflow, { className: 'w-5 h-5' }),
    size: 'medium',
  },
  { name: 'Vertex AI', category: 'AI', icon: React.createElement(Sparkles, { className: 'w-5 h-5' }), size: 'small' },
  { name: 'Security', category: 'Infra', icon: React.createElement(Shield, { className: 'w-5 h-5' }), size: 'small' },
  {
    name: 'API Design',
    category: 'Backend',
    icon: React.createElement(Globe, { className: 'w-5 h-5' }),
    size: 'medium',
  },
];

export const EXPERIENCE = [
  {
    company: 'WAYVO Technologies',
    role: 'Associate Engineer',
    period: '2025 - Present',
    desc: 'Architecting cloud-native web apps. Reduced manual tasks by 20% through n8n automation and optimized PostgreSQL queries.',
  },
  {
    company: 'WAYVO Technologies',
    role: 'Software Intern',
    period: 'Jan - July 2025',
    desc: 'Developed REST APIs using Node.js and FastAPI. Built interactive user dashboards with React and Tailwind CSS.',
  },
];

export const EDUCATION = {
  degree: 'B.S. in Computer Science and Engineering',
  school: 'Srinivasa Ramanujan Institute of Technology',
  period: '2021 - 2025',
  cgpa: '9.04 / 10.0',
};

export const ACHIEVEMENTS = [
  {
    title: 'Best Innovation Award',
    organization: 'Tech Hackathon 2024',
    year: '2024',
    description:
      'Won first place for developing an AI-powered accessibility tool that helps visually impaired users navigate web applications.',
  },
  {
    title: "Dean's List",
    organization: 'Srinivasa Ramanujan Institute of Technology',
    year: '2023',
    description: 'Recognized for academic excellence, maintaining a GPA above 9.0 across all semesters.',
  },
  {
    title: 'Open Source Contributor',
    organization: 'GitHub',
    year: '2023',
    description:
      'Contributed to multiple open-source projects including React ecosystem libraries and developer tools.',
  },
  {
    title: 'Certified Cloud Developer',
    organization: 'Google Cloud',
    year: '2024',
    description: 'Obtained professional certification in cloud development and architecture.',
  },
];
