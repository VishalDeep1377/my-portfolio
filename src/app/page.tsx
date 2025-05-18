// src/app/page.tsx
import Image from 'next/image';
import Section from '@/components/Section';
import SkillCategory from '@/components/SkillCategory';
import ExperienceItem from '@/components/ExperienceItem';
import ProjectCard from '@/components/ProjectCard';
import EducationItem from '@/components/EducationItem';
import DownloadCVButton from '@/components/DownloadCVButton';
import { StaggerAnimation, StaggerItem } from '@/components/AnimatedWrappers';
import { 
  EnvelopeIcon, 
  DevicePhoneMobileIcon, 
  LinkIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  ChartBarIcon,
  CpuChipIcon
} from '@heroicons/react/24/solid';



export default function Home() {
  const experiences = [
    {
      title: "Report Maker on Excel - Internshala",
      duration: "Jun 2023 - Jul 2023",
      points: [
        'Coordinated with field teams to collect daily data',
        'Generated reports for 15+ clients using Excel/Google Sheets',
        'Reduced report generation time by 30%'
      ]
    },
    {
      title: "HR Recruiter - Internshala",
      duration: "Aug 2023 - Oct 2023",
      points: [
        'Managed team of 20 interns conducting training sessions',
        'Utilized MySQL to track candidate progress',
        'Improved team productivity by 25%'
      ]
    },
    {
      title: "Sales Intern (EdTech) - Corizo",
      duration: "May 2023 - Jul 2023",
      points: [
        'Promoted EdTech programs to 500+ students',
        'Achieved 15% conversion rate',
        'Contributed to 20% quarterly sales increase'
      ]
    }
  ];

  const projects = [
    {
      title: "Code to Career (MERN Stack)",
      description: "Full-stack platform connecting coding skills to job opportunities",
      tech: ["React", "Next.js", "MongoDB", "TypeScript"],
      achievements: [
        'Integrated AI-driven course recommendations',
        '500+ active users',
        '90% test coverage'
      ]
    },
    {
      title: "FreakyFit - AI Health & Fitness App",
      description: "AI-driven fitness app with live trainer sessions",
      tech: ["MERN Stack", "AI/ML", "Razorpay"],
      achievements: [
        '1000+ downloads',
        '4.5-star Play Store rating',
        'Live video sessions via ZegoCloud'
      ]
    },
    {
      title: "IoT Smart Systems",
      description: "IoT solutions for parking and agriculture",
      tech: ["ESP32", "Raspberry Pi", "ThingSpeak"],
      achievements: [
        '40% reduction in parking time',
        '35% reduction in water waste',
        'Real-time monitoring systems'
      ]
    }
  ];

  const education = [
    {
      institution: "Lovely Professional University",
      degree: "B.Tech Computer Science",
      duration: "2023 - Present",
      details: "CGPA: 8.0"
    },
    {
      institution: "Kendriya Vidyalaya NTPC Shaktinagar",
      degree: "Matriculation",
      duration: "2020",
      details: "Percentage: 86.2%"
    },
    {
      institution: "Kendriya Vidyalaya No. 1 Dhanbad",
      degree: "Intermediate",
      duration: "2022",
      details: "Percentage: 81%"
    }
  ];

  const certifications = [
    "MERN Stack Development Certificate",
    "Python for Data Science and ML",
    "Data Science Specialization",
    "Web Development Certification",
    "DBMS Certification",
    "IoT Basics and Applications"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
  <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
    {/* Your existing logo/name */}
    <div className="flex items-center gap-4">
      
      <DownloadCVButton /> {/* New download button */}
    </div>
  </div>
</header>
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-blue-100">
            <Image
              src="/profile.jpg"
              alt="Vishal Deep"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Vishal Deep</h1>
            <p className="text-xl text-gray-600 mb-4">Data Science | Full Stack Developer | AI & IoT Specialist</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:vishalyep1022@gmail.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                <EnvelopeIcon className="h-5 w-5" />
                vishalyep1022@gmail.com
              </a>
              <div className="flex items-center gap-2 text-gray-600">
                <DevicePhoneMobileIcon className="h-5 w-5" />
                +91-7999829540
              </div>
              <a href="https://github.com/VishalDeep1377" target="_blank" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                <LinkIcon className="h-5 w-5" />
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        {/* Skills Section */}
        
<Section title="Technical Proficiency" icon={<CpuChipIcon className="h-6 w-6" />}>
  <StaggerAnimation>
    <div className="grid md:grid-cols-2 gap-6">
      <StaggerItem>
        <SkillCategory 
          title="Programming Languages" 
          items={['C++', 'C', 'R', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'PHP']}
        />
      </StaggerItem>
      
      <StaggerItem>
        <SkillCategory
          title="Frameworks & Libraries"
          items={['React.js', 'Next.js', 'Node.js', 'Express.js', 'Pandas', 'Scikit-learn','Bootstrap', 'Tailwind CSS']}
        />
      </StaggerItem>

      <StaggerItem>
        <SkillCategory
          title="Tools & Platforms"
          items={['MongoDB', 'MySQL', 'Git/GitHub', 'Tableau', 'Power BI', 'Arduino IDE','Thonny','Xampp', 'Visual Studio Code']}
        />
      </StaggerItem>

      <StaggerItem>
        <SkillCategory
          title="Concepts"
          items={['DSA', 'DBMS', 'AI/ML', 'IoT', 'REST APIs', 'CRUD Operations','Problem-Solving', 'Team Collaboration', 'Adaptability', 'Time Management', 'Project Management']}
        />
      </StaggerItem>
    </div>
  </StaggerAnimation>
</Section>
        {/* Experience Section */}
        <Section title="Professional Experience" icon={<BriefcaseIcon className="h-6 w-6" />}>
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              duration={exp.duration}
              points={exp.points}
            />
          ))}
        </Section>

        {/* Projects Section */}
        <Section title="Key Projects" icon={<ChartBarIcon className="h-6 w-6" />}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              achievements={project.achievements}
            />
          ))}
        </Section>

        {/* Education Section */}
