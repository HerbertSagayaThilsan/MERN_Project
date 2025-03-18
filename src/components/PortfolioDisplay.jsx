const PortfolioDisplay = ({ name, bio, projects, skills, experience, education, contact, theme, layout }) => {
  return (
    <div className={`border-2 p-6 rounded-lg shadow-lg w-full overflow-hidden ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <h1 className="text-3xl font-bold mb-2 break-words">{name}'s Portfolio</h1>
      <p className="mb-4 break-words p-4">{bio}</p>
      <h2 className="text-2xl font-semibold mb-2">Skills</h2>
      <p className="mb-4 break-words p-4">{skills}</p>
      <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
      <p className="mb-4 break-words p-4">{experience}</p>
      <h2 className="text-2xl font-semibold mb-2">Education</h2>
      <p className="mb-4 break-words p-4">{education}</p>
      <h2 className="text-2xl font-semibold mb-2">Projects</h2>
      <div className={layout === "grid" ? "grid grid-cols-2 gap-4" : layout === "resume" ? "flex flex-col" : "flex flex-col"}>
        {projects.map((project, index) => (
          <div key={index} className="mb-2 p-6 w-full overflow-hidden">
            <h3 className="font-bold break-words text-lg">{project.name}</h3>
            <p className="break-words p-4 w-full" style={{ minHeight: project.description.length > 100 ? "150px" : "50px" }}>{project.description}</p>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-semibold mt-4">Contact Information</h2>
      <p className="mb-4 break-words p-4">{contact}</p>
    </div>
  );
};

export default PortfolioDisplay;
