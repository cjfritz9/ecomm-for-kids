import React from 'react';

interface Props extends React.PropsWithChildren {
  extraStyles?: string[];
}

const Button: React.FC<Props> = ({
  children,
  extraStyles
}) => {
  return (
    <button
      className={`btn h-[60px] font-[600] text-lg px-8 py-4 btn-secondary${
        extraStyles ? ' ' + extraStyles.join(' ') : ''
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
