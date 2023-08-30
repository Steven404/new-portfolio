import Text from '@/components/text/Text';
import React, { useEffect } from 'react';
import PhoneCall from '@/public/img/phone_call.svg';
import Mail from '@/public/img/mail.svg';
import GitHub from '@/public/img/github_mark.png';
import LinkedIn from '@/public/img/linkedin.png';
import Image from 'next/image';
import useWindowDimensions from '@/modules/useWindowDimensions';

const Contact = React.forwardRef<HTMLDivElement>(
  // if Contact had props, then they would replace the _ before the ,ref
  (_, ref): JSX.Element => {
    const { width } = useWindowDimensions();

    useEffect(() => {}, []);

    return (
      <div
        id="contact"
        ref={ref}
        className="flex flex-col h-fit min-h-screen items-center w-full justify-between"
      >
        <Text weight={500} size="xl" extra="mt-28">
          Contact
        </Text>
        <div className="w-full h-[75%] flex items-center justify-center px-6 sm:justify-start">
          <div className="flex flex-wrap gap-20 mt-10 justify-evenly w-full">
            <div className="contact-info">
              <Image priority src={PhoneCall} alt="Phone" height={200} />
              <Text
                onClick={() => navigator.clipboard.writeText('+306948518120')}
                weight={500}
                color="blue"
                extra="cursor-pointer mt-20"
              >
                +306948518120
              </Text>
            </div>
            <div className="contact-info">
              <Image priority src={Mail} alt="Email" height={200} />
              <Text
                onClick={() =>
                  navigator.clipboard.writeText('stefanosmichelakis@gmail.com')
                }
                weight={500}
                color="blue"
                extra="cursor-pointer mt-20"
              >
                stefanosmichelakis@gmail.com
              </Text>
            </div>
            <div className="contact-info">
              <Image priority src={GitHub} alt="GitHub" height={200} />
              <Text weight={500} color="blue" extra="mt-20">
                <a href="https://github.com/Steven404" target="blank">
                  Steven404
                </a>
              </Text>
            </div>
            <div className="contact-info">
              <Image priority src={LinkedIn} alt="GitHub" height={200} />
              <Text weight={500} color="blue" extra="mt-20">
                <a href="https://github.com/Steven404" target="blank">
                  Stefanos Michelakis
                </a>
              </Text>
            </div>
          </div>
        </div>
        <div className="h-[200px] w-full bg-gradient-to-b from-white to-custom-blue opacity-80 bottom-0 z-[-5]" />
      </div>
    );
  }
);

Contact.displayName = 'Contact';

export default Contact;
