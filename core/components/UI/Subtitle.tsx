import React from 'react';

interface Props {
  content: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  extraStyles?: string;
  overrideStyles?: string;
}

const Subtitle: React.FC<Props> = ({
  content,
  level = null,
  extraStyles = null,
  overrideStyles = null
}) => {
  let styles = overrideStyles
    ? overrideStyles
    : 'text-primary font-semibold tracking-widest text-2xl leading-9';

  if (extraStyles) {
    styles = styles + ' ' + extraStyles;
  }

  if ((level = 1)) {
    return <h1 className={styles}>{content}</h1>;
  }

  if ((level = 2)) {
    return <h2 className={styles}>{content}</h2>;
  }

  if ((level = 3)) {
    return <h3 className={styles}>{content}</h3>;
  }

  if ((level = 4)) {
    return <h4 className={styles}>{content}</h4>;
  }

  if ((level = 5)) {
    return <h5 className={styles}>{content}</h5>;
  }

  if ((level = 6)) {
    return <h6 className={styles}>{content}</h6>;
  }
  
  return <p className={styles}>{content}</p>;
};

export default Subtitle;
