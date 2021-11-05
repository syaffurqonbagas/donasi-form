import React from "react";
import logo from "../../assets/ist.png"
import { AppBar, Typography, Toolbar } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { width } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";
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

    const [quote, setQuote] = useState([])

    const getQuotes = async () => {
        try {
            const res = await axios.get("https://quotes.rest/qod?language=en");
            const data = await res.data
            setQuote(data)
        } catch (error) {
            console.log("error")
        }
    }

    useEffect(() => {
        getQuotes()
    }, [])

    console.log("ini dari header", quote)



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