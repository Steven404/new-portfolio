const AboutMe = (): JSX.Element => {
  return (
    <div id="aboutMe" className="flex flex-col items-center h-screen">
      <span className="text-custom-black font-medium text-4xl mt-24">
        Who am I?
      </span>
      <span className="subtitle-text mt-10">
        I am a young and enthusiastic{' '}
        <i className="text-custom-black">full stack software engineer</i> always
        looking for new things to learn.
      </span>
      <div className="flex w-screen justify-around">
        <div>test</div>
        <div>test</div>
      </div>
    </div>
  )
}

export default AboutMe
