import React, { useEffect } from "react";
import { Headerdonasi } from "component/header";
import { makeStyles } from '@mui/styles';
import { FormDonasi } from "component/form";
import logo from "../../assets/logo.png"
import { useDispatch, useSelector } from "react-redux";
import { loadQuotes } from "redux/action/quote";

const useStyles = makeStyles({
    pages: {
        background: "rgb(244, 247, 251)",
        padding: "55px 24px 30px",
        backgroundImage: `url(${logo})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '95% 17%',
        height: "100vh",
        paddingLeft: 40
    },
    backgroundLogo: {

    }
})

export const DonasiPage = () => {
    const classes = useStyles();
    return (
        <>
            <Headerdonasi />
            <div className={classes.pages}>
                <FormDonasi />
            </div>
        </>
    )
}