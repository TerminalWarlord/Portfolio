import React from 'react'
import Card from './card';


const PROJECTS = [
  {
    title: 'TeleBuzzed.Com',
    description: 'A React-based frontend for TeleBuzzed, a comprehensive directory for Telegram bots, channels, and groups. and backend made with Node.js, Express, Mongoose, and JWT. Deployed the frontend on Cloudflare Pages and backend on VPS with PM2 and ngnix.',
    imagePath: '/images/telebuzzed.png',
    links: [
      {
        title: 'Demo',
        url: 'https://telebuzzed.com'
      },
      {
        title: 'Github (Frontend)',
        url: 'https://github.com/TerminalWarlord/TeleBuzzed-Frontend'
      },
      {
        title: 'Github (Backend)',
        url: 'https://github.com/TerminalWarlord/TeleBuzzed-Backend'
      }
    ],
    stacks: ['React', 'Node', 'Mongoose', 'Express', 'JWT']
  },
  {
    title: 'Contest Tracker',
    description: 'A web application to track programming contests from platforms like Codeforces, CodeChef, and LeetCode. Users can view upcoming contests, filter them by platform, and bookmark contests for future reference.',
    imagePath: '/images/contest-tracker.png',
    links: [
      {
        title: 'Demo (YT)',
        url: 'https://youtu.be/PjjFXlFiu6U?si=dV5ECfdMYYE0K_ej'
      },
      {
        title: 'Github',
        url: 'https://github.com/TerminalWarlord/TLE-Contest-Tracker'
      }
    ],
    stacks: ['React', 'Node', 'Mongoose', 'Express', 'Typescript']
  },
  {
    title: '3D SuperShop using GLUT OpenGL Project',
    description: 'The project is a 3D super shop environment that offers users an immersive retail experience. It features detailed elements such as elevators, reception, petrol pumps, roads, fences, doors, shelves, lighting setups, and product displays, enhanced by advanced texturing techniques for realism.',
    imagePath: '/images/3d-shop.png',
    links: [
      {
        title: 'Demo (YT)',
        url: 'https://www.youtube.com/watch?v=_jt4uKhp3S8'
      },
      {
        title: 'Github',
        url: 'https://github.com/TerminalWarlord/3D-SuperShop-A-Graphics-Project'
      }
    ],
    stacks: ['C++', 'OpenGL', 'GLUT/FreeGLUT']
  },

  {
    title: 'Course Management System',
    description: 'The Course Management System is designed to manage users, departments, courses, and sessions.',
    links: [
      {
        title: 'Github',
        url: 'https://github.com/TerminalWarlord/Course-Management-System'
      }
    ],
    stacks: ['PHP', 'Laravel', 'MySQL']
  },
  
];

const Projects = () => {
  return (
    <div id='projects' className=''>
      {PROJECTS.map(project => {
        return <Card
          key={project.title}
          description={project.description}
          role={project.title}
          links={project.links}
          stacks={project.stacks}
          imagePath={project.imagePath}
        />
      })}
      {/* <Card
        description='A web application to track programming contests from platforms like Codeforces, CodeChef, and LeetCode. Users can view upcoming contests, filter them by platform, and bookmark contests for future reference.'
        imagePath='/images/contest-tracker.png'
        role='Contest Tracker'
        links={[
          {
            title: 'Demo',
            url: 'https://contest-tracker.joybiswas.com/'
          },
          {
            title: 'Github',
            url: 'https://github.com/TerminalWarlord/TLE-Contest-Tracker'
          }
        ]}
        stacks={['React', 'Node', 'Mongoose', 'Express']}

      /> */}

    </div>
  )
}

export default Projects;