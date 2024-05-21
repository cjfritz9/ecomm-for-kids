import React from 'react';

interface Props extends React.PropsWithChildren {
  /** DaisyUI value or CSS value surrounded by square brackets.
   *
   * Example:
   * "primary"
   * OR
   * "[#FFFFFF]"
   *
   * Default value: "secondary"
   */
  color?: string;
  extraStyles?: string[];
}

const Button: React.FC<Props> = ({
  children,
  color = 'secondary',
  extraStyles
}) => {
  return (
    <button
      className={`btn h-[60px] font-[600] text-lg px-8 py-4 btn-${color}${
        extraStyles ? ' ' + extraStyles.join(' ') : ''
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
