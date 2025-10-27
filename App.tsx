
import React, { useState } from 'react';
import type { WorkExperienceItem, ProjectItem, AchievementItem, SkillCategory } from './types';
import { PORTFOLIO_DATA } from './data';
import { Section } from './components/Section';
import { AcademicCapIcon, BriefcaseIcon, DownloadIcon, ExternalLinkIcon, PaperAirplaneIcon } from './components/icons';

const Header: React.FC = () => (
  <header className="py-12 px-4">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-white mb-2">{PORTFOLIO_DATA.name}</h1>
      <h2 className="text-xl text-sky-400 font-medium mb-4">{PORTFOLIO_DATA.title}</h2>
      <div className="text-sm text-slate-400 flex justify-center items-center space-x-4 mb-6">
        <span>{PORTFOLIO_DATA.contact.location}</span>
        <span>&bull;</span>
        <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="hover:text-sky-400 transition-colors">
          {PORTFOLIO_DATA.contact.email}
        </a>
      </div>
      <div className="flex justify-center space-x-6">
        {PORTFOLIO_DATA.socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="text-slate-400 hover:text-sky-400 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <social.icon className="h-6 w-6" />
          </a>
        ))}
      </div>
       <div className="mt-8">
            <a 
              href="https://drive.google.com/file/d/1xQL7RuaWjln3ZWk6uhqdUJ6DFoXz3NQr/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 border border-sky-500 text-base font-medium rounded-md text-sky-400 hover:bg-sky-500/10 hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-sky-500 transition-all duration-200 transform hover:scale-105"
            >
              <DownloadIcon className="w-5 h-5" />
              Download CV
            </a>
        </div>
    </div>
  </header>
);

