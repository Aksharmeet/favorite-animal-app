import Form from './form';
import Response from './response';
import { createContext, useState } from 'react';

import classes from './formAndResponse.module.css';

export const AnimalContext = createContext(null);

const FormAndResponse = () => {
  const [animal, setAnimal] = useState({
    image: '',
    error: '',
  });

  return (
    <AnimalContext.Provider value={{ animal, setAnimal }}>
      <div className={classes.form_response_container}>
        <div className={classes.form_response_container_inner_wrapper}>
          <Form />
          <Response />
        </div>
      </div>
    </AnimalContext.Provider>
  );
};

export default FormAndResponse;
