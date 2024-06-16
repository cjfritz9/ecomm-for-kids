import palette1 from '@/public/assets/palettes/Palette 1.png';
import palette2 from '@/public/assets/palettes/Palette 2.png';
import palette3 from '@/public/assets/palettes/Palette 3.png';
import palette4 from '@/public/assets/palettes/Palette 4.png';
import palette5 from '@/public/assets/palettes/Palette 5.png';
import palette6 from '@/public/assets/palettes/Palette 6.png';
import { QuestionaireEntry } from '@/@types/questionnaire';
import ColorPalette from './ColorPalette';

export const categorySelections: QuestionaireEntry = {
  dataKey: 'productCategory',
  items: [
    {
      displayName: 'Electronics',
      value: 'electronics',
      name: 'electronics'
    },
    {
      displayName: 'Pet Products',
      value: 'petProducts',
      name: 'petProducts'
    },
    {
      displayName: 'Toys',
      value: 'toys',
      name: 'toys'
    },
    {
      displayName: 'Jewelry',
      value: 'jewelry',
      name: 'jewelry'
    },
    {
      displayName: "Women's Clothing",
      value: 'womensClothing',
      name: 'womensClothing'
    },
    {
      displayName: "Men's Clothing",
      value: 'mensClothing',
      name: 'mensClothing'
    }
  ]
};

export const categoryDislikeSelections: QuestionaireEntry = {
  dataKey: 'productCategoryDislike',
  items: [
    {
      displayName: 'I like them all',
      value: '',
      name: 'all'
    },
    {
      displayName: 'Electronics',
      value: 'electronics',
      name: 'electronicsDislike'
    },
    {
      displayName: 'Pet Products',
      value: 'petProducts',
      name: 'petProductsDislike'
    },
    {
      displayName: 'Toys',
      value: 'toys',
      name: 'toysDislike'
    },
    {
      displayName: 'Jewelry',
      value: 'jewelry',
      name: 'jewelryDislike'
    },
    {
      displayName: "Women's Clothing",
      value: 'womensClothing',
      name: 'womensClothingDislike'
    },
    {
      displayName: "Men's Clothing",
      value: 'mensClothing',
      name: 'mensClothingDislike'
    }
  ]
};

export const seasonSelections: QuestionaireEntry = {
  dataKey: 'favoriteSeason',
  items: [
    {
      displayName: 'Spring',
      value: 'spring',
      name: 'spring'
    },
    {
      displayName: 'Summer',
      value: 'summer',
      name: 'summer'
    },
    {
      displayName: 'Fall',
      value: 'fall',
      name: 'fall'
    },
    {
      displayName: 'Winter',
      value: 'winter',
      name: 'winter'
    }
  ]
};

export const petSelections: QuestionaireEntry = {
  dataKey: 'pets',
  items: [
    {
      displayName: 'Cat(s)',
      value: 'cats',
      name: 'cats'
    },
    {
      displayName: 'Dog(s)',
      value: 'dogs',
      name: 'dogs'
    },
    {
      displayName: 'Cats & Dogs',
      value: 'catsAndDogs',
      name: 'catsAndDogs'
    },
    {
      displayName: 'Other',
      value: 'other',
      name: 'other'
    }
  ]
};

export const paletteSelections: QuestionaireEntry = {
  dataKey: 'colorPalette',
  items: [
    {
      displayName: <ColorPalette src={palette1} number={1} />,
      value: 'palette1',
      name: 'palette1'
    },
    {
      displayName: <ColorPalette src={palette2} number={2} />,
      value: 'palette2',
      name: 'palette2'
    },
    {
      displayName: <ColorPalette src={palette3} number={3} />,
      value: 'palette3',
      name: 'palette3'
    },
    {
      displayName: <ColorPalette src={palette4} number={4} />,
      value: 'palette4',
      name: 'palette4'
    },
    {
      displayName: <ColorPalette src={palette5} number={5} />,
      value: 'palette5',
      name: 'palette5'
    },
    {
      displayName: <ColorPalette src={palette6} number={6} />,
      value: 'palette6',
      name: 'palette6'
    }
  ]
};

export const getYesNoAnswer = (dataKey: string): QuestionaireEntry => {
  return {
    dataKey,
    items: [
      { displayName: 'Yes', value: true, name: `${dataKey}-true` },
      { displayName: 'No', value: false, name: `${dataKey}-false` }
    ]
  };
};
