import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Box from '../../components/Box';
import Timeline from '../../components/Timeline';
import Expertise from '../../components/Expertise';
import Portfolio from '../../components/Portfolio';
import Address from '../../components/Address';
import Feedback from '../../components/Feedback';
import Panel from '../../components/Panel';
import Skills from '../../components/Skills';
import { expertiseData, feedbackData } from '../../data';

import './inner.scss';
import UpButton from '../../assets/images/up_btn.svg';
import { getTimelineData } from '../../features/education/educationSlice';
import { getSkillsData } from '../../features/skills/skillsSlice';
import { requestState } from '../../const';

function Inner() {
  const timelineData = useSelector((state) => state.education.timelineData);
  const timelineRequestState = useSelector((state) => state.education.requestState);
  const skillsData = useSelector((state) => state.skills.skillsData);
  const skillsRequestState = useSelector((state) => state.skills.requestState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTimelineData());
    dispatch(getSkillsData());
  }, []);

  return (
    <div className="c-inner">
      <aside>
        <Panel />
      </aside>
      <main>
        <Box
          id="about_me"
          title="About me"
          content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque."
        />
        <Box
          id="education"
          title="Education"
          component={<Timeline data={timelineData} />}
          showLoader={timelineRequestState === requestState.PENDING}
          showError={timelineRequestState === requestState.FAILED}
          showComponent={timelineRequestState === requestState.FULFILLED}
        />
        <Box
          id="experience"
          title="Experience"
          component={<Expertise data={expertiseData} />}
          showComponent
        />
        <Box
          id="skills"
          title="Skills"
          component={<Skills data={skillsData} />}
          showLoader={skillsRequestState === requestState.PENDING}
          showError={skillsRequestState === requestState.FAILED}
          showComponent={
            (skillsRequestState === requestState.FULFILLED)
            || (skillsRequestState === requestState.STORED)
          }
        />
        <Box
          id="portfolio"
          title="Portfolio"
          component={<Portfolio />}
          showComponent
        />
        <Box
          id="contacts"
          title="Contacts"
          component={<Address />}
          showComponent
        />
        <Box
          id="feedbacks"
          title="Feedbacks"
          component={<Feedback data={feedbackData} />}
          showComponent
        />
      </main>
      <a href="#about_me" className="c-inner__up-btn">
        <img
          src={UpButton}
          alt="go to the top"
        />
      </a>
    </div>
  );
}

export default Inner;
