import { technologies } from '@/modules/common'

const AboutMe = (): JSX.Element => {
  return (
    <div id="aboutMe" className="flex flex-col items-center h-screen ">
      <span className="text-custom-black font-medium text-3xl mt-24">
        Who am I?
      </span>
      <div className="flex flex-col w-fit justify-around items-center">
        <div className="flex flex-col w-[1400px] justify-center items-center">
          <span className="subtitle-text mt-10">
            I am a young and enthusiastic&nbsp;
            <i className="text-custom-black">full stack software engineer</i>
            &nbsp;always looking for new things to learn.
          </span>
          <div className="flex mt-8 justify-between">
            <span className="w-[45%] description-text text-justify">
              With 2 years of expirience as a full stack software engineer, I
              specialize in developing fully functional web and mobile
              applications from start to finish. I strive to create modular
              and&nbsp;
              <i className="text-custom-blue font-medium">
                maintainable projects
              </i>{' '}
              that implement cutting edge technologies
            </span>
            <div className="w-[45%] flex flex-col items-center">
              <span className="text-2xl font-semibold">
                Technologies I have worked with:
              </span>
              <ul className="list-disc marker:text-custom-blue mt-2">
                {technologies.map((technology) => (
                  <li className="description-text">{technology}</li>
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
