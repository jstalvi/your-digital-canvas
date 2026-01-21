import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio";
import { 
  Mail, Phone, Linkedin, ExternalLink, 
  Figma, Frame, Layers, Image, Pen, Film, Box, Globe 
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Figma: <Figma className="w-4 h-4" />,
  Frame: <Frame className="w-4 h-4" />,
  Layers: <Layers className="w-4 h-4" />,
  Image: <Image className="w-4 h-4" />,
  Pen: <Pen className="w-4 h-4" />,
  Film: <Film className="w-4 h-4" />,
  Box: <Box className="w-4 h-4" />,
  Globe: <Globe className="w-4 h-4" />,
};

const ExperienceSection = () => {
  const { experience, education, contact, skills } = portfolioConfig;

  const getIcon = (iconName: string) => iconMap[iconName] || null;

  return (
    <section className="px-4 md:px-8 lg:px-16 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Experience Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="section-title mb-6">Experience</h3>
            <ul className="space-y-4">
              {experience.map((item, index) => (
                <li key={index} className="border-l-2 border-border pl-4 py-1">
                  <p className="font-heading font-semibold text-sm">
                    {item.title}
                  </p>
                  {item.company && (
                    <p className="text-coral text-sm font-medium">
                      {item.company}
                    </p>
                  )}
                  <p className="text-muted-foreground text-xs mt-1">
                    {item.period}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="section-title mb-6">Education</h3>
            <ul className="space-y-4">
              {education.map((item, index) => (
                <li key={index} className="border-l-2 border-border pl-4 py-1">
                  <p className="font-heading font-semibold text-sm">
                    {item.degree}
                  </p>
                  {item.institution && (
                    <p className="text-ocean text-sm font-medium">
                      {item.institution}
                    </p>
                  )}
                  <p className="text-muted-foreground text-xs mt-1">
                    {item.period}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="section-title mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-coral" />
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-coral transition-colors"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-forest" />
                <a
                  href={`tel:${contact.phone}`}
                  className="hover:text-forest transition-colors"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Linkedin className="w-4 h-4 text-ocean" />
                <a
                  href={`https://${contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ocean transition-colors truncate"
                >
                  {contact.linkedin}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <ExternalLink className="w-4 h-4 text-grape" />
                <a
                  href={`https://${contact.behance}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-grape transition-colors"
                >
                  {contact.behance}
                </a>
              </li>
            </ul>

            {/* Skills */}
            <div className="mt-8">
              <h3 className="section-title mb-4">Softwares</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1.5 bg-secondary px-3 py-1.5 rounded-full text-xs font-medium"
                    title={skill.name}
                  >
                    {getIcon(skill.icon)}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
