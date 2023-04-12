import {createLogger} from 'redux-logger';

export const logger = createLogger({
  diff: true,
  duration: true,
  timestamp: true,
  colors: {
    title: () => '#0f1842',
    prevState: () => '#de6f0d',
    action: () => '#6e13ab',
    nextState: () => '#1a9134',
  },
  level: 'warn',
});
