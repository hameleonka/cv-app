import Box from '../../components/Box';
import Timeline from '../../components/Timeline';
import Expertise from '../../components/Expertise';
import Portfolio from '../../components/Portfolio';
import Address from '../../components/Address';
import Panel from '../../components/Panel';
import Skills from '../../components/Skills';

import './inner.scss';
import UpButton from '../../assets/images/up_btn.svg';

function Inner() {
  return (
    <div className="c-inner">
      <aside>
        <Panel />
      </aside>
      <main>
        <Box
          id="about_me"
          title="About me"
          content="Hello, I'm Natalia. I'm a Front-End developer based in Boston. I specialize in creating interactive experiences and functional interfaces with ReactJS, JavaScript, HTML and CSS."
        />
        <Box
          id="education"
          title="Education"
          component={<Timeline />}
          showComponent
        />
        <Box
          id="skills"
          title="Skills"
          component={<Skills />}
          showComponent
        />
        <Box
          id="experience"
          title="Experience"
          component={<Expertise />}
          showComponent
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
