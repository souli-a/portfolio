import { useEffect } from 'react';

const useTitlePage = ({ title }) => {
  useEffect(() => {
    if (!title) {
      window.document.title = 'Portfolio';
    } else {
      window.document.title = `${title} - Portfolio`;
    }
  }, [title]);
};

export default useTitlePage;
