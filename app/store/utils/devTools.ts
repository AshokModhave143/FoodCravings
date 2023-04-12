import remoteDev from 'remote-redux-devtools';

export const connection = remoteDev({
  hostname: 'localhost',
  port: 8081,
  secure: false,
});
