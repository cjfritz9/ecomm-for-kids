import React from 'react';

interface Props {
  image: React.JSX.Element;
  imageBg?: React.JSX.Element;
  eyebrow: React.JSX.Element;
  title: string;
  body: string;
  reversed?: boolean;
}

const TextWithImage: React.FC<Props> = ({
  image,
  imageBg = null,
  eyebrow,
  title,
  body,
  reversed = false
}) => {
  return (
    <div
      className={`flex flex-col sm:flex-row max-w-[1352px] pb-24 w-full justify-between items-center${
        reversed ? ' flex-col-reverse sm:flex-row-reverse' : ''
      }`}
    >
      <figure className='relative flex justify-end w-full mt-6 sm:mt-0 h-auto items-center'>
        {imageBg}
        {image}
      </figure>
      <div className='flex flex-col max-w-[668px] gap-6'>
        {eyebrow}
        <h3 className='font-bold text-[56px] leading-[64px]'>{title}</h3>
        <p className='font-[500] text-lg'>{body}</p>
      </div>
    </div>
  );
};

export default TextWithImage;
