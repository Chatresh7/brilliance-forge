import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Chatresh7',
    icon: Github,
    username: 'ChatreshK',
    color: 'foreground',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/chatresh-konchada-6075692aa/',
    icon: Linkedin,
    username: 'ChatreshK',
    color: 'primary',
  },
  {
    name: 'Email',
    url: 'mailto:hemishkonchada@gmail.com',
    icon: Mail,
    username: 'hemishkonchada@gmail.com',
    color: 'secondary',
  },
];

const codingProfiles = [
  { name: 'HackerRank', username: 'chatreshk', url: 'https://hackerrank.com/chatreshk', emoji: '💻' },
  { name: 'CodeChef', username: 'chatreshk_7', url: 'https://codechef.com/users/chatreshk_7', emoji: '🍳' },
  { name: 'LeetCode', username: 'ChatreshK', url: 'https://leetcode.com/ChatreshK', emoji: '🧩' },
];

const SocialLinks = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-24 md:py-32 relative">
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
            Connect
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Find Me{' '}
            <span className="gradient-text">Online</span>
          </h2>
        </motion.div>

        {/* Main Social Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-6 flex items-center gap-4 hover:border-primary/50 transition-all duration-300 min-w-[200px]"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <link.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-foreground">{link.name}</p>
                <p className="text-sm text-muted-foreground truncate max-w-[150px]">{link.username}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Coding Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass rounded-2xl p-8 max-w-2xl mx-auto"
        >
          <h3 className="text-lg font-display font-bold mb-6 text-center gradient-text">
            Coding Profiles
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {codingProfiles.map((profile, index) => (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/30 hover:bg-primary/10 border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <span className="text-2xl">{profile.emoji}</span>
                <div>
                  <p className="text-sm font-medium text-foreground">{profile.name}</p>
                  <p className="text-xs text-muted-foreground">{profile.username}</p>
                </div>
                <ExternalLink size={14} className="text-muted-foreground" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialLinks;
