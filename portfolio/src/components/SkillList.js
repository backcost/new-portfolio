import React from 'react';
import { FaNodeJs, FaReact, FaMobileAlt, FaHtml5, FaCss3, FaFileCode, FaWind, FaBootstrap, FaSass, FaPython, FaGitAlt, FaChartBar, FaFileExcel } from 'react-icons/fa';
import { SiMysql, SiMicrosoftsqlserver, SiTypescript, SiJavascript } from 'react-icons/si';

const SkillList = () => {
  const skills = [
    ['Node.Js', <FaNodeJs />],
    ['React.js', <FaReact />],
    ['React Native', <FaMobileAlt />],
    ['MySQL', <SiMysql />],
    ['MSSQL', <SiMicrosoftsqlserver />],
    ['JavaScript', <SiJavascript />],
    ['HTML', <FaHtml5 />],
    ['CSS', <FaCss3 />],
    ['TypeScript', <SiTypescript />],
    ['Styled Components', <FaFileCode />],
    ['Tailwind CSS', <FaWind />],
    ['Bootstrap', <FaBootstrap />],
    ['SASS', <FaSass />],
    ['Python', <FaPython />],
    ['Git', <FaGitAlt />],
    ['Power BI', <FaChartBar />],
    ['Microsoft Excel', <FaFileExcel />],
  ];

  return (
    <div className='flex justify-center items-center w-[95%] mx-auto'>
        <ul className="grid grid-cols-3 gap-y-4 gap-x-32 xl:gap-x-24 lg:grid-cols-2 
        sm:grid-cols-1">
          {skills.map((skill) => (
            <li key={skill[0]} className="flex items-center space-x-2">
              {skill[1]}{`\xa0\xa0`}{skill[0]}
            </li>
          ))}
        </ul>
    </div>
  );
};

export default SkillList;
