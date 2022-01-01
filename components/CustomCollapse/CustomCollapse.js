import React from 'react';
import Collapse from '@mui/material/Collapse';

import * as _ from 'lodash';

export default function CustomCollapse({ expanded, children }) {
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      {_.size(children) > 0 && children}
    </Collapse>
  );
};