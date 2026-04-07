import { motion } from 'motion/react';
import { MapPin, Award, Users, TrendingUp } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '2+' },
    { icon: Users, label: 'Projects Completed', value: '4' },
    { icon: TrendingUp, label: 'Hackthons Won', value: '3' },
  ];

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="flex items-center gap-2 text-white/50 mb-8">
            <MapPin className="w-4 h-4" />
            <span>Chhattisgarh, India</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              className="glass-card p-6"
            >
              <stat.icon className="w-8 h-8 text-purple-400 mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          className="glass-card p-8 md:p-12"
        >
          <div className="space-y-6 text-lg text-white/70 leading-relaxed">
            <p>
              Hello, I am<span className="text-white font-medium"> Prasidhee Mishra</span> – a coder, web developer, and tech enthusiast.

              I’m a 5th semester undergrad at GEC Raipur, pursuing a B.Tech in CSE. My hobbies include reading and traveling.
            </p>

            <p>
              I learned Python during my schooling at St. Xavier's High School and picked up other languages like HTML5, CSS, Javascript, C, and C++ in college.

              I bring strong coding skills, a keen interest in data science, and a passion for solving real-world problems.

            </p>

            <p>
              Currently, I'm looking to collaborate on coding or web development projects to grow my experience and expertise.

              Feel free to reach out to me here on LinkedIn for any opportunities or collaborations!
            </p>

            {/* <div className="pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-3">
                {['Machine Learning & AI', 'Python', '', '',].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
