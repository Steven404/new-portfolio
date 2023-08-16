import { WorkExperienceType } from '@/modules/common'
import Text from '../text/Text'
import { useState } from 'react'

interface WorkExperienceCardPropsType {
  workExperience: WorkExperienceType
}

const formatDate = (date: Date) =>
  `${String(date.getDate()).padStart(2, '0')}/${String(
    date.getMonth() + 1
  ).padStart(2, '0')}/${date.getFullYear()}`

const WorkExperienceCard = ({
  workExperience,
}: WorkExperienceCardPropsType): JSX.Element => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  return (
    <div
      className="work-experience-card"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <Text size="lg" weight={500}>
        {workExperience.jobTitle}
      </Text>
      <Text size="sm" weight={500} extra="mt-2.5">
        Employer:&nbsp;
        <a
          className="text-custom-blue"
          href={workExperience.employerLink}
          target="blank"
        >
          {workExperience.employer}
        </a>
      </Text>
      <Text size="xs" extra="text-justify mt-2.5">
        {workExperience.description}
      </Text>
      <div className="mt-2.5">
        <Text size="xs" weight={500}>
          From - Until:&nbsp;
        </Text>
        <Text size="xs">
          {formatDate(workExperience.dateStarted)} -&nbsp;
          {workExperience?.dateEnded
            ? formatDate(workExperience.dateEnded)
            : 'Ongoing'}
        </Text>
      </div>
      <div className={isHovered ? 'hover-me-text-hidden' : 'hover-me-text'}>
        <Text size="sm" weight={500} color="halfBlack">
          Hover me!
        </Text>
      </div>
      {workExperience?.responsibilities ? (
        <div
          className={isHovered ? 'responsibilities' : 'responsibilities-hidden'}
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
  )
}

export default WorkExperienceCard
