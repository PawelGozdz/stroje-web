import React from 'react';
import { makeStyles } from '@mui/styles';
import _ from 'lodash';
import ImageCustom from '../../Image/Image';

export default function PageBanner({ banners }) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ImageCustom
                className={classes.image}
                src={banners[0].url}
                aspectRatio={4.5}
                alt={banners[0].alternativeText}
                title={banners[0].caption}
                formats={banners[0].formats}
            />
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
    },
}));
