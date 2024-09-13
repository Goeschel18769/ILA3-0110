import React from "react";
import "./styles/About.css";
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";

function calculateAge(birthday) {
  const today = new Date();
  const birthDate = new Date(birthday);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

const About = () => {
  const birthday = "2006-11-26";
  const age = calculateAge(birthday);

  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="personalInfo">
        <table id="factsTable">
          <tbody>
            <tr>
              <td className="factTitle">Name:</td>
              <td className="factValue">Joël Haldimann</td>
            </tr>
            <tr>
              <td className="factTitle">Alter:</td>
              <td className="factValue">{age}</td>
            </tr>
            <tr>
              <td className="factTitle">Geburtstag:</td>
              <td className="factValue">
                {birthday.split("-").reverse().join(".")}
              </td>
            </tr>
            <tr>
              <td className="factTitle">Ausbildung:</td>
              <td className="factValue">
                Informatiker EFZ Applikationsentwicklung
              </td>
            </tr>
            <tr>
              <td className="factTitle">Wohnort:</td>
              <td className="factValue">Aarau</td>
            </tr>
            <tr>
              <td className="factTitle">Hobby:</td>
              <td className="factValue">Ski fahren</td>
            </tr>
          </tbody>
        </table>
        <img
          src="./img/AboutMeImg.png"
          alt="Joël Haldimann"
          className="profileImage"
        />
      </div>

      <h2>My Skills</h2>
      <div className="skills">
        <div className="skill">
          <FaReact className="skillsLogos" />
          <h3>React</h3>
        </div>
        <div className="skill">
          <FaJs className="skillsLogos" />
          <h3>JavaScript</h3>
        </div>
        <div className="skill">
          <FaCss3Alt className="skillsLogos" />
          <h3>CSS</h3>
        </div>
        <div className="skill">
          <FaHtml5 className="skillsLogos" />
          <h3>HTML</h3>
        </div>
        <div className="skill">
          <BiLogoMongodb className="skillsLogos" />
          <h3>MongoDB</h3>
        </div>
        <div className="skillImg">
          <img src="./img/csharpLogo.svg" alt="C#" id="CSharpLogo" />
          <h3>C#</h3>
        </div>
        <div className="skillImg">
          <img src="./img/dotNetLogo.svg" alt=".NET" id="dotNetLogo" />
          <h3>.NET</h3>
        </div>
        <div className="skill">
          <BsFiletypeSql className="skillsLogos" />
          <h3>SQL</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
