import { useEffect } from 'react';

interface PropsUseTitlePage {
  title: string;
}

const useTitlePage = ({ title }: PropsUseTitlePage) => {
  useEffect(() => {
    if (!title) {
      window.document.title = 'Portfolio';
    } else {
      window.document.title = `${title} - Portfolio`;
    }
  }, [title]);
};

export default useTitlePage;
