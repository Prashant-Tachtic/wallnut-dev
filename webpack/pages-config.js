const pages = [
  {
    componentName: 'global',
    fileLocation: './scripts/global.js',
    templateFile: 'snippets/webpack-scripts-global.liquid',
  },
  {
    componentName: 'main',
    fileLocation: './scripts/main.js',
    templateFile: 'snippets/webpack-scripts-main.liquid',
  },
  {
    componentName: 'products',
    fileLocation: './scripts/products.js',
    templateFile: 'snippets/webpack-scripts-products.liquid',
  },
  {
    componentName: 'collections',
    fileLocation: './scripts/collections.js',
    templateFile: 'snippets/webpack-scripts-collections.liquid',
  },
  {
    componentName: 'pages',
    fileLocation: './scripts/pages.js',
    templateFile: 'snippets/webpack-scripts-pages.liquid',
  },
  {
    componentName: 'checkout',
    fileLocation: './scripts/checkout.js',
    templateFile: 'snippets/webpack-scripts-checkout.liquid',
  },
];

const webpackEntry = () =>
  pages.reduce(
    (acc, pageData) => ({ ...acc, [pageData.componentName]: pageData.fileLocation }),
    {}
  );

module.exports = {
  webpackEntry,
  pages,
};
