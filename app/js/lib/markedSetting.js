/**
 * Created by Zoho on 16/9/28.
 */
let marked = require('marked');
marked.setOptions({
	// todo settings of `marked`
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: false,
	smartLists: true,
	smartypants: false
});

export default marked;
