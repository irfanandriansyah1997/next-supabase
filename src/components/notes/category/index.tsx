import { cx } from '@emotion/css';
import { memo } from 'react';

import Avatar from '@/components/general/avatar';
import Text from '@/components/general/text';
import { TASK_LOADER_ITEM } from '@/constant/task';
import { styShimmer } from '@/styles/constant/animation';
import type { TodoCategoryType } from '@/types/notes';

import {
  styNotesCategory,
  styNotesCategoryContent,
  styNotesCategoryLoader,
  styProgress
} from './style';

/**
 * Notes Category Item Loader
 *
 * @returns {JSX.Element} note category item loader html
 */
const NotesCategoryItemLoader = () => (
  <section className={styNotesCategoryLoader}>
    <div className={cx('icon', styShimmer)} />
    <div className={cx('title', styShimmer)} />
    <div className={cx('text', styShimmer)} />
  </section>
);

/**
 * Notes Category Item
 *
 * @param {TodoCategoryType} props - component props
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} notes category item html
 */
const NotesCategoryItem = (props: TodoCategoryType) => {
  const { count, icon, text } = props;

  return (
    <section>
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
  );
};

/**
 * Notes Category Props Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 */
interface NotesCategoryProps {
  categories: TodoCategoryType[];
  doneTaskCount: number;
  loading?: boolean;
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
  const { categories, doneTaskCount, loading, progressText, taskCount } = props;

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
        {loading &&
          TASK_LOADER_ITEM.map((index) => (
            <NotesCategoryItemLoader key={`loader-${index}`} />
          ))}
        {!loading &&
          categories.map(({ count, icon, text, type }) => (
            <NotesCategoryItem
              count={count}
              icon={icon}
              text={text}
              key={text}
              type={type}
            />
          ))}
      </div>
    </section>
  );
};

export default memo(NotesCategory);
