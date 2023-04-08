import React from 'react';
import NavigationCSS from './Navigation.module.scss';
import {NavLink} from 'react-router-dom';
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
export const BasicBreadcrumbs = () => {

    const linkColor = ({isActive}: { isActive: boolean }) => ({color: isActive ? 'red' : '#232f2f'});
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (<>
            <p className={NavigationCSS.link}>
                <Button className={NavigationCSS.btn}
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                >
                    About Us
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>
                        <NavLink className={NavigationCSS.link} to='#'>
                            Psizajners
                        </NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <NavLink className={NavigationCSS.link} to='#'>
                            Model
                        </NavLink>
                    </MenuItem>
                </Menu>
                /
                <NavLink className={NavigationCSS.link} to="/contact-us">
                    Contact
                </NavLink> /
                <NavLink className={NavigationCSS.link} to='#'>
                    FAQ
                </NavLink>
            </p>
        </>
    );
}