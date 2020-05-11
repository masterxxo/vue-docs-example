const path = require('path');

module.exports = {
  // set your styleguidist configuration here
  title: 'Default Style Guide',
  // components: 'src/components/**/[A-Z]*.vue',
  // defaultExample: true,
  // sections: [
  //   {
  //     name: 'First Section',
  //     components: 'src/components/**/[A-Z]*.vue'
  //   }
  // ],
  // webpackConfig: {
  //   // custom config goes here
  // },
  exampleMode: 'expand',
  copyCodeButton: true,
  require: [
    path.join(__dirname, './src/styles/style.scss'),
  ],
};
