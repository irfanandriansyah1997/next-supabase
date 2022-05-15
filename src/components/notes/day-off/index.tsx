/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';

import DayOff from '@/asset/images/day-off.jpeg';
import Text from '@/components/general/text';

import { styDayOffMessage } from './style';

/**
 * Day Off Message
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @returns {JSX.Element} html element
 */
const DayOffMessage = () => (
  <div className={styDayOffMessage}>
    <Image src={DayOff.src} alt="" layout="fixed" width={600} height={446} />
    <Text
      tag="p"
      fontSize="large"
      fontWeight={600}
      color="title"
      lineHeight="preset-12"
    >
      Yeay! Finally Day Off
    </Text>
    <Text
      tag="span"
      fontSize="medium"
      fontWeight={400}
      color="text"
      textAlign="center"
      lineHeight="preset-10"
    >
      But no worries you can set your daily task with click date item on sidebar
    </Text>
  </div>
);

export default DayOffMessage;
