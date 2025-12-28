import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import profileImage from '@/assets/profile.jpg';

const roles = [
  'Data Science Undergraduate',
  'AI & ML Enthusiast',
  'Problem Solver',
  'Full-Stack Developer',
];

const Hero = () => {
  const typedText = useTypingEffect(roles, 80, 40, 2000);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 animated-gradient-bg" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1.5s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Outer Glow Effect */}
              <div className="absolute inset-[-20px] bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-3xl opacity-40 animate-glow-pulse" />
              
              {/* Animated Gradient Ring */}
              <div className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-primary via-accent to-secondary animate-spin opacity-70" style={{ animationDuration: '8s' }} />
              
              {/* Floating Container - animation only on container */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                {/* Circular container with internal padding */}
                <div 
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden relative z-10 bg-gradient-to-br from-background via-background/90 to-muted shadow-2xl shadow-primary/20 p-[10%] flex items-center justify-center"
                  style={{ aspectRatio: '1 / 1' }}
                >
                  {/* Image - no scaling, object-fit contain */}
                  <img
                    src={profileImage}
                    alt="Chatresh Konchada"
                    className="w-full h-full object-contain rounded-full"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                </div>
                
                {/* Rotating Dashed Border */}
                <div className="absolute inset-[-8px] rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: '20s' }} />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-6">
                👋 Welcome to my Portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Chatresh</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-12 md:h-16 mb-6"
            >
              <span className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-display">
                {typedText}
                <span className="typing-cursor ml-1" />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              A passionate Computer Science student with a CGPA of 9.8/10, 
              specializing in Data Science. I transform complex problems into 
              elegant solutions through AI, Machine Learning, and clean code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  <ExternalLink className="mr-2" size={18} />
                  View Projects
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">
                  <Mail className="mr-2" size={18} />
                  Let's Connect
                </a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2" size={18} />
                  Resume
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
