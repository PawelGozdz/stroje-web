import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';
import ReactMarkdown from "react-markdown";

export default function PageText({ richText }) {
    const classes = useStyles();

    return (
        <Container maxWidth='xl' className={classes.container}>
            <ReactMarkdown className={classes.text}>{richText}</ReactMarkdown>
        </Container>
    )
}

const useStyles = makeStyles(theme => ({
    container: {
        fontFamily: 'Roboto',
        padding: theme.spacing(3),
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(5),
        },
        [theme.breakpoints.up('xl')]: {
            paddingTop: theme.spacing(10),
            paddingBottom: theme.spacing(10)
        },
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bolder',
        color: `${theme.palette.common.primary.main} !important`,
        [theme.breakpoints.up('md')]: {
            textAlign: 'left',
        },
    },
}));