import { Box, Modal } from "@mui/material";
import React, { ReactNode } from "react";

import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";

type BasicModalProps = {
    title?: string,
    children?: ReactNode,
    onClose?: () => void,
    open: boolean,
    hideFooter?: boolean
}

const CustomModal: React.FC<BasicModalProps> = (props) => {
    const { title, children, onClose, open, hideFooter } = props

    const handleClose = () => {
        onClose && onClose()
    }
    
    return (
        <Modal
            className="modal"
            open={open}
            onClose={handleClose}>
            <Box className="inner">
                {title && <ModalHeader title={title} onClose={handleClose} />}
                <Box className={"content"}>
                    {children}
                </Box>
                {!hideFooter && <ModalFooter onDelete={handleClose} />}
            </Box>
        </Modal>
    );
}
export default CustomModal