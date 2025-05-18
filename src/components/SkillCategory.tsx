interface SkillCategoryProps {
  title: string;
  items: string[];
}

export default function SkillCategory({ title, items }: SkillCategoryProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <h3 className="font-semibold mb-3 text-gray-700 dark:text-gray-200">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span 
            key={i}
            className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}