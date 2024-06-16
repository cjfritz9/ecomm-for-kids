'use client';

import React, { useEffect, useState } from 'react';
import {
  categoryDislikeSelections,
  categorySelections,
  getYesNoAnswer,
  paletteSelections,
  petSelections,
  seasonSelections
} from './data.tsx';
import { QuestionaireEntry } from '@/@types/questionnaire.js';
import {
  getStoredToolAnswer,
  updateStoredToolData
} from '@/lib/utils/questionnaire.ts';

const Questionnaire: React.FC = () => {
  return (
    <div className='prose'>
      <div>
        <SectionHeading title='General' />
        <ol>
          <li>
            <p>What is your favorite animal?</p>
            <Input dataKey='favoriteAnimal' placeholder='Favorite Animal' />
          </li>
          <li>
            <p>Who is your favorite character from a TV show or movie?</p>
            <Input
              dataKey='favoriteCharacter'
              placeholder='Favorite Character'
            />
          </li>
          <li>
            <p>What is your favorite color?</p>
            <Input dataKey='favoriteColor' placeholder='Favorite Color' />
          </li>
          <li>
            <p>What is your favorite hobby?</p>
            <Input dataKey='favoriteHobby' placeholder='Favorite Hobby' />
          </li>
        </ol>
      </div>
      <div>
        <SectionHeading title='Products' />
        <ol>
          <li>
            <p>Which of these types of products do you like the most?</p>
            <RadioGroup data={categorySelections} />
          </li>
          <li>
            <p>
              Which of these products do you <b className='text-red-500'>NOT</b>{' '}
              like?
            </p>
            <RadioGroup data={categoryDislikeSelections} />
          </li>
        </ol>
      </div>
      <div>
        <SectionHeading title='Personal' />
        <ol>
          <li>
            <p>What is your favorite season?</p>
            <RadioGroup data={seasonSelections} />
          </li>
          <li>
            <p>Do you play video games?</p>
            <RadioGroup data={getYesNoAnswer('playGames')} />
          </li>
          <li>
            <p>Do you have pets?</p>
            <RadioGroup data={petSelections} />
          </li>
          <li>
            <p>Do you play sports?</p>
            <RadioGroup data={getYesNoAnswer('playSports')} />
          </li>
        </ol>
      </div>
      <div>
        <SectionHeading title='Colors' />
        <ol>
          <li>
            <p>Which of these color combinations do you like best?</p>
            <RadioGroup data={paletteSelections} />
          </li>
        </ol>
      </div>
    </div>
  );
};

interface SectionHeadingProps {
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  return <h4 className='text-2xl text-primary'>{title}</h4>;
};

interface InputProps {
  dataKey: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  dataKey,
  placeholder = 'Answer here'
}) => {
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    if (answer === '') return;

    const timeout = setTimeout(() => {
      updateStoredToolData(dataKey, answer);
    }, 200);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer]);

  useEffect(() => {
    const storedAnswer = getStoredToolAnswer(dataKey);

    if (storedAnswer && typeof storedAnswer === 'string') {
      setAnswer(storedAnswer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <input
      placeholder={placeholder}
      className='input mb-4 w-full'
      value={answer}
      onChange={(e) => setAnswer(e.target.value)}
    />
  );
};

interface RadioGroupProps {
  data: QuestionaireEntry;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ data }) => {
  const [selected, setSelected] = useState<string | boolean>('');
  const { dataKey, items } = data;

  useEffect(() => {
    const storedAnswer = getStoredToolAnswer(dataKey);

    if (storedAnswer) {
      setSelected(storedAnswer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selected === '') return;

    updateStoredToolData(dataKey, selected);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const options = items.map((item) => {
    return (
      <label key={item.value.toString()} className='label cursor-pointer'>
        <input
          checked={selected === item.value}
          type='radio'
          name={`radio-${item.name}-${item.value}`}
          className='radio mr-12 checked:bg-accent'
          onChange={() => setSelected(item.value)}
        />
        <span className='label-text'>{item.displayName}</span>
      </label>
    );
  });

  return <div className='form-control w-max items-start mb-4'>{options}</div>;
};

export default Questionnaire;
