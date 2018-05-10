/**
 * Created by Zoho on 16/9/28.
 */
const marked = require('marked');

const renderer = new marked.Renderer();

/**======================================================**/
/**           Overwrite renderer's method                **/
/**======================================================**/
/******************** Block level *******************/
// code
// todo A new feature

renderer.blockquote = quote => `<div class="markedBlockquote">${quote}</div>`;

renderer.heading = (text, level) => {
  const className = `markedH${level}`;
  return `<h${level} class="${className}">${text}</h${level}>`;
};

renderer.hr = () => '<hr class="markedHr" />';

renderer.list = (body, ordered) => {
  const tag = ordered ? 'ol' : 'ul';
  const className = ordered ? 'markedOl' : 'markedUl';
  return `<${tag} class="${className}">${body}</${tag}>`;
};

renderer.listitem = text => `<li class="markedLi">${text}</li>`;

renderer.paragraph = text => `<p class="markedNormal">${text}</p>`;

// table
// todo A new feature

/******************** Inline level *******************/
renderer.strong = text => `<strong class="markedStrong">${text}</strong>`;
renderer.em = text => `<em class="markedEm">${text}</em>`;
renderer.codespan = text => `<code class="markedCodeSpan">${text}</code>`;
// br: omitted
// del: todo
// link: todo
// image: todo
// text: todo


/******************** Initialize marked *******************/
marked.setOptions({
  // todo settings of `marked`
  renderer,
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
