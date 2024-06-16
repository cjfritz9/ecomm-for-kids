import { QuestionnaireData, YesNoResponse } from '@/@types/questionnaire';
import {
  LOCAL_STORAGE_TOOL_KEY as TOOL_KEY,
  QUESTIONNAIRE_DATA
} from '../constants/questionnaire';

export const getParsedStoredToolData = () => {
  const data = localStorage.getItem(TOOL_KEY);

  let parsedData: QuestionnaireData;

  if (data) {
    parsedData = JSON.parse(data);
  } else {
    parsedData = QUESTIONNAIRE_DATA;
  }

  return parsedData;
};

export const getStoredToolAnswer = (
  key: string
): string | YesNoResponse | undefined => {
  const data = getParsedStoredToolData();

  //@ts-ignore
  return data[key];
};

export const updateStoredToolData = (key: string, value: string | boolean) => {
  const data = getParsedStoredToolData();

  //@ts-ignore
  data[key] = value;

  localStorage.setItem(TOOL_KEY, JSON.stringify(data));
};

export const resetStoredToolData = () => {
  localStorage.setItem(TOOL_KEY, JSON.stringify(QUESTIONNAIRE_DATA));
};
