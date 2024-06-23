import React from 'react';
import SectionHeading from './SectionHeading';
import Input from './Input';
import TextArea from './TextArea';

const FinalQuestions: React.FC = () => {
  return (
    <div className='prose'>
      <div>
        <SectionHeading title='About You' />
        <ol>
          <li>
            <p>What is your name?</p>
            <Input dataKey='name' placeholder='Name' optional />
          </li>
          <li>
            <p>How old are you?</p>
            <Input dataKey='age' placeholder='Age' optional />
          </li>
          <li>
            <p>Tell us a little about yourself!</p>
            <TextArea dataKey='about' placeholder='About You' optional />
          </li>
        </ol>
      </div>
    </div>
  );
};

export default FinalQuestions;
