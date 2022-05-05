import { ReactNode } from 'react';

import DropdownList from '@/components/general/dropdown-list';
import type { TaskEventHandler } from '@/components/notes/types';
import { TodoStatusTaskEnum } from '@/types/notes';

interface DrodpownTaskProps extends TaskEventHandler {
  enableEdit?: boolean;
  status?: TodoStatusTaskEnum;
  toggle: ReactNode;
}

/**
 * Dropdown Task Component
 *
 * @param {DrodpownTaskProps} props - dropdown task props
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} dropdown task component
 */
const DropdownTask = (props: DrodpownTaskProps) => {
  const {
    enableEdit,
    handlerEditTask,
    handlerMarkAsDone,
    handlerMarkAsInProgress,
    handlerMoveToWontDo,
    status,
    toggle
  } = props;

  return (
    <DropdownList ltr={false} disabled={!enableEdit} toggle={toggle}>
      {status !== TodoStatusTaskEnum.WontDo &&
        status !== TodoStatusTaskEnum.Done && (
          <DropdownList.Item onClick={handlerMoveToWontDo} icon="low_priority">
            Move To Wont Do
          </DropdownList.Item>
        )}
      {status !== TodoStatusTaskEnum.WontDo &&
        status !== TodoStatusTaskEnum.Done && (
          <DropdownList.Item onClick={handlerMarkAsDone} icon="task_alt">
            Mark As Done
          </DropdownList.Item>
        )}
      {(status === TodoStatusTaskEnum.WontDo ||
        status === TodoStatusTaskEnum.Done) && (
        <DropdownList.Item onClick={handlerMarkAsInProgress} icon="rotate_left">
          Mark As In Progress
        </DropdownList.Item>
      )}
      {status !== TodoStatusTaskEnum.WontDo && (
        <DropdownList.Item onClick={handlerEditTask} icon="edit_note">
          Edit Todo List
        </DropdownList.Item>
      )}
    </DropdownList>
  );
};

export default DropdownTask;
