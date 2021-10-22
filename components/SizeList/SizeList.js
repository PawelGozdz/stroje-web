import { makeStyles, withStyles } from '@mui/styles';
import { Box, Tooltip } from '@mui/material';

export default function SizeList({ model }) {
  const classes = useStyles();

  return (
    <Box className={classes.sizeList}>
      {
        _.map(model.sizes, s => (
          <HtmlTooltip
            title={
              <em>{s.opis}</em>
            }
            key={s.url}
          >
            <span key={s.url} className={classes.size}>{s.rozmiar}</span>
          </HtmlTooltip>
        ))
      }
    </Box>
  );
};

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);


const useStyles = makeStyles((theme) => ({
  size: {
    border: `1px solid ${theme.palette.grey[500]}`,
    padding: theme.spacing(1)
  },
  sizeList: {
    marginTop: theme.spacing(1),
    '& > :not(:last-child)': {
      marginRight: '1px'
    }
  },
}));
