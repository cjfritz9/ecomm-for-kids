import palette1 from '@/public/assets/palettes/Palette 1.png';
import palette2 from '@/public/assets/palettes/Palette 2.png';
import palette3 from '@/public/assets/palettes/Palette 3.png';
import palette4 from '@/public/assets/palettes/Palette 4.png';
import palette5 from '@/public/assets/palettes/Palette 5.png';
import palette6 from '@/public/assets/palettes/Palette 6.png';
import Image from 'next/image';

export interface QuestionnaireItem {
  displayName: string | JSX.Element;
  value: string | boolean;
}

export interface QuestionaireEntry {
  dataKey: string;
  items: QuestionnaireItem[];
}

export const categorySelections: QuestionaireEntry = {
  dataKey: 'productCategory',
  items: [
    {
      displayName: 'Electronics',
      value: 'electronics'
    },
    {
      displayName: 'Pet Products',
      value: 'petProducts'
    },
    {
      displayName: 'Toys',
      value: 'toys'
    },
    {
      displayName: 'Jewelry',
      value: 'jewelry'
    },
    {
      displayName: "Women's Clothing",
      value: 'womensClothing'
    },
    {
      displayName: "Men's Clothing",
      value: 'mensClothing'
    }
  ]
};

export const categoryDislikeSelections: QuestionaireEntry = {
  dataKey: 'productCategoryDislike',
  items: [
    {
      displayName: 'I like them all',
      value: ''
    },
    {
      displayName: 'Electronics',
      value: 'electronics'
    },
    {
      displayName: 'Pet Products',
      value: 'petProducts'
    },
    {
      displayName: 'Toys',
      value: 'toys'
    },
    {
      displayName: 'Jewelry',
      value: 'jewelry'
    },
    {
      displayName: "Women's Clothing",
      value: 'womensClothing'
    },
    {
      displayName: "Men's Clothing",
      value: 'mensClothing'
    }
  ]
};

export const seasonSelections: QuestionaireEntry = {
  dataKey: 'season',
  items: [
    {
      displayName: 'Spring',
      value: 'spring'
    },
    {
      displayName: 'Summer',
      value: 'summer'
    },
    {
      displayName: 'Fall',
      value: 'fall'
    },
    {
      displayName: 'Winter',
      value: 'winter'
    }
  ]
};

export const petSelections: QuestionaireEntry = {
  dataKey: 'pets',
  items: [
    {
      displayName: 'Cat(s)',
      value: 'cats'
    },
    {
      displayName: 'Dog(s)',
      value: 'dogs'
    },
    {
      displayName: 'Cats & Dogs',
      value: 'catsAndDogs'
    },
    {
      displayName: 'Other',
      value: 'other'
    }
  ]
};

export const paletteSelections: QuestionaireEntry = {
  dataKey: 'colorPalette',
  items: [
    {
      displayName: (
        <Image
          src={palette1}
          height={100}
          width={400}
          alt='Palette option number 1'
          className='rounded-lg border border-black my-0'
        />
      ),
      value: 'palette1'
    },
    {
      displayName: (
        <Image
          src={palette2}
          height={100}
          width={400}
          alt='Palette option number 2'
          className='rounded-lg border border-black my-0'
        />
      ),
      value: 'palette2'
    },
    {
      displayName: (
        <Image
          src={palette3}
          height={100}
          width={400}
          alt='Palette option number 3'
          className='rounded-lg border border-black my-0'
        />
      ),
      value: 'palette3'
    },
    {
      displayName: (
        <Image
          src={palette4}
          height={100}
          width={400}
          alt='Palette option number 4'
          className='rounded-lg border border-black my-0'
        />
      ),
      value: 'palette4'
    },
    {
      displayName: (
        <Image
          src={palette5}
          height={100}
          width={400}
          alt='Palette option number 5'
          className='rounded-lg border border-black my-0'
        />
      ),
      value: 'palette5'
    },
    {
      displayName: (
        <Image
          src={palette6}
          height={100}
          width={400}
          alt='Palette option number 6'
          className='rounded-lg border border-black my-0'
        />
      ),
      value: 'palette6'
    }
  ]
};

export const getYesNoAnswer = (dataKey: string): QuestionaireEntry => {
  return {
    dataKey,
    items: [
      { displayName: 'Yes', value: true },
      { displayName: 'No', value: false }
    ]
  };
};
