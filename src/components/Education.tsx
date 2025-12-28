import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const education = [
  {
    degree: 'B.Tech in Computer Science',
    specialization: 'Data Science',
    institution: 'ANITS',
    location: 'Visakhapatnam, India',
    period: '2023 - 2027 (Expected)',
    gpa: '9.8 / 10.0',
    achievement: 'Top 5% of Class (All Semesters)',
    current: true,
  },
  {
    degree: '12th Grade - MPC with CS',
    specialization: 'CBSE Board',
    institution: 'SSSHSS',
    location: 'Puttaparthi, India',
    period: 'March 2023',
    gpa: '93%',
    achievement: 'Distinction',
    current: false,
  },
  {
    degree: '10th Grade',
    specialization: 'SSC Board',
    institution: 'SSSVV',
    location: 'Palasa, India',
    period: 'July 2021',
    gpa: '600 Marks',
    achievement: 'Excellence',
    current: false,
  },
];

const Education = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="education" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 animated-gradient-bg opacity-30" />

      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            Education
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Academic{' '}
            <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary glow z-10">
                {edu.current && (
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                )}
              </div>

              {/* Content */}
              <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass rounded-2xl p-6 group hover:border-primary/50 transition-all duration-300"
                >
                  {edu.current && (
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-3">
                      Current
                    </span>
                  )}
                  
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-primary font-medium mb-3">{edu.specialization}</p>
                  
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
                    <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <GraduationCap size={14} />
                      <span>{edu.institution}</span>
                    </div>
                    <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                    <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="px-3 py-1 rounded-lg bg-secondary/20 text-secondary text-sm font-medium">
                      {edu.gpa}
                    </span>
                    <span className={`flex items-center gap-1 text-accent text-sm ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <Award size={14} />
                      {edu.achievement}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
