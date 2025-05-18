// src/components/Section.tsx
import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export default function Section({ title, icon, children }: SectionProps) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <div className="text-blue-600">{icon}</div>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      {children}
    </section>
  );
}