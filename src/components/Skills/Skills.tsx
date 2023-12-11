import React from 'react';
import { IconType } from 'react-icons';
import { IoLogoReact, IoLogoAngular, IoLogoHtml5, IoLogoCss3, IoLogoSass, IoLogoDocker } from "react-icons/io5";
import { BiLogoGoLang, BiLogoTypescript } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { SiKubernetes } from "react-icons/si";
import { TbSql, TbBrandRedux } from "react-icons/tb";
import { FaGit } from "react-icons/fa";


import './Skills.scss';

export const Skills: React.FC = () => {
    const components: { [key: string]: IconType } = {
        JS: IoLogoJavascript,
        TS: BiLogoTypescript,
        HTML: IoLogoHtml5,
        REACT: IoLogoReact,
        ANGULAR: IoLogoAngular,
        CSS: IoLogoCss3,
        SASS: IoLogoSass,
        GO: BiLogoGoLang,
        DOCKER: IoLogoDocker,
        KUBE: SiKubernetes,
        SQL: TbSql,
        GIT: FaGit,
        REDUX: TbBrandRedux
    }
    const skillDetails: string[] = [
        "JS",
        "TS",
        "HTML",
        "CSS",
        "SASS",
        "REACT",
        "ANGULAR",
        "GO",
        "DOCKER",
        "KUBE",
        "SQL",
        "GIT",
        "REDUX"
    ];

    return (<div className='skills'>
        {skillDetails.map((skill, index) => {
            return (<div className='skill' key={index}>
                <span className='content'>
                    {React.createElement(components[skill], {})}
                </span>
            </div>);
        })}
    </div>)
}


export default Skills;