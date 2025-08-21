import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTitleName } from '../../utils/utils';

const TitleUpdater = () => {
   const location = useLocation();

   useEffect(() => {
      document.title = getTitleName(location.pathname);
   }, [location]);

   return null;
};

export default TitleUpdater;