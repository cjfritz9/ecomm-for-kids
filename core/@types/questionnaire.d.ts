import { QUESTIONNAIRE_DATA } from '@/lib/constants/questionnaire';

export type YesNoResponse = boolean | null;

export type QuestionnaireData = typeof QUESTIONNAIRE_DATA;

export interface QuestionnaireItem {
  displayName: string | JSX.Element;
  value: string | boolean;
  name: string;
}

export interface QuestionaireEntry {
  dataKey: string;
  items: QuestionnaireItem[];
}
