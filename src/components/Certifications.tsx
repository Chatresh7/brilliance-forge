import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';

const certifications = [
  {
    title: 'Python (Basic)',
    platform: 'HackerRank',
    icon: '🐍',
    color: 'primary',
    link: 'https://www.hackerrank.com/certificates/iframe/560d2420d814',
  },
  {
    title: 'Java (Basic)',
    platform: 'HackerRank',
    icon: '☕',
    color: 'secondary',
    link: 'https://www.hackerrank.com/certificates/iframe/1d361bad9411',
  },
  {
    title: 'Fundamentals of AI',
    platform: 'NPTEL',
    icon: '🤖',
    color: 'accent',
    link: 'https://archive.nptel.ac.in/your-cert-link',
  },
  {
    title: 'Python DSA',
    platform: 'Udemy',
    icon: '📊',
    color: 'primary',
    link: 'https://www.udemy.com/certificate/UC-b381d949-eee2-4c49-b1e1-34158793a9e2/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com',
  },
  {
    title: 'AI Fundamentals',
    platform: 'IBM',
    icon: '🧠',
    color: 'secondary',
    link: 'https://www.credly.com/badges/d96c28b9-49ce-4de6-ac06-2ac6eb69ee50',
  },
  {
    title: 'Packet Tracer',
    platform: 'Cisco',
    icon: '🌐',
    color: 'accent',
    link: 'https://www.credly.com/earner/earned/badge/3ac87d0f-f43f-4a83-8c13-b08b3a88a176',
  },
  {
    title: 'Architecture Job Simulation',
    platform: 'AWS',
    icon: '☁️',
    color: 'primary',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_X7pvbLBLAGfKH9gpm_1742239002331_completion_certificate.pdf',
  },
];

const Certifications = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="certifications" className="py-24 md:py-32 relative">
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
            Certifications
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Verified <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Click on any card to see more details
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => toggleFlip(index)}
              className="cursor-pointer perspective-1000"
            >
              <motion.div
                animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-48 preserve-3d"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 glass rounded-2xl p-6 flex flex-col items-center justify-center hover:border-primary/50 transition-all duration-300"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <span className="text-4xl mb-4">{cert.icon}</span>
                  <h3 className="text-sm font-display font-bold text-center text-foreground">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-2">
                    {cert.platform}
                  </p>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 glass rounded-2xl p-6 flex flex-col items-center justify-center"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <Award className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-sm font-display font-bold text-center text-foreground mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground text-center mb-3">
                    Issued by {cert.platform}
                  </p>

                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary text-xs hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={12} />
                      View Certificate
                    </a>
                  ) : (
                    <span className="text-xs text-muted-foreground">
                      Certificate unavailable
                    </span>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
