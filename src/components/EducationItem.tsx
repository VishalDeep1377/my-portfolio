// src/components/EducationItem.tsx
interface EducationProps {
  institution: string;
  degree: string;
  duration: string;
  details: string;
}

export default function EducationItem({ institution, degree, duration, details }: EducationProps) {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-gray-800">{institution}</h3>
      <p className="text-gray-600">{degree}</p>
      <p className="text-sm text-gray-500">{duration}</p>
      <p className="text-sm text-gray-500 mt-1">{details}</p>
    </div>
  );
}