<Section title="Education" icon={<AcademicCapIcon className="h-6 w-6" />}>
  <StaggerAnimation>
    <div className="space-y-6">
      <StaggerItem>
        <EducationItem
          institution="Lovely Professional University"
          degree="B.Tech Computer Science"
          duration="2023 - Present"
          details="CGPA: 8.0"
        />
      </StaggerItem>
      
      <StaggerItem>
        <EducationItem
          institution="Kendriya Vidyalaya No. 1 Dhanbad"
          degree="Matriculation"
          duration="2020"
          details="Percentage: 87%"
        />
      </StaggerItem>

      <StaggerItem>
        <EducationItem
          institution="Kendriya Vidyalaya No. 1 Dhanbad"
          degree="Intermediate"
          duration="2022"
          details="Percentage: 81%"
        />
      </StaggerItem>
    </div>
  </StaggerAnimation>
</Section>

        {/* Certifications Section */}
        
        <Section title="Certifications" icon={<CpuChipIcon className="h-6 w-6" />}>
  <StaggerAnimation>
    <div className="grid md:grid-cols-2 gap-4">
      <StaggerItem>
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <h3 className="font-medium text-gray-800 dark:text-gray-200">
            ChatGPT Professional Certification
          </h3>
        </div>
      </StaggerItem>

      <StaggerItem>
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <h3 className="font-medium text-gray-800 dark:text-gray-200">
            Web Development (HTML/CSS/JavaScript)
          </h3>
        </div>
      </StaggerItem>

      <StaggerItem>
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <h3 className="font-medium text-gray-800 dark:text-gray-200">
            Python Programming Certification
          </h3>
        </div>
      </StaggerItem>

      <StaggerItem>
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <h3 className="font-medium text-gray-800 dark:text-gray-200">
            PHP Development Certification
          </h3>
        </div>
      </StaggerItem>

      <StaggerItem>
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <h3 className="font-medium text-gray-800 dark:text-gray-200">
            MERN Stack
          </h3>
        </div>
      </StaggerItem>

      <StaggerItem>
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <h3 className="font-medium text-gray-800 dark:text-gray-200">
            Webathon Excellence Certification
          </h3>
        </div>
      </StaggerItem>

      <StaggerItem>
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
          <h3 className="font-medium text-gray-800 dark:text-gray-200">
            Professional Development (Pradan) Certification
          </h3>
        </div>
      </StaggerItem>
    </div>
  </StaggerAnimation>
</Section>
      </main>
    </div>
  );
}