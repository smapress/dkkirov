!function(){var a={},b=function(b){for(var c=a[b],e=c.deps,f=c.defn,g=e.length,h=new Array(g),i=0;i<g;++i)h[i]=d(e[i]);var j=f.apply(null,h);if(void 0===j)throw"module ["+b+"] returned undefined";c.instance=j},c=function(b,c,d){if("string"!=typeof b)throw"module id must be a string";if(void 0===c)throw"no dependencies for "+b;if(void 0===d)throw"no definition function for "+b;a[b]={deps:c,defn:d,instance:void 0}},d=function(c){var d=a[c];if(void 0===d)throw"module ["+c+"] was undefined";return void 0===d.instance&&b(c),d.instance},e=function(a,b){for(var c=a.length,e=new Array(c),f=0;f<c;++f)e.push(d(a[f]));b.apply(null,b)},f={};f.bolt={module:{api:{define:c,require:e,demand:d}}};var g=c,h=function(a,b){g(a,[],function(){return b})};h("6",tinymce.util.Tools.resolve),g("1",["6"],function(a){return a("tinymce.EditorManager")}),g("2",["6"],function(a){return a("tinymce.dom.DOMUtils")}),g("3",["6"],function(a){return a("tinymce.Env")}),g("4",["6"],function(a){return a("tinymce.PluginManager")}),g("5",["6"],function(a){return a("tinymce.util.Tools")}),g("0",["1","2","3","4","5"],function(a,b,c,d,e){return d.add("importcss",function(d){function f(a){var b=c.cacheSuffix;return"string"==typeof a&&(a=a.replace("?"+b,"").replace("&"+b,"")),a}function g(b){var c=d.settings,e=c.skin!==!1&&(c.skin||"lightgray");if(e){var f=c.skin_url;return f=f?d.documentBaseURI.toAbsolute(f):a.baseURL+"/skins/"+e,b===f+"/content"+(d.inline?".inline":"")+".min.css"}return!1}function h(a){return"string"==typeof a?function(b){return b.indexOf(a)!==-1}:a instanceof RegExp?function(b){return a.test(b)}:a}function i(a,b){function c(a,d){var i,j=a.href;if(j=f(j),j&&b(j,d)&&!g(j)){r(a.imports,function(a){c(a,!0)});try{i=a.cssRules||a.rules}catch(a){}r(i,function(a){a.styleSheet?c(a.styleSheet,!0):a.selectorText&&r(a.selectorText.split(","),function(a){h.push(e.trim(a))})})}}var h=[],i={};r(d.contentCSS,function(a){i[a]=!0}),b||(b=function(a,b){return b||i[a]});try{r(a.styleSheets,function(a){c(a)})}catch(a){}return h}function j(a){var b,c=/^(?:([a-z0-9\-_]+))?(\.[a-z0-9_\-\.]+)$/i.exec(a);if(c){var f=c[1],g=c[2].substr(1).split(".").join(" "),h=e.makeMap("a,img");return c[1]?(b={title:a},d.schema.getTextBlockElements()[f]?b.block=f:d.schema.getBlockElements()[f]||h[f.toLowerCase()]?b.selector=f:b.inline=f):c[2]&&(b={inline:"span",title:a.substr(1),classes:g}),d.settings.importcss_merge_classes!==!1?b.classes=g:b.attributes={"class":g},b}}function k(a,b){return e.grep(a,function(a){return!a.filter||a.filter(b)})}function l(a){return e.map(a,function(a){return e.extend({},a,{original:a,selectors:{},filter:h(a.filter),item:{text:a.title,menu:[]}})})}function m(a,b){return null===b||a.settings.importcss_exclusive!==!1}function n(a,b,c){return!(m(d,b)?a in c:a in b.selectors)}function o(a,b,c){m(d,b)?c[a]=!0:b.selectors[a]=!0}function p(a,b,c){var e,f=d.settings;return e=c&&c.selector_converter?c.selector_converter:f.importcss_selector_converter?f.importcss_selector_converter:j,e.call(a,b,c)}var q=this,r=e.each;d.on("renderFormatsMenu",function(a){var c=d.settings,f={},g=h(c.importcss_selector_filter),j=a.control,m=l(c.importcss_groups),s=function(a,c){if(n(a,c,f)){o(a,c,f);var g=p(q,a,c);if(g){var h=g.name||b.DOM.uniqueId();return d.formatter.register(h,g),e.extend({},j.settings.itemDefaults,{text:g.title,format:h})}}return null};d.settings.importcss_append||j.items().remove(),r(i(a.doc||d.getDoc(),h(c.importcss_file_filter)),function(a){if(a.indexOf(".mce-")===-1&&(!g||g(a))){var b=k(m,a);if(b.length>0)e.each(b,function(b){var c=s(a,b);c&&b.item.menu.push(c)});else{var c=s(a,null);c&&j.add(c)}}}),r(m,function(a){a.item.menu.length>0&&j.add(a.item)}),a.control.renderNew()}),q.convertSelectorToFormat=j}),function(){}}),d("0")()}();