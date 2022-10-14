import React from 'react';
import { makeStyles } from '@mui/styles';

import { Box } from '@mui/material';
import { size } from 'lodash';

export default function CategoryListFilter({ categories, type }) {
  const classes = useStyles();

  return (
    <Box component='li' className={classes.list}>
      {size(categories) > 0 && (
        categories.map(category => (
          <ListItem item={category} type={type} />
        ))
      )}
    </Box>
  )
}

const ListItem = ({ item, type }) => {
  const classes = useStyles();

  return (
    <Box component='li' >

      <Link href={`/${type}/${item.url}`} passHref>
        <a className={classes.link}>{item.kategoria}</a>
      </Link>
    </Box>
  )
}

// const ButtonCta = ({ genderItem, classes }) => {
//   return (
//     <Box component='div' className={classes.searchLink} >

//       <Link href={`/kategoria/${genderItem.url}?q=plec`} passHref>
//         <a className={classes.ctaButton}>{genderItem.title}</a>
//       </Link>
//     </Box>
//   );
// };

const useStyles = makeStyles(theme => ({
  space: {
    minHeight: '6rem'
  }
}));
