import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5"
            >
            </motion.div> */}
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Hello!! <br/>{' '}
              <span className="gradient-text">I'm Prasidhee</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="text-xl md:text-2xl text-white/60 mb-8 leading-relaxed"
            >
              A passionate coder and web developer driven by curiosity and problem-solving, focused on building digital solutions that are both efficient and impactful.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="text-lg text-white/50 max-w-2xl leading-relaxed"
            >
              I craft functional web experiences, combining strong coding skills with modern technologies.  </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="mt-12 flex items-center gap-4"
            >
              <ArrowDown className="w-5 h-5 text-white/40 animate-bounce" />
              <span className="text-sm text-white/40">Scroll to explore</span>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative"
          >
            <div className="relative glass-card p-2 overflow-hidden">
              <img
                src="/assets/p.webp"
                alt="Prasidhee"
                className="w-full h-[600px] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: [0.4, 0, 0.6, 1] }}
                className="absolute top-8 right-8 glass-card p-4"
              >
                <div className="w-12 h-12 rounded-full accent-gradient"></div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: [0.4, 0, 0.6, 1], delay: 0.5 }}
                className="absolute bottom-8 left-8 glass-card p-4"
              >
                <div className="text-white/80 text-sm font-medium">Developer</div>
              </motion.div>
            </div>
            
            {/* Background accent */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 accent-gradient opacity-20 blur-3xl rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
