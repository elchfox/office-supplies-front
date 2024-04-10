import {
    FormControl,
    FormControlLabel,
    FormHelperText,
    InputLabel,
    MenuItem,
    SelectProps,
    Switch,
    SwitchProps,
    TextField,
    TextFieldProps
} from "@mui/material";
import { useState } from "react";
import { CategorySelect } from "./CommonComponents";


type ITextField = {

} & TextFieldProps;
type IOptions = {
    text: string;
    value: string | number;
}
type ISelect = {
    options: IOptions[];
} & SelectProps


const Input: React.FC<ITextField> = (props) => {
    const { error, ...rest } = props;
    return (
        <>
            <TextField {...rest} />
            <FormHelperText variant={props.variant} error={error}>
                {props?.error}
            </FormHelperText>
        </>
    );
};
type ISwitch = {
    label?: string;
    value?: boolean;
    onChange?: (e: any) => void;
} & SwitchProps
const SwitchToggle: React.FC<ISwitch> = (props) => {
    const { label, value } = props;
    let [checked, setChecked] = useState<boolean>(value || false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        props.onChange && props.onChange(event);
    };

    return (
        <FormControlLabel
            labelPlacement={"start"}
            label={label ? label : ""}
            control={
                <Switch
                    checked={checked}
                    onChange={handleChange}
                />
            }
        />
    );
};
const Select: React.FC<ISelect> = (props) => {
    const {
        options,
        value = "",
        label,
        required,
    } = props;

    return (
        <>
            <FormControl
                fullWidth
                variant="filled"
                sx={{
                    "&.MuiFormControl-root": {
                        borderRadius: 2,
                        overflow: "hidden",
                    },
                }}
            >
                <InputLabel>{(required ? "*" : "") + label}</InputLabel>
                <Select value={value} {...props} label={(required ? "*" : "") + label}>
                    {options && options.map((item: IOptions, index: number) => (
                        <MenuItem value={item.value} key={index}>
                            {item.text}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            {props?.error && (
                <FormHelperText variant="outlined" error={true}>
                    {props?.error}
                </FormHelperText>
            )}
        </>
    );
};
const component: any = {
    "select": Select,
    "switch": SwitchToggle,
    "category": CategorySelect
};
export { Input, Select, SwitchToggle };
export default component;