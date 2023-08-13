import { WorkExperienceType } from '@/modules/common'
import Text from '../text/Text'

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
  return (
    <div className="flex flex-col shadow-md p-5 w-[420px] hover:shadow-xl rounded-lg">
      <Text size="lg" weight={500}>
        {workExperience.jobTitle}
      </Text>
      <Text size="sm" weight={500} extra="mt-2.5">
        Employer:&nbsp;
        <span className="text-custom-blue">{workExperience.employer}</span>
      </Text>
      <Text size="xs" extra="text-justify mt-2.5">
        {workExperience.description}
      </Text>
      <Text size="xs" extra="mt-2.5">
        From - Until: {formatDate(workExperience.dateStarted)} -{' '}
        {workExperience?.dateEnded
          ? formatDate(workExperience.dateEnded)
          : 'Ongoing'}
      </Text>
      {workExperience?.responsibilities ? (
        <div className="mt-2.5">
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
      ) : null}
    </div>
  )
}

export default WorkExperienceCard
