// src/components/ProjectCard.tsx
interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  achievements: string[];
}

export default function ProjectCard({ title, description, tech, achievements }: ProjectProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, i) => (
          <span key={i} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
            {item}
          </span>
        ))}
      </div>
      <ul className="list-disc pl-6 space-y-1">
        {achievements.map((achievement, i) => (
          <li key={i} className="text-sm text-gray-500">{achievement}</li>
        ))}
      </ul>
    </div>
  );
}