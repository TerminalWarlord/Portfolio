import React from 'react'
import Card from './card';

const Projects = () => {
  return (
    <div id='projects' className=''>
      <Card
        description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dignissimos accusantium quod. Cumque voluptatum a, quibusdam nam iste, officia tempora odit sequi sit hic sapiente perferendis assumenda, harum ut molestias.'
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

      />

    </div>
  )
}

export default Projects;