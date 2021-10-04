/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { requestState } from '../../const';

const skillsInitialState = {
  requestState: requestState.INITIAL,
  skillsData: [],
  addSkillFormState: false,
};

export const skillsSlice = createSlice({
  name: 'skills',
  initialState: skillsInitialState,
  reducers: {
    requestPending: (state) => {
      state.requestState = requestState.PENDING;
    },
    requestSuccess: (state) => {
      state.requestState = requestState.FULFILLED;
    },
    requestError: (state) => {
      state.requestState = requestState.FAILED;
    },
    requestStored: (state) => {
      state.requestState = requestState.STORED;
    },
    setSkillsData: (state, action) => {
      state.skillsData = action.payload;
    },
    addSkillData: (state, action) => {
      state.skillsData.push(action.payload);
    },
    toggleAddSkillForm: (state) => {
      state.addSkillFormState = !state.addSkillFormState;
    },
  },
});

export const {
  requestPending,
  requestSuccess,
  requestError,
  requestStored,
  setSkillsData,
  addSkillData,
  toggleAddSkillForm,
} = skillsSlice.actions;

export const skillsReducers = skillsSlice.reducer;

export const getSkillsData = () => async (dispatch, getState) => {
  const state = getState();

  if (state.skills.skillsData.length === 0) {
    let skillsDataArray;
    dispatch(requestPending());
    try {
      const response = await fetch('/api/skills');

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;

        throw new Error(message);
      }
      skillsDataArray = await response.json();
      dispatch(requestSuccess());
      dispatch(setSkillsData(skillsDataArray));
    } catch (error) {
      dispatch(requestError());
      dispatch(setSkillsData([]));
    }
  }
  dispatch(requestStored());
};

export const addSkill = (skill) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const response = await fetch('/api/skills', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(skill),
    });
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;

      throw new Error(message);
    }
    dispatch(requestSuccess());
    dispatch(addSkillData(skill));
  } catch (error) {
    dispatch(requestError());
  }
};
