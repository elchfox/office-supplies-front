import { createPortal } from "react-dom";

type TToolTip = {
    text: string
}
const ToolTip: React.FC<TToolTip> = ({ text }) => {




    return createPortal(<div className="tooltip">{text}</div>, document.getElementById("tooltip")!)


};

export default ToolTip;