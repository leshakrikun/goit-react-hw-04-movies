(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[2],{10:function(e,t,n){e.exports={headerLink:"navigation_headerLink__3ivOh",activeHeaderLink:"navigation_activeHeaderLink__34m8o",header:"navigation_header__2X-Pi"}},19:function(e,t,n){e.exports={movieGallery:"movieGallery_movieGallery__FXyk9"}},20:function(e,t,n){e.exports={movieGalleryItem:"movieGalleryItem_movieGalleryItem__2LQuN",movieGalleryItemImage:"movieGalleryItem_movieGalleryItemImage__3eoX2"}},21:function(e,t,n){"use strict";var c="42c0b1dcbf94c63600b15c995325c9e4",i=0;var a={FetchMovieDetails:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(c,"&language=en-US")).then((function(e){if(e.ok)return e.json()}))},FetchMovie:function(e){return console.log("fetch",e),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&page=1&include_adult=false")).then((function(e){if(console.log(22,e),e.ok)return e.json()}))},FetchMovieCredits:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US")).then((function(e){if(e.ok)return e.json()}))},FetchMovieReview:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1")).then((function(e){if(e.ok)return e.json()}))},FetchTrends:function(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c)).then((function(e){if(e.ok)return e.json()}))},resetPage:function(){i=0},page:i};i+=1,t.a=a},22:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(0);var c=n(19),i=n.n(c),a=n(1);function r(e){var t=e.children;return Object(a.jsx)("ul",{className:i.a.movieGallery,children:t})}},23:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(3),i=n(8),a=(n(0),n(20)),r=n.n(a),o=n(1);function s(e){var t=e.movie,n=Object(c.j)().url,a=Object(c.h)();return Object(o.jsx)(o.Fragment,{children:t.results.map((function(e){return Object(o.jsx)("li",{className:r.a.movieGalleryItem,children:Object(o.jsx)(i.b,{to:{pathname:"".concat(n,"/").concat(e.id),state:{from:a}},children:e.original_title})},e.id)}))})}},28:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(17),r=n.n(a),o=n(8),s=(n(28),n(29),n(11)),l=n(3),u=n(14),j=n.n(u),h=n(1),d=Object(c.lazy)((function(){return n.e(1).then(n.bind(null,62))})),b=Object(c.lazy)((function(){return n.e(0).then(n.bind(null,63))})),m=Object(c.lazy)((function(){return n.e(0).then(n.bind(null,64))})),v=(n(21),n(22),n(23),n(10)),f=n.n(v),O=function(){return Object(h.jsxs)("ul",{className:f.a.header,children:[Object(h.jsx)("li",{children:Object(h.jsx)(o.c,{className:f.a.headerLink,activeClassName:f.a.activeHeaderLink,to:"/",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(o.c,{className:f.a.headerLink,activeClassName:f.a.activeHeaderLink,to:"/movies",children:"Movies"})})]})};n(57);function p(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=(t[0],t[1],Object(c.useState)(!0)),i=Object(s.a)(n,2),a=i[0],r=(i[1],Object(l.j)().url,Object(l.g)()),o=Object(h.jsx)("div",{children:Object(h.jsx)(c.Suspense,{fallback:Object(h.jsxs)("div",{children:[Object(h.jsx)(j.a,{className:"loader"})," "]}),children:Object(h.jsxs)(l.d,{children:[Object(h.jsx)(l.b,{path:"/",exact:!0,children:Object(h.jsx)(d,{})}),Object(h.jsx)(l.b,{path:"/home/:moviesId",children:Object(h.jsx)(b,{})}),Object(h.jsx)(l.b,{path:"/movies",exact:!0,children:Object(h.jsx)(m,{})}),Object(h.jsx)(l.b,{path:"/movies/:moviesId",children:Object(h.jsx)(b,{})}),Object(h.jsx)(l.a,{to:"/home"})]})})}),u=a?"/":"/movies";return Object(c.useEffect)((function(){r.push(u)}),[r]),Object(h.jsxs)("div",{className:"App container",children:[Object(h.jsx)(O,{}),Object(h.jsx)("header",{className:"App-header",children:o})]})}r.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(o.a,{children:Object(h.jsx)(p,{})})}),document.getElementById("root"))}},[[58,3,4]]]);
//# sourceMappingURL=main.40a69576.chunk.js.map