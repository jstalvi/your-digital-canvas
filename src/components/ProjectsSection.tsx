import { motion } from "framer-motion";
import { portfolioConfig, ProjectColor } from "@/config/portfolio";

const colorClasses: Record<ProjectColor, string> = {
  coral: "project-card-coral",
  ocean: "project-card-ocean",
  forest: "project-card-forest",
  sunshine: "project-card-sunshine",
  grape: "project-card-grape",
};

const ProjectsSection = () => {
  const { projects } = portfolioConfig;

  return (
    <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-muted/30 tracking-tight">
            CONTENT
          </h2>
          
          {/* Floating numbers */}
          <div className="flex justify-center gap-4 md:gap-8 -mt-8 md:-mt-12 relative z-10">
            {projects.map((project, index) => (
              <motion.span
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-2xl md:text-4xl font-heading font-bold"
              >
                {project.number}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`project-card ${colorClasses[project.color]} cursor-pointer group`}
            >
              {/* Large Number */}
              <div className="text-6xl md:text-7xl font-heading font-bold text-white/20 mb-4">
                {project.id}
              </div>

              {/* Project Image Placeholder */}
              <div className="aspect-[4/3] bg-white/10 rounded-lg mb-4 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Project Info */}
              <div className="text-white">
                <h3 className="font-heading font-bold text-sm mb-1">
                  {project.title}
                </h3>
                <p className="text-white/70 text-xs leading-relaxed">
                  {project.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
