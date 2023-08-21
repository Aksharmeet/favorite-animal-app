import { useContext } from 'react';
import { AnimalContext } from '..';
import classes from './response.module.css';

const Response = () => {
  const { animal } = useContext(AnimalContext);
  return (
    <div className={classes.image_container}>
      {animal.image ? (
        <>
          <p className={classes.search_query_text}>{animal.searchQuery}</p>
          <img src={animal.image} alt="animal" />
        </>
      ) : (
        <>
          <p className={classes.search_query_text}>Zebra tall farm</p>
          <img src="assets/images/animal-16.jpeg" alt="animal-16" />
        </>
      )}
    </div>
  );
};

export default Response;
