import Text from '@/components/text/Text';
import React, { useEffect, useState } from 'react';
import PhoneCall from '@/public/img/phone_call.svg';
import Mail from '@/public/img/mail.svg';
import GitHub from '@/public/img/github_mark.png';
import LinkedIn from '@/public/img/linkedin.png';
import Image from 'next/image';
import useWindowDimensions from '@/modules/useWindowDimensions';
import { toast } from 'react-toastify';

const copyText = (text: string, type: string) => {
  navigator.clipboard.writeText(text);
  toast(`My ${type} is copied to your clipboard!`, { type: 'success' });
};

const Contact = React.forwardRef<HTMLDivElement>(
  // if Contact had props, then they would replace the _ before the ,ref
  (_, ref): JSX.Element => {
    const { width } = useWindowDimensions();

    const [imageHeight, setImageHeight] = useState<number>(200);

    useEffect(() => {
      setImageHeight(width && width > 1024 ? 200 : 100);
    }, [width]);

    return (
      <div
        id="contact"
        ref={ref}
        className="flex flex-col h-fit min-h-screen items-center w-full justify-between"
      >
        <Text weight={500} size="xl" extra="mt-28">
          Contact
        </Text>
        <div className="w-full h-[75%] flex items-center justify-center px-6 sm:justify-start lg:mt-12">
          <div className="flex flex-wrap gap-20 mt-10 justify-evenly w-full">
            <div
              className="contact-info"
              onClick={() => copyText('+306948518120', 'mobile number')}
            >
              <Image
                priority
                src={PhoneCall}
                alt="Phone"
                height={imageHeight}
              />
              <Text weight={500} color="blue" extra="mt-20 lg:mt-10">
                +306948518120
              </Text>
            </div>
            <div
              className="contact-info"
              onClick={() => copyText('stefanosmichelakis@gmail.com', 'email')}
            >
              <Image priority src={Mail} alt="Email" height={imageHeight} />
              <Text weight={500} color="blue" extra="mt-20 lg:mt-10">
                stefanosmichelakis@gmail.com
              </Text>
            </div>
            <a href="https://github.com/Steven404" target="blank">
              <div className="contact-info">
                <Image
                  priority
                  src={GitHub}
                  alt="GitHub"
                  height={imageHeight}
                />
                <Text weight={500} color="blue" extra="mt-20 lg:mt-10">
                  Steven404
                </Text>
              </div>
            </a>
            <a href="https://github.com/Steven404" target="blank">
              <div className="contact-info">
                <Image
                  priority
                  src={LinkedIn}
                  alt="LinkedIn"
                  height={imageHeight}
                />
                <Text weight={500} color="blue" extra="mt-20 lg:mt-10">
                  Stefanos Michelakis
                </Text>
              </div>
            </a>
          </div>
        </div>
        <div className="h-[200px] w-full bg-gradient-to-b from-white to-custom-blue opacity-80 bottom-0 z-[-5]" />
      </div>
    );
  }
);

Contact.displayName = 'Contact';

export default Contact;
