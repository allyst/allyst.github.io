# Allyst

# Project structure
There is one index.html for each static section. 
Body tag should have unique class attribute named by it's section title.
For each page there is `page.less` styles file.

For example, to add page accessible by url: `'/opensource/llsn/'` 
you should do following steps:

* add file `opensource/llsn/index.html`
    * add classname to body: `<body class="llsn"> ... </body>`
* add file `src/styles/opensource/llsn/page.less`
    * import `page.less` in the `main.less`
    * `page.less` should contain rules inside `body.llsn {}` block

### Development:
1. run `npm install` for installing dev dependencies
2. run `grunt` for build scripts and styles