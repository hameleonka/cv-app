/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { addSkill } from '../../features/skills/skillsSlice';
import validate from '../../utils/validateSkill';

import './addSkillForm.scss';

function AddSkillForm() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      range: '',
    },
    validate,
    onSubmit: (values) => {
      dispatch(addSkill(values));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="addSkillForm"
    >
      <div className="addSkillForm__wrapper">
        <div className="addSkillForm__field">
          <label
            htmlFor="name"
            className="addSkillForm__field-label"
          >
            Skill name:
          </label>
          <input
            name="name"
            id="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className={formik.touched.name && formik.errors.name
              ? 'addSkillForm__field-input addSkillForm__field-input--error'
              : 'addSkillForm__field-input'}
            placeholder="Enter skill name"
          />
          {formik.touched.name && formik.errors.name
            ? (
              <div className="addSkillForm__field-error">
                {formik.errors.name}
              </div>
            ) : null}
        </div>
        <div className="addSkillForm__field">
          <label
            htmlFor="range"
            className="addSkillForm__field-label"
          >
            Skill range:
          </label>
          <input
            name="range"
            id="range"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.range}
            className={formik.touched.range && formik.errors.range
              ? 'addSkillForm__field-input addSkillForm__field-input--error'
              : 'addSkillForm__field-input'}
            placeholder="Enter skill range"
          />
          {formik.touched.range && formik.errors.range
            ? (
              <div className="addSkillForm__field-error">
                {formik.errors.range}
              </div>
            ) : null}
        </div>
        <button
          type="submit"
          disabled={!(formik.isValid && formik.dirty)}
          className={(formik.isValid && formik.dirty)
            ? 'addSkillForm__btn--active'
            : 'addSkillForm__btn--disabled'}
        >
          Add skill
        </button>
      </div>
    </form>
  );
}

export default AddSkillForm;
