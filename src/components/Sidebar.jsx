import { useState } from "react";

function Sidebar() {
  const [active, setActive] = useState("overview");

  const navItems = [
    "Overview",
    "Experience",
    "Skills",
    "Projects",
    "Certifications",
  ];

  const focusContent = {
  overview: "QA Leadership • Metrics • Delivery",
  experience: "8+ Years • 30+ Engineers Supported",
  skills: "API Testing • Jira • Cypress",
  projects: "Testing Strategy • Quality Initiatives",
  certifications: "AWS • Scrum • Professional Growth",
};

  return (
   <aside className="
  w-72
  h-screen
  sticky top-0
  overflow-y-auto
  border-r border-white/10
  bg-slate-950/60
  backdrop-blur-xl
">
      {/* Logo */}
      <div>
        <h1
          className="
            text-2xl
            font-bold
            bg-gradient-to-r
            from-cyan-400
            to-blue-500
            bg-clip-text
            text-transparent
          "
        >
          QA Engineer Portfolio
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Jared Garrison
        </p>
      </div>

      {/* Profile Card */}
      <div
        className="
          mt-8
          rounded-2xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          p-4
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-cyan-500/20
              text-cyan-400
              font-bold
            "
          >
            JG
          </div>

          <div>
            <p className="font-medium">
              Senior QA Engineer
            </p>

            <p className="text-sm text-slate-400">
              8+ Years Experience
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
     <nav className="mt-8 space-y-2">
  {navItems.map((item) => {
    const id = item.toLowerCase();
    const isActive = active === id;

    return (
      <a
        key={item}
        href={`#${id}`}
        onClick={() => setActive(id)}
        className={`
          flex
          items-center
          rounded-xl
          px-4
          py-3
          transition-all
          duration-300
          ${
            isActive
              ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/20"
              : "text-slate-400 hover:bg-white/5 hover:text-white"
          }
        `}
      >
        {item}
      </a>
    );
  })}
</nav>

      {/* Bottom Card */}
      <div
        className="
          absolute
          bottom-6
          left-6
          right-6
          rounded-2xl
          border
          border-cyan-500/20
          bg-cyan-500/10
          p-4
        "
      >
        <p className="text-sm text-cyan-300">
          Current Focus
        </p>

        <p className="mt-2 text-sm text-slate-300">
        {focusContent[active]}
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;