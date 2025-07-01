// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import rag from "@/assets/RAGnarok.png";
import sql from "@/assets/sqlagent.png";
import becha from "@/assets/Screenshot_1.png";
import jsAdv from "@/assets/jsAdv.png";
import { Calendar, File, Linkedin } from "lucide-react";
import { TwitterIcon } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const Home: React.FC = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [activeTab, setActiveTab] = useState("experience");
        
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#5d4747"},"dark":{"cal-brand":"#5d4747"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden font-['Comic_Sans_MS',_cursive] relative">
      {/* Notebook paper background */}
      <div className="w-full min-h-screen relative bg-white">
        {/* Horizontal ruled lines */}
        {Array.from({ length: 45 }).map((_, i) => (
          <div
            key={`h-line-${i}`}
            className="absolute w-full h-[1px] bg-blue-100"
            style={{ top: `${(i + 1) * 40}px` }}
          />
        ))}
        {/* Vertical margin line */}
        <div className="absolute h-full w-[1px] bg-red-400 left-[120px]" />
        {/* Main content container */}
        <div className="max-w-[1000px] mx-auto pt-10 pb-20 px-8 relative">
          {/* Header with avatar and name */}
          <div className="flex items-center justify-center mb-12 mt-8">
            <div className="relative">
              {/* Avatar container */}
              <div className="w-[120px] h-[120px] relative mr-6">
              <div className="w-full h-full rounded-full border-2 border-black relative overflow-hidden">
                  <img
                    src="https://bamania.blob.core.windows.net/portfolio/pf1.jpg"
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                
                </div>
              </div>
              {/* Name */}
              <div className="text-7xl font-bold tracking-wide transform -rotate-1 ml-4">
                <h1
                  className="font-black"
                  style={{ textShadow: "1px 1px 0 rgba(0,0,0,0.1)" }}
                >
                  AMAN
                  <br />
                  YADAV
                </h1>
              </div>
            
            </div>
          </div>

          {/* Links section */}
          <div className="max-w-[700px] mx-auto mt-10 relative">
           
            
            {/* Download Resume Button */}
            <LinkButton
              icon={    <File />}
              text="Download Resume"
              href="https://bamania.blob.core.windows.net/portfolio/Resume.pdf"
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
            <div className="mt-12 mb-8">
              <Tabs
                defaultValue={activeTab}
                className="w-full"
                onValueChange={setActiveTab}
              >
                <TabsList className="grid w-full grid-cols-3 mb-8 border-2 border-black !rounded-button">
                  <TabsTrigger
                    value="projects"
                    className="data-[state=active]:bg-black data-[state=active]:text-white !rounded-button whitespace-nowrap"
                  >
                    <i className="fas fa-rocket mr-2"></i>Projects
                  </TabsTrigger>
                  <TabsTrigger
                    value="experience"
                    className="data-[state=active]:bg-black data-[state=active]:text-white !rounded-button whitespace-nowrap"
                  >
                    <i className="fas fa-briefcase mr-2"></i>Experience
                  </TabsTrigger>
                  <TabsTrigger
                    value="blog"
                    className="data-[state=active]:bg-black data-[state=active]:text-white !rounded-button whitespace-nowrap"
                  >
                    <i className="fas fa-pen-fancy mr-2"></i>Blog
                  </TabsTrigger>
                </TabsList>

                {/* Projects Tab Content */}
                <TabsContent value="projects" className="mt-4">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <i className="fas fa-rocket mr-3"></i>
                    Featured Projects
                  </h2>

                  {/* Bento Grid Layout for Projects */}
                  <div className="grid grid-cols-12 gap-4">
                    {/* Featured Project - Large */}
                    <div className="col-span-12 md:col-span-6">
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
                    <div className="col-span-12 md:col-span-6">
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
                    <div className="col-span-12 md:col-span-7">
                      <ProjectCard
                        title="SQL Agent"
                        description="An AI agent that translates natural language queries into SQL, executes them, and displays the results on a Next.js frontend."
                        tags={["Next.js", "AI", "SQL"]}
                        image={sql}
                        githubUrl="https://github.com/Bamania/sqlCommandAgent-server"
                        deploymentUrl="https://sql-command-agent-frontend.vercel.app/"
                      />
                    </div>

                    <div className="col-span-12 md:col-span-5">
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
                    <div className="grid grid-cols-12 gap-4 mt-8 animate-fadeIn">
                      <div className="col-span-12 md:col-span-6">
                        <ProjectCard
                          title="WorkChain"
                          description="A decentralized freelance platform inspired by Fiverr, integrating smart contracts for secure payments and dispute resolution, built using the MERN stack and blockchain."
                          tags={["MERN", "Blockchain", "Smart Contracts"]}
                          image="https://placehold.co/400x300"
                          githubUrl="https://github.com/Bamania/workchain"
                        />
                      </div>
                      <div className="col-span-12 md:col-span-6">
                        <ProjectCard
                          title="Digital Menu System"
                          description="A QR-based restaurant ordering system with real-time order tracking, item selection, and customer feedback features, built for GDSC IIT Roorkee."
                          tags={["React.js", "QR Code", "Real-time"]}
                          image="https://placehold.co/400x300"
                          githubUrl="https://github.com/Bamania/digitalMenu"
                        />
                      </div>
                      <div className="col-span-12">
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
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <i className="fas fa-briefcase mr-3"></i>
                    Work Experience
                  </h2>

                  <div className="space-y-8">
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
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <i className="fas fa-pen-fancy mr-3"></i>
                    Latest Articles
                  </h2>

                  {/* Bento Grid Layout for Blog */}
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-8">
                      <BlogCard
                        title="Learn to build an AI agent (from scratch + RAG)"
                        url="https://www.tldraw.com/p/YmIY-oThmfB7cDWtOMoia?d=v-10069.6981.35760.20464.L6AKDpTrW5DiJ_EMmmDad"
                        excerpt="Exploring emerging technologies and methodologies that will shape the future of web development in the coming years."
                        image={rag}
                        readTime="8 min read"
                        large={true}
                      />
                    </div>

                    <div className="col-span-12 md:col-span-4">
                      <BlogCard
                        title="Mastering JS(THE HARD PARTS OF JS)"
                        url="https://www.tldraw.com/p/c9ZPw5wMLCdfGSp-g4spk?d=v-11851.-9773.35760.20464.GPGVNlzPofcqS2CRrkcJ3"
                        excerpt="A comprehensive guide to learn the advance parts of the JS ,and how things work under the hood."
                        image={jsAdv}
                        readTime="5 min read"
                      />
                    </div>

                    {/* <div className="col-span-12 md:col-span-4">
                      <BlogCard
                        title="WebAssembly: A Beginner's Guide"
                        url="May 28, 2025"
                        excerpt="Understanding the basics of WebAssembly and how it's changing web performance."
                        image="https://readdy.ai/api/search-image?query=WebAssembly%20concept%20illustration%2C%20code%20compilation%20visualization%2C%20web%20technology%20diagram%2C%20technical%20illustration%2C%20notebook%20paper%20texture%20background&width=400&height=300&seq=blog3&orientation=landscape"
                        readTime="6 min read"
                      />
                    </div>

                    <div className="col-span-12 md:col-span-8">
                      <BlogCard
                        title="Building Accessible Web Applications"
                        url="May 10, 2025"
                        excerpt="Best practices and techniques for creating web applications that are accessible to everyone, including users with disabilities."
                        image="https://readdy.ai/api/search-image?query=Web%20accessibility%20illustration%2C%20inclusive%20design%20concept%2C%20diverse%20users%20interacting%20with%20interfaces%2C%20modern%20UI%2FUX%20design%2C%20notebook%20paper%20texture%20background&width=800&height=300&seq=blog4&orientation=landscape"
                        readTime="10 min read"
                        large={true}
                      />
                    </div> */}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

           

            {/* Small note about design */}
            {/* <div className="absolute right-[-10px] bottom-[-80px] transform rotate-12 text-xs text-gray-600">
              <p>that's me</p>
              <img
                src="https://readdy.ai/api/search-image?query=Hand-drawn%20curved%20arrow%20pointing%20down%2C%20black%20sketch%20style%2C%20doodle%20on%20notebook%20paper%2C%20simple%20line%20art&width=80&height=80&seq=arrow2&orientation=squarish"
                alt="Arrow pointing down"
                className="w-16 h-16 object-contain"
              />
            </div> */}
          </div>

          {/* Robot doodle at bottom left */}
          {/* <div className="relative right-2  bottom-10 ">
            <img
              src="https://readdy.ai/api/search-image?query=Hand-drawn%20robot%20doodle%2C%20cute%20cartoon%20style%2C%20black%20and%20white%20sketch%20on%20notebook%20paper%2C%20simple%20line%20art%2C%20small%20character&width=150&height=150&seq=robot1&orientation=squarish"
              alt="Robot doodle"
              className="w-28 h-28 object-contain"
            />
          </div> */}

          {/* Small note about snail */}
          {/* <div className="absolute left-[200px] top-[350px] transform -rotate-6 text-xs text-gray-600">
            <p>
              why does it
              <br />
              look like a<br />
              SNAIL? ♥
            </p>
          </div> */}

          {/* Designer credit */}
          {/* <div className="absolute right-[40px] bottom-[20px] flex items-center text-sm text-gray-600">
            <span className="mr-2">design by</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="w-8 h-8 rounded-full border border-gray-300 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=Minimalist%20avatar%20icon%2C%20simple%20line%20art%20style%2C%20black%20and%20white%20sketch%20on%20paper&width=50&height=50&seq=designer1&orientation=squarish"
                      alt="Designer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </TooltipTrigger>
              
              </Tooltip>
            </TooltipProvider>
            <span className="ml-2">Maya</span>
          </div> */}
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
          className="w-full h-full object-fill object-top"
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
          <div className="w-full md:w-1/4 bg-gray-50 p-6 border-r-2 border-black flex flex-col items-center justify-center">
            <div className="w-20 h-20 mb-4">
              <img
                src={logo}
                alt={company}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-center">{company}</h3>
            <p className="text-gray-500 text-center">{location}</p>
          </div>
          <div className="w-full md:w-3/4 p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl font-bold">{position}</h3>
              <Badge
                variant="outline"
                className="mt-2 md:mt-0 border-2 border-black bg-gray-100"
              >
                {period}
              </Badge>
            </div>
            <p className="text-gray-600 mb-6">{description}</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-2 border-black bg-gray-100"
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
