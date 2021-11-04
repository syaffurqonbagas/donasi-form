import React from "react";
import logo from "../../assets/ist.png"
import { AppBar, Typography, Toolbar } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { width } from "@mui/system";

const useStyles = makeStyles({
    root: {
        background: "#FFFFFF",
        boxShadow: '0 10px 20px 2px',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
    },
    logoimage: {
        padding: "20px 15px 8px",
        width: 40, "&:hover": {
            background: " rgba(0, 0, 0, 0.1)",
            borderRadius: "30%",
        },

    },
    logoTitle: {
        padding: "20px 10px 10px",
    }
})


export const Headerdonasi = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="relative">
                <Toolbar className={classes.root}>
                    <div className={classes.logo}>
                        <img src={logo} className={classes.logoimage}></img>
                        <Typography className={classes.logoTitle} variant="h6" color="black">
                            Donasi
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )

}