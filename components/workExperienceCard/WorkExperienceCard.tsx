import { WorkExperienceType } from '@/modules/common';
import Text from '../text/Text';
import { useState } from 'react';

import useWindowDimensions from '@/modules/useWindowDimensions';

interface WorkExperienceCardPropsType {
  workExperience: WorkExperienceType;
}

const formatDate = (date: Date) =>
  `${String(date.getDate()).padStart(2, '0')}/${String(
    date.getMonth() + 1
  ).padStart(2, '0')}/${date.getFullYear()}`;

const WorkExperienceCard = ({
  workExperience,
}: WorkExperienceCardPropsType): JSX.Element => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const { width } = useWindowDimensions();

  return (
    <div
      className="work-experience-card"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <Text size="lg" weight={600} extra="lg:text-2xl">
        {workExperience.jobTitle}
      </Text>
      <Text size="md" weight={500} extra="mt-2.5">
        Employer:&nbsp;
        <a
          className="text-custom-blue"
          href={workExperience.employerLink}
          target="blank"
        >
          {workExperience.employer}
        </a>
      </Text>
      <Text size="sm" extra="text-justify mt-2.5">
        {workExperience.description}
      </Text>
      <div className="mt-2.5">
        <Text size="sm" weight={500}>
          From - Until:&nbsp;
        </Text>
        <Text size="sm">
          {formatDate(workExperience.dateStarted)} -&nbsp;
          {workExperience?.dateEnded
            ? formatDate(workExperience.dateEnded)
            : 'Ongoing'}
        </Text>
      </div>
      <div
        className={
          isHovered || width < 1023 ? 'hover-me-text-hidden' : 'hover-me-text'
        }
      >
        <Text size="md" weight={500} color="halfBlack">
          Hover me!
        </Text>
      </div>
      {workExperience?.responsibilities ? (
        <div
          className={
            isHovered || width < 1023
              ? 'responsibilities'
              : 'responsibilities-hidden'
          }
        >
          <Text size="sm" weight={500}>
            Role responsibilities:
          </Text>
          <ul className="list-disc list-inside pl-[8px] marker:text-custom-blue mt-2">
            {workExperience.responsibilities.map((technology) => (
              <li className="work-experience-li-item" key={technology}>
                {technology}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div
          className={isHovered ? 'responsibilities' : 'responsibilities-hidden'}
        >
          <Text size="sm" weight={500}>
            Nothing to show...
          </Text>
        </div>
      )}
    </div>
  );
};

export default WorkExperienceCard;
