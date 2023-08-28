import Text from '@/components/text/Text';
import WorkExperienceCard from '@/components/workExperienceCard/WorkExperienceCard';
import { workExperience } from '@/modules/common';
import React from 'react';

const WorkExperience = React.forwardRef<HTMLDivElement>(
  // if WorkExperience had props, then they would replace the _ before the ,ref
  (_, ref): JSX.Element => (
    <div
      id="workExperience"
      ref={ref}
      className="flex flex-col min-h-screen items-center"
    >
      <Text weight={500} size="xl" extra="mt-24">
        Work Experience
      </Text>
      <div className="flex flex-wrap gap-20 mt-10 justify-evenly ">
        {workExperience.map((we) => (
          <WorkExperienceCard workExperience={we} key={we.employer} />
        ))}
      </div>
    </div>
  )
);

WorkExperience.displayName = 'WorkExperience';

export default WorkExperience;
