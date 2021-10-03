/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { requestState } from '../../const';

const timelineInitialState = {
  requestState: requestState.INITIAL,
  timelineData: [],
};

export const educationSlice = createSlice({
  name: 'education',
  initialState: timelineInitialState,
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
    setTimelineData: (state, action) => {
      state.timelineData = action.payload;
    },
  },
});

export const {
  requestPending, requestSuccess, requestError, setTimelineData,
} = educationSlice.actions;

export const educationReducers = educationSlice.reducer;

export const getTimelineData = () => async (dispatch) => {
  let timelineDataArray;
  dispatch(requestPending());
  try {
    const response = await fetch('/api/educations');
    // const response = await fetch('/api/educions');

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;

      throw new Error(message);
    }
    timelineDataArray = await response.json();
    dispatch(requestSuccess());
    dispatch(setTimelineData(timelineDataArray));
  } catch (error) {
    dispatch(requestError());
    dispatch(setTimelineData([]));
  }
};
