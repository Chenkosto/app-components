import React from 'react';
import { noop } from 'lodash/fp';

export const SelectMenuContext = React.createContext({
  onMenuEnter: noop,
  onMenuLeave: noop
});
