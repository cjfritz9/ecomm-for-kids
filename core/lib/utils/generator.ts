import { QuestionnaireData } from '@/@types/questionnaire';
import { getIsValidData, getParsedStoredToolData } from './questionnaire';
import { COLLECTIONS_POINTS } from '../constants/points-system';

export const getGeneratedStore = (data: QuestionnaireData) => {};

export const calculateCollectionPoints = (data?: QuestionnaireData) => {
  const questionnaireData = data ?? getParsedStoredToolData();
  const points = COLLECTIONS_POINTS;

  if (!getIsValidData(questionnaireData)) {
    return {
      success: false,
      results: null
    };
  }

  const {
    favoriteAnimal,
    favoriteCharacter,
    favoriteColor,
    favoriteHobby,
    productCategory,
    productCategoryDislike,
    pets,
    playGames,
    playSports,
    colorPalette
  } = questionnaireData;

  if (getIncludesTerms(favoriteAnimal, ['dog', 'cat'])) {
    points.petProducts++;
  }

  if (
    getIncludesTerms(favoriteCharacter, ['chase', 'marshall', 'skye', 'paw'])
  ) {
    points.petProducts++;
  }

  if (
    getIncludesTerms(favoriteCharacter, [
      'elsa',
      'ariel',
      'belle',
      'cinderella',
      'twilight',
      'sparkle',
      'rainbow',
      'dash',
      'pinkie',
      'jessie'
    ])
  ) {
    points.womensClothing++;
    points.jewelry++;
  }

  if (
    getIncludesTerms(favoriteCharacter, [
      'steve',
      'alex',
      'creeper',
      'enderman',
      'spider',
      'lego',
      'avengers',
      'ironman',
      'luke',
      'skywalker',
      'yoda',
      'rey',
      'harry',
      'hermoine',
      'ron',
      'woody',
      'buzz',
      'lightyear',
      'jessie',
      'minions',
      'pikachu',
      'squirtle',
      'charizard',
      'pokemon',
      'eon',
      'mimikyu',
      'lucario',
      'greninja',
      'bulbasaur',
      'eevee',
      'flygon',
      'gardevoir',
      'metagross',
      'swampert',
      'snorlax'
    ])
  ) {
    points.electronics++;
    points.toys++;
  }

  if (
    getIncludesTerms(favoriteCharacter, [
      'ironman',
      'captain',
      'hulk',
      'peter',
      'hawkeye',
      'thor',
      'blackpanther',
      'loki'
    ])
  ) {
    points.mensClothing++;
  }

  if (getIncludesTerms(favoriteColor, ['red', 'black', 'white'])) {
    points.toys++;
    points.electronics++;
  }

  if (getIncludesTerms(favoriteColor, ['gold', 'silver', 'white'])) {
    points.jewelry++;
  }

  if (getIncludesTerms(favoriteColor, ['blue', 'orange'])) {
    points.mensClothing++;
    points.womensClothing++;
  }

  if (getIncludesTerms(favoriteColor, ['pink', 'white', 'purple', 'teal'])) {
    points.womensClothing++;
  }

  if (getIncludesTerms(favoriteColor, ['red', 'orange', 'white', 'black'])) {
    points.petProducts++;
  }

  if (getIncludesTerms(favoriteHobby, ['soccer', 'basketball'])) {
    points.mensClothing++;
    points.womensClothing++;
  }

  if (getIncludesTerms(favoriteHobby, ['games', 'video', 'play'])) {
    points.electronics++;
    points.toys++;
  }

  if (
    getIncludesTerms(favoriteHobby, [
      'science',
      'arts',
      'crafts',
      'build',
      'board',
      'puzzles'
    ])
  ) {
    points.toys++;
  }

  if (typeof points[productCategory as keyof typeof points] === 'number') {
    points[productCategory as keyof typeof points] += 3;
  }

  if (
    typeof points[productCategoryDislike as keyof typeof points] === 'number'
  ) {
    points[productCategoryDislike as keyof typeof points] -= 3;
  }

  if (getIncludesTerms(pets, ['cats', 'dogs'])) {
    points.petProducts++;
  }

  if (playSports) {
    points.mensClothing++;
    points.womensClothing++;
    points.jewelry++;
  } else {
    points.electronics++;
    points.toys++;
  }

  if (playGames) {
    points.electronics++;
    points.toys++;
  }

  if (colorPalette === 'palette1') {
    points.womensClothing += 2;
    points.jewelry += 2;
  }

  if (colorPalette === 'palette2') {
    points.mensClothing += 2;
  }

  if (colorPalette === 'palette3') {
    points.toys += 2;
    points.electronics += 2;
  }

  if (colorPalette === 'palette4') {
    points.toys += 2;
    points.jewelry += 2;
  }

  if (colorPalette === 'palette5') {
    points.toys += 2;
    points.electronics += 3;
  }

  if (colorPalette === 'palette6') {
    points.womensClothing += 2;
  }

  return {
    success: true,
    results: points
  };
};

export const getIncludesTerms = (
  compareValue: string,
  compareStrings: string[]
) => {
  for (const string of compareStrings) {
    if (compareValue.replaceAll(' ', '').toLowerCase().includes(string))
      return true;
  }

  return false;
};
