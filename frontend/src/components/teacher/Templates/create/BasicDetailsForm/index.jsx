import React from "react";
import CustomInput from "../../../../common/inputs/CustomInput";
import { InputTypes, LabelPositionTypes } from "../../../../common/inputs/CustomInput/types";

const TemplatesBasicDetailsForm = () => {
  return (
    <div className="flex flex-col border rounded-md p-4 gap-4">
      <h1 className="text-lg font-bold border-b pb-2">Basic details</h1>
      <form action="" className="flex flex-col gap-4">
        <CustomInput
          inputType={InputTypes.TEXT}
          label={"Title"}
          placeholder="exampleInput..."
        />
        <CustomInput
          inputType={InputTypes.MULTILINE}
          label={"Description"}
          placeholder="enter text here..."
        />
        <div className="flex gap-4">
          <CustomInput
            inputType={InputTypes.TEXT}
            label={"Subject"}
            labelPosition={LabelPositionTypes.TOP}
            placeholder="eg: Maths, science, pyschology.."
          />
          <CustomInput
            inputType={InputTypes.TEXT}
            label={"Grade level"}
            labelPosition={LabelPositionTypes.TOP}
            placeholder="eg: 9, 10, 11.."
          />
        </div>
      </form>
    </div>
  );
};

export default TemplatesBasicDetailsForm;
