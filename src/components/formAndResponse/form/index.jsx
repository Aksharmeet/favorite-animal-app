import { useContext, useState } from 'react';
import { AnimalContext } from '..';
import Validate from '../../../libs/utils/validate';
import images from '../../../libs/data/animal_images';
import classes from './form.module.css';

const FormAndResponse = () => {
  const { animal, setAnimal } = useContext(AnimalContext);
  const [validationError, setValidationError] = useState('');

  const submitEventHandler = async event => {
    event.preventDefault();

    const input = document.getElementById('animal');
    const inputValue = input.value;

    if (
      inputValue.length > 2 &&
      inputValue.length < 20 &&
      inputValue.match(/^[a-zA-Z]+$/)
    ) {
      try {
        const randomWords = await fetch(
          'https://random-word-api.herokuapp.com/word?number=1',
        ).then(res => res.json());
        const randomWord = randomWords[0];

        const link = `https://www.googleapis.com/customsearch/v1?key=${
          process.env.REACT_APP_GOOGLE_SEARCH_KEY
        }&cx=${process.env.REACT_APP_CSE}&searchType=image&q=${
          inputValue + ' ' + randomWord + ' animal'
        }`;

        const { items } = await fetch(link).then(res => res.json());
        setAnimal({
          ...animal,
          image: items[Math.floor(Math.random() * 10)].link,
        });
      } catch (err) {
        setAnimal({
          ...animal,
          error: 'Something went wrong, please try again later',
        });
      }
    } else {
      setValidationError(Validate(inputValue, setValidationError));
    }
  };

  return (
    <section className={classes.form_container}>
      <form className={classes.form} onSubmit={e => submitEventHandler(e)}>
        <label htmlFor="animal" className={classes}>
          Write the name of your favorite animal
        </label>
        <div className={classes.form_input_wrapper}>
          <input
            id="animal"
            type="text"
            placeholder="Name"
            min="2"
            max="20"
            className={classes.form_input}
          />
          <button type="submit" className={classes.form_submit}>
            Generate Image
          </button>
        </div>
      </form>
      {validationError ? (
        <p className={classes.error}>{validationError}</p>
      ) : (
        <p className={`${classes.error} ${classes.hidden}`}></p>
      )}
      <div className={classes.grid_container}>
        <div className={classes.column}>
          {images.arrayOne.map((image, index) => (
            <img key={index} src={image} alt={image} />
          ))}
        </div>
        <div className={classes.column}>
          {images.arrayTwo.map((image, index) => (
            <img key={index} src={image} alt={image} />
          ))}
        </div>
        <div className={classes.column}>
          {images.arrayThree.map((image, index) => (
            <img key={index} src={image} alt={image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormAndResponse;
