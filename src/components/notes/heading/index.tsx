import Icon from '@/components/general/icon';
import Text from '@/components/general/text';
import { MEDIUM_FONT_SIZE } from '@/styles/constant/typography';

import { styNotesHeading } from './style';

/**
 * Notes Heading
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} notes heading html
 */
const NotesHeading = () => (
  <section className={styNotesHeading}>
    <Text
      tag="h1"
      fontSize="large"
      fontWeight={700}
      color="title"
      lineHeight="preset-6"
    >
      Todo List 📌
    </Text>
    <section>
      <Text
        tag="p"
        fontSize="text"
        fontWeight={500}
        color="title"
        lineHeight="preset-1"
        className="link"
      >
        New Task +
      </Text>
      <Icon
        className="icon"
        icon="view_headline"
        color="title"
        size={MEDIUM_FONT_SIZE}
      />
      <Icon
        className="icon"
        icon="grid_view"
        color="text"
        size={MEDIUM_FONT_SIZE}
      />
    </section>
  </section>
);

export default NotesHeading;
