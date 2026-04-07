import { motion } from 'motion/react';
import { Mail, Linkedin, Github, ArrowRight, Download } from 'lucide-react';

export function CTA() {
  const socials = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/prasidhee-mishra-b144ab332', color: 'hover:bg-blue-500 hover:border-blue-500' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/prasidheem', color: 'hover:bg-black hover:border-black' },
  ];

  return (
    <section className="py-20 px-4 md:px-6 relative z-10">
      <div className="max-w-5xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10"></div>
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto">
                <Mail className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Let's Create Something
              <br />
              <span className="gradient-text">Amazing Together</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-white/60 mb-12 max-w-2xl mx-auto"
            >
              Have a project in mind? I'd love to hear about it. Let's discuss how 
              we can work together to bring your vision to life.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3"
            >
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=prasidheem@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium text-sm md:text-base glow-hover transition-all duration-300 hover:scale-105"
              >
                Say Hello
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="/assets/PrasidheeResume2.pdf"
                download
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-medium text-sm md:text-base hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Download Resume
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center justify-center gap-6"
            >
              {socials.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white/80" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
        
        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center text-white/40 text-sm"
        >
          <p>© 2026 Prasidhee. Crafted with passion and precision.</p>
        </motion.div>
      </div>
    </section>
  );
}
