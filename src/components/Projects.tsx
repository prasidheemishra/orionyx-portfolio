import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Users } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'FinFlow Banking App',
    category: 'FinTech',
    description: 'Complete redesign of a mobile banking experience with focus on accessibility and ease of use',
    metrics: [
      { icon: Users, label: '+1.2M users', value: '+1.2M' },
      { icon: TrendingUp, label: '45% increase in DAU', value: '45%' },
    ],
    gradient: 'from-blue-500/20 to-cyan-500/20',
    index: '01',
    total: '06',
  },
  {
    id: 2,
    title: 'CloudSync SaaS Platform',
    category: 'SaaS',
    description: 'Enterprise dashboard for cloud management with advanced data visualization',
    metrics: [
      { icon: Users, label: '500K+ users', value: '500K+' },
      { icon: TrendingUp, label: '60% faster workflows', value: '60%' },
    ],
    gradient: 'from-purple-500/20 to-pink-500/20',
    index: '02',
    total: '06',
  },
  {
    id: 3,
    title: 'ShopHub eCommerce',
    category: 'eCommerce',
    description: 'Modern marketplace platform with seamless checkout and personalized recommendations',
    metrics: [
      { icon: Users, label: '2M+ shoppers', value: '2M+' },
      { icon: TrendingUp, label: '35% conversion boost', value: '35%' },
    ],
    gradient: 'from-orange-500/20 to-red-500/20',
    index: '03',
    total: '06',
  },
  {
    id: 4,
    title: 'HealthTrack Wellness',
    category: 'Healthcare',
    description: 'Patient portal and telemedicine platform connecting users with healthcare providers',
    metrics: [
      { icon: Users, label: '800K+ patients', value: '800K+' },
      { icon: TrendingUp, label: '50% improved engagement', value: '50%' },
    ],
    gradient: 'from-green-500/20 to-emerald-500/20',
    index: '04',
    total: '06',
  },
  {
    id: 5,
    title: 'EduLearn Platform',
    category: 'EdTech',
    description: 'Interactive learning management system with gamification and progress tracking',
    metrics: [
      { icon: Users, label: '1.5M+ students', value: '1.5M+' },
      { icon: TrendingUp, label: '70% completion rate', value: '70%' },
    ],
    gradient: 'from-yellow-500/20 to-orange-500/20',
    index: '05',
    total: '06',
  },
  {
    id: 6,
    title: 'TravelNest Booking',
    category: 'Travel',
    description: 'Hotel and flight booking platform with smart recommendations and trip planning',
    metrics: [
      { icon: Users, label: '3M+ travelers', value: '3M+' },
      { icon: TrendingUp, label: '40% repeat bookings', value: '40%' },
    ],
    gradient: 'from-indigo-500/20 to-blue-500/20',
    index: '06',
    total: '06',
  },
];

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
            Recent Works
          </h2>
          <p className="text-xl text-white/60">
            Case studies showcasing impactful design solutions
          </p>
        </motion.div>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="glass-card p-8 md:p-10 cursor-pointer group relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-white/40 text-sm font-mono">
                        {project.index}/{project.total}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-lg text-white/60 mb-6 max-w-2xl leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-6">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <metric.icon className="w-5 h-5 text-purple-400" />
                          <span className="text-white font-medium">{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.div
                    animate={{
                      x: hoveredId === project.id ? 10 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                    className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors"
                  >
                    <span className="font-medium">View Case Study</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
