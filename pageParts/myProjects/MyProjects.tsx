import Text from '@/components/text/Text';
import UnderConstruction from '@/public/img/under_construction.svg';
import React from 'react';
import Image from 'next/image';

const MyProjects = React.forwardRef<HTMLDivElement>(
  // if MyProjects had props, then they would replace the _ before the ,ref
  (_, ref): JSX.Element => (
    <div
      id="myProjects"
      ref={ref}
      className="flex flex-col min-h-screen items-center px-6"
    >
      <Text weight={500} size="lg" extra="mt-28">
        My Projects
      </Text>
      <Text size="md" color="blue" extra="mt-8" weight={500}>
        This page is under construction
      </Text>
      <Text
        size="sm"
        extra="mt-16 lg:text-2xl text-justify lg:mt-12"
        weight={500}
      >
        If you want to take a look at my projects you can only do that through
        my CV, for now.
      </Text>
      <div className="mt-16 max-w-[40vw] xl:max-w-[75vw]">
        <Image priority src={UnderConstruction} alt="Under construction" />
      </div>
    </div>
  )
);

MyProjects.displayName = 'MyProjects';

export default MyProjects;
