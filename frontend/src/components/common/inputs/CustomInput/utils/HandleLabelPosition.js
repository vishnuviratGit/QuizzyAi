import { LabelPositionTypes } from "../types";

export const handleLabelPosition = (labelPosition= LabelPositionTypes.TOP)=>{
     switch(labelPosition){
        case LabelPositionTypes.LEFT:
            return "flex-row gap-1 items-centre"
        case LabelPositionTypes.TOP:
            return "flex-col"
        default:
            return "flex-col"
     }
}