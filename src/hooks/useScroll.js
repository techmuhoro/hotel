import { useState, useEffect } from 'react';

export default height => {
  const [fixed, setFixed] = useState(() =>
    window.pageYOffset > height ? true : false
  );

  const scrollListener = () =>
    window.pageYOffset > height ? setFixed(true) : setFixed(false);

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);

    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  return [fixed];
};
