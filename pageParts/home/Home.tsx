import Text from '@/components/text/Text'

const Home = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <Text weight={600} size="title">
        Stefanos Michelakis
      </Text>
      {/* <span className="subtitle-text mt-8">Professional software engineer</span> */}
      <Text weight={600} size="xl" color="blue" extra="mt-8">
        Professional software enginee
      </Text>
    </div>
  )
}

export default Home
