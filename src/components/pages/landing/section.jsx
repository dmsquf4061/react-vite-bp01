import Gnb from '../../common/gnb';
import SectionMain from './section/section-main';
import SectionSkills from './section/section-skills';
import SectionLibraries from './section/section-libraries';
import SectionWorks from './section/section-works';
import SectionProcess from './section/section-process';
import SectionContacts from './section/section-contact';

function LandingSection() {
  return (
     <>
      <Gnb />
      <SectionMain />
      <SectionSkills />
      <SectionLibraries />
      <SectionWorks />
      <SectionProcess />
      <SectionContacts />
    </>
  )
}

export default LandingSection