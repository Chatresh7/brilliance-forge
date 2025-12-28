import { motion } from 'framer-motion';
import { Code, Brain, Trophy, Zap } from 'lucide-react';
import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation';

const stats = [
  { label: 'Years Coding', value: 3, icon: Code, suffix: '+' },
  { label: 'Projects Built', value: 10, icon: Zap, suffix: '+' },
  { label: 'Certifications', value: 7, icon: Trophy, suffix: '' },
  { label: 'CGPA', value: 9.8, icon: Brain, suffix: '/10', isDecimal: true },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Turning Ideas into{' '}
            <span className="gradient-text">Reality</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I'm a <span className="text-foreground font-medium">Computer Science undergraduate</span> at ANITS, 
                specializing in Data Science. Consistently ranked in the{' '}
                <span className="text-primary font-medium">Top 5%</span> of my class with a CGPA of 9.8/10.
              </p>
              <p>
                My journey in tech started with curiosity about how things work. Today, I channel that 
                curiosity into building intelligent systems using <span className="text-foreground">Python, Machine Learning, 
                and Artificial Intelligence</span>.
              </p>
              <p>
                From developing stock market prediction models to automating complex workflows with RPA, 
                I thrive on solving real-world problems with elegant, efficient solutions.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, participating in hackathons, 
                or leading teams—whether on the field as a <span className="text-accent">State-level Roller Skating Champion</span> or 
                as a <span className="text-secondary">House Captain</span> showcasing discipline and leadership.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} isVisible={isVisible} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, index, isVisible }: { stat: typeof stats[0]; index: number; isVisible: boolean }) => {
  const count = useCountUp(stat.isDecimal ? stat.value * 10 : stat.value, 2000, isVisible);
  const displayValue = stat.isDecimal ? (count / 10).toFixed(1) : count;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="glass rounded-2xl p-6 text-center group hover:border-primary/50 transition-all duration-300"
    >
      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        <stat.icon className="w-6 h-6 text-primary" />
      </div>
      <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
        {displayValue}{stat.suffix}
      </div>
      <div className="text-sm text-muted-foreground">{stat.label}</div>
    </motion.div>
  );
};

export default About;
