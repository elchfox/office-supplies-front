import { Box, Modal } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { IFields } from "../utils/layoutTable";
import DynamicRender from "./DynamicRender";
import ModalFooter from "./modal/ModalFooter";
import ModalHeader from "./modal/ModalHeader";


type FormDataProps = {
    inputs: any[],
    title?: string,
    action: string,
    mode?: "edit" | "create",
    data?: any,
    statusResponse?: boolean
    onSubmit?: (data?: any) => void
    onDelete?: (data?: any) => void
    onClose?: () => void,
    open?: boolean
}

const FormData: React.FC<FormDataProps> = (props) => {
    const { inputs, mode, data, onClose, open = false, title, onSubmit, onDelete, statusResponse } = props;
    const [itemData, setItemData] = useState<any>(data);
    const { selectList } = useSelector((state: RootState) => state.general)


    const onChange = (event: any, item: IFields) => {
        const { type } = item;
        let value = undefined
        console.log(event.target.value, item);
        if (type === "switch") {
            value = event.target.checked
        } else {
            if (type === "number") {
                value = Number(event.target.value)

            } else {

                value = event.target.value
            }
        }
        setItemData({
            ...itemData,
            [item.fieldName]: value
        })
    }

    const handleClose = () => {
        onClose && onClose()
    }

    return (<Modal
        className="modal"
        open={open}
        onClose={handleClose}
    >
        <Box className="inner">
            {title && <ModalHeader onClose={handleClose} title={title} />}
            <Box className={"content"}>
                <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
                    {inputs.map((item, index) =>
                        <Box display={"flex"} gap={"1rem"} key={index}>
                            {item.row.map((item: any, index: number) => {
                                const optionsRender = item.type === "select" ? (typeof item.options === "string") ? selectList[item.options] : item.options : undefined
                                    console.log(selectList,"jjj",optionsRender,item.type)
                                return (
                                    <DynamicRender {...item} onChange={(e: any) => onChange(e, item)}
                                        required={mode == "create" ? false : item.required}
                                        options={optionsRender}
                                        key={index} />

                                )
                            })
                            }
                        </Box>
                    )}
                </Box>

            </Box>
            <ModalFooter mode={mode} onDelete={() => onDelete && onDelete(itemData)}
                disabledButtons={statusResponse} onSubmit={() => onSubmit && onSubmit(itemData)} />
        </Box>
    </Modal>
    )
};

export default FormData;