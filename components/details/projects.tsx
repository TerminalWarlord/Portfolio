import React from 'react'
import Card from './card';

const Projects = () => {
  return (
    <div id='projects' className=''>
      <Card
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

      />

    </div>
  )
}

export default Projects;