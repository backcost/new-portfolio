import React from 'react';
import { FaNodeJs, FaReact, FaMobileAlt, FaHtml5, FaCss3, FaFileCode, FaWind, FaBootstrap, FaSass, FaPython, FaGitAlt, FaChartBar, FaFileExcel } from 'react-icons/fa';
import { SiMysql, SiMicrosoftsqlserver, SiTypescript, SiJavascript } from 'react-icons/si';

const SkillList = () => {
  const skills = [
    ['Node.Js', <FaNodeJs />, 1],
    ['React.js', <FaReact />, 2],
    ['React Native', <FaMobileAlt />, 3],
    ['MySQL', <SiMysql />, 4],
    ['MSSQL', <SiMicrosoftsqlserver />, 5],
    ['JavaScript', <SiJavascript />, 6],
    ['HTML', <FaHtml5 />, 7],
    ['CSS', <FaCss3 />, 8],
    ['TypeScript', <SiTypescript />, 9],
    ['Styled Components', <FaFileCode />, 10],
    ['Tailwind CSS', <FaWind />, 11],
    ['Bootstrap', <FaBootstrap />, 12],
    ['SASS', <FaSass />, 13],
    ['Python', <FaPython />, 14],
    ['Git', <FaGitAlt />, 15],
    ['Power BI', <FaChartBar />, 16],
    ['Microsoft Excel', <FaFileExcel />, 17],
  ];


  return (
    <div className='flex justify-center items-center w-[95%] mx-auto'>
        <ul className="grid grid-cols-3 gap-y-4 gap-x-32 xl:gap-x-24 lg:grid-cols-2 
        sm:grid-cols-1">
          {skills.map((skill, index) => (
            <li key={skill[2]} className="flex items-center space-x-2">
              {skill[1]}{`\xa0\xa0`}{skill[0]}
            </li>
          ))}
        </ul>
    </div>
  );
};

export default SkillList;
