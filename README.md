The **JSON-stat Explorer** allows you to retrieve a [JSON-stat document](https://json-stat.org) from a web address or paste some JSON-stat code and explore its content. [CSV-stat](https://github.com/jsonstat/CSV-stat) and [SDMX-JSON](https://github.com/sdmx-twg/sdmx-json/blob/master/data-message/docs/1-sdmx-json-field-guide.md) documents are also accepted.

It is mainly designed to display JSON-stat **datasets** but it also accepts JSON-stat **collections** or **bundles**. If the input is a bundle, the content of the first dataset in it will be automatically displayed.

Developed using the [JSON-stat Javascript Toolkit](https://www.npmjs.com/package/jsonstat-toolkit), the [JSON-stat Javascript Utilities Suite](https://www.npmjs.com/package/jsonstat-suite) and the [React library](https://reactjs.org), you can try it at:

https://jsonstat.com/explorer/

To rebuild [main.js](https://github.com/jsonstat/explorer/blob/master/dist/main.js) from the source files use:

```
npm i
npm run build
```
