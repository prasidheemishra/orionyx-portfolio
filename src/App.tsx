import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Tools } from './components/Tools';
import { PremiumProjects } from './components/PremiumProjects';
import { CTA } from './components/CTA';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('.glass-card')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      {/* Custom cursor follower */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: cursorPosition.x - 10,
          y: cursorPosition.y - 10,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          border: '2px solid white',
          opacity: 0.6,
        }}
      />

      {/* Floating accent shapes with cursor parallax */}
      {/* Purple-Pink Glow Top Right */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          y: scrollY * 0.1 + cursorPosition.y * 0.02,
          x: cursorPosition.x * 0.02,
        }}
        className="fixed top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/15 to-pink-500/15 blur-3xl pointer-events-none z-0 shadow-2xl shadow-purple-500/20"
      />
      
      {/* Blue-Cyan Glow Bottom Left */}
      <motion.div
        animate={{
          y: [0, 40, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          y: scrollY * 0.15 - cursorPosition.y * 0.025,
          x: -cursorPosition.x * 0.025,
        }}
        className="fixed bottom-40 left-20 w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/15 to-cyan-500/15 blur-3xl pointer-events-none z-0 shadow-2xl shadow-blue-500/20"
      />

      {/* Green-Emerald Glow Top Left */}
      <motion.div
        animate={{
          y: [0, 50, 0],
          x: [-20, 20, -20],
          rotate: [180, 0, 180],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          y: scrollY * 0.12 + cursorPosition.y * 0.015,
          x: cursorPosition.x * 0.015 - 20,
        }}
        className="fixed top-1/3 left-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 blur-3xl pointer-events-none z-0 shadow-2xl shadow-green-500/15"
      />

      {/* Orange-Red Glow Bottom Right */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [20, -20, 20],
          rotate: [0, 270, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          y: scrollY * 0.18 - cursorPosition.y * 0.02,
          x: -cursorPosition.x * 0.02 + 20,
        }}
        className="fixed bottom-20 right-1/4 w-44 h-44 rounded-full bg-gradient-to-br from-orange-500/10 to-red-500/10 blur-3xl pointer-events-none z-0 shadow-2xl shadow-orange-500/15"
      />

      {/* Indigo-Violet Glow Center */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          y: scrollY * 0.08 + cursorPosition.y * 0.01,
          x: cursorPosition.x * 0.01,
        }}
        className="fixed top-1/2 right-1/3 w-56 h-56 rounded-full bg-gradient-to-br from-indigo-500/8 to-violet-500/8 blur-3xl pointer-events-none z-0 shadow-2xl shadow-indigo-500/15"
      />

      {/* Main content */}
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="tools">
          <Tools />
        </section>
        <section id="projects">
          <PremiumProjects />
        </section>
        <section id="contact">
          <CTA />
        </section>
      </main>
    </div>
  );
}