import React from 'react';
import { makeStyles } from '@mui/styles';
import Image from '../Image';
import Link from 'next/link';

export default function RegularModelCard({ model }) {
  return (
    <Grid component='li' item xs={12} sm={6} md={4} lg={2}>
      <Paper component='article' className={classes.paper} elevation={3}>
        <CardActionArea disableRipple>
          <Link href={model.url}>
            <a>
              <Image src={model?.zdjecia[0]?.url} aspectRatio={0.7} alt={model?.zdjecia[0]?.alternativeText} title={model?.zdjecia[0]?.caption} />
              <CardContent>
                <header>
                  <Typography variant='h6' component='h5'>{model.tytul}</Typography>
                </header>
                <Typography component='p'>{model.opis}</Typography>
              </CardContent>
            </a>
          </Link>
        </CardActionArea>
      </Paper>
    </Grid>
  );
}

const useStyles = makeStyles(theme => ({
  image: {
    maxHeight: '25rem',
  }
}));
