/**
 * Created by Zoho on 16/9/28.
 */
const marked = require('marked');

const renderer = new marked.Renderer();

// code
// todo A new feature

// blockquote
renderer.blockquote = quote => {
  return `<div class="markedBlockquote">${quote}</div>`;
};

// heading
renderer.heading = (text, level) => {
  const className = `markedH${level}`;
  return `<h${level} class="${className}">${text}</h${level}>`
};

// hr
renderer.hr = () => `<hr class="markedHr" />`;

// paragraph
renderer.paragraph = text => {
  return `<div class="markedNormal">${text}</div>`;
};

marked.setOptions({
  // todo settings of `marked`
  renderer: renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: true
});

export default marked;
