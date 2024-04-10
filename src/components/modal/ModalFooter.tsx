

import { Box, Button } from "@mui/material";
import React from "react";


type ModalFooterProps = {
    onDelete?: () => void,
    onSubmit?: () => void
    mode?: "edit" | "create",
    disabledButtons?: boolean;
}

const ModalFooter: React.FC<ModalFooterProps> = (props) => {
    const { onSubmit, onDelete, mode, disabledButtons } = props
    return (
        <Box className={"footer"} display={"flex"}
            justifyContent={"flex-end"} gap={"0.5rem"}>
            <Button color="success" disabled={disabledButtons} variant="contained" onClick={onSubmit}>
                {mode === "edit" ? "עדכון" : "שמירה"}
            </Button>
            {mode === "edit" && <Button color="error" disabled={disabledButtons} variant="outlined" onClick={onDelete}>
                {"מחיקה"}
            </Button>}

        </Box>
    );
}
export default ModalFooter