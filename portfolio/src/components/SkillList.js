import React from 'react';
import { FaNodeJs, FaReact, FaMobileAlt, FaHtml5, FaCss3, FaFileCode, FaWind, FaBootstrap, FaSass, FaPython, FaGitAlt, FaChartBar, FaFileExcel } from 'react-icons/fa';
import { SiMysql, SiMicrosoftsqlserver, SiTypescript, SiJavascript } from 'react-icons/si';

const SkillList = () => {
  const skills = {
    'Node.Js': <FaNodeJs />,
    'React.js': <FaReact />,
    'React Native': <FaMobileAlt />,
    'MySQL': <SiMysql />,
    'MSSQL': <SiMicrosoftsqlserver />,
    'JavaScript': <SiJavascript />,
    'HTML': <FaHtml5 />,
    'CSS': <FaCss3 />,
    'TypeScript': <SiTypescript />,
    'Styled Components': <FaFileCode />,
    'Tailwind CSS': <FaWind />,
    'Bootstrap': <FaBootstrap />,
    'SASS': <FaSass />,
    'Python': <FaPython />,
    'Git': <FaGitAlt />,
    'Power BI': <FaChartBar />,
    'Microsoft Excel': <FaFileExcel />,
  };
  
  const columnCount = 3;

  const skillColumns = [];
  for (let i = 0; i < columnCount; i++) {
    skillColumns.push([]);
  }

  let keys = Object.keys(skills)
  keys.forEach((skill, index) => {
    const columnIndex = index % columnCount;
    skillColumns[columnIndex].push(skill);
  });

  return (
    <div className='flex justify-center items-center'>
      <div className="grid grid-cols-3 gap-4">
      {skillColumns.map((column, columnIndex) => (
        <ul key={columnIndex} className="list-disc ml-20 mr-20">
          {column.map((skill, skillIndex) => (
            <li key={skillIndex} className="flex items-center space-x-2">
              {skills[skill]}{`\xa0\xa0`}{skill}
            </li>
          ))}
        </ul>
      ))}
      </div>
    </div>
  );
};

export default SkillList;
