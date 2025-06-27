import React from "react";
import { useHeading } from "../../../../hooks";

import TemplatesBasicDetailsForm from "../../../../components/teacher/Templates/create/BasicDetailsForm";

const CreateTemplatePage = () => {
  const { setHeading, setSubheading } = useHeading();
  setHeading("Create Template");
  setSubheading("palce for creating templates");
  return (
    <div>
       <TemplatesBasicDetailsForm/>
    </div>
  );
};

export default CreateTemplatePage;
