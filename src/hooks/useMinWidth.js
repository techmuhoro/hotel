import { useState, useContext, useEffect } from 'react';

export default width => {
  const [state, setState] = useState(() =>
    window.innerWidth < width ? true : false
  );

  const resizeListener = () =>
    window.innerWidth < width ? setState(true) : setState(false);

  useEffect(() => {
    window.addEventListener('resize', resizeListener);

    return () => window.removeEventListener('resize', resizeListener);
  }, []);

  return [state];
};
