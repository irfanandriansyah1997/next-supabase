import { memo } from 'react';

import Avatar from '@/components/general/avatar';
import Text from '@/components/general/text';
import type { TodoCategoryType } from '@/types/notes';

import {
  styNotesCategory,
  styNotesCategoryContent,
  styProgress
} from './style';

/**
 * Notes Category Props Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 */
interface NotesCategoryProps {
  categories: TodoCategoryType[];
  doneTaskCount: number;
  progressText: string;
  taskCount: number;
}

/**
 * Notes Category Component
 *
 * @param {NotesCategoryProps} props - props component
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} notes category html
 */
const NotesCategory = (props: NotesCategoryProps) => {
  const { categories, doneTaskCount, progressText, taskCount } = props;
  return (
    <section className={styNotesCategory}>
      <div className={styProgress({ from: taskCount, start: doneTaskCount })}>
        <div>
          <Text tag="p" fontSize="text" fontWeight={500} color="text">
            🚨&nbsp;&nbsp;Progress Task
          </Text>
          <Text tag="p" fontSize="text" fontWeight={600} color="title">
            {progressText}
          </Text>
        </div>
        <section />
      </div>
      <div className={styNotesCategoryContent}>
        {categories.map(({ count, icon, text }) => (
          <section key={text}>
            <Avatar
              src={icon}
              size={32}
              alt="Bugs"
              shape="rectangle"
              className="icon"
            />
            <Text
              tag="p"
              fontSize="normal"
              fontWeight={500}
              color="title"
              lineHeight="preset-6"
            >
              {text}
            </Text>
            <Text
              tag="span"
              fontSize="text"
              fontWeight={400}
              color="text"
              lineHeight="preset-6"
            >
              {count} Tasks Open
            </Text>
          </section>
        ))}
      </div>
    </section>
  );
};

export default memo(NotesCategory);
