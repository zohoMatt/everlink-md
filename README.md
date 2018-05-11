# EverlinkMD
A desktop application for combining Markdown with Evernote.

> I really like working with Evernote and Markdown. However, it is hard to find an editor to support both perfectly.  
> Alternatives are like [ever-notedown](https://atom.io/packages/ever-notedown) for Atom, [Evernote for Sublime Text](https://github.com/bordaigorl/sublime-evernote), both of which are not quite stable and convenient for me.  
> Also, [Marxico](https://maxiang.io/) is the best choice, but it is not an open source software.

### On developing...  
This editor is not fully functional yet.

### How to start
#### Development
1. Just `yarn` to install all packages.  
2. `yarn run dev` to start hot server and live-loading.
> If main window fails, remember to **check the Internet connection** to Facebook.
Because in development mode React & redux dev-tools for chrome need to be downloaded from Facebook.

#### Distribution
* MacOS
* Windows


---
### Future Plans

#### Editor

* Sync-scrolling for editor and preview window.
* Searching and replacement
* Styles of code editor

#### Preview window

* Open local `.md` files
* Recent file list  
* Rendering styles
* Support for key shortcuts.
* Support for quick searching.
* Support for code syntax highlight.
* Support for MathJax.
* Support for [TOC].
* Support for flow chart and sequence diagrams.
* Support for foot notations.

#### Synchronization with EverNote

* EverNote SDK authorization.
* Configuration of note information details: notebook, tags, notes, etc.
* Handling conflicts.


---
### Project references
* [electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate) Live editing development boilerplate on desktop app.
* [marked](https://github.com/chjj/marked) A markdown parser and compiler. Built for speed.
* [CodeMirror](http://codemirror.net/) A versatile text editor implemented in JavaScript for the browser.

> **not used yet but considerable**  
> * [MathJax](https://github.com/mathjax/MathJax) Beautiful math in all browsers.
> * [node-html-pdf](https://github.com/marcbachmann/node-html-pdf) Html to pdf converter in nodejs. It spawns a phantomjs process and passes the pdf as buffer or as filename.
> * [ant-design](https://github.com/ant-design/ant-design) An enterprise-class UI design language and React-based implementation.
> * [flowchart.js](https://github.com/adrai/flowchart.js) Draws simple SVG flow chart diagrams from textual representation of the diagram.
> * [JS Sequence Diagrams](https://github.com/bramp/js-sequence-diagrams) Draws simple SVG sequence diagrams from textual representation of the diagram.
