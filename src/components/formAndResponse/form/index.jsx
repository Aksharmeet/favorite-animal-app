import classes from './form.module.css';

const index = () => {
  const images = {
    arrayOne: [
      'assets/images/animal-1.jpg',
      'assets/images/animal-2.jpg',
      'assets/images/animal-3.jpg',
    ],
    arrayTwo: [
      'assets/images/animal-5.jpg',

      'assets/images/animal-7.jpg',
      'assets/images/animal-16.jpeg',
      'assets/images/animal-8.jpg',
    ],
    arrayThree: [
      'assets/images/animal-9.jpeg',
      'assets/images/animal-10.jpeg',
      'assets/images/animal-11.jpeg',
    ],
  };

  const submitEventHandler = async event => {
    event.preventDefault();
    const input = document.getElementById('animal');
    const inputValue = input.value;
    const link = `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_SEARCH_KEY}&cx=${process.env.REACT_APP_CSE}&q=${inputValue}`;

    try {
      const { data } = await fetch(link);
      console.log(data);
    } catch (err) {
      console.log(err);
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
            className={classes.form_input}
          />
          <button type="submit" className={classes.form_submit}>
            <img src="/assets/svg/search-icon.svg" alt="search icon" />
          </button>
        </div>
      </form>
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

export default index;
