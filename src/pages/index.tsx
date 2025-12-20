import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// Import the custom component for your tech stack cards
import DevStackCards from './../components/cards/DevStackCards'; 

// ------------------------------------------------------------------
// 1. Customized Header Component (Replaces the blue Docusaurus banner)
// ------------------------------------------------------------------

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  
  // Using Tailwind utility classes for a dark, clean look. 
  // You can adjust 'bg-gray-900' and 'text-white' to match your brand colors.
  return (
    <header className="bg-gray-900 text-white py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-4">
          {siteConfig.title}
        </h1>
        <p className="text-xl opacity-80 mb-8">
          {siteConfig.tagline}
        </p>
        <a 
          className="inline-block bg-primary hover:bg-opacity-80 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          href="/intro" // Direct link to your desired starting page
        >
          Start Exploring Docs →
        </a>
      </div>
    </header>
  );
}

// ------------------------------------------------------------------
// 2. Main Page Layout
// ------------------------------------------------------------------

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={`Home`}
      description="Developer notes, guides, and experiments by TechThorDev.">
      
      <HomepageHeader />
      
      <main className="container mx-auto my-12 px-4">
        {/* Integration of the custom card component */}
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">
          My Core Development Stack
        </h2>
        <DevStackCards />

        {/* You can add more sections here (e.g., Mastery Tracks, Projects) */}
      </main>
      
    </Layout>
  );
}