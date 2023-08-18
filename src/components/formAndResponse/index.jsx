import Form from './form';
import Response from './response';

import classes from './formAndResponse.module.css';

const FormAndResponse = () => {
  return (
    <div className={classes.form_response_container}>
      <div className={classes.form_response_container_inner_wrapper}>
        <Form />
        <Response />
      </div>
    </div>
  );
};

export default FormAndResponse;
