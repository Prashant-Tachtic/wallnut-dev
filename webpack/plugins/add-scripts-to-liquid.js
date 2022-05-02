const fs = require('fs');
const { pages } = require('../pages-config.js');

// const cleanUpFiles = (modulesList) => {
//   const webpackFiles = fs.readdirSync('assets').filter((file) => file.includes('webpack.'));
//   const removeFiles = webpackFiles.filter((file) => !modulesList.includes(file));

//   removeFiles.forEach((file) => {
//     fs.unlinkSync(`assets/${file}`);
//   });
// };
class AddScriptToLiquid {
  apply(compiler) {
    compiler.hooks.afterEmit.tap('AddScriptToLiquid', (data) => {
      const chunkGroupNames = data.chunkGroups.map((chunk) => chunk.name);
      const moduleList = [...data.assetsInfo].map(asset => asset[0]);
      const reactComponents = chunkGroupNames.reduce((acc, item) => {
        const moduleItem = moduleList.find((module) => module.includes(item));
        const configItem = pages.find((config) => config.componentName === item);

        if (moduleItem && configItem) {
          acc = [...acc, { ...configItem, scriptFileName: moduleItem }];
        }

        return acc;
      }, []);

      // cleanUpFiles(moduleList);

      const webpackList = moduleList
        .filter(module => !reactComponents.map(component => component.scriptFileName).includes(module));
      const nodeModuleScripts = webpackList.reduce((acc, file) => {
        return `${acc}<script defer type="module" src="{{ "${file}" | asset_url }}"></script>\n`
      }, '');

      fs.writeFileSync('snippets/webpack-scripts-modules.liquid', nodeModuleScripts);

      reactComponents.map((component) => {
        const scriptTag = `<script defer type="module" src="{{ "${component.scriptFileName}" | asset_url }}"></script>\n`;

        fs.writeFileSync(component.templateFile, scriptTag);
      });
    });
  }
}

module.exports = AddScriptToLiquid;
