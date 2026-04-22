import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Travel Planner",
    description: " Developed a MERN stack travel planner web app for itinerary creation, budget management, and expense tracking. Features include user authentication, interactive UI, and real-time updates for a seamless experience.",
    image: "/projects/Screenshot 2025-05-01 123325.png",
    tags: ["MongoDB","ExpressJS","NodeJS","ReactJS"],
    githubUrl: "https://github.com/hairu2004/Travel_planner-fullstack-",
  },
  {
    id: 2,
    title: "Future Expense Predictor",
    description:
      "Smart Personal Expense Tracker is a Streamlit-based web app that uses machine learning to predict future spending,helping users manage finances efficiently.",
    image: "/projects/Screenshot 2025-05-01 124238.png",
    tags: ["Machine Learning","Linear Regression","Streamlit"],
    githubUrl: "https://github.com/hairu2004/future-spending-predictor",
  },
  {
    id: 3,
    title: "Face Mask Detection",
    description:
      " Developed a real-time face mask detection system using CNNs, TensorFlow, Keras and OpenCV.  The model was integrated with a webcam interface for real-time detection",
    image: "/projects/images.jpeg",
    tags: ["openCV","TensorFlow","CNN"],
    githubUrl: "https://github.com/hairu2004/Face_Mask_Detection",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/hairu2004"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
