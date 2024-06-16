import React from 'react';
import Button from '../Button/Button';

interface Props {
  buttonData: {
    back?: {
      text?: string;
      toStep: number;
    };
    next?: {
      text?: string;
      toStep: number;
    };
  };
  handleUpdate: (step: number) => void;
}

const PageButtons: React.FC<Props> = ({
  buttonData: { back, next },
  handleUpdate
}) => {
  return (
    <div className='flex w-full mt-12 justify-between'>
      {back ? (
        <div onClick={() => handleUpdate(back.toStep)}>
          <Button>{back.text ? back.text : 'Back'}</Button>
        </div>
      ) : (
        <div></div>
      )}
      {next ? (
        <div onClick={() => handleUpdate(next.toStep)}>
          <Button>{next.text ? next.text : 'Next'}</Button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default PageButtons;
