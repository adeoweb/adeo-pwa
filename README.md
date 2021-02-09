
### APWA
This is a branch of APWA updated with newest Magento packages. 
In the previous versions, all Magento packages were stored locally, however now they're imported as external packages and are found in `node_modules` folder. This approach will help to facilitate the work of updating APWA to the newest version.

To upgrade to the latest version (currently 9.0.1), simply call yarn add on each of the @magento packages. This will both update package.json in your project, as well as install the latest versions.

`yarn add @magento/eslint-config @magento/pagebuilder @magento/peregrine @magento/pwa-buildpack @magento/upward-js @magento/venia-ui`


#### Current issues

- Some tests are failing. Failing tests are marked with `fail_spec` prefix.


Documentation for Magento PWA Studio packages is located at [https://pwastudio.io](https://pwastudio.io).
