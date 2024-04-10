import { Box } from "@mui/material";
import component, { Input } from "./Input";


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

const DynamicRender: React.FC<any> = (props) => {

    const { fieldName, options, onChange, ...rest } = props;
    const Component = component[rest?.type] || Input;
    return (
        <Box
            display={"flex"}
            flex={1}
            flexDirection={"column"}
        >
            <Component
                {...rest}
                variant="filled"
                onChange={onChange}
            />
        </Box>
    )

};

export default DynamicRender;