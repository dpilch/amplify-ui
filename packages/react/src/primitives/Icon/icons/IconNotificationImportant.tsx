import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconNotificationImportant = (props) => {
  const { className, ...rest } = props;
  return (
    <View
      as="span"
      width="1em"
      height="1em"
      className={classNames(ComponentClassNames.Icon, className)}
      {...rest}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.01 21.01C10.01 22.11 10.9 23 12 23C13.1 23 13.99 22.11 13.99 21.01H10.01ZM12 6C14.76 6 17 8.24 17 11V18H7V11C7 8.24 9.24 6 12 6ZM12 1.5C11.17 1.5 10.5 2.17 10.5 3V4.17C7.36 4.85 5 7.65 5 11V17L3 19V20H21V19L19 17V11C19 7.65 16.64 4.85 13.5 4.17V3C13.5 2.17 12.83 1.5 12 1.5ZM11 8H13V12H11V8ZM11 14H13V16H11V14Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
