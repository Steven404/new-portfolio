import Text from '@/components/text/Text';
import UnderConstruction from '@/public/under_construction.svg';
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
      <Text weight={500} size="xl" extra="mt-24">
        My Projects
      </Text>
      <Text size="lg" color="blue" extra="mt-6" weight={500}>
        This page is under construction
      </Text>
      <div className="mt-16 max-w-[50vw] xl:max-w-[75vw]">
        <Image priority src={UnderConstruction} alt="Under construction" />
      </div>
    </div>
  )
);

MyProjects.displayName = 'MyProjects';

export default MyProjects;
