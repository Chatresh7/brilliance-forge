import { motion } from 'framer-motion';
import { ExternalLink, Github, TrendingUp, Bot, Gamepad2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from './ui/button';

const projects = [
  {
    title: 'Stock Market Prediction ML Model',
    role: 'Project Lead',
    period: 'March 2025 – Present',
    description:
      'A sophisticated stock market prediction model leveraging real-time intraday data for trend analysis and visualization.',
    impact:
      'Simplifies market dynamics for beginners through interactive charts and ML-driven insights',
    techStack: [
      'Python',
      'NumPy',
      'Pandas',
      'Machine Learning',
      'Alpha Vantage API',
    ],
    icon: TrendingUp,
    gradient: 'from-primary to-secondary',
    github: 'https://github.com/ChatreshK/stock-market-prediction',
    demo: 'https://chatreshk-main.streamlit.app/',
  },
  {
    title: 'Automation Bot for Bill Payments',
    role: 'RPA Project',
    period: 'Jan 2025 – Feb 2025',
    description:
      'An RPA-driven multi-bot system with BotsDNA to automate bill payments and transaction processing.',
    impact:
      'Eliminated manual effort, reduced errors, and automated PDF parsing, web navigation, and transaction tracking',
    techStack: [
      'Automation Anywhere',
      'RPA',
      'BotsDNA',
      'PDF Parsing',
      'Web Automation',
    ],
    icon: Bot,
    gradient: 'from-secondary to-accent',
    github: 'https://www.linkedin.com/posts/chatresh-konchada-6075692aa_rpa-automation-botsdna-activity-7306697550181326848-BbIw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEp6QicB_B6mSRQpE8OYiOeyekp48VX_Fi4',
    demo: 'https://www.linkedin.com/posts/chatresh-konchada-6075692aa_rpa-automation-botsdna-activity-7306697550181326848-BbIw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEp6QicB_B6mSRQpE8OYiOeyekp48VX_Fi4',
  },
  {
    title: 'PyPlay Arcade',
    role: 'Solo Developer',
    period: '2024',
    description:
      'A collection of classic arcade games built with Python GUI, featuring smooth animations and intuitive controls.',
    impact:
      'Demonstrates strong fundamentals in Python programming and game development',
    techStack: ['Python', 'Tkinter', 'GUI Development', 'Game Logic'],
    icon: Gamepad2,
    gradient: 'from-accent to-primary',
    github: 'https://github.com/Chatresh7/Python_Game_Hub',
    demo: 'https://github.com/Chatresh7/Python_Game_Hub',
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 animated-gradient-bg opacity-20" />

      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            Projects
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills in AI, ML, and automation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="glass rounded-2xl overflow-hidden h-full flex flex-col hover:border-primary/50 transition-all duration-500">
                {/* Header */}
                <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-background/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <project.icon className="w-16 h-16 text-foreground/90" />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-display font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{project.role}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {project.period}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="mb-4 p-3 rounded-lg bg-muted/30 border border-border/50">
                    <p className="text-xs">
                      <span className="text-primary font-medium">Impact:</span>{' '}
                      {project.impact}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-auto">
                    <Button variant="glass" size="sm" className="flex-1" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={14} />
                        Code
                      </a>
                    </Button>

                    {project.demo ? (
                      <Button variant="default" size="sm" className="flex-1" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={14} />
                          Demo
                        </a>
                      </Button>
                    ) : (
                      <Button variant="default" size="sm" className="flex-1" disabled>
                        <ExternalLink size={14} />
                        Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
