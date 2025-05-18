// src/components/DownloadCVButton.tsx
'use client';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

export default function DownloadCVButton() {
  const handleDownload = () => {
    // Create temporary link
    const link = document.createElement('a');
    link.href = '/VishalDeep_CV.pdf';
    link.download = 'VishalDeep_FullStack_Developer_CV.pdf'; // Custom filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      aria-label="Download CV"
    >
      <ArrowDownTrayIcon className="h-5 w-5" />
      Download CV
    </button>
  );
}