import { Box } from '@mui/material';
import ElementIcon from '../CustomIcons/ElementIcon';
import { makeStyles } from '@mui/styles';
import * as _ from 'lodash';

export default function IconTypeList({ model }) {
  const classes = useStyles();

  return (
    <Box className={classes.icons}>
      {
        _.map(model.parts, part => (
          <ElementIcon
            title={part.tytul}
            url={part.url}
            key={part.url}
          />
        ))
      }
    </Box>
  );
};

const useStyles = makeStyles(theme => ({
  icons: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));
