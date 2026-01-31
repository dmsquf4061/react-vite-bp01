import { useState } from "react";

import Gnb from "../../common/gnb";
import SectionMain from "./section/section-main";
import SectionSkills from "./section/section-skills";
import SectionLibraries from "./section/section-libraries";
import SectionWorks from "./section/section-works";
import SectionProcess from "./section/section-process";
import SectionContacts from "./section/section-contact";
import Footer from "@/components/common/footer";
import ProcessModal from "@/components/pages/process/process-modal";

function Landing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWorkId, setSelectedWorkId] = useState(null);

  const handleOpen = (workId) => {
    setSelectedWorkId(workId ?? null);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedWorkId(null);
  };

  return (
    <>
      <Gnb />
      <SectionMain />
      <SectionSkills />
      <SectionLibraries />
      <SectionWorks />
      <SectionProcess handleOpen={handleOpen} />

      <ProcessModal
        isOpen={isModalOpen}
        workId={selectedWorkId}
        onClose={handleClose}
      />

      <SectionContacts />
      <Footer />
    </>
  );
}

export default Landing;
