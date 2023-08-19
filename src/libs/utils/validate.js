const Validate = inputValue => {
  if (inputValue.length > 20) {
    return 'Please enter at most 20 characters';
  } else if (inputValue.length < 2) {
    return 'Please enter at least 2 characters';
  } else if (!inputValue.match(/^[a-zA-Z]+$/)) {
    return 'Please enter a valid name';
  }
};

export default Validate;
