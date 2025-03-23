import React from 'react'
import ExperienceCard from './experience-card'

const Experience = () => {
  return (
    <div className='w-full' id='experience'>
      <ExperienceCard
        from='2024'
        role='Senior Software engineer'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae deserunt impedit placeat beatae, soluta quod cumque ipsum nobis harum, quos excepturi autem ea. Aliquid, incidunt. Error facilis libero accusamus doloremque dolor quisquam omnis placeat! Eum iure quaerat, error impedit est molestias labore dolor corrupti nemo, esse, earum aut eligendi!'
        stacks={['Typescript', 'React', 'Node', 'Prisma', 'Prisma']}
      />
      <ExperienceCard
        from='2024'
        role='Senior Software engineer'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae deserunt impedit placeat beatae, soluta quod cumque ipsum nobis harum, quos excepturi autem ea. Aliquid, incidunt. Error facilis libero accusamus doloremque dolor quisquam omnis placeat! Eum iure quaerat, error impedit est molestias labore dolor corrupti nemo, esse, earum aut eligendi!'
        stacks={['Typescript', 'React', 'Node', 'Prisma', 'Prisma']}
      />
      
    </div>
  )
}

export default Experience