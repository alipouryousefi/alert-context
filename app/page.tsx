"use client";

import { useAlert } from "@/utils/useAlert";


export default function Home() {
  const { showAlert } = useAlert();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-2">
      <h1 className="text-4xl mb-4">Alert Context with Next.js and Tailwind CSS</h1>
      <div className="space-x-2">
        <button 
          onClick={() => showAlert('Success', 'this is a test success alert')} 
          className="px-4 py-2 bg-green-500 text-white rounded">
          Show Success Alert
        </button>
        <button 
          onClick={() => showAlert('Error', 'this is a test error alert')} 
          className="px-4 py-2 bg-red-500 text-white rounded">
          Show Error Alert
        </button>
        <button 
          onClick={() => showAlert('Warning', 'this is a test warning alert')} 
          className="px-4 py-2 bg-orange-500 text-white rounded">
          Show Info Alert
        </button>
      </div>
    </div>
  );
}