const ExperienceCard: React.FC<{ item: WorkExperienceItem }> = ({ item }) => (
  <div className="relative pl-8 mb-8 group">
    <div className="absolute left-0 top-1 h-full w-px bg-slate-700"></div>
    <div className="absolute left-[-5px] top-1 h-3 w-3 rounded-full bg-slate-500 group-hover:bg-sky-400 transition-colors"></div>
    <div className="flex justify-between items-baseline">
      <h3 className="font-bold text-lg text-slate-100">{item.role}</h3>
      <span className="text-xs text-slate-500 font-medium">{item.duration}</span>
    </div>
    <div className="flex items-baseline text-md text-sky-400">
      <a href={item.companyUrl} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">
        {item.company}
      </a>
      <span className="mx-2 text-slate-500">&bull;</span>
      <p className="text-slate-400 text-sm">{item.location}</p>
    </div>
    <ul className="mt-3 list-disc list-inside text-slate-400 space-y-1 text-sm">
      {item.description.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
     {item.recommendationUrl && (
        <a href={item.recommendationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-sky-400 hover:text-sky-300 mt-2 font-medium transition-transform duration-200 transform hover:-translate-y-px">
            Letter of Recommendation <ExternalLinkIcon className="w-4 h-4 ml-1" />
        </a>
    )}
  </div>
);

const ProjectCard: React.FC<{ item: ProjectItem }> = ({ item }) => (
    <div className="h-full flex flex-col p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-sky-500 hover:bg-slate-800 transition-all duration-300 group transform hover:scale-[1.03]">
        <div className="flex-grow">
            <h3 className="font-bold text-lg text-slate-100 group-hover:text-sky-400 transition-colors mb-2">{item.title}</h3>
            <ul className="list-disc list-inside text-slate-400 space-y-1 text-sm">
                {item.description.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-700/50">
             <div className="flex flex-wrap gap-2 mb-4">
                {item.techStack.map((tech) => (
                    <span key={tech} className="bg-sky-900/50 text-sky-300 text-xs font-medium px-2.5 py-1 rounded-full">{tech}</span>
                ))}
            </div>
            <div className="flex items-center gap-4 text-sm">
                {item.liveUrl && (
                    <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-medium text-slate-300 hover:text-sky-400 transition-all duration-200 transform hover:-translate-y-px">
                        <ExternalLinkIcon className="w-4 h-4 mr-2" /> Live Demo
                    </a>
                )}
                {item.sourceUrl && (
                    <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-medium text-slate-300 hover:text-sky-400 transition-all duration-200 transform hover:-translate-y-px">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                           <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0020 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                        </svg>
                        Source Code
                    </a>
                )}
            </div>
        </div>
    </div>
);


const SkillPill: React.FC<{ skill: string }> = ({ skill }) => (
  <span className="bg-slate-700 text-slate-300 text-sm font-medium px-3 py-1.5 rounded-md">{skill}</span>
);

const App: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState('All');
  
  const allTechs = ['All', ...Array.from(new Set(PORTFOLIO_DATA.projects.flatMap(p => p.techStack)))];
  
  const filteredProjects = selectedTech === 'All'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter(p => p.techStack.includes(selectedTech));

  return (
    <div className="font-sans text-slate-300">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />

        <Section title="About">
            <div>
                <p className="text-slate-400 leading-relaxed mb-4">{PORTFOLIO_DATA.about.summary}</p>
                <p className="text-slate-400 leading-relaxed">{PORTFOLIO_DATA.about.goals}</p>
            </div>
        </Section>
        
        <Section title="Skills">
          <div className="space-y-4">
            {PORTFOLIO_DATA.skills.map((category: SkillCategory) => (
               <div key={category.title}>
                 <h3 className="font-semibold text-slate-300 mb-2">{category.title}</h3>
                 <div className="flex flex-wrap gap-2">
                    {category.skills.map(skill => <SkillPill key={skill} skill={skill} />)}
                 </div>
               </div>
            ))}
          </div>
        </Section>

        <Section title="Work Experience" icon={<BriefcaseIcon className="w-6 h-6 text-slate-400" />}>
          <div>
            {PORTFOLIO_DATA.workExperience.map((item, index) => (
              <ExperienceCard key={index} item={item} />
            ))}
          </div>
        </Section>

        <Section title="Projects">
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
                {allTechs.map(tech => (
                    <button
                        key={tech}
                        onClick={() => setSelectedTech(tech)}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 transform hover:-translate-y-0.5 ${
                            selectedTech === tech
                                ? 'bg-sky-500 text-slate-900 shadow-lg shadow-sky-500/30'
                                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                        aria-pressed={selectedTech === tech}
                        aria-controls="project-grid"
                    >
                        {tech}
                    </button>
                ))}
            </div>
            <div aria-live="polite" aria-atomic="true">
                <div id="project-grid" className="grid md:grid-cols-2 gap-6">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((item, index) => (
                            <ProjectCard key={index} item={item} />
                        ))
                    ) : (
                        <p className="md:col-span-2 text-center text-slate-500">
                            No projects found for the selected technology.
                        </p>
                    )}
                </div>
            </div>
        </Section>
        
        <Section title="Education" icon={<AcademicCapIcon className="w-6 h-6 text-slate-400" />}>
            <div className="space-y-4">
                {PORTFOLIO_DATA.education.map((item, index) => (
                    <div key={index} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                        <div className="flex justify-between items-baseline">
                            <h3 className="font-bold text-slate-100">{item.degree}</h3>
                            <span className="text-xs text-slate-500 font-medium">{item.years}</span>
                        </div>
                        <p className="text-slate-400">{item.institution}</p>
                        <p className="text-sm text-sky-400">{item.cgpa}</p>
                    </div>
                ))}
            </div>
        </Section>
        
        <Section title="Achievements & Certifications">
            <ul className="list-disc list-inside text-slate-400 space-y-2">
                {PORTFOLIO_DATA.achievements.map((item: AchievementItem, index: number) => (
                    <li key={index}>
                        {item.description}
                        <a href={item.linkUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sky-400 hover:underline ml-1 font-medium" aria-label={`Link for ${item.description}`}>
                            [Link]
                        </a>
                    </li>
                ))}
            </ul>
        </Section>
        
        <Section title="Get In Touch">
            <div className="text-center max-w-xl mx-auto">
                <p className="text-slate-400 leading-relaxed mb-8">
                    I'm currently looking for new opportunities and my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <a
                    href="mailto:sahadebrup185@gmail.com"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-sky-500 transition-all duration-200 transform hover:-translate-y-1"
                >
                    Say Hello <PaperAirplaneIcon className="w-5 h-5" />
                </a>
            </div>
        </Section>

        <footer className="text-center py-8 text-slate-500 text-sm">
            <p>Designed & Built by Debrup Saha</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
