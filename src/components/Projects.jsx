import React from "react";
import "./styles/Projects.css";

const Projects = () => {
  const projectList = [
    {
      title: "Plauderpinguin",
      description: "PlauderPinguin ist eine einfache Web-Chat-Anwendung, die es Nutzern ermöglicht, miteinander zu kommunizieren. Benutzer müssen sich zuerst registrieren und dann anmelden, um mit anderen Nutzern chatten zu können. Die App basiert auf einer ASP.NET Core-Web-API im Backend und auf React.js mit Vanilla CSS im Frontend.",
      imageUrl: "./img/PlauderpinguinPreview1.PNG",
      linkToGitHub: "https://github.com/Goeschel18769/PlauderPinguin",
      linkToSite: "",
    },
    {
      title: "Beaver Runner",
      description:
        "Beaver Run ist ein 2D-Jump-and-Run-Spiel, das in Unity mit C# entwickelt wurde. Das Ziel des Spiels ist es, mit dem Biber-Charakter zwei verschiedene Level erfolgreich zu absolvieren. Jedes der beiden Level bietet eine einzigartige Umgebung: Ein Wüstenlevel, in dem der Biber von Sandinsel zu Sandinsel hüpft, und ein Stadtlevel, in dem der Biber zwischen Strassenteilen hin und her springt.",
      imageUrl: "./img/BeaverRunPreview1.png",
      linkToGitHub: "https://github.com/Goeschel18769/BeaverRunner",
      linkToSite: "",
    },
    {
      title: "Ideeninsel",
      description: "Die Ideeninsel ist eine Webapp, die mit ReactJS für das Frontend und Firestore von Firebase für das Backend programmiert wurde. Auf der Webseite können Leute ihre Ideen auf einer Pinnwand für sich selbst und andere speichern, und andere Personen können sich diese anschauen.",
      imageUrl: "./img/ideeninselPreview.PNG",
      linkToGitHub: "https://github.com/Goeschel18769/La-1304-IdeenInsel",
      linkToSite: "https://ideeninsel.netlify.app",
    },
  ];

  return (
    <div className="projects">
      <h1>Projekte</h1>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-image"
            />

            <p>{project.description}</p>
            <a href={project.linkToGitHub} target="_blank" rel="noopener noreferrer">
              zum Code
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
