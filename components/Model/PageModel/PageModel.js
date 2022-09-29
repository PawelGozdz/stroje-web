import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Container } from '@mui/material';
import { useRouter } from 'next/router';
import { makeStyles } from '@mui/styles';

import * as _ from 'lodash';

import ModelHero from '../ModelHero';
import ModelSlides from '../ModelHero/ModelSlides';
import ModelDescription from '../ModelHero/ModelDescription';
import { SameCategory } from '../SameCategory';

export default function PageModel({ modelProps, pageProps, globalProps }) {

    if (!modelProps) return (
        <p>Coś jest nie tak :(</p>
    );

    const pagePropsData = pageProps?.[0] || null;
    const globalPropsData = globalProps?.[0] || null;

    const classes = useStyles();

    const [model, setModel] = useState(null);
    const [loader, setLoader] = useState(false);

    const { query } = useRouter();

    useEffect(() => {
        (async () => {
            setLoader(true);
            setModel(modelProps);
            setLoader(false);
        })();
    }, [query]);

    return (
        <>
            {(loader || !model) ? (
                <Box className={classes.spaceFiller}><CircularProgress /></Box>
            ) : (
                <ModelHero>
                    <ModelSlides model={model} loader={loader} />
                    <ModelDescription model={model} loader={loader} pageSettings={pagePropsData} globalSettings={globalPropsData} />
                </ModelHero>
            )}

            {model && (
                <Box component='section' className={classes.section}>
                    <Container maxWidth='xl' className={classes.container}>
                        <SameCategory model={model} />
                    </Container>
                </Box>
            )}
        </>
    )
}

const useStyles = makeStyles(theme => ({
    spaceFiller: {
        minHeight: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    section: {
        ...theme.sections.section,
        paddingTop: theme.spacing(4),
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(7),
        }
    },
    container: {
        padding: 0
    }
}));
