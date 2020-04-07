(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function ca(a){a=["object"==typeof globalThis&&globalThis,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var da=ca(this); 
function ea(a,b){if(b){var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}ea("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push(b[d]);return c}});var h=this||self,fa=/^[\w+/_-]+[=]{0,2}$/,n=null;function p(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a};function ha(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var ia=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};function q(a,b){this.b=a===ja&&b||"";this.a=ka}var ka={},ja={};var r;a:{var la=h.navigator;if(la){var ma=la.userAgent;if(ma){r=ma;break a}}r=""};function na(a,b){a.src=b instanceof q&&b.constructor===q&&b.a===ka?b.b:"type_error:TrustedResourceUrl";if(null===n)b:{b=h.document;if((b=b.querySelector&&b.querySelector("script[nonce]"))&&(b=b.nonce||b.getAttribute("nonce"))&&fa.test(b)){n=b;break b}n=""}b=n;b&&a.setAttribute("nonce",b)};function t(a){t[" "](a);return a}t[" "]=function(){};function oa(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)};var pa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function qa(a){var b=a.match(pa);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}function x(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}var y=/#|$/; 
function z(a,b){var c=a.search(y),d=x(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}var ra=/[?&]($|#)/; 
function A(a,b,c){for(var d=a.search(y),e=0,f,g=[];0<=(f=x(a,e,b,d));)g.push(a.substring(e,f)),e=Math.min(a.indexOf("&",f)+1||d,d);g.push(a.substr(e));a=g.join("").replace(ra,"$1");c=null!=c?"="+encodeURIComponent(String(c)):"";(b+=c)?(c=a.indexOf("#"),0>c&&(c=a.length),d=a.indexOf("?"),0>d||d>c?(d=c,e=""):e=a.substring(d+1,c),c=[a.substr(0,d),e,a.substr(c)],a=c[1],c[1]=b?a?a+"&"+b:b:a,b=c[0]+(c[1]?"?"+c[1]:"")+c[2]):b=a;return b};function sa(){if(!h.crypto)return Math.random();try{var a=new Uint32Array(1);h.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}}function ta(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}var va=ha(function(){return ia(["Google Web Preview","Mediapartners-Google","Google-Read-Aloud","Google-Adwords"],ua)||1E-4>Math.random()}),wa=ha(function(){return-1!=r.indexOf("MSIE")});function ua(a){return-1!=r.indexOf(a)};var xa=p("0.20"),ya=p("0.002"),za=p("0.00"),Aa=p("0.00"),Ba=/^true$/.test("false"),Ca=/^true$/.test("true"),Da=/^true$/.test("true");var Ea={},B=null; 
function Fa(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}a=4;void 0===a&&(a=0);if(!B)for(B={},c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Ea[e]=f;for(var g=0;g<f.length;g++){var k=f[g];void 0===B[k]&&(B[k]=g)}}a=Ea[a];c=[];for(d=0;d<b.length;d+=3){var l=b[d],m=(e=d+1<b.length)?b[d+1]:0;k=(f=d+2<b.length)?b[d+2]:0;g=l>>2;l=(l&3)<<4|m>>4; 
m=(m&15)<<2|k>>6;k&=63;f||(k=64,e||(m=64));c.push(a[g],a[l],a[m]||"",a[k]||"")}return c.join("")};var C=null;function Ga(){if(null===C){C="";try{var a="";try{a=h.top.location.hash}catch(c){a=h.location.hash}if(a){var b=a.match(/\bdeid=([\d,]+)/);C=b?b[1]:""}}catch(c){}}return C}function D(a,b,c){var d=E;if(c?d.a.hasOwnProperty(c)&&""==d.a[c]:1){var e;e=(e=Ga())?(e=e.match(new RegExp("\\b("+a.join("|")+")\\b")))?e[0]:null:null;if(e)a=e;else a:{if(!wa()&&!va()&&(e=Math.random(),e<b)){e=sa();a=a[Math.floor(e*a.length)];break a}a=null}a&&""!=a&&(c?d.a.hasOwnProperty(c)&&(d.a[c]=a):d.b[a]=!0)}} 
function F(a){var b=E;return b.a.hasOwnProperty(a)?b.a[a]:""}function Ha(){var a=E,b=[];ta(a.b,function(c,d){b.push(d)});ta(a.a,function(c){""!=c&&b.push(c)});return b};var Ia={o:2,B:13,A:14,u:16,s:17},E=null;function G(){return!!E&&"592230571"==F(16)};var H=window,Ja=document;function Ka(a,b){if(Array.prototype.indexOf)return a=a.indexOf(b),"number"==typeof a?a:-1;for(var c=0;c<a.length;c++)if(a[c]===b)return c;return-1}function La(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])};var I=[];function J(){var a={};var b=H.google_tag_data;H.google_tag_data=void 0===b?a:b;a=H.google_tag_data;a.ics||(a.ics={entries:{},set:Ma,update:Na,addListener:Oa,notifyListeners:Pa,active:!1});return a.ics}function Ma(a,b,c,d,e){var f=J();f.active=!0;if(void 0!=b){f=f.entries;var g=f[a]||{},k=g.region;c=c&&"string"==typeof c?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();c!==e&&(c===d?k===e:c||k)||(f[a]={region:c,initial:"granted"===b,update:g.update})}} 
function Na(a,b){var c=J();c.active=!0;if(void 0!=b){var d=K(a);c=c.entries;c[a]=c[a]||{};c[a].update="granted"===b;if(K(a)!==d)for(b=0;b<I.length;++b)d=I[b],"[object Array]"==Object.prototype.toString.call(Object(d.f))&&-1!==d.f.indexOf(a)&&(d.g=!0)}}function Oa(a,b){I.push({f:a,h:b})}function Pa(){for(var a=0;a<I.length;++a){var b=I[a];if(b.g){b.g=!1;try{b.h.call()}catch(c){}}}}function K(a){a=J().entries[a]||{};return void 0!==a.update?a.update:void 0!==a.initial?a.initial:void 0} 
function Qa(a){if(!1===K("ad_storage")){var b=!1;J().addListener(["ad_storage"],function(){!b&&K("ad_storage")&&(a(),b=!0)})}};var L={};function Ra(){L.TAGGING=L.TAGGING||[];L.TAGGING[1]=!0};var M=/:[0-9]+$/;function N(a,b){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].split("=");if(decodeURIComponent(d[0]).replace(/\+/g," ")===b)return decodeURIComponent(d.slice(1).join("=")).replace(/\+/g," ")}} 
function O(a,b){var c="query";if("protocol"===c||"port"===c)a.protocol=P(a.protocol)||P(H.location.protocol);"port"===c?a.port=String(Number(a.hostname?a.port:H.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===c&&(a.hostname=(a.hostname||H.location.hostname).replace(M,"").toLowerCase());var d=P(a.protocol);c&&(c=String(c).toLowerCase());switch(c){case "url_no_fragment":b="";a&&a.href&&(b=a.href.indexOf("#"),b=0>b?a.href:a.href.substr(0,b));a=b;break;case "protocol":a=d; 
break;case "host":a=a.hostname.replace(M,"").toLowerCase();break;case "port":a=String(Number(a.port)||("http"==d?80:"https"==d?443:""));break;case "path":a.pathname||a.hostname||Ra();a="/"==a.pathname.charAt(0)?a.pathname:"/"+a.pathname;a=a.split("/");0<=Ka([],a[a.length-1])&&(a[a.length-1]="");a=a.join("/");break;case "query":a=a.search.replace("?","");b&&(a=N(a,b));break;case "extension":a=a.pathname.split(".");a=1<a.length?a[a.length-1]:"";a=a.split("/")[0];break;case "fragment":a=a.hash.replace("#", 
"");break;default:a=a&&a.href}return a}function P(a){return a?a.replace(":","").toLowerCase():""};var Sa={};function Q(a){return void 0==Sa[a]?!1:Sa[a]};function R(a,b,c,d){if(Ta(d)){d=[];b=String(b||document.cookie).split(";");for(var e=0;e<b.length;e++){var f=b[e].split("="),g=f[0].replace(/^\s*|\s*$/g,"");g&&g==a&&((f=f.slice(1).join("=").replace(/^\s*|\s*$/g,""))&&c&&(f=decodeURIComponent(f)),d.push(f))}a=d}else a=[];return a}function Ua(a,b,c){var d=document.cookie;document.cookie=a;a=document.cookie;return d!=a||void 0!=c&&0<=R(b,a).indexOf(c)} 
function Va(a,b,c){function d(u,v,aa){if(null==aa)return delete g[v],u;g[v]=aa;return u+"; "+v+"="+aa}function e(u,v){if(null==v)return delete g[v],u;g[v]=!0;return u+"; "+v}if(Ta(c.F)){if(void 0==b)var f=a+"=deleted; expires="+(new Date(0)).toUTCString();else c.encode&&(b=encodeURIComponent(b)),b=Wa(b),f=a+"="+b;var g={};f=d(f,"path",c.path);if(c.expires instanceof Date)var k=c.expires.toUTCString();else null!=c.expires&&(k=c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.D);f=d(f,"samesite",c.G); 
c.H&&(f=e(f,"secure"));f=e(f,c.flags);k=c.domain;if("auto"===k){k=Xa();for(var l=0;l<k.length;++l){var m="none"!==k[l]?k[l]:void 0,w=d(f,"domain",m);if(!Ya(m,c.path)&&Ua(w,a,b))break}}else k&&"none"!==k&&(f=d(f,"domain",k)),Ya(k,c.path)||Ua(f,a,b)}}function Wa(a){a&&1200<a.length&&(a=a.substring(0,1200));return a}var Za=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,$a=/(^|\.)doubleclick\.net$/i;function Ya(a,b){return $a.test(document.location.hostname)||"/"===b&&Za.test(a)} 
function Xa(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(c=b.length-2;0<=c;c--)a.push(b.slice(c).join("."));b=document.location.hostname;$a.test(b)||Za.test(b)||a.push("none");return a}function Ta(a){if(!Q("gtag_cs_api")||!a||!J().active)return!0;a=K(a);return null==a?!0:!!a};function ab(a,b){var c,d=a.C;null==d&&(d=7776E3);0!==d&&(c=new Date((b||(new Date).getTime())+1E3*d));return{path:a.path,domain:a.domain,flags:a.flags,encode:!0,expires:c}};var bb=/^\w+$/,cb=/^[\w-]+$/,db=/^~?[\w-]+$/,eb={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function fb(a){Q("gtag_cs_api")&&J().active&&!K("ad_storage")?Qa(a):a()}function gb(a,b){var c=[];if(!a.cookie)return c;a=R(b,a.cookie,void 0,"ad_storage");if(!a||0==a.length)return c;for(b=0;b<a.length;b++){var d=hb(a[b]);d&&-1===Ka(c,d)&&c.push(d)}return ib(c)}function jb(a){return a&&"string"==typeof a&&a.match(bb)?a:"_gcl"} 
function kb(a,b,c){function d(f,g){e[g]||(e[g]=[]);e[g].push(f)}var e={};e.gclid=a;e.gclsrc=b;e.dclid=c;if(void 0!==a&&a.match(cb))switch(b){case void 0:d(a,"aw");break;case "aw.ds":d(a,"aw");d(a,"dc");break;case "ds":d(a,"dc");break;case "3p.ds":Q("gtm_3pds")&&d(a,"dc");break;case "gf":d(a,"gf");break;case "ha":d(a,"ha");break;case "gp":d(a,"gp")}c&&d(c,"dc");return e} 
function lb(a,b,c){function d(l){return["GCL",k,l].join(".")}function e(l,m){l=eb[l];l=void 0!==l?f+l:void 0;l&&(null==g.path&&(g.path="/"),g.domain||(g.domain="auto"),Va(l,m,g))}b=b||{};var f=jb(b.prefix);c=c||(new Date).getTime();var g=ab(b,c),k=Math.round(c/1E3);fb(function(){a.aw&&(!0===b.I?e("aw",d("~"+a.aw[0])):e("aw",d(a.aw[0])));a.dc&&e("dc",d(a.dc[0]));a.gf&&e("gf",d(a.gf[0]));a.ha&&e("ha",d(a.ha[0]));a.gp&&e("gp",d(a.gp[0]))})} 
function hb(a){a=a.split(".");if(3==a.length&&"GCL"==a[0]&&a[1])return a[2]}function ib(a){return a.filter(function(b){return db.test(b)})}function mb(){for(var a=["aw"],b={},c=jb(b.prefix),d={},e=0;e<a.length;e++)eb[a[e]]&&(d[a[e]]=eb[a[e]]);La(d,function(f,g){g=R(c+g,Ja.cookie,void 0,"ad_storage");if(g.length){g=g[0];var k=g.split(".");k=3!==k.length||"GCL"!==k[0]?0:1E3*(Number(k[1])||0);var l={};l[f]=[hb(g)];lb(l,b,k)}})};var nb=/^UA-\d+-\d+%3A[\w-]+(?:%2C[\w-]+)*(?:%3BUA-\d+-\d+%3A[\w-]+(?:%2C[\w-]+)*)*$/,ob=/^~?[\w-]+(?:\.~?[\w-]+)*$/,pb=/^\d+\.fls\.doubleclick\.net$/,qb=/;gac=([^;?]+)/,rb=/;gclaw=([^;?]+)/;function sb(a,b){if(pb.test(a.location.host)){if((a=a.location.href.match(rb))&&2==a.length&&a[1].match(ob))return a[1]}else if(a=gb(a,(b||"_gcl")+"_aw"),0<a.length)return a.join(".");return""} 
function tb(a){if(0===gb(document,"_gcl_aw").length&&(!a||0===gb(document,a+"_aw").length)){var b=H.location.href;a=Ja.createElement("a");b&&(a.href=b);var c=a.pathname;"/"!==c[0]&&(b||Ra(),c="/"+c);b=a.hostname.replace(M,"");var d={href:a.href,protocol:a.protocol,host:a.host,hostname:b,pathname:c,search:a.search,hash:a.hash,port:a.port};a=O(d,"gclid");c=O(d,"gclsrc");b=O(d,"dclid");a&&c||(d=d.hash.replace("#",""),a=a||N(d,"gclid"),c=c||N(d,"gclsrc"));a=kb(a,c,b);lb(a,{});mb()}};function ub(a){var b=h.performance;return b&&b.timing&&b.timing[a]||0};var vb={v:0,j:1,w:2,m:3,l:4};function S(){this.a={}}function wb(a,b,c){"number"===typeof c&&0<c&&(a.a[b]=Math.round(c))}function xb(a){var b=S.a();var c=void 0===c?h:c;c=c.performance;wb(b,a,c&&c.now?c.now():null)}function yb(){function a(){return wb(b,0,ub("loadEventStart")-ub("navigationStart"))}var b=S.a();0!=ub("loadEventStart")?a():window.addEventListener("load",a)}function zb(){var a=S.a();return Object.values(vb).map(function(b){return[b,a.a[b]||0]})}S.b=void 0; 
S.a=function(){return S.b?S.b:S.b=new S};function Ab(a,b,c){a=Bb(a,!0);if(a[b])return!1;a[b]=[];a[b][0]=c;return!0}function Bb(a,b){var c=a.GooglebQhCsO;c||(c={},b&&(a.GooglebQhCsO=c));return c};function Cb(a,b,c,d){var e=z(c,"fmt");if(d){var f=z(c,"random"),g=z(c,"label")||"";if(!f)return!1;f=Fa(decodeURIComponent(g.replace(/\+/g," "))+":"+decodeURIComponent(f.replace(/\+/g," ")));if(!Ab(a,f,d))return!1}e&&4!=e&&(c=A(c,"rfmt",e));c=A(c,"fmt",4);e=oa("SCRIPT");na(e,new q(ja,c));e.onload=function(){a.google_noFurtherRedirects&&d&&d.call&&(a.google_noFurtherRedirects=null,d())};b.getElementsByTagName("script")[0].parentElement.appendChild(e);return!0};var Db=/^true$/.test("false");function Eb(){if("function"==typeof H.__uspapi){var a="";try{H.__uspapi("getUSPData",1,function(b,c){c&&b&&(b=b.uspString)&&/^[\da-zA-Z-]{1,20}$/.test(b)&&(a=b)})}catch(b){}return a}};var T="google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_evaluemrc google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_gtag_event_data google_remarketing_only google_conversion_linker google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_allow_ad_personalization_signals google_restricted_data_processing google_conversion_items google_conversion_merchant_id google_user_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_conversion_page_url google_conversion_referrer_url google_gtm google_gcl_cookie_prefix google_read_gcl_cookie_opt_out google_basket_feed_country google_basket_feed_language google_basket_discount google_basket_transaction_type google_disable_merchant_reported_conversions google_additional_conversion_params google_transport_url".split(" "), 
Fb=["google_conversion_first_time","google_conversion_snippets"];function U(a){return null!=a?encodeURIComponent(String(a)):""}function Gb(a){if(null!=a){a=String(a).substring(0,512);var b=a.indexOf("#");return-1==b?a:a.substring(0,b)}return""}function V(a,b){b=U(b);return""!=b&&(a=U(a),""!=a)?"&".concat(a,"=",b):""}function Hb(a){var b=typeof a;return null==a||"object"==b||"function"==b?null:String(a).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")} 
function Ib(a){if(!a||"object"!=typeof a||"function"==typeof a.join)return"";var b=[],c;for(c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=a[c];if(d&&"function"==typeof d.join){for(var e=[],f=0;f<d.length;++f){var g=Hb(d[f]);null!=g&&e.push(g)}d=0==e.length?null:e.join(",")}else d=Hb(d);(e=Hb(c))&&null!=d&&b.push(e+"="+d)}return b.join(";")} 
function Jb(a,b){b=void 0===b?null:b;a=Ib(a.google_custom_params);b=Ib(b);b=a.concat(0<a.length&&0<b.length?";":"",b);return""==b?"":"&".concat("data=",encodeURIComponent(b))}function Kb(a){return null==a||0!=a&&1!=a?"":V("tfcd",a)}function Lb(a){return null==a||0!=a&&1!=a?"":V("tfua",a)}function Mb(a){return!1===a?V("npa",1):!0===a?V("npa",0):""}function Nb(a){return Da?!0===a?V("rdp",1):!1===a?V("rdp",0):"":""} 
function Ob(a){if(null!=a){a=a.toString();if(2==a.length)return V("hl",a);if(5==a.length)return V("hl",a.substring(0,2))+V("gl",a.substring(3,5))}return""}function W(a){return"number"!=typeof a&&"string"!=typeof a?"":U(a.toString())} 
function Pb(a){if(!a)return"";a=a.google_conversion_items;if(!a)return"";for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=[];e&&(f.push(W(e.value)),f.push(W(e.quantity)),f.push(W(e.item_id)),f.push(W(e.start_date)),f.push(W(e.end_date)),b.push("("+f.join("*")+")"))}return 0<b.length?"&item="+b.join(""):""} 
function Qb(a,b){if(b.google_read_gcl_cookie_opt_out||b.google_remarketing_only||b.google_conversion_domain&&(!b.google_gcl_cookie_prefix||!/^_ycl/.test(b.google_gcl_cookie_prefix)))return"";var c="";if(b.google_gcl_cookie_prefix&&/^[a-zA-Z0-9_]+$/.test(b.google_gcl_cookie_prefix)&&"_gcl"!=b.google_gcl_cookie_prefix)return c=sb(a,b.google_gcl_cookie_prefix),V("gclaw",c);(b=sb(a))&&(c=V("gclaw",b));if(pb.test(a.location.host))var d=(d=a.location.href.match(qb))&&2==d.length&&d[1].match(nb)?decodeURIComponent(d[1]): 
"";else{b=[];a=a.cookie.split(";");for(var e=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,f=0;f<a.length;f++){var g=a[f].match(e);g&&b.push({c:g[1],value:g[2]})}a={};if(b&&b.length)for(e=0;e<b.length;e++)f=b[e].value.split("."),"1"==f[0]&&3==f.length&&f[1]&&(a[b[e].c]||(a[b[e].c]=[]),a[b[e].c].push({timestamp:f[1],i:f[2]}));b=[];for(d in a){e=[];f=a[d];for(g=0;g<f.length;g++)e.push(f[g].i);b.push(d+":"+e.join(","))}d=0<b.length?b.join(";"):""}return c+(d?V("gac",d):"")} 
function Rb(a,b,c){var d=[];if(a){var e=a.screen;e&&(d.push(V("u_h",e.height)),d.push(V("u_w",e.width)),d.push(V("u_ah",e.availHeight)),d.push(V("u_aw",e.availWidth)),d.push(V("u_cd",e.colorDepth)));a.history&&d.push(V("u_his",a.history.length))}c&&"function"==typeof c.getTimezoneOffset&&d.push(V("u_tz",-c.getTimezoneOffset()));b&&("function"==typeof b.javaEnabled&&d.push(V("u_java",b.javaEnabled())),b.plugins&&d.push(V("u_nplug",b.plugins.length)),b.mimeTypes&&d.push(V("u_nmime",b.mimeTypes.length))); 
return d.join("")}function Sb(a){function b(d){try{return decodeURIComponent(d),!0}catch(e){return!1}}a=a?a.title:"";if(void 0==a||""==a)return"";a=encodeURIComponent(a);for(var c=256;!b(a.substr(0,c));)c--;return"&tiba="+a.substr(0,c)} 
function Tb(a,b,c,d){var e="";if(b){if(a.top==a)var f=0;else{var g=a.location.ancestorOrigins;if(g)f=g[g.length-1]==a.location.origin?1:2;else{g=a.top;try{var k;if(k=!!g&&null!=g.location.href)c:{try{t(g.foo);k=!0;break c}catch(l){}k=!1}f=k}catch(l){f=!1}f=f?1:2}}a=c?c:1==f?a.top.location.href:a.location.href;e+=V("frm",f);e+=V("url",Gb(a));e+=V("ref",Gb(d||b.referrer))}return e} 
function Ub(a,b,c,d,e){var f=void 0===f?null:f;var g="https://",k="landing"===d.google_conversion_type?"/extclk":"/";switch(e){default:return"";case 2:case 3:var l="googleads.g.doubleclick.net/";var m="pagead/viewthroughconversion/";break;case 1:l="www.google.com/";m="pagead/1p-conversion/";break;case 0:l=d.google_conversion_domain||"www.googleadservices.com/",m="pagead/conversion/"}Ba&&d.google_transport_url&&(l=d.google_transport_url);"/"!==l[l.length-1]&&(l+="/");if(0===l.indexOf("http://")||0=== 
l.indexOf("https://"))g="";g=[g,l,m,U(d.google_conversion_id),k,"?random=",U(d.google_conversion_time)].join("");f=void 0===f?null:f;a=[V("cv",d.google_conversion_js_version),V("fst",d.google_conversion_first_time),V("num",d.google_conversion_snippets),V("fmt",d.google_conversion_format),d.google_remarketing_only?V("userId",d.google_user_id):"",Kb(d.google_tag_for_child_directed_treatment),Lb(d.google_tag_for_under_age_of_consent),Mb(d.google_allow_ad_personalization_signals),Nb(d.google_restricted_data_processing), 
V("value",d.google_conversion_value),V("evaluemrc",d.google_conversion_evaluemrc),V("currency_code",d.google_conversion_currency),V("label",d.google_conversion_label),V("oid",d.google_conversion_order_id),V("bg",d.google_conversion_color),Ob(d.google_conversion_language),V("guid","ON"),!d.google_conversion_domain&&"GooglemKTybQhCsO"in h&&"function"==typeof h.GooglemKTybQhCsO?V("resp","GooglemKTybQhCsO"):"",V("disvt",d.google_disable_viewthrough),V("eid",Ha().join()),Rb(a,b,d.google_conversion_date), 
V("gtm",d.google_gtm),b&&b.sendBeacon?V("sendb","1"):"",Vb(),V("ig",/googleadservices\.com/.test("www.googleadservices.com")?1:0),Jb(d,f),Qb(c,d),Tb(a,c,d.google_conversion_page_url,d.google_conversion_referrer_url),Sb(c),d.google_remarketing_only||!d.google_additional_conversion_params?"":Wb(d.google_additional_conversion_params),"&hn="+U("www.googleadservices.com")].join("");b=Ga();a+=0<b.length?"&debug_experiment_id="+b:"";d.google_remarketing_only||d.google_conversion_domain?d=a:(Xb(d)&&!d.google_basket_transaction_type&& 
(d.google_basket_transaction_type="mrc"),b=[V("mid",d.google_conversion_merchant_id),V("fcntr",d.google_basket_feed_country),V("flng",d.google_basket_feed_language),V("dscnt",d.google_basket_discount),V("bttype",d.google_basket_transaction_type)].join(""),d=[a,b,Pb(d)].join(""),d=4E3<d.length?[a,V("item","elngth")].join(""):d);g+=d;1===e?g+=[V("gcp",1),V("sscte",1),V("ct_cookie_present",1)].join(""):3==e&&(g+=V("gcp",1),g+=V("ct_cookie_present",1));Ca&&(e=Eb(),void 0!==e&&(g+=V("us_privacy",e||"error"))); 
return g}function Yb(a,b,c,d,e,f,g){return'<iframe name="'+a+'"'+(g?' id="'+g+'"':"")+' title="'+b+'" width="'+d+'" height="'+e+'"'+(c?' src="'+c+'"':"")+' frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true"'+(f?' style="display:none"':"")+' scrolling="no"></iframe>'} 
function Zb(a){return{ar:1,bg:1,cs:1,da:1,de:1,el:1,en_AU:1,en_US:1,en_GB:1,es:1,et:1,fi:1,fr:1,hi:1,hr:1,hu:1,id:1,is:1,it:1,iw:1,ja:1,ko:1,lt:1,nl:1,no:1,pl:1,pt_BR:1,pt_PT:1,ro:1,ru:1,sk:1,sl:1,sr:1,sv:1,th:1,tl:1,tr:1,vi:1,zh_CN:1,zh_TW:1}[a]?a+".html":"en_US.html"} 
function $b(a,b,c,d){function e(k,l,m,w){return'<img height="'+m+'" width="'+l+'" border="0" alt="" src="'+k+'"'+(w?' style="display:none"':"")+" />"}G()&&xb(2);var f="";d.google_remarketing_only&&d.google_enable_display_cookie_match&&!Db&&(E&&D(["376635470","376635471"],xa,2),f=d.google_remarketing_only&&d.google_enable_display_cookie_match&&!Db&&E&&"376635471"==F(2)?Yb("google_cookie_match_frame","Google cookie match frame","https://bid.g.doubleclick.net/xbbe/pixel?d=KAE",1,1,!0,null):"");d.google_remarketing_only&& 
!d.google_conversion_domain&&E&&D(["759238990","759238991"],Aa,13);!d.google_remarketing_only||d.google_conversion_domain||E&&("759248991"==F(14)||"759248990"==F(14))||E&&D(["759248990","759248991"],za,14);!1!==d.google_conversion_linker&&tb(d.google_gcl_cookie_prefix);b=Ub(a,b,c,d,d.google_remarketing_only?2:0);if(0==d.google_conversion_format&&null==d.google_conversion_domain)return'<a href="https://services.google.com/sitestats/'+(Zb(d.google_conversion_language)+"?cid="+U(d.google_conversion_id))+ 
'" target="_blank">'+e(b,135,27,!1)+"</a>"+f;if(1<d.google_conversion_snippets||3==d.google_conversion_format){var g=b;null==d.google_conversion_domain&&(g=3==d.google_conversion_format?b:A(b,"fmt",3));return ac(a,c,d,g)?f:e(g,1,1,!0)+f}g=null;!d.google_conversion_domain&&ac(a,c,d,b)&&(g="goog_conv_iframe",b="");return Yb("google_conversion_frame","Google conversion frame",b,2==d.google_conversion_format?200:300,2==d.google_conversion_format?26:13,!1,g)+f} 
function ac(a,b,c,d){if(c.google_conversion_domain)return!1;try{return Cb(a,b,d,null)}catch(e){return!1}} 
function bc(a){for(var b=oa("IFRAME"),c=[],d=[],e=0;e<a.google_conversion_items.length;e++){var f=a.google_conversion_items[e];f&&f.quantity&&(f.sku||f.item_id)&&(c.push(f.sku||f.item_id),d.push(f.quantity))}e="";null!=a.google_basket_feed_language&&null!=a.google_basket_feed_country?e="&mrc_language="+a.google_basket_feed_language.toString()+"&mrc_country="+a.google_basket_feed_country.toString():null!=a.google_conversion_language&&(f=a.google_conversion_language.toString(),5==f.length&&(e="&mrc_language="+ 
f.substring(0,2)+"&mrc_country="+f.substring(3,5)));b.src="https://www.google.com/ads/mrc?sku="+c.join(",")+"&qty="+d.join(",")+"&oid="+a.google_conversion_order_id+"&mcid="+a.google_conversion_merchant_id+e;b.style.width="1px";b.style.height="1px";b.style.display="none";return b}function Xb(a){return!a.google_disable_merchant_reported_conversions&&!!a.google_conversion_merchant_id&&!!a.google_conversion_order_id&&!!a.google_conversion_items} 
function cc(a){if("landing"==a.google_conversion_type||!a.google_conversion_id||a.google_remarketing_only&&a.google_disable_viewthrough)return!1;a.google_conversion_date=new Date;a.google_conversion_time=a.google_conversion_date.getTime();a.google_conversion_snippets="number"==typeof a.google_conversion_snippets&&0<a.google_conversion_snippets?a.google_conversion_snippets+1:1;"number"!=typeof a.google_conversion_first_time&&(a.google_conversion_first_time=a.google_conversion_time);a.google_conversion_js_version= 
"9";0!=a.google_conversion_format&&1!=a.google_conversion_format&&2!=a.google_conversion_format&&3!=a.google_conversion_format&&(a.google_conversion_format=3);!1!==a.google_enable_display_cookie_match&&(a.google_enable_display_cookie_match=!0);return!0}function dc(a){for(var b=0;b<T.length;b++)a[T[b]]=null}function ec(a){for(var b={},c=0;c<T.length;c++)b[T[c]]=a[T[c]];for(c=0;c<Fb.length;c++)b[Fb[c]]=a[Fb[c]];return b} 
function Vb(){var a="";G()&&(a=zb().map(function(b){return b.join("-")}).join("_"));return V("li",a)}function Wb(a){var b="",c;for(c in a)a.hasOwnProperty(c)&&(b+=V(c,a[c]));return b};function fc(a){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0}function gc(a){var b;a.visibilityState?b="visibilitychange":a.mozVisibilityState?b="mozvisibilitychange":a.webkitVisibilityState&&(b="webkitvisibilitychange");return b}function hc(a,b){if(3==fc(b))return!1;a();return!0} 
function ic(a,b){if(!hc(a,b)){var c=!1,d=gc(b),e=function(){!c&&hc(a,b)&&(c=!0,b.removeEventListener&&b.removeEventListener(d,e,!1))};d&&b.addEventListener&&b.addEventListener(d,e,!1)}};E=new function(){var a=[],b=0,c;for(c in Ia)a[b++]=Ia[c];this.b={};this.a={};a=a||[];b=0;for(c=a.length;b<c;++b)this.a[a[b]]=""};D(["592230570","592230571"],ya,16);G()&&(xb(1),yb()); 
function jc(a,b,c){function d(m,w){var u=new Image;u.onload=m;u.src=w}function e(){--f;if(0>=f){var m=Bb(a,!1),w=m[b];w&&(delete m[b],(m=w[0])&&m.call&&m())}}var f=c.length+1;if(2==c.length){var g=c[0],k=c[1];0<=x(g,0,"rmt_tld",g.search(y))&&0<=x(g,0,"ipr",g.search(y))&&!k.match(pa)[6]&&(k+=qa(g),c[1]=A(k,"rmt_tld","1"))}for(g=0;g<c.length;g++){k=c[g];var l=z(k,"fmt");switch(parseInt(l,10)){case 1:case 2:(l=a.document.getElementById("goog_conv_iframe"))&&!l.src?(l.onload=e,l.src=k):d(e,k);break;case 4:Cb(a, 
a.document,k,e);break;case 5:if(a.navigator&&a.navigator.sendBeacon)if(a.navigator.sendBeacon(k,"")){e();break}else k=A(k,"sendb",2);k=A(k,"fmt",3);default:d(e,k)}}e()}var X=["GooglemKTybQhCsO"],Y=h;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===jc?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=jc; 
(function(a,b,c){if(a){try{if(cc(a))if(3==fc(c)){var d=ec(a),e="google_conversion_"+Math.floor(1E9*Math.random());c.write('<span id="'+e+'"></span>');ic(function(){try{var f=c.getElementById(e);f&&(f.innerHTML=$b(a,b,c,d))}catch(g){}},c)}else c.write($b(a,b,c,a));Xb(a)&&c.documentElement.appendChild(bc(a))}catch(f){}dc(a)}})(window,navigator,document);}).call(this);
