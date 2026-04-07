import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    description: string;
    metrics?: Array<{ icon: any; label: string; value: string }>;
    image?: string;
    tech?: string[];
    index: string;
    total: string;
    gradient: string;
  };
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  // Calculate staggered progress for each card
  const cardProgress = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [1, 1, 0, 0]
  );

  const yTransform = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [100, 0, 0, -100]
  );

  const scaleTransform = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.9, 1, 1, 0.95]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{
        opacity: cardProgress,
        y: yTransform,
        scale: scaleTransform,
        top: `${index * 40}px`,
      }}
      className="sticky w-full"
    >
      <div className="premium-project-card relative overflow-hidden">
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <svg className="w-full h-full">
            <filter id={`noise-${project.id}`}>
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.9"
                numOctaves="4"
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter={`url(#noise-${project.id})`} opacity="0.05" />
          </svg>
        </div>

        {/* Dark gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>

        {/* Content */}
        <div className="relative p-6 md:p-10">
          {/* Index */}
          <div className="flex items-center justify-between mb-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="text-white/30 font-mono tracking-wider"
            >
              {project.index} / {project.total}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm backdrop-blur-sm"
            >
              {project.category}
            </motion.span>
          </div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-2xl md:text-4xl font-bold text-white mb-8 leading-tight tracking-tight"
          >
            {project.title}
          </motion.h3>

          {/* Description + Image Layout */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
            {/* Left: Description & Tech */}
            <div className="flex-1">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
                className="text-sm md:text-base text-white/60 leading-relaxed mb-6"
              >
                {project.description}
              </motion.p>

              {/* Tech Stack */}
              {project.tech && project.tech.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
                  className="flex flex-wrap gap-3"
                >
                  {project.tech.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                      <span className="text-xs md:text-sm text-white/70">{tech}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Right: Image */}
            {project.image ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
                className="w-full md:w-96 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm aspect-video flex-shrink-0"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ) : null}
          </div>

          {/* Hover indicator */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="absolute bottom-12 right-12 text-white/30 text-sm"
          >
            View Case Study →
          </motion.div> */}
        </div>

        {/* Glow effect on hover */}
        <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:via-pink-500/20 group-hover:to-blue-500/20 -z-10 blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
      </div>
    </motion.div>
  );
}

const projects = [
  {
    id: 1,
    title: 'Qwerty',
    category: 'Web Platform',
    description:
      'A service-based website connecting stenographers with users who need professional stenography services, featuring a clean and responsive interface.',
    image: '/assets/qwerty.png',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    index: '01',
    total: '04',
    gradient: 'from-blue-600/30 to-cyan-600/30',
  },
  {
    id: 2,
    title: 'Rights4U',
    category: 'EdTech',
    description:
      'An interactive educational quiz game designed to teach children about basic rights through engaging and user-friendly gameplay.',
    image: '/assets/rights4u.webp',
    tech: ['React', 'Node.js', 'MongoDB', 'Framer Motion'],
    index: '02',
    total: '04',
    gradient: 'from-purple-600/30 to-pink-600/30',
  },
  {
    id: 3,
    title: 'Deadline Management System',
    category: 'Web Application',
    description:
      'A role-based deadline management system with analytics and performance tracking for authorities, managers, and employees.',
    image: '/assets/deadline.webp',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Chart.js'],
    index: '03',
    total: '04',
    gradient: 'from-orange-600/30 to-red-600/30',
  },
  {
    id: 4,
    title: 'RealorNot',
    category: 'Machine Learning',
    description:
      'A machine learning web application that detects fake news articles using natural language processing techniques.',
    image: '/assets/realornot.webp',
    tech: ['Python', 'Flask', 'TensorFlow', 'React'],
    index: '04',
    total: '04',
    gradient: 'from-green-600/30 to-emerald-600/30',
  },
];

export function PremiumProjects() {
  return (
    <section className="py-32 px-6 relative z-10">
      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          className="mb-24 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            My Projects
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Some of the projects I've worked on, showcasing my skills in web development and design.
          </p>
        </motion.div>

        <div className="space-y-12 relative">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
