import React from "react";

interface Props {
  title: string;
}

const SectionHeading: React.FC<Props> = ({ title }) => {
  return <h4 className='text-2xl text-primary'>{title}</h4>;
};

export default SectionHeading;