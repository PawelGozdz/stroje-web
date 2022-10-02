import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/router';

import BasicLayout from '../../layouts/BasicLayout';
import BreadCrumbs from '../../components/BreadCrumbs';
import FloatingMenu from '../../components/FloatingMenu';

export default function Category() {
    const classes = useStyles();
    const { query } = useRouter();

    const [models, setModels] = useState(null);
    const [loader, setLoader] = useState(false);
    const [count, setCount] = useState(null);

    useEffect(() => {
        (async () => {
            setLoader(true);

            setModels(modelsArr);
            setCount(modelsCount);

            setLoader(false);
        })();
    }, [query]);

    const category = models?.[0]?.categories?.[0];

    return (
        <BasicLayout>
            <FloatingMenu />
            <BreadCrumbs />
        </BasicLayout>
    )
}

export async function getServerSideProps(context) {
    return {
        redirect: {
            destination: '../',
            permanent: false,
        },
    }
    //   const query = context.query;

    //   const buildQuery = {
    //     _limit: limitPerPage(query),
    //     _start: getStartItem(query),
    //   };

    //   const response = await getModelByCustomProps(
    //     qs.stringify({ ...buildQuery, _where: { [`${query.q || 'categories'}.url`]: query.kryteria } })
    //   );

    //   const responseCount = await getModelByCustomPropsCount(
    //     qs.stringify({ _where: { [`${query.q || 'categories'}.url`]: query.kryteria } })
    //   );

    //   return {
    //     props: {
    //       modelsArr: response,
    //       modelsCount: responseCount
    //     }
    //   }
}

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
