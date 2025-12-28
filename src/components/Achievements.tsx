import { motion } from 'framer-motion';
import { Trophy, Users, Medal, Briefcase, Lightbulb, Target } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const achievements = [
  {
    title: 'State-level Roller Skating Champion',
    category: 'Sports',
    icon: Medal,
    color: 'primary',
  },
  {
    title: '1st Place - Technical Quiz',
    category: 'Academics',
    icon: Trophy,
    color: 'secondary',
  },
  {
    title: 'ML Hackathon Participant',
    category: 'Technical',
    icon: Lightbulb,
    color: 'accent',
  },
  {
    title: 'RPA Workshop Projects',
    category: 'Technical',
    icon: Briefcase,
    color: 'primary',
  },
  {
    title: 'College Parade Commander',
    category: 'Leadership',
    icon: Target,
    color: 'secondary',
  },
  {
    title: 'House Captain',
    category: 'Leadership',
    icon: Users,
    color: 'accent',
  },
];

const extracurriculars = [
  'GeeksforGeeks Student Chapter Member',
  'College-level Volleyball Winner',
  'College-level Cricket Winner',
  'College-level Football Winner',
  'Regular Hackathon Participant',
  'Tech Webinars & Coding Contests',
];

const Achievements = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="achievements" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 animated-gradient-bg opacity-20" />

      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            Achievements
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Beyond{' '}
            <span className="gradient-text">Academics</span>
          </h2>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-6 group hover:border-primary/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-${achievement.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <achievement.icon className={`w-7 h-7 text-${achievement.color}`} 
                  style={{ color: achievement.color === 'primary' ? 'hsl(217 91% 60%)' : achievement.color === 'secondary' ? 'hsl(270 70% 60%)' : 'hsl(185 85% 50%)' }}
                />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">
                {achievement.title}
              </h3>
              <span className="text-xs text-muted-foreground px-2 py-1 rounded-full bg-muted/50">
                {achievement.category}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Extracurriculars */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-2xl p-8"
        >
          <h3 className="text-xl font-display font-bold mb-6 text-center gradient-text">
            Extracurricular Activities
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {extracurriculars.map((activity, index) => (
              <motion.span
                key={activity}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-muted/50 text-foreground text-sm border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                {activity}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
