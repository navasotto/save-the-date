const path = require('path');

module.exports = {
  // other webpack config options...
  resolve: {
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc',
      '@mui/system': '@mui/system-sc',
    },
  },
};