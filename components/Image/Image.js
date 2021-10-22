import React from 'react';
import Image from 'material-ui-image';
import { makeStyles, useTheme } from '@mui/styles';
import { useMediaQuery } from '@mui/material';
import * as _ from 'lodash';

import { BASE_PATH } from '../../utils/constants';

export default function ImageCustom(props) {
  const theme = useTheme();

  let size = props.src;

  const isKomputer = useMediaQuery(theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.only('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (_.size(props.formats) > 0) {
    if (isKomputer) size = props.formats?.large?.url || size;
    if (isTablet) size = props.formats?.medium?.url || size;
    if (isMobile) size = props.formats?.small?.url || size;
  }

  return <Image {...props} src={`${BASE_PATH}${size}`} />
}
