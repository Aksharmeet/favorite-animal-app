import { useContext } from 'react';
import { AnimalContext } from '..';
import classes from './response.module.css';

const Response = () => {
  const { animal } = useContext(AnimalContext);
  return (
    <div className={classes.image_container}>
      {animal.image ? (
        <img src={animal.image} alt="animal" />
      ) : (
        <img src="assets/images/animal-16.jpeg" alt="animal-16" />
      )}
    </div>
  );
};

export default Response;
