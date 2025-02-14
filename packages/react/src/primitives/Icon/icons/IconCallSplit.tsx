import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconCallSplit = (props) => {
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
          d="M14 4L16.29 6.29L13.41 9.17L14.83 10.59L17.71 7.71L20 10V4H14ZM10 4H4V10L6.29 7.71L11 12.41V20H13V11.59L7.71 6.29L10 4Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
