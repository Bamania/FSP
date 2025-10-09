import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import rag from "@/assets/RAGnarok.png";
import sql from "@/assets/sqlagent.png";
import becha from "@/assets/Screenshot_1.png";
import jsAdv from "@/assets/jsAdv.png";
import node from "@/assets/mentalModelForNode.png";
import recursion from "@/assets/recursion patterns.png";
import researchpaper from "@/assets/researchpaper.png"
import { Calendar, File, Linkedin, MessageSquareMoreIcon } from "lucide-react";
import { TwitterIcon } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";


import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

// Loader component for the paper theme
const PaperLoader: React.FC<{ onDone: () => void }> = ({ onDone }) => {
  const [showTrue, setShowTrue] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTrue(true), 1000);
    const doneTimer = setTimeout(onDone, 1800);
    return () => {
      clearTimeout(timer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div className="min-h-screen bg-white overflow-hidden font-sans relative flex items-center justify-center">
      {/* Paper background */}
      <div className="w-full min-h-screen absolute top-0 left-0 z-0">
        {Array.from({ length: 70 }).map((_, i) => (
          <div
            key={`h-line-loader-${i}`}
            className="absolute w-full h-[1px] bg-blue-100"
            style={{ top: `${(i + 1) * 40}px` }}
          />
        ))}
        {/* Red margin line intentionally hidden during loader */}
        {/* <div className="absolute h-full w-[1px] bg-red-400 left-[12px]  md:block" /> */}
      </div>
      {/* Loader content */}
      <div className="relative z-10">
        <div className="inline-block w-full px-2 bg-gray-100 border-2 border-black  py-4 rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,0.2)] font-mono text-lg text-black">
          typeof aman === "fastShipper"{' '}
          {showTrue && (
            <>
              <span className="ml-2 text-green-600 font-bold animate-fade-in">true</span>
              <span className="ml-3 inline-block align-middle">
                <svg className="w-6 h-6 text-green-500 inline" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [activeTab, setActiveTab] = useState("experience");
  const [showFullAbout, setShowFullAbout] = useState(false);
        
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#5d4747"},"dark":{"cal-brand":"#5d4747"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  if (showLoader) {
    return <PaperLoader onDone={() => setShowLoader(false)} />;
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden font-sans relative">
      {/* Notebook paper background */}
      <div className="w-full min-h-screen relative bg-white">
        {/* Horizontal ruled lines */}
        {Array.from({ length: 150 }).map((_, i) => (
          <div
            key={`h-line-${i}`}
            className="absolute w-full h-[1px] bg-blue-100"
            style={{ top: `${(i + 1) * 40}px` }}
          />
        ))}
        {/* Vertical margin line */}
        <div className="absolute h-full w-[1px] bg-red-400 left-[12px]  md:block" />
        {/* Main content container */}
        <div className="max-w-[1000px] mx-auto pt-6 md:pt-10 pb-20 px-4 md:px-8 relative ml-[10px] md:ml-[10px]">
          {/* Header with avatar and name */}
          <div className="flex flex-col md:flex-row items-center justify-center mb-8 md:mb-12 mt-4 md:mt-8">
            <div className="relative flex flex-col md:flex-row items-center">
              {/* Avatar container */}
              <div className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] relative mb-4 md:mb-0 md:mr-6">
                <div className="w-full h-full rounded-full border-2 border-black relative overflow-hidden">
                  <img
                    src="https://bamania.blob.core.windows.net/portfolio/pf1.jpg"
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Name with type integration */}
              <div className="text-center md:text-left">
                <div className="text-4xl md:text-7xl font-bold tracking-wide transform -rotate-1 md:ml-4">
                  <h1
                    className="font-black"
                    style={{ textShadow: "1px 1px 0 rgba(0,0,0,0.1)" }}
                  >
                    AMAN
                    <br />
                    YADAV
                  </h1>
                </div>
                {/* Dev Insider Type Check */}
               
              </div>
            </div>
          </div>

          {/* Links section */}
          <div className="max-w-[700px] mx-auto mt-6 md:mt-10 relative">
           
            {/* About Me Paragraph */}
            <div className="mb-2 p-5 bg-white  border-2 border-black rounded-xl shadow-sm">
              <div className="mb-2 font-semibold text-gray-800">tldr:</div>
              <ul className="list-disc pl-6 text-left space-y-1 text-gray-700">
                <li className="text-base">Full‑stack & GenAI is where my heart lies</li>
                <li className="text-base">Built both full‑stack products and AI agents from scratch (check projects)</li>
                <li className="text-base">Aggressively use AI to learn new tech on the go (check my blogs)</li>
                <li className="text-base">Love shipping fast & writing clean code (still learning, lol)</li>
                <li className="text-base">Outside of code: read markets (technical analysis), play guitar, and games</li>
              </ul>
            </div>
            {/* Read More Button (outside box) */}
            <div className="w-full">
              <button
                className="w-full mb-4 cursor-pointer transform transition-transform hover:scale-105 hover:-rotate-1"
                style={{ border: 'none', background: 'none', padding: 0 }}
                onClick={() => setShowFullAbout((v) => !v)}
              >
                <div className="w-full flex items-center bg-gray-100 border-2 border-black rounded-lg p-4 shadow-[3px_3px_0px_rgba(0,0,0,0.2)]">
                  <div className="w-10 h-10 flex items-center justify-center mr-4 border-2 border-black rounded-md">
                    {/* Lucide BookOpen icon */}
                    <MessageSquareMoreIcon/>

                  </div>
                  <span className="text-xl font-medium">{showFullAbout ? 'Show Less' : 'Read More About Me'}</span>
                </div>
              </button>
            </div>
            {showFullAbout && (
              <div className="mt-2 mb-6 text-gray-700 bg-gray-50 border-2 border-black rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,0.2)] p-4 space-y-3 text-base leading-relaxed">
                <p><span className="font-semibold">Currently a final year student at IIT Roorkee,</span> I started coding in my second year of college and have been coding ever since. Initially I got fascinated a lot by stock market and how it works, so yeah I used to read american authors and was really into it, devising my own system that could help me to navigate irrespective of market behaviours (<span className="font-semibold">Stan</span> and <span className="font-semibold">Mark Minervini</span> are my favs).</p>
                <p>I learned everything I know about coding from <span className="font-semibold">YouTube</span>, <span className="font-semibold">StackOverflow</span>, and blogs (<span className="font-semibold">medium blogs</span> are my favs), mainly, and still learning everyday, trying to get most of my coding. I have built projects in <span className="font-semibold">Next.js</span>, <span className="font-semibold">React</span>, <span className="font-semibold">Node.js</span>, <span className="font-semibold">Supabase</span>, <span className="font-semibold">n8n</span>, <span className="font-semibold">Electron.js</span>, and more (explore the experience and projects tab to see more).</p>
                <p>Apart from this, I love playing guitar and games, and I really hate the idea of building products from zero to 100 using <span className="font-semibold">AI</span> only, though I aggressively use <span className="font-semibold">AI</span> when I feel like using it (<span className="font-semibold">mostly learning lol, you will see this in my blogs</span>).</p>
              </div>
            )}
            
            {/* Download Resume Button */}
            <LinkButton
              icon={    <File />}
              text="Download Resume"
              // href="https://bamania.blob.core.windows.net/portfolio/Resume.pdf"
              href="https://drive.google.com/file/d/1LZL4DCjMY_l8vA18hBZIUElhHrfveycu/view?usp=sharing"
            />
            
            {/* Twitter link */}
            <LinkButton
              icon={<TwitterIcon />}
              text="connect on twitter"
              href="https://x.com/bamann_irani"
            />
            {/* Buy coffee link */}
            {/* <LinkButton
              icon={<i className="fas fa-coffee text-xl"></i>}
              text="buy me a coffee"
              href="https://buymeacoffee.com/alexparker"
            /> */}
            {/* LinkedIn link */}
            <LinkButton
              icon={<Linkedin />}
              text="connect on linkedin"
              href="https://www.linkedin.com/in/aman-yadav-a71105267/"
            />
            
            {/* Contact Me Button */}
            <div className="block mb-4 cursor-pointer transform transition-transform hover:scale-105 hover:-rotate-1">
              <div className="flex items-center bg-gray-100 border-2 border-black rounded-lg p-4 shadow-[3px_3px_0px_rgba(0,0,0,0.2)]">
                <div className="w-10 h-10 flex items-center justify-center mr-4 border-2 border-black rounded-md">
                <Calendar className="w-5 h-5" />
                </div>
                <button 
                  data-cal-namespace="15min"
                  data-cal-link="aman-yadav-slumpz/15min"
                  data-cal-config='{"layout":"month_view"}'
                  className="text-xl font-medium bg-transparent border-none cursor-pointer"
                >
                  Schedule a Meeting
                </button>
              </div>
            </div>
            {/* Tabs for different sections */}
            <div className="mt-8 md:mt-12 mb-6 md:mb-8 ">
              <Tabs
                defaultValue={activeTab}
                className="w-full"
                onValueChange={setActiveTab}
              >
                <TabsList className="w-full flex md:mb-8 justify-center items-center border-black rounded-button">
                  <TabsTrigger
                    value="projects"
                    className="data-[state=active]:bg-black data-[state=active]:text-white !rounded-button whitespace-nowrap text-sm md:text-base px-2 md:px-4"
                  >
                    <i className="fas fa-rocket mr-1 md:mr-2"></i>Projects
                  </TabsTrigger>
                  <TabsTrigger
                    value="experience"
                    className="data-[state=active]:bg-black data-[state=active]:text-white !rounded-button whitespace-nowrap text-sm md:text-base px-2 md:px-4"
                  >
                    <i className="fas fa-briefcase mr-1 md:mr-2"></i>Experience
                  </TabsTrigger>
                  <TabsTrigger
                    value="blog"
                    className="data-[state=active]:bg-black data-[state=active]:text-white !rounded-button whitespace-nowrap text-sm md:text-base px-2 md:px-4"
                  >
                    <i className="fas fa-pen-fancy mr-1 md:mr-2"></i>Blog
                  </TabsTrigger>
                </TabsList>

                {/* Projects Tab Content */}
                <TabsContent value="projects" className="mt-4">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center">
                    <i className="fas fa-rocket mr-2 md:mr-3"></i>
                    Featured Projects
                  </h2>

                  {/* Bento Grid Layout for Projects */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Featured Project - Large */}
                    <div className="col-span-1 md:col-span-6">
                      <ProjectCard
                        title="Ketamind - AI-Powered SaaS for Habit Building"
                        description="An AI-powered platform to help users build or break habits through personalized instructions and automated reminder calls, built with Next.js, Supabase, and n8n."
                        tags={["Next.js", "Supabase", "n8n"]}
                        image="https://placehold.co/400x300"
                        large={true}
                        githubUrl="https://github.com/Bamania/HabitElevate"
                      />
                    </div>

                    {/* Secondary Project - Medium */}
                    <div className="col-span-1 md:col-span-6">
                      <ProjectCard
                        title="Becha - AI Powered Chat Interface"
                        description="Real-time AI-driven content editor and context updater for customer support workflows, built with Next.js and WebSockets."
                        tags={["Next.js", "WebSockets", "AI"]}
                        image={becha}
                        githubUrl="https://github.com/Bamania/aiChatBackend"
                        deploymentUrl="https://ai-chatfrontend-git-main-amans-projects-1073e066.vercel.app/"
                      />
                    </div>

                    {/* Additional Projects */}
                    <div className="col-span-1 md:col-span-7">
                      <ProjectCard
                        title="SQL Agent"
                        description="An AI agent that translates natural language queries into SQL, executes them, and displays the results on a Next.js frontend."
                        tags={["Next.js", "AI", "SQL"]}
                        image={sql}
                        githubUrl="https://github.com/Bamania/sqlCommandAgent-server"
                        deploymentUrl="https://sql-command-agent-frontend.vercel.app/"
                      />
                    </div>

                    <div className="col-span-1 md:col-span-5">
                      <ProjectCard
                        title="Automatic GitHub PR Review System"
                        description="A system that uses AI to review GitHub pull requests automatically by generating and posting review comments, built with Next.js and NextAuth.js."
                        tags={["Next.js", "NextAuth.js", "AI"]}
                        image="https://placehold.co/400x300"
                        large={true}
                        githubUrl="https://github.com/Bamania/PR_Review-webhook-"
                        deploymentUrl="https://pr-review-webhook-b2sw.vercel.app/"
                      />
                    </div>
                  </div>

                  {/* Show More Button */}
                  <Button
                    onClick={() => setShowAllProjects(!showAllProjects)}
                    className="mt-8 mx-auto block !rounded-button border-2 border-black bg-white hover:bg-gray-100 text-black shadow-[3px_3px_0px_rgba(0,0,0,0.2)] transform transition-transform hover:scale-105 whitespace-nowrap cursor-pointer"
                  >
                    <i
                      className={`fas fa-chevron-${showAllProjects ? "up" : "down"} mr-2`}
                    ></i>
                    {showAllProjects ? "Show Less" : "Show More Projects"}
                  </Button>

                  {/* Extended Project List */}
                  {showAllProjects && (
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-6 md:mt-8 animate-fadeIn">
                      <div className="col-span-1 md:col-span-6">
                        <ProjectCard
                          title="WorkChain"
                          description="A decentralized freelance platform inspired by Fiverr, integrating smart contracts for secure payments and dispute resolution, built using the MERN stack and blockchain."
                          tags={["MERN", "Blockchain", "Smart Contracts"]}
                          image="https://placehold.co/400x300"
                          githubUrl="https://github.com/Bamania/workchain"
                        />
                      </div>
                      <div className="col-span-1 md:col-span-6">
                        <ProjectCard
                          title="Digital Menu System"
                          description="A QR-based restaurant ordering system with real-time order tracking, item selection, and customer feedback features, built for GDSC IIT Roorkee."
                          tags={["React.js", "QR Code", "Real-time"]}
                          image="https://placehold.co/400x300"
                          githubUrl="https://github.com/Bamania/digitalMenu"
                        />
                      </div>
                      <div className="col-span-1 md:col-span-12">
                        <ProjectCard
                          title="Chrome Extension - Web Annotator"
                          description="A Chrome extension for web-based note-taking and content management, built with JavaScript, Local Storage, and html2pdf.js for exporting notes as PDF."
                          tags={["JavaScript", "Chrome Extension", "PDF"]}
                          image="https://placehold.co/400x300"
                          large={true}
                          githubUrl="https://github.com/Bamania/WebAnnotator-The-tinkering-lab"
                        />
                      </div>
                    </div>
                  )}
                </TabsContent>

                {/* Experience Tab Content */}
                <TabsContent value="experience" className="mt-4">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center">
                    <i className="fas fa-briefcase mr-2 md:mr-3"></i>
                    Work Experience
                  </h2>

                  <div className="space-y-6 md:space-y-8">
                    <ExperienceCard
                      company="ArAi Labs"
                      position="Full Stack Developer"
                      period="July 2025 - Present"
                      location="Remote"
                      description="Sometimes I fix bugs, sometimes I help integrate and ship new tools for our agents , and sometimes I manage frontend state (React, Zustand, TanStack Query)."
                      skills={["fastapi", "Agno", "zustand", "Next.js","TanStackquery"]}
                      logo="https://media.licdn.com/dms/image/v2/D560BAQHEAof55-fqCQ/company-logo_100_100/company-logo_100_100/0/1738496646922?e=1762992000&v=beta&t=h_qC_wHNKate-r0RYCrs2hvgQvIvQJgayCJPOoL8dyk"
                    />
                    <ExperienceCard
                      company="CreaxOs"
                      position="Software Developer Intern"
                      period="September 2024 - April 2025"
                      location="Remote"
                      description="Developed a cross-platform desktop application using Electron.js, React, and Tailwind CSS. Built a robust state management system with Redux and intercepted Twitter and Instagram APIs through a proxy server to extract and optimize insights."
                      skills={["Electron.js", "React", "Redux", "Next.js"]}
                      logo="https://framerusercontent.com/images/FrDeBbUcZ4A4Y4iokJhkV5vB5YU.png?scale-down-to=512"
                    />

                    <ExperienceCard
                      company="INCO"
                      position="Frontend Developer Intern"
                      period="March 2024 - May 2024"
                      location="Remote"
                      description="Worked on a privacy-focused decentralized application (dApp). Designed and implemented responsive user interfaces using React.js and Tailwind CSS, ensuring seamless user experience aligned with best practices in decentralized web development."
                      skills={["React.js", "Tailwind CSS", "dApp"]}
                      logo="https://cdn.prod.website-files.com/671156d33ac264346e223043/67157664ef80e9650717a02e_logo%20(15).svg"
                    />
                  </div>
                </TabsContent>

                {/* Blog Tab Content */}
                <TabsContent value="blog" className="mt-4">
                  <div className="mb-4 text-gray-900 italic text-sm">Note: Most of my blogs are written as personal notes, so expect concise, practical insights rather than long essays.😏</div>
                  <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center">
                    <i className="fas fa-pen-fancy mr-2 md:mr-3"></i>
                    Latest Articles
                  </h2>

                  {/* Bento Grid Layout for Blog */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="col-span-1 md:col-span-8">
                      <BlogCard
                        title="Building AI Agents: From Zero to RAG-Powered Intelligence"
                        url="https://www.tldraw.com/p/YmIY-oThmfB7cDWtOMoia?d=v5931.6981.25520.15808.L6AKDpTrW5DiJ_EMmmDad"
                        excerpt="Exploring emerging technologies and methodologies that will shape the future of web development in the coming years."
                        image={rag}
                        readTime="Easy"
                        large={true}
                      />
                    </div>

                    <div className="col-span-1 md:col-span-4">
                      <BlogCard
                        title="JavaScript Deep Dive: Understanding the Hard Parts"
                        url="https://www.tldraw.com/p/c9ZPw5wMLCdfGSp-g4spk?d=v-11831.-4471.25248.15639.GPGVNlzPofcqS2CRrkcJ3"
                        excerpt="A comprehensive guide to learn the advance parts of the JS ,and how things work under the hood."
                        image={jsAdv}
                        readTime="Hard"
                      />
                    </div>

                    <div className="col-span-1 md:col-span-4">
                      <BlogCard
                        title="Node.js Architecture: A High-Level Overview(not really)"
                        url="https://www.tldraw.com/p/83k2C_lCSnVpGbhS-Q6ku?d=v552826.-7092.30720.15808.fbC7TX4BfJsHt4_Iwpqr-"
                        excerpt="Prepared an indepth guide to show how actually node works under the hood,especially how the node actually auto runs and auto create objects"
                        image={node}
                        readTime="Medium"
                      />
                    </div>

                    <div className="col-span-1 md:col-span-8">
                      <BlogCard
                        title="Data Structures and Algorithms"
                        url="https://www.tldraw.com/p/o-ue65dCNxEHyb5mq8iyx?d=v85841.-1988.4845.2326.NRUj_OU0SA1zQtNCVKaRd"
                        excerpt="A running list of important algorithms. I'm still learning and will update this blog as I discover more."
                        image={recursion}
                        readTime="Medium"
                        large={true}
                      />
                    </div>

                    <div className="col-span-1 md:col-span-12">
                      <BlogCard
                        title="Understanding ML with Research Paper"
                        url="https://www.tldraw.com/p/CYpcrc2Ehe6uZeGc_QQ_x?d=v-1828.-1886.6709.4156.kYWMCIYEEtHs1OaBj5gyG"
                        excerpt="Exploring machine learning concepts through in-depth analysis of research papers and practical experimentation."
                        image={researchpaper}
                        readTime="easy"
                        large={true}
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

           

           
          </div>

    
        </div>
      </div>

      {/* Interactive elements that follow cursor */}
      <div
        className="fixed w-6 h-6 pointer-events-none opacity-30 z-50"
      >
        <img
          src="https://placehold.co/400x300"
          alt="Cursor follower"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

interface LinkButtonProps {
  icon: React.ReactNode;
  text: string;
  href: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ icon, text, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block mb-4 cursor-pointer transform transition-transform hover:scale-105 hover:-rotate-1"
    >
      <div className="flex items-center bg-gray-100 border-2 border-black rounded-lg p-4 shadow-[3px_3px_0px_rgba(0,0,0,0.2)]">
        <div className="w-10 h-10 flex items-center justify-center mr-4 border-2 border-black rounded-md">
          {icon}
        </div>
        <span className="text-xl font-medium">{text}</span>
      </div>
    </a>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  large?: boolean;
  githubUrl?: string;
  deploymentUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  image,
  large = false,
  githubUrl,
  deploymentUrl,
}) => {
  return (
    <div className="border-2 border-black rounded-lg overflow-hidden bg-white transform transition-all duration-300 hover:scale-[1.02] hover:-rotate-1 h-full cursor-pointer">
      <div className={`${large ? "h-64" : "h-48"} overflow-hidden`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="border-2 border-black bg-gray-100"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          {githubUrl && (
            <Button
              onClick={(e) => {
                e.stopPropagation();
                window.open(githubUrl, '_blank');
              }}
              className="flex-1 !rounded-button border-2 border-black bg-white hover:bg-gray-100 text-black shadow-[3px_3px_0px_rgba(0,0,0,0.2)] transform transition-transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              <i className="fab fa-github mr-2"></i>
              GitHub
            </Button>
          )}
          {deploymentUrl && (
            <Button
              onClick={(e) => {
                e.stopPropagation();
                window.open(deploymentUrl, '_blank');
              }}
              className="flex-1 !rounded-button border-2 border-black bg-white hover:bg-gray-100 text-black shadow-[3px_3px_0px_rgba(0,0,0,0.2)] transform transition-transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              <i className="fas fa-external-link-alt mr-2"></i>
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

interface ExperienceCardProps {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
  logo: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  position,
  period,
  location,
  description,
  skills,
  logo,
}) => {
  return (
    <Card className="border-2 border-black overflow-hidden bg-white shadow-[3px_3px_0px_rgba(0,0,0,0.2)]">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 bg-gray-50 p-4 md:p-6 border-b-2 md:border-b-0 md:border-r-2 border-black flex flex-col items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 mb-3 md:mb-4">
              <img
                src={logo}
                alt={company}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-center">{company}</h3>
            <p className="text-gray-500 text-center text-sm md:text-base">{location}</p>
          </div>
          <div className="w-full md:w-3/4 p-4 md:p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3 md:mb-4">
              <h3 className="text-lg md:text-xl font-bold">{position}</h3>
              <Badge
                variant="outline"
                className="mt-2 md:mt-0 border-2 border-black bg-gray-100 text-xs md:text-sm"
              >
                {period}
              </Badge>
            </div>
            <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">{description}</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-2 border-black bg-gray-100 text-xs md:text-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface BlogCardProps {
  title: string;
  url: string;
  excerpt: string;
  image: string;
  readTime: string;
  large?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  url,
  excerpt,
  image,
  readTime,
  large = false,
}) => {
  return (
    <div className="border-2 border-black rounded-lg overflow-hidden bg-white transform transition-all duration-300 hover:scale-[1.02] hover:-rotate-1 h-full cursor-pointer">
      <div className={`${large ? "h-64" : "h-48"} overflow-hidden`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <Badge
            variant="outline"
            className="border-2 border-black bg-gray-100"
          >
            {readTime}
          </Badge>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{excerpt}</p>
        <Button 
          className="mt-4 !rounded-button border-2 border-black bg-white hover:bg-gray-100 text-black shadow-[3px_3px_0px_rgba(0,0,0,0.2)] transform transition-transform hover:scale-105 whitespace-nowrap cursor-pointer"
          onClick={() => window.open(`${url}`, '_blank')}
        >
          Read it ! <i className="fas fa-arrow-right ml-2"></i>
        </Button>
      </div>
    </div>
  );
};

export default Home;
