!function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var n=function(t){return t&&t.Math==Math&&t},r=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")(),i=function(t){try{return!!t()}catch(t){return!0}},o=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),u={}.propertyIsEnumerable,c=Object.getOwnPropertyDescriptor,a={f:c&&!u.call({1:2},1)?function(t){var e=c(this,t);return!!e&&e.enumerable}:u},l=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},s={}.toString,f=function(t){return s.call(t).slice(8,-1)},p="".split,h=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==f(t)?p.call(t,""):Object(t)}:Object,d=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},v=function(t){return h(d(t))},y=function(t){return"object"==typeof t?null!==t:"function"==typeof t},g=function(t,e){if(!y(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!y(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!y(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!y(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},m={}.hasOwnProperty,b=function(t,e){return m.call(t,e)},x=r.document,w=y(x)&&y(x.createElement),S=function(t){return w?x.createElement(t):{}},E=!o&&!i((function(){return 7!=Object.defineProperty(S("div"),"a",{get:function(){return 7}}).a})),O=Object.getOwnPropertyDescriptor,A={f:o?O:function(t,e){if(t=v(t),e=g(e,!0),E)try{return O(t,e)}catch(t){}if(b(t,e))return l(!a.f.call(t,e),t[e])}},I=function(t){if(!y(t))throw TypeError(String(t)+" is not an object");return t},k=Object.defineProperty,L={f:o?k:function(t,e,n){if(I(t),e=g(e,!0),I(n),E)try{return k(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},T=o?function(t,e,n){return L.f(t,e,l(1,n))}:function(t,e,n){return t[e]=n,t},P=function(t,e){try{T(r,t,e)}catch(n){r[t]=e}return e},M=r["__core-js_shared__"]||P("__core-js_shared__",{}),j=Function.toString;"function"!=typeof M.inspectSource&&(M.inspectSource=function(t){return j.call(t)});var _,C,R,D=M.inspectSource,U=r.WeakMap,N="function"==typeof U&&/native code/.test(D(U)),F=e((function(t){(t.exports=function(t,e){return M[t]||(M[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.4",mode:"global",copyright:"Â© 2020 Denis Pushkarev (zloirock.ru)"})})),B=0,G=Math.random(),V=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++B+G).toString(36)},K=F("keys"),$=function(t){return K[t]||(K[t]=V(t))},q={},W=r.WeakMap;if(N){var H=new W,z=H.get,Y=H.has,X=H.set;_=function(t,e){return X.call(H,t,e),e},C=function(t){return z.call(H,t)||{}},R=function(t){return Y.call(H,t)}}else{var J=$("state");q[J]=!0,_=function(t,e){return T(t,J,e),e},C=function(t){return b(t,J)?t[J]:{}},R=function(t){return b(t,J)}}var Q={set:_,get:C,has:R,enforce:function(t){return R(t)?C(t):_(t,{})},getterFor:function(t){return function(e){var n;if(!y(e)||(n=C(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},Z=e((function(t){var e=Q.get,n=Q.enforce,i=String(String).split("String");(t.exports=function(t,e,o,u){var c=!!u&&!!u.unsafe,a=!!u&&!!u.enumerable,l=!!u&&!!u.noTargetGet;"function"==typeof o&&("string"!=typeof e||b(o,"name")||T(o,"name",e),n(o).source=i.join("string"==typeof e?e:"")),t!==r?(c?!l&&t[e]&&(a=!0):delete t[e],a?t[e]=o:T(t,e,o)):a?t[e]=o:P(e,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||D(this)}))})),tt=r,et=function(t){return"function"==typeof t?t:void 0},nt=function(t,e){return arguments.length<2?et(tt[t])||et(r[t]):tt[t]&&tt[t][e]||r[t]&&r[t][e]},rt=Math.ceil,it=Math.floor,ot=function(t){return isNaN(t=+t)?0:(t>0?it:rt)(t)},ut=Math.min,ct=function(t){return t>0?ut(ot(t),9007199254740991):0},at=Math.max,lt=Math.min,st=function(t){return function(e,n,r){var i,o=v(e),u=ct(o.length),c=function(t,e){var n=ot(t);return n<0?at(n+e,0):lt(n,e)}(r,u);if(t&&n!=n){for(;u>c;)if((i=o[c++])!=i)return!0}else for(;u>c;c++)if((t||c in o)&&o[c]===n)return t||c||0;return!t&&-1}},ft={includes:st(!0),indexOf:st(!1)},pt=ft.indexOf,ht=function(t,e){var n,r=v(t),i=0,o=[];for(n in r)!b(q,n)&&b(r,n)&&o.push(n);for(;e.length>i;)b(r,n=e[i++])&&(~pt(o,n)||o.push(n));return o},dt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],vt=dt.concat("length","prototype"),yt={f:Object.getOwnPropertyNames||function(t){return ht(t,vt)}},gt={f:Object.getOwnPropertySymbols},mt=nt("Reflect","ownKeys")||function(t){var e=yt.f(I(t)),n=gt.f;return n?e.concat(n(t)):e},bt=function(t,e){for(var n=mt(e),r=L.f,i=A.f,o=0;o<n.length;o++){var u=n[o];b(t,u)||r(t,u,i(e,u))}},xt=/#|\.prototype\./,wt=function(t,e){var n=Et[St(t)];return n==At||n!=Ot&&("function"==typeof e?i(e):!!e)},St=wt.normalize=function(t){return String(t).replace(xt,".").toLowerCase()},Et=wt.data={},Ot=wt.NATIVE="N",At=wt.POLYFILL="P",It=wt,kt=A.f,Lt=function(t,e){var n,i,o,u,c,a=t.target,l=t.global,s=t.stat;if(n=l?r:s?r[a]||P(a,{}):(r[a]||{}).prototype)for(i in e){if(u=e[i],o=t.noTargetGet?(c=kt(n,i))&&c.value:n[i],!It(l?i:a+(s?".":"#")+i,t.forced)&&void 0!==o){if(typeof u==typeof o)continue;bt(u,o)}(t.sham||o&&o.sham)&&T(u,"sham",!0),Z(n,i,u,t)}},Tt=nt("navigator","userAgent")||"",Pt=[].slice,Mt=function(t){return function(e,n){var r=arguments.length>2,i=r?Pt.call(arguments,2):void 0;return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,i)}:e,n)}};Lt({global:!0,bind:!0,forced:/MSIE .\./.test(Tt)},{setTimeout:Mt(r.setTimeout),setInterval:Mt(r.setInterval)});var jt,_t,Ct=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},Rt=function(t){return Object(d(t))},Dt=Array.isArray||function(t){return"Array"==f(t)},Ut=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())})),Nt=Ut&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ft=F("wks"),Bt=r.Symbol,Gt=Nt?Bt:Bt&&Bt.withoutSetter||V,Vt=function(t){return b(Ft,t)||(Ut&&b(Bt,t)?Ft[t]=Bt[t]:Ft[t]=Gt("Symbol."+t)),Ft[t]},Kt=Vt("species"),$t=function(t,e){var n;return Dt(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!Dt(n.prototype)?y(n)&&null===(n=n[Kt])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},qt=[].push,Wt=function(t){var e=1==t,n=2==t,r=3==t,i=4==t,o=6==t,u=5==t||o;return function(c,a,l,s){for(var f,p,d=Rt(c),v=h(d),y=function(t,e,n){if(Ct(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}(a,l,3),g=ct(v.length),m=0,b=s||$t,x=e?b(c,g):n?b(c,0):void 0;g>m;m++)if((u||m in v)&&(p=y(f=v[m],m,d),t))if(e)x[m]=p;else if(p)switch(t){case 3:return!0;case 5:return f;case 6:return m;case 2:qt.call(x,f)}else if(i)return!1;return o?-1:r||i?i:x}},Ht={forEach:Wt(0),map:Wt(1),filter:Wt(2),some:Wt(3),every:Wt(4),find:Wt(5),findIndex:Wt(6)},zt=r.process,Yt=zt&&zt.versions,Xt=Yt&&Yt.v8;Xt?_t=(jt=Xt.split("."))[0]+jt[1]:Tt&&(!(jt=Tt.match(/Edge\/(\d+)/))||jt[1]>=74)&&(jt=Tt.match(/Chrome\/(\d+)/))&&(_t=jt[1]);var Jt=_t&&+_t,Qt=Vt("species"),Zt=function(t){return Jt>=51||!i((function(){var e=[];return(e.constructor={})[Qt]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},te=Object.defineProperty,ee={},ne=function(t){throw t},re=function(t,e){if(b(ee,t))return ee[t];e||(e={});var n=[][t],r=!!b(e,"ACCESSORS")&&e.ACCESSORS,u=b(e,0)?e[0]:ne,c=b(e,1)?e[1]:void 0;return ee[t]=!!n&&!i((function(){if(r&&!o)return!0;var t={length:-1};r?te(t,1,{enumerable:!0,get:ne}):t[1]=1,n.call(t,u,c)}))},ie=Ht.map,oe=Zt("map"),ue=re("map");function ce(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ae(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function le(t,e,n){return e&&ae(t.prototype,e),n&&ae(t,n),t}function se(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Lt({target:"Array",proto:!0,forced:!oe||!ue},{map:function(t){return ie(this,t,arguments.length>1?arguments[1]:void 0)}});var fe=Ht.filter,pe=Zt("filter"),he=re("filter");Lt({target:"Array",proto:!0,forced:!pe||!he},{filter:function(t){return fe(this,t,arguments.length>1?arguments[1]:void 0)}});var de,ve=Object.keys||function(t){return ht(t,dt)},ye=o?Object.defineProperties:function(t,e){I(t);for(var n,r=ve(e),i=r.length,o=0;i>o;)L.f(t,n=r[o++],e[n]);return t},ge=nt("document","documentElement"),me=$("IE_PROTO"),be=function(){},xe=function(t){return"<script>"+t+"<\/script>"},we=function(){try{de=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;we=de?function(t){t.write(xe("")),t.close();var e=t.parentWindow.Object;return t=null,e}(de):((e=S("iframe")).style.display="none",ge.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(xe("document.F=Object")),t.close(),t.F);for(var n=dt.length;n--;)delete we.prototype[dt[n]];return we()};q[me]=!0;var Se=Object.create||function(t,e){var n;return null!==t?(be.prototype=I(t),n=new be,be.prototype=null,n[me]=t):n=we(),void 0===e?n:ye(n,e)},Ee=Vt("unscopables"),Oe=Array.prototype;null==Oe[Ee]&&L.f(Oe,Ee,{configurable:!0,value:Se(null)});var Ae,Ie=Ht.find,ke=!0,Le=re("find");"find"in[]&&Array(1).find((function(){ke=!1})),Lt({target:"Array",proto:!0,forced:ke||!Le},{find:function(t){return Ie(this,t,arguments.length>1?arguments[1]:void 0)}}),Ae="find",Oe[Ee][Ae]=!0;var Te=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))},Pe=Ht.forEach,Me=Te("forEach"),je=re("forEach"),_e=Me&&je?[].forEach:function(t){return Pe(this,t,arguments.length>1?arguments[1]:void 0)};Lt({target:"Array",proto:!0,forced:[].forEach!=_e},{forEach:_e});var Ce=ft.indexOf,Re=[].indexOf,De=!!Re&&1/[1].indexOf(1,-0)<0,Ue=Te("indexOf"),Ne=re("indexOf",{ACCESSORS:!0,1:0});Lt({target:"Array",proto:!0,forced:De||!Ue||!Ne},{indexOf:function(t){return De?Re.apply(this,arguments)||0:Ce(this,t,arguments.length>1?arguments[1]:void 0)}});var Fe=function(){var t=I(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};function Be(t,e){return RegExp(t,e)}var Ge,Ve,Ke={UNSUPPORTED_Y:i((function(){var t=Be("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),BROKEN_CARET:i((function(){var t=Be("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},$e=RegExp.prototype.exec,qe=String.prototype.replace,We=$e,He=(Ge=/a/,Ve=/b*/g,$e.call(Ge,"a"),$e.call(Ve,"a"),0!==Ge.lastIndex||0!==Ve.lastIndex),ze=Ke.UNSUPPORTED_Y||Ke.BROKEN_CARET,Ye=void 0!==/()??/.exec("")[1];(He||Ye||ze)&&(We=function(t){var e,n,r,i,o=this,u=ze&&o.sticky,c=Fe.call(o),a=o.source,l=0,s=t;return u&&(-1===(c=c.replace("y","")).indexOf("g")&&(c+="g"),s=String(t).slice(o.lastIndex),o.lastIndex>0&&(!o.multiline||o.multiline&&"\n"!==t[o.lastIndex-1])&&(a="(?: "+a+")",s=" "+s,l++),n=new RegExp("^(?:"+a+")",c)),Ye&&(n=new RegExp("^"+a+"$(?!\\s)",c)),He&&(e=o.lastIndex),r=$e.call(u?n:o,s),u?r?(r.input=r.input.slice(l),r[0]=r[0].slice(l),r.index=o.lastIndex,o.lastIndex+=r[0].length):o.lastIndex=0:He&&r&&(o.lastIndex=o.global?r.index+r[0].length:e),Ye&&r&&r.length>1&&qe.call(r[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r});var Xe=We;Lt({target:"RegExp",proto:!0,forced:/./.exec!==Xe},{exec:Xe});var Je=Vt("species"),Qe=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),Ze="$0"==="a".replace(/./,"$0"),tn=Vt("replace"),en=!!/./[tn]&&""===/./[tn]("a","$0"),nn=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),rn=Vt("match"),on=Vt("species"),un=function(t){return function(e,n){var r,i,o=String(d(e)),u=ot(n),c=o.length;return u<0||u>=c?t?"":void 0:(r=o.charCodeAt(u))<55296||r>56319||u+1===c||(i=o.charCodeAt(u+1))<56320||i>57343?t?o.charAt(u):r:t?o.slice(u,u+2):i-56320+(r-55296<<10)+65536}},cn={codeAt:un(!1),charAt:un(!0)}.charAt,an=function(t,e,n){return e+(n?cn(t,e).length:1)},ln=function(t,e){var n=t.exec;if("function"==typeof n){var r=n.call(t,e);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==f(t))throw TypeError("RegExp#exec called on incompatible receiver");return Xe.call(t,e)},sn=[].push,fn=Math.min,pn=!i((function(){return!RegExp(4294967295,"y")}));!function(t,e,n,r){var o=Vt(t),u=!i((function(){var e={};return e[o]=function(){return 7},7!=""[t](e)})),c=u&&!i((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[Je]=function(){return n},n.flags="",n[o]=/./[o]),n.exec=function(){return e=!0,null},n[o](""),!e}));if(!u||!c||"replace"===t&&(!Qe||!Ze||en)||"split"===t&&!nn){var a=/./[o],l=n(o,""[t],(function(t,e,n,r,i){return e.exec===Xe?u&&!i?{done:!0,value:a.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:Ze,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:en}),s=l[0],f=l[1];Z(String.prototype,t,s),Z(RegExp.prototype,o,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)})}r&&T(RegExp.prototype[o],"sham",!0)}("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r,i,o=String(d(this)),u=void 0===n?4294967295:n>>>0;if(0===u)return[];if(void 0===t)return[o];if(!y(r=t)||(void 0!==(i=r[rn])?!i:"RegExp"!=f(r)))return e.call(o,t,u);for(var c,a,l,s=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,v=new RegExp(t.source,p+"g");(c=Xe.call(v,o))&&!((a=v.lastIndex)>h&&(s.push(o.slice(h,c.index)),c.length>1&&c.index<o.length&&sn.apply(s,c.slice(1)),l=c[0].length,h=a,s.length>=u));)v.lastIndex===c.index&&v.lastIndex++;return h===o.length?!l&&v.test("")||s.push(""):s.push(o.slice(h)),s.length>u?s.slice(0,u):s}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=d(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,i,n):r.call(String(i),e,n)},function(t,i){var o=n(r,t,this,i,r!==e);if(o.done)return o.value;var u=I(t),c=String(this),a=function(t,e){var n,r=I(t).constructor;return void 0===r||null==(n=I(r)[on])?e:Ct(n)}(u,RegExp),l=u.unicode,s=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(pn?"y":"g"),f=new a(pn?u:"^(?:"+u.source+")",s),p=void 0===i?4294967295:i>>>0;if(0===p)return[];if(0===c.length)return null===ln(f,c)?[c]:[];for(var h=0,d=0,v=[];d<c.length;){f.lastIndex=pn?d:0;var y,g=ln(f,pn?c:c.slice(d));if(null===g||(y=fn(ct(f.lastIndex+(pn?0:d)),c.length))===h)d=an(c,d,l);else{if(v.push(c.slice(h,d)),v.length===p)return v;for(var m=1;m<=g.length-1;m++)if(v.push(g[m]),v.length===p)return v;d=h=y}}return v.push(c.slice(h)),v}]}),!pn);for(var hn in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var dn=r[hn],vn=dn&&dn.prototype;if(vn&&vn.forEach!==_e)try{T(vn,"forEach",_e)}catch(t){vn.forEach=_e}}var yn=function(t,e,n){var r=g(e);r in t?L.f(t,r,l(0,n)):t[r]=n},gn=Vt("isConcatSpreadable"),mn=Jt>=51||!i((function(){var t=[];return t[gn]=!1,t.concat()[0]!==t})),bn=Zt("concat"),xn=function(t){if(!y(t))return!1;var e=t[gn];return void 0!==e?!!e:Dt(t)};Lt({target:"Array",proto:!0,forced:!mn||!bn},{concat:function(t){var e,n,r,i,o,u=Rt(this),c=$t(u,0),a=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?u:arguments[e],xn(o)){if(a+(i=ct(o.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<i;n++,a++)n in o&&yn(c,a,o[n])}else{if(a>=9007199254740991)throw TypeError("Maximum allowed index exceeded");yn(c,a++,o)}return c.length=a,c}});var wn={fab:"400",fas:"900",far:"400",fal:"300"},Sn=function(){function t(e,n,r){ce(this,t),this.container=e.container,this.iconId=this.constructor.getIconId(n),this.stylePrefix=this.constructor.getStylePrefix(n),this.label=n.text,this.weight=wn[this.stylePrefix],this.index=r}return le(t,[{key:"onMouseUp",value:function(){this.container.input.preview=this.newIcon(),this.container.input.element.blur()}},{key:"newIcon",value:function(){var t=document.createElement("i");return t.setAttribute("class","".concat(this.stylePrefix," ").concat(this.container.prefix,"-").concat(this.iconId," fa-fw")),t.style.fontWeight=this.weight,t}},{key:"append",value:function(t){var e=document.createElement("a");e.setAttribute("href","javascript:void(0)"),e.setAttribute("data-index",this.index),this.iconId&&e.append(this.newIcon()),e.append(this.label),t.append(e)}}],[{key:"getIconId",value:function(t){return t.value?t.value.split(",")[1]:""}},{key:"getStylePrefix",value:function(t){return t.value?t.value.split(",")[0]:""}}]),t}(),En=function(){function t(e){ce(this,t),this.input=e,this.container=e.container}return le(t,[{key:"onBlur",value:function(){this.input.lastSelected&&(this.value=this.input.lastSelected),this.input.dirty=!1}},{key:"onMouseDown",value:function(t){t.preventDefault()}},{key:"onMouseUp",value:function(t){this.getOption(this.input.selected).onMouseUp(t),this.value=t.target.text,this.input.dirty=!1}},{key:"getOption",value:function(t){var e=Sn.getStylePrefix(t),n=Sn.getIconId(t);return this.options.find((function(t){return t.stylePrefix===e&&t.iconId===n}))}},{key:"generate",value:function(){var t=document.createElement("div");t.setAttribute("class","d-fa-dropdown"),this.filteredOptions.forEach((function(e){e.append(t)})),this.element&&this.container.element.removeChild(this.element),this.element=this.container.element.appendChild(t),this.input.dirty=!0}},{key:"filteredOptions",get:function(){if(this.value===this.input.lastSelected&&!this.input.dirty)return this.options;if(this.value){var t=this.value.toLowerCase().split(/\s+/);return this.options.filter((function(e){return t.filter((function(t){return e.label.toLowerCase().indexOf(t)>-1})).length===t.length}))}return this.options}},{key:"options",get:function(){var t=this;if(void 0!==this._options)return this._options;var e=se(this.container.element.getElementsByTagName("select")[0].children).map((function(e,n){return new Sn(t,e,n)}));return this._options=e}},{key:"value",get:function(){return this.input.element.value},set:function(t){this.input.element.value=t}}]),t}(),On=function(){function t(e){ce(this,t),this.container=e,this.element.value=this.text,this.element.setAttribute("data-last-selected",this.text),this.preview=this.selectedOption.newIcon(),this.addEventListeners()}return le(t,[{key:"addEventListeners",value:function(){var t=this;this.element.addEventListener("focus",(function(e){return t.onFocus(e)})),this.element.addEventListener("keyup",(function(e){return t.onKeyUp(e)})),this.element.addEventListener("blur",(function(e){return t.onBlur(e)})),this.element.addEventListener("input",(function(e){return t.onInput(e)}))}},{key:"onBlur",value:function(){this.dropdown.onBlur()}},{key:"onInput",value:function(){this.dropdown.generate()}},{key:"onFocus",value:function(){var t=this.element.value.length;0!==t&&this.element.setSelectionRange(0,t),this.dropdown.generate()}},{key:"onKeyUp",value:function(t){"Escape"===t.key&&this.element.blur()}},{key:"onMouseDown",value:function(t){t.target!==this.element&&this.dropdown.onMouseDown(t)}},{key:"onMouseUp",value:function(t){t.target!==this.element&&(this.selected=t.target.getAttribute("data-index"),this.lastSelected=t.target.text,this.dropdown.onMouseUp(t))}},{key:"dirty",get:function(){return"true"===this.element.getAttribute("data-dirty")},set:function(t){this.element.setAttribute("data-dirty",t)}},{key:"dropdown",get:function(){return void 0!==this._dropdown?this._dropdown:this._dropdown=new En(this)}},{key:"element",get:function(){if(void 0!==this._element)return this._element;var t=this.container.element.querySelector(".d-fa-input");return this._element=t}},{key:"lastSelected",get:function(){return this.element.getAttribute("data-last-selected")},set:function(t){this.element.setAttribute("data-last-selected",t)}},{key:"preview",get:function(){return this.container.element.querySelector(".d-fa-preview")},set:function(t){this.preview&&this.container.element.removeChild(this.preview),t.classList.add("d-fa-preview"),this.container.element.insertBefore(t,this.element)}},{key:"select",get:function(){return void 0!==this._select?this._select:this._select=this.container.element.querySelector("select")}},{key:"selected",get:function(){return this.select.children[this.select.selectedIndex]},set:function(t){this.select.selectedIndex=t}},{key:"selectedOption",get:function(){return this.dropdown.getOption(this.selected)}},{key:"text",get:function(){return this.selected.text}}]),t}(),An=function(){function t(e){ce(this,t),this.element=e,this.input=new On(this),this.addEventListeners(),this.setAdminOverflow()}return le(t,[{key:"addEventListeners",value:function(){var t=this;this.element.addEventListener("mousedown",(function(e){t.onMouseDown(t,e)})),this.element.addEventListener("mouseup",(function(e){t.onMouseUp(t,e)}))}},{key:"onMouseDown",value:function(t,e){e.target!==t.element&&t.input.onMouseDown(e)}},{key:"onMouseUp",value:function(t,e){e.target!==t.element&&t.input.onMouseUp(e)}},{key:"setAdminOverflow",value:function(){var t=this.element.closest(".form-row");t&&(t.style.overflow="visible")}},{key:"prefix",get:function(){if(void 0!==this._prefix)return this._prefix;var t=this.element.getAttribute("data-fontawesome-prefix");return this._prefix=t}}]),t}();!function(t){if("complete"===document.readyState)setTimeout(t,1);else var e=setInterval((function(){"complete"===document.readyState&&(clearInterval(e),t())}),10)}((function(){var t;se(document.getElementsByClassName("d-fa-select")).map((function(e){return new An(e,t)}))}))}();