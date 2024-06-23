import {
  getStoredToolAnswer,
  updateStoredToolData
} from '@/lib/utils/questionnaire';
import { useEffect, useState } from 'react';

interface Props {
  dataKey: string;
  optional?: boolean;
  placeholder?: string;
}

const TextArea: React.FC<Props> = ({
  dataKey,
  optional = false,
  placeholder = 'Answer here'
}) => {
  const [isHidden, setIsHidden] = useState(false);
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
    <>
      {optional && (
        <label className='flex items-center gap-2 mb-4'>
          <input
            type='checkbox'
            className='checkbox'
            onChange={() => setIsHidden((prev) => !prev)}
          />
          <span>I don&apos;t wish to answer</span>
        </label>
      )}
      {!isHidden && (
        <textarea
          placeholder={placeholder}
          className='textarea mb-4 w-full min-h-24 rounded-xl'
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      )}
    </>
  );
};

export default TextArea;
