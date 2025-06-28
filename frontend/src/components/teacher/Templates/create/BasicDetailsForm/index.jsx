import React from "react";
import CustomInput from "../../../../common/inputs/CustomInput";
import { InputTypes, LabelPositionTypes } from "../../../../common/inputs/CustomInput/types";
import { useDispatch, useSelector } from "react-redux";
import { setTemplateKey, templateSelector } from "../../../../../store/features/templates/templateSlice";
const TemplatesBasicDetailsForm = () => {
  const {title, description, gradeLevel, subject} = useSelector(templateSelector)
  const dispatch = useDispatch();
  const handleChange=(key, value)=>{
        dispatch(setTemplateKey({key, value}));
  }
  return (
    <div className="flex flex-col border rounded-md p-4 gap-4">
      <h1 className="text-lg font-bold border-b pb-2">Basic details</h1>
      <form action="" className="flex flex-col gap-4">
        <CustomInput
          inputType={InputTypes.TEXT}
          label={"Title"}
          value={title}
          placeholder="exampleInput..."
          onChange={(value)=>handleChange("title", value)}
        />
        <CustomInput
          inputType={InputTypes.MULTILINE}
          label={"Description"}
          value={description}
          placeholder="enter text here..."
          onChange={(value)=>handleChange("description", value)}
        />
        <div className="flex gap-4">
          <CustomInput
            inputType={InputTypes.TEXT}
            label={"Subject"}
            value ={subject}
            labelPosition={LabelPositionTypes.TOP}
            placeholder="eg: Maths, science, pyschology.."
            onChange={(value)=>handleChange("subject", value)}
          />
          <CustomInput
            inputType={InputTypes.TEXT}
            label={"Grade level"}
            value ={gradeLevel}
            labelPosition={LabelPositionTypes.TOP}
            placeholder="eg: 9, 10, 11.."
            onChange={(value)=>handleChange("gradeLevel", value)}
          />
        </div>
      </form>
    </div>
  );
};

export default TemplatesBasicDetailsForm;
