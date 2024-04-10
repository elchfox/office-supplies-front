

import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

import CloseIcon from '@mui/icons-material/Close';

type ModalHeaderProps = {
    title: string,
    onClose?: () => void,

}

const ModalHeader: React.FC<ModalHeaderProps> = (props) => {
    const { title, onClose } = props
    return (
        <Box className={"header"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            {title && <Typography variant="h5">
                {title}
            </Typography>}

            <IconButton onClick={onClose} >
                <CloseIcon />
            </IconButton>
        </Box>
    );
}
export default ModalHeader