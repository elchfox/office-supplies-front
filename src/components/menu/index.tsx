import { ChevronLeft, ExpandMore, Inbox } from '@mui/icons-material';
import { Avatar, Collapse, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../../utils/theme";
import { allDataLayout } from '../../utils/layoutTable';

interface IMenuItem {
    title: string;
    icon?: React.ReactNode;
    link: string;
    subMenu?: IMenuItem[];
    showMenu?: boolean;
    classProp?: string;
    component?: string;
    controller?: string;
    editComponent?: string;
    folder?: string;
    frontPath: string;
    id?: number;
    maxPermission?: number;
    isSubMenu?: boolean;
}
const MenuItem: React.FC<IMenuItem> = (props) => {
    let navigate = useNavigate();
    const { title, icon, link, subMenu, showMenu, frontPath, isSubMenu } = props;
    const [open, setOpen] = useState(false);
    const handleClick = (e: any) => {
        if (subMenu) {
            setOpen(!open);
        } else {
            navigate(frontPath);
        }
    };
    let isSelect = subMenu
        ? subMenu.findIndex((e) => e.frontPath === document.location.pathname)
        : -1;
    let selected = document.location.pathname === frontPath || isSelect > -1;
    return (
        <List
            sx={{
                paddingBlock: "0.25rem",
            }}
        >
            <ListItem
                selected={selected}
                sx={{
                    gap: "1rem",
                    textAlign: "start",
                    cursor: "pointer",
                    padding: 0,
                    paddingBlock: "0.5rem",
                    paddingInline: "1.125rem",
                    borderRadius: "0.5rem",

                    "&:hover": {
                        color: theme.palette.primary.main,
                        backgroundColor: theme.palette.primary.main + "08",
                        ".MuiTypography-root": {
                            fontWeight: 600,
                        },
                        ".MuiSvgIcon-root": {
                            color: theme.palette.primary.main,
                        },
                    },
                    "&.Mui-selected": {
                        color: isSubMenu ? "unset" : theme.palette.primary.main,
                        backgroundColor: isSubMenu
                            ? "unset"
                            : theme.palette.primary.main + "08",
                        ".MuiTypography-root": {
                            fontWeight: 600,
                        },
                        ".MuiSvgIcon-root": {
                            color: theme.palette.primary.main,
                        },
                    },
                }}
                onClick={handleClick}
            >
                {isSubMenu ? (
                    <div
                        style={{ width: "24px", justifyContent: "center", display: "flex" }}
                    >
                        <div
                            style={{
                                width: selected ? "0.5rem" : "0.25rem",
                                height: selected ? "0.5rem" : "0.25rem",
                                borderRadius: "1rem",
                                backgroundColor: selected
                                    ? theme.palette.primary.main
                                    : theme.palette.text.secondary,
                            }}
                        />
                    </div>
                ) : (
                    <ListItemIcon sx={{ minWidth: "unset" }}>
                        <Inbox />
                    </ListItemIcon>
                )}
                <ListItemText
                    primary={title}
                    sx={{
                        ".MuiTypography-root": {
                            color: theme.palette.text.secondary,
                        },
                    }}
                />
                {subMenu ? open ? <ExpandMore /> : <ChevronLeft /> : null}
            </ListItem>
            {subMenu && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div">
                        {subMenu.map((item: IMenuItem, index: number) => (
                            <MenuItem {...item} isSubMenu={true} key={index} />
                        ))}
                    </List>
                </Collapse>
            )}
        </List>
    );
};


const Menu = () => {
    let [menuTemp, setMenuTepm] = useState<any>([]);
    const mockup = Object.keys(allDataLayout).map((page) => 
    {
        return {
            ...allDataLayout[page],
            frontPath: page.replace("/",""),
            link: page.replace("/","")
        }
    }
    )
    // const mockup:  IMenuItem[] = [{
    //     title: "קטגוריות",
    //     frontPath: "category",
    //     link: "rrr"
    // },
    // {
    //     title: "Roles",
    //     frontPath: "role",
    //     link: "rrr"
    //     },
    //     {
    //         title: "ציודים",
    //         frontPath: "equipment",
    //         link: "rrr"
    //     }
    // ]
    const drawerWidth = 280;

    return (
        <div style={{ width: drawerWidth }}>
            <Drawer
                sx={{
                    "& .MuiDrawer-paper": {
                        "&::-webkit-scrollbar": {
                            width: 3,
                        },
                        "&::-webkit-scrollbar-track": {
                            boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
                        },
                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "darkgrey",
                            outline: `1px solid slategrey`,
                        },
                        flexShrink: 0,
                        // backgroundColor: "var(--blue-dark)",
                        // color: "var(--white)",
                        width: drawerWidth,
                        paddingInline: "1rem",
                        paddingTop: "24px",
                        boxSizing: "border-box",
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                {/* <Toolbar />
      <Divider /> */}

                <Stack spacing={2}>
                    <Stack spacing={4}>
                        <img
                            style={{ maxWidth: 80 }}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/IsraelTrainLogoSymbolOnly.svg/2560px-IsraelTrainLogoSymbolOnly.svg.png"
                        />
                        <Stack
                            sx={{
                                backgroundColor: "#f4f6f8",
                                padding: "1.125rem 1.25rem",
                                borderRadius: "12px",
                                gap: "1rem",
                            }}
                            spacing={2}
                            direction={"row"}
                        >
                            <Avatar>
                                {"EB"}
                            </Avatar>
                            <Stack style={{ margin: 0 }}>
                                <Typography variant="subtitle2">
                                    {"Elhanan Bayazi"}
                                </Typography>
                                <Typography variant="body2" color={theme.palette.text.disabled}>
                                    {'Admin'}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <div>
                        <Typography
                            variant="subtitle2"
                            color={theme.palette.text.secondary}
                        >
                            כללי
                        </Typography>
                        {mockup.map((item: IMenuItem, index: number) => (
                            <MenuItem {...item} key={index} />
                        ))}
                    </div>
                </Stack>

                {/* <Divider /> */}
            </Drawer>
        </div>
    );
};

export default Menu;