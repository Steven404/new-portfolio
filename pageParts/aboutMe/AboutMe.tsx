import { technologies } from '@/modules/common'
import Text from '@/components/text/Text'

const AboutMe = (): JSX.Element => {
  return (
    <div id="aboutMe" className="flex flex-col items-center h-screen ">
      <Text weight={500} size="xl" extra="mt-24">
        Who am I?
      </Text>
      <div className="flex flex-col w-fit justify-around items-center">
        <div className="flex flex-col w-[1400px] justify-center items-center">
          <Text size="xl" color="blue" extra="mt-10" weight={600}>
            I am a young and enthusiastic&nbsp;
            <i className="text-custom-black">full stack software engineer</i>
            &nbsp;always looking for new things to learn.
          </Text>
          <div className="flex mt-8 justify-between">
            <Text size="sm" weight={500} extra="w-[45%] text-justify">
              With 2 years of expirience as a full stack software engineer, I
              specialize in developing fully functional web and mobile
              applications from start to finish. I strive to create modular
              and&nbsp;
              <i className="text-custom-blue font-semibold">
                maintainable projects
              </i>
              &nbsp; that implement cutting edge technologies.
            </Text>
            <div className="w-[45%] flex flex-col items-center">
              <Text size="md" weight={600}>
                Technologies I have worked with:
              </Text>
              <ul className="list-disc marker:text-custom-blue mt-2">
                {technologies.map((technology) => (
                  <li className="custom-li-item">{technology}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
