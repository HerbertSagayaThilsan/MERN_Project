import React, { useState } from "react";
    import { Button } from "./ui/button";
    import { Input } from "./ui/input";
    import { Textarea } from "./ui/textarea";
    import { Card, CardContent } from "./ui/card";
    import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
    import PortfolioDisplay from "./PortfolioDisplay";

    const PortfolioBuilder = () => {
      const [name, setName] = useState("");
      const [bio, setBio] = useState("");
      const [projects, setProjects] = useState([]);
      const [projectName, setProjectName] = useState("");
      const [projectDescription, setProjectDescription] = useState("");
      const [skills, setSkills] = useState("");
      const [experience, setExperience] = useState("");
      const [education, setEducation] = useState("");
      const [contact, setContact] = useState("");
      const [portfolioHosted, setPortfolioHosted] = useState(false);
      const [theme, setTheme] = useState("light");
      const [layout, setLayout] = useState("grid");

      const addProject = () => {
        if (projectName && projectDescription) {
          setProjects([...projects, { name: projectName, description: projectDescription }]);
          setProjectName("");
          setProjectDescription("");
        }
      };

      const hostPortfolio = () => {
        setPortfolioHosted(true);
      };

      return (
        <div className={`p-6 max-w-4xl mx-auto ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
          <h1 className="text-2xl font-bold mb-4">Portfolio Builder</h1>
          {!portfolioHosted ? (
            <Card>
              <CardContent className="p-4">
  <div className="flex flex-col space-y-4">
    <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full" />
    <Textarea placeholder="Short Bio" value={bio} onChange={(e) => setBio(e.target.value)} className="w-full p-4 min-h-[50px]" />
    <Textarea placeholder="Skills" value={skills} onChange={(e) => setSkills(e.target.value)} className="w-full p-4" />
    <Textarea placeholder="Work Experience" value={experience} onChange={(e) => setExperience(e.target.value)} className="w-full p-4" />
    <Textarea placeholder="Education" value={education} onChange={(e) => setEducation(e.target.value)} className="w-full p-4" />
    <Textarea placeholder="Contact Information" value={contact} onChange={(e) => setContact(e.target.value)} className="w-full p-4" />
  </div>

                <h2 className="text-xl font-semibold mb-2">Add Projects</h2>
                <div className="flex flex-col space-y-4">
  <Input placeholder="Project Name" value={projectName} onChange={(e) => setProjectName(e.target.value)} className="w-full" />
  <Textarea placeholder="Project Description" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} className="w-full p-4 min-h-[50px]" />
  <Button onClick={addProject} className="w-full">Add Project</Button>
</div>

                <h2 className="text-xl font-semibold mb-2">Portfolio Settings</h2>
                <Select onValueChange={setTheme} value={theme}>
                  <SelectTrigger className="mb-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light Theme</SelectItem>
                    <SelectItem value="dark">Dark Theme</SelectItem>
                  </SelectContent>
                </Select>
                <Select onValueChange={setLayout} value={layout}>
                  <SelectTrigger className="mb-4">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grid">Grid Layout</SelectItem>
                    <SelectItem value="list">List Layout</SelectItem>
                    <SelectItem value="resume">Resume Layout</SelectItem>
                  </SelectContent>
                </Select>
                <Button onClick={hostPortfolio} className="mt-4">Host Portfolio</Button>
              </CardContent>
            </Card>
          ) : (
            <PortfolioDisplay
              name={name}
              bio={bio}
              projects={projects}
              skills={skills}
              experience={experience}
              education={education}
              contact={contact}
              theme={theme}
              layout={layout}
            />
          )}
        </div>
      );
    };

    export default PortfolioBuilder;
