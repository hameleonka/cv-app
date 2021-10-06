const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Skill name is a required field';
  }

  if (!values.range) {
    errors.range = 'Skill range is a required field';
  } else if (Number.isNaN(values.range)) {
    errors.range = 'Skill range must be a "number" type';
  } else if (values.range < 10) {
    errors.range = 'Skill range must be greater than or equal to 10';
  } else if (values.range > 100) {
    errors.range = 'Skill range must be less than or equal to 100';
  }
  return errors;
};

export default validate;
