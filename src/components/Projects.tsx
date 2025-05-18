import { CodeBracketIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Built with Next.js, Stripe, and MongoDB.",
    tech: ["React", "Next.js", "Tailwind CSS"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <CodeBracketIcon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag, i) => (
                  <span key={i} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}