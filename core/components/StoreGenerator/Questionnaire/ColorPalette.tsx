import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';

interface Props {
  src: string | StaticImport;
  number: number;
}

const ColorPalette: React.FC<Props> = ({ src, number }) => {
  return (
    <Image
      src={src}
      height={75}
      width={300}
      alt={`Palette option ${number}`}
      className='rounded-lg border h-auto border-black my-0'
    />
  );
};

export default ColorPalette;
