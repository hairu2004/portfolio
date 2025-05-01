import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", icon: "https://cdn.simpleicons.org/html5", category: "frontend" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript", category: "frontend" },
  { name: "React", icon: "https://cdn.simpleicons.org/react", category: "frontend" },
  
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss", category: "frontend" },
    // Backend
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs", category: "backend" },
  { name: "Express", icon: "https://cdn.simpleicons.org/express", category: "backend" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb", category: "backend" },
  

  // Tools
  { name: "Git/GitHub", icon: "https://cdn.simpleicons.org/github", category: "tools" },
  
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma", category: "tools" },
  { name: "VS Code", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg", category: "tools" },


  // Languages
  {name: "Java",icon: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",category: "language",},
  { name: "Python", icon: "https://cdn.simpleicons.org/python", category: "language" },
  { name: "C", icon: "https://cdn.simpleicons.org/c", category: "language" },

  // AI / ML
  { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy", category: "aI" },
  { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas", category: "aI" },
  { name: "Matplotlib", icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg", category: "aI" },
  { name: "Keras", icon: "https://cdn.simpleicons.org/keras", category: "aI" },
  { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow", category: "aI" },
  { name: "OpenCV", icon: "https://cdn.simpleicons.org/opencv", category: "aI" },
  { name: "Streamlit", icon: "https://cdn.simpleicons.org/streamlit", category: "aI" },

  // Not in SimpleIcons, so use placeholder
  { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", category: "ai" },
  { name: "GenAI", icon: "https://cdn-icons-png.flaticon.com/512/3209/3209346.png", category: "ai" }, // Placeholder
];

const categories = ["all", "frontend", "backend", "tools", "language", "aI"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex items-center gap-4">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
