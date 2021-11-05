import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import NumberFormat from 'react-number-format';
import { Box, Card, TextField, Typography, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadQuotes } from 'redux/action/quote';
import isEmail from 'validator/es/lib/isEmail';
import validator from 'validator'
import FormData from 'form-data';


const useStyles = makeStyles({
    card: {
        width: '500px',
        height: '470px',
        margin: '40px',
        padding: 40,
        borderRadius: 25,
        background: "#FFFFFF",
    },
    cardTitle: {
        marginBottom: 20
    },
    cardContent: {
        padding: 10
    },
    textField: {
        margin: "20px 25px"
    },
    buttonSubmit: {
        margin: "50px 25px 0",
        height: 50
    },
    quotes: {
        margin: "20px 25px",
        textAlign: "center"
    }
});

export const FormDonasi = () => {
    const quotes = useSelector(state => state.quotes.data)
    const classes = useStyles();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(loadQuotes())

    }, [dispatch])


    // --------React Number
    const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
        const { onChange, ...other } = props;

        return (
            <NumberFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            name: props.name,
                            value: values.value,
                        },
                    });
                }}
                thousandSeparator
                isNumericString
                prefix="Rp "
            />
        );
    });

    NumberFormatCustom.propTypes = {
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    };

    const [valuesUser, setValuesUser] = React.useState({
        email: '',
        password: '',
        numberformat: '',
    });

    console.log(valuesUser)

    const required = (value) => (value ? undefined : "Required");

    let todayQuote = `"${quotes}"`

    const onSubmit = async (values) => {
        await sleep(300)
        window.alert(JSON.stringify(values, 0, 2))
        if (values.email !== "erikras") {
            return { email: "Unknown email" };
        }
        if (values.password !== "finalformrocks") {
            return { [FORM_ERROR]: "Login Failed" };
        }
        window.alert("LOGIN SUCCESS!");
    }
    let formData = {};
    //    onSubmit={() => null}
    return (
        <>
            <Form
                onSubmit={onSubmit}
                initialValues={
                    formData
                }
                validate={(values) => {
                    const error = {};
                    // const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    // if (re.test(String(values.email).toLowerCase())) {
                    //     console.log("yuhu")
                    //     error.email = error
                    // }
                    if (!values.email) {
                        error.email = "Required"
                    }
                    if (!values.password) {
                        error.password = "Required"
                    } if (!values.donasi) {
                        error.donasi = "Required"
                    }
                    return error;
                }}
                render={(handleSubmit, values, form, submitError) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <div className={classes.card}>
                                <Typography variant='h5' className={classes.cardTitle}>Mari Donasi</Typography>
                                <div className={classes.cardContent}>
                                    <Field name="email" validate={required}>
                                        {({ input, meta }) => (
                                            <Box className={classes.textField}>
                                                <TextField
                                                    {...input}
                                                    error={meta.error && meta.touched}
                                                    helperText={
                                                        meta.error && meta.touched ? "Email tidak boleh kosong" : ''}
                                                    id="outlined-textarea"
                                                    label="Email"
                                                    placeholder="Masukan Email Kamu"
                                                    fullWidth
                                                    InputProps={{
                                                        inputComponent: setValuesUser.email,
                                                    }}
                                                />

                                            </Box>
                                        )}
                                    </Field>
                                    <Field name="password" validate={required}>
                                        {({ input, meta }) => (
                                            <Box className={classes.textField}>
                                                <TextField
                                                    {...input}
                                                    error={meta.error && meta.touched}
                                                    helperText={meta.error && meta.touched ? "Password tidak boleh kosong" : ''}
                                                    id="outlined-password-input"
                                                    label="Password"
                                                    placeholder='Masukan Password Kamu'
                                                    type="password"
                                                    InputProps={{
                                                        inputComponent: setValuesUser.password,
                                                    }}
                                                    autoComplete="current-password"
                                                    fullWidth
                                                />
                                            </Box>
                                        )}
                                    </Field>
                                    <Field name="donasi" validate={required}>
                                        {({ input, meta }) => (
                                            <Box className={classes.textField}>
                                                <TextField
                                                    {...input}
                                                    label="Donasi"
                                                    helperText={meta.error && meta.touched ? "Donasi tidak boleh kosong" : ''}
                                                    error={meta.error && meta.touched}
                                                    placeholder='Masukan Donasi'
                                                    name="numberformat"
                                                    id="outlined-formatted-numberformat-input"
                                                    InputProps={{
                                                        inputComponent: NumberFormatCustom,
                                                    }}
                                                    fullWidth
                                                />
                                            </Box>
                                        )}
                                    </Field>

                                    <Box className={classes.buttonSubmit} >
                                        <Button type='submit' className={classes.buttonSubmit} variant="contained" size="large" fullWidth>Submit</Button>
                                    </Box>

                                    <Box className={classes.quotes}>
                                        <Typography variant='h5'>Quote of the day:</Typography>
                                        <Typography margin={4} color="primary">{todayQuote}</Typography>
                                    </Box>
                                </div>
                            </div>
                        // </form>

                    )
                }}
            />

        </>
    )
}