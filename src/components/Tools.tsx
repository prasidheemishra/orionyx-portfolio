import { motion } from 'motion/react';
import { Code, Globe, Database, Brain, GitBranch, BarChart, PenTool, ArrowUpRight } from 'lucide-react';

const tools = [
  {
    icon: Code,
    name: 'Programming Languages',
    description: 'Strong foundation in Java, C, and Python for problem-solving and application development',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Globe,
    name: 'Web Development',
    description: 'Building responsive web interfaces using HTML, CSS, and JavaScript',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Database,
    name: 'Databases',
    description: 'Experience working with MongoDB and MySQL for structured and unstructured data',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Brain,
    name: 'Machine Learning & AI',
    description: 'Interest and hands-on exposure to data science and quantitative analysis',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: GitBranch,
    name: 'Version Control',
    description: 'Code management and collaboration using Git and GitHub',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: BarChart,
    name: 'Analytics & Visualization',
    description: 'Data visualization and insights using Power BI',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: PenTool,
    name: 'Design & Presentation',
    description: 'Creating visuals and presentations using Canva and Microsoft PowerPoint',
    color: 'from-pink-500 to-rose-500',
  },
];

export function Tools() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Stack
          </h2>
          <p className="text-xl text-white/60">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              className="glass-card p-6 group cursor-pointer relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${tool.color} bg-opacity-10`}>
                    <tool.icon className="w-6 h-6 text-white" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
                <p className="text-white/60 leading-relaxed">{tool.description}</p>
              </div>
            </motion.div>
          ))}
          
          {/* Additional Tools Card
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: tools.length * 0.1, duration: 0.6 }}
            className="glass-card p-6 flex flex-col justify-center items-center text-center border-dashed"
          >
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-bold text-white mb-2">And More</h3>
            <p className="text-white/60">
              Adobe Creative Suite, Miro, Linear, and other design tools
            </p>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
