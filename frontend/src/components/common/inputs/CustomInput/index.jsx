import React from "react";
import HandleInputRender from "./HandleInputRender";
import { LabelPositionTypes } from "./types";
import { handleLabelPosition } from "./utils";

const CustomInput = (props) => {
  const { id, label, labelPosition = LabelPositionTypes.TOP } = props;
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className={` flex ${handleLabelPosition(labelPosition)} gap-1`}>
        {label && (
          <label for={id} className="shrink-0">
            {label}
          </label>
        )}

        <HandleInputRender {...props} />
      </div>
    </div>
  );
};

export default CustomInput;
