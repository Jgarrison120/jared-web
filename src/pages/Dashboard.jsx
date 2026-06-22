import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background Glow Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 flex min-h-screen">
        <Sidebar />

        <main className="flex-1 p-8 lg:p-12">
          {/* Hero Section */}
          <section
            id="overview"
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-2xl"
          >
            <span className="inline-flex rounded-full bg-cyan-500/20 px-4 py-2 text-sm text-cyan-300">
              Senior QA Engineer
            </span>

            <h1 className="mt-6 text-5xl font-bold lg:text-6xl">
              Jared Garrison
            </h1>

            <p className="mt-4 max-w-3xl text-lg text-slate-400">
              8+ years improving software quality through manual testing,
              exploratory testing, API validation, accessibility compliance,
              and release readiness leadership.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
                API Testing
              </span>

              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
                Bruno
              </span>

              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
                Postman
              </span>

              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
                Jira
              </span>

              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
                Accessibility Testing
              </span>
            </div>
          </section>


          {/* KPI Cards */}
          <section className="mt-8">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <StatCard
                title="SLA Resolution Rate"
                value="90%"
                subtitle="Storyblocks"
              />

              <StatCard
                title="Agile Teams Supported"
                value="4-5"
                subtitle="Current Program"
              />

              <StatCard
                title="Years Experience"
                value="8+"
                subtitle="Quality Assurance"
              />
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="mt-12">
            <h2 className="mb-6 text-3xl font-bold">
              Professional Experience
            </h2>

            <div className="space-y-6">
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                  transition-all
                  duration-300
                  hover:border-cyan-400/30
                  hover:-translate-y-1
                "
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-300">
                      Automated Systems Design
                    </h3>

                    <p className="mt-1 text-slate-400">
                      Quality Assurance Engineer
                    </p>
                  </div>

                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-400">
                    Current
                  </span>
                </div>

                <ul className="mt-6 space-y-3 text-slate-300">
                  <li>✓ API testing using Postman and Bruno</li>
                  <li>✓ End-to-end testing for VBMS initiatives</li>
                  <li>✓ 508 accessibility validation</li>
                  <li>✓ Jira defect lifecycle management</li>
                </ul>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                  transition-all
                  duration-300
                  hover:border-cyan-400/30
                  hover:-translate-y-1
                "
              >
                <h3 className="text-xl font-semibold text-cyan-300">
                  Storyblocks
                </h3>

                <p className="mt-1 text-slate-400">
                  Lead Quality Assurance Analyst
                </p>

                <ul className="mt-6 space-y-3 text-slate-300">
                  <li>✓ Led QA efforts supporting 30+ engineers</li>
                  <li>✓ Maintained ~90% SLA defect resolution rate</li>
                  <li>✓ Contributed to Cypress automation efforts</li>
                  <li>✓ Mentored and onboarded QA team members</li>
                </ul>
              </div>
            </div>
            {/* SKILLS SECTION */}
<section id="skills" className="mt-14">
  <h2 className="mb-6 text-3xl font-bold">Skills & Expertise</h2>

  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
    <p className="text-slate-400 mb-6">
      Core QA engineering capabilities across manual, API, automation,
      and release validation workflows.
    </p>

    <div className="flex flex-wrap gap-3">
      {[
        "Manual Testing",
        "Exploratory Testing",
        "Regression Testing",
        "API Testing",
        "Postman",
        "Bruno",
        "Jira",
        "Cypress",
        "SDLC",
        "Agile/Scrum",
        "Test Planning",
        "Defect Management",
        "508 Accessibility",
        "Release Readiness",
        "Cross-Team QA"
      ].map((skill) => (
        <span
          key={skill}
          className="
            rounded-full
            border
            border-cyan-500/20
            bg-cyan-500/10
            px-4
            py-2
            text-sm
            text-cyan-300
            hover:bg-cyan-500/20
            transition
          "
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
</section>
          </section>
          <section id="certifications" className="mt-14">
  <h2 className="mb-6 text-3xl font-bold">Certifications</h2>

  <div className="grid gap-6 md:grid-cols-2">
    {/* Certification Card */}
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-cyan-400/30 transition">
      <div className="flex items-center justify-between">
        <h3 className="text-cyan-300 font-semibold">
          AWS Cloud Practitioner
        </h3>
        <span className="text-xs px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-300">
          In Progress
        </span>
      </div>
      <p className="mt-3 text-slate-400 text-sm">
        Foundational cloud certification covering AWS architecture, security,
        and core services.
      </p>
    </div>

    {/* Certification Card */}
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-cyan-400/30 transition">
      <div className="flex items-center justify-between">
        <h3 className="text-cyan-300 font-semibold">
          AWS AI Practitioner
        </h3>
        <span className="text-xs px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-300">
          In Progress
        </span>
      </div>
      <p className="mt-3 text-slate-400 text-sm">
        Focused on foundational AI/ML concepts and AWS AI services.
      </p>
    </div>

    {/* Certification Card */}
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-cyan-400/30 transition">
      <div className="flex items-center justify-between">
        <h3 className="text-cyan-300 font-semibold">
          Scrum Fundamentals Certified
        </h3>
        <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300">
          Completed
        </span>
      </div>
      <p className="mt-3 text-slate-400 text-sm">
        Agile methodology, Scrum roles, ceremonies, and workflow fundamentals.
      </p>
    </div>

    {/* Certification Card */}
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-cyan-400/30 transition">
      <div className="flex items-center justify-between">
        <h3 className="text-cyan-300 font-semibold">
          HVAC Certification
        </h3>
        <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300">
          Completed
        </span>
      </div>
      <p className="mt-3 text-slate-400 text-sm">
        Technical trade certification demonstrating systems troubleshooting
        and diagnostic skills.
      </p>
    </div>
  </div>
</section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;