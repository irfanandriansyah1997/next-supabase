import { FC } from 'react';

import Icon from '@/components/general/icon';
import Text from '@/components/general/text';

import { styEmptyState } from './style';

/**
 * Empty State
 *
 * @since 0.0.0
 * @returns {JSX.Element} empty state html element
 */
const EmptyState: FC<{}> = () => (
  <div className={styEmptyState}>
    <Icon icon="apps_outage" size={64} color="red" />
    <Text
      tag="h1"
      fontSize="large"
      lineHeight="preset-10"
      color="title"
      fontWeight={600}
    >
      Oops Task Not Found
    </Text>
    <Text tag="p" fontSize="normal" lineHeight="preset-6">
      Currently on this day there is no task will be worked on
    </Text>
  </div>
);

export default EmptyState;
