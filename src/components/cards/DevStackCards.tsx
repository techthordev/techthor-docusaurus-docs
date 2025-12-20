import React from "react";
import clsx from "clsx";
// Use your preferred icons here (e.g., from static/img or an icon library)

// Define the structure for a single stack item
type StackItem = {
  title: string;
  description: string;
  icon: string; // Path to your icon image (e.g., /img/icons/java.svg)
  category: "Backend" | "Frontend" | "Database" | "DevOps" | "Tools";
};

// Define your tech stack data (based on your screenshots and info)
const StackList: StackItem[] = [
  // Backend Languages
  {
    title: "Java",
    description:
      "The foundation for robust, cross-platform enterprise applications (Spring Boot).",
    icon: "/img/icons/java-logo.png",
    category: "Backend",
  },
  {
    title: "Python",
    description:
      "Versatile language ideal for scripting, data analysis, and web APIs (FastAPI).",
    icon: "/img/icons/python-logo.png",
    category: "Backend",
  },
  {
    title: "Rust",
    description: "System programming focused on safety and high performance.",
    icon: "/img/icons/rust-bg-logo.png",
    category: "Backend",
  },

  // Frontend
  {
    title: "Angular (21+)",
    description:
      "Modern, scalable SPA framework using TypeScript and Reactive programming.",
    icon: "/img/icons/angular-logo.png",
    category: "Frontend",
  },
  {
    title: "TypeScript",
    description:
      "Superset of JavaScript that adds static typing for improved maintainability.",
    icon: "/img/icons/typescript-logo.png",
    category: "Frontend",
  },

  // Database
  {
    title: "PostgreSQL",
    description:
      "Robust, open-source relational database, favoured for reliability and extensibility.",
    icon: "/img/icons/postgresql-logo.png",
    category: "Database",
  },

  // DevOps
  {
    title: "Docker",
    description:
      "Containerization for consistent, repeatable, and isolated deployment.",
    icon: "/img/icons/docker-logo.png",
    category: "DevOps",
  },

  // Tools
  {
    title: "Fedora",
    description: "Primary Linux OS for development, security, and stability.",
    icon: "/img/icons/fedora-logo.png",
    category: "Tools",
  },
  {
    title: "IntelliJ & Zed",
    description: "Preferred IDEs for development and versatile text editing.",
    icon: "/img/icons/ide-logo.png",
    category: "Tools",
  },
];

// StackCard component
function StackCard({ title, description, icon }: Omit<StackItem, "category">) {
  return (
    <div className="p-6 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition duration-300 h-full bg-gray-800">
      <div className="flex items-center mb-4 space-x-2">
        <img
          src={icon}
          alt={title}
          width={24}
          height={24}
          className="w-6 h-6 object-contain shrink-0"
        />
        {/*<h3 className="text-xl font-semibold">{title}</h3>*/}
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

/**
 * Grouped grid layout for the Dev Stack.
 */
export default function DevStackCards() {
  // Group the items by category
  const groupedItems = StackList.reduce(
    (acc, item) => {
      (acc[item.category] = acc[item.category] || []).push(item);
      return acc;
    },
    {} as Record<StackItem["category"], StackItem[]>,
  );

  return (
    <div className="space-y-12">
      {Object.entries(groupedItems).map(([category, items]) => (
        <section key={category}>
          <h3 className="text-2xl font-bold mb-4 border-b border-primary pb-2">
            {category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <StackCard key={index} {...item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
