import React from "react";

const CustomTextArea = ({
  id = "custom-input",
  value,
  onChange,
  className,
  label,
  ...props
}) => {
  
  return (
    <textArea
      value={value}
      id={id}
      className={`${className} w-full border p-1 rounded-md resize-none`}
      onChange={(e) => onChange(e.target.value)}
      rows={3}
      {...props}
    />
  );
};

export default CustomTextArea;
