import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaSchool, FaShoppingBag as WorkIcon, FaStar } from "react-icons/fa";
import 'react-vertical-timeline-component/style.min.css';

import './Timeline.scss';

export const Timeline: React.FC = () => {
    return <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(205, 118, 80, 0.4)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgba(205, 118, 80, 0.4)' }}
            date="Sept 2023 - present"
            iconStyle={{ background: 'rgb(205, 118, 80)', color: '#fff' }}
            icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Lead Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">Architecture Disigning, Legacy System Modernization, Project Setup, Micro-Services, Event Driven Systems, Backend For Frontend, Product Management</h4>
            <p>
                Thoughtworks Technologies
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Nov 2017 - Sept 2023"
            iconStyle={{ background: 'rgb(99, 99, 99)', color: '#fff' }}
            icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Senior Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">Javascript, Typescript, React, Angular, GoLang, Kafka, Unit Testing, Docker, Kubernetes & Postgres</h4>
            <p>
                Thoughtworks Technologies
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Apr 2017 - Nov 2017"
            iconStyle={{ background: 'rgb(99, 99, 99)', color: '#fff' }}
            icon={<FaSchool />}
        >
            <h3 className="vertical-timeline-element-title">Senior Associate - Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">C#, ASP.NET MVC, MS-SQL, Web Services, Javascript, JQuery</h4>
            <p>
                Synechron Tech. Pvt. Ltd.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="May 2015 - Mar 2017"
            iconStyle={{ background: 'rgb(99, 99, 99)', color: '#fff' }}
            icon={<FaSchool />}
        >
            <h3 className="vertical-timeline-element-title">Associate - Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">C#, ASP.NET MVC, MS-SQL</h4>
            <p>
                Synechron Tech. Pvt. Ltd.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="May 2014 - Apr 2015"
            iconStyle={{ background: 'rgb(99, 99, 99)', color: '#fff' }}
            icon={<FaSchool />}
        >
            <h3 className="vertical-timeline-element-title">Junior Associate - Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">C#, Web Forms, ASP, MS-SQL</h4>
            <p>
                Synechron Tech. Pvt. Ltd.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2009 - 2013"
            iconStyle={{ background: 'rgb(99, 99, 99)', color: '#fff' }}
            icon={<FaSchool />}
        >
            <h3 className="vertical-timeline-element-title">Bachelor of Computer Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>
                MIT AOE, Alandi, Pune
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="June 2009"
            iconStyle={{ background: 'rgb(99, 99, 99)', color: '#fff' }}
            icon={<FaSchool />}
        >
            <h3 className="vertical-timeline-element-title">Higher School Certificate (Science)</h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>
                NESJ, Jamner
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<FaStar />}
        />
    </VerticalTimeline>
}


export default Timeline;