"use strict";(self.webpackChunkkapusta_frontend=self.webpackChunkkapusta_frontend||[]).push([[877],{1668:(t,e,n)=>{n.d(e,{P:()=>o});var r=n(9119),a=n(1019);function o(t,e){const n=(0,r.a)(t);if(isNaN(e))return(0,a.w)(t,NaN);if(!e)return n;const o=n.getDate(),i=(0,a.w)(t,n.getTime());i.setMonth(n.getMonth()+e+1,0);return o>=i.getDate()?i:(n.setFullYear(i.getFullYear(),i.getMonth(),o),n)}},1019:(t,e,n)=>{function r(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}n.d(e,{w:()=>r})},8359:(t,e,n)=>{n.d(e,{GP:()=>et});const r={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function a(t){return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const o={date:a({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:a({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:a({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},i={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function u(t){return(e,n)=>{let r;if("formatting"===(null!==n&&void 0!==n&&n.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=null!==n&&void 0!==n&&n.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=null!==n&&void 0!==n&&n.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function s(t){return function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(u)?function(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n;return}(u,(t=>t.test(i))):function(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n;return}(u,(t=>t.test(i)));let d;d=t.valueCallback?t.valueCallback(s):s,d=n.valueCallback?n.valueCallback(d):d;return{value:d,rest:e.slice(i.length)}}}var d;const c={code:"en-US",formatDistance:(t,e,n)=>{let a;const o=r[t];return a="string"===typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:o,formatRelative:(t,e,n,r)=>i[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:u({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:u({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:u({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:u({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:u({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(d={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=t.match(d.matchPattern);if(!n)return null;const r=n[0],a=t.match(d.parsePattern);if(!a)return null;let o=d.valueCallback?d.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:s({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:s({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:s({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:s({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:s({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let l={};function h(){return l}Math.pow(10,8);const f=6048e5,m=864e5;var g=n(9119);function w(t){const e=(0,g.a)(t);return e.setHours(0,0,0,0),e}function v(t){const e=(0,g.a)(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function b(t,e){const n=w(t),r=w(e),a=+n-v(n),o=+r-v(r);return Math.round((a-o)/m)}var y=n(1019);function p(t){const e=(0,g.a)(t),n=(0,y.w)(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}function M(t){const e=(0,g.a)(t);return b(e,p(e))+1}function k(t,e){var n,r,a,o,i,u,s,d;const c=h(),l=null!==(n=null!==(r=null!==(a=null!==(o=null===e||void 0===e?void 0:e.weekStartsOn)&&void 0!==o?o:null===e||void 0===e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==a?a:c.weekStartsOn)&&void 0!==r?r:null===(s=c.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==n?n:0,f=(0,g.a)(t),m=f.getDay(),w=(m<l?7:0)+m-l;return f.setDate(f.getDate()-w),f.setHours(0,0,0,0),f}function P(t){return k(t,{weekStartsOn:1})}function x(t){const e=(0,g.a)(t),n=e.getFullYear(),r=(0,y.w)(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=P(r),o=(0,y.w)(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=P(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function S(t){const e=x(t),n=(0,y.w)(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),P(n)}function D(t){const e=(0,g.a)(t),n=+P(e)-+S(e);return Math.round(n/f)+1}function W(t,e){var n,r,a,o,i,u,s,d;const c=(0,g.a)(t),l=c.getFullYear(),f=h(),m=null!==(n=null!==(r=null!==(a=null!==(o=null===e||void 0===e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null===e||void 0===e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:f.firstWeekContainsDate)&&void 0!==r?r:null===(s=f.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==n?n:1,w=(0,y.w)(t,0);w.setFullYear(l+1,0,m),w.setHours(0,0,0,0);const v=k(w,e),b=(0,y.w)(t,0);b.setFullYear(l,0,m),b.setHours(0,0,0,0);const p=k(b,e);return c.getTime()>=v.getTime()?l+1:c.getTime()>=p.getTime()?l:l-1}function T(t,e){var n,r,a,o,i,u,s,d;const c=h(),l=null!==(n=null!==(r=null!==(a=null!==(o=null===e||void 0===e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null===e||void 0===e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:c.firstWeekContainsDate)&&void 0!==r?r:null===(s=c.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==n?n:1,f=W(t,e),m=(0,y.w)(t,0);m.setFullYear(f,0,l),m.setHours(0,0,0,0);return k(m,e)}function Y(t,e){const n=(0,g.a)(t),r=+k(n,e)-+T(n,e);return Math.round(r/f)+1}function C(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const N={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return C("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):C(n+1,2)},d:(t,e)=>C(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>C(t.getHours()%12||12,e.length),H:(t,e)=>C(t.getHours(),e.length),m:(t,e)=>C(t.getMinutes(),e.length),s:(t,e)=>C(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return C(Math.trunc(r*Math.pow(10,n-3)),e.length)}},O="midnight",q="noon",F="morning",H="afternoon",E="evening",j="night",z={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return N.y(t,e)},Y:function(t,e,n,r){const a=W(t,r),o=a>0?a:1-a;if("YY"===e){return C(o%100,2)}return"Yo"===e?n.ordinalNumber(o,{unit:"year"}):C(o,e.length)},R:function(t,e){return C(x(t),e.length)},u:function(t,e){return C(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return C(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return C(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return N.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return C(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=Y(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):C(a,e.length)},I:function(t,e,n){const r=D(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):C(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):N.d(t,e)},D:function(t,e,n){const r=M(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):C(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return C(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return C(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return C(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?q:0===r?O:r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?E:r>=12?H:r>=4?F:j,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return N.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):N.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):C(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):C(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):N.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):N.s(t,e)},S:function(t,e){return N.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return Q(r);case"XXXX":case"XX":return A(r);default:return A(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return Q(r);case"xxxx":case"xx":return A(r);default:return A(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+L(r,":");default:return"GMT"+A(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+L(r,":");default:return"GMT"+A(r,":")}},t:function(t,e,n){return C(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return C(t.getTime(),e.length)}};function L(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+C(o,2)}function Q(t,e){if(t%60===0){return(t>0?"-":"+")+C(Math.abs(t)/60,2)}return A(t,e)}function A(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n=t>0?"-":"+",r=Math.abs(t);return n+C(Math.trunc(r/60),2)+e+C(r%60,2)}const G=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},X=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},B={p:X,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return G(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",G(r,e)).replace("{{time}}",X(a,e))}},J=/^D+$/,I=/^Y+$/,R=["D","DD","YY","YYYY"];function U(t){return t instanceof Date||"object"===typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function $(t){if(!U(t)&&"number"!==typeof t)return!1;const e=(0,g.a)(t);return!isNaN(Number(e))}const V=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,K=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Z=/^'([^]*?)'?$/,_=/''/g,tt=/[a-zA-Z]/;function et(t,e,n){var r,a,o,i,u,s,d,l,f,m,w,v,b,y,p,M,k,P;const x=h(),S=null!==(r=null!==(a=null===n||void 0===n?void 0:n.locale)&&void 0!==a?a:x.locale)&&void 0!==r?r:c,D=null!==(o=null!==(i=null!==(u=null!==(s=null===n||void 0===n?void 0:n.firstWeekContainsDate)&&void 0!==s?s:null===n||void 0===n||null===(d=n.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==u?u:x.firstWeekContainsDate)&&void 0!==i?i:null===(f=x.locale)||void 0===f||null===(m=f.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==o?o:1,W=null!==(w=null!==(v=null!==(b=null!==(y=null===n||void 0===n?void 0:n.weekStartsOn)&&void 0!==y?y:null===n||void 0===n||null===(p=n.locale)||void 0===p||null===(M=p.options)||void 0===M?void 0:M.weekStartsOn)&&void 0!==b?b:x.weekStartsOn)&&void 0!==v?v:null===(k=x.locale)||void 0===k||null===(P=k.options)||void 0===P?void 0:P.weekStartsOn)&&void 0!==w?w:0,T=(0,g.a)(t);if(!$(T))throw new RangeError("Invalid time value");let Y=e.match(K).map((t=>{const e=t[0];if("p"===e||"P"===e){return(0,B[e])(t,S.formatLong)}return t})).join("").match(V).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:nt(t)};if(z[e])return{isToken:!0,value:t};if(e.match(tt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));S.localize.preprocessor&&(Y=S.localize.preprocessor(T,Y));const C={firstWeekContainsDate:D,weekStartsOn:W,locale:S};return Y.map((r=>{if(!r.isToken)return r.value;const a=r.value;(null!==n&&void 0!==n&&n.useAdditionalWeekYearTokens||!function(t){return I.test(t)}(a))&&(null!==n&&void 0!==n&&n.useAdditionalDayOfYearTokens||!function(t){return J.test(t)}(a))||function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return"Use `".concat(t.toLowerCase(),"` instead of `").concat(t,"` (in `").concat(e,"`) for formatting ").concat(r," to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md")}(t,e,n);if(console.warn(r),R.includes(t))throw new RangeError(r)}(a,e,String(t));return(0,z[a[0]])(T,a,S.localize,C)})).join("")}function nt(t){const e=t.match(Z);return e?e[1].replace(_,"'"):t}},2907:(t,e,n)=>{n.d(e,{a:()=>a});var r=n(1668);function a(t,e){return(0,r.P)(t,-e)}},9119:(t,e,n)=>{function r(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"===typeof t&&"[object Date]"===e?new t.constructor(+t):"number"===typeof t||"[object Number]"===e||"string"===typeof t||"[object String]"===e?new Date(t):new Date(NaN)}n.d(e,{a:()=>r})}}]);
//# sourceMappingURL=877.1c10ae6e.chunk.js.map