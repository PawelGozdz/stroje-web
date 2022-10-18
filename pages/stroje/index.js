import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/router';
import * as qs from 'qs';
import { Container, Box, CircularProgress, Typography } from '@mui/material';
import * as _ from 'lodash';
import BasicLayout from '../../layouts/BasicLayout';
import BreadCrumbs from '../../components/BreadCrumbs';
import FloatingMenu from '../../components/FloatingMenu';
import CategoryListFilter from '../../components/CategoryListFilter/CategoryListFilter';
import { useAppContext } from '../../context/StateContext';
import { getDModelsByCustomProps, getDModelsByCustomPropsCount } from '../../api/d-model';
import { getModelsByCustomProps, getModelsByCustomPropsCount } from '../../api/model';
import { getPageProps } from '../../api/pages';
import { getStartItem, limitPerPage } from '../../utils/fetch';
import ListModelsCards from '../../components/ListModelsCards';
import Pagination from '../../components/Pagination';
import Seo from '../../components/Seo/Seo';
import EmptyBar from '../../components/EmptyBar';

export default function Models({ pageProps, opositeModels }) {

    const classes = useStyles();
    const { query } = useRouter();

    const { dodatki, categories, genders, globalProps } = useAppContext();
    const type = 'stroje';
    const typeOposite = 'dodatki';

    const [models, setModels] = useState(null);
    const [oModels, setOModels] = useState(null);
    const [loader, setLoader] = useState(false);
    const [count, setCount] = useState(null);

    useEffect(() => {
        (async () => {
            setLoader(true);

            const buildQuery = {
                _limit: limitPerPage(query),
                _start: getStartItem(query),
            };

            const where = {
                _where: [
                    { ...(query.kategoria && { 'categories.url_in': query.kategoria }) },
                    { ...(query.plec && { 'plec.url_in': query.plec }) },
                    { ...(query.kolor && { 'colors.kolor_in': query.kolor }) },
                ]
            };

            const getModels = qs
                .stringify({
                    ...buildQuery,
                    ...where,
                    _sort: 'created_at:DESC'
                });

            const getResponseD = getModelsByCustomProps(getModels);
            const getResponseDCount = getModelsByCustomPropsCount(getModels);

            try {
                const [dModelsData, dModelsDataCount] = await Promise.all([getResponseD, getResponseDCount]);
                setModels(dModelsData)
                setCount(dModelsDataCount)
                setOModels(opositeModels)

            } catch (error) {
                console.log('ERRRORO', error)
            }

            setLoader(false);
        })();
    }, [query]);

    return (
        <BasicLayout>
            <Seo />
            <FloatingMenu />
            <BreadCrumbs />

            {/* <CategoryListFilter categories={dodatki} type={type} /> */}

            <SectionHeader category={query.kategoria} type={type} />

            <Box component='section' className={classes.section}>
                <Container maxWidth='xl' className={classes.container}>
                    {loader
                        ? <CircularProgress />
                        : _.size(models) > 0 && <ListModelsCards models={models} />
                    }
                </Container>
            </Box>
            <SectionPagination query={query} count={count} />

            <EmptyBar />

            {loader
                ? <CircularProgress />
                : _.size(oModels) > 0 && (
                    <>
                        <SectionHeader category={query.kategoria} type={typeOposite} message={`Te ${typeOposite} mogą Cię zainteresować...`} />

                        <Box component='section' className={classes.section}>
                            <Container maxWidth='xl' className={classes.container}>
                                <ListModelsCards models={oModels} />
                            </Container>
                        </Box>

                        <EmptyBar />
                    </>
                )
            }

        </BasicLayout>
    )
}

const SectionHeader = ({ category, type, message }) => {
    const classes = useStyles();

    return (
        <Box component='section' className={classes.section}>
            <Container maxWidth='xl' className={classes.container}>
                <Typography variant='h4' component='h3' className={classes.sectionHeader}>
                    {
                        message ? message : (category ? `Dostępne ${type} z kategorii ${category}` : `Dostępne ${type}`)
                    }
                </Typography>
            </Container>
        </Box>
    )
}

const SectionPagination = ({ query, count }) => {

    return (
        <Pagination
            page={query.page ? parseInt(query.page) : 1}
            total={count}
            limitPerPage={limitPerPage(query)}
        />
    )
}

export async function getServerSideProps(context) {
    const query = context.query;

    const buildQuery = {
        _limit: 6,
        _start: 0,
    };

    const where = {
        _where: [
            { ...(query.kategoria && { 'd_categories.url_in': query.kategoria }) },
            { ...(query.kolor && { 'colors.kolor_in': query.kolor }) },
        ]
    };

    const getModels = qs
        .stringify({
            ...buildQuery,
            ...where,
            _sort: 'created_at:DESC'
        });

    const getResponse = getDModelsByCustomProps(getModels);
    const getResponseCount = getDModelsByCustomPropsCount(getModels);


    const pageProps = getPageProps(
        qs.stringify({
            strona: 'stroje'
        })
    );

    const [opositeModels, opositeModelsCount, pagePropsData] = await Promise.all([getResponse, getResponseCount, pageProps]);

    return {
        props: {
            pageProps: pagePropsData,
            opositeModels,
            opositeModelsCount
        }
    }
}


// export async function getServerSideProps(context) {
//     return {
//         redirect: {
//             destination: '../',
//             permanent: false,
//         },
//     }
// }

const useStyles = makeStyles(theme => ({
    section: {
        ...theme.sections.section,
        paddingTop: theme.spacing(4),
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(5),
        }
    },
    sectionSubHeader: {
        color: theme.palette.grey[500]
    },
    spaceFiller: {
        minHeight: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryLink: {
        ...theme.typography.h6,
        color: theme.palette.common.secondary,
        textDecoration: 'underline',
        marginRight: theme.spacing(1),
    }
}));
