import Text from '@/components/text/Text';
import React from 'react';

const Home = React.forwardRef<HTMLDivElement>(
  // if Home had props, then they would replace the _ before the ,ref
  (_, ref): JSX.Element => (
    <div
      ref={ref}
      className="flex flex-col bg-white-desk bg-cover bg-center h-screen max-w-screen items-center justify-center"
    >
      <Text weight={600} size="title" extra="lg:text-5xl sm:text-4xl">
        Stefanos Michelakis
      </Text>
      <Text
        weight={600}
        size="xl"
        color="blue"
        extra="mt-8 lg:text-3xl lg:mt-6 sm:text-2xl"
      >
        Professional software engineer
      </Text>
    </div>
  )
);

Home.displayName = 'Home';

export default Home;
