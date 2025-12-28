import { motion } from 'framer-motion';
import { Code, Database, Wrench, Brain } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skillCategories = [
  {
    title: 'Programming',
    icon: Code,
    color: 'primary',
    skills: [
      { name: 'Python', level: 95, years: '3+' },
      { name: 'SQL', level: 90, years: '3+' },
      { name: 'C', level: 80, years: '2+' },
      { name: 'Java', level: 60, years: '1+' },
      { name: 'DSA (Python)', level: 75, years: '1+' },
    ],
  },
  {
    title: 'AI / ML / Data',
    icon: Brain,
    color: 'secondary',
    skills: [
      { name: 'Machine Learning', level: 85, years: '2+' },
      { name: 'Data Analytics', level: 90, years: '2+' },
      { name: 'Artificial Intelligence', level: 80, years: '2+' },
      { name: 'NumPy & Pandas', level: 90, years: '2+' },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    color: 'accent',
    skills: [
      { name: 'Git / GitHub', level: 85, years: '2+' },
      { name: 'VS Code', level: 95, years: '3+' },
      { name: 'Jupyter Notebook', level: 90, years: '2+' },
      { name: 'Linux', level: 75, years: '2+' },
      { name: 'RPA (Automation Anywhere)', level: 70, years: '1+' },
    ],
  },
  {
    title: 'Web Development',
    icon: Database,
    color: 'primary',
    skills: [
      { name: 'HTML', level: 70, years: '1+' },
      { name: 'CSS', level: 65, years: '1+' },
    ],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            Skills
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Technical{' '}
            <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over years of learning and building
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass rounded-2xl p-6 group hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-${category.color}/10 flex items-center justify-center`}>
                  <category.icon className={`w-6 h-6 text-${category.color}`} />
                </div>
                <h3 className="text-xl font-display font-bold">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    isVisible={isVisible}
                    delay={categoryIndex * 0.1 + skillIndex * 0.05}
                    color={category.color}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({
  skill,
  isVisible,
  delay,
  color,
}: {
  skill: { name: string; level: number; years: string };
  isVisible: boolean;
  delay: number;
  color: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group/skill"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground group-hover/skill:text-primary transition-colors">
          {skill.name}
        </span>
        <span className="text-xs text-muted-foreground">{skill.years} years</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.3, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r from-${color} to-${color === 'primary' ? 'secondary' : color === 'secondary' ? 'accent' : 'primary'}`}
          style={{
            background: color === 'primary' 
              ? 'linear-gradient(90deg, hsl(217 91% 60%), hsl(270 70% 60%))' 
              : color === 'secondary'
              ? 'linear-gradient(90deg, hsl(270 70% 60%), hsl(185 85% 50%))'
              : 'linear-gradient(90deg, hsl(185 85% 50%), hsl(217 91% 60%))'
          }}
        />
      </div>
    </motion.div>
  );
};

export default Skills;
