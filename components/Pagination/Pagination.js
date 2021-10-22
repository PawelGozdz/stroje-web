import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Pagination } from '@mui/material';
import { useRouter } from 'next/router';
import queryString from 'query-string';
import _ from 'lodash';


export default function PaginationRounded({ limitPerPage, total, page }) {
  const classes = useStyles();

  const [pageNr, setPageNr] = useState(page);

  const totalPages = Math.ceil(total / limitPerPage);
  const router = useRouter();
  const urlParse = queryString.parseUrl(router.asPath);

  const goToPage = (newPage) => {
    urlParse.query.page = newPage;
    urlParse.query.limit = limitPerPage;
    setPageNr(newPage);
    const url = queryString.stringifyUrl(urlParse);
    router.push(url)
  };

  return (
    <div className={classes.root}>
      <Pagination
        variant="outlined"
        shape="rounded"
        page={pageNr}
        count={totalPages}
        onChange={(_, data) => goToPage(data)}
        siblingCount={1}
        className={classes.pagination}
      />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center'
  }
}));
