import { technologies } from '@/modules/common'
import Text from '@/components/text/Text'
import React from 'react'

const AboutMe = React.forwardRef<HTMLDivElement>(
  (_, ref): JSX.Element => (
    <div
      ref={ref}
      id="aboutMe"
      className="flex flex-col items-center min-h-screen"
    >
      <Text weight={500} size="xl" extra="mt-24">
        Who am I?
      </Text>
      <div className="flex flex-col justify-around items-center">
        <div className="flex flex-col justify-center items-center">
          <Text size="xl" color="blue" extra="mt-6" weight={500}>
            I am a young and enthusiastic&nbsp;
            <i className="text-custom-black">full stack software engineer</i>
          </Text>
          <div className="flex mt-12 justify-center px-16 lg:flex-col lg:items-center lg:px-10">
            <div className="w-[600px] flex flex-col xl:w-[50%] lg:w-[95%]">
              <Text size="md" weight={500} extra="text-justify">
                With 2 years of expirience as a full stack software engineer, I
                specialize in developing fully functional web and mobile
                applications from start to finish. I strive to create modular
                and&nbsp;
                <i className="text-custom-blue font-semibold">
                  maintainable projects
                </i>
                &nbsp;that implement cutting edge technologies.
              </Text>
              <Text size="sm" weight={400} extra="text-justify mt-5">
                I thrive when working on my own but I excel when I'm cooperating
                with other developers in a structured team.
              </Text>
              <Text size="sm" weight={400} extra="text-justify mt-5">
                While making applications I always aim to make sure that
                everything is functioning according to the clients requirements,
                at the right place as the designer intended it to be and
                responsive across a variety of devices.
              </Text>
            </div>
            <div className="w-[600px] flex flex-col items-center xl:w-[50%] lg:w-[95%] lg:mt-16 lg:items-start">
              <Text size="md" weight={600}>
                Technologies I have worked with:
              </Text>
              <ul className="list-disc list-inside marker:text-custom-blue mt-2">
                {technologies.map((technology) => (
                  <li className="about-me-li-item" key={technology}>
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full min-h-[120px] bg-custom-teal bg-opacity-30 mt-20 justify-center items-center">
        <Text weight={500} size="lg">
          Always eager and excited for new projects and technologies to learn
          from.
        </Text>
      </div>
    </div>
  )
)

AboutMe.displayName = 'AboutMe'

export default AboutMe
