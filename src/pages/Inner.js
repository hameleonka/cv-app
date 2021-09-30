import Box from "../components/Box/index";
import Timeline from "../components/Timeline/index";
import Expertise from "../components/Expertise/index";
import Portfolio from "../components/Portfolio/index";
import Address from "../components/Address/index";
import Feedback from "../components/Feedback/index";
import Panel from "../components/Panel/index";
import { expertiseData, feedbackData, timelineData } from '../data';

import './inner.scss';

function Inner() {
  return (
    <div className="c-inner">
      <aside>
        <Panel />
      </aside>
      <main>
        <Box
          title='About me'
          content='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque.' />
        <Box
          title='Education'
          content=''
          component={<Timeline data={timelineData} />}>
        </Box>
        <Box
          title='Experience'
          content=''
          component={<Expertise data={expertiseData} />}>
        </Box>
        <Box
          title='Portfolio'
          content=''
          component={<Portfolio />}>
        </Box>
        <Box
          title='Contacts'
          content=''
          component={<Address />}>
        </Box>
        <Box
          title='Feedbacks'
          content=''
          component={<Feedback data={feedbackData} />}>
        </Box>
      </main>
    </div>
  )
}

export default Inner;
