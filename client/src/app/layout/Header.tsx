import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

const navLinks=[
    { title: 'Home',path: '/'},
    { title: 'Store',path: '/store'},
    { title: 'Contact',path: '/contact'},
]

const accountLinks=[
    { title: 'Login',path: '/login'},
    { title: 'Register',path: '/register'},
]

const navStyles= {
    color: 'inherit',
    typography: "h6",
    textDecoration: "none",
    "&:hover": {
        color: "secondary.main"
    },
    "&.active": {
        color: "text.secondary"
    }
};
interface Props {
    darkMode: boolean;
    handleThemeChange:()=> void;
}
export default function Header({darkMode, handleThemeChange}: Props){
    return(
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Typography variant="h6">
                    Sports Center
                </Typography>
                <Switch checked={darkMode} onChange={handleThemeChange}/>
            </Toolbar>
        </AppBar>
    )
}