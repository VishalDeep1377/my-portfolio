// src/components/ExperienceItem.tsx
interface ExperienceProps {
  title: string;
  duration: string;
  points: string[];
}

export default function ExperienceItem({ title, duration, points }: ExperienceProps) {
  return (
    <div className="mb-6 border-l-4 border-blue-100 pl-4">
      <div className="mb-2">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{duration}</p>
      </div>
      <ul className="list-disc pl-6 space-y-2">
        {points.map((point, i) => (
          <li key={i} className="text-gray-600">{point}</li>
        ))}
      </ul>
    </div>
  );
}