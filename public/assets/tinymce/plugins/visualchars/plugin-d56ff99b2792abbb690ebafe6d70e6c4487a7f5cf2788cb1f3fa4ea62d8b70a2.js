!function(){var a={},b=function(b){for(var c=a[b],e=c.deps,f=c.defn,g=e.length,h=new Array(g),i=0;i<g;++i)h[i]=d(e[i]);var j=f.apply(null,h);if(void 0===j)throw"module ["+b+"] returned undefined";c.instance=j},c=function(b,c,d){if("string"!=typeof b)throw"module id must be a string";if(void 0===c)throw"no dependencies for "+b;if(void 0===d)throw"no definition function for "+b;a[b]={deps:c,defn:d,instance:void 0}},d=function(c){var d=a[c];if(void 0===d)throw"module ["+c+"] was undefined";return void 0===d.instance&&b(c),d.instance},e=function(a,b){for(var c=a.length,e=new Array(c),f=0;f<c;++f)e.push(d(a[f]));b.apply(null,b)},f={};f.bolt={module:{api:{define:c,require:e,demand:d}}};var g=c,h=function(a,b){g(a,[],function(){return b})};h("6",tinymce.util.Tools.resolve),g("1",["6"],function(a){return a("tinymce.PluginManager")}),g("2",["6"],function(a){return a("tinymce.util.Delay")}),h("8",Array),h("9",Error),g("b",["8","9"],function(a,b){var c=function(){},d=function(a,b){return function(){return a(b.apply(null,arguments))}},e=function(a){return function(){return a}},f=function(a){return a},g=function(a,b){return a===b},h=function(b){for(var c=new a(arguments.length-1),d=1;d<arguments.length;d++)c[d-1]=arguments[d];return function(){for(var d=new a(arguments.length),e=0;e<d.length;e++)d[e]=arguments[e];var f=c.concat(d);return b.apply(null,f)}},i=function(a){return function(){return!a.apply(null,arguments)}},j=function(a){return function(){throw new b(a)}},k=function(a){return a()},l=function(a){a()},m=e(!1),n=e(!0);return{noop:c,compose:d,constant:e,identity:f,tripleEquals:g,curry:h,not:i,die:j,apply:k,call:l,never:m,always:n}}),h("h",Object),g("7",["b","h"],function(a,b){var c=a.never,d=a.always,e=function(){return f},f=function(){var f=function(a){return a.isNone()},g=function(a){return a()},h=function(a){return a},i=function(){},j={fold:function(a,b){return a()},is:c,isSome:c,isNone:d,getOr:h,getOrThunk:g,getOrDie:function(a){throw new Error(a||"error: getOrDie called on none.")},or:h,orThunk:g,map:e,ap:e,each:i,bind:e,flatten:e,exists:c,forall:d,filter:e,equals:f,equals_:f,toArray:function(){return[]},toString:a.constant("none()")};return b.freeze&&b.freeze(j),j}(),g=function(a){var b=function(){return a},h=function(){return k},i=function(b){return g(b(a))},j=function(b){return b(a)},k={fold:function(b,c){return c(a)},is:function(b){return a===b},isSome:d,isNone:c,getOr:b,getOrThunk:b,getOrDie:b,or:h,orThunk:h,map:i,ap:function(b){return b.fold(e,function(b){return g(b(a))})},each:function(b){b(a)},bind:j,flatten:b,exists:j,forall:j,filter:function(b){return b(a)?k:f},equals:function(b){return b.is(a)},equals_:function(b,d){return b.fold(c,function(b){return d(a,b)})},toArray:function(){return[a]},toString:function(){return"some("+a+")"}};return k},h=function(a){return null===a||void 0===a?f:g(a)};return{some:g,none:e,from:h}}),h("a",String),g("3",["7","8","9","a"],function(a,b,c,d){var e=function(){var a=b.prototype.indexOf,c=function(b,c){return a.call(b,c)},d=function(a,b){return u(a,b)};return void 0===a?d:c}(),f=function(b,c){var d=e(b,c);return d===-1?a.none():a.some(d)},g=function(a,b){return e(a,b)>-1},h=function(a,b){return t(a,b).isSome()},i=function(a,b){for(var c=[],d=0;d<a;d++)c.push(b(d));return c},j=function(a,b){for(var c=[],d=0;d<a.length;d+=b){var e=a.slice(d,d+b);c.push(e)}return c},k=function(a,c){for(var d=a.length,e=new b(d),f=0;f<d;f++){var g=a[f];e[f]=c(g,f,a)}return e},l=function(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];b(e,c,a)}},m=function(a,b){for(var c=a.length-1;c>=0;c--){var d=a[c];b(d,c,a)}},n=function(a,b){for(var c=[],d=[],e=0,f=a.length;e<f;e++){var g=a[e],h=b(g,e,a)?c:d;h.push(g)}return{pass:c,fail:d}},o=function(a,b){for(var c=[],d=0,e=a.length;d<e;d++){var f=a[d];b(f,d,a)&&c.push(f)}return c},p=function(a,b){if(0===a.length)return[];for(var c=b(a[0]),d=[],e=[],f=0,g=a.length;f<g;f++){var h=a[f],i=b(h);i!==c&&(d.push(e),e=[]),c=i,e.push(h)}return 0!==e.length&&d.push(e),d},q=function(a,b,c){return m(a,function(a){c=b(c,a)}),c},r=function(a,b,c){return l(a,function(a){c=b(c,a)}),c},s=function(b,c){for(var d=0,e=b.length;d<e;d++){var f=b[d];if(c(f,d,b))return a.some(f)}return a.none()},t=function(b,c){for(var d=0,e=b.length;d<e;d++){var f=b[d];if(c(f,d,b))return a.some(d)}return a.none()},u=function(a,b){for(var c=0,d=a.length;c<d;++c)if(a[c]===b)return c;return-1},v=b.prototype.push,w=function(a){for(var d=[],e=0,f=a.length;e<f;++e){if(!b.prototype.isPrototypeOf(a[e]))throw new c("Arr.flatten item "+e+" was not an array, input: "+a);v.apply(d,a[e])}return d},x=function(a,b){var c=k(a,b);return w(c)},y=function(a,b){for(var c=0,d=a.length;c<d;++c){var e=a[c];if(b(e,c,a)!==!0)return!1}return!0},z=function(a,b){return a.length===b.length&&y(a,function(a,c){return a===b[c]})},A=b.prototype.slice,B=function(a){var b=A.call(a,0);return b.reverse(),b},C=function(a,b){return o(a,function(a){return!g(b,a)})},D=function(a,b){for(var c={},e=0,f=a.length;e<f;e++){var g=a[e];c[d(g)]=b(g,e)}return c},E=function(a){return[a]},F=function(a,b){var c=A.call(a,0);return c.sort(b),c};return{map:k,each:l,eachr:m,partition:n,filter:o,groupBy:p,indexOf:f,foldr:q,foldl:r,find:s,findIndex:t,flatten:w,bind:x,forall:y,exists:h,contains:g,equal:z,reverse:B,chunk:j,difference:C,mapToObject:D,pure:E,sort:F,range:i}}),g("c",[],function(){return"undefined"==typeof console&&(console={log:function(){}}),console}),h("d",document),g("4",["b","9","c","d"],function(a,b,c,d){var e=function(a,b){var e=b||d,f=e.createElement("div");if(f.innerHTML=a,!f.hasChildNodes()||f.childNodes.length>1)throw c.error("HTML does not have a single root node",a),"HTML must have a single root node";return h(f.childNodes[0])},f=function(a,b){var c=b||d,e=c.createElement(a);return h(e)},g=function(a,b){var c=b||d,e=c.createTextNode(a);return h(e)},h=function(c){if(null===c||void 0===c)throw new b("Node cannot be null or undefined");return{dom:a.constant(c)}};return{fromHtml:e,fromTag:f,fromText:g,fromDom:h}}),g("e",[],function(){var a={"\xa0":"nbsp","\xad":"shy"},b=function(a,b){var c,d="";for(c in a)d+=c;return new RegExp("["+d+"]",b?"g":"")},c=function(a){var b,c="";for(b in a)c&&(c+=","),c+="span.mce-"+a[b];return c};return{charMap:a,regExp:b(a),regExpGlobal:b(a,!0),selector:c(a),charMapToRegExp:b,charMapToSelector:c}}),g("i",[],function(){return{ATTRIBUTE:2,CDATA_SECTION:4,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,ELEMENT:1,TEXT:3,PROCESSING_INSTRUCTION:7,ENTITY_REFERENCE:5,ENTITY:6,NOTATION:12}}),g("g",["i"],function(a){var b=function(a){var b=a.dom().nodeName;return b.toLowerCase()},c=function(a){return a.dom().nodeType},d=function(a){return a.dom().nodeValue},e=function(a){return function(b){return c(b)===a}},f=function(d){return c(d)===a.COMMENT||"#comment"===b(d)},g=e(a.ELEMENT),h=e(a.TEXT),i=e(a.DOCUMENT);return{name:b,type:c,value:d,isElement:g,isText:h,isDocument:i,isComment:f}}),g("j",["e"],function(a){var b=function(b){return'<span data-mce-bogus="1" class="mce-'+a.charMap[b]+'">'+b+"</span>"};return{wrapCharWithSpan:b}}),g("f",["3","4","g","e","j"],function(a,b,c,d,e){var f=function(a){return c.isText(a)&&void 0!==c.value(a)&&d.regExp.test(c.value(a))},g=function(c,d){var e=[],f=c.dom(),h=a.map(f.childNodes,b.fromDom);return a.each(h,function(a){d(a)&&(e=e.concat([a])),e=e.concat(g(a,d))}),e},h=function(a,b){for(;a.parentNode;){if(a.parentNode===b)return a;a=a.parentNode}},i=function(a){return a.replace(d.regExpGlobal,e.wrapCharWithSpan)};return{isMatch:f,filterDescendants:g,findParentElm:h,replaceWithSpans:i}}),g("5",["e","f","3","4","g"],function(a,b,c,d,e){var f=function(a,f){var g,h,i=b.filterDescendants(d.fromDom(f),b.isMatch);c.each(i,function(c){var d=b.replaceWithSpans(e.value(c));for(h=a.dom.create("div",null,d);g=h.lastChild;)a.dom.insertAfter(g,c.dom());a.dom.remove(c.dom())})},g=function(b,d){var e=b.dom.select(a.selector,d);c.each(e,function(a){b.dom.remove(a,1)})},h=function(a){var c=a.getBody(),d=a.selection.getBookmark(),e=b.findParentElm(a.selection.getNode(),c);e=void 0!==e?e:c,g(a,e),f(a,e),a.selection.moveToBookmark(d)};return{show:f,hide:g,toggle:h}}),g("0",["1","2","3","4","5"],function(a,b,c,d,e){return a.add("visualchars",function(a){var c,d=this,f=function(){var b=this;a.on("VisualChars",function(a){b.active(a.state)})},g=b.debounce(function(){e.toggle(a)},300);a.settings.forced_root_block!==!1&&a.on("keydown",function(b){d.state===!0&&(13===b.keyCode?e.toggle(a):g())}),a.addCommand("mceVisualChars",function(){var b,f=a.getBody(),g=a.selection;c=!c,d.state=c,a.fire("VisualChars",{state:c}),b=g.getBookmark(),c===!0?e.show(a,f):e.hide(a,f),g.moveToBookmark(b)}),a.addButton("visualchars",{title:"Show invisible characters",cmd:"mceVisualChars",onPostRender:f}),a.addMenuItem("visualchars",{text:"Show invisible characters",cmd:"mceVisualChars",onPostRender:f,selectable:!0,context:"view",prependToContext:!0})}),function(){}}),d("0")()}();