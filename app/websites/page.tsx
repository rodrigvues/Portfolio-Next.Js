// app/websites/page.tsx

import Websites from "@/components/websites";
import WebsitesContato from "@/components/websitescontato";
import Websitesheadingsection from "@/components/websitesheading";



export const metadata = {
  title: 'Websites | V. Rodrigues',
  description: 'Explore the premium websites developed and sold by Vitor Rodrigues',
}

export default function WebsitesPage() {
  
  return (
    <main className="flex flex-col items-center px-4">
          <Websitesheadingsection />
          <Websites />
          <WebsitesContato />
    </main>
  );
}

/*
<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="border border-black/5 rounded-lg overflow-hidden dark:bg-white/10">
  <div className="h-52 bg-gray-100 dark:bg-gray-800">
    <div className="w-full h-full flex items-center justify-center text-gray-400">
      Website Preview
    </div>
  </div>
  <div className="p-4">
    <h3 className="text-xl font-medium">E-commerce Template</h3>
    <p className="mt-2 text-gray-700 dark:text-gray-300">
      A responsive e-commerce website with shopping cart functionality.
    </p>
    <div className="mt-4 flex justify-between">
      <span className="font-bold">$299</span>
      <button className="bg-gray-900 text-white px-4 py-2 rounded-md dark:bg-white dark:text-gray-900">
        View Details
      </button>
    </div>
  </div>
</div>

<div className="border border-black/5 rounded-lg overflow-hidden dark:bg-white/10">
  <div className="h-52 bg-gray-100 dark:bg-gray-800">
    <div className="w-full h-full flex items-center justify-center text-gray-400">
      Website Preview
    </div>
  </div>
  <div className="p-4">
    <h3 className="text-xl font-medium">Portfolio Template</h3>
    <p className="mt-2 text-gray-700 dark:text-gray-300">
      Professional portfolio website with project showcase.
    </p>
    <div className="mt-4 flex justify-between">
      <span className="font-bold">$199</span>
      <button className="bg-gray-900 text-white px-4 py-2 rounded-md dark:bg-white dark:text-gray-900">
        View Details
      </button>
    </div>
  </div>
</div>
</div>
*/