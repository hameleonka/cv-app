import { configureStore } from '@reduxjs/toolkit';
import { educationReducers } from '../features/education/educationSlice';
import { skillsReducers } from '../features/skills/skillsSlice';

const store = configureStore({
  reducer: {
    education: educationReducers,
    skills: skillsReducers,
  },
});

store.subscribe(() => {
  const storedState = store.getState();
  localStorage.setItem('Skills', JSON.stringify(storedState.skills.skillsData));
});

export default store;
