import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles';
import { red } from '@mui/material/colors';

export default function CustomCardHeader({ model }) {
  const classes = useStyles();

  return (
    <CardHeader
      avatar={
        <Avatar
          aria-label="Płeć"
          className={classes.avatar}
          title={model.plec.title}
        >
          {model.plec.title[0]}
        </Avatar>
      }
      title={model.tytul}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.common.secondary.main,
  },
}));
