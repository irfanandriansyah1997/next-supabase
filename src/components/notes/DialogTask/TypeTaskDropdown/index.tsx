import Avatar from '@/components/general/avatar';
import DropdownList from '@/components/general/dropdown-list';
import Icon from '@/components/general/icon';
import Text from '@/components/general/text';
import {
  CATEGORY_ICON,
  CATEGORY_LABEL,
  CATEGORY_LIST
} from '@/constant/category';
import { COLOR_PALLETE } from '@/styles/constant/color';
import { TodoCategoryEnum } from '@/types/notes';
import { hexToRgba } from '@/utils/general/color';

import { styTypeTaskDropdownToggle, styTypeTaskDropdownWrapper } from './style';

/**
 * Type Task Dropdown Interface
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 */
interface TypeTaskDropdownProps {
  onChange(param: TodoCategoryEnum): void;
  typeTask: TodoCategoryEnum;
}

/**
 * Type Task Dropdown
 *
 * @param {TypeTaskDropdownProps} props - component props
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 * @returns {JSX.Element} Type Task dropdown html element
 */
const TypeTaskDropdown = (props: TypeTaskDropdownProps) => {
  const { onChange, typeTask } = props;

  return (
    <div className={styTypeTaskDropdownWrapper}>
      <Text tag="p" fontSize="normal" fontWeight={600} color="title">
        <span>*&nbsp;</span>
        Category Task
      </Text>
      <DropdownList
        toggle={
          <div className={styTypeTaskDropdownToggle}>
            <Avatar
              shape="rectangle"
              size={16}
              alt={CATEGORY_LABEL[typeTask]}
              src={CATEGORY_ICON[typeTask]}
            />
            <Text
              tag="p"
              fontSize="text"
              fontWeight={500}
              color="title"
              lineHeight="preset-5"
            >
              {CATEGORY_LABEL[typeTask]}
            </Text>
            <Icon
              icon="unfold_more"
              color={hexToRgba(COLOR_PALLETE.black, 0.5)}
              size={18}
            />
          </div>
        }
      >
        {CATEGORY_LIST.map((item) => {
          return (
            <DropdownList.Item
              onClick={() => {
                onChange(item.type);
              }}
              icon={
                <Avatar
                  shape="rectangle"
                  size={16}
                  alt={item.text}
                  src={item.icon}
                />
              }
              key={item.text}
            >
              {item.text}
            </DropdownList.Item>
          );
        })}
      </DropdownList>
    </div>
  );
};

export default TypeTaskDropdown;
