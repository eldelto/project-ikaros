(()=>{var Vf=Object.create;var Jc=Object.defineProperty;var Wf=Object.getOwnPropertyDescriptor;var Hf=Object.getOwnPropertyNames;var Gf=Object.getPrototypeOf,Xf=Object.prototype.hasOwnProperty;var qf=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);var Yf=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Hf(t))!Xf.call(i,s)&&s!==e&&Jc(i,s,{get:()=>t[s],enumerable:!(n=Wf(t,s))||n.enumerable});return i};var $f=(i,t,e)=>(e=i!=null?Vf(Gf(i)):{},Yf(t||!i||!i.__esModule?Jc(e,"default",{value:i,enumerable:!0}):e,i));var nd=qf(An=>{"use strict";var a_=An&&An.__extends||function(){var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,s){n.__proto__=s}||function(n,s){for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])},i(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}}(),pt=An&&An.__classPrivateFieldSet||function(i,t,e){if(!t.has(i))throw new TypeError("attempted to set private field on non-instance");return t.set(i,e),e},it=An&&An.__classPrivateFieldGet||function(i,t){if(!t.has(i))throw new TypeError("attempted to get private field on non-instance");return t.get(i)},ci,ki,Qe,Es,Er,_n,xn,yn,vn,bn,Mn,wn,Sn,Oi,Cs,hi,To,ui,Cr,Eo,Co,Po;An.__esModule=!0;An.default=void 0;var l_=function(i){var t=131,e=137,n=0;i+="x";for(var s=Math.floor(9007199254740991/e),r=0;r<i.length;r++)n>s&&(n=Math.floor(n/e)),n=n*t+i.charCodeAt(r);return n},at="0123456789abcdef".split(""),c_=[-2147483648,8388608,32768,128],Ke=[24,16,8,0],Ao=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],de=[],El=function(){function i(t,e){t===void 0&&(t=!1),e===void 0&&(e=!1),ci.set(this,void 0),ki.set(this,void 0),Qe.set(this,void 0),Es.set(this,void 0),Er.set(this,void 0),_n.set(this,void 0),xn.set(this,void 0),yn.set(this,void 0),vn.set(this,void 0),bn.set(this,void 0),Mn.set(this,void 0),wn.set(this,void 0),Sn.set(this,void 0),Oi.set(this,void 0),Cs.set(this,void 0),hi.set(this,void 0),To.set(this,0),ui.set(this,void 0),this.init(t,e)}return i.prototype.init=function(t,e){e?(de[0]=de[16]=de[1]=de[2]=de[3]=de[4]=de[5]=de[6]=de[7]=de[8]=de[9]=de[10]=de[11]=de[12]=de[13]=de[14]=de[15]=0,pt(this,ki,de)):pt(this,ki,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),t?(pt(this,_n,3238371032),pt(this,xn,914150663),pt(this,yn,812702999),pt(this,vn,4144912697),pt(this,bn,4290775857),pt(this,Mn,1750603025),pt(this,wn,1694076839),pt(this,Sn,3204075428)):(pt(this,_n,1779033703),pt(this,xn,3144134277),pt(this,yn,1013904242),pt(this,vn,2773480762),pt(this,bn,1359893119),pt(this,Mn,2600822924),pt(this,wn,528734635),pt(this,Sn,1541459225)),pt(this,ci,pt(this,ui,pt(this,Qe,pt(this,Cs,0)))),pt(this,Es,pt(this,Oi,!1)),pt(this,Er,!0),pt(this,hi,t)},i.prototype.update=function(t){if(it(this,Es))return this;var e;t instanceof ArrayBuffer?e=new Uint8Array(t):e=t;for(var n=0,s=e.length,r=it(this,ki);n<s;){var o=void 0;if(it(this,Oi)&&(pt(this,Oi,!1),r[0]=it(this,ci),r[16]=r[1]=r[2]=r[3]=r[4]=r[5]=r[6]=r[7]=r[8]=r[9]=r[10]=r[11]=r[12]=r[13]=r[14]=r[15]=0),typeof e!="string")for(o=it(this,ui);n<s&&o<64;++n)r[o>>2]|=e[n]<<Ke[o++&3];else for(o=it(this,ui);n<s&&o<64;++n){var a=e.charCodeAt(n);a<128?r[o>>2]|=a<<Ke[o++&3]:a<2048?(r[o>>2]|=(192|a>>6)<<Ke[o++&3],r[o>>2]|=(128|a&63)<<Ke[o++&3]):a<55296||a>=57344?(r[o>>2]|=(224|a>>12)<<Ke[o++&3],r[o>>2]|=(128|a>>6&63)<<Ke[o++&3],r[o>>2]|=(128|a&63)<<Ke[o++&3]):(a=65536+((a&1023)<<10|e.charCodeAt(++n)&1023),r[o>>2]|=(240|a>>18)<<Ke[o++&3],r[o>>2]|=(128|a>>12&63)<<Ke[o++&3],r[o>>2]|=(128|a>>6&63)<<Ke[o++&3],r[o>>2]|=(128|a&63)<<Ke[o++&3])}pt(this,To,o),pt(this,Qe,it(this,Qe)+(o-it(this,ui))),o>=64?(pt(this,ci,r[16]),pt(this,ui,o-64),this.hash(),pt(this,Oi,!0)):pt(this,ui,o)}return it(this,Qe)>4294967295&&(pt(this,Cs,it(this,Cs)+(it(this,Qe)/4294967296<<0)),pt(this,Qe,it(this,Qe)%4294967296)),this},i.prototype.finalize=function(){if(!it(this,Es)){pt(this,Es,!0);var t=it(this,ki),e=it(this,To);t[16]=it(this,ci),t[e>>2]|=c_[e&3],pt(this,ci,t[16]),e>=56&&(it(this,Oi)||this.hash(),t[0]=it(this,ci),t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=it(this,Cs)<<3|it(this,Qe)>>>29,t[15]=it(this,Qe)<<3,this.hash()}},i.prototype.hash=function(){for(var t=it(this,_n),e=it(this,xn),n=it(this,yn),s=it(this,vn),r=it(this,bn),o=it(this,Mn),a=it(this,wn),l=it(this,Sn),c=it(this,ki),h,u,d,f,g,m,p,_,y,M,x=16;x<64;++x)f=c[x-15],h=(f>>>7|f<<25)^(f>>>18|f<<14)^f>>>3,f=c[x-2],u=(f>>>17|f<<15)^(f>>>19|f<<13)^f>>>10,c[x]=c[x-16]+h+c[x-7]+u<<0;M=e&n;for(var b=0;b<64;b+=4)it(this,Er)?(it(this,hi)?(p=300032,f=c[0]-1413257819,l=f-150054599<<0,s=f+24177077<<0):(p=704751109,f=c[0]-210244248,l=f-1521486534<<0,s=f+143694565<<0),pt(this,Er,!1)):(h=(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10),u=(r>>>6|r<<26)^(r>>>11|r<<21)^(r>>>25|r<<7),p=t&e,d=p^t&n^M,m=r&o^~r&a,f=l+u+m+Ao[b]+c[b],g=h+d,l=s+f<<0,s=f+g<<0),h=(s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10),u=(l>>>6|l<<26)^(l>>>11|l<<21)^(l>>>25|l<<7),_=s&t,d=_^s&e^p,m=l&r^~l&o,f=a+u+m+Ao[b+1]+c[b+1],g=h+d,a=n+f<<0,n=f+g<<0,h=(n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10),u=(a>>>6|a<<26)^(a>>>11|a<<21)^(a>>>25|a<<7),y=n&s,d=y^n&t^_,m=a&l^~a&r,f=o+u+m+Ao[b+2]+c[b+2],g=h+d,o=e+f<<0,e=f+g<<0,h=(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10),u=(o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7),M=e&n,d=M^e&s^y,m=o&a^~o&l,f=r+u+m+Ao[b+3]+c[b+3],g=h+d,r=t+f<<0,t=f+g<<0;pt(this,_n,it(this,_n)+t<<0),pt(this,xn,it(this,xn)+e<<0),pt(this,yn,it(this,yn)+n<<0),pt(this,vn,it(this,vn)+s<<0),pt(this,bn,it(this,bn)+r<<0),pt(this,Mn,it(this,Mn)+o<<0),pt(this,wn,it(this,wn)+a<<0),pt(this,Sn,it(this,Sn)+l<<0)},i.prototype.hex=function(){this.finalize();var t=it(this,_n),e=it(this,xn),n=it(this,yn),s=it(this,vn),r=it(this,bn),o=it(this,Mn),a=it(this,wn),l=it(this,Sn),c=at[t>>28&15]+at[t>>24&15]+at[t>>20&15]+at[t>>16&15]+at[t>>12&15]+at[t>>8&15]+at[t>>4&15]+at[t&15]+at[e>>28&15]+at[e>>24&15]+at[e>>20&15]+at[e>>16&15]+at[e>>12&15]+at[e>>8&15]+at[e>>4&15]+at[e&15]+at[n>>28&15]+at[n>>24&15]+at[n>>20&15]+at[n>>16&15]+at[n>>12&15]+at[n>>8&15]+at[n>>4&15]+at[n&15]+at[s>>28&15]+at[s>>24&15]+at[s>>20&15]+at[s>>16&15]+at[s>>12&15]+at[s>>8&15]+at[s>>4&15]+at[s&15]+at[r>>28&15]+at[r>>24&15]+at[r>>20&15]+at[r>>16&15]+at[r>>12&15]+at[r>>8&15]+at[r>>4&15]+at[r&15]+at[o>>28&15]+at[o>>24&15]+at[o>>20&15]+at[o>>16&15]+at[o>>12&15]+at[o>>8&15]+at[o>>4&15]+at[o&15]+at[a>>28&15]+at[a>>24&15]+at[a>>20&15]+at[a>>16&15]+at[a>>12&15]+at[a>>8&15]+at[a>>4&15]+at[a&15];return it(this,hi)||(c+=at[l>>28&15]+at[l>>24&15]+at[l>>20&15]+at[l>>16&15]+at[l>>12&15]+at[l>>8&15]+at[l>>4&15]+at[l&15]),c},i.prototype.toString=function(){return this.hex()},i.prototype.digest=function(){this.finalize();var t=it(this,_n),e=it(this,xn),n=it(this,yn),s=it(this,vn),r=it(this,bn),o=it(this,Mn),a=it(this,wn),l=it(this,Sn),c=[t>>24&255,t>>16&255,t>>8&255,t&255,e>>24&255,e>>16&255,e>>8&255,e&255,n>>24&255,n>>16&255,n>>8&255,n&255,s>>24&255,s>>16&255,s>>8&255,s&255,r>>24&255,r>>16&255,r>>8&255,r&255,o>>24&255,o>>16&255,o>>8&255,o&255,a>>24&255,a>>16&255,a>>8&255,a&255];return it(this,hi)||c.push(l>>24&255,l>>16&255,l>>8&255,l&255),c},i.prototype.array=function(){return this.digest()},i.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(it(this,hi)?28:32),e=new DataView(t);return e.setUint32(0,it(this,_n)),e.setUint32(4,it(this,xn)),e.setUint32(8,it(this,yn)),e.setUint32(12,it(this,vn)),e.setUint32(16,it(this,bn)),e.setUint32(20,it(this,Mn)),e.setUint32(24,it(this,wn)),it(this,hi)||e.setUint32(28,it(this,Sn)),t},i}();ci=new WeakMap,ki=new WeakMap,Qe=new WeakMap,Es=new WeakMap,Er=new WeakMap,_n=new WeakMap,xn=new WeakMap,yn=new WeakMap,vn=new WeakMap,bn=new WeakMap,Mn=new WeakMap,wn=new WeakMap,Sn=new WeakMap,Oi=new WeakMap,Cs=new WeakMap,hi=new WeakMap,To=new WeakMap,ui=new WeakMap;var yw=function(i){a_(t,i);function t(e,n,s){n===void 0&&(n=!1),s===void 0&&(s=!1);var r=i.call(this,n,s)||this;Cr.set(r,void 0),Eo.set(r,void 0),Co.set(r,void 0),Po.set(r,void 0);var o;if(typeof e=="string"){for(var a=[],l=e.length,c=0,h=0;h<l;++h){var u=e.charCodeAt(h);u<128?a[c++]=u:u<2048?(a[c++]=192|u>>6,a[c++]=128|u&63):u<55296||u>=57344?(a[c++]=224|u>>12,a[c++]=128|u>>6&63,a[c++]=128|u&63):(u=65536+((u&1023)<<10|e.charCodeAt(++h)&1023),a[c++]=240|u>>18,a[c++]=128|u>>12&63,a[c++]=128|u>>6&63,a[c++]=128|u&63)}o=a}else e instanceof ArrayBuffer?o=new Uint8Array(e):o=e;o.length>64&&(o=new El(n,!0).update(o).array());for(var d=[],f=[],h=0;h<64;++h){var g=o[h]||0;d[h]=92^g,f[h]=54^g}return r.update(f),pt(r,Co,d),pt(r,Cr,!0),pt(r,Eo,n),pt(r,Po,s),r}return t.prototype.finalize=function(){if(i.prototype.finalize.call(this),it(this,Cr)){pt(this,Cr,!1);var e=this.array();i.prototype.init.call(this,it(this,Eo),it(this,Po)),this.update(it(this,Co)),this.update(e),i.prototype.finalize.call(this)}},t}(El);Cr=new WeakMap,Eo=new WeakMap,Co=new WeakMap,Po=new WeakMap;function h_(i){var t=new El;return t.update(i),parseInt(t.hex().substring(0,8),16)}var u_=function(i){var t="#";return i.forEach(function(e){e<16&&(t+=0),t+=e.toString(16)}),t},d_=function(i,t,e){i/=360;var n=e<.5?e*(1+t):e+t-e*t,s=2*e-n;return[i+1/3,i,i-1/3].map(function(r){return r<0&&r++,r>1&&r--,r<1/6?r=s+(n-s)*6*r:r<.5?r=n:r<2/3?r=s+(n-s)*6*(2/3-r):r=s,Math.round(r*255)})},f_=function(){function i(t){t===void 0&&(t={});var e=[t.lightness,t.saturation].map(function(r){return r=r!==void 0?r:[.35,.5,.65],Array.isArray(r)?r.concat():[r]}),n=e[0],s=e[1];this.L=n,this.S=s,typeof t.hue=="number"&&(t.hue={min:t.hue,max:t.hue}),typeof t.hue=="object"&&!Array.isArray(t.hue)&&(t.hue=[t.hue]),typeof t.hue>"u"&&(t.hue=[]),this.hueRanges=t.hue.map(function(r){return{min:typeof r.min>"u"?0:r.min,max:typeof r.max>"u"?360:r.max}}),this.hash=h_,typeof t.hash=="function"&&(this.hash=t.hash),t.hash==="bkdr"&&(this.hash=l_)}return i.prototype.hsl=function(t){var e,n,s,r=this.hash(t),o=727;if(this.hueRanges.length){var a=this.hueRanges[r%this.hueRanges.length];e=r/this.hueRanges.length%o*(a.max-a.min)/o+a.min}else e=r%359;return r=Math.ceil(r/360),n=this.S[r%this.S.length],r=Math.ceil(r/this.S.length),s=this.L[r%this.L.length],[e,n,s]},i.prototype.rgb=function(t){var e=this.hsl(t);return d_.apply(this,e)},i.prototype.hex=function(t){var e=this.rgb(t);return u_(e)},i}();An.default=f_});function dn(){}var uh=function(){let i=0;return function(){return i++}}();function Dt(i){return i===null||typeof i>"u"}function Xt(i){if(Array.isArray&&Array.isArray(i))return!0;let t=Object.prototype.toString.call(i);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function Pt(i){return i!==null&&Object.prototype.toString.call(i)==="[object Object]"}var te=i=>(typeof i=="number"||i instanceof Number)&&isFinite(+i);function Ie(i,t){return te(i)?i:t}function St(i,t){return typeof i>"u"?t:i}var dh=(i,t)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100:i/t,Ca=(i,t)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100*t:+i;function qt(i,t,e){if(i&&typeof i.call=="function")return i.apply(e,t)}function Ut(i,t,e,n){let s,r,o;if(Xt(i))if(r=i.length,n)for(s=r-1;s>=0;s--)t.call(e,i[s],s);else for(s=0;s<r;s++)t.call(e,i[s],s);else if(Pt(i))for(o=Object.keys(i),r=o.length,s=0;s<r;s++)t.call(e,i[o[s]],o[s])}function ar(i,t){let e,n,s,r;if(!i||!t||i.length!==t.length)return!1;for(e=0,n=i.length;e<n;++e)if(s=i[e],r=t[e],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function Zr(i){if(Xt(i))return i.map(Zr);if(Pt(i)){let t=Object.create(null),e=Object.keys(i),n=e.length,s=0;for(;s<n;++s)t[e[s]]=Zr(i[e[s]]);return t}return i}function fh(i){return["__proto__","prototype","constructor"].indexOf(i)===-1}function Zf(i,t,e,n){if(!fh(i))return;let s=t[i],r=e[i];Pt(s)&&Pt(r)?ss(s,r,n):t[i]=Zr(r)}function ss(i,t,e){let n=Xt(t)?t:[t],s=n.length;if(!Pt(i))return i;e=e||{};let r=e.merger||Zf;for(let o=0;o<s;++o){if(t=n[o],!Pt(t))continue;let a=Object.keys(t);for(let l=0,c=a.length;l<c;++l)r(a[l],i,t,e)}return i}function ls(i,t){return ss(i,t,{merger:Jf})}function Jf(i,t,e){if(!fh(i))return;let n=t[i],s=e[i];Pt(n)&&Pt(s)?ls(n,s):Object.prototype.hasOwnProperty.call(t,i)||(t[i]=Zr(s))}var jc={"":i=>i,x:i=>i.x,y:i=>i.y};function In(i,t){return(jc[t]||(jc[t]=jf(t)))(i)}function jf(i){let t=Kf(i);return e=>{for(let n of t){if(n==="")break;e=e&&e[n]}return e}}function Kf(i){let t=i.split("."),e=[],n="";for(let s of t)n+=s,n.endsWith("\\")?n=n.slice(0,-1)+".":(e.push(n),n="");return e}function Qr(i){return i.charAt(0).toUpperCase()+i.slice(1)}var De=i=>typeof i<"u",Dn=i=>typeof i=="function",Pa=(i,t)=>{if(i.size!==t.size)return!1;for(let e of i)if(!t.has(e))return!1;return!0};function ph(i){return i.type==="mouseup"||i.type==="click"||i.type==="contextmenu"}var Zt=Math.PI,Wt=2*Zt,Qf=Wt+Zt,Jr=Number.POSITIVE_INFINITY,tp=Zt/180,Kt=Zt/2,ir=Zt/4,Kc=Zt*2/3,ke=Math.log10,je=Math.sign;function La(i){let t=Math.round(i);i=cs(i,t,i/1e3)?t:i;let e=Math.pow(10,Math.floor(ke(i))),n=i/e;return(n<=1?1:n<=2?2:n<=5?5:10)*e}function mh(i){let t=[],e=Math.sqrt(i),n;for(n=1;n<e;n++)i%n===0&&(t.push(n),t.push(i/n));return e===(e|0)&&t.push(e),t.sort((s,r)=>s-r).pop(),t}function Ci(i){return!isNaN(parseFloat(i))&&isFinite(i)}function cs(i,t,e){return Math.abs(i-t)<e}function gh(i,t){let e=Math.round(i);return e-t<=i&&e+t>=i}function Ra(i,t,e){let n,s,r;for(n=0,s=i.length;n<s;n++)r=i[n][e],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function Xe(i){return i*(Zt/180)}function to(i){return i*(180/Zt)}function Da(i){if(!te(i))return;let t=1,e=0;for(;Math.round(i*t)/t!==i;)t*=10,e++;return e}function Ia(i,t){let e=t.x-i.x,n=t.y-i.y,s=Math.sqrt(e*e+n*n),r=Math.atan2(n,e);return r<-.5*Zt&&(r+=Wt),{angle:r,distance:s}}function jr(i,t){return Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2))}function ep(i,t){return(i-t+Qf)%Wt-Zt}function Ee(i){return(i%Wt+Wt)%Wt}function hs(i,t,e,n){let s=Ee(i),r=Ee(t),o=Ee(e),a=Ee(r-s),l=Ee(o-s),c=Ee(s-r),h=Ee(s-o);return s===r||s===o||n&&r===o||a>l&&c<h}function oe(i,t,e){return Math.max(t,Math.min(e,i))}function _h(i){return oe(i,-32768,32767)}function fn(i,t,e,n=1e-6){return i>=Math.min(t,e)-n&&i<=Math.max(t,e)+n}function eo(i,t,e){e=e||(o=>i[o]<t);let n=i.length-1,s=0,r;for(;n-s>1;)r=s+n>>1,e(r)?s=r:n=r;return{lo:s,hi:n}}var un=(i,t,e,n)=>eo(i,e,n?s=>i[s][t]<=e:s=>i[s][t]<e),xh=(i,t,e)=>eo(i,e,n=>i[n][t]>=e);function yh(i,t,e){let n=0,s=i.length;for(;n<s&&i[n]<t;)n++;for(;s>n&&i[s-1]>e;)s--;return n>0||s<i.length?i.slice(n,s):i}var vh=["push","pop","shift","splice","unshift"];function bh(i,t){if(i._chartjs){i._chartjs.listeners.push(t);return}Object.defineProperty(i,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),vh.forEach(e=>{let n="_onData"+Qr(e),s=i[e];Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value(...r){let o=s.apply(this,r);return i._chartjs.listeners.forEach(a=>{typeof a[n]=="function"&&a[n](...r)}),o}})})}function ka(i,t){let e=i._chartjs;if(!e)return;let n=e.listeners,s=n.indexOf(t);s!==-1&&n.splice(s,1),!(n.length>0)&&(vh.forEach(r=>{delete i[r]}),delete i._chartjs)}function Oa(i){let t=new Set,e,n;for(e=0,n=i.length;e<n;++e)t.add(i[e]);return t.size===n?i:Array.from(t)}var Fa=function(){return typeof window>"u"?function(i){return i()}:window.requestAnimationFrame}();function za(i,t,e){let n=e||(o=>Array.prototype.slice.call(o)),s=!1,r=[];return function(...o){r=n(o),s||(s=!0,Fa.call(window,()=>{s=!1,i.apply(t,r)}))}}function Mh(i,t){let e;return function(...n){return t?(clearTimeout(e),e=setTimeout(i,t,n)):i.apply(this,n),t}}var no=i=>i==="start"?"left":i==="end"?"right":"center",ge=(i,t,e)=>i==="start"?t:i==="end"?e:(t+e)/2,wh=(i,t,e,n)=>i===(n?"left":"right")?e:i==="center"?(t+e)/2:t;function Na(i,t,e){let n=t.length,s=0,r=n;if(i._sorted){let{iScale:o,_parsed:a}=i,l=o.axis,{min:c,max:h,minDefined:u,maxDefined:d}=o.getUserBounds();u&&(s=oe(Math.min(un(a,o.axis,c).lo,e?n:un(t,l,o.getPixelForValue(c)).lo),0,n-1)),d?r=oe(Math.max(un(a,o.axis,h,!0).hi+1,e?0:un(t,l,o.getPixelForValue(h),!0).hi+1),s,n)-s:r=n-s}return{start:s,count:r}}function Ba(i){let{xScale:t,yScale:e,_scaleRanges:n}=i,s={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!n)return i._scaleRanges=s,!0;let r=n.xmin!==t.min||n.xmax!==t.max||n.ymin!==e.min||n.ymax!==e.max;return Object.assign(n,s),r}var Gr=i=>i===0||i===1,Qc=(i,t,e)=>-(Math.pow(2,10*(i-=1))*Math.sin((i-t)*Wt/e)),th=(i,t,e)=>Math.pow(2,-10*i)*Math.sin((i-t)*Wt/e)+1,is={linear:i=>i,easeInQuad:i=>i*i,easeOutQuad:i=>-i*(i-2),easeInOutQuad:i=>(i/=.5)<1?.5*i*i:-.5*(--i*(i-2)-1),easeInCubic:i=>i*i*i,easeOutCubic:i=>(i-=1)*i*i+1,easeInOutCubic:i=>(i/=.5)<1?.5*i*i*i:.5*((i-=2)*i*i+2),easeInQuart:i=>i*i*i*i,easeOutQuart:i=>-((i-=1)*i*i*i-1),easeInOutQuart:i=>(i/=.5)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2),easeInQuint:i=>i*i*i*i*i,easeOutQuint:i=>(i-=1)*i*i*i*i+1,easeInOutQuint:i=>(i/=.5)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2),easeInSine:i=>-Math.cos(i*Kt)+1,easeOutSine:i=>Math.sin(i*Kt),easeInOutSine:i=>-.5*(Math.cos(Zt*i)-1),easeInExpo:i=>i===0?0:Math.pow(2,10*(i-1)),easeOutExpo:i=>i===1?1:-Math.pow(2,-10*i)+1,easeInOutExpo:i=>Gr(i)?i:i<.5?.5*Math.pow(2,10*(i*2-1)):.5*(-Math.pow(2,-10*(i*2-1))+2),easeInCirc:i=>i>=1?i:-(Math.sqrt(1-i*i)-1),easeOutCirc:i=>Math.sqrt(1-(i-=1)*i),easeInOutCirc:i=>(i/=.5)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1),easeInElastic:i=>Gr(i)?i:Qc(i,.075,.3),easeOutElastic:i=>Gr(i)?i:th(i,.075,.3),easeInOutElastic(i){return Gr(i)?i:i<.5?.5*Qc(i*2,.1125,.45):.5+.5*th(i*2-1,.1125,.45)},easeInBack(i){return i*i*((1.70158+1)*i-1.70158)},easeOutBack(i){return(i-=1)*i*((1.70158+1)*i+1.70158)+1},easeInOutBack(i){let t=1.70158;return(i/=.5)<1?.5*(i*i*(((t*=1.525)+1)*i-t)):.5*((i-=2)*i*(((t*=1.525)+1)*i+t)+2)},easeInBounce:i=>1-is.easeOutBounce(1-i),easeOutBounce(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},easeInOutBounce:i=>i<.5?is.easeInBounce(i*2)*.5:is.easeOutBounce(i*2-1)*.5+.5};function lr(i){return i+.5|0}var Qn=(i,t,e)=>Math.max(Math.min(i,e),t);function sr(i){return Qn(lr(i*2.55),0,255)}function ti(i){return Qn(lr(i*255),0,255)}function Rn(i){return Qn(lr(i/2.55)/100,0,1)}function eh(i){return Qn(lr(i*100),0,100)}var Ge={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Ta=[..."0123456789ABCDEF"],np=i=>Ta[i&15],ip=i=>Ta[(i&240)>>4]+Ta[i&15],Xr=i=>(i&240)>>4===(i&15),sp=i=>Xr(i.r)&&Xr(i.g)&&Xr(i.b)&&Xr(i.a);function rp(i){var t=i.length,e;return i[0]==="#"&&(t===4||t===5?e={r:255&Ge[i[1]]*17,g:255&Ge[i[2]]*17,b:255&Ge[i[3]]*17,a:t===5?Ge[i[4]]*17:255}:(t===7||t===9)&&(e={r:Ge[i[1]]<<4|Ge[i[2]],g:Ge[i[3]]<<4|Ge[i[4]],b:Ge[i[5]]<<4|Ge[i[6]],a:t===9?Ge[i[7]]<<4|Ge[i[8]]:255})),e}var op=(i,t)=>i<255?t(i):"";function ap(i){var t=sp(i)?np:ip;return i?"#"+t(i.r)+t(i.g)+t(i.b)+op(i.a,t):void 0}var lp=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Sh(i,t,e){let n=t*Math.min(e,1-e),s=(r,o=(r+i/30)%12)=>e-n*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function cp(i,t,e){let n=(s,r=(s+i/60)%6)=>e-e*t*Math.max(Math.min(r,4-r,1),0);return[n(5),n(3),n(1)]}function hp(i,t,e){let n=Sh(i,1,.5),s;for(t+e>1&&(s=1/(t+e),t*=s,e*=s),s=0;s<3;s++)n[s]*=1-t-e,n[s]+=t;return n}function up(i,t,e,n,s){return i===s?(t-e)/n+(t<e?6:0):t===s?(e-i)/n+2:(i-t)/n+4}function Ua(i){let e=i.r/255,n=i.g/255,s=i.b/255,r=Math.max(e,n,s),o=Math.min(e,n,s),a=(r+o)/2,l,c,h;return r!==o&&(h=r-o,c=a>.5?h/(2-r-o):h/(r+o),l=up(e,n,s,h,r),l=l*60+.5),[l|0,c||0,a]}function Va(i,t,e,n){return(Array.isArray(t)?i(t[0],t[1],t[2]):i(t,e,n)).map(ti)}function Wa(i,t,e){return Va(Sh,i,t,e)}function dp(i,t,e){return Va(hp,i,t,e)}function fp(i,t,e){return Va(cp,i,t,e)}function Ah(i){return(i%360+360)%360}function pp(i){let t=lp.exec(i),e=255,n;if(!t)return;t[5]!==n&&(e=t[6]?sr(+t[5]):ti(+t[5]));let s=Ah(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?n=dp(s,r,o):t[1]==="hsv"?n=fp(s,r,o):n=Wa(s,r,o),{r:n[0],g:n[1],b:n[2],a:e}}function mp(i,t){var e=Ua(i);e[0]=Ah(e[0]+t),e=Wa(e),i.r=e[0],i.g=e[1],i.b=e[2]}function gp(i){if(!i)return;let t=Ua(i),e=t[0],n=eh(t[1]),s=eh(t[2]);return i.a<255?`hsla(${e}, ${n}%, ${s}%, ${Rn(i.a)})`:`hsl(${e}, ${n}%, ${s}%)`}var nh={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},ih={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function _p(){let i={},t=Object.keys(ih),e=Object.keys(nh),n,s,r,o,a;for(n=0;n<t.length;n++){for(o=a=t[n],s=0;s<e.length;s++)r=e[s],a=a.replace(r,nh[r]);r=parseInt(ih[o],16),i[a]=[r>>16&255,r>>8&255,r&255]}return i}var qr;function xp(i){qr||(qr=_p(),qr.transparent=[0,0,0,0]);let t=qr[i.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}var yp=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function vp(i){let t=yp.exec(i),e=255,n,s,r;if(!!t){if(t[7]!==n){let o=+t[7];e=t[8]?sr(o):Qn(o*255,0,255)}return n=+t[1],s=+t[3],r=+t[5],n=255&(t[2]?sr(n):Qn(n,0,255)),s=255&(t[4]?sr(s):Qn(s,0,255)),r=255&(t[6]?sr(r):Qn(r,0,255)),{r:n,g:s,b:r,a:e}}}function bp(i){return i&&(i.a<255?`rgba(${i.r}, ${i.g}, ${i.b}, ${Rn(i.a)})`:`rgb(${i.r}, ${i.g}, ${i.b})`)}var Ma=i=>i<=.0031308?i*12.92:Math.pow(i,1/2.4)*1.055-.055,ns=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);function Mp(i,t,e){let n=ns(Rn(i.r)),s=ns(Rn(i.g)),r=ns(Rn(i.b));return{r:ti(Ma(n+e*(ns(Rn(t.r))-n))),g:ti(Ma(s+e*(ns(Rn(t.g))-s))),b:ti(Ma(r+e*(ns(Rn(t.b))-r))),a:i.a+e*(t.a-i.a)}}function Yr(i,t,e){if(i){let n=Ua(i);n[t]=Math.max(0,Math.min(n[t]+n[t]*e,t===0?360:1)),n=Wa(n),i.r=n[0],i.g=n[1],i.b=n[2]}}function Th(i,t){return i&&Object.assign(t||{},i)}function sh(i){var t={r:0,g:0,b:0,a:255};return Array.isArray(i)?i.length>=3&&(t={r:i[0],g:i[1],b:i[2],a:255},i.length>3&&(t.a=ti(i[3]))):(t=Th(i,{r:0,g:0,b:0,a:1}),t.a=ti(t.a)),t}function wp(i){return i.charAt(0)==="r"?vp(i):pp(i)}var rs=class{constructor(t){if(t instanceof rs)return t;let e=typeof t,n;e==="object"?n=sh(t):e==="string"&&(n=rp(t)||xp(t)||wp(t)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var t=Th(this._rgb);return t&&(t.a=Rn(t.a)),t}set rgb(t){this._rgb=sh(t)}rgbString(){return this._valid?bp(this._rgb):void 0}hexString(){return this._valid?ap(this._rgb):void 0}hslString(){return this._valid?gp(this._rgb):void 0}mix(t,e){if(t){let n=this.rgb,s=t.rgb,r,o=e===r?.5:e,a=2*o-1,l=n.a-s.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;r=1-c,n.r=255&c*n.r+r*s.r+.5,n.g=255&c*n.g+r*s.g+.5,n.b=255&c*n.b+r*s.b+.5,n.a=o*n.a+(1-o)*s.a,this.rgb=n}return this}interpolate(t,e){return t&&(this._rgb=Mp(this._rgb,t._rgb,e)),this}clone(){return new rs(this.rgb)}alpha(t){return this._rgb.a=ti(t),this}clearer(t){let e=this._rgb;return e.a*=1-t,this}greyscale(){let t=this._rgb,e=lr(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){let e=this._rgb;return e.a*=1+t,this}negate(){let t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Yr(this._rgb,2,t),this}darken(t){return Yr(this._rgb,2,-t),this}saturate(t){return Yr(this._rgb,1,t),this}desaturate(t){return Yr(this._rgb,1,-t),this}rotate(t){return mp(this._rgb,t),this}};function Eh(i){return new rs(i)}function Ch(i){if(i&&typeof i=="object"){let t=i.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Ha(i){return Ch(i)?i:Eh(i)}function wa(i){return Ch(i)?i:Eh(i).saturate(.5).darken(.1).hexString()}var ei=Object.create(null),io=Object.create(null);function rr(i,t){if(!t)return i;let e=t.split(".");for(let n=0,s=e.length;n<s;++n){let r=e[n];i=i[r]||(i[r]=Object.create(null))}return i}function Sa(i,t,e){return typeof t=="string"?ss(rr(i,t),e):ss(rr(i,""),t)}var Ea=class{constructor(t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=e=>e.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(e,n)=>wa(n.backgroundColor),this.hoverBorderColor=(e,n)=>wa(n.borderColor),this.hoverColor=(e,n)=>wa(n.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t)}set(t,e){return Sa(this,t,e)}get(t){return rr(this,t)}describe(t,e){return Sa(io,t,e)}override(t,e){return Sa(ei,t,e)}route(t,e,n,s){let r=rr(this,t),o=rr(this,n),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){let l=this[a],c=o[s];return Pt(l)?Object.assign({},c,l):St(l,c)},set(l){this[a]=l}}})}},Lt=new Ea({_scriptable:i=>!i.startsWith("on"),_indexable:i=>i!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}});function Sp(i){return!i||Dt(i.size)||Dt(i.family)?null:(i.style?i.style+" ":"")+(i.weight?i.weight+" ":"")+i.size+"px "+i.family}function or(i,t,e,n,s){let r=t[s];return r||(r=t[s]=i.measureText(s).width,e.push(s)),r>n&&(n=r),n}function Ph(i,t,e,n){n=n||{};let s=n.data=n.data||{},r=n.garbageCollect=n.garbageCollect||[];n.font!==t&&(s=n.data={},r=n.garbageCollect=[],n.font=t),i.save(),i.font=t;let o=0,a=e.length,l,c,h,u,d;for(l=0;l<a;l++)if(u=e[l],u!=null&&Xt(u)!==!0)o=or(i,s,r,o,u);else if(Xt(u))for(c=0,h=u.length;c<h;c++)d=u[c],d!=null&&!Xt(d)&&(o=or(i,s,r,o,d));i.restore();let f=r.length/2;if(f>e.length){for(l=0;l<f;l++)delete s[r[l]];r.splice(0,f)}return o}function ni(i,t,e){let n=i.currentDevicePixelRatio,s=e!==0?Math.max(e/2,.5):0;return Math.round((t-s)*n)/n+s}function Ga(i,t){t=t||i.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,i.width,i.height),t.restore()}function so(i,t,e,n){Xa(i,t,e,n,null)}function Xa(i,t,e,n,s){let r,o,a,l,c,h,u=t.pointStyle,d=t.rotation,f=t.radius,g=(d||0)*tp;if(u&&typeof u=="object"&&(r=u.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){i.save(),i.translate(e,n),i.rotate(g),i.drawImage(u,-u.width/2,-u.height/2,u.width,u.height),i.restore();return}if(!(isNaN(f)||f<=0)){switch(i.beginPath(),u){default:s?i.ellipse(e,n,s/2,f,0,0,Wt):i.arc(e,n,f,0,Wt),i.closePath();break;case"triangle":i.moveTo(e+Math.sin(g)*f,n-Math.cos(g)*f),g+=Kc,i.lineTo(e+Math.sin(g)*f,n-Math.cos(g)*f),g+=Kc,i.lineTo(e+Math.sin(g)*f,n-Math.cos(g)*f),i.closePath();break;case"rectRounded":c=f*.516,l=f-c,o=Math.cos(g+ir)*l,a=Math.sin(g+ir)*l,i.arc(e-o,n-a,c,g-Zt,g-Kt),i.arc(e+a,n-o,c,g-Kt,g),i.arc(e+o,n+a,c,g,g+Kt),i.arc(e-a,n+o,c,g+Kt,g+Zt),i.closePath();break;case"rect":if(!d){l=Math.SQRT1_2*f,h=s?s/2:l,i.rect(e-h,n-l,2*h,2*l);break}g+=ir;case"rectRot":o=Math.cos(g)*f,a=Math.sin(g)*f,i.moveTo(e-o,n-a),i.lineTo(e+a,n-o),i.lineTo(e+o,n+a),i.lineTo(e-a,n+o),i.closePath();break;case"crossRot":g+=ir;case"cross":o=Math.cos(g)*f,a=Math.sin(g)*f,i.moveTo(e-o,n-a),i.lineTo(e+o,n+a),i.moveTo(e+a,n-o),i.lineTo(e-a,n+o);break;case"star":o=Math.cos(g)*f,a=Math.sin(g)*f,i.moveTo(e-o,n-a),i.lineTo(e+o,n+a),i.moveTo(e+a,n-o),i.lineTo(e-a,n+o),g+=ir,o=Math.cos(g)*f,a=Math.sin(g)*f,i.moveTo(e-o,n-a),i.lineTo(e+o,n+a),i.moveTo(e+a,n-o),i.lineTo(e-a,n+o);break;case"line":o=s?s/2:Math.cos(g)*f,a=Math.sin(g)*f,i.moveTo(e-o,n-a),i.lineTo(e+o,n+a);break;case"dash":i.moveTo(e,n),i.lineTo(e+Math.cos(g)*f,n+Math.sin(g)*f);break}i.fill(),t.borderWidth>0&&i.stroke()}}function os(i,t,e){return e=e||.5,!t||i&&i.x>t.left-e&&i.x<t.right+e&&i.y>t.top-e&&i.y<t.bottom+e}function cr(i,t){i.save(),i.beginPath(),i.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),i.clip()}function hr(i){i.restore()}function Lh(i,t,e,n,s){if(!t)return i.lineTo(e.x,e.y);if(s==="middle"){let r=(t.x+e.x)/2;i.lineTo(r,t.y),i.lineTo(r,e.y)}else s==="after"!=!!n?i.lineTo(t.x,e.y):i.lineTo(e.x,t.y);i.lineTo(e.x,e.y)}function Rh(i,t,e,n){if(!t)return i.lineTo(e.x,e.y);i.bezierCurveTo(n?t.cp1x:t.cp2x,n?t.cp1y:t.cp2y,n?e.cp2x:e.cp1x,n?e.cp2y:e.cp1y,e.x,e.y)}function ii(i,t,e,n,s,r={}){let o=Xt(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="",l,c;for(i.save(),i.font=s.string,Ap(i,r),l=0;l<o.length;++l)c=o[l],a&&(r.strokeColor&&(i.strokeStyle=r.strokeColor),Dt(r.strokeWidth)||(i.lineWidth=r.strokeWidth),i.strokeText(c,e,n,r.maxWidth)),i.fillText(c,e,n,r.maxWidth),Tp(i,e,n,c,r),n+=s.lineHeight;i.restore()}function Ap(i,t){t.translation&&i.translate(t.translation[0],t.translation[1]),Dt(t.rotation)||i.rotate(t.rotation),t.color&&(i.fillStyle=t.color),t.textAlign&&(i.textAlign=t.textAlign),t.textBaseline&&(i.textBaseline=t.textBaseline)}function Tp(i,t,e,n,s){if(s.strikethrough||s.underline){let r=i.measureText(n),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,l=e-r.actualBoundingBoxAscent,c=e+r.actualBoundingBoxDescent,h=s.strikethrough?(l+c)/2:c;i.strokeStyle=i.fillStyle,i.beginPath(),i.lineWidth=s.decorationWidth||2,i.moveTo(o,h),i.lineTo(a,h),i.stroke()}}function us(i,t){let{x:e,y:n,w:s,h:r,radius:o}=t;i.arc(e+o.topLeft,n+o.topLeft,o.topLeft,-Kt,Zt,!0),i.lineTo(e,n+r-o.bottomLeft),i.arc(e+o.bottomLeft,n+r-o.bottomLeft,o.bottomLeft,Zt,Kt,!0),i.lineTo(e+s-o.bottomRight,n+r),i.arc(e+s-o.bottomRight,n+r-o.bottomRight,o.bottomRight,Kt,0,!0),i.lineTo(e+s,n+o.topRight),i.arc(e+s-o.topRight,n+o.topRight,o.topRight,0,-Kt,!0),i.lineTo(e+o.topLeft,n)}var Ep=new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),Cp=new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);function Pp(i,t){let e=(""+i).match(Ep);if(!e||e[1]==="normal")return t*1.2;switch(i=+e[2],e[3]){case"px":return i;case"%":i/=100;break}return t*i}var Lp=i=>+i||0;function ro(i,t){let e={},n=Pt(t),s=n?Object.keys(t):t,r=Pt(i)?n?o=>St(i[o],i[t[o]]):o=>i[o]:()=>i;for(let o of s)e[o]=Lp(r(o));return e}function qa(i){return ro(i,{top:"y",right:"x",bottom:"y",left:"x"})}function si(i){return ro(i,["topLeft","topRight","bottomLeft","bottomRight"])}function _e(i){let t=qa(i);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function se(i,t){i=i||{},t=t||Lt.font;let e=St(i.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let n=St(i.style,t.style);n&&!(""+n).match(Cp)&&(console.warn('Invalid font style specified: "'+n+'"'),n="");let s={family:St(i.family,t.family),lineHeight:Pp(St(i.lineHeight,t.lineHeight),e),size:e,style:n,weight:St(i.weight,t.weight),string:""};return s.string=Sp(s),s}function ds(i,t,e,n){let s=!0,r,o,a;for(r=0,o=i.length;r<o;++r)if(a=i[r],a!==void 0&&(t!==void 0&&typeof a=="function"&&(a=a(t),s=!1),e!==void 0&&Xt(a)&&(a=a[e%a.length],s=!1),a!==void 0))return n&&!s&&(n.cacheable=!1),a}function Dh(i,t,e){let{min:n,max:s}=i,r=Ca(t,(s-n)/2),o=(a,l)=>e&&a===0?0:a+l;return{min:o(n,-Math.abs(r)),max:o(s,r)}}function kn(i,t){return Object.assign(Object.create(i),t)}function oo(i,t=[""],e=i,n,s=()=>i[0]){De(n)||(n=Oh("_fallback",i));let r={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:i,_rootScopes:e,_fallback:n,_getTarget:s,override:o=>oo([o,...i],t,e,n)};return new Proxy(r,{deleteProperty(o,a){return delete o[a],delete o._keys,delete i[0][a],!0},get(o,a){return Ih(o,a,()=>Np(a,t,i,o))},getOwnPropertyDescriptor(o,a){return Reflect.getOwnPropertyDescriptor(o._scopes[0],a)},getPrototypeOf(){return Reflect.getPrototypeOf(i[0])},has(o,a){return oh(o).includes(a)},ownKeys(o){return oh(o)},set(o,a,l){let c=o._storage||(o._storage=s());return o[a]=c[a]=l,delete o._keys,!0}})}function Ei(i,t,e,n){let s={_cacheable:!1,_proxy:i,_context:t,_subProxy:e,_stack:new Set,_descriptors:Ya(i,n),setContext:r=>Ei(i,r,e,n),override:r=>Ei(i.override(r),t,e,n)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete i[o],!0},get(r,o,a){return Ih(r,o,()=>Dp(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(i,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(i,o)},getPrototypeOf(){return Reflect.getPrototypeOf(i)},has(r,o){return Reflect.has(i,o)},ownKeys(){return Reflect.ownKeys(i)},set(r,o,a){return i[o]=a,delete r[o],!0}})}function Ya(i,t={scriptable:!0,indexable:!0}){let{_scriptable:e=t.scriptable,_indexable:n=t.indexable,_allKeys:s=t.allKeys}=i;return{allKeys:s,scriptable:e,indexable:n,isScriptable:Dn(e)?e:()=>e,isIndexable:Dn(n)?n:()=>n}}var Rp=(i,t)=>i?i+Qr(t):t,$a=(i,t)=>Pt(t)&&i!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Ih(i,t,e){if(Object.prototype.hasOwnProperty.call(i,t))return i[t];let n=e();return i[t]=n,n}function Dp(i,t,e){let{_proxy:n,_context:s,_subProxy:r,_descriptors:o}=i,a=n[t];return Dn(a)&&o.isScriptable(t)&&(a=Ip(t,a,i,e)),Xt(a)&&a.length&&(a=kp(t,a,i,o.isIndexable)),$a(t,a)&&(a=Ei(a,s,r&&r[t],o)),a}function Ip(i,t,e,n){let{_proxy:s,_context:r,_subProxy:o,_stack:a}=e;if(a.has(i))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+i);return a.add(i),t=t(r,o||n),a.delete(i),$a(i,t)&&(t=Za(s._scopes,s,i,t)),t}function kp(i,t,e,n){let{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=e;if(De(r.index)&&n(i))t=t[r.index%t.length];else if(Pt(t[0])){let l=t,c=s._scopes.filter(h=>h!==l);t=[];for(let h of l){let u=Za(c,s,i,h);t.push(Ei(u,r,o&&o[i],a))}}return t}function kh(i,t,e){return Dn(i)?i(t,e):i}var Op=(i,t)=>i===!0?t:typeof i=="string"?In(t,i):void 0;function Fp(i,t,e,n,s){for(let r of t){let o=Op(e,r);if(o){i.add(o);let a=kh(o._fallback,e,s);if(De(a)&&a!==e&&a!==n)return a}else if(o===!1&&De(n)&&e!==n)return null}return!1}function Za(i,t,e,n){let s=t._rootScopes,r=kh(t._fallback,e,n),o=[...i,...s],a=new Set;a.add(n);let l=rh(a,o,e,r||e,n);return l===null||De(r)&&r!==e&&(l=rh(a,o,r,l,n),l===null)?!1:oo(Array.from(a),[""],s,r,()=>zp(t,e,n))}function rh(i,t,e,n,s){for(;e;)e=Fp(i,t,e,n,s);return e}function zp(i,t,e){let n=i._getTarget();t in n||(n[t]={});let s=n[t];return Xt(s)&&Pt(e)?e:s}function Np(i,t,e,n){let s;for(let r of t)if(s=Oh(Rp(r,i),e),De(s))return $a(i,s)?Za(e,n,i,s):s}function Oh(i,t){for(let e of t){if(!e)continue;let n=e[i];if(De(n))return n}}function oh(i){let t=i._keys;return t||(t=i._keys=Bp(i._scopes)),t}function Bp(i){let t=new Set;for(let e of i)for(let n of Object.keys(e).filter(s=>!s.startsWith("_")))t.add(n);return Array.from(t)}function Ja(i,t,e,n){let{iScale:s}=i,{key:r="r"}=this._parsing,o=new Array(n),a,l,c,h;for(a=0,l=n;a<l;++a)c=a+e,h=t[c],o[a]={r:s.parse(In(h,r),c)};return o}var Up=Number.EPSILON||1e-14,as=(i,t)=>t<i.length&&!i[t].skip&&i[t],Fh=i=>i==="x"?"y":"x";function Vp(i,t,e,n){let s=i.skip?t:i,r=t,o=e.skip?t:e,a=jr(r,s),l=jr(o,r),c=a/(a+l),h=l/(a+l);c=isNaN(c)?0:c,h=isNaN(h)?0:h;let u=n*c,d=n*h;return{previous:{x:r.x-u*(o.x-s.x),y:r.y-u*(o.y-s.y)},next:{x:r.x+d*(o.x-s.x),y:r.y+d*(o.y-s.y)}}}function Wp(i,t,e){let n=i.length,s,r,o,a,l,c=as(i,0);for(let h=0;h<n-1;++h)if(l=c,c=as(i,h+1),!(!l||!c)){if(cs(t[h],0,Up)){e[h]=e[h+1]=0;continue}s=e[h]/t[h],r=e[h+1]/t[h],a=Math.pow(s,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),e[h]=s*o*t[h],e[h+1]=r*o*t[h])}}function Hp(i,t,e="x"){let n=Fh(e),s=i.length,r,o,a,l=as(i,0);for(let c=0;c<s;++c){if(o=a,a=l,l=as(i,c+1),!a)continue;let h=a[e],u=a[n];o&&(r=(h-o[e])/3,a[`cp1${e}`]=h-r,a[`cp1${n}`]=u-r*t[c]),l&&(r=(l[e]-h)/3,a[`cp2${e}`]=h+r,a[`cp2${n}`]=u+r*t[c])}}function Gp(i,t="x"){let e=Fh(t),n=i.length,s=Array(n).fill(0),r=Array(n),o,a,l,c=as(i,0);for(o=0;o<n;++o)if(a=l,l=c,c=as(i,o+1),!!l){if(c){let h=c[t]-l[t];s[o]=h!==0?(c[e]-l[e])/h:0}r[o]=a?c?je(s[o-1])!==je(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}Wp(i,s,r),Hp(i,r,t)}function $r(i,t,e){return Math.max(Math.min(i,e),t)}function Xp(i,t){let e,n,s,r,o,a=os(i[0],t);for(e=0,n=i.length;e<n;++e)o=r,r=a,a=e<n-1&&os(i[e+1],t),r&&(s=i[e],o&&(s.cp1x=$r(s.cp1x,t.left,t.right),s.cp1y=$r(s.cp1y,t.top,t.bottom)),a&&(s.cp2x=$r(s.cp2x,t.left,t.right),s.cp2y=$r(s.cp2y,t.top,t.bottom)))}function zh(i,t,e,n,s){let r,o,a,l;if(t.spanGaps&&(i=i.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")Gp(i,s);else{let c=n?i[i.length-1]:i[0];for(r=0,o=i.length;r<o;++r)a=i[r],l=Vp(c,a,i[Math.min(r+1,o-(n?0:1))%o],t.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}t.capBezierPoints&&Xp(i,e)}function ja(){return typeof window<"u"&&typeof document<"u"}function ao(i){let t=i.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function Kr(i,t,e){let n;return typeof i=="string"?(n=parseInt(i,10),i.indexOf("%")!==-1&&(n=n/100*t.parentNode[e])):n=i,n}var lo=i=>window.getComputedStyle(i,null);function qp(i,t){return lo(i).getPropertyValue(t)}var Yp=["top","right","bottom","left"];function Ti(i,t,e){let n={};e=e?"-"+e:"";for(let s=0;s<4;s++){let r=Yp[s];n[r]=parseFloat(i[t+"-"+r+e])||0}return n.width=n.left+n.right,n.height=n.top+n.bottom,n}var $p=(i,t,e)=>(i>0||t>0)&&(!e||!e.shadowRoot);function Zp(i,t){let e=i.touches,n=e&&e.length?e[0]:i,{offsetX:s,offsetY:r}=n,o=!1,a,l;if($p(s,r,i.target))a=s,l=r;else{let c=t.getBoundingClientRect();a=n.clientX-c.left,l=n.clientY-c.top,o=!0}return{x:a,y:l,box:o}}function ri(i,t){if("native"in i)return i;let{canvas:e,currentDevicePixelRatio:n}=t,s=lo(e),r=s.boxSizing==="border-box",o=Ti(s,"padding"),a=Ti(s,"border","width"),{x:l,y:c,box:h}=Zp(i,e),u=o.left+(h&&a.left),d=o.top+(h&&a.top),{width:f,height:g}=t;return r&&(f-=o.width+a.width,g-=o.height+a.height),{x:Math.round((l-u)/f*e.width/n),y:Math.round((c-d)/g*e.height/n)}}function Jp(i,t,e){let n,s;if(t===void 0||e===void 0){let r=ao(i);if(!r)t=i.clientWidth,e=i.clientHeight;else{let o=r.getBoundingClientRect(),a=lo(r),l=Ti(a,"border","width"),c=Ti(a,"padding");t=o.width-c.width-l.width,e=o.height-c.height-l.height,n=Kr(a.maxWidth,r,"clientWidth"),s=Kr(a.maxHeight,r,"clientHeight")}}return{width:t,height:e,maxWidth:n||Jr,maxHeight:s||Jr}}var Aa=i=>Math.round(i*10)/10;function Nh(i,t,e,n){let s=lo(i),r=Ti(s,"margin"),o=Kr(s.maxWidth,i,"clientWidth")||Jr,a=Kr(s.maxHeight,i,"clientHeight")||Jr,l=Jp(i,t,e),{width:c,height:h}=l;if(s.boxSizing==="content-box"){let u=Ti(s,"border","width"),d=Ti(s,"padding");c-=d.width+u.width,h-=d.height+u.height}return c=Math.max(0,c-r.width),h=Math.max(0,n?Math.floor(c/n):h-r.height),c=Aa(Math.min(c,o,l.maxWidth)),h=Aa(Math.min(h,a,l.maxHeight)),c&&!h&&(h=Aa(c/2)),{width:c,height:h}}function Ka(i,t,e){let n=t||1,s=Math.floor(i.height*n),r=Math.floor(i.width*n);i.height=s/n,i.width=r/n;let o=i.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${i.height}px`,o.style.width=`${i.width}px`),i.currentDevicePixelRatio!==n||o.height!==s||o.width!==r?(i.currentDevicePixelRatio=n,o.height=s,o.width=r,i.ctx.setTransform(n,0,0,n,0,0),!0):!1}var Bh=function(){let i=!1;try{let t={get passive(){return i=!0,!1}};window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}return i}();function Qa(i,t){let e=qp(i,t),n=e&&e.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}function Kn(i,t,e,n){return{x:i.x+e*(t.x-i.x),y:i.y+e*(t.y-i.y)}}function Uh(i,t,e,n){return{x:i.x+e*(t.x-i.x),y:n==="middle"?e<.5?i.y:t.y:n==="after"?e<1?i.y:t.y:e>0?t.y:i.y}}function Vh(i,t,e,n){let s={x:i.cp2x,y:i.cp2y},r={x:t.cp1x,y:t.cp1y},o=Kn(i,s,e),a=Kn(s,r,e),l=Kn(r,t,e),c=Kn(o,a,e),h=Kn(a,l,e);return Kn(c,h,e)}var ah=new Map;function jp(i,t){t=t||{};let e=i+JSON.stringify(t),n=ah.get(e);return n||(n=new Intl.NumberFormat(i,t),ah.set(e,n)),n}function fs(i,t,e){return jp(t,e).format(i)}var Kp=function(i,t){return{x(e){return i+i+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,n){return e-n},leftForLtr(e,n){return e-n}}},Qp=function(){return{x(i){return i},setWidth(i){},textAlign(i){return i},xPlus(i,t){return i+t},leftForLtr(i,t){return i}}};function Pi(i,t,e){return i?Kp(t,e):Qp()}function tl(i,t){let e,n;(t==="ltr"||t==="rtl")&&(e=i.canvas.style,n=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),i.prevTextDirection=n)}function el(i,t){t!==void 0&&(delete i.prevTextDirection,i.canvas.style.setProperty("direction",t[0],t[1]))}function Wh(i){return i==="angle"?{between:hs,compare:ep,normalize:Ee}:{between:fn,compare:(t,e)=>t-e,normalize:t=>t}}function lh({start:i,end:t,count:e,loop:n,style:s}){return{start:i%e,end:t%e,loop:n&&(t-i+1)%e===0,style:s}}function tm(i,t,e){let{property:n,start:s,end:r}=e,{between:o,normalize:a}=Wh(n),l=t.length,{start:c,end:h,loop:u}=i,d,f;if(u){for(c+=l,h+=l,d=0,f=l;d<f&&o(a(t[c%l][n]),s,r);++d)c--,h--;c%=l,h%=l}return h<c&&(h+=l),{start:c,end:h,loop:u,style:i.style}}function nl(i,t,e){if(!e)return[i];let{property:n,start:s,end:r}=e,o=t.length,{compare:a,between:l,normalize:c}=Wh(n),{start:h,end:u,loop:d,style:f}=tm(i,t,e),g=[],m=!1,p=null,_,y,M,x=()=>l(s,M,_)&&a(s,M)!==0,b=()=>a(r,_)===0||l(r,M,_),T=()=>m||x(),C=()=>!m||b();for(let v=h,A=h;v<=u;++v)y=t[v%o],!y.skip&&(_=c(y[n]),_!==M&&(m=l(_,s,r),p===null&&T()&&(p=a(_,s)===0?v:A),p!==null&&C()&&(g.push(lh({start:p,end:v,loop:d,count:o,style:f})),p=null),A=v,M=_));return p!==null&&g.push(lh({start:p,end:u,loop:d,count:o,style:f})),g}function il(i,t){let e=[],n=i.segments;for(let s=0;s<n.length;s++){let r=nl(n[s],i.points,t);r.length&&e.push(...r)}return e}function em(i,t,e,n){let s=0,r=t-1;if(e&&!n)for(;s<t&&!i[s].skip;)s++;for(;s<t&&i[s].skip;)s++;for(s%=t,e&&(r+=s);r>s&&i[r%t].skip;)r--;return r%=t,{start:s,end:r}}function nm(i,t,e,n){let s=i.length,r=[],o=t,a=i[t],l;for(l=t+1;l<=e;++l){let c=i[l%s];c.skip||c.stop?a.skip||(n=!1,r.push({start:t%s,end:(l-1)%s,loop:n}),t=o=c.stop?l:null):(o=l,a.skip&&(t=l)),a=c}return o!==null&&r.push({start:t%s,end:o%s,loop:n}),r}function Hh(i,t){let e=i.points,n=i.options.spanGaps,s=e.length;if(!s)return[];let r=!!i._loop,{start:o,end:a}=em(e,s,r,n);if(n===!0)return ch(i,[{start:o,end:a,loop:r}],e,t);let l=a<o?a+s:a,c=!!i._fullLoop&&o===0&&a===s-1;return ch(i,nm(e,o,l,c),e,t)}function ch(i,t,e,n){return!n||!n.setContext||!e?t:im(i,t,e,n)}function im(i,t,e,n){let s=i._chart.getContext(),r=hh(i.options),{_datasetIndex:o,options:{spanGaps:a}}=i,l=e.length,c=[],h=r,u=t[0].start,d=u;function f(g,m,p,_){let y=a?-1:1;if(g!==m){for(g+=l;e[g%l].skip;)g-=y;for(;e[m%l].skip;)m+=y;g%l!==m%l&&(c.push({start:g%l,end:m%l,loop:p,style:_}),h=_,u=m%l)}}for(let g of t){u=a?u:g.start;let m=e[u%l],p;for(d=u+1;d<=g.end;d++){let _=e[d%l];p=hh(n.setContext(kn(s,{type:"segment",p0:m,p1:_,p0DataIndex:(d-1)%l,p1DataIndex:d%l,datasetIndex:o}))),sm(p,h)&&f(u,d-1,g.loop,h),m=_,h=p}u<d-1&&f(u,d-1,g.loop,h)}return c}function hh(i){return{backgroundColor:i.backgroundColor,borderCapStyle:i.borderCapStyle,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderJoinStyle:i.borderJoinStyle,borderWidth:i.borderWidth,borderColor:i.borderColor}}function sm(i,t){return t&&JSON.stringify(i)!==JSON.stringify(t)}var fl=class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,n,s){let r=e.listeners[s],o=e.duration;r.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(n-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=Fa.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((n,s)=>{if(!n.running||!n.items.length)return;let r=n.items,o=r.length-1,a=!1,l;for(;o>=0;--o)l=r[o],l._active?(l._total>n.duration&&(n.duration=l._total),l.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(s.draw(),this._notify(s,n,t,"progress")),r.length||(n.running=!1,this._notify(s,n,t,"complete"),n.initial=!1),e+=r.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){let e=this._charts,n=e.get(t);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,n)),n}listen(t,e,n){this._getAnims(t).listeners[e].push(n)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){let e=this._charts.get(t);!e||(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((n,s)=>Math.max(n,s._duration),0),this._refresh())}running(t){if(!this._running)return!1;let e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){let e=this._charts.get(t);if(!e||!e.items.length)return;let n=e.items,s=n.length-1;for(;s>=0;--s)n[s].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}},On=new fl,Gh="transparent",rm={boolean(i,t,e){return e>.5?t:i},color(i,t,e){let n=Ha(i||Gh),s=n.valid&&Ha(t||Gh);return s&&s.valid?s.mix(n,e).hexString():t},number(i,t,e){return i+(t-i)*e}},pl=class{constructor(t,e,n,s){let r=e[n];s=ds([t.to,s,r,t.from]);let o=ds([t.from,r,s]);this._active=!0,this._fn=t.fn||rm[t.type||typeof o],this._easing=is[t.easing]||is.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=n,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(t,e,n){if(this._active){this._notify(!1);let s=this._target[this._prop],r=n-this._start,o=this._duration-r;this._start=n,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=ds([t.to,e,s,t.from]),this._from=ds([t.from,s,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){let e=t-this._start,n=this._duration,s=this._prop,r=this._from,o=this._loop,a=this._to,l;if(this._active=r!==a&&(o||e<n),!this._active){this._target[s]=a,this._notify(!0);return}if(e<0){this._target[s]=r;return}l=e/n%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[s]=this._fn(r,a,l)}wait(){let t=this._promises||(this._promises=[]);return new Promise((e,n)=>{t.push({res:e,rej:n})})}_notify(t){let e=t?"res":"rej",n=this._promises||[];for(let s=0;s<n.length;s++)n[s][e]()}},om=["x","y","borderWidth","radius","tension"],am=["color","borderColor","backgroundColor"];Lt.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0});var lm=Object.keys(Lt.animation);Lt.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:i=>i!=="onProgress"&&i!=="onComplete"&&i!=="fn"});Lt.set("animations",{colors:{type:"color",properties:am},numbers:{type:"number",properties:om}});Lt.describe("animations",{_fallback:"animation"});Lt.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:i=>i|0}}}});var _o=class{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!Pt(t))return;let e=this._properties;Object.getOwnPropertyNames(t).forEach(n=>{let s=t[n];if(!Pt(s))return;let r={};for(let o of lm)r[o]=s[o];(Xt(s.properties)&&s.properties||[n]).forEach(o=>{(o===n||!e.has(o))&&e.set(o,r)})})}_animateOptions(t,e){let n=e.options,s=hm(t,n);if(!s)return[];let r=this._createAnimations(s,n);return n.$shared&&cm(t.options.$animations,n).then(()=>{t.options=n},()=>{}),r}_createAnimations(t,e){let n=this._properties,s=[],r=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now(),l;for(l=o.length-1;l>=0;--l){let c=o[l];if(c.charAt(0)==="$")continue;if(c==="options"){s.push(...this._animateOptions(t,e));continue}let h=e[c],u=r[c],d=n.get(c);if(u)if(d&&u.active()){u.update(d,h,a);continue}else u.cancel();if(!d||!d.duration){t[c]=h;continue}r[c]=u=new pl(d,t,c,h),s.push(u)}return s}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}let n=this._createAnimations(t,e);if(n.length)return On.add(this._chart,n),!0}};function cm(i,t){let e=[],n=Object.keys(t);for(let s=0;s<n.length;s++){let r=i[n[s]];r&&r.active()&&e.push(r.wait())}return Promise.all(e)}function hm(i,t){if(!t)return;let e=i.options;if(!e){i.options=t;return}return e.$shared&&(i.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function Xh(i,t){let e=i&&i.options||{},n=e.reverse,s=e.min===void 0?t:0,r=e.max===void 0?t:0;return{start:n?r:s,end:n?s:r}}function um(i,t,e){if(e===!1)return!1;let n=Xh(i,e),s=Xh(t,e);return{top:s.end,right:n.end,bottom:s.start,left:n.start}}function dm(i){let t,e,n,s;return Pt(i)?(t=i.top,e=i.right,n=i.bottom,s=i.left):t=e=n=s=i,{top:t,right:e,bottom:n,left:s,disabled:i===!1}}function Ou(i,t){let e=[],n=i._getSortedDatasetMetas(t),s,r;for(s=0,r=n.length;s<r;++s)e.push(n[s].index);return e}function qh(i,t,e,n={}){let s=i.keys,r=n.mode==="single",o,a,l,c;if(t!==null){for(o=0,a=s.length;o<a;++o){if(l=+s[o],l===e){if(n.all)continue;break}c=i.values[l],te(c)&&(r||t===0||je(t)===je(c))&&(t+=c)}return t}}function fm(i){let t=Object.keys(i),e=new Array(t.length),n,s,r;for(n=0,s=t.length;n<s;++n)r=t[n],e[n]={x:r,y:i[r]};return e}function Yh(i,t){let e=i&&i.options.stacked;return e||e===void 0&&t.stack!==void 0}function pm(i,t,e){return`${i.id}.${t.id}.${e.stack||e.type}`}function mm(i){let{min:t,max:e,minDefined:n,maxDefined:s}=i.getUserBounds();return{min:n?t:Number.NEGATIVE_INFINITY,max:s?e:Number.POSITIVE_INFINITY}}function gm(i,t,e){let n=i[t]||(i[t]={});return n[e]||(n[e]={})}function $h(i,t,e,n){for(let s of t.getMatchingVisibleMetas(n).reverse()){let r=i[s.index];if(e&&r>0||!e&&r<0)return s.index}return null}function Zh(i,t){let{chart:e,_cachedMeta:n}=i,s=e._stacks||(e._stacks={}),{iScale:r,vScale:o,index:a}=n,l=r.axis,c=o.axis,h=pm(r,o,n),u=t.length,d;for(let f=0;f<u;++f){let g=t[f],{[l]:m,[c]:p}=g,_=g._stacks||(g._stacks={});d=_[c]=gm(s,h,m),d[a]=p,d._top=$h(d,o,!0,n.type),d._bottom=$h(d,o,!1,n.type)}}function sl(i,t){let e=i.scales;return Object.keys(e).filter(n=>e[n].axis===t).shift()}function _m(i,t){return kn(i,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function xm(i,t,e){return kn(i,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function ur(i,t){let e=i.controller.index,n=i.vScale&&i.vScale.axis;if(!!n){t=t||i._parsed;for(let s of t){let r=s._stacks;if(!r||r[n]===void 0||r[n][e]===void 0)return;delete r[n][e]}}}var rl=i=>i==="reset"||i==="none",Jh=(i,t)=>t?i:Object.assign({},i),ym=(i,t,e)=>i&&!t.hidden&&t._stacked&&{keys:Ou(e,!0),values:null},Oe=class{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.initialize()}initialize(){let t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Yh(t.vScale,t),this.addElements()}updateIndex(t){this.index!==t&&ur(this._cachedMeta),this.index=t}linkScales(){let t=this.chart,e=this._cachedMeta,n=this.getDataset(),s=(u,d,f,g)=>u==="x"?d:u==="r"?g:f,r=e.xAxisID=St(n.xAxisID,sl(t,"x")),o=e.yAxisID=St(n.yAxisID,sl(t,"y")),a=e.rAxisID=St(n.rAxisID,sl(t,"r")),l=e.indexAxis,c=e.iAxisID=s(l,r,o,a),h=e.vAxisID=s(l,o,r,a);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(c),e.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){let e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){let t=this._cachedMeta;this._data&&ka(this._data,this),t._stacked&&ur(t)}_dataCheck(){let t=this.getDataset(),e=t.data||(t.data=[]),n=this._data;if(Pt(e))this._data=fm(e);else if(n!==e){if(n){ka(n,this);let s=this._cachedMeta;ur(s),s._parsed=[]}e&&Object.isExtensible(e)&&bh(e,this),this._syncList=[],this._data=e}}addElements(){let t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){let e=this._cachedMeta,n=this.getDataset(),s=!1;this._dataCheck();let r=e._stacked;e._stacked=Yh(e.vScale,e),e.stack!==n.stack&&(s=!0,ur(e),e.stack=n.stack),this._resyncElements(t),(s||r!==e._stacked)&&Zh(this,e._parsed)}configure(){let t=this.chart.config,e=t.datasetScopeKeys(this._type),n=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){let{_cachedMeta:n,_data:s}=this,{iScale:r,_stacked:o}=n,a=r.axis,l=t===0&&e===s.length?!0:n._sorted,c=t>0&&n._parsed[t-1],h,u,d;if(this._parsing===!1)n._parsed=s,n._sorted=!0,d=s;else{Xt(s[t])?d=this.parseArrayData(n,s,t,e):Pt(s[t])?d=this.parseObjectData(n,s,t,e):d=this.parsePrimitiveData(n,s,t,e);let f=()=>u[a]===null||c&&u[a]<c[a];for(h=0;h<e;++h)n._parsed[h+t]=u=d[h],l&&(f()&&(l=!1),c=u);n._sorted=l}o&&Zh(this,d)}parsePrimitiveData(t,e,n,s){let{iScale:r,vScale:o}=t,a=r.axis,l=o.axis,c=r.getLabels(),h=r===o,u=new Array(s),d,f,g;for(d=0,f=s;d<f;++d)g=d+n,u[d]={[a]:h||r.parse(c[g],g),[l]:o.parse(e[g],g)};return u}parseArrayData(t,e,n,s){let{xScale:r,yScale:o}=t,a=new Array(s),l,c,h,u;for(l=0,c=s;l<c;++l)h=l+n,u=e[h],a[l]={x:r.parse(u[0],h),y:o.parse(u[1],h)};return a}parseObjectData(t,e,n,s){let{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(s),h,u,d,f;for(h=0,u=s;h<u;++h)d=h+n,f=e[d],c[h]={x:r.parse(In(f,a),d),y:o.parse(In(f,l),d)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,n){let s=this.chart,r=this._cachedMeta,o=e[t.axis],a={keys:Ou(s,!0),values:e._stacks[t.axis]};return qh(a,o,r.index,{mode:n})}updateRangeFromParsed(t,e,n,s){let r=n[e.axis],o=r===null?NaN:r,a=s&&n._stacks[e.axis];s&&a&&(s.values=a,o=qh(s,r,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){let n=this._cachedMeta,s=n._parsed,r=n._sorted&&t===n.iScale,o=s.length,a=this._getOtherScale(t),l=ym(e,n,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:u}=mm(a),d,f;function g(){f=s[d];let m=f[a.axis];return!te(f[t.axis])||h>m||u<m}for(d=0;d<o&&!(!g()&&(this.updateRangeFromParsed(c,t,f,l),r));++d);if(r){for(d=o-1;d>=0;--d)if(!g()){this.updateRangeFromParsed(c,t,f,l);break}}return c}getAllParsedValues(t){let e=this._cachedMeta._parsed,n=[],s,r,o;for(s=0,r=e.length;s<r;++s)o=e[s][t.axis],te(o)&&n.push(o);return n}getMaxOverflow(){return!1}getLabelAndValue(t){let e=this._cachedMeta,n=e.iScale,s=e.vScale,r=this.getParsed(t);return{label:n?""+n.getLabelForValue(r[n.axis]):"",value:s?""+s.getLabelForValue(r[s.axis]):""}}_update(t){let e=this._cachedMeta;this.update(t||"default"),e._clip=dm(St(this.options.clip,um(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){let t=this._ctx,e=this.chart,n=this._cachedMeta,s=n.data||[],r=e.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||s.length-a,c=this.options.drawActiveElementsOnTop,h;for(n.dataset&&n.dataset.draw(t,r,a,l),h=a;h<a+l;++h){let u=s[h];u.hidden||(u.active&&c?o.push(u):u.draw(t,r))}for(h=0;h<o.length;++h)o[h].draw(t,r)}getStyle(t,e){let n=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(t||0,n)}getContext(t,e,n){let s=this.getDataset(),r;if(t>=0&&t<this._cachedMeta.data.length){let o=this._cachedMeta.data[t];r=o.$context||(o.$context=xm(this.getContext(),t,o)),r.parsed=this.getParsed(t),r.raw=s.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=_m(this.chart.getContext(),this.index)),r.dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=n,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",n){let s=e==="active",r=this._cachedDataOpts,o=t+"-"+e,a=r[o],l=this.enableOptionSharing&&De(n);if(a)return Jh(a,l);let c=this.chart.config,h=c.datasetElementScopeKeys(this._type,t),u=s?[`${t}Hover`,"hover",t,""]:[t,""],d=c.getOptionScopes(this.getDataset(),h),f=Object.keys(Lt.elements[t]),g=()=>this.getContext(n,s),m=c.resolveNamedOptions(d,f,g,u);return m.$shared&&(m.$shared=l,r[o]=Object.freeze(Jh(m,l))),m}_resolveAnimations(t,e,n){let s=this.chart,r=this._cachedDataOpts,o=`animation-${e}`,a=r[o];if(a)return a;let l;if(s.options.animation!==!1){let h=this.chart.config,u=h.datasetAnimationScopeKeys(this._type,e),d=h.getOptionScopes(this.getDataset(),u);l=h.createResolver(d,this.getContext(t,n,e))}let c=new _o(s,l&&l.animations);return l&&l._cacheable&&(r[o]=Object.freeze(c)),c}getSharedOptions(t){if(!!t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||rl(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){let n=this.resolveDataElementOptions(t,e),s=this._sharedOptions,r=this.getSharedOptions(n),o=this.includeOptions(e,r)||r!==s;return this.updateSharedOptions(r,e,n),{sharedOptions:r,includeOptions:o}}updateElement(t,e,n,s){rl(s)?Object.assign(t,n):this._resolveAnimations(e,s).update(t,n)}updateSharedOptions(t,e,n){t&&!rl(e)&&this._resolveAnimations(void 0,e).update(t,n)}_setStyle(t,e,n,s){t.active=s;let r=this.getStyle(e,s);this._resolveAnimations(e,n,s).update(t,{options:!s&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,n){this._setStyle(t,n,"active",!1)}setHoverStyle(t,e,n){this._setStyle(t,n,"active",!0)}_removeDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){let e=this._data,n=this._cachedMeta.data;for(let[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];let s=n.length,r=e.length,o=Math.min(r,s);o&&this.parse(0,o),r>s?this._insertElements(s,r-s,t):r<s&&this._removeElements(r,s-r)}_insertElements(t,e,n=!0){let s=this._cachedMeta,r=s.data,o=t+e,a,l=c=>{for(c.length+=e,a=c.length-1;a>=o;a--)c[a]=c[a-e]};for(l(r),a=t;a<o;++a)r[a]=new this.dataElementType;this._parsing&&l(s._parsed),this.parse(t,e),n&&this.updateElements(r,t,e,"reset")}updateElements(t,e,n,s){}_removeElements(t,e){let n=this._cachedMeta;if(this._parsing){let s=n._parsed.splice(t,e);n._stacked&&ur(n,s)}n.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{let[e,n,s]=t;this[e](n,s)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){let t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);let n=arguments.length-2;n&&this._sync(["_insertElements",t,n])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}};Oe.defaults={};Oe.prototype.datasetElementType=null;Oe.prototype.dataElementType=null;function vm(i,t){if(!i._cache.$bar){let e=i.getMatchingVisibleMetas(t),n=[];for(let s=0,r=e.length;s<r;s++)n=n.concat(e[s].controller.getAllParsedValues(i));i._cache.$bar=Oa(n.sort((s,r)=>s-r))}return i._cache.$bar}function bm(i){let t=i.iScale,e=vm(t,i.type),n=t._length,s,r,o,a,l=()=>{o===32767||o===-32768||(De(a)&&(n=Math.min(n,Math.abs(o-a)||n)),a=o)};for(s=0,r=e.length;s<r;++s)o=t.getPixelForValue(e[s]),l();for(a=void 0,s=0,r=t.ticks.length;s<r;++s)o=t.getPixelForTick(s),l();return n}function Mm(i,t,e,n){let s=e.barThickness,r,o;return Dt(s)?(r=t.min*e.categoryPercentage,o=e.barPercentage):(r=s*n,o=1),{chunk:r/n,ratio:o,start:t.pixels[i]-r/2}}function wm(i,t,e,n){let s=t.pixels,r=s[i],o=i>0?s[i-1]:null,a=i<s.length-1?s[i+1]:null,l=e.categoryPercentage;o===null&&(o=r-(a===null?t.end-t.start:a-r)),a===null&&(a=r+r-o);let c=r-(r-Math.min(o,a))/2*l;return{chunk:Math.abs(a-o)/2*l/n,ratio:e.barPercentage,start:c}}function Sm(i,t,e,n){let s=e.parse(i[0],n),r=e.parse(i[1],n),o=Math.min(s,r),a=Math.max(s,r),l=o,c=a;Math.abs(o)>Math.abs(a)&&(l=a,c=o),t[e.axis]=c,t._custom={barStart:l,barEnd:c,start:s,end:r,min:o,max:a}}function Fu(i,t,e,n){return Xt(i)?Sm(i,t,e,n):t[e.axis]=e.parse(i,n),t}function jh(i,t,e,n){let s=i.iScale,r=i.vScale,o=s.getLabels(),a=s===r,l=[],c,h,u,d;for(c=e,h=e+n;c<h;++c)d=t[c],u={},u[s.axis]=a||s.parse(o[c],c),l.push(Fu(d,u,r,c));return l}function ol(i){return i&&i.barStart!==void 0&&i.barEnd!==void 0}function Am(i,t,e){return i!==0?je(i):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function Tm(i){let t,e,n,s,r;return i.horizontal?(t=i.base>i.x,e="left",n="right"):(t=i.base<i.y,e="bottom",n="top"),t?(s="end",r="start"):(s="start",r="end"),{start:e,end:n,reverse:t,top:s,bottom:r}}function Em(i,t,e,n){let s=t.borderSkipped,r={};if(!s){i.borderSkipped=r;return}if(s===!0){i.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}let{start:o,end:a,reverse:l,top:c,bottom:h}=Tm(i);s==="middle"&&e&&(i.enableBorderRadius=!0,(e._top||0)===n?s=c:(e._bottom||0)===n?s=h:(r[Kh(h,o,a,l)]=!0,s=c)),r[Kh(s,o,a,l)]=!0,i.borderSkipped=r}function Kh(i,t,e,n){return n?(i=Cm(i,t,e),i=Qh(i,e,t)):i=Qh(i,t,e),i}function Cm(i,t,e){return i===t?e:i===e?t:i}function Qh(i,t,e){return i==="start"?t:i==="end"?e:i}function Pm(i,{inflateAmount:t},e){i.inflateAmount=t==="auto"?e===1?.33:0:t}var gs=class extends Oe{parsePrimitiveData(t,e,n,s){return jh(t,e,n,s)}parseArrayData(t,e,n,s){return jh(t,e,n,s)}parseObjectData(t,e,n,s){let{iScale:r,vScale:o}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=r.axis==="x"?a:l,h=o.axis==="x"?a:l,u=[],d,f,g,m;for(d=n,f=n+s;d<f;++d)m=e[d],g={},g[r.axis]=r.parse(In(m,c),d),u.push(Fu(In(m,h),g,o,d));return u}updateRangeFromParsed(t,e,n,s){super.updateRangeFromParsed(t,e,n,s);let r=n._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){let e=this._cachedMeta,{iScale:n,vScale:s}=e,r=this.getParsed(t),o=r._custom,a=ol(o)?"["+o.start+", "+o.end+"]":""+s.getLabelForValue(r[s.axis]);return{label:""+n.getLabelForValue(r[n.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();let t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){let e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,n,s){let r=s==="reset",{index:o,_cachedMeta:{vScale:a}}=this,l=a.getBasePixel(),c=a.isHorizontal(),h=this._getRuler(),{sharedOptions:u,includeOptions:d}=this._getSharedOptions(e,s);for(let f=e;f<e+n;f++){let g=this.getParsed(f),m=r||Dt(g[a.axis])?{base:l,head:l}:this._calculateBarValuePixels(f),p=this._calculateBarIndexPixels(f,h),_=(g._stacks||{})[a.axis],y={horizontal:c,base:m.base,enableBorderRadius:!_||ol(g._custom)||o===_._top||o===_._bottom,x:c?m.head:p.center,y:c?p.center:m.head,height:c?p.size:Math.abs(m.size),width:c?Math.abs(m.size):p.size};d&&(y.options=u||this.resolveDataElementOptions(f,t[f].active?"active":s));let M=y.options||t[f].options;Em(y,M,_,o),Pm(y,M,h.ratio),this.updateElement(t[f],f,y,s)}}_getStacks(t,e){let{iScale:n}=this._cachedMeta,s=n.getMatchingVisibleMetas(this._type).filter(l=>l.controller.options.grouped),r=n.options.stacked,o=[],a=l=>{let c=l.controller.getParsed(e),h=c&&c[l.vScale.axis];if(Dt(h)||isNaN(h))return!0};for(let l of s)if(!(e!==void 0&&a(l))&&((r===!1||o.indexOf(l.stack)===-1||r===void 0&&l.stack===void 0)&&o.push(l.stack),l.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,e,n){let s=this._getStacks(t,n),r=e!==void 0?s.indexOf(e):-1;return r===-1?s.length-1:r}_getRuler(){let t=this.options,e=this._cachedMeta,n=e.iScale,s=[],r,o;for(r=0,o=e.data.length;r<o;++r)s.push(n.getPixelForValue(this.getParsed(r)[n.axis],r));let a=t.barThickness;return{min:a||bm(e),pixels:s,start:n._startPixel,end:n._endPixel,stackCount:this._getStackCount(),scale:n,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){let{_cachedMeta:{vScale:e,_stacked:n},options:{base:s,minBarLength:r}}=this,o=s||0,a=this.getParsed(t),l=a._custom,c=ol(l),h=a[e.axis],u=0,d=n?this.applyStack(e,a,n):h,f,g;d!==h&&(u=d-h,d=h),c&&(h=l.barStart,d=l.barEnd-l.barStart,h!==0&&je(h)!==je(l.barEnd)&&(u=0),u+=h);let m=!Dt(s)&&!c?s:u,p=e.getPixelForValue(m);if(this.chart.getDataVisibility(t)?f=e.getPixelForValue(u+d):f=p,g=f-p,Math.abs(g)<r){g=Am(g,e,o)*r,h===o&&(p-=g/2);let _=e.getPixelForDecimal(0),y=e.getPixelForDecimal(1),M=Math.min(_,y),x=Math.max(_,y);p=Math.max(Math.min(p,x),M),f=p+g}if(p===e.getPixelForValue(o)){let _=je(g)*e.getLineWidthForValue(o)/2;p+=_,g-=_}return{size:g,base:p,head:f,center:f+g/2}}_calculateBarIndexPixels(t,e){let n=e.scale,s=this.options,r=s.skipNull,o=St(s.maxBarThickness,1/0),a,l;if(e.grouped){let c=r?this._getStackCount(t):e.stackCount,h=s.barThickness==="flex"?wm(t,e,s,c):Mm(t,e,s,c),u=this._getStackIndex(this.index,this._cachedMeta.stack,r?t:void 0);a=h.start+h.chunk*u+h.chunk/2,l=Math.min(o,h.chunk*h.ratio)}else a=n.getPixelForValue(this.getParsed(t)[n.axis],t),l=Math.min(o,e.min*e.ratio);return{base:a-l/2,head:a+l/2,center:a,size:l}}draw(){let t=this._cachedMeta,e=t.vScale,n=t.data,s=n.length,r=0;for(;r<s;++r)this.getParsed(r)[e.axis]!==null&&n[r].draw(this._ctx)}};gs.id="bar";gs.defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}};gs.overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};var _s=class extends Oe{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,n,s){let r=super.parsePrimitiveData(t,e,n,s);for(let o=0;o<r.length;o++)r[o]._custom=this.resolveDataElementOptions(o+n).radius;return r}parseArrayData(t,e,n,s){let r=super.parseArrayData(t,e,n,s);for(let o=0;o<r.length;o++){let a=e[n+o];r[o]._custom=St(a[2],this.resolveDataElementOptions(o+n).radius)}return r}parseObjectData(t,e,n,s){let r=super.parseObjectData(t,e,n,s);for(let o=0;o<r.length;o++){let a=e[n+o];r[o]._custom=St(a&&a.r&&+a.r,this.resolveDataElementOptions(o+n).radius)}return r}getMaxOverflow(){let t=this._cachedMeta.data,e=0;for(let n=t.length-1;n>=0;--n)e=Math.max(e,t[n].size(this.resolveDataElementOptions(n))/2);return e>0&&e}getLabelAndValue(t){let e=this._cachedMeta,{xScale:n,yScale:s}=e,r=this.getParsed(t),o=n.getLabelForValue(r.x),a=s.getLabelForValue(r.y),l=r._custom;return{label:e.label,value:"("+o+", "+a+(l?", "+l:"")+")"}}update(t){let e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,n,s){let r=s==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:l,includeOptions:c}=this._getSharedOptions(e,s),h=o.axis,u=a.axis;for(let d=e;d<e+n;d++){let f=t[d],g=!r&&this.getParsed(d),m={},p=m[h]=r?o.getPixelForDecimal(.5):o.getPixelForValue(g[h]),_=m[u]=r?a.getBasePixel():a.getPixelForValue(g[u]);m.skip=isNaN(p)||isNaN(_),c&&(m.options=l||this.resolveDataElementOptions(d,f.active?"active":s),r&&(m.options.radius=0)),this.updateElement(f,d,m,s)}}resolveDataElementOptions(t,e){let n=this.getParsed(t),s=super.resolveDataElementOptions(t,e);s.$shared&&(s=Object.assign({},s,{$shared:!1}));let r=s.radius;return e!=="active"&&(s.radius=0),s.radius+=St(n&&n._custom,r),s}};_s.id="bubble";_s.defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}};_s.overrides={scales:{x:{type:"linear"},y:{type:"linear"}},plugins:{tooltip:{callbacks:{title(){return""}}}}};function Lm(i,t,e){let n=1,s=1,r=0,o=0;if(t<Wt){let a=i,l=a+t,c=Math.cos(a),h=Math.sin(a),u=Math.cos(l),d=Math.sin(l),f=(M,x,b)=>hs(M,a,l,!0)?1:Math.max(x,x*e,b,b*e),g=(M,x,b)=>hs(M,a,l,!0)?-1:Math.min(x,x*e,b,b*e),m=f(0,c,u),p=f(Kt,h,d),_=g(Zt,c,u),y=g(Zt+Kt,h,d);n=(m-_)/2,s=(p-y)/2,r=-(m+_)/2,o=-(p+y)/2}return{ratioX:n,ratioY:s,offsetX:r,offsetY:o}}var li=class extends Oe{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){let n=this.getDataset().data,s=this._cachedMeta;if(this._parsing===!1)s._parsed=n;else{let r=l=>+n[l];if(Pt(n[t])){let{key:l="value"}=this._parsing;r=c=>+In(n[c],l)}let o,a;for(o=t,a=t+e;o<a;++o)s._parsed[o]=r(o)}}_getRotation(){return Xe(this.options.rotation-90)}_getCircumference(){return Xe(this.options.circumference)}_getRotationExtents(){let t=Wt,e=-Wt;for(let n=0;n<this.chart.data.datasets.length;++n)if(this.chart.isDatasetVisible(n)){let s=this.chart.getDatasetMeta(n).controller,r=s._getRotation(),o=s._getCircumference();t=Math.min(t,r),e=Math.max(e,r+o)}return{rotation:t,circumference:e-t}}update(t){let e=this.chart,{chartArea:n}=e,s=this._cachedMeta,r=s.data,o=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(n.width,n.height)-o)/2,0),l=Math.min(dh(this.options.cutout,a),1),c=this._getRingWeight(this.index),{circumference:h,rotation:u}=this._getRotationExtents(),{ratioX:d,ratioY:f,offsetX:g,offsetY:m}=Lm(u,h,l),p=(n.width-o)/d,_=(n.height-o)/f,y=Math.max(Math.min(p,_)/2,0),M=Ca(this.options.radius,y),x=Math.max(M*l,0),b=(M-x)/this._getVisibleDatasetWeightTotal();this.offsetX=g*M,this.offsetY=m*M,s.total=this.calculateTotal(),this.outerRadius=M-b*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-b*c,0),this.updateElements(r,0,r.length,t)}_circumference(t,e){let n=this.options,s=this._cachedMeta,r=this._getCircumference();return e&&n.animation.animateRotate||!this.chart.getDataVisibility(t)||s._parsed[t]===null||s.data[t].hidden?0:this.calculateCircumference(s._parsed[t]*r/Wt)}updateElements(t,e,n,s){let r=s==="reset",o=this.chart,a=o.chartArea,c=o.options.animation,h=(a.left+a.right)/2,u=(a.top+a.bottom)/2,d=r&&c.animateScale,f=d?0:this.innerRadius,g=d?0:this.outerRadius,{sharedOptions:m,includeOptions:p}=this._getSharedOptions(e,s),_=this._getRotation(),y;for(y=0;y<e;++y)_+=this._circumference(y,r);for(y=e;y<e+n;++y){let M=this._circumference(y,r),x=t[y],b={x:h+this.offsetX,y:u+this.offsetY,startAngle:_,endAngle:_+M,circumference:M,outerRadius:g,innerRadius:f};p&&(b.options=m||this.resolveDataElementOptions(y,x.active?"active":s)),_+=M,this.updateElement(x,y,b,s)}}calculateTotal(){let t=this._cachedMeta,e=t.data,n=0,s;for(s=0;s<e.length;s++){let r=t._parsed[s];r!==null&&!isNaN(r)&&this.chart.getDataVisibility(s)&&!e[s].hidden&&(n+=Math.abs(r))}return n}calculateCircumference(t){let e=this._cachedMeta.total;return e>0&&!isNaN(t)?Wt*(Math.abs(t)/e):0}getLabelAndValue(t){let e=this._cachedMeta,n=this.chart,s=n.data.labels||[],r=fs(e._parsed[t],n.options.locale);return{label:s[t]||"",value:r}}getMaxBorderWidth(t){let e=0,n=this.chart,s,r,o,a,l;if(!t){for(s=0,r=n.data.datasets.length;s<r;++s)if(n.isDatasetVisible(s)){o=n.getDatasetMeta(s),t=o.data,a=o.controller;break}}if(!t)return 0;for(s=0,r=t.length;s<r;++s)l=a.resolveDataElementOptions(s),l.borderAlign!=="inner"&&(e=Math.max(e,l.borderWidth||0,l.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let n=0,s=t.length;n<s;++n){let r=this.resolveDataElementOptions(n);e=Math.max(e,r.offset||0,r.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let n=0;n<t;++n)this.chart.isDatasetVisible(n)&&(e+=this._getRingWeight(n));return e}_getRingWeight(t){return Math.max(St(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}};li.id="doughnut";li.defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"};li.descriptors={_scriptable:i=>i!=="spacing",_indexable:i=>i!=="spacing"};li.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(i){let t=i.data;if(t.labels.length&&t.datasets.length){let{labels:{pointStyle:e}}=i.legend.options;return t.labels.map((n,s)=>{let o=i.getDatasetMeta(0).controller.getStyle(s);return{text:n,fillStyle:o.backgroundColor,strokeStyle:o.borderColor,lineWidth:o.borderWidth,pointStyle:e,hidden:!i.getDataVisibility(s),index:s}})}return[]}},onClick(i,t,e){e.chart.toggleDataVisibility(t.index),e.chart.update()}},tooltip:{callbacks:{title(){return""},label(i){let t=i.label,e=": "+i.formattedValue;return Xt(t)?(t=t.slice(),t[0]+=e):t+=e,t}}}}};var xs=class extends Oe{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){let e=this._cachedMeta,{dataset:n,data:s=[],_dataset:r}=e,o=this.chart._animationsDisabled,{start:a,count:l}=Na(e,s,o);this._drawStart=a,this._drawCount=l,Ba(e)&&(a=0,l=s.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!r._decimated,n.points=s;let c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(n,void 0,{animated:!o,options:c},t),this.updateElements(s,a,l,t)}updateElements(t,e,n,s){let r=s==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:h,includeOptions:u}=this._getSharedOptions(e,s),d=o.axis,f=a.axis,{spanGaps:g,segment:m}=this.options,p=Ci(g)?g:Number.POSITIVE_INFINITY,_=this.chart._animationsDisabled||r||s==="none",y=e>0&&this.getParsed(e-1);for(let M=e;M<e+n;++M){let x=t[M],b=this.getParsed(M),T=_?x:{},C=Dt(b[f]),v=T[d]=o.getPixelForValue(b[d],M),A=T[f]=r||C?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,b,l):b[f],M);T.skip=isNaN(v)||isNaN(A)||C,T.stop=M>0&&Math.abs(b[d]-y[d])>p,m&&(T.parsed=b,T.raw=c.data[M]),u&&(T.options=h||this.resolveDataElementOptions(M,x.active?"active":s)),_||this.updateElement(x,M,T,s),y=b}}getMaxOverflow(){let t=this._cachedMeta,e=t.dataset,n=e.options&&e.options.borderWidth||0,s=t.data||[];if(!s.length)return n;let r=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(n,r,o)/2}draw(){let t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}};xs.id="line";xs.defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1};xs.overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};var ys=class extends Oe{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){let e=this._cachedMeta,n=this.chart,s=n.data.labels||[],r=fs(e._parsed[t].r,n.options.locale);return{label:s[t]||"",value:r}}parseObjectData(t,e,n,s){return Ja.bind(this)(t,e,n,s)}update(t){let e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){let t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((n,s)=>{let r=this.getParsed(s).r;!isNaN(r)&&this.chart.getDataVisibility(s)&&(r<e.min&&(e.min=r),r>e.max&&(e.max=r))}),e}_updateRadius(){let t=this.chart,e=t.chartArea,n=t.options,s=Math.min(e.right-e.left,e.bottom-e.top),r=Math.max(s/2,0),o=Math.max(n.cutoutPercentage?r/100*n.cutoutPercentage:1,0),a=(r-o)/t.getVisibleDatasetCount();this.outerRadius=r-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,n,s){let r=s==="reset",o=this.chart,l=o.options.animation,c=this._cachedMeta.rScale,h=c.xCenter,u=c.yCenter,d=c.getIndexAngle(0)-.5*Zt,f=d,g,m=360/this.countVisibleElements();for(g=0;g<e;++g)f+=this._computeAngle(g,s,m);for(g=e;g<e+n;g++){let p=t[g],_=f,y=f+this._computeAngle(g,s,m),M=o.getDataVisibility(g)?c.getDistanceFromCenterForValue(this.getParsed(g).r):0;f=y,r&&(l.animateScale&&(M=0),l.animateRotate&&(_=y=d));let x={x:h,y:u,innerRadius:0,outerRadius:M,startAngle:_,endAngle:y,options:this.resolveDataElementOptions(g,p.active?"active":s)};this.updateElement(p,g,x,s)}}countVisibleElements(){let t=this._cachedMeta,e=0;return t.data.forEach((n,s)=>{!isNaN(this.getParsed(s).r)&&this.chart.getDataVisibility(s)&&e++}),e}_computeAngle(t,e,n){return this.chart.getDataVisibility(t)?Xe(this.resolveDataElementOptions(t,e).angle||n):0}};ys.id="polarArea";ys.defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0};ys.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(i){let t=i.data;if(t.labels.length&&t.datasets.length){let{labels:{pointStyle:e}}=i.legend.options;return t.labels.map((n,s)=>{let o=i.getDatasetMeta(0).controller.getStyle(s);return{text:n,fillStyle:o.backgroundColor,strokeStyle:o.borderColor,lineWidth:o.borderWidth,pointStyle:e,hidden:!i.getDataVisibility(s),index:s}})}return[]}},onClick(i,t,e){e.chart.toggleDataVisibility(t.index),e.chart.update()}},tooltip:{callbacks:{title(){return""},label(i){return i.chart.data.labels[i.dataIndex]+": "+i.formattedValue}}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};var xr=class extends li{};xr.id="pie";xr.defaults={cutout:0,rotation:0,circumference:360,radius:"100%"};var vs=class extends Oe{getLabelAndValue(t){let e=this._cachedMeta.vScale,n=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(n[e.axis])}}parseObjectData(t,e,n,s){return Ja.bind(this)(t,e,n,s)}update(t){let e=this._cachedMeta,n=e.dataset,s=e.data||[],r=e.iScale.getLabels();if(n.points=s,t!=="resize"){let o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);let a={_loop:!0,_fullLoop:r.length===s.length,options:o};this.updateElement(n,void 0,a,t)}this.updateElements(s,0,s.length,t)}updateElements(t,e,n,s){let r=this._cachedMeta.rScale,o=s==="reset";for(let a=e;a<e+n;a++){let l=t[a],c=this.resolveDataElementOptions(a,l.active?"active":s),h=r.getPointPositionForValue(a,this.getParsed(a).r),u=o?r.xCenter:h.x,d=o?r.yCenter:h.y,f={x:u,y:d,angle:h.angle,skip:isNaN(u)||isNaN(d),options:c};this.updateElement(l,a,f,s)}}};vs.id="radar";vs.defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}};vs.overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};var Fe=class{constructor(){this.x=void 0,this.y=void 0,this.active=!1,this.options=void 0,this.$animations=void 0}tooltipPosition(t){let{x:e,y:n}=this.getProps(["x","y"],t);return{x:e,y:n}}hasValue(){return Ci(this.x)&&Ci(this.y)}getProps(t,e){let n=this.$animations;if(!e||!n)return this;let s={};return t.forEach(r=>{s[r]=n[r]&&n[r].active()?n[r]._to:this[r]}),s}};Fe.defaults={};Fe.defaultRoutes=void 0;var zu={values(i){return Xt(i)?i:""+i},numeric(i,t,e){if(i===0)return"0";let n=this.chart.options.locale,s,r=i;if(e.length>1){let c=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(c<1e-4||c>1e15)&&(s="scientific"),r=Rm(i,e)}let o=ke(Math.abs(r)),a=Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),fs(i,n,l)},logarithmic(i,t,e){if(i===0)return"0";let n=i/Math.pow(10,Math.floor(ke(i)));return n===1||n===2||n===5?zu.numeric.call(this,i,t,e):""}};function Rm(i,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&i!==Math.floor(i)&&(e=i-Math.floor(i)),e}var wo={formatters:zu};Lt.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(i,t)=>t.lineWidth,tickColor:(i,t)=>t.color,offset:!1,borderDash:[],borderDashOffset:0,borderWidth:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:wo.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}});Lt.route("scale.ticks","color","","color");Lt.route("scale.grid","color","","borderColor");Lt.route("scale.grid","borderColor","","borderColor");Lt.route("scale.title","color","","color");Lt.describe("scale",{_fallback:!1,_scriptable:i=>!i.startsWith("before")&&!i.startsWith("after")&&i!=="callback"&&i!=="parser",_indexable:i=>i!=="borderDash"&&i!=="tickBorderDash"});Lt.describe("scales",{_fallback:"scale"});Lt.describe("scale.ticks",{_scriptable:i=>i!=="backdropPadding"&&i!=="callback",_indexable:i=>i!=="backdropPadding"});function Dm(i,t){let e=i.options.ticks,n=e.maxTicksLimit||Im(i),s=e.major.enabled?Om(t):[],r=s.length,o=s[0],a=s[r-1],l=[];if(r>n)return Fm(t,l,s,r/n),l;let c=km(s,t,n);if(r>0){let h,u,d=r>1?Math.round((a-o)/(r-1)):null;for(co(t,l,c,Dt(d)?0:o-d,o),h=0,u=r-1;h<u;h++)co(t,l,c,s[h],s[h+1]);return co(t,l,c,a,Dt(d)?t.length:a+d),l}return co(t,l,c),l}function Im(i){let t=i.options.offset,e=i._tickSize(),n=i._length/e+(t?0:1),s=i._maxLength/e;return Math.floor(Math.min(n,s))}function km(i,t,e){let n=zm(i),s=t.length/e;if(!n)return Math.max(s,1);let r=mh(n);for(let o=0,a=r.length-1;o<a;o++){let l=r[o];if(l>s)return l}return Math.max(s,1)}function Om(i){let t=[],e,n;for(e=0,n=i.length;e<n;e++)i[e].major&&t.push(e);return t}function Fm(i,t,e,n){let s=0,r=e[0],o;for(n=Math.ceil(n),o=0;o<i.length;o++)o===r&&(t.push(i[o]),s++,r=e[s*n])}function co(i,t,e,n,s){let r=St(n,0),o=Math.min(St(s,i.length),i.length),a=0,l,c,h;for(e=Math.ceil(e),s&&(l=s-n,e=l/Math.floor(l/e)),h=r;h<0;)a++,h=Math.round(r+a*e);for(c=Math.max(r,0);c<o;c++)c===h&&(t.push(i[c]),a++,h=Math.round(r+a*e))}function zm(i){let t=i.length,e,n;if(t<2)return!1;for(n=i[0],e=1;e<t;++e)if(i[e]-i[e-1]!==n)return!1;return n}var Nm=i=>i==="left"?"right":i==="right"?"left":i,tu=(i,t,e)=>t==="top"||t==="left"?i[t]+e:i[t]-e;function eu(i,t){let e=[],n=i.length/t,s=i.length,r=0;for(;r<s;r+=n)e.push(i[Math.floor(r)]);return e}function Bm(i,t,e){let n=i.ticks.length,s=Math.min(t,n-1),r=i._startPixel,o=i._endPixel,a=1e-6,l=i.getPixelForTick(s),c;if(!(e&&(n===1?c=Math.max(l-r,o-l):t===0?c=(i.getPixelForTick(1)-l)/2:c=(l-i.getPixelForTick(s-1))/2,l+=s<t?c:-c,l<r-a||l>o+a)))return l}function Um(i,t){Ut(i,e=>{let n=e.gc,s=n.length/2,r;if(s>t){for(r=0;r<s;++r)delete e.data[n[r]];n.splice(0,s)}})}function dr(i){return i.drawTicks?i.tickLength:0}function nu(i,t){if(!i.display)return 0;let e=se(i.font,t),n=_e(i.padding);return(Xt(i.text)?i.text.length:1)*e.lineHeight+n.height}function Vm(i,t){return kn(i,{scale:t,type:"scale"})}function Wm(i,t,e){return kn(i,{tick:e,index:t,type:"tick"})}function Hm(i,t,e){let n=no(i);return(e&&t!=="right"||!e&&t==="right")&&(n=Nm(n)),n}function Gm(i,t,e,n){let{top:s,left:r,bottom:o,right:a,chart:l}=i,{chartArea:c,scales:h}=l,u=0,d,f,g,m=o-s,p=a-r;if(i.isHorizontal()){if(f=ge(n,r,a),Pt(e)){let _=Object.keys(e)[0],y=e[_];g=h[_].getPixelForValue(y)+m-t}else e==="center"?g=(c.bottom+c.top)/2+m-t:g=tu(i,e,t);d=a-r}else{if(Pt(e)){let _=Object.keys(e)[0],y=e[_];f=h[_].getPixelForValue(y)-p+t}else e==="center"?f=(c.left+c.right)/2-p+t:f=tu(i,e,t);g=ge(n,o,s),u=e==="left"?-Kt:Kt}return{titleX:f,titleY:g,maxWidth:d,rotation:u}}var zn=class extends Fe{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:n,_suggestedMax:s}=this;return t=Ie(t,Number.POSITIVE_INFINITY),e=Ie(e,Number.NEGATIVE_INFINITY),n=Ie(n,Number.POSITIVE_INFINITY),s=Ie(s,Number.NEGATIVE_INFINITY),{min:Ie(t,n),max:Ie(e,s),minDefined:te(t),maxDefined:te(e)}}getMinMax(t){let{min:e,max:n,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:e,max:n};let a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)o=a[l].controller.getMinMax(this,t),s||(e=Math.min(e,o.min)),r||(n=Math.max(n,o.max));return e=r&&e>n?n:e,n=s&&e>n?e:n,{min:Ie(e,Ie(n,e)),max:Ie(n,Ie(e,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){qt(this.options.beforeUpdate,[this])}update(t,e,n){let{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Dh(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let l=a<this.ticks.length;this._convertTicksToLabels(l?eu(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=Dm(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,n;this.isHorizontal()?(e=this.left,n=this.right):(e=this.top,n=this.bottom,t=!t),this._startPixel=e,this._endPixel=n,this._reversePixels=t,this._length=n-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){qt(this.options.afterUpdate,[this])}beforeSetDimensions(){qt(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){qt(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),qt(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){qt(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){let e=this.options.ticks,n,s,r;for(n=0,s=t.length;n<s;n++)r=t[n],r.label=qt(e.callback,[r.value,n,t],this)}afterTickToLabelConversion(){qt(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){qt(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let t=this.options,e=t.ticks,n=this.ticks.length,s=e.minRotation||0,r=e.maxRotation,o=s,a,l,c;if(!this._isVisible()||!e.display||s>=r||n<=1||!this.isHorizontal()){this.labelRotation=s;return}let h=this._getLabelSizes(),u=h.widest.width,d=h.highest.height,f=oe(this.chart.width-u,0,this.maxWidth);a=t.offset?this.maxWidth/n:f/(n-1),u+6>a&&(a=f/(n-(t.offset?.5:1)),l=this.maxHeight-dr(t.grid)-e.padding-nu(t.title,this.chart.options.font),c=Math.sqrt(u*u+d*d),o=to(Math.min(Math.asin(oe((h.highest.height+6)/a,-1,1)),Math.asin(oe(l/c,-1,1))-Math.asin(oe(d/c,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){qt(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){qt(this.options.beforeFit,[this])}fit(){let t={width:0,height:0},{chart:e,options:{ticks:n,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){let l=nu(s,e.options.font);if(a?(t.width=this.maxWidth,t.height=dr(r)+l):(t.height=this.maxHeight,t.width=dr(r)+l),n.display&&this.ticks.length){let{first:c,last:h,widest:u,highest:d}=this._getLabelSizes(),f=n.padding*2,g=Xe(this.labelRotation),m=Math.cos(g),p=Math.sin(g);if(a){let _=n.mirror?0:p*u.width+m*d.height;t.height=Math.min(this.maxHeight,t.height+_+f)}else{let _=n.mirror?0:m*u.width+p*d.height;t.width=Math.min(this.maxWidth,t.width+_+f)}this._calculatePadding(c,h,p,m)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,n,s){let{ticks:{align:r,padding:o},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){let h=this.getPixelForTick(0)-this.left,u=this.right-this.getPixelForTick(this.ticks.length-1),d=0,f=0;l?c?(d=s*t.width,f=n*e.height):(d=n*t.height,f=s*e.width):r==="start"?f=e.width:r==="end"?d=t.width:r!=="inner"&&(d=t.width/2,f=e.width/2),this.paddingLeft=Math.max((d-h+o)*this.width/(this.width-h),0),this.paddingRight=Math.max((f-u+o)*this.width/(this.width-u),0)}else{let h=e.height/2,u=t.height/2;r==="start"?(h=0,u=t.height):r==="end"&&(h=e.height,u=0),this.paddingTop=h+o,this.paddingBottom=u+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){qt(this.options.afterFit,[this])}isHorizontal(){let{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,n;for(e=0,n=t.length;e<n;e++)Dt(t[e].label)&&(t.splice(e,1),n--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){let e=this.options.ticks.sampleSize,n=this.ticks;e<n.length&&(n=eu(n,e)),this._labelSizes=t=this._computeLabelSizes(n,n.length)}return t}_computeLabelSizes(t,e){let{ctx:n,_longestTextCache:s}=this,r=[],o=[],a=0,l=0,c,h,u,d,f,g,m,p,_,y,M;for(c=0;c<e;++c){if(d=t[c].label,f=this._resolveTickFontOptions(c),n.font=g=f.string,m=s[g]=s[g]||{data:{},gc:[]},p=f.lineHeight,_=y=0,!Dt(d)&&!Xt(d))_=or(n,m.data,m.gc,_,d),y=p;else if(Xt(d))for(h=0,u=d.length;h<u;++h)M=d[h],!Dt(M)&&!Xt(M)&&(_=or(n,m.data,m.gc,_,M),y+=p);r.push(_),o.push(y),a=Math.max(_,a),l=Math.max(y,l)}Um(s,e);let x=r.indexOf(a),b=o.indexOf(l),T=C=>({width:r[C]||0,height:o[C]||0});return{first:T(0),last:T(e-1),widest:T(x),highest:T(b),widths:r,heights:o}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);let e=this._startPixel+t*this._length;return _h(this._alignToPixels?ni(this.chart,e,0):e)}getDecimalForPixel(t){let e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){let e=this.ticks||[];if(t>=0&&t<e.length){let n=e[t];return n.$context||(n.$context=Wm(this.getContext(),t,n))}return this.$context||(this.$context=Vm(this.chart.getContext(),this))}_tickSize(){let t=this.options.ticks,e=Xe(this.labelRotation),n=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,l=r?r.highest.height+o:0;return this.isHorizontal()?l*n>a*s?a/n:l/s:l*s<a*n?l/n:a/s}_isVisible(){let t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){let e=this.axis,n=this.chart,s=this.options,{grid:r,position:o}=s,a=r.offset,l=this.isHorizontal(),h=this.ticks.length+(a?1:0),u=dr(r),d=[],f=r.setContext(this.getContext()),g=f.drawBorder?f.borderWidth:0,m=g/2,p=function(O){return ni(n,O,g)},_,y,M,x,b,T,C,v,A,L,B,$;if(o==="top")_=p(this.bottom),T=this.bottom-u,v=_-m,L=p(t.top)+m,$=t.bottom;else if(o==="bottom")_=p(this.top),L=t.top,$=p(t.bottom)-m,T=_+m,v=this.top+u;else if(o==="left")_=p(this.right),b=this.right-u,C=_-m,A=p(t.left)+m,B=t.right;else if(o==="right")_=p(this.left),A=t.left,B=p(t.right)-m,b=_+m,C=this.left+u;else if(e==="x"){if(o==="center")_=p((t.top+t.bottom)/2+.5);else if(Pt(o)){let O=Object.keys(o)[0],X=o[O];_=p(this.chart.scales[O].getPixelForValue(X))}L=t.top,$=t.bottom,T=_+m,v=T+u}else if(e==="y"){if(o==="center")_=p((t.left+t.right)/2);else if(Pt(o)){let O=Object.keys(o)[0],X=o[O];_=p(this.chart.scales[O].getPixelForValue(X))}b=_-m,C=b-u,A=t.left,B=t.right}let N=St(s.ticks.maxTicksLimit,h),D=Math.max(1,Math.ceil(h/N));for(y=0;y<h;y+=D){let O=r.setContext(this.getContext(y)),X=O.lineWidth,Z=O.color,H=O.borderDash||[],k=O.borderDashOffset,z=O.tickWidth,Q=O.tickColor,J=O.tickBorderDash||[],tt=O.tickBorderDashOffset;M=Bm(this,y,a),M!==void 0&&(x=ni(n,M,X),l?b=C=A=B=x:T=v=L=$=x,d.push({tx1:b,ty1:T,tx2:C,ty2:v,x1:A,y1:L,x2:B,y2:$,width:X,color:Z,borderDash:H,borderDashOffset:k,tickWidth:z,tickColor:Q,tickBorderDash:J,tickBorderDashOffset:tt}))}return this._ticksLength=h,this._borderValue=_,d}_computeLabelItems(t){let e=this.axis,n=this.options,{position:s,ticks:r}=n,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:h,mirror:u}=r,d=dr(n.grid),f=d+h,g=u?-h:f,m=-Xe(this.labelRotation),p=[],_,y,M,x,b,T,C,v,A,L,B,$,N="middle";if(s==="top")T=this.bottom-g,C=this._getXAxisLabelAlignment();else if(s==="bottom")T=this.top+g,C=this._getXAxisLabelAlignment();else if(s==="left"){let O=this._getYAxisLabelAlignment(d);C=O.textAlign,b=O.x}else if(s==="right"){let O=this._getYAxisLabelAlignment(d);C=O.textAlign,b=O.x}else if(e==="x"){if(s==="center")T=(t.top+t.bottom)/2+f;else if(Pt(s)){let O=Object.keys(s)[0],X=s[O];T=this.chart.scales[O].getPixelForValue(X)+f}C=this._getXAxisLabelAlignment()}else if(e==="y"){if(s==="center")b=(t.left+t.right)/2-f;else if(Pt(s)){let O=Object.keys(s)[0],X=s[O];b=this.chart.scales[O].getPixelForValue(X)}C=this._getYAxisLabelAlignment(d).textAlign}e==="y"&&(l==="start"?N="top":l==="end"&&(N="bottom"));let D=this._getLabelSizes();for(_=0,y=a.length;_<y;++_){M=a[_],x=M.label;let O=r.setContext(this.getContext(_));v=this.getPixelForTick(_)+r.labelOffset,A=this._resolveTickFontOptions(_),L=A.lineHeight,B=Xt(x)?x.length:1;let X=B/2,Z=O.color,H=O.textStrokeColor,k=O.textStrokeWidth,z=C;o?(b=v,C==="inner"&&(_===y-1?z=this.options.reverse?"left":"right":_===0?z=this.options.reverse?"right":"left":z="center"),s==="top"?c==="near"||m!==0?$=-B*L+L/2:c==="center"?$=-D.highest.height/2-X*L+L:$=-D.highest.height+L/2:c==="near"||m!==0?$=L/2:c==="center"?$=D.highest.height/2-X*L:$=D.highest.height-B*L,u&&($*=-1)):(T=v,$=(1-B)*L/2);let Q;if(O.showLabelBackdrop){let J=_e(O.backdropPadding),tt=D.heights[_],lt=D.widths[_],yt=T+$-J.top,q=b-J.left;switch(N){case"middle":yt-=tt/2;break;case"bottom":yt-=tt;break}switch(C){case"center":q-=lt/2;break;case"right":q-=lt;break}Q={left:q,top:yt,width:lt+J.width,height:tt+J.height,color:O.backdropColor}}p.push({rotation:m,label:x,font:A,color:Z,strokeColor:H,strokeWidth:k,textOffset:$,textAlign:z,textBaseline:N,translation:[b,T],backdrop:Q})}return p}_getXAxisLabelAlignment(){let{position:t,ticks:e}=this.options;if(-Xe(this.labelRotation))return t==="top"?"left":"right";let s="center";return e.align==="start"?s="left":e.align==="end"?s="right":e.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(t){let{position:e,ticks:{crossAlign:n,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,l=o.widest.width,c,h;return e==="left"?s?(h=this.right+r,n==="near"?c="left":n==="center"?(c="center",h+=l/2):(c="right",h+=l)):(h=this.right-a,n==="near"?c="right":n==="center"?(c="center",h-=l/2):(c="left",h=this.left)):e==="right"?s?(h=this.left+r,n==="near"?c="right":n==="center"?(c="center",h-=l/2):(c="left",h-=l)):(h=this.left+a,n==="near"?c="left":n==="center"?(c="center",h+=l/2):(c="right",h=this.right)):c="right",{textAlign:c,x:h}}_computeLabelArea(){if(this.options.ticks.mirror)return;let t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){let{ctx:t,options:{backgroundColor:e},left:n,top:s,width:r,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(n,s,r,o),t.restore())}getLineWidthForValue(t){let e=this.options.grid;if(!this._isVisible()||!e.display)return 0;let s=this.ticks.findIndex(r=>r.value===t);return s>=0?e.setContext(this.getContext(s)).lineWidth:0}drawGrid(t){let e=this.options.grid,n=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t)),r,o,a=(l,c,h)=>{!h.width||!h.color||(n.save(),n.lineWidth=h.width,n.strokeStyle=h.color,n.setLineDash(h.borderDash||[]),n.lineDashOffset=h.borderDashOffset,n.beginPath(),n.moveTo(l.x,l.y),n.lineTo(c.x,c.y),n.stroke(),n.restore())};if(e.display)for(r=0,o=s.length;r<o;++r){let l=s[r];e.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),e.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){let{chart:t,ctx:e,options:{grid:n}}=this,s=n.setContext(this.getContext()),r=n.drawBorder?s.borderWidth:0;if(!r)return;let o=n.setContext(this.getContext(0)).lineWidth,a=this._borderValue,l,c,h,u;this.isHorizontal()?(l=ni(t,this.left,r)-r/2,c=ni(t,this.right,o)+o/2,h=u=a):(h=ni(t,this.top,r)-r/2,u=ni(t,this.bottom,o)+o/2,l=c=a),e.save(),e.lineWidth=s.borderWidth,e.strokeStyle=s.borderColor,e.beginPath(),e.moveTo(l,h),e.lineTo(c,u),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;let n=this.ctx,s=this._computeLabelArea();s&&cr(n,s);let r=this._labelItems||(this._labelItems=this._computeLabelItems(t)),o,a;for(o=0,a=r.length;o<a;++o){let l=r[o],c=l.font,h=l.label;l.backdrop&&(n.fillStyle=l.backdrop.color,n.fillRect(l.backdrop.left,l.backdrop.top,l.backdrop.width,l.backdrop.height));let u=l.textOffset;ii(n,h,0,u,c,l)}s&&hr(n)}drawTitle(){let{ctx:t,options:{position:e,title:n,reverse:s}}=this;if(!n.display)return;let r=se(n.font),o=_e(n.padding),a=n.align,l=r.lineHeight/2;e==="bottom"||e==="center"||Pt(e)?(l+=o.bottom,Xt(n.text)&&(l+=r.lineHeight*(n.text.length-1))):l+=o.top;let{titleX:c,titleY:h,maxWidth:u,rotation:d}=Gm(this,l,e,a);ii(t,n.text,0,0,r,{color:n.color,maxWidth:u,rotation:d,textAlign:Hm(a,e,s),textBaseline:"middle",translation:[c,h]})}draw(t){!this._isVisible()||(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){let t=this.options,e=t.ticks&&t.ticks.z||0,n=St(t.grid&&t.grid.z,-1);return!this._isVisible()||this.draw!==zn.prototype.draw?[{z:e,draw:s=>{this.draw(s)}}]:[{z:n,draw:s=>{this.drawBackground(),this.drawGrid(s),this.drawTitle()}},{z:n+1,draw:()=>{this.drawBorder()}},{z:e,draw:s=>{this.drawLabels(s)}}]}getMatchingVisibleMetas(t){let e=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+"AxisID",s=[],r,o;for(r=0,o=e.length;r<o;++r){let a=e[r];a[n]===this.id&&(!t||a.type===t)&&s.push(a)}return s}_resolveTickFontOptions(t){let e=this.options.ticks.setContext(this.getContext(t));return se(e.font)}_maxDigits(){let t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}},ms=class{constructor(t,e,n){this.type=t,this.scope=e,this.override=n,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){let e=Object.getPrototypeOf(t),n;Ym(e)&&(n=this.register(e));let s=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in s||(s[r]=t,Xm(t,o,n),this.override&&Lt.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){let e=this.items,n=t.id,s=this.scope;n in e&&delete e[n],s&&n in Lt[s]&&(delete Lt[s][n],this.override&&delete ei[n])}};function Xm(i,t,e){let n=ss(Object.create(null),[e?Lt.get(e):{},Lt.get(t),i.defaults]);Lt.set(t,n),i.defaultRoutes&&qm(t,i.defaultRoutes),i.descriptors&&Lt.describe(t,i.descriptors)}function qm(i,t){Object.keys(t).forEach(e=>{let n=e.split("."),s=n.pop(),r=[i].concat(n).join("."),o=t[e].split("."),a=o.pop(),l=o.join(".");Lt.route(r,s,l,a)})}function Ym(i){return"id"in i&&"defaults"in i}var ml=class{constructor(){this.controllers=new ms(Oe,"datasets",!0),this.elements=new ms(Fe,"elements"),this.plugins=new ms(Object,"plugins"),this.scales=new ms(zn,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,n){[...e].forEach(s=>{let r=n||this._getRegistryForType(s);n||r.isForType(s)||r===this.plugins&&s.id?this._exec(t,r,s):Ut(s,o=>{let a=n||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,n){let s=Qr(t);qt(n["before"+s],[],n),e[t](n),qt(n["after"+s],[],n)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){let n=this._typedRegistries[e];if(n.isForType(t))return n}return this.plugins}_get(t,e,n){let s=e.get(t);if(s===void 0)throw new Error('"'+t+'" is not a registered '+n+".");return s}},mn=new ml,bs=class extends Oe{update(t){let e=this._cachedMeta,{data:n=[]}=e,s=this.chart._animationsDisabled,{start:r,count:o}=Na(e,n,s);if(this._drawStart=r,this._drawCount=o,Ba(e)&&(r=0,o=n.length),this.options.showLine){let{dataset:a,_dataset:l}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!l._decimated,a.points=n;let c=this.resolveDatasetElementOptions(t);c.segment=this.options.segment,this.updateElement(a,void 0,{animated:!s,options:c},t)}this.updateElements(n,r,o,t)}addElements(){let{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=mn.getElement("line")),super.addElements()}updateElements(t,e,n,s){let r=s==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,h=this.resolveDataElementOptions(e,s),u=this.getSharedOptions(h),d=this.includeOptions(s,u),f=o.axis,g=a.axis,{spanGaps:m,segment:p}=this.options,_=Ci(m)?m:Number.POSITIVE_INFINITY,y=this.chart._animationsDisabled||r||s==="none",M=e>0&&this.getParsed(e-1);for(let x=e;x<e+n;++x){let b=t[x],T=this.getParsed(x),C=y?b:{},v=Dt(T[g]),A=C[f]=o.getPixelForValue(T[f],x),L=C[g]=r||v?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,T,l):T[g],x);C.skip=isNaN(A)||isNaN(L)||v,C.stop=x>0&&Math.abs(T[f]-M[f])>_,p&&(C.parsed=T,C.raw=c.data[x]),d&&(C.options=u||this.resolveDataElementOptions(x,b.active?"active":s)),y||this.updateElement(b,x,C,s),M=T}this.updateSharedOptions(u,s,h)}getMaxOverflow(){let t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let l=e.length-1;l>=0;--l)a=Math.max(a,e[l].size(this.resolveDataElementOptions(l))/2);return a>0&&a}let n=t.dataset,s=n.options&&n.options.borderWidth||0;if(!e.length)return s;let r=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(s,r,o)/2}};bs.id="scatter";bs.defaults={datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1};bs.overrides={interaction:{mode:"point"},plugins:{tooltip:{callbacks:{title(){return""},label(i){return"("+i.label+", "+i.formattedValue+")"}}}},scales:{x:{type:"linear"},y:{type:"linear"}}};var $m=Object.freeze({__proto__:null,BarController:gs,BubbleController:_s,DoughnutController:li,LineController:xs,PolarAreaController:ys,PieController:xr,RadarController:vs,ScatterController:bs});function Li(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}var yr=class{constructor(t){this.options=t||{}}init(t){}formats(){return Li()}parse(t,e){return Li()}format(t,e){return Li()}add(t,e,n){return Li()}diff(t,e,n){return Li()}startOf(t,e,n){return Li()}endOf(t,e){return Li()}};yr.override=function(i){Object.assign(yr.prototype,i)};var Zm={_date:yr};function Jm(i,t,e,n){let{controller:s,data:r,_sorted:o}=i,a=s._cachedMeta.iScale;if(a&&t===a.axis&&t!=="r"&&o&&r.length){let l=a._reversePixels?xh:un;if(n){if(s._sharedOptions){let c=r[0],h=typeof c.getRange=="function"&&c.getRange(t);if(h){let u=l(r,t,e-h),d=l(r,t,e+h);return{lo:u.lo,hi:d.hi}}}}else return l(r,t,e)}return{lo:0,hi:r.length-1}}function Tr(i,t,e,n,s){let r=i.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,l=r.length;a<l;++a){let{index:c,data:h}=r[a],{lo:u,hi:d}=Jm(r[a],t,o,s);for(let f=u;f<=d;++f){let g=h[f];g.skip||n(g,c,f)}}}function jm(i){let t=i.indexOf("x")!==-1,e=i.indexOf("y")!==-1;return function(n,s){let r=t?Math.abs(n.x-s.x):0,o=e?Math.abs(n.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function al(i,t,e,n,s){let r=[];return!s&&!i.isPointInArea(t)||Tr(i,e,t,function(a,l,c){!s&&!os(a,i.chartArea,0)||a.inRange(t.x,t.y,n)&&r.push({element:a,datasetIndex:l,index:c})},!0),r}function Km(i,t,e,n){let s=[];function r(o,a,l){let{startAngle:c,endAngle:h}=o.getProps(["startAngle","endAngle"],n),{angle:u}=Ia(o,{x:t.x,y:t.y});hs(u,c,h)&&s.push({element:o,datasetIndex:a,index:l})}return Tr(i,e,t,r),s}function Qm(i,t,e,n,s,r){let o=[],a=jm(e),l=Number.POSITIVE_INFINITY;function c(h,u,d){let f=h.inRange(t.x,t.y,s);if(n&&!f)return;let g=h.getCenterPoint(s);if(!(!!r||i.isPointInArea(g))&&!f)return;let p=a(t,g);p<l?(o=[{element:h,datasetIndex:u,index:d}],l=p):p===l&&o.push({element:h,datasetIndex:u,index:d})}return Tr(i,e,t,c),o}function ll(i,t,e,n,s,r){return!r&&!i.isPointInArea(t)?[]:e==="r"&&!n?Km(i,t,e,s):Qm(i,t,e,n,s,r)}function iu(i,t,e,n,s){let r=[],o=e==="x"?"inXRange":"inYRange",a=!1;return Tr(i,e,t,(l,c,h)=>{l[o](t[e],s)&&(r.push({element:l,datasetIndex:c,index:h}),a=a||l.inRange(t.x,t.y,s))}),n&&!a?[]:r}var tg={evaluateInteractionItems:Tr,modes:{index(i,t,e,n){let s=ri(t,i),r=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?al(i,s,r,n,o):ll(i,s,r,!1,n,o),l=[];return a.length?(i.getSortedVisibleDatasetMetas().forEach(c=>{let h=a[0].index,u=c.data[h];u&&!u.skip&&l.push({element:u,datasetIndex:c.index,index:h})}),l):[]},dataset(i,t,e,n){let s=ri(t,i),r=e.axis||"xy",o=e.includeInvisible||!1,a=e.intersect?al(i,s,r,n,o):ll(i,s,r,!1,n,o);if(a.length>0){let l=a[0].datasetIndex,c=i.getDatasetMeta(l).data;a=[];for(let h=0;h<c.length;++h)a.push({element:c[h],datasetIndex:l,index:h})}return a},point(i,t,e,n){let s=ri(t,i),r=e.axis||"xy",o=e.includeInvisible||!1;return al(i,s,r,n,o)},nearest(i,t,e,n){let s=ri(t,i),r=e.axis||"xy",o=e.includeInvisible||!1;return ll(i,s,r,e.intersect,n,o)},x(i,t,e,n){let s=ri(t,i);return iu(i,s,"x",e.intersect,n)},y(i,t,e,n){let s=ri(t,i);return iu(i,s,"y",e.intersect,n)}}},Nu=["left","top","right","bottom"];function fr(i,t){return i.filter(e=>e.pos===t)}function su(i,t){return i.filter(e=>Nu.indexOf(e.pos)===-1&&e.box.axis===t)}function pr(i,t){return i.sort((e,n)=>{let s=t?n:e,r=t?e:n;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function eg(i){let t=[],e,n,s,r,o,a;for(e=0,n=(i||[]).length;e<n;++e)s=i[e],{position:r,options:{stack:o,stackWeight:a=1}}=s,t.push({index:e,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return t}function ng(i){let t={};for(let e of i){let{stack:n,pos:s,stackWeight:r}=e;if(!n||!Nu.includes(s))continue;let o=t[n]||(t[n]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function ig(i,t){let e=ng(i),{vBoxMaxWidth:n,hBoxMaxHeight:s}=t,r,o,a;for(r=0,o=i.length;r<o;++r){a=i[r];let{fullSize:l}=a.box,c=e[a.stack],h=c&&a.stackWeight/c.weight;a.horizontal?(a.width=h?h*n:l&&t.availableWidth,a.height=s):(a.width=n,a.height=h?h*s:l&&t.availableHeight)}return e}function sg(i){let t=eg(i),e=pr(t.filter(c=>c.box.fullSize),!0),n=pr(fr(t,"left"),!0),s=pr(fr(t,"right")),r=pr(fr(t,"top"),!0),o=pr(fr(t,"bottom")),a=su(t,"x"),l=su(t,"y");return{fullSize:e,leftAndTop:n.concat(r),rightAndBottom:s.concat(l).concat(o).concat(a),chartArea:fr(t,"chartArea"),vertical:n.concat(s).concat(l),horizontal:r.concat(o).concat(a)}}function ru(i,t,e,n){return Math.max(i[e],t[e])+Math.max(i[n],t[n])}function Bu(i,t){i.top=Math.max(i.top,t.top),i.left=Math.max(i.left,t.left),i.bottom=Math.max(i.bottom,t.bottom),i.right=Math.max(i.right,t.right)}function rg(i,t,e,n){let{pos:s,box:r}=e,o=i.maxPadding;if(!Pt(s)){e.size&&(i[s]-=e.size);let u=n[e.stack]||{size:0,count:1};u.size=Math.max(u.size,e.horizontal?r.height:r.width),e.size=u.size/u.count,i[s]+=e.size}r.getPadding&&Bu(o,r.getPadding());let a=Math.max(0,t.outerWidth-ru(o,i,"left","right")),l=Math.max(0,t.outerHeight-ru(o,i,"top","bottom")),c=a!==i.w,h=l!==i.h;return i.w=a,i.h=l,e.horizontal?{same:c,other:h}:{same:h,other:c}}function og(i){let t=i.maxPadding;function e(n){let s=Math.max(t[n]-i[n],0);return i[n]+=s,s}i.y+=e("top"),i.x+=e("left"),e("right"),e("bottom")}function ag(i,t){let e=t.maxPadding;function n(s){let r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(t[o],e[o])}),r}return n(i?["left","right"]:["top","bottom"])}function gr(i,t,e,n){let s=[],r,o,a,l,c,h;for(r=0,o=i.length,c=0;r<o;++r){a=i[r],l=a.box,l.update(a.width||t.w,a.height||t.h,ag(a.horizontal,t));let{same:u,other:d}=rg(t,e,a,n);c|=u&&s.length,h=h||d,l.fullSize||s.push(a)}return c&&gr(s,t,e,n)||h}function ho(i,t,e,n,s){i.top=e,i.left=t,i.right=t+n,i.bottom=e+s,i.width=n,i.height=s}function ou(i,t,e,n){let s=e.padding,{x:r,y:o}=t;for(let a of i){let l=a.box,c=n[a.stack]||{count:1,placed:0,weight:1},h=a.stackWeight/c.weight||1;if(a.horizontal){let u=t.w*h,d=c.size||l.height;De(c.start)&&(o=c.start),l.fullSize?ho(l,s.left,o,e.outerWidth-s.right-s.left,d):ho(l,t.left+c.placed,o,u,d),c.start=o,c.placed+=u,o=l.bottom}else{let u=t.h*h,d=c.size||l.width;De(c.start)&&(r=c.start),l.fullSize?ho(l,r,s.top,d,e.outerHeight-s.bottom-s.top):ho(l,r,t.top+c.placed,d,u),c.start=r,c.placed+=u,r=l.right}}t.x=r,t.y=o}Lt.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}});var ve={addBox(i,t){i.boxes||(i.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},i.boxes.push(t)},removeBox(i,t){let e=i.boxes?i.boxes.indexOf(t):-1;e!==-1&&i.boxes.splice(e,1)},configure(i,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(i,t,e,n){if(!i)return;let s=_e(i.options.layout.padding),r=Math.max(t-s.width,0),o=Math.max(e-s.height,0),a=sg(i.boxes),l=a.vertical,c=a.horizontal;Ut(i.boxes,m=>{typeof m.beforeLayout=="function"&&m.beforeLayout()});let h=l.reduce((m,p)=>p.box.options&&p.box.options.display===!1?m:m+1,0)||1,u=Object.freeze({outerWidth:t,outerHeight:e,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/h,hBoxMaxHeight:o/2}),d=Object.assign({},s);Bu(d,_e(n));let f=Object.assign({maxPadding:d,w:r,h:o,x:s.left,y:s.top},s),g=ig(l.concat(c),u);gr(a.fullSize,f,u,g),gr(l,f,u,g),gr(c,f,u,g)&&gr(l,f,u,g),og(f),ou(a.leftAndTop,f,u,g),f.x+=f.w,f.y+=f.h,ou(a.rightAndBottom,f,u,g),i.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},Ut(a.chartArea,m=>{let p=m.box;Object.assign(p,i.chartArea),p.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}},xo=class{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,n){}removeEventListener(t,e,n){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,n,s){return e=Math.max(0,e||t.width),n=n||t.height,{width:e,height:Math.max(0,s?Math.floor(e/s):n)}}isAttached(t){return!0}updateConfig(t){}},gl=class extends xo{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}},go="$chartjs",lg={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},au=i=>i===null||i==="";function cg(i,t){let e=i.style,n=i.getAttribute("height"),s=i.getAttribute("width");if(i[go]={initial:{height:n,width:s,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",au(s)){let r=Qa(i,"width");r!==void 0&&(i.width=r)}if(au(n))if(i.style.height==="")i.height=i.width/(t||2);else{let r=Qa(i,"height");r!==void 0&&(i.height=r)}return i}var Uu=Bh?{passive:!0}:!1;function hg(i,t,e){i.addEventListener(t,e,Uu)}function ug(i,t,e){i.canvas.removeEventListener(t,e,Uu)}function dg(i,t){let e=lg[i.type]||i.type,{x:n,y:s}=ri(i,t);return{type:e,chart:t,native:i,x:n!==void 0?n:null,y:s!==void 0?s:null}}function yo(i,t){for(let e of i)if(e===t||e.contains(t))return!0}function fg(i,t,e){let n=i.canvas,s=new MutationObserver(r=>{let o=!1;for(let a of r)o=o||yo(a.addedNodes,n),o=o&&!yo(a.removedNodes,n);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}function pg(i,t,e){let n=i.canvas,s=new MutationObserver(r=>{let o=!1;for(let a of r)o=o||yo(a.removedNodes,n),o=o&&!yo(a.addedNodes,n);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}var vr=new Map,lu=0;function Vu(){let i=window.devicePixelRatio;i!==lu&&(lu=i,vr.forEach((t,e)=>{e.currentDevicePixelRatio!==i&&t()}))}function mg(i,t){vr.size||window.addEventListener("resize",Vu),vr.set(i,t)}function gg(i){vr.delete(i),vr.size||window.removeEventListener("resize",Vu)}function _g(i,t,e){let n=i.canvas,s=n&&ao(n);if(!s)return;let r=za((a,l)=>{let c=s.clientWidth;e(a,l),c<s.clientWidth&&e()},window),o=new ResizeObserver(a=>{let l=a[0],c=l.contentRect.width,h=l.contentRect.height;c===0&&h===0||r(c,h)});return o.observe(s),mg(i,r),o}function cl(i,t,e){e&&e.disconnect(),t==="resize"&&gg(i)}function xg(i,t,e){let n=i.canvas,s=za(r=>{i.ctx!==null&&e(dg(r,i))},i,r=>{let o=r[0];return[o,o.offsetX,o.offsetY]});return hg(n,t,s),s}var _l=class extends xo{acquireContext(t,e){let n=t&&t.getContext&&t.getContext("2d");return n&&n.canvas===t?(cg(t,e),n):null}releaseContext(t){let e=t.canvas;if(!e[go])return!1;let n=e[go].initial;["height","width"].forEach(r=>{let o=n[r];Dt(o)?e.removeAttribute(r):e.setAttribute(r,o)});let s=n.style||{};return Object.keys(s).forEach(r=>{e.style[r]=s[r]}),e.width=e.width,delete e[go],!0}addEventListener(t,e,n){this.removeEventListener(t,e);let s=t.$proxies||(t.$proxies={}),o={attach:fg,detach:pg,resize:_g}[e]||xg;s[e]=o(t,e,n)}removeEventListener(t,e){let n=t.$proxies||(t.$proxies={}),s=n[e];if(!s)return;({attach:cl,detach:cl,resize:cl}[e]||ug)(t,e,s),n[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,n,s){return Nh(t,e,n,s)}isAttached(t){let e=ao(t);return!!(e&&e.isConnected)}};function yg(i){return!ja()||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas?gl:_l}var xl=class{constructor(){this._init=[]}notify(t,e,n,s){e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));let r=s?this._descriptors(t).filter(s):this._descriptors(t),o=this._notify(r,t,e,n);return e==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall")),o}_notify(t,e,n,s){s=s||{};for(let r of t){let o=r.plugin,a=o[n],l=[e,s,r.options];if(qt(a,l,o)===!1&&s.cancelable)return!1}return!0}invalidate(){Dt(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;let e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){let n=t&&t.config,s=St(n.options&&n.options.plugins,{}),r=vg(n);return s===!1&&!e?[]:Mg(t,r,s,e)}_notifyStateChanges(t){let e=this._oldCache||[],n=this._cache,s=(r,o)=>r.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(s(e,n),t,"stop"),this._notify(s(n,e),t,"start")}};function vg(i){let t={},e=[],n=Object.keys(mn.plugins.items);for(let r=0;r<n.length;r++)e.push(mn.getPlugin(n[r]));let s=i.plugins||[];for(let r=0;r<s.length;r++){let o=s[r];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function bg(i,t){return!t&&i===!1?null:i===!0?{}:i}function Mg(i,{plugins:t,localIds:e},n,s){let r=[],o=i.getContext();for(let a of t){let l=a.id,c=bg(n[l],s);c!==null&&r.push({plugin:a,options:wg(i.config,{plugin:a,local:e[l]},c,o)})}return r}function wg(i,{plugin:t,local:e},n,s){let r=i.pluginScopeKeys(t),o=i.getOptionScopes(n,r);return e&&t.defaults&&o.push(t.defaults),i.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function yl(i,t){let e=Lt.datasets[i]||{};return((t.datasets||{})[i]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function Sg(i,t){let e=i;return i==="_index_"?e=t:i==="_value_"&&(e=t==="x"?"y":"x"),e}function Ag(i,t){return i===t?"_index_":"_value_"}function Tg(i){if(i==="top"||i==="bottom")return"x";if(i==="left"||i==="right")return"y"}function vl(i,t){return i==="x"||i==="y"?i:t.axis||Tg(t.position)||i.charAt(0).toLowerCase()}function Eg(i,t){let e=ei[i.type]||{scales:{}},n=t.scales||{},s=yl(i.type,t),r=Object.create(null),o=Object.create(null);return Object.keys(n).forEach(a=>{let l=n[a];if(!Pt(l))return console.error(`Invalid scale configuration for scale: ${a}`);if(l._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${a}`);let c=vl(a,l),h=Ag(c,s),u=e.scales||{};r[c]=r[c]||a,o[a]=ls(Object.create(null),[{axis:c},l,u[c],u[h]])}),i.data.datasets.forEach(a=>{let l=a.type||i.type,c=a.indexAxis||yl(l,t),u=(ei[l]||{}).scales||{};Object.keys(u).forEach(d=>{let f=Sg(d,c),g=a[f+"AxisID"]||r[f]||f;o[g]=o[g]||Object.create(null),ls(o[g],[{axis:f},n[g],u[d]])})}),Object.keys(o).forEach(a=>{let l=o[a];ls(l,[Lt.scales[l.type],Lt.scale])}),o}function Wu(i){let t=i.options||(i.options={});t.plugins=St(t.plugins,{}),t.scales=Eg(i,t)}function Hu(i){return i=i||{},i.datasets=i.datasets||[],i.labels=i.labels||[],i}function Cg(i){return i=i||{},i.data=Hu(i.data),Wu(i),i}var cu=new Map,Gu=new Set;function uo(i,t){let e=cu.get(i);return e||(e=t(),cu.set(i,e),Gu.add(e)),e}var mr=(i,t,e)=>{let n=In(t,e);n!==void 0&&i.add(n)},bl=class{constructor(t){this._config=Cg(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Hu(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){let t=this._config;this.clearCache(),Wu(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return uo(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return uo(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return uo(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){let e=t.id,n=this.type;return uo(`${n}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){let n=this._scopeCache,s=n.get(t);return(!s||e)&&(s=new Map,n.set(t,s)),s}getOptionScopes(t,e,n){let{options:s,type:r}=this,o=this._cachedScopes(t,n),a=o.get(e);if(a)return a;let l=new Set;e.forEach(h=>{t&&(l.add(t),h.forEach(u=>mr(l,t,u))),h.forEach(u=>mr(l,s,u)),h.forEach(u=>mr(l,ei[r]||{},u)),h.forEach(u=>mr(l,Lt,u)),h.forEach(u=>mr(l,io,u))});let c=Array.from(l);return c.length===0&&c.push(Object.create(null)),Gu.has(e)&&o.set(e,c),c}chartOptionScopes(){let{options:t,type:e}=this;return[t,ei[e]||{},Lt.datasets[e]||{},{type:e},Lt,io]}resolveNamedOptions(t,e,n,s=[""]){let r={$shared:!0},{resolver:o,subPrefixes:a}=hu(this._resolverCache,t,s),l=o;if(Lg(o,e)){r.$shared=!1,n=Dn(n)?n():n;let c=this.createResolver(t,n,a);l=Ei(o,n,c)}for(let c of e)r[c]=l[c];return r}createResolver(t,e,n=[""],s){let{resolver:r}=hu(this._resolverCache,t,n);return Pt(e)?Ei(r,e,void 0,s):r}};function hu(i,t,e){let n=i.get(t);n||(n=new Map,i.set(t,n));let s=e.join(),r=n.get(s);return r||(r={resolver:oo(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},n.set(s,r)),r}var Pg=i=>Pt(i)&&Object.getOwnPropertyNames(i).reduce((t,e)=>t||Dn(i[e]),!1);function Lg(i,t){let{isScriptable:e,isIndexable:n}=Ya(i);for(let s of t){let r=e(s),o=n(s),a=(o||r)&&i[s];if(r&&(Dn(a)||Pg(a))||o&&Xt(a))return!0}return!1}var Rg="3.9.1",Dg=["top","bottom","left","right","chartArea"];function uu(i,t){return i==="top"||i==="bottom"||Dg.indexOf(i)===-1&&t==="x"}function du(i,t){return function(e,n){return e[i]===n[i]?e[t]-n[t]:e[i]-n[i]}}function fu(i){let t=i.chart,e=t.options.animation;t.notifyPlugins("afterRender"),qt(e&&e.onComplete,[i],t)}function Ig(i){let t=i.chart,e=t.options.animation;qt(e&&e.onProgress,[i],t)}function Xu(i){return ja()&&typeof i=="string"?i=document.getElementById(i):i&&i.length&&(i=i[0]),i&&i.canvas&&(i=i.canvas),i}var vo={},qu=i=>{let t=Xu(i);return Object.values(vo).filter(e=>e.canvas===t).pop()};function kg(i,t,e){let n=Object.keys(i);for(let s of n){let r=+s;if(r>=t){let o=i[s];delete i[s],(e>0||r>t)&&(i[r+e]=o)}}}function Og(i,t,e,n){return!e||i.type==="mouseout"?null:n?t:i}var Ri=class{constructor(t,e){let n=this.config=new bl(e),s=Xu(t),r=qu(s);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");let o=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||yg(s)),this.platform.updateConfig(n);let a=this.platform.acquireContext(s,o.aspectRatio),l=a&&a.canvas,c=l&&l.height,h=l&&l.width;if(this.id=uh(),this.ctx=a,this.canvas=l,this.width=h,this.height=c,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new xl,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=Mh(u=>this.update(u),o.resizeDelay||0),this._dataChanges=[],vo[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}On.listen(this,"complete",fu),On.listen(this,"progress",Ig),this._initialize(),this.attached&&this.update()}get aspectRatio(){let{options:{aspectRatio:t,maintainAspectRatio:e},width:n,height:s,_aspectRatio:r}=this;return Dt(t)?e&&r?r:s?n/s:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Ka(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Ga(this.canvas,this.ctx),this}stop(){return On.stop(this),this}resize(t,e){On.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){let n=this.options,s=this.canvas,r=n.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,t,e,r),a=n.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,Ka(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),qt(n.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){let e=this.options.scales||{};Ut(e,(n,s)=>{n.id=s})}buildOrUpdateScales(){let t=this.options,e=t.scales,n=this.scales,s=Object.keys(n).reduce((o,a)=>(o[a]=!1,o),{}),r=[];e&&(r=r.concat(Object.keys(e).map(o=>{let a=e[o],l=vl(o,a),c=l==="r",h=l==="x";return{options:a,dposition:c?"chartArea":h?"bottom":"left",dtype:c?"radialLinear":h?"category":"linear"}}))),Ut(r,o=>{let a=o.options,l=a.id,c=vl(l,a),h=St(a.type,o.dtype);(a.position===void 0||uu(a.position,c)!==uu(o.dposition))&&(a.position=o.dposition),s[l]=!0;let u=null;if(l in n&&n[l].type===h)u=n[l];else{let d=mn.getScale(h);u=new d({id:l,type:h,ctx:this.ctx,chart:this}),n[u.id]=u}u.init(a,t)}),Ut(s,(o,a)=>{o||delete n[a]}),Ut(n,o=>{ve.configure(this,o,o.options),ve.addBox(this,o)})}_updateMetasets(){let t=this._metasets,e=this.data.datasets.length,n=t.length;if(t.sort((s,r)=>s.index-r.index),n>e){for(let s=e;s<n;++s)this._destroyDatasetMeta(s);t.splice(e,n-e)}this._sortedMetasets=t.slice(0).sort(du("order","index"))}_removeUnreferencedMetasets(){let{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((n,s)=>{e.filter(r=>r===n._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){let t=[],e=this.data.datasets,n,s;for(this._removeUnreferencedMetasets(),n=0,s=e.length;n<s;n++){let r=e[n],o=this.getDatasetMeta(n),a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(n),o=this.getDatasetMeta(n)),o.type=a,o.indexAxis=r.indexAxis||yl(a,this.options),o.order=r.order||0,o.index=n,o.label=""+r.label,o.visible=this.isDatasetVisible(n),o.controller)o.controller.updateIndex(n),o.controller.linkScales();else{let l=mn.getController(a),{datasetElementType:c,dataElementType:h}=Lt.datasets[a];Object.assign(l.prototype,{dataElementType:mn.getElement(h),datasetElementType:c&&mn.getElement(c)}),o.controller=new l(this,n),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){Ut(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){let e=this.config;e.update();let n=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;let r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let c=0,h=this.data.datasets.length;c<h;c++){let{controller:u}=this.getDatasetMeta(c),d=!s&&r.indexOf(u)===-1;u.buildOrUpdateElements(d),o=Math.max(+u.getMaxOverflow(),o)}o=this._minPadding=n.layout.autoPadding?o:0,this._updateLayout(o),s||Ut(r,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(du("z","_idx"));let{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){Ut(this.scales,t=>{ve.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let t=this.options,e=new Set(Object.keys(this._listeners)),n=new Set(t.events);(!Pa(e,n)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(let{method:n,start:s,count:r}of e){let o=n==="_removeElements"?-r:r;kg(t,s,o)}}_getUniformDataChanges(){let t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];let e=this.data.datasets.length,n=r=>new Set(t.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),s=n(0);for(let r=1;r<e;r++)if(!Pa(s,n(r)))return;return Array.from(s).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;ve.update(this,this.width,this.height,t);let e=this.chartArea,n=e.width<=0||e.height<=0;this._layers=[],Ut(this.boxes,s=>{n&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,r)=>{s._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,n=this.data.datasets.length;e<n;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,n=this.data.datasets.length;e<n;++e)this._updateDataset(e,Dn(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){let n=this.getDatasetMeta(t),s={meta:n,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(n.controller._update(e),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(On.has(this)?this.attached&&!On.running(this)&&On.start(this):(this.draw(),fu({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){let{width:n,height:s}=this._resizeBeforeDraw;this._resize(n,s),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;let e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){let e=this._sortedMetasets,n=[],s,r;for(s=0,r=e.length;s<r;++s){let o=e[s];(!t||o.visible)&&n.push(o)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;let t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){let e=this.ctx,n=t._clip,s=!n.disabled,r=this.chartArea,o={meta:t,index:t.index,cancelable:!0};this.notifyPlugins("beforeDatasetDraw",o)!==!1&&(s&&cr(e,{left:n.left===!1?0:r.left-n.left,right:n.right===!1?this.width:r.right+n.right,top:n.top===!1?0:r.top-n.top,bottom:n.bottom===!1?this.height:r.bottom+n.bottom}),t.controller.draw(),s&&hr(e),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}isPointInArea(t){return os(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,n,s){let r=tg.modes[e];return typeof r=="function"?r(this,t,n,s):[]}getDatasetMeta(t){let e=this.data.datasets[t],n=this._metasets,s=n.filter(r=>r&&r._dataset===e).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},n.push(s)),s}getContext(){return this.$context||(this.$context=kn(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){let e=this.data.datasets[t];if(!e)return!1;let n=this.getDatasetMeta(t);return typeof n.hidden=="boolean"?!n.hidden:!e.hidden}setDatasetVisibility(t,e){let n=this.getDatasetMeta(t);n.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,n){let s=n?"show":"hide",r=this.getDatasetMeta(t),o=r.controller._resolveAnimations(void 0,s);De(e)?(r.data[e].hidden=!n,this.update()):(this.setDatasetVisibility(t,n),o.update(r,{visible:n}),this.update(a=>a.datasetIndex===t?s:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){let e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),On.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");let{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Ga(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),this.notifyPlugins("destroy"),delete vo[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let t=this._listeners,e=this.platform,n=(r,o)=>{e.addEventListener(this,r,o),t[r]=o},s=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};Ut(this.options.events,r=>n(r,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});let t=this._responsiveListeners,e=this.platform,n=(l,c)=>{e.addEventListener(this,l,c),t[l]=c},s=(l,c)=>{t[l]&&(e.removeEventListener(this,l,c),delete t[l])},r=(l,c)=>{this.canvas&&this.resize(l,c)},o,a=()=>{s("attach",a),this.attached=!0,this.resize(),n("resize",r),n("detach",o)};o=()=>{this.attached=!1,s("resize",r),this._stop(),this._resize(0,0),n("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){Ut(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},Ut(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,n){let s=n?"set":"remove",r,o,a,l;for(e==="dataset"&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+s+"DatasetHoverStyle"]()),a=0,l=t.length;a<l;++a){o=t[a];let c=o&&this.getDatasetMeta(o.datasetIndex).controller;c&&c[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){let e=this._active||[],n=t.map(({datasetIndex:r,index:o})=>{let a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!ar(n,e)&&(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,e))}notifyPlugins(t,e,n){return this._plugins.notify(this,t,e,n)}_updateHoverStyles(t,e,n){let s=this.options.hover,r=(l,c)=>l.filter(h=>!c.some(u=>h.datasetIndex===u.datasetIndex&&h.index===u.index)),o=r(e,t),a=n?t:r(t,e);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(t,e){let n={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},s=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",n,s)===!1)return;let r=this._handleEvent(t,e,n.inChartArea);return n.cancelable=!1,this.notifyPlugins("afterEvent",n,s),(r||n.changed)&&this.render(),this}_handleEvent(t,e,n){let{_active:s=[],options:r}=this,o=e,a=this._getActiveElements(t,s,n,o),l=ph(t),c=Og(t,this._lastEvent,n,l);n&&(this._lastEvent=null,qt(r.onHover,[t,a,this],this),l&&qt(r.onClick,[t,a,this],this));let h=!ar(a,s);return(h||e)&&(this._active=a,this._updateHoverStyles(a,s,e)),this._lastEvent=c,h}_getActiveElements(t,e,n,s){if(t.type==="mouseout")return[];if(!n)return e;let r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,s)}},pu=()=>Ut(Ri.instances,i=>i._plugins.invalidate()),oi=!0;Object.defineProperties(Ri,{defaults:{enumerable:oi,value:Lt},instances:{enumerable:oi,value:vo},overrides:{enumerable:oi,value:ei},registry:{enumerable:oi,value:mn},version:{enumerable:oi,value:Rg},getChart:{enumerable:oi,value:qu},register:{enumerable:oi,value:(...i)=>{mn.add(...i),pu()}},unregister:{enumerable:oi,value:(...i)=>{mn.remove(...i),pu()}}});function Yu(i,t,e){let{startAngle:n,pixelMargin:s,x:r,y:o,outerRadius:a,innerRadius:l}=t,c=s/a;i.beginPath(),i.arc(r,o,a,n-c,e+c),l>s?(c=s/l,i.arc(r,o,l,e+c,n-c,!0)):i.arc(r,o,s,e+Kt,n-Kt),i.closePath(),i.clip()}function Fg(i){return ro(i,["outerStart","outerEnd","innerStart","innerEnd"])}function zg(i,t,e,n){let s=Fg(i.options.borderRadius),r=(e-t)/2,o=Math.min(r,n*t/2),a=l=>{let c=(e-Math.min(r,l))*n/2;return oe(l,0,Math.min(r,c))};return{outerStart:a(s.outerStart),outerEnd:a(s.outerEnd),innerStart:oe(s.innerStart,0,o),innerEnd:oe(s.innerEnd,0,o)}}function ps(i,t,e,n){return{x:e+i*Math.cos(t),y:n+i*Math.sin(t)}}function Ml(i,t,e,n,s,r){let{x:o,y:a,startAngle:l,pixelMargin:c,innerRadius:h}=t,u=Math.max(t.outerRadius+n+e-c,0),d=h>0?h+n+e+c:0,f=0,g=s-l;if(n){let O=h>0?h-n:0,X=u>0?u-n:0,Z=(O+X)/2,H=Z!==0?g*Z/(Z+n):g;f=(g-H)/2}let m=Math.max(.001,g*u-e/Zt)/u,p=(g-m)/2,_=l+p+f,y=s-p-f,{outerStart:M,outerEnd:x,innerStart:b,innerEnd:T}=zg(t,d,u,y-_),C=u-M,v=u-x,A=_+M/C,L=y-x/v,B=d+b,$=d+T,N=_+b/B,D=y-T/$;if(i.beginPath(),r){if(i.arc(o,a,u,A,L),x>0){let Z=ps(v,L,o,a);i.arc(Z.x,Z.y,x,L,y+Kt)}let O=ps($,y,o,a);if(i.lineTo(O.x,O.y),T>0){let Z=ps($,D,o,a);i.arc(Z.x,Z.y,T,y+Kt,D+Math.PI)}if(i.arc(o,a,d,y-T/d,_+b/d,!0),b>0){let Z=ps(B,N,o,a);i.arc(Z.x,Z.y,b,N+Math.PI,_-Kt)}let X=ps(C,_,o,a);if(i.lineTo(X.x,X.y),M>0){let Z=ps(C,A,o,a);i.arc(Z.x,Z.y,M,_-Kt,A)}}else{i.moveTo(o,a);let O=Math.cos(A)*u+o,X=Math.sin(A)*u+a;i.lineTo(O,X);let Z=Math.cos(L)*u+o,H=Math.sin(L)*u+a;i.lineTo(Z,H)}i.closePath()}function Ng(i,t,e,n,s){let{fullCircles:r,startAngle:o,circumference:a}=t,l=t.endAngle;if(r){Ml(i,t,e,n,o+Wt,s);for(let c=0;c<r;++c)i.fill();isNaN(a)||(l=o+a%Wt,a%Wt===0&&(l+=Wt))}return Ml(i,t,e,n,l,s),i.fill(),l}function Bg(i,t,e){let{x:n,y:s,startAngle:r,pixelMargin:o,fullCircles:a}=t,l=Math.max(t.outerRadius-o,0),c=t.innerRadius+o,h;for(e&&Yu(i,t,r+Wt),i.beginPath(),i.arc(n,s,c,r+Wt,r,!0),h=0;h<a;++h)i.stroke();for(i.beginPath(),i.arc(n,s,l,r,r+Wt),h=0;h<a;++h)i.stroke()}function Ug(i,t,e,n,s,r){let{options:o}=t,{borderWidth:a,borderJoinStyle:l}=o,c=o.borderAlign==="inner";!a||(c?(i.lineWidth=a*2,i.lineJoin=l||"round"):(i.lineWidth=a,i.lineJoin=l||"bevel"),t.fullCircles&&Bg(i,t,c),c&&Yu(i,t,s),Ml(i,t,e,n,s,r),i.stroke())}var Ms=class extends Fe{constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,e,n){let s=this.getProps(["x","y"],n),{angle:r,distance:o}=Ia(s,{x:t,y:e}),{startAngle:a,endAngle:l,innerRadius:c,outerRadius:h,circumference:u}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],n),d=this.options.spacing/2,g=St(u,l-a)>=Wt||hs(r,a,l),m=fn(o,c+d,h+d);return g&&m}getCenterPoint(t){let{x:e,y:n,startAngle:s,endAngle:r,innerRadius:o,outerRadius:a}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius","circumference"],t),{offset:l,spacing:c}=this.options,h=(s+r)/2,u=(o+a+c+l)/2;return{x:e+Math.cos(h)*u,y:n+Math.sin(h)*u}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){let{options:e,circumference:n}=this,s=(e.offset||0)/2,r=(e.spacing||0)/2,o=e.circular;if(this.pixelMargin=e.borderAlign==="inner"?.33:0,this.fullCircles=n>Wt?Math.floor(n/Wt):0,n===0||this.innerRadius<0||this.outerRadius<0)return;t.save();let a=0;if(s){a=s/2;let c=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(c)*a,Math.sin(c)*a),this.circumference>=Zt&&(a=s)}t.fillStyle=e.backgroundColor,t.strokeStyle=e.borderColor;let l=Ng(t,this,a,r,o);Ug(t,this,a,r,l,o),t.restore()}};Ms.id="arc";Ms.defaults={borderAlign:"center",borderColor:"#fff",borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0};Ms.defaultRoutes={backgroundColor:"backgroundColor"};function $u(i,t,e=t){i.lineCap=St(e.borderCapStyle,t.borderCapStyle),i.setLineDash(St(e.borderDash,t.borderDash)),i.lineDashOffset=St(e.borderDashOffset,t.borderDashOffset),i.lineJoin=St(e.borderJoinStyle,t.borderJoinStyle),i.lineWidth=St(e.borderWidth,t.borderWidth),i.strokeStyle=St(e.borderColor,t.borderColor)}function Vg(i,t,e){i.lineTo(e.x,e.y)}function Wg(i){return i.stepped?Lh:i.tension||i.cubicInterpolationMode==="monotone"?Rh:Vg}function Zu(i,t,e={}){let n=i.length,{start:s=0,end:r=n-1}=e,{start:o,end:a}=t,l=Math.max(s,o),c=Math.min(r,a),h=s<o&&r<o||s>a&&r>a;return{count:n,start:l,loop:t.loop,ilen:c<l&&!h?n+c-l:c-l}}function Hg(i,t,e,n){let{points:s,options:r}=t,{count:o,start:a,loop:l,ilen:c}=Zu(s,e,n),h=Wg(r),{move:u=!0,reverse:d}=n||{},f,g,m;for(f=0;f<=c;++f)g=s[(a+(d?c-f:f))%o],!g.skip&&(u?(i.moveTo(g.x,g.y),u=!1):h(i,m,g,d,r.stepped),m=g);return l&&(g=s[(a+(d?c:0))%o],h(i,m,g,d,r.stepped)),!!l}function Gg(i,t,e,n){let s=t.points,{count:r,start:o,ilen:a}=Zu(s,e,n),{move:l=!0,reverse:c}=n||{},h=0,u=0,d,f,g,m,p,_,y=x=>(o+(c?a-x:x))%r,M=()=>{m!==p&&(i.lineTo(h,p),i.lineTo(h,m),i.lineTo(h,_))};for(l&&(f=s[y(0)],i.moveTo(f.x,f.y)),d=0;d<=a;++d){if(f=s[y(d)],f.skip)continue;let x=f.x,b=f.y,T=x|0;T===g?(b<m?m=b:b>p&&(p=b),h=(u*h+x)/++u):(M(),i.lineTo(x,b),g=T,u=0,m=p=b),_=b}M()}function wl(i){let t=i.options,e=t.borderDash&&t.borderDash.length;return!i._decimated&&!i._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?Gg:Hg}function Xg(i){return i.stepped?Uh:i.tension||i.cubicInterpolationMode==="monotone"?Vh:Kn}function qg(i,t,e,n){let s=t._path;s||(s=t._path=new Path2D,t.path(s,e,n)&&s.closePath()),$u(i,t.options),i.stroke(s)}function Yg(i,t,e,n){let{segments:s,options:r}=t,o=wl(t);for(let a of s)$u(i,r,a.style),i.beginPath(),o(i,t,a,{start:e,end:e+n-1})&&i.closePath(),i.stroke()}var $g=typeof Path2D=="function";function Zg(i,t,e,n){$g&&!t.options.segment?qg(i,t,e,n):Yg(i,t,e,n)}var gn=class extends Fe{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){let n=this.options;if((n.tension||n.cubicInterpolationMode==="monotone")&&!n.stepped&&!this._pointsUpdated){let s=n.spanGaps?this._loop:this._fullLoop;zh(this._points,n,t,s,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=Hh(this,this.options.segment))}first(){let t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){let t=this.segments,e=this.points,n=t.length;return n&&e[t[n-1].end]}interpolate(t,e){let n=this.options,s=t[e],r=this.points,o=il(this,{property:e,start:s,end:s});if(!o.length)return;let a=[],l=Xg(n),c,h;for(c=0,h=o.length;c<h;++c){let{start:u,end:d}=o[c],f=r[u],g=r[d];if(f===g){a.push(f);continue}let m=Math.abs((s-f[e])/(g[e]-f[e])),p=l(f,g,m,n.stepped);p[e]=t[e],a.push(p)}return a.length===1?a[0]:a}pathSegment(t,e,n){return wl(this)(t,this,e,n)}path(t,e,n){let s=this.segments,r=wl(this),o=this._loop;e=e||0,n=n||this.points.length-e;for(let a of s)o&=r(t,this,a,{start:e,end:e+n-1});return!!o}draw(t,e,n,s){let r=this.options||{};(this.points||[]).length&&r.borderWidth&&(t.save(),Zg(t,this,n,s),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}};gn.id="line";gn.defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};gn.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};gn.descriptors={_scriptable:!0,_indexable:i=>i!=="borderDash"&&i!=="fill"};function mu(i,t,e,n){let s=i.options,{[e]:r}=i.getProps([e],n);return Math.abs(t-r)<s.radius+s.hitRadius}var ws=class extends Fe{constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,e,n){let s=this.options,{x:r,y:o}=this.getProps(["x","y"],n);return Math.pow(t-r,2)+Math.pow(e-o,2)<Math.pow(s.hitRadius+s.radius,2)}inXRange(t,e){return mu(this,t,"x",e)}inYRange(t,e){return mu(this,t,"y",e)}getCenterPoint(t){let{x:e,y:n}=this.getProps(["x","y"],t);return{x:e,y:n}}size(t){t=t||this.options||{};let e=t.radius||0;e=Math.max(e,e&&t.hoverRadius||0);let n=e&&t.borderWidth||0;return(e+n)*2}draw(t,e){let n=this.options;this.skip||n.radius<.1||!os(this,e,this.size(n)/2)||(t.strokeStyle=n.borderColor,t.lineWidth=n.borderWidth,t.fillStyle=n.backgroundColor,so(t,n,this.x,this.y))}getRange(){let t=this.options||{};return t.radius+t.hitRadius}};ws.id="point";ws.defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};ws.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};function Ju(i,t){let{x:e,y:n,base:s,width:r,height:o}=i.getProps(["x","y","base","width","height"],t),a,l,c,h,u;return i.horizontal?(u=o/2,a=Math.min(e,s),l=Math.max(e,s),c=n-u,h=n+u):(u=r/2,a=e-u,l=e+u,c=Math.min(n,s),h=Math.max(n,s)),{left:a,top:c,right:l,bottom:h}}function ai(i,t,e,n){return i?0:oe(t,e,n)}function Jg(i,t,e){let n=i.options.borderWidth,s=i.borderSkipped,r=qa(n);return{t:ai(s.top,r.top,0,e),r:ai(s.right,r.right,0,t),b:ai(s.bottom,r.bottom,0,e),l:ai(s.left,r.left,0,t)}}function jg(i,t,e){let{enableBorderRadius:n}=i.getProps(["enableBorderRadius"]),s=i.options.borderRadius,r=si(s),o=Math.min(t,e),a=i.borderSkipped,l=n||Pt(s);return{topLeft:ai(!l||a.top||a.left,r.topLeft,0,o),topRight:ai(!l||a.top||a.right,r.topRight,0,o),bottomLeft:ai(!l||a.bottom||a.left,r.bottomLeft,0,o),bottomRight:ai(!l||a.bottom||a.right,r.bottomRight,0,o)}}function Kg(i){let t=Ju(i),e=t.right-t.left,n=t.bottom-t.top,s=Jg(i,e/2,n/2),r=jg(i,e/2,n/2);return{outer:{x:t.left,y:t.top,w:e,h:n,radius:r},inner:{x:t.left+s.l,y:t.top+s.t,w:e-s.l-s.r,h:n-s.t-s.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(s.t,s.l)),topRight:Math.max(0,r.topRight-Math.max(s.t,s.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(s.b,s.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(s.b,s.r))}}}}function hl(i,t,e,n){let s=t===null,r=e===null,a=i&&!(s&&r)&&Ju(i,n);return a&&(s||fn(t,a.left,a.right))&&(r||fn(e,a.top,a.bottom))}function Qg(i){return i.topLeft||i.topRight||i.bottomLeft||i.bottomRight}function t0(i,t){i.rect(t.x,t.y,t.w,t.h)}function ul(i,t,e={}){let n=i.x!==e.x?-t:0,s=i.y!==e.y?-t:0,r=(i.x+i.w!==e.x+e.w?t:0)-n,o=(i.y+i.h!==e.y+e.h?t:0)-s;return{x:i.x+n,y:i.y+s,w:i.w+r,h:i.h+o,radius:i.radius}}var Ss=class extends Fe{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){let{inflateAmount:e,options:{borderColor:n,backgroundColor:s}}=this,{inner:r,outer:o}=Kg(this),a=Qg(o.radius)?us:t0;t.save(),(o.w!==r.w||o.h!==r.h)&&(t.beginPath(),a(t,ul(o,e,r)),t.clip(),a(t,ul(r,-e,o)),t.fillStyle=n,t.fill("evenodd")),t.beginPath(),a(t,ul(r,e)),t.fillStyle=s,t.fill(),t.restore()}inRange(t,e,n){return hl(this,t,e,n)}inXRange(t,e){return hl(this,t,null,e)}inYRange(t,e){return hl(this,null,t,e)}getCenterPoint(t){let{x:e,y:n,base:s,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+s)/2:e,y:r?n:(n+s)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}};Ss.id="bar";Ss.defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0};Ss.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};var e0=Object.freeze({__proto__:null,ArcElement:Ms,LineElement:gn,PointElement:ws,BarElement:Ss});function n0(i,t,e,n,s){let r=s.samples||n;if(r>=e)return i.slice(t,t+e);let o=[],a=(e-2)/(r-2),l=0,c=t+e-1,h=t,u,d,f,g,m;for(o[l++]=i[h],u=0;u<r-2;u++){let p=0,_=0,y,M=Math.floor((u+1)*a)+1+t,x=Math.min(Math.floor((u+2)*a)+1,e)+t,b=x-M;for(y=M;y<x;y++)p+=i[y].x,_+=i[y].y;p/=b,_/=b;let T=Math.floor(u*a)+1+t,C=Math.min(Math.floor((u+1)*a)+1,e)+t,{x:v,y:A}=i[h];for(f=g=-1,y=T;y<C;y++)g=.5*Math.abs((v-p)*(i[y].y-A)-(v-i[y].x)*(_-A)),g>f&&(f=g,d=i[y],m=y);o[l++]=d,h=m}return o[l++]=i[c],o}function i0(i,t,e,n){let s=0,r=0,o,a,l,c,h,u,d,f,g,m,p=[],_=t+e-1,y=i[t].x,x=i[_].x-y;for(o=t;o<t+e;++o){a=i[o],l=(a.x-y)/x*n,c=a.y;let b=l|0;if(b===h)c<g?(g=c,u=o):c>m&&(m=c,d=o),s=(r*s+a.x)/++r;else{let T=o-1;if(!Dt(u)&&!Dt(d)){let C=Math.min(u,d),v=Math.max(u,d);C!==f&&C!==T&&p.push({...i[C],x:s}),v!==f&&v!==T&&p.push({...i[v],x:s})}o>0&&T!==f&&p.push(i[T]),p.push(a),h=b,r=0,g=m=c,u=d=f=o}}return p}function ju(i){if(i._decimated){let t=i._data;delete i._decimated,delete i._data,Object.defineProperty(i,"data",{value:t})}}function gu(i){i.data.datasets.forEach(t=>{ju(t)})}function s0(i,t){let e=t.length,n=0,s,{iScale:r}=i,{min:o,max:a,minDefined:l,maxDefined:c}=r.getUserBounds();return l&&(n=oe(un(t,r.axis,o).lo,0,e-1)),c?s=oe(un(t,r.axis,a).hi+1,n,e)-n:s=e-n,{start:n,count:s}}var r0={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(i,t,e)=>{if(!e.enabled){gu(i);return}let n=i.width;i.data.datasets.forEach((s,r)=>{let{_data:o,indexAxis:a}=s,l=i.getDatasetMeta(r),c=o||s.data;if(ds([a,i.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;let h=i.scales[l.xAxisID];if(h.type!=="linear"&&h.type!=="time"||i.options.parsing)return;let{start:u,count:d}=s0(l,c),f=e.threshold||4*n;if(d<=f){ju(s);return}Dt(o)&&(s._data=c,delete s.data,Object.defineProperty(s,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(m){this._data=m}}));let g;switch(e.algorithm){case"lttb":g=n0(c,u,d,n,e);break;case"min-max":g=i0(c,u,d,n);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}s._decimated=g})},destroy(i){gu(i)}};function o0(i,t,e){let n=i.segments,s=i.points,r=t.points,o=[];for(let a of n){let{start:l,end:c}=a;c=Tl(l,c,s);let h=Sl(e,s[l],s[c],a.loop);if(!t.segments){o.push({source:a,target:h,start:s[l],end:s[c]});continue}let u=il(t,h);for(let d of u){let f=Sl(e,r[d.start],r[d.end],d.loop),g=nl(a,s,f);for(let m of g)o.push({source:m,target:d,start:{[e]:_u(h,f,"start",Math.max)},end:{[e]:_u(h,f,"end",Math.min)}})}}return o}function Sl(i,t,e,n){if(n)return;let s=t[i],r=e[i];return i==="angle"&&(s=Ee(s),r=Ee(r)),{property:i,start:s,end:r}}function a0(i,t){let{x:e=null,y:n=null}=i||{},s=t.points,r=[];return t.segments.forEach(({start:o,end:a})=>{a=Tl(o,a,s);let l=s[o],c=s[a];n!==null?(r.push({x:l.x,y:n}),r.push({x:c.x,y:n})):e!==null&&(r.push({x:e,y:l.y}),r.push({x:e,y:c.y}))}),r}function Tl(i,t,e){for(;t>i;t--){let n=e[t];if(!isNaN(n.x)&&!isNaN(n.y))break}return t}function _u(i,t,e,n){return i&&t?n(i[e],t[e]):i?i[e]:t?t[e]:0}function Ku(i,t){let e=[],n=!1;return Xt(i)?(n=!0,e=i):e=a0(i,t),e.length?new gn({points:e,options:{tension:0},_loop:n,_fullLoop:n}):null}function xu(i){return i&&i.fill!==!1}function l0(i,t,e){let s=i[t].fill,r=[t],o;if(!e)return s;for(;s!==!1&&r.indexOf(s)===-1;){if(!te(s))return s;if(o=i[s],!o)return!1;if(o.visible)return s;r.push(s),s=o.fill}return!1}function c0(i,t,e){let n=f0(i);if(Pt(n))return isNaN(n.value)?!1:n;let s=parseFloat(n);return te(s)&&Math.floor(s)===s?h0(n[0],t,s,e):["origin","start","end","stack","shape"].indexOf(n)>=0&&n}function h0(i,t,e,n){return(i==="-"||i==="+")&&(e=t+e),e===t||e<0||e>=n?!1:e}function u0(i,t){let e=null;return i==="start"?e=t.bottom:i==="end"?e=t.top:Pt(i)?e=t.getPixelForValue(i.value):t.getBasePixel&&(e=t.getBasePixel()),e}function d0(i,t,e){let n;return i==="start"?n=e:i==="end"?n=t.options.reverse?t.min:t.max:Pt(i)?n=i.value:n=t.getBaseValue(),n}function f0(i){let t=i.options,e=t.fill,n=St(e&&e.target,e);return n===void 0&&(n=!!t.backgroundColor),n===!1||n===null?!1:n===!0?"origin":n}function p0(i){let{scale:t,index:e,line:n}=i,s=[],r=n.segments,o=n.points,a=m0(t,e);a.push(Ku({x:null,y:t.bottom},n));for(let l=0;l<r.length;l++){let c=r[l];for(let h=c.start;h<=c.end;h++)g0(s,o[h],a)}return new gn({points:s,options:{}})}function m0(i,t){let e=[],n=i.getMatchingVisibleMetas("line");for(let s=0;s<n.length;s++){let r=n[s];if(r.index===t)break;r.hidden||e.unshift(r.dataset)}return e}function g0(i,t,e){let n=[];for(let s=0;s<e.length;s++){let r=e[s],{first:o,last:a,point:l}=_0(r,t,"x");if(!(!l||o&&a)){if(o)n.unshift(l);else if(i.push(l),!a)break}}i.push(...n)}function _0(i,t,e){let n=i.interpolate(t,e);if(!n)return{};let s=n[e],r=i.segments,o=i.points,a=!1,l=!1;for(let c=0;c<r.length;c++){let h=r[c],u=o[h.start][e],d=o[h.end][e];if(fn(s,u,d)){a=s===u,l=s===d;break}}return{first:a,last:l,point:n}}var bo=class{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,n){let{x:s,y:r,radius:o}=this;return e=e||{start:0,end:Wt},t.arc(s,r,o,e.end,e.start,!0),!n.bounds}interpolate(t){let{x:e,y:n,radius:s}=this,r=t.angle;return{x:e+Math.cos(r)*s,y:n+Math.sin(r)*s,angle:r}}};function x0(i){let{chart:t,fill:e,line:n}=i;if(te(e))return y0(t,e);if(e==="stack")return p0(i);if(e==="shape")return!0;let s=v0(i);return s instanceof bo?s:Ku(s,n)}function y0(i,t){let e=i.getDatasetMeta(t);return e&&i.isDatasetVisible(t)?e.dataset:null}function v0(i){return(i.scale||{}).getPointPositionForValue?M0(i):b0(i)}function b0(i){let{scale:t={},fill:e}=i,n=u0(e,t);if(te(n)){let s=t.isHorizontal();return{x:s?n:null,y:s?null:n}}return null}function M0(i){let{scale:t,fill:e}=i,n=t.options,s=t.getLabels().length,r=n.reverse?t.max:t.min,o=d0(e,t,r),a=[];if(n.grid.circular){let l=t.getPointPositionForValue(0,r);return new bo({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(o)})}for(let l=0;l<s;++l)a.push(t.getPointPositionForValue(l,o));return a}function dl(i,t,e){let n=x0(t),{line:s,scale:r,axis:o}=t,a=s.options,l=a.fill,c=a.backgroundColor,{above:h=c,below:u=c}=l||{};n&&s.points.length&&(cr(i,e),w0(i,{line:s,target:n,above:h,below:u,area:e,scale:r,axis:o}),hr(i))}function w0(i,t){let{line:e,target:n,above:s,below:r,area:o,scale:a}=t,l=e._loop?"angle":t.axis;i.save(),l==="x"&&r!==s&&(yu(i,n,o.top),vu(i,{line:e,target:n,color:s,scale:a,property:l}),i.restore(),i.save(),yu(i,n,o.bottom)),vu(i,{line:e,target:n,color:r,scale:a,property:l}),i.restore()}function yu(i,t,e){let{segments:n,points:s}=t,r=!0,o=!1;i.beginPath();for(let a of n){let{start:l,end:c}=a,h=s[l],u=s[Tl(l,c,s)];r?(i.moveTo(h.x,h.y),r=!1):(i.lineTo(h.x,e),i.lineTo(h.x,h.y)),o=!!t.pathSegment(i,a,{move:o}),o?i.closePath():i.lineTo(u.x,e)}i.lineTo(t.first().x,e),i.closePath(),i.clip()}function vu(i,t){let{line:e,target:n,property:s,color:r,scale:o}=t,a=o0(e,n,s);for(let{source:l,target:c,start:h,end:u}of a){let{style:{backgroundColor:d=r}={}}=l,f=n!==!0;i.save(),i.fillStyle=d,S0(i,o,f&&Sl(s,h,u)),i.beginPath();let g=!!e.pathSegment(i,l),m;if(f){g?i.closePath():bu(i,n,u,s);let p=!!n.pathSegment(i,c,{move:g,reverse:!0});m=g&&p,m||bu(i,n,h,s)}i.closePath(),i.fill(m?"evenodd":"nonzero"),i.restore()}}function S0(i,t,e){let{top:n,bottom:s}=t.chart.chartArea,{property:r,start:o,end:a}=e||{};r==="x"&&(i.beginPath(),i.rect(o,n,a-o,s-n),i.clip())}function bu(i,t,e,n){let s=t.interpolate(e,n);s&&i.lineTo(s.x,s.y)}var A0={id:"filler",afterDatasetsUpdate(i,t,e){let n=(i.data.datasets||[]).length,s=[],r,o,a,l;for(o=0;o<n;++o)r=i.getDatasetMeta(o),a=r.dataset,l=null,a&&a.options&&a instanceof gn&&(l={visible:i.isDatasetVisible(o),index:o,fill:c0(a,o,n),chart:i,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=l,s.push(l);for(o=0;o<n;++o)l=s[o],!(!l||l.fill===!1)&&(l.fill=l0(s,o,e.propagate))},beforeDraw(i,t,e){let n=e.drawTime==="beforeDraw",s=i.getSortedVisibleDatasetMetas(),r=i.chartArea;for(let o=s.length-1;o>=0;--o){let a=s[o].$filler;!a||(a.line.updateControlPoints(r,a.axis),n&&a.fill&&dl(i.ctx,a,r))}},beforeDatasetsDraw(i,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;let n=i.getSortedVisibleDatasetMetas();for(let s=n.length-1;s>=0;--s){let r=n[s].$filler;xu(r)&&dl(i.ctx,r,i.chartArea)}},beforeDatasetDraw(i,t,e){let n=t.meta.$filler;!xu(n)||e.drawTime!=="beforeDatasetDraw"||dl(i.ctx,n,i.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}},Mu=(i,t)=>{let{boxHeight:e=t,boxWidth:n=t}=i;return i.usePointStyle&&(e=Math.min(e,t),n=i.pointStyleWidth||Math.min(n,t)),{boxWidth:n,boxHeight:e,itemHeight:Math.max(t,e)}},T0=(i,t)=>i!==null&&t!==null&&i.datasetIndex===t.datasetIndex&&i.index===t.index,Mo=class extends Fe{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,n){this.maxWidth=t,this.maxHeight=e,this._margins=n,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){let t=this.options.labels||{},e=qt(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(n=>t.filter(n,this.chart.data))),t.sort&&(e=e.sort((n,s)=>t.sort(n,s,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){let{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}let n=t.labels,s=se(n.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=Mu(n,r),c,h;e.font=s.string,this.isHorizontal()?(c=this.maxWidth,h=this._fitRows(o,r,a,l)+10):(h=this.maxHeight,c=this._fitCols(o,r,a,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(h,t.maxHeight||this.maxHeight)}_fitRows(t,e,n,s){let{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],h=s+a,u=t;r.textAlign="left",r.textBaseline="middle";let d=-1,f=-h;return this.legendItems.forEach((g,m)=>{let p=n+e/2+r.measureText(g.text).width;(m===0||c[c.length-1]+p+2*a>o)&&(u+=h,c[c.length-(m>0?0:1)]=0,f+=h,d++),l[m]={left:0,top:f,row:d,width:p,height:s},c[c.length-1]+=p+a}),u}_fitCols(t,e,n,s){let{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],h=o-t,u=a,d=0,f=0,g=0,m=0;return this.legendItems.forEach((p,_)=>{let y=n+e/2+r.measureText(p.text).width;_>0&&f+s+2*a>h&&(u+=d+a,c.push({width:d,height:f}),g+=d+a,m++,d=f=0),l[_]={left:g,top:f,col:m,width:y,height:s},d=Math.max(d,y),f+=s+a}),u+=d,c.push({width:d,height:f}),u}adjustHitBoxes(){if(!this.options.display)return;let t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:n,labels:{padding:s},rtl:r}}=this,o=Pi(r,this.left,this.width);if(this.isHorizontal()){let a=0,l=ge(n,this.left+s,this.right-this.lineWidths[a]);for(let c of e)a!==c.row&&(a=c.row,l=ge(n,this.left+s,this.right-this.lineWidths[a])),c.top+=this.top+t+s,c.left=o.leftForLtr(o.x(l),c.width),l+=c.width+s}else{let a=0,l=ge(n,this.top+t+s,this.bottom-this.columnSizes[a].height);for(let c of e)c.col!==a&&(a=c.col,l=ge(n,this.top+t+s,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+s,c.left=o.leftForLtr(o.x(c.left),c.width),l+=c.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){let t=this.ctx;cr(t,this),this._draw(),hr(t)}}_draw(){let{options:t,columnSizes:e,lineWidths:n,ctx:s}=this,{align:r,labels:o}=t,a=Lt.color,l=Pi(t.rtl,this.left,this.width),c=se(o.font),{color:h,padding:u}=o,d=c.size,f=d/2,g;this.drawTitle(),s.textAlign=l.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=c.string;let{boxWidth:m,boxHeight:p,itemHeight:_}=Mu(o,d),y=function(C,v,A){if(isNaN(m)||m<=0||isNaN(p)||p<0)return;s.save();let L=St(A.lineWidth,1);if(s.fillStyle=St(A.fillStyle,a),s.lineCap=St(A.lineCap,"butt"),s.lineDashOffset=St(A.lineDashOffset,0),s.lineJoin=St(A.lineJoin,"miter"),s.lineWidth=L,s.strokeStyle=St(A.strokeStyle,a),s.setLineDash(St(A.lineDash,[])),o.usePointStyle){let B={radius:p*Math.SQRT2/2,pointStyle:A.pointStyle,rotation:A.rotation,borderWidth:L},$=l.xPlus(C,m/2),N=v+f;Xa(s,B,$,N,o.pointStyleWidth&&m)}else{let B=v+Math.max((d-p)/2,0),$=l.leftForLtr(C,m),N=si(A.borderRadius);s.beginPath(),Object.values(N).some(D=>D!==0)?us(s,{x:$,y:B,w:m,h:p,radius:N}):s.rect($,B,m,p),s.fill(),L!==0&&s.stroke()}s.restore()},M=function(C,v,A){ii(s,A.text,C,v+_/2,c,{strikethrough:A.hidden,textAlign:l.textAlign(A.textAlign)})},x=this.isHorizontal(),b=this._computeTitleHeight();x?g={x:ge(r,this.left+u,this.right-n[0]),y:this.top+u+b,line:0}:g={x:this.left+u,y:ge(r,this.top+b+u,this.bottom-e[0].height),line:0},tl(this.ctx,t.textDirection);let T=_+u;this.legendItems.forEach((C,v)=>{s.strokeStyle=C.fontColor||h,s.fillStyle=C.fontColor||h;let A=s.measureText(C.text).width,L=l.textAlign(C.textAlign||(C.textAlign=o.textAlign)),B=m+f+A,$=g.x,N=g.y;l.setWidth(this.width),x?v>0&&$+B+u>this.right&&(N=g.y+=T,g.line++,$=g.x=ge(r,this.left+u,this.right-n[g.line])):v>0&&N+T>this.bottom&&($=g.x=$+e[g.line].width+u,g.line++,N=g.y=ge(r,this.top+b+u,this.bottom-e[g.line].height));let D=l.x($);y(D,N,C),$=wh(L,$+m+f,x?$+B:this.right,t.rtl),M(l.x($),N,C),x?g.x+=B+u:g.y+=T}),el(this.ctx,t.textDirection)}drawTitle(){let t=this.options,e=t.title,n=se(e.font),s=_e(e.padding);if(!e.display)return;let r=Pi(t.rtl,this.left,this.width),o=this.ctx,a=e.position,l=n.size/2,c=s.top+l,h,u=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),h=this.top+c,u=ge(t.align,u,this.right-d);else{let g=this.columnSizes.reduce((m,p)=>Math.max(m,p.height),0);h=c+ge(t.align,this.top,this.bottom-g-t.labels.padding-this._computeTitleHeight())}let f=ge(a,u,u+d);o.textAlign=r.textAlign(no(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=n.string,ii(o,e.text,f,h,n)}_computeTitleHeight(){let t=this.options.title,e=se(t.font),n=_e(t.padding);return t.display?e.lineHeight+n.height:0}_getLegendItemAt(t,e){let n,s,r;if(fn(t,this.left,this.right)&&fn(e,this.top,this.bottom)){for(r=this.legendHitBoxes,n=0;n<r.length;++n)if(s=r[n],fn(t,s.left,s.left+s.width)&&fn(e,s.top,s.top+s.height))return this.legendItems[n]}return null}handleEvent(t){let e=this.options;if(!E0(t.type,e))return;let n=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){let s=this._hoveredItem,r=T0(s,n);s&&!r&&qt(e.onLeave,[t,s,this],this),this._hoveredItem=n,n&&!r&&qt(e.onHover,[t,n,this],this)}else n&&qt(e.onClick,[t,n,this],this)}};function E0(i,t){return!!((i==="mousemove"||i==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(i==="click"||i==="mouseup"))}var C0={id:"legend",_element:Mo,start(i,t,e){let n=i.legend=new Mo({ctx:i.ctx,options:e,chart:i});ve.configure(i,n,e),ve.addBox(i,n)},stop(i){ve.removeBox(i,i.legend),delete i.legend},beforeUpdate(i,t,e){let n=i.legend;ve.configure(i,n,e),n.options=e},afterUpdate(i){let t=i.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(i,t){t.replay||i.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(i,t,e){let n=t.datasetIndex,s=e.chart;s.isDatasetVisible(n)?(s.hide(n),t.hidden=!0):(s.show(n),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:i=>i.chart.options.color,boxWidth:40,padding:10,generateLabels(i){let t=i.data.datasets,{labels:{usePointStyle:e,pointStyle:n,textAlign:s,color:r}}=i.legend.options;return i._getSortedDatasetMetas().map(o=>{let a=o.controller.getStyle(e?0:void 0),l=_e(a.borderWidth);return{text:t[o.index].label,fillStyle:a.backgroundColor,fontColor:r,hidden:!o.visible,lineCap:a.borderCapStyle,lineDash:a.borderDash,lineDashOffset:a.borderDashOffset,lineJoin:a.borderJoinStyle,lineWidth:(l.width+l.height)/4,strokeStyle:a.borderColor,pointStyle:n||a.pointStyle,rotation:a.rotation,textAlign:s||a.textAlign,borderRadius:0,datasetIndex:o.index}},this)}},title:{color:i=>i.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:i=>!i.startsWith("on"),labels:{_scriptable:i=>!["generateLabels","filter","sort"].includes(i)}}},br=class extends Fe{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){let n=this.options;if(this.left=0,this.top=0,!n.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;let s=Xt(n.text)?n.text.length:1;this._padding=_e(n.padding);let r=s*se(n.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){let t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){let{top:e,left:n,bottom:s,right:r,options:o}=this,a=o.align,l=0,c,h,u;return this.isHorizontal()?(h=ge(a,n,r),u=e+t,c=r-n):(o.position==="left"?(h=n+t,u=ge(a,s,e),l=Zt*-.5):(h=r-t,u=ge(a,e,s),l=Zt*.5),c=s-e),{titleX:h,titleY:u,maxWidth:c,rotation:l}}draw(){let t=this.ctx,e=this.options;if(!e.display)return;let n=se(e.font),r=n.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:l,rotation:c}=this._drawArgs(r);ii(t,e.text,0,0,n,{color:e.color,maxWidth:l,rotation:c,textAlign:no(e.align),textBaseline:"middle",translation:[o,a]})}};function P0(i,t){let e=new br({ctx:i.ctx,options:t,chart:i});ve.configure(i,e,t),ve.addBox(i,e),i.titleBlock=e}var L0={id:"title",_element:br,start(i,t,e){P0(i,e)},stop(i){let t=i.titleBlock;ve.removeBox(i,t),delete i.titleBlock},beforeUpdate(i,t,e){let n=i.titleBlock;ve.configure(i,n,e),n.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}},fo=new WeakMap,R0={id:"subtitle",start(i,t,e){let n=new br({ctx:i.ctx,options:e,chart:i});ve.configure(i,n,e),ve.addBox(i,n),fo.set(i,n)},stop(i){ve.removeBox(i,fo.get(i)),fo.delete(i)},beforeUpdate(i,t,e){let n=fo.get(i);ve.configure(i,n,e),n.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}},_r={average(i){if(!i.length)return!1;let t,e,n=0,s=0,r=0;for(t=0,e=i.length;t<e;++t){let o=i[t].element;if(o&&o.hasValue()){let a=o.tooltipPosition();n+=a.x,s+=a.y,++r}}return{x:n/r,y:s/r}},nearest(i,t){if(!i.length)return!1;let e=t.x,n=t.y,s=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=i.length;r<o;++r){let l=i[r].element;if(l&&l.hasValue()){let c=l.getCenterPoint(),h=jr(t,c);h<s&&(s=h,a=l)}}if(a){let l=a.tooltipPosition();e=l.x,n=l.y}return{x:e,y:n}}};function pn(i,t){return t&&(Xt(t)?Array.prototype.push.apply(i,t):i.push(t)),i}function Fn(i){return(typeof i=="string"||i instanceof String)&&i.indexOf(`
`)>-1?i.split(`
`):i}function D0(i,t){let{element:e,datasetIndex:n,index:s}=t,r=i.getDatasetMeta(n).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:i,label:o,parsed:r.getParsed(s),raw:i.data.datasets[n].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:n,element:e}}function wu(i,t){let e=i.chart.ctx,{body:n,footer:s,title:r}=i,{boxWidth:o,boxHeight:a}=t,l=se(t.bodyFont),c=se(t.titleFont),h=se(t.footerFont),u=r.length,d=s.length,f=n.length,g=_e(t.padding),m=g.height,p=0,_=n.reduce((x,b)=>x+b.before.length+b.lines.length+b.after.length,0);if(_+=i.beforeBody.length+i.afterBody.length,u&&(m+=u*c.lineHeight+(u-1)*t.titleSpacing+t.titleMarginBottom),_){let x=t.displayColors?Math.max(a,l.lineHeight):l.lineHeight;m+=f*x+(_-f)*l.lineHeight+(_-1)*t.bodySpacing}d&&(m+=t.footerMarginTop+d*h.lineHeight+(d-1)*t.footerSpacing);let y=0,M=function(x){p=Math.max(p,e.measureText(x).width+y)};return e.save(),e.font=c.string,Ut(i.title,M),e.font=l.string,Ut(i.beforeBody.concat(i.afterBody),M),y=t.displayColors?o+2+t.boxPadding:0,Ut(n,x=>{Ut(x.before,M),Ut(x.lines,M),Ut(x.after,M)}),y=0,e.font=h.string,Ut(i.footer,M),e.restore(),p+=g.width,{width:p,height:m}}function I0(i,t){let{y:e,height:n}=t;return e<n/2?"top":e>i.height-n/2?"bottom":"center"}function k0(i,t,e,n){let{x:s,width:r}=n,o=e.caretSize+e.caretPadding;if(i==="left"&&s+r+o>t.width||i==="right"&&s-r-o<0)return!0}function O0(i,t,e,n){let{x:s,width:r}=e,{width:o,chartArea:{left:a,right:l}}=i,c="center";return n==="center"?c=s<=(a+l)/2?"left":"right":s<=r/2?c="left":s>=o-r/2&&(c="right"),k0(c,i,t,e)&&(c="center"),c}function Su(i,t,e){let n=e.yAlign||t.yAlign||I0(i,e);return{xAlign:e.xAlign||t.xAlign||O0(i,t,e,n),yAlign:n}}function F0(i,t){let{x:e,width:n}=i;return t==="right"?e-=n:t==="center"&&(e-=n/2),e}function z0(i,t,e){let{y:n,height:s}=i;return t==="top"?n+=e:t==="bottom"?n-=s+e:n-=s/2,n}function Au(i,t,e,n){let{caretSize:s,caretPadding:r,cornerRadius:o}=i,{xAlign:a,yAlign:l}=e,c=s+r,{topLeft:h,topRight:u,bottomLeft:d,bottomRight:f}=si(o),g=F0(t,a),m=z0(t,l,c);return l==="center"?a==="left"?g+=c:a==="right"&&(g-=c):a==="left"?g-=Math.max(h,d)+s:a==="right"&&(g+=Math.max(u,f)+s),{x:oe(g,0,n.width-t.width),y:oe(m,0,n.height-t.height)}}function po(i,t,e){let n=_e(e.padding);return t==="center"?i.x+i.width/2:t==="right"?i.x+i.width-n.right:i.x+n.left}function Tu(i){return pn([],Fn(i))}function N0(i,t,e){return kn(i,{tooltip:t,tooltipItems:e,type:"tooltip"})}function Eu(i,t){let e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?i.override(e):i}var Mr=class extends Fe{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart||t._chart,this._chart=this.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let t=this._cachedAnimations;if(t)return t;let e=this.chart,n=this.options.setContext(this.getContext()),s=n.enabled&&e.options.animation&&n.animations,r=new _o(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=N0(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){let{callbacks:n}=e,s=n.beforeTitle.apply(this,[t]),r=n.title.apply(this,[t]),o=n.afterTitle.apply(this,[t]),a=[];return a=pn(a,Fn(s)),a=pn(a,Fn(r)),a=pn(a,Fn(o)),a}getBeforeBody(t,e){return Tu(e.callbacks.beforeBody.apply(this,[t]))}getBody(t,e){let{callbacks:n}=e,s=[];return Ut(t,r=>{let o={before:[],lines:[],after:[]},a=Eu(n,r);pn(o.before,Fn(a.beforeLabel.call(this,r))),pn(o.lines,a.label.call(this,r)),pn(o.after,Fn(a.afterLabel.call(this,r))),s.push(o)}),s}getAfterBody(t,e){return Tu(e.callbacks.afterBody.apply(this,[t]))}getFooter(t,e){let{callbacks:n}=e,s=n.beforeFooter.apply(this,[t]),r=n.footer.apply(this,[t]),o=n.afterFooter.apply(this,[t]),a=[];return a=pn(a,Fn(s)),a=pn(a,Fn(r)),a=pn(a,Fn(o)),a}_createItems(t){let e=this._active,n=this.chart.data,s=[],r=[],o=[],a=[],l,c;for(l=0,c=e.length;l<c;++l)a.push(D0(this.chart,e[l]));return t.filter&&(a=a.filter((h,u,d)=>t.filter(h,u,d,n))),t.itemSort&&(a=a.sort((h,u)=>t.itemSort(h,u,n))),Ut(a,h=>{let u=Eu(t.callbacks,h);s.push(u.labelColor.call(this,h)),r.push(u.labelPointStyle.call(this,h)),o.push(u.labelTextColor.call(this,h))}),this.labelColors=s,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){let n=this.options.setContext(this.getContext()),s=this._active,r,o=[];if(!s.length)this.opacity!==0&&(r={opacity:0});else{let a=_r[n.position].call(this,s,this._eventPosition);o=this._createItems(n),this.title=this.getTitle(o,n),this.beforeBody=this.getBeforeBody(o,n),this.body=this.getBody(o,n),this.afterBody=this.getAfterBody(o,n),this.footer=this.getFooter(o,n);let l=this._size=wu(this,n),c=Object.assign({},a,l),h=Su(this.chart,n,c),u=Au(n,c,h,this.chart);this.xAlign=h.xAlign,this.yAlign=h.yAlign,r={opacity:1,x:u.x,y:u.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),t&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,n,s){let r=this.getCaretPosition(t,n,s);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,n){let{xAlign:s,yAlign:r}=this,{caretSize:o,cornerRadius:a}=n,{topLeft:l,topRight:c,bottomLeft:h,bottomRight:u}=si(a),{x:d,y:f}=t,{width:g,height:m}=e,p,_,y,M,x,b;return r==="center"?(x=f+m/2,s==="left"?(p=d,_=p-o,M=x+o,b=x-o):(p=d+g,_=p+o,M=x-o,b=x+o),y=p):(s==="left"?_=d+Math.max(l,h)+o:s==="right"?_=d+g-Math.max(c,u)-o:_=this.caretX,r==="top"?(M=f,x=M-o,p=_-o,y=_+o):(M=f+m,x=M+o,p=_+o,y=_-o),b=M),{x1:p,x2:_,x3:y,y1:M,y2:x,y3:b}}drawTitle(t,e,n){let s=this.title,r=s.length,o,a,l;if(r){let c=Pi(n.rtl,this.x,this.width);for(t.x=po(this,n.titleAlign,n),e.textAlign=c.textAlign(n.titleAlign),e.textBaseline="middle",o=se(n.titleFont),a=n.titleSpacing,e.fillStyle=n.titleColor,e.font=o.string,l=0;l<r;++l)e.fillText(s[l],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,l+1===r&&(t.y+=n.titleMarginBottom-a)}}_drawColorBox(t,e,n,s,r){let o=this.labelColors[n],a=this.labelPointStyles[n],{boxHeight:l,boxWidth:c,boxPadding:h}=r,u=se(r.bodyFont),d=po(this,"left",r),f=s.x(d),g=l<u.lineHeight?(u.lineHeight-l)/2:0,m=e.y+g;if(r.usePointStyle){let p={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},_=s.leftForLtr(f,c)+c/2,y=m+l/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,so(t,p,_,y),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,so(t,p,_,y)}else{t.lineWidth=Pt(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;let p=s.leftForLtr(f,c-h),_=s.leftForLtr(s.xPlus(f,1),c-h-2),y=si(o.borderRadius);Object.values(y).some(M=>M!==0)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,us(t,{x:p,y:m,w:c,h:l,radius:y}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),us(t,{x:_,y:m+1,w:c-2,h:l-2,radius:y}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(p,m,c,l),t.strokeRect(p,m,c,l),t.fillStyle=o.backgroundColor,t.fillRect(_,m+1,c-2,l-2))}t.fillStyle=this.labelTextColors[n]}drawBody(t,e,n){let{body:s}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:h}=n,u=se(n.bodyFont),d=u.lineHeight,f=0,g=Pi(n.rtl,this.x,this.width),m=function(v){e.fillText(v,g.x(t.x+f),t.y+d/2),t.y+=d+r},p=g.textAlign(o),_,y,M,x,b,T,C;for(e.textAlign=o,e.textBaseline="middle",e.font=u.string,t.x=po(this,p,n),e.fillStyle=n.bodyColor,Ut(this.beforeBody,m),f=a&&p!=="right"?o==="center"?c/2+h:c+2+h:0,x=0,T=s.length;x<T;++x){for(_=s[x],y=this.labelTextColors[x],e.fillStyle=y,Ut(_.before,m),M=_.lines,a&&M.length&&(this._drawColorBox(e,t,x,g,n),d=Math.max(u.lineHeight,l)),b=0,C=M.length;b<C;++b)m(M[b]),d=u.lineHeight;Ut(_.after,m)}f=0,d=u.lineHeight,Ut(this.afterBody,m),t.y-=r}drawFooter(t,e,n){let s=this.footer,r=s.length,o,a;if(r){let l=Pi(n.rtl,this.x,this.width);for(t.x=po(this,n.footerAlign,n),t.y+=n.footerMarginTop,e.textAlign=l.textAlign(n.footerAlign),e.textBaseline="middle",o=se(n.footerFont),e.fillStyle=n.footerColor,e.font=o.string,a=0;a<r;++a)e.fillText(s[a],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+n.footerSpacing}}drawBackground(t,e,n,s){let{xAlign:r,yAlign:o}=this,{x:a,y:l}=t,{width:c,height:h}=n,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:g}=si(s.cornerRadius);e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.beginPath(),e.moveTo(a+u,l),o==="top"&&this.drawCaret(t,e,n,s),e.lineTo(a+c-d,l),e.quadraticCurveTo(a+c,l,a+c,l+d),o==="center"&&r==="right"&&this.drawCaret(t,e,n,s),e.lineTo(a+c,l+h-g),e.quadraticCurveTo(a+c,l+h,a+c-g,l+h),o==="bottom"&&this.drawCaret(t,e,n,s),e.lineTo(a+f,l+h),e.quadraticCurveTo(a,l+h,a,l+h-f),o==="center"&&r==="left"&&this.drawCaret(t,e,n,s),e.lineTo(a,l+u),e.quadraticCurveTo(a,l,a+u,l),e.closePath(),e.fill(),s.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){let e=this.chart,n=this.$animations,s=n&&n.x,r=n&&n.y;if(s||r){let o=_r[t.position].call(this,this._active,this._eventPosition);if(!o)return;let a=this._size=wu(this,t),l=Object.assign({},o,this._size),c=Su(e,t,l),h=Au(t,l,c,e);(s._to!==h.x||r._to!==h.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,h))}}_willRender(){return!!this.opacity}draw(t){let e=this.options.setContext(this.getContext()),n=this.opacity;if(!n)return;this._updateAnimationTarget(e);let s={width:this.width,height:this.height},r={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;let o=_e(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=n,this.drawBackground(r,t,s,e),tl(t,e.textDirection),r.y+=o.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),el(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){let n=this._active,s=t.map(({datasetIndex:a,index:l})=>{let c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),r=!ar(n,s),o=this._positionChanged(s,e);(r||o)&&(this._active=s,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,n=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let s=this.options,r=this._active||[],o=this._getActiveElements(t,r,e,n),a=this._positionChanged(o,t),l=e||!ar(o,r)||a;return l&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),l}_getActiveElements(t,e,n,s){let r=this.options;if(t.type==="mouseout")return[];if(!s)return e;let o=this.chart.getElementsAtEventForMode(t,r.mode,r,n);return r.reverse&&o.reverse(),o}_positionChanged(t,e){let{caretX:n,caretY:s,options:r}=this,o=_r[r.position].call(this,t,e);return o!==!1&&(n!==o.x||s!==o.y)}};Mr.positioners=_r;var B0={id:"tooltip",_element:Mr,positioners:_r,afterInit(i,t,e){e&&(i.tooltip=new Mr({chart:i,options:e}))},beforeUpdate(i,t,e){i.tooltip&&i.tooltip.initialize(e)},reset(i,t,e){i.tooltip&&i.tooltip.initialize(e)},afterDraw(i){let t=i.tooltip;if(t&&t._willRender()){let e={tooltip:t};if(i.notifyPlugins("beforeTooltipDraw",e)===!1)return;t.draw(i.ctx),i.notifyPlugins("afterTooltipDraw",e)}},afterEvent(i,t){if(i.tooltip){let e=t.replay;i.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(i,t)=>t.bodyFont.size,boxWidth:(i,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:{beforeTitle:dn,title(i){if(i.length>0){let t=i[0],e=t.chart.data.labels,n=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(n>0&&t.dataIndex<n)return e[t.dataIndex]}return""},afterTitle:dn,beforeBody:dn,beforeLabel:dn,label(i){if(this&&this.options&&this.options.mode==="dataset")return i.label+": "+i.formattedValue||i.formattedValue;let t=i.dataset.label||"";t&&(t+=": ");let e=i.formattedValue;return Dt(e)||(t+=e),t},labelColor(i){let e=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(i){let e=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:dn,afterBody:dn,beforeFooter:dn,footer:dn,afterFooter:dn}},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:i=>i!=="filter"&&i!=="itemSort"&&i!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},U0=Object.freeze({__proto__:null,Decimation:r0,Filler:A0,Legend:C0,SubTitle:R0,Title:L0,Tooltip:B0}),V0=(i,t,e,n)=>(typeof t=="string"?(e=i.push(t)-1,n.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function W0(i,t,e,n){let s=i.indexOf(t);if(s===-1)return V0(i,t,e,n);let r=i.lastIndexOf(t);return s!==r?e:s}var H0=(i,t)=>i===null?null:oe(Math.round(i),0,t),As=class extends zn{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){let e=this._addedLabels;if(e.length){let n=this.getLabels();for(let{index:s,label:r}of e)n[s]===r&&n.splice(s,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(Dt(t))return null;let n=this.getLabels();return e=isFinite(e)&&n[e]===t?e:W0(n,t,St(e,t),this._addedLabels),H0(e,n.length-1)}determineDataLimits(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),{min:n,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(n=0),e||(s=this.getLabels().length-1)),this.min=n,this.max=s}buildTicks(){let t=this.min,e=this.max,n=this.options.offset,s=[],r=this.getLabels();r=t===0&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(n?0:1),1),this._startValue=this.min-(n?.5:0);for(let o=t;o<=e;o++)s.push({value:o});return s}getLabelForValue(t){let e=this.getLabels();return t>=0&&t<e.length?e[t]:t}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}};As.id="category";As.defaults={ticks:{callback:As.prototype.getLabelForValue}};function G0(i,t){let e=[],{bounds:s,step:r,min:o,max:a,precision:l,count:c,maxTicks:h,maxDigits:u,includeBounds:d}=i,f=r||1,g=h-1,{min:m,max:p}=t,_=!Dt(o),y=!Dt(a),M=!Dt(c),x=(p-m)/(u+1),b=La((p-m)/g/f)*f,T,C,v,A;if(b<1e-14&&!_&&!y)return[{value:m},{value:p}];A=Math.ceil(p/b)-Math.floor(m/b),A>g&&(b=La(A*b/g/f)*f),Dt(l)||(T=Math.pow(10,l),b=Math.ceil(b*T)/T),s==="ticks"?(C=Math.floor(m/b)*b,v=Math.ceil(p/b)*b):(C=m,v=p),_&&y&&r&&gh((a-o)/r,b/1e3)?(A=Math.round(Math.min((a-o)/b,h)),b=(a-o)/A,C=o,v=a):M?(C=_?o:C,v=y?a:v,A=c-1,b=(v-C)/A):(A=(v-C)/b,cs(A,Math.round(A),b/1e3)?A=Math.round(A):A=Math.ceil(A));let L=Math.max(Da(b),Da(C));T=Math.pow(10,Dt(l)?L:l),C=Math.round(C*T)/T,v=Math.round(v*T)/T;let B=0;for(_&&(d&&C!==o?(e.push({value:o}),C<o&&B++,cs(Math.round((C+B*b)*T)/T,o,Cu(o,x,i))&&B++):C<o&&B++);B<A;++B)e.push({value:Math.round((C+B*b)*T)/T});return y&&d&&v!==a?e.length&&cs(e[e.length-1].value,a,Cu(a,x,i))?e[e.length-1].value=a:e.push({value:a}):(!y||v===a)&&e.push({value:v}),e}function Cu(i,t,{horizontal:e,minRotation:n}){let s=Xe(n),r=(e?Math.sin(s):Math.cos(s))||.001,o=.75*t*(""+i).length;return Math.min(t/r,o)}var Ts=class extends zn{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return Dt(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){let{beginAtZero:t}=this.options,{minDefined:e,maxDefined:n}=this.getUserBounds(),{min:s,max:r}=this,o=l=>s=e?s:l,a=l=>r=n?r:l;if(t){let l=je(s),c=je(r);l<0&&c<0?a(0):l>0&&c>0&&o(0)}if(s===r){let l=1;(r>=Number.MAX_SAFE_INTEGER||s<=Number.MIN_SAFE_INTEGER)&&(l=Math.abs(r*.05)),a(r+l),t||o(s-l)}this.min=s,this.max=r}getTickLimit(){let t=this.options.ticks,{maxTicksLimit:e,stepSize:n}=t,s;return n?(s=Math.ceil(this.max/n)-Math.floor(this.min/n)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),e=e||11),e&&(s=Math.min(e,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){let t=this.options,e=t.ticks,n=this.getTickLimit();n=Math.max(2,n);let s={maxTicks:n,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},r=this._range||this,o=G0(s,r);return t.bounds==="ticks"&&Ra(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){let t=this.ticks,e=this.min,n=this.max;if(super.configure(),this.options.offset&&t.length){let s=(n-e)/Math.max(t.length-1,1)/2;e-=s,n+=s}this._startValue=e,this._endValue=n,this._valueRange=n-e}getLabelForValue(t){return fs(t,this.chart.options.locale,this.options.ticks.format)}},wr=class extends Ts{determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=te(t)?t:0,this.max=te(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){let t=this.isHorizontal(),e=t?this.width:this.height,n=Xe(this.options.ticks.minRotation),s=(t?Math.sin(n):Math.cos(n))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/s))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}};wr.id="linear";wr.defaults={ticks:{callback:wo.formatters.numeric}};function Pu(i){return i/Math.pow(10,Math.floor(ke(i)))===1}function X0(i,t){let e=Math.floor(ke(t.max)),n=Math.ceil(t.max/Math.pow(10,e)),s=[],r=Ie(i.min,Math.pow(10,Math.floor(ke(t.min)))),o=Math.floor(ke(r)),a=Math.floor(r/Math.pow(10,o)),l=o<0?Math.pow(10,Math.abs(o)):1;do s.push({value:r,major:Pu(r)}),++a,a===10&&(a=1,++o,l=o>=0?1:l),r=Math.round(a*Math.pow(10,o)*l)/l;while(o<e||o===e&&a<n);let c=Ie(i.max,r);return s.push({value:c,major:Pu(r)}),s}var Sr=class extends zn{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){let n=Ts.prototype.parse.apply(this,[t,e]);if(n===0){this._zero=!0;return}return te(n)&&n>0?n:null}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=te(t)?Math.max(0,t):null,this.max=te(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),n=this.min,s=this.max,r=l=>n=t?n:l,o=l=>s=e?s:l,a=(l,c)=>Math.pow(10,Math.floor(ke(l))+c);n===s&&(n<=0?(r(1),o(10)):(r(a(n,-1)),o(a(s,1)))),n<=0&&r(a(s,-1)),s<=0&&o(a(n,1)),this._zero&&this.min!==this._suggestedMin&&n===a(this.min,0)&&r(a(n,-1)),this.min=n,this.max=s}buildTicks(){let t=this.options,e={min:this._userMin,max:this._userMax},n=X0(e,this);return t.bounds==="ticks"&&Ra(n,this,"value"),t.reverse?(n.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),n}getLabelForValue(t){return t===void 0?"0":fs(t,this.chart.options.locale,this.options.ticks.format)}configure(){let t=this.min;super.configure(),this._startValue=ke(t),this._valueRange=ke(this.max)-ke(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(ke(t)-this._startValue)/this._valueRange)}getValueForPixel(t){let e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}};Sr.id="logarithmic";Sr.defaults={ticks:{callback:wo.formatters.logarithmic,major:{enabled:!0}}};function Al(i){let t=i.ticks;if(t.display&&i.display){let e=_e(t.backdropPadding);return St(t.font&&t.font.size,Lt.font.size)+e.height}return 0}function q0(i,t,e){return e=Xt(e)?e:[e],{w:Ph(i,t.string,e),h:e.length*t.lineHeight}}function Lu(i,t,e,n,s){return i===n||i===s?{start:t-e/2,end:t+e/2}:i<n||i>s?{start:t-e,end:t}:{start:t,end:t+e}}function Y0(i){let t={l:i.left+i._padding.left,r:i.right-i._padding.right,t:i.top+i._padding.top,b:i.bottom-i._padding.bottom},e=Object.assign({},t),n=[],s=[],r=i._pointLabels.length,o=i.options.pointLabels,a=o.centerPointLabels?Zt/r:0;for(let l=0;l<r;l++){let c=o.setContext(i.getPointLabelContext(l));s[l]=c.padding;let h=i.getPointPosition(l,i.drawingArea+s[l],a),u=se(c.font),d=q0(i.ctx,u,i._pointLabels[l]);n[l]=d;let f=Ee(i.getIndexAngle(l)+a),g=Math.round(to(f)),m=Lu(g,h.x,d.w,0,180),p=Lu(g,h.y,d.h,90,270);$0(e,t,f,m,p)}i.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),i._pointLabelItems=Z0(i,n,s)}function $0(i,t,e,n,s){let r=Math.abs(Math.sin(e)),o=Math.abs(Math.cos(e)),a=0,l=0;n.start<t.l?(a=(t.l-n.start)/r,i.l=Math.min(i.l,t.l-a)):n.end>t.r&&(a=(n.end-t.r)/r,i.r=Math.max(i.r,t.r+a)),s.start<t.t?(l=(t.t-s.start)/o,i.t=Math.min(i.t,t.t-l)):s.end>t.b&&(l=(s.end-t.b)/o,i.b=Math.max(i.b,t.b+l))}function Z0(i,t,e){let n=[],s=i._pointLabels.length,r=i.options,o=Al(r)/2,a=i.drawingArea,l=r.pointLabels.centerPointLabels?Zt/s:0;for(let c=0;c<s;c++){let h=i.getPointPosition(c,a+o+e[c],l),u=Math.round(to(Ee(h.angle+Kt))),d=t[c],f=K0(h.y,d.h,u),g=J0(u),m=j0(h.x,d.w,g);n.push({x:h.x,y:f,textAlign:g,left:m,top:f,right:m+d.w,bottom:f+d.h})}return n}function J0(i){return i===0||i===180?"center":i<180?"left":"right"}function j0(i,t,e){return e==="right"?i-=t:e==="center"&&(i-=t/2),i}function K0(i,t,e){return e===90||e===270?i-=t/2:(e>270||e<90)&&(i-=t),i}function Q0(i,t){let{ctx:e,options:{pointLabels:n}}=i;for(let s=t-1;s>=0;s--){let r=n.setContext(i.getPointLabelContext(s)),o=se(r.font),{x:a,y:l,textAlign:c,left:h,top:u,right:d,bottom:f}=i._pointLabelItems[s],{backdropColor:g}=r;if(!Dt(g)){let m=si(r.borderRadius),p=_e(r.backdropPadding);e.fillStyle=g;let _=h-p.left,y=u-p.top,M=d-h+p.width,x=f-u+p.height;Object.values(m).some(b=>b!==0)?(e.beginPath(),us(e,{x:_,y,w:M,h:x,radius:m}),e.fill()):e.fillRect(_,y,M,x)}ii(e,i._pointLabels[s],a,l+o.lineHeight/2,o,{color:r.color,textAlign:c,textBaseline:"middle"})}}function Qu(i,t,e,n){let{ctx:s}=i;if(e)s.arc(i.xCenter,i.yCenter,t,0,Wt);else{let r=i.getPointPosition(0,t);s.moveTo(r.x,r.y);for(let o=1;o<n;o++)r=i.getPointPosition(o,t),s.lineTo(r.x,r.y)}}function t_(i,t,e,n){let s=i.ctx,r=t.circular,{color:o,lineWidth:a}=t;!r&&!n||!o||!a||e<0||(s.save(),s.strokeStyle=o,s.lineWidth=a,s.setLineDash(t.borderDash),s.lineDashOffset=t.borderDashOffset,s.beginPath(),Qu(i,e,r,n),s.closePath(),s.stroke(),s.restore())}function e_(i,t,e){return kn(i,{label:e,index:t,type:"pointLabel"})}var Di=class extends Ts{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let t=this._padding=_e(Al(this.options)/2),e=this.width=this.maxWidth-t.width,n=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+n/2+t.top),this.drawingArea=Math.floor(Math.min(e,n)/2)}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!1);this.min=te(t)&&!isNaN(t)?t:0,this.max=te(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Al(this.options))}generateTickLabels(t){Ts.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,n)=>{let s=qt(this.options.pointLabels.callback,[e,n],this);return s||s===0?s:""}).filter((e,n)=>this.chart.getDataVisibility(n))}fit(){let t=this.options;t.display&&t.pointLabels.display?Y0(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,n,s){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((n-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,n,s))}getIndexAngle(t){let e=Wt/(this._pointLabels.length||1),n=this.options.startAngle||0;return Ee(t*e+Xe(n))}getDistanceFromCenterForValue(t){if(Dt(t))return NaN;let e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(Dt(t))return NaN;let e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){let e=this._pointLabels||[];if(t>=0&&t<e.length){let n=e[t];return e_(this.getContext(),t,n)}}getPointPosition(t,e,n=0){let s=this.getIndexAngle(t)-Kt+n;return{x:Math.cos(s)*e+this.xCenter,y:Math.sin(s)*e+this.yCenter,angle:s}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){let{left:e,top:n,right:s,bottom:r}=this._pointLabelItems[t];return{left:e,top:n,right:s,bottom:r}}drawBackground(){let{backgroundColor:t,grid:{circular:e}}=this.options;if(t){let n=this.ctx;n.save(),n.beginPath(),Qu(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),n.closePath(),n.fillStyle=t,n.fill(),n.restore()}}drawGrid(){let t=this.ctx,e=this.options,{angleLines:n,grid:s}=e,r=this._pointLabels.length,o,a,l;if(e.pointLabels.display&&Q0(this,r),s.display&&this.ticks.forEach((c,h)=>{if(h!==0){a=this.getDistanceFromCenterForValue(c.value);let u=s.setContext(this.getContext(h-1));t_(this,u,a,r)}}),n.display){for(t.save(),o=r-1;o>=0;o--){let c=n.setContext(this.getPointLabelContext(o)),{color:h,lineWidth:u}=c;!u||!h||(t.lineWidth=u,t.strokeStyle=h,t.setLineDash(c.borderDash),t.lineDashOffset=c.borderDashOffset,a=this.getDistanceFromCenterForValue(e.ticks.reverse?this.min:this.max),l=this.getPointPosition(o,a),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(l.x,l.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){let t=this.ctx,e=this.options,n=e.ticks;if(!n.display)return;let s=this.getIndexAngle(0),r,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(s),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&!e.reverse)return;let c=n.setContext(this.getContext(l)),h=se(c.font);if(r=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=h.string,o=t.measureText(a.label).width,t.fillStyle=c.backdropColor;let u=_e(c.backdropPadding);t.fillRect(-o/2-u.left,-r-h.size/2-u.top,o+u.width,h.size+u.height)}ii(t,a.label,0,-r,h,{color:c.color})}),t.restore()}drawTitle(){}};Di.id="radialLinear";Di.defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:wo.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(i){return i},padding:5,centerPointLabels:!1}};Di.defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"};Di.descriptors={angleLines:{_fallback:"grid"}};var So={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Ce=Object.keys(So);function n_(i,t){return i-t}function Ru(i,t){if(Dt(t))return null;let e=i._adapter,{parser:n,round:s,isoWeekday:r}=i._parseOpts,o=t;return typeof n=="function"&&(o=n(o)),te(o)||(o=typeof n=="string"?e.parse(o,n):e.parse(o)),o===null?null:(s&&(o=s==="week"&&(Ci(r)||r===!0)?e.startOf(o,"isoWeek",r):e.startOf(o,s)),+o)}function Du(i,t,e,n){let s=Ce.length;for(let r=Ce.indexOf(i);r<s-1;++r){let o=So[Ce[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=n)return Ce[r]}return Ce[s-1]}function i_(i,t,e,n,s){for(let r=Ce.length-1;r>=Ce.indexOf(e);r--){let o=Ce[r];if(So[o].common&&i._adapter.diff(s,n,o)>=t-1)return o}return Ce[e?Ce.indexOf(e):0]}function s_(i){for(let t=Ce.indexOf(i)+1,e=Ce.length;t<e;++t)if(So[Ce[t]].common)return Ce[t]}function Iu(i,t,e){if(!e)i[t]=!0;else if(e.length){let{lo:n,hi:s}=eo(e,t),r=e[n]>=t?e[n]:e[s];i[r]=!0}}function r_(i,t,e,n){let s=i._adapter,r=+s.startOf(t[0].value,n),o=t[t.length-1].value,a,l;for(a=r;a<=o;a=+s.add(a,1,n))l=e[a],l>=0&&(t[l].major=!0);return t}function ku(i,t,e){let n=[],s={},r=t.length,o,a;for(o=0;o<r;++o)a=t[o],s[a]=o,n.push({value:a,major:!1});return r===0||!e?n:r_(i,n,s,e)}var Ii=class extends zn{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e){let n=t.time||(t.time={}),s=this._adapter=new Zm._date(t.adapters.date);s.init(e),ls(n.displayFormats,s.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:Ru(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let t=this.options,e=this._adapter,n=t.time.unit||"day",{min:s,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function l(c){!o&&!isNaN(c.min)&&(s=Math.min(s,c.min)),!a&&!isNaN(c.max)&&(r=Math.max(r,c.max))}(!o||!a)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),s=te(s)&&!isNaN(s)?s:+e.startOf(Date.now(),n),r=te(r)&&!isNaN(r)?r:+e.endOf(Date.now(),n)+1,this.min=Math.min(s,r-1),this.max=Math.max(s+1,r)}_getLabelBounds(){let t=this.getLabelTimestamps(),e=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],n=t[t.length-1]),{min:e,max:n}}buildTicks(){let t=this.options,e=t.time,n=t.ticks,s=n.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);let r=this.min,o=this.max,a=yh(s,r,o);return this._unit=e.unit||(n.autoSkip?Du(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):i_(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!n.major.enabled||this._unit==="year"?void 0:s_(this._unit),this.initOffsets(s),t.reverse&&a.reverse(),ku(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t){let e=0,n=0,s,r;this.options.offset&&t.length&&(s=this.getDecimalForValue(t[0]),t.length===1?e=1-s:e=(this.getDecimalForValue(t[1])-s)/2,r=this.getDecimalForValue(t[t.length-1]),t.length===1?n=r:n=(r-this.getDecimalForValue(t[t.length-2]))/2);let o=t.length<3?.5:.25;e=oe(e,0,o),n=oe(n,0,o),this._offsets={start:e,end:n,factor:1/(e+1+n)}}_generate(){let t=this._adapter,e=this.min,n=this.max,s=this.options,r=s.time,o=r.unit||Du(r.minUnit,e,n,this._getLabelCapacity(e)),a=St(r.stepSize,1),l=o==="week"?r.isoWeekday:!1,c=Ci(l)||l===!0,h={},u=e,d,f;if(c&&(u=+t.startOf(u,"isoWeek",l)),u=+t.startOf(u,c?"day":o),t.diff(n,e,o)>1e5*a)throw new Error(e+" and "+n+" are too far apart with stepSize of "+a+" "+o);let g=s.ticks.source==="data"&&this.getDataTimestamps();for(d=u,f=0;d<n;d=+t.add(d,a,o),f++)Iu(h,d,g);return(d===n||s.bounds==="ticks"||f===1)&&Iu(h,d,g),Object.keys(h).sort((m,p)=>m-p).map(m=>+m)}getLabelForValue(t){let e=this._adapter,n=this.options.time;return n.tooltipFormat?e.format(t,n.tooltipFormat):e.format(t,n.displayFormats.datetime)}_tickFormatFunction(t,e,n,s){let r=this.options,o=r.time.displayFormats,a=this._unit,l=this._majorUnit,c=a&&o[a],h=l&&o[l],u=n[e],d=l&&h&&u&&u.major,f=this._adapter.format(t,s||(d?h:c)),g=r.ticks.callback;return g?qt(g,[f,e,n],this):f}generateTickLabels(t){let e,n,s;for(e=0,n=t.length;e<n;++e)s=t[e],s.label=this._tickFormatFunction(s.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){let e=this._offsets,n=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+n)*e.factor)}getValueForPixel(t){let e=this._offsets,n=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+n*(this.max-this.min)}_getLabelSize(t){let e=this.options.ticks,n=this.ctx.measureText(t).width,s=Xe(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:n*r+a*o,h:n*o+a*r}}_getLabelCapacity(t){let e=this.options.time,n=e.displayFormats,s=n[e.unit]||n.millisecond,r=this._tickFormatFunction(t,0,ku(this,[t],this._majorUnit),s),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,n;if(t.length)return t;let s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(e=0,n=s.length;e<n;++e)t=t.concat(s[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){let t=this._cache.labels||[],e,n;if(t.length)return t;let s=this.getLabels();for(e=0,n=s.length;e<n;++e)t.push(Ru(this,s[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Oa(t.sort(n_))}};Ii.id="time";Ii.defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",major:{enabled:!1}}};function mo(i,t,e){let n=0,s=i.length-1,r,o,a,l;e?(t>=i[n].pos&&t<=i[s].pos&&({lo:n,hi:s}=un(i,"pos",t)),{pos:r,time:a}=i[n],{pos:o,time:l}=i[s]):(t>=i[n].time&&t<=i[s].time&&({lo:n,hi:s}=un(i,"time",t)),{time:r,pos:a}=i[n],{time:o,pos:l}=i[s]);let c=o-r;return c?a+(l-a)*(t-r)/c:a}var Ar=class extends Ii{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=mo(e,this.min),this._tableRange=mo(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){let{min:e,max:n}=this,s=[],r=[],o,a,l,c,h;for(o=0,a=t.length;o<a;++o)c=t[o],c>=e&&c<=n&&s.push(c);if(s.length<2)return[{time:e,pos:0},{time:n,pos:1}];for(o=0,a=s.length;o<a;++o)h=s[o+1],l=s[o-1],c=s[o],Math.round((h+l)/2)!==c&&r.push({time:c,pos:o/(a-1)});return r}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;let e=this.getDataTimestamps(),n=this.getLabelTimestamps();return e.length&&n.length?t=this.normalize(e.concat(n)):t=e.length?e:n,t=this._cache.all=t,t}getDecimalForValue(t){return(mo(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){let e=this._offsets,n=this.getDecimalForPixel(t)/e.factor-e.end;return mo(this._table,n*this._tableRange+this._minPos,!0)}};Ar.id="timeseries";Ar.defaults=Ii.defaults;var o_=Object.freeze({__proto__:null,CategoryScale:As,LinearScale:wr,LogarithmicScale:Sr,RadialLinearScale:Di,TimeScale:Ii,TimeSeriesScale:Ar}),td=[$m,e0,U0,o_];Ri.register(...td);var ed=Ri;var Of=$f(nd());var Wc="146";var p_=0,id=1,m_=2;var vf=1,g_=2,kr=3,Zs=0,Ze=1,vi=2,bi=0,qs=1,sd=2,rd=3,od=4,__=5,Hs=100,x_=101,y_=102,ad=103,ld=104,v_=200,b_=201,M_=202,w_=203,bf=204,Mf=205,S_=206,A_=207,T_=208,E_=209,C_=210,P_=0,L_=1,R_=2,lc=3,D_=4,I_=5,k_=6,O_=7,Hc=0,F_=1,z_=2,Xn=0,N_=1,B_=2,U_=3,V_=4,W_=5,wf=300,Js=301,js=302,cc=303,hc=304,ga=306,uc=1e3,rn=1001,dc=1002,Pe=1003,cd=1004;var hd=1005;var Ye=1006,H_=1007;var _a=1008;var qi=1009,G_=1010,X_=1011,Sf=1012,q_=1013,Vi=1014,Wi=1015,zr=1016,Y_=1017,$_=1018,Ys=1020,Z_=1021,J_=1022,on=1023,j_=1024,K_=1025,Gi=1026,Ks=1027,Q_=1028,tx=1029,ex=1030,nx=1031,ix=1033,Cl=33776,Pl=33777,Ll=33778,Rl=33779,ud=35840,dd=35841,fd=35842,pd=35843,sx=36196,md=37492,gd=37496,_d=37808,xd=37809,yd=37810,vd=37811,bd=37812,Md=37813,wd=37814,Sd=37815,Ad=37816,Td=37817,Ed=37818,Cd=37819,Pd=37820,Ld=37821,Rd=36492;var Ko=2300,Qo=2301,Dl=2302,Dd=2400,Id=2401,kd=2402;var Yi=3e3,ee=3001,rx=3200,ox=3201,Af=0,ax=1;var Hn="srgb",Hi="srgb-linear";var Il=7680;var lx=519,Od=35044;var Fd="300 es",fc=1035,Mi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var kl=Math.PI/180,zd=180/Math.PI;function Wr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function cx(i,t){return(i%t+t)%t}function Ol(i,t,e){return(1-e)*i+e*t}function Nd(i){return(i&i-1)===0&&i!==0}function pc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Lo(i,t){switch(t.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ot=class{constructor(t=0,e=0){Ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Le=class{constructor(){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],m=s[0],p=s[3],_=s[6],y=s[1],M=s[4],x=s[7],b=s[2],T=s[5],C=s[8];return r[0]=o*m+a*y+l*b,r[3]=o*p+a*M+l*T,r[6]=o*_+a*x+l*C,r[1]=c*m+h*y+u*b,r[4]=c*p+h*M+u*T,r[7]=c*_+h*x+u*C,r[2]=d*m+f*y+g*b,r[5]=d*p+f*M+g*T,r[8]=d*_+f*x+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/g;return t[0]=u*m,t[1]=(s*c-h*n)*m,t[2]=(a*n-s*o)*m,t[3]=d*m,t[4]=(h*e-s*l)*m,t[5]=(s*r-a*e)*m,t[6]=f*m,t[7]=(n*l-c*e)*m,t[8]=(o*e-n*r)*m,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){let e=Math.cos(t),n=Math.sin(t),s=this.elements,r=s[0],o=s[3],a=s[6],l=s[1],c=s[4],h=s[7];return s[0]=e*r+n*l,s[3]=e*o+n*c,s[6]=e*a+n*h,s[1]=-n*r+e*l,s[4]=-n*o+e*c,s[7]=-n*a+e*h,this}translate(t,e){let n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};function Tf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ta(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function jo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fl={[Hn]:{[Hi]:Xi},[Hi]:{[Hn]:jo}},tn={legacyMode:!0,get workingColorSpace(){return Hi},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,t,e){if(this.legacyMode||t===e||!t||!e)return i;if(Fl[t]&&Fl[t][e]!==void 0){let n=Fl[t][e];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)}},Ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ae={r:0,g:0,b:0},en={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function zl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}function Do(i,t){return t.r=i.r,t.g=i.g,t.b=i.b,t}var Ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,tn.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Hi){return this.r=t,this.g=e,this.b=n,tn.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Hi){if(t=cx(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=zl(o,r,t+1/3),this.g=zl(o,r,t),this.b=zl(o,r,t-1/3)}return tn.toWorkingColorSpace(this,s),this}setStyle(t,e=Hn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,tn.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,tn.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){let l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,h=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,h,e)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,tn.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,tn.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=Hn){let n=Ef[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}copyLinearToSRGB(t){return this.r=jo(t.r),this.g=jo(t.g),this.b=jo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Hn){return tn.fromWorkingColorSpace(Do(this,ae),t),Ue(ae.r*255,0,255)<<16^Ue(ae.g*255,0,255)<<8^Ue(ae.b*255,0,255)<<0}getHexString(t=Hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Hi){tn.fromWorkingColorSpace(Do(this,ae),e);let n=ae.r,s=ae.g,r=ae.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Hi){return tn.fromWorkingColorSpace(Do(this,ae),e),t.r=ae.r,t.g=ae.g,t.b=ae.b,t}getStyle(t=Hn){return tn.fromWorkingColorSpace(Do(this,ae),t),t!==Hn?`color(${t} ${ae.r} ${ae.g} ${ae.b})`:`rgb(${ae.r*255|0},${ae.g*255|0},${ae.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(en),en.h+=t,en.s+=e,en.l+=n,this.setHSL(en.h,en.s,en.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(en),t.getHSL(Ro);let n=Ol(en.h,Ro.h,e),s=Ol(en.s,Ro.s,e),r=Ol(en.l,Ro.l,e);return this.setHSL(n,s,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};Ft.NAMES=Ef;var Ps,ea=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ps===void 0&&(Ps=ta("canvas")),Ps.width=t.width,Ps.height=t.height;let n=Ps.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ps}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ta("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xi(e[n]/255)*255):e[n]=Xi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},na=class{constructor(t=null){this.isSource=!0,this.uuid=Wr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Nl(s[o].image)):r.push(Nl(s[o]))}else r=Nl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Nl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ea.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var hx=0,Ve=class extends Mi{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=rn,s=rn,r=Ye,o=_a,a=on,l=qi,c=1,h=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=Wr(),this.name="",this.source=new na(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case uc:t.x=t.x-Math.floor(t.x);break;case rn:t.x=t.x<0?0:1;break;case dc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case uc:t.y=t.y-Math.floor(t.y);break;case rn:t.y=t.y<0?0:1;break;case dc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}};Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=wf;var $t=class{constructor(t=0,e=0,n=0,s=1){$t.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],m=l[2],p=l[6],_=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,x=(f+1)/2,b=(_+1)/2,T=(h+d)/4,C=(u+m)/4,v=(g+p)/4;return M>x&&M>b?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=C/n):x>b?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=v/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=C/r,s=v/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-m)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yn=class extends Mi{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new $t(0,0,t,e),this.scissorTest=!1,this.viewport=new $t(0,0,t,e);let s={width:t,height:e,depth:1};this.texture=new Ve(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ye,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new na(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ia=class extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mc=class extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var En=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],m=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=m;return}if(u!==m||l!==d||c!==f||h!==g){let p=1-a,_=l*d+c*f+h*g+u*m,y=_>=0?1:-1,M=1-_*_;if(M>Number.EPSILON){let b=Math.sqrt(M),T=Math.atan2(b,_*y);p=Math.sin(p*T)/b,a=Math.sin(a*T)/b}let x=a*y;if(l=l*p+d*x,c=c*p+f*x,h=h*p+g*x,u=u*p+m*x,p===1-a){let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*s-a*n,h=l*n+a*e-r*s,u=l*s+r*n-o*e,d=-r*e-o*n-a*s;return this.x=c*l+d*-r+h*-a-u*-o,this.y=h*l+d*-o+u*-r-c*-a,this.z=u*l+d*-a+c*-o-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bl.copy(this).projectOnVector(t),this.sub(Bl)}reflect(t){return this.sub(Bl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bl=new R,Bd=new En,$i=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.length;l<c;l+=3){let h=t[l],u=t[l+1],d=t[l+2];h<e&&(e=h),u<n&&(n=u),d<s&&(s=d),h>r&&(r=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(e,n,s),this.max.set(r,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.count;l<c;l++){let h=t.getX(l),u=t.getY(l),d=t.getZ(l);h<e&&(e=h),u<n&&(n=u),d<s&&(s=d),h>r&&(r=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(e,n,s),this.max.set(r,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Fi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){let r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Fi.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Fi)}else n.boundingBox===null&&n.computeBoundingBox(),Ul.copy(n.boundingBox),Ul.applyMatrix4(t.matrixWorld),this.union(Ul);let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Fi),Fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pr),Io.subVectors(this.max,Pr),Ls.subVectors(t.a,Pr),Rs.subVectors(t.b,Pr),Ds.subVectors(t.c,Pr),di.subVectors(Rs,Ls),fi.subVectors(Ds,Rs),zi.subVectors(Ls,Ds);let e=[0,-di.z,di.y,0,-fi.z,fi.y,0,-zi.z,zi.y,di.z,0,-di.x,fi.z,0,-fi.x,zi.z,0,-zi.x,-di.y,di.x,0,-fi.y,fi.x,0,-zi.y,zi.x,0];return!Vl(e,Ls,Rs,Ds,Io)||(e=[1,0,0,0,1,0,0,0,1],!Vl(e,Ls,Rs,Ds,Io))?!1:(ko.crossVectors(di,fi),e=[ko.x,ko.y,ko.z],Vl(e,Ls,Rs,Ds,Io))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Fi.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Fi).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Nn=[new R,new R,new R,new R,new R,new R,new R,new R],Fi=new R,Ul=new $i,Ls=new R,Rs=new R,Ds=new R,di=new R,fi=new R,zi=new R,Pr=new R,Io=new R,ko=new R,Ni=new R;function Vl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ni.fromArray(i,r);let a=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=t.dot(Ni),c=e.dot(Ni),h=n.dot(Ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ux=new $i,Lr=new R,Wl=new R,Nr=class{constructor(t=new R,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ux.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lr.subVectors(t,this.center);let e=Lr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Lr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lr.copy(t.center).add(Wl)),this.expandByPoint(Lr.copy(t.center).sub(Wl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Bn=new R,Hl=new R,Oo=new R,pi=new R,Gl=new R,Fo=new R,Xl=new R,gc=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.direction).multiplyScalar(e).add(this.origin),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Hl.copy(t).add(e).multiplyScalar(.5),Oo.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(Hl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Oo),a=pi.dot(this.direction),l=-pi.dot(Oo),c=pi.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let m=1/h;u*=m,d*=m,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),s&&s.copy(Oo).multiplyScalar(d).add(Hl),f}intersectSphere(t,e){Bn.subVectors(t.center,this.origin);let n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,s,r){Gl.subVectors(e,t),Fo.subVectors(n,t),Xl.crossVectors(Gl,Fo);let o=this.direction.dot(Xl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,t);let l=a*this.direction.dot(Fo.crossVectors(pi,Fo));if(l<0)return null;let c=a*this.direction.dot(Gl.cross(pi));if(c<0||l+c>o)return null;let h=-a*pi.dot(Xl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class{constructor(){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,m,p){let _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=d,_[3]=f,_[7]=g,_[11]=m,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Is.setFromMatrixColumn(t,0).length(),r=1/Is.setFromMatrixColumn(t,1).length(),o=1/Is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,m=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-m*c,e[9]=-a*l,e[2]=m-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,m=c*u;e[0]=d+m*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=m+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,m=c*u;e[0]=d-m*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=m-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,m=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+m,e[1]=l*u,e[5]=m*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,m=a*c;e[0]=l*h,e[4]=m-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-m*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,m=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+m,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=m*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dx,t,fx)}lookAt(t,e,n){let s=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),mi.crossVectors(n,Ne),mi.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),mi.crossVectors(n,Ne)),mi.normalize(),zo.crossVectors(Ne,mi),s[0]=mi.x,s[4]=zo.x,s[8]=Ne.x,s[1]=mi.y,s[5]=zo.y,s[9]=Ne.y,s[2]=mi.z,s[6]=zo.z,s[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],m=n[6],p=n[10],_=n[14],y=n[3],M=n[7],x=n[11],b=n[15],T=s[0],C=s[4],v=s[8],A=s[12],L=s[1],B=s[5],$=s[9],N=s[13],D=s[2],O=s[6],X=s[10],Z=s[14],H=s[3],k=s[7],z=s[11],Q=s[15];return r[0]=o*T+a*L+l*D+c*H,r[4]=o*C+a*B+l*O+c*k,r[8]=o*v+a*$+l*X+c*z,r[12]=o*A+a*N+l*Z+c*Q,r[1]=h*T+u*L+d*D+f*H,r[5]=h*C+u*B+d*O+f*k,r[9]=h*v+u*$+d*X+f*z,r[13]=h*A+u*N+d*Z+f*Q,r[2]=g*T+m*L+p*D+_*H,r[6]=g*C+m*B+p*O+_*k,r[10]=g*v+m*$+p*X+_*z,r[14]=g*A+m*N+p*Z+_*Q,r[3]=y*T+M*L+x*D+b*H,r[7]=y*C+M*B+x*O+b*k,r[11]=y*v+M*$+x*X+b*z,r[15]=y*A+M*N+x*Z+b*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],m=t[7],p=t[11],_=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+m*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+p*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+_*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],m=t[13],p=t[14],_=t[15],y=u*p*c-m*d*c+m*l*f-a*p*f-u*l*_+a*d*_,M=g*d*c-h*p*c-g*l*f+o*p*f+h*l*_-o*d*_,x=h*m*c-g*u*c+g*a*f-o*m*f-h*a*_+o*u*_,b=g*u*l-h*m*l-g*a*d+o*m*d+h*a*p-o*u*p,T=e*y+n*M+s*x+r*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return t[0]=y*C,t[1]=(m*d*r-u*p*r-m*s*f+n*p*f+u*s*_-n*d*_)*C,t[2]=(a*p*r-m*l*r+m*s*c-n*p*c-a*s*_+n*l*_)*C,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*C,t[4]=M*C,t[5]=(h*p*r-g*d*r+g*s*f-e*p*f-h*s*_+e*d*_)*C,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*_-e*l*_)*C,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*C,t[8]=x*C,t[9]=(g*u*r-h*m*r-g*n*f+e*m*f+h*n*_-e*u*_)*C,t[10]=(o*m*r-g*a*r+g*n*c-e*m*c-o*n*_+e*a*_)*C,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*C,t[12]=b*C,t[13]=(h*m*s-g*u*s+g*n*d-e*m*d-h*n*p+e*u*p)*C,t[14]=(g*a*s-o*m*s-g*n*l+e*m*l+o*n*p-e*a*p)*C,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,m=o*h,p=o*u,_=a*u,y=l*c,M=l*h,x=l*u,b=n.x,T=n.y,C=n.z;return s[0]=(1-(m+_))*b,s[1]=(f+x)*b,s[2]=(g-M)*b,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(d+_))*T,s[6]=(p+y)*T,s[7]=0,s[8]=(g+M)*C,s[9]=(p-y)*C,s[10]=(1-(d+m))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Is.set(s[0],s[1],s[2]).length(),o=Is.set(s[4],s[5],s[6]).length(),a=Is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],nn.copy(this);let c=1/r,h=1/o,u=1/a;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,e.setFromRotationMatrix(nn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o){let a=this.elements,l=2*r/(e-t),c=2*r/(n-s),h=(e+t)/(e-t),u=(n+s)/(n-s),d=-(o+r)/(o-r),f=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,s,r,o){let a=this.elements,l=1/(e-t),c=1/(n-s),h=1/(o-r),u=(e+t)*l,d=(n+s)*c,f=(o+r)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Is=new R,nn=new ne,dx=new R(0,0,0),fx=new R(1,1,1),mi=new R,zo=new R,Ne=new R,Ud=new ne,Vd=new En,Zi=class{constructor(t=0,e=0,n=0,s=Zi.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ud.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ud,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vd.setFromEuler(this),this.setFromQuaternion(Vd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}};Zi.DefaultOrder="XYZ";Zi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var sa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},px=0,Wd=new R,ks=new En,Un=new ne,No=new R,Rr=new R,mx=new R,gx=new En,Hd=new R(1,0,0),Gd=new R(0,1,0),Xd=new R(0,0,1),_x={type:"added"},qd={type:"removed"},xe=class extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=Wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DefaultUp.clone();let t=new R,e=new Zi,n=new En,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Le}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=xe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xe.DefaultMatrixWorldAutoUpdate,this.layers=new sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(Hd,t)}rotateY(t){return this.rotateOnAxis(Gd,t)}rotateZ(t){return this.rotateOnAxis(Xd,t)}translateOnAxis(t,e){return Wd.copy(t).applyQuaternion(this.quaternion),this.position.add(Wd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hd,t)}translateY(t){return this.translateOnAxis(Gd,t)}translateZ(t){return this.translateOnAxis(Xd,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?No.copy(t):No.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Rr,No,this.up):Un.lookAt(No,Rr,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(Un),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(_x)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qd)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){let e=this.children[t];e.parent=null,e.dispatchEvent(qd)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,t,mx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,gx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};xe.DefaultUp=new R(0,1,0);xe.DefaultMatrixAutoUpdate=!0;xe.DefaultMatrixWorldAutoUpdate=!0;var sn=new R,Vn=new R,ql=new R,Wn=new R,Os=new R,Fs=new R,Yd=new R,Yl=new R,$l=new R,Zl=new R,an=class{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),sn.subVectors(t,e),s.cross(sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){sn.subVectors(s,e),Vn.subVectors(n,e),ql.subVectors(t,e);let o=sn.dot(sn),a=sn.dot(Vn),l=sn.dot(ql),c=Vn.dot(Vn),h=Vn.dot(ql),u=o*c-a*a;if(u===0)return r.set(-2,-1,-1);let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Wn),Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getUV(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Wn),l.set(0,0),l.addScaledVector(r,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l}static isFrontFacing(t,e,n,s){return sn.subVectors(n,e),Vn.subVectors(t,e),sn.cross(Vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),sn.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return an.getUV(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Os.subVectors(s,n),Fs.subVectors(r,n),Yl.subVectors(t,n);let l=Os.dot(Yl),c=Fs.dot(Yl);if(l<=0&&c<=0)return e.copy(n);$l.subVectors(t,s);let h=Os.dot($l),u=Fs.dot($l);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Os,o);Zl.subVectors(t,r);let f=Os.dot(Zl),g=Fs.dot(Zl);if(g>=0&&f<=g)return e.copy(r);let m=f*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Fs,a);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Yd.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Yd,a);let _=1/(p+m+d);return o=m*_,a=d*_,e.copy(n).addScaledVector(Os,o).addScaledVector(Fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},xx=0,Ji=class extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=Wr(),this.name="",this.type="Material",this.blending=qs,this.side=Zs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=bf,this.blendDst=Mf,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=lc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Il,this.stencilZFail=Il,this.stencilZPass=Il,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}let s=this[e];if(s===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(n.blending=this.blending),this.side!==Zs&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ra=class extends Ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},re=new R,Bo=new Ot,Je=class{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=Od,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Bo.fromBufferAttribute(this,e),Bo.applyMatrix3(t),this.setXY(e,Bo.x,Bo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.applyMatrix3(t),this.setXYZ(e,re.x,re.y,re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.applyMatrix4(t),this.setXYZ(e,re.x,re.y,re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.applyNormalMatrix(t),this.setXYZ(e,re.x,re.y,re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)re.fromBufferAttribute(this,e),re.transformDirection(t),this.setXYZ(e,re.x,re.y,re.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Lo(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Lo(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Lo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Lo(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Od&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}};var oa=class extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var aa=class extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var qn=class extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}};var yx=0,qe=new ne,Jl=new xe,zs=new R,Be=new $i,Dr=new $i,fe=new R,$n=class extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=Wr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tf(t)?aa:oa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Le().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return Jl.lookAt(t),Jl.updateMatrix(),this.applyMatrix4(Jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new qn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Be.setFromBufferAttribute(r),this.morphTargetsRelative?(fe.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(fe)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Dr.setFromBufferAttribute(a),this.morphTargetsRelative?(fe.addVectors(Be.min,Dr.min),Be.expandByPoint(fe),fe.addVectors(Be.max,Dr.max),Be.expandByPoint(fe)):(Be.expandByPoint(Dr.min),Be.expandByPoint(Dr.max))}Be.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(fe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)fe.fromBufferAttribute(a,c),l&&(zs.fromBufferAttribute(t,c),fe.add(zs)),s=Math.max(s,n.distanceToSquared(fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let L=0;L<a;L++)c[L]=new R,h[L]=new R;let u=new R,d=new R,f=new R,g=new Ot,m=new Ot,p=new Ot,_=new R,y=new R;function M(L,B,$){u.fromArray(s,L*3),d.fromArray(s,B*3),f.fromArray(s,$*3),g.fromArray(o,L*2),m.fromArray(o,B*2),p.fromArray(o,$*2),d.sub(u),f.sub(u),m.sub(g),p.sub(g);let N=1/(m.x*p.y-p.x*m.y);!isFinite(N)||(_.copy(d).multiplyScalar(p.y).addScaledVector(f,-m.y).multiplyScalar(N),y.copy(f).multiplyScalar(m.x).addScaledVector(d,-p.x).multiplyScalar(N),c[L].add(_),c[B].add(_),c[$].add(_),h[L].add(y),h[B].add(y),h[$].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let L=0,B=x.length;L<B;++L){let $=x[L],N=$.start,D=$.count;for(let O=N,X=N+D;O<X;O+=3)M(n[O+0],n[O+1],n[O+2])}let b=new R,T=new R,C=new R,v=new R;function A(L){C.fromArray(r,L*3),v.copy(C);let B=c[L];b.copy(B),b.sub(C.multiplyScalar(C.dot(B))).normalize(),T.crossVectors(v,B);let N=T.dot(h[L])<0?-1:1;l[L*4]=b.x,l[L*4+1]=b.y,l[L*4+2]=b.z,l[L*4+3]=N}for(let L=0,B=x.length;L<B;++L){let $=x[L],N=$.start,D=$.count;for(let O=N,X=N+D;O<X;O+=3)A(n[O+0]),A(n[O+1]),A(n[O+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),m=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,m),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fe.fromBufferAttribute(t,e),fe.normalize(),t.setXYZ(e,fe.x,fe.y,fe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?f=l[m]*a.data.stride+a.offset:f=l[m]*h;for(let _=0;_<h;_++)d[g++]=c[f++]}return new Je(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new $n,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},$d=new ne,Ns=new gc,jl=new Nr,gi=new R,_i=new R,xi=new R,Kl=new R,Ql=new R,tc=new R,Uo=new R,Vo=new R,Wo=new R,Ho=new Ot,Go=new Ot,Xo=new Ot,ec=new R,qo=new R,$e=class extends xe{constructor(t=new $n,e=new ra){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),jl.copy(n.boundingSphere),jl.applyMatrix4(r),t.ray.intersectsSphere(jl)===!1)||($d.copy(r).invert(),Ns.copy(t.ray).applyMatrix4($d),n.boundingBox!==null&&Ns.intersectsBox(n.boundingBox)===!1))return;let o,a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,f=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,p=f.length;m<p;m++){let _=f[m],y=s[_.materialIndex],M=Math.max(_.start,g.start),x=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let b=M,T=x;b<T;b+=3){let C=a.getX(b),v=a.getX(b+1),A=a.getX(b+2);o=Yo(this,y,t,Ns,l,c,h,u,d,C,v,A),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{let m=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let _=m,y=p;_<y;_+=3){let M=a.getX(_),x=a.getX(_+1),b=a.getX(_+2);o=Yo(this,s,t,Ns,l,c,h,u,d,M,x,b),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,p=f.length;m<p;m++){let _=f[m],y=s[_.materialIndex],M=Math.max(_.start,g.start),x=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let b=M,T=x;b<T;b+=3){let C=b,v=b+1,A=b+2;o=Yo(this,y,t,Ns,l,c,h,u,d,C,v,A),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{let m=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let _=m,y=p;_<y;_+=3){let M=_,x=_+1,b=_+2;o=Yo(this,s,t,Ns,l,c,h,u,d,M,x,b),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}}};function vx(i,t,e,n,s,r,o,a){let l;if(t.side===Ze?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side!==vi,a),l===null)return null;qo.copy(a),qo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(qo);return c<e.near||c>e.far?null:{distance:c,point:qo.clone(),object:i}}function Yo(i,t,e,n,s,r,o,a,l,c,h,u){gi.fromBufferAttribute(s,c),_i.fromBufferAttribute(s,h),xi.fromBufferAttribute(s,u);let d=i.morphTargetInfluences;if(r&&d){Uo.set(0,0,0),Vo.set(0,0,0),Wo.set(0,0,0);for(let g=0,m=r.length;g<m;g++){let p=d[g],_=r[g];p!==0&&(Kl.fromBufferAttribute(_,c),Ql.fromBufferAttribute(_,h),tc.fromBufferAttribute(_,u),o?(Uo.addScaledVector(Kl,p),Vo.addScaledVector(Ql,p),Wo.addScaledVector(tc,p)):(Uo.addScaledVector(Kl.sub(gi),p),Vo.addScaledVector(Ql.sub(_i),p),Wo.addScaledVector(tc.sub(xi),p)))}gi.add(Uo),_i.add(Vo),xi.add(Wo)}i.isSkinnedMesh&&(i.boneTransform(c,gi),i.boneTransform(h,_i),i.boneTransform(u,xi));let f=vx(i,t,e,n,gi,_i,xi,ec);if(f){a&&(Ho.fromBufferAttribute(a,c),Go.fromBufferAttribute(a,h),Xo.fromBufferAttribute(a,u),f.uv=an.getUV(ec,gi,_i,xi,Ho,Go,Xo,new Ot)),l&&(Ho.fromBufferAttribute(l,c),Go.fromBufferAttribute(l,h),Xo.fromBufferAttribute(l,u),f.uv2=an.getUV(ec,gi,_i,xi,Ho,Go,Xo,new Ot));let g={a:c,b:h,c:u,normal:new R,materialIndex:0};an.getNormal(gi,_i,xi,g.normal),f.face=g}return f}var Zn=class extends $n{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new qn(c,3)),this.setAttribute("normal",new qn(h,3)),this.setAttribute("uv",new qn(u,2));function g(m,p,_,y,M,x,b,T,C,v,A){let L=x/C,B=b/v,$=x/2,N=b/2,D=T/2,O=C+1,X=v+1,Z=0,H=0,k=new R;for(let z=0;z<X;z++){let Q=z*B-N;for(let J=0;J<O;J++){let tt=J*L-$;k[m]=tt*y,k[p]=Q*M,k[_]=D,c.push(k.x,k.y,k.z),k[m]=0,k[p]=0,k[_]=T>0?1:-1,h.push(k.x,k.y,k.z),u.push(J/C),u.push(1-z/v),Z+=1}}for(let z=0;z<v;z++)for(let Q=0;Q<C;Q++){let J=d+Q+O*z,tt=d+Q+O*(z+1),lt=d+(Q+1)+O*(z+1),yt=d+(Q+1)+O*z;l.push(J,tt,yt),l.push(tt,lt,yt),H+=6}a.addGroup(f,H,A),f+=H,d+=Z}}static fromJSON(t){return new Zn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Qs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ae(i){let t={};for(let e=0;e<i.length;e++){let n=Qs(i[e]);for(let s in n)t[s]=n[s]}return t}function bx(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}var Mx={clone:Qs,merge:Ae},wx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jn=class extends Ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wx,this.fragmentShader=Sx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qs(t.uniforms),this.uniformsGroups=bx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},la=class extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Me=class extends la{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=zd*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(kl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zd*2*Math.atan(Math.tan(kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(kl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Bs=90,Us=1,_c=class extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;let s=new Me(Bs,Us,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new R(1,0,0)),this.add(s);let r=new Me(Bs,Us,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new R(-1,0,0)),this.add(r);let o=new Me(Bs,Us,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new R(0,1,0)),this.add(o);let a=new Me(Bs,Us,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new R(0,-1,0)),this.add(a);let l=new Me(Bs,Us,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new R(0,0,1)),this.add(l);let c=new Me(Bs,Us,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new R(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[s,r,o,a,l,c]=this.children,h=t.getRenderTarget(),u=t.toneMapping,d=t.xr.enabled;t.toneMapping=Xn,t.xr.enabled=!1;let f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,s),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=f,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}},ca=class extends Ve{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Js,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xc=class extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ca(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ye}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Zn(5,5,5),r=new Jn({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:bi});r.uniforms.tEquirect.value=e;let o=new $e(s,r),a=e.minFilter;return e.minFilter===_a&&(e.minFilter=Ye),new _c(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},nc=new R,Ax=new R,Tx=new Le,Gn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=nc.subVectors(n,e).cross(Ax.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){let n=t.delta(nc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Tx.getNormalMatrix(t),s=this.coplanarPoint(nc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vs=new Nr,$o=new R,Br=class{constructor(t=new Gn,e=new Gn,n=new Gn,s=new Gn,r=new Gn,o=new Gn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){let e=this.planes,n=t.elements,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],f=n[9],g=n[10],m=n[11],p=n[12],_=n[13],y=n[14],M=n[15];return e[0].setComponents(a-s,u-l,m-d,M-p).normalize(),e[1].setComponents(a+s,u+l,m+d,M+p).normalize(),e[2].setComponents(a+r,u+c,m+f,M+_).normalize(),e[3].setComponents(a-r,u-c,m-f,M-_).normalize(),e[4].setComponents(a-o,u-h,m-g,M-y).normalize(),e[5].setComponents(a+o,u+h,m+g,M+y).normalize(),this}intersectsObject(t){let e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Vs)}intersectsSprite(t){return Vs.center.set(0,0,0),Vs.radius=.7071067811865476,Vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if($o.x=s.normal.x>0?t.max.x:t.min.x,$o.y=s.normal.y>0?t.max.y:t.min.y,$o.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($o)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Cf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ex(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,d=c.usage,f=i.createBuffer();i.bindBuffer(h,f),i.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,u){let d=h.array,f=h.updateRange;i.bindBuffer(u,c),f.count===-1?i.bufferSubData(u,0,d):(e?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u===void 0?n.set(c,s(c,h)):u.version<c.version&&(r(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}var Ur=class extends $n{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],m=[],p=[];for(let _=0;_<h;_++){let y=_*d-o;for(let M=0;M<c;M++){let x=M*u-r;g.push(x,-y,0),m.push(0,0,1),p.push(M/a),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let y=0;y<a;y++){let M=y+c*_,x=y+c*(_+1),b=y+1+c*(_+1),T=y+1+c*_;f.push(M,x,T),f.push(x,b,T)}this.setIndex(f),this.setAttribute("position",new qn(g,3)),this.setAttribute("normal",new qn(m,3)),this.setAttribute("uv",new qn(p,2))}static fromJSON(t){return new Ur(t.width,t.height,t.widthSegments,t.heightSegments)}},Cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Px=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ix=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kx="vec3 transformed = vec3( position );",Ox=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fx=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,zx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,$x=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zx=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Kx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ty="gl_FragColor = linearToOutputTexel( gl_FragColor );",ey=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ny=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,iy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ry=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ay=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ly=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,py=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,my=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,gy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_y=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,xy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,vy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,by=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,My=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,wy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sy=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ay=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ty=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ey=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Py=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ly=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ky=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ny=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,By=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Uy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Vy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Wy=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Yy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,$y=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Zy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Jy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ky=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Qy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ev=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rv=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ov=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,av=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,lv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,uv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_v=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,xv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,yv=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,vv=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,bv=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Mv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,wv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Sv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Av=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ev=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Dv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Iv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,kv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ov=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Nv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uv=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$v=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,eb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nb=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ib=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Tt={alphamap_fragment:Cx,alphamap_pars_fragment:Px,alphatest_fragment:Lx,alphatest_pars_fragment:Rx,aomap_fragment:Dx,aomap_pars_fragment:Ix,begin_vertex:kx,beginnormal_vertex:Ox,bsdfs:Fx,iridescence_fragment:zx,bumpmap_pars_fragment:Nx,clipping_planes_fragment:Bx,clipping_planes_pars_fragment:Ux,clipping_planes_pars_vertex:Vx,clipping_planes_vertex:Wx,color_fragment:Hx,color_pars_fragment:Gx,color_pars_vertex:Xx,color_vertex:qx,common:Yx,cube_uv_reflection_fragment:$x,defaultnormal_vertex:Zx,displacementmap_pars_vertex:Jx,displacementmap_vertex:jx,emissivemap_fragment:Kx,emissivemap_pars_fragment:Qx,encodings_fragment:ty,encodings_pars_fragment:ey,envmap_fragment:ny,envmap_common_pars_fragment:iy,envmap_pars_fragment:sy,envmap_pars_vertex:ry,envmap_physical_pars_fragment:_y,envmap_vertex:oy,fog_vertex:ay,fog_pars_vertex:ly,fog_fragment:cy,fog_pars_fragment:hy,gradientmap_pars_fragment:uy,lightmap_fragment:dy,lightmap_pars_fragment:fy,lights_lambert_fragment:py,lights_lambert_pars_fragment:my,lights_pars_begin:gy,lights_toon_fragment:xy,lights_toon_pars_fragment:yy,lights_phong_fragment:vy,lights_phong_pars_fragment:by,lights_physical_fragment:My,lights_physical_pars_fragment:wy,lights_fragment_begin:Sy,lights_fragment_maps:Ay,lights_fragment_end:Ty,logdepthbuf_fragment:Ey,logdepthbuf_pars_fragment:Cy,logdepthbuf_pars_vertex:Py,logdepthbuf_vertex:Ly,map_fragment:Ry,map_pars_fragment:Dy,map_particle_fragment:Iy,map_particle_pars_fragment:ky,metalnessmap_fragment:Oy,metalnessmap_pars_fragment:Fy,morphcolor_vertex:zy,morphnormal_vertex:Ny,morphtarget_pars_vertex:By,morphtarget_vertex:Uy,normal_fragment_begin:Vy,normal_fragment_maps:Wy,normal_pars_fragment:Hy,normal_pars_vertex:Gy,normal_vertex:Xy,normalmap_pars_fragment:qy,clearcoat_normal_fragment_begin:Yy,clearcoat_normal_fragment_maps:$y,clearcoat_pars_fragment:Zy,iridescence_pars_fragment:Jy,output_fragment:jy,packing:Ky,premultiplied_alpha_fragment:Qy,project_vertex:tv,dithering_fragment:ev,dithering_pars_fragment:nv,roughnessmap_fragment:iv,roughnessmap_pars_fragment:sv,shadowmap_pars_fragment:rv,shadowmap_pars_vertex:ov,shadowmap_vertex:av,shadowmask_pars_fragment:lv,skinbase_vertex:cv,skinning_pars_vertex:hv,skinning_vertex:uv,skinnormal_vertex:dv,specularmap_fragment:fv,specularmap_pars_fragment:pv,tonemapping_fragment:mv,tonemapping_pars_fragment:gv,transmission_fragment:_v,transmission_pars_fragment:xv,uv_pars_fragment:yv,uv_pars_vertex:vv,uv_vertex:bv,uv2_pars_fragment:Mv,uv2_pars_vertex:wv,uv2_vertex:Sv,worldpos_vertex:Av,background_vert:Tv,background_frag:Ev,backgroundCube_vert:Cv,backgroundCube_frag:Pv,cube_vert:Lv,cube_frag:Rv,depth_vert:Dv,depth_frag:Iv,distanceRGBA_vert:kv,distanceRGBA_frag:Ov,equirect_vert:Fv,equirect_frag:zv,linedashed_vert:Nv,linedashed_frag:Bv,meshbasic_vert:Uv,meshbasic_frag:Vv,meshlambert_vert:Wv,meshlambert_frag:Hv,meshmatcap_vert:Gv,meshmatcap_frag:Xv,meshnormal_vert:qv,meshnormal_frag:Yv,meshphong_vert:$v,meshphong_frag:Zv,meshphysical_vert:Jv,meshphysical_frag:jv,meshtoon_vert:Kv,meshtoon_frag:Qv,points_vert:tb,points_frag:eb,shadow_vert:nb,shadow_frag:ib,sprite_vert:sb,sprite_frag:rb},nt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Le},uv2Transform:{value:new Le},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Le}}},Tn={basic:{uniforms:Ae([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Ae([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Ae([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Ae([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Ae([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Ae([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Ae([nt.points,nt.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Ae([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Ae([nt.common,nt.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Ae([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Ae([nt.sprite,nt.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:Ae([nt.common,nt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:Ae([nt.lights,nt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};Tn.physical={uniforms:Ae([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};function ob(i,t,e,n,s,r,o){let a=new Ft(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(p,_){let y=!1,M=_.isScene===!0?_.background:null;M&&M.isTexture&&(M=(_.backgroundBlurriness>0?e:t).get(M));let x=i.xr,b=x.getSession&&x.getSession();b&&b.environmentBlendMode==="additive"&&(M=null),M===null?m(a,l):M&&M.isColor&&(m(M,1),y=!0),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===ga)?(h===void 0&&(h=new $e(new Zn(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Qs(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,C,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,(u!==M||d!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new $e(new Ur(2,2),new Jn({name:"BackgroundMaterial",uniforms:Qs(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Zs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function m(p,_){n.buffers.color.setClear(p.r,p.g,p.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(p,_=1){a.set(p),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,m(a,l)},render:g}}function ab(i,t,e,n){let s=i.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null),c=l,h=!1;function u(D,O,X,Z,H){let k=!1;if(o){let z=m(Z,X,O);c!==z&&(c=z,f(c.object)),k=_(D,Z,X,H),k&&y(D,Z,X,H)}else{let z=O.wireframe===!0;(c.geometry!==Z.id||c.program!==X.id||c.wireframe!==z)&&(c.geometry=Z.id,c.program=X.id,c.wireframe=z,k=!0)}H!==null&&e.update(H,34963),(k||h)&&(h=!1,v(D,O,X,Z),H!==null&&i.bindBuffer(34963,e.get(H).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(D){return n.isWebGL2?i.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?i.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function m(D,O,X){let Z=X.wireframe===!0,H=a[D.id];H===void 0&&(H={},a[D.id]=H);let k=H[O.id];k===void 0&&(k={},H[O.id]=k);let z=k[Z];return z===void 0&&(z=p(d()),k[Z]=z),z}function p(D){let O=[],X=[],Z=[];for(let H=0;H<s;H++)O[H]=0,X[H]=0,Z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:Z,object:D,attributes:{},index:null}}function _(D,O,X,Z){let H=c.attributes,k=O.attributes,z=0,Q=X.getAttributes();for(let J in Q)if(Q[J].location>=0){let lt=H[J],yt=k[J];if(yt===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(yt=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(yt=D.instanceColor)),lt===void 0||lt.attribute!==yt||yt&&lt.data!==yt.data)return!0;z++}return c.attributesNum!==z||c.index!==Z}function y(D,O,X,Z){let H={},k=O.attributes,z=0,Q=X.getAttributes();for(let J in Q)if(Q[J].location>=0){let lt=k[J];lt===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(lt=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(lt=D.instanceColor));let yt={};yt.attribute=lt,lt&&lt.data&&(yt.data=lt.data),H[J]=yt,z++}c.attributes=H,c.attributesNum=z,c.index=Z}function M(){let D=c.newAttributes;for(let O=0,X=D.length;O<X;O++)D[O]=0}function x(D){b(D,0)}function b(D,O){let X=c.newAttributes,Z=c.enabledAttributes,H=c.attributeDivisors;X[D]=1,Z[D]===0&&(i.enableVertexAttribArray(D),Z[D]=1),H[D]!==O&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,O),H[D]=O)}function T(){let D=c.newAttributes,O=c.enabledAttributes;for(let X=0,Z=O.length;X<Z;X++)O[X]!==D[X]&&(i.disableVertexAttribArray(X),O[X]=0)}function C(D,O,X,Z,H,k){n.isWebGL2===!0&&(X===5124||X===5125)?i.vertexAttribIPointer(D,O,X,H,k):i.vertexAttribPointer(D,O,X,Z,H,k)}function v(D,O,X,Z){if(n.isWebGL2===!1&&(D.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;M();let H=Z.attributes,k=X.getAttributes(),z=O.defaultAttributeValues;for(let Q in k){let J=k[Q];if(J.location>=0){let tt=H[Q];if(tt===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor)),tt!==void 0){let lt=tt.normalized,yt=tt.itemSize,q=e.get(tt);if(q===void 0)continue;let Ht=q.buffer,vt=q.type,wt=q.bytesPerElement;if(tt.isInterleavedBufferAttribute){let ct=tt.data,Yt=ct.stride,Ct=tt.offset;if(ct.isInstancedInterleavedBuffer){for(let _t=0;_t<J.locationSize;_t++)b(J.location+_t,ct.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let _t=0;_t<J.locationSize;_t++)x(J.location+_t);i.bindBuffer(34962,Ht);for(let _t=0;_t<J.locationSize;_t++)C(J.location+_t,yt/J.locationSize,vt,lt,Yt*wt,(Ct+yt/J.locationSize*_t)*wt)}else{if(tt.isInstancedBufferAttribute){for(let ct=0;ct<J.locationSize;ct++)b(J.location+ct,tt.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ct=0;ct<J.locationSize;ct++)x(J.location+ct);i.bindBuffer(34962,Ht);for(let ct=0;ct<J.locationSize;ct++)C(J.location+ct,yt/J.locationSize,vt,lt,yt*wt,yt/J.locationSize*ct*wt)}}else if(z!==void 0){let lt=z[Q];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(J.location,lt);break;case 3:i.vertexAttrib3fv(J.location,lt);break;case 4:i.vertexAttrib4fv(J.location,lt);break;default:i.vertexAttrib1fv(J.location,lt)}}}}T()}function A(){$();for(let D in a){let O=a[D];for(let X in O){let Z=O[X];for(let H in Z)g(Z[H].object),delete Z[H];delete O[X]}delete a[D]}}function L(D){if(a[D.id]===void 0)return;let O=a[D.id];for(let X in O){let Z=O[X];for(let H in Z)g(Z[H].object),delete Z[H];delete O[X]}delete a[D.id]}function B(D){for(let O in a){let X=a[O];if(X[D.id]===void 0)continue;let Z=X[D.id];for(let H in Z)g(Z[H].object),delete Z[H];delete X[D.id]}}function $(){N(),h=!0,c!==l&&(c=l,f(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:$,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:L,releaseStatesOfProgram:B,initAttributes:M,enableAttribute:x,disableUnusedAttributes:T}}function lb(i,t,e,n){let s=n.isWebGL2,r;function o(c){r=c}function a(c,h){i.drawArrays(r,c,h),e.update(h,r,1)}function l(c,h,u){if(u===0)return;let d,f;if(s)d=i,f="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,c,h,u),e.update(h,r,u)}this.setMode=o,this.render=a,this.renderInstances=l}function cb(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext,a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(34930),d=i.getParameter(35660),f=i.getParameter(3379),g=i.getParameter(34076),m=i.getParameter(34921),p=i.getParameter(36347),_=i.getParameter(36348),y=i.getParameter(36349),M=d>0,x=o||t.has("OES_texture_float"),b=M&&x,T=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:M,floatFragmentTextures:x,floatVertexTextures:b,maxSamples:T}}function hb(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Gn,a=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){let g=u.length!==0||d||n!==0||s;return s=d,e=h(u,f,0),n=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,c()},this.setState=function(u,d,f){let g=u.clippingPlanes,m=u.clipIntersection,p=u.clipShadows,_=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let y=r?0:n,M=y*4,x=_.clippingState||null;l.value=x,x=h(g,d,M,f);for(let b=0;b!==M;++b)x[b]=e[b];_.clippingState=x,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let m=u!==null?u.length:0,p=null;if(m!==0){if(p=l.value,g!==!0||p===null){let _=f+m*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<_)&&(p=new Float32Array(_));for(let M=0,x=f;M!==m;++M,x+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,p}}function ub(i){let t=new WeakMap;function e(o,a){return a===cc?o.mapping=Js:a===hc&&(o.mapping=js),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){let a=o.mapping;if(a===cc||a===hc)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new xc(l.height/2);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var yc=class extends la{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Gs=4,Zd=[.125,.215,.35,.446,.526,.582],Ui=20,ic=new yc,Jd=new Ft,sc=null,Bi=(1+Math.sqrt(5))/2,Ws=1/Bi,jd=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Bi,Ws),new R(0,Bi,-Ws),new R(Ws,0,Bi),new R(-Ws,0,Bi),new R(Bi,Ws,0),new R(-Bi,Ws,0)],ha=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){sc=this._renderer.getRenderTarget(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sc),t.scissorTest=!1,Zo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Js||t.mapping===js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sc=this._renderer.getRenderTarget();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:zr,format:on,encoding:Yi,depthBuffer:!1},s=Kd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kd(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=db(r)),this._blurMaterial=fb(r,t,e)}return s}_compileMaterial(t){let e=new $e(this._lodPlanes[0],t);this._renderer.compile(e,ic)}_sceneToCubeUV(t,e,n,s){let a=new Me(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Jd),h.toneMapping=Xn,h.autoClear=!1;let f=new ra({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),g=new $e(new Zn,f),m=!1,p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,m=!0):(f.color.copy(Jd),m=!0);for(let _=0;_<6;_++){let y=_%3;y===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):y===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));let M=this._cubeSize;Zo(s,y*M,_>2?M:0,M,M),h.setRenderTarget(s),m&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Js||t.mapping===js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new $e(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Zo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ic)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=jd[(s-1)%jd.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new $e(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ui-1),m=r/g,p=isFinite(r)?1+Math.floor(h*m):Ui;p>Ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ui}`);let _=[],y=0;for(let C=0;C<Ui;++C){let v=C/m,A=Math.exp(-v*v/2);_.push(A),C===0?y+=A:C<p&&(y+=2*A)}for(let C=0;C<_.length;C++)_[C]=_[C]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;let x=this._sizeLods[s],b=3*x*(s>M-Gs?s-M+Gs:0),T=4*(this._cubeSize-x);Zo(e,b,T,3*x,2*x),l.setRenderTarget(e),l.render(u,ic)}};function db(i){let t=[],e=[],n=[],s=i,r=i-Gs+1+Zd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Gs?l=Zd[o-i+Gs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,m=3,p=2,_=1,y=new Float32Array(m*g*f),M=new Float32Array(p*g*f),x=new Float32Array(_*g*f);for(let T=0;T<f;T++){let C=T%3*2/3-1,v=T>2?0:-1,A=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];y.set(A,m*g*T),M.set(d,p*g*T);let L=[T,T,T,T,T,T];x.set(L,_*g*T)}let b=new $n;b.setAttribute("position",new Je(y,m)),b.setAttribute("uv",new Je(M,p)),b.setAttribute("faceIndex",new Je(x,_)),t.push(b),s>Gs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kd(i,t,e){let n=new Yn(i,t,e);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function fb(i,t,e){let n=new Float32Array(Ui),s=new R(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Qd(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function tf(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Gc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pb(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===cc||l===hc,h=l===Js||l===js;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new ha(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new ha(i));let d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function mb(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function gb(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],34962);let f=u.morphAttributes;for(let g in f){let m=f[g];for(let p=0,_=m.length;p<_;p++)t.update(m[p],34962)}}function c(u){let d=[],f=u.index,g=u.attributes.position,m=0;if(f!==null){let y=f.array;m=f.version;for(let M=0,x=y.length;M<x;M+=3){let b=y[M+0],T=y[M+1],C=y[M+2];d.push(b,T,T,C,C,b)}}else{let y=g.array;m=g.version;for(let M=0,x=y.length/3-1;M<x;M+=3){let b=M+0,T=M+1,C=M+2;d.push(b,T,T,C,C,b)}}let p=new(Tf(d)?aa:oa)(d,1);p.version=m;let _=r.get(u);_&&t.remove(_),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function _b(i,t,e,n){let s=n.isWebGL2,r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,f){i.drawElements(r,f,a,d*l),e.update(f,r,1)}function u(d,f,g){if(g===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,f,a,d*l,g),e.update(f,r,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function xb(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(r/3);break;case 1:e.lines+=a*(r/2);break;case 3:e.lines+=a*(r-1);break;case 2:e.lines+=a*r;break;case 0:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function yb(i,t){return i[0]-t[0]}function vb(i,t){return Math.abs(t[1])-Math.abs(i[1])}function bb(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new $t,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,d){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=g!==void 0?g.length:0,p=r.get(h);if(p===void 0||p.count!==m){let O=function(){N.dispose(),r.delete(h),h.removeEventListener("dispose",O)};p!==void 0&&p.texture.dispose();let M=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],v=h.morphAttributes.color||[],A=0;M===!0&&(A=1),x===!0&&(A=2),b===!0&&(A=3);let L=h.attributes.position.count*A,B=1;L>t.maxTextureSize&&(B=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);let $=new Float32Array(L*B*4*m),N=new ia($,L,B,m);N.type=Wi,N.needsUpdate=!0;let D=A*4;for(let X=0;X<m;X++){let Z=T[X],H=C[X],k=v[X],z=L*B*4*X;for(let Q=0;Q<Z.count;Q++){let J=Q*D;M===!0&&(o.fromBufferAttribute(Z,Q),$[z+J+0]=o.x,$[z+J+1]=o.y,$[z+J+2]=o.z,$[z+J+3]=0),x===!0&&(o.fromBufferAttribute(H,Q),$[z+J+4]=o.x,$[z+J+5]=o.y,$[z+J+6]=o.z,$[z+J+7]=0),b===!0&&(o.fromBufferAttribute(k,Q),$[z+J+8]=o.x,$[z+J+9]=o.y,$[z+J+10]=o.z,$[z+J+11]=k.itemSize===4?o.w:1)}}p={count:m,texture:N,size:new Ot(L,B)},r.set(h,p),h.addEventListener("dispose",O)}let _=0;for(let M=0;M<f.length;M++)_+=f[M];let y=h.morphTargetsRelative?1:1-_;d.getUniforms().setValue(i,"morphTargetBaseInfluence",y),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),d.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{let g=f===void 0?0:f.length,m=n[h.id];if(m===void 0||m.length!==g){m=[];for(let x=0;x<g;x++)m[x]=[x,0];n[h.id]=m}for(let x=0;x<g;x++){let b=m[x];b[0]=x,b[1]=f[x]}m.sort(vb);for(let x=0;x<8;x++)x<g&&m[x][1]?(a[x][0]=m[x][0],a[x][1]=m[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(yb);let p=h.morphAttributes.position,_=h.morphAttributes.normal,y=0;for(let x=0;x<8;x++){let b=a[x],T=b[0],C=b[1];T!==Number.MAX_SAFE_INTEGER&&C?(p&&h.getAttribute("morphTarget"+x)!==p[T]&&h.setAttribute("morphTarget"+x,p[T]),_&&h.getAttribute("morphNormal"+x)!==_[T]&&h.setAttribute("morphNormal"+x,_[T]),s[x]=C,y+=C):(p&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),_&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let M=h.morphTargetsRelative?1:1-y;d.getUniforms().setValue(i,"morphTargetBaseInfluence",M),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Mb(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);return s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Pf=new Ve,Lf=new ia,Rf=new mc,Df=new ca,ef=[],nf=[],sf=new Float32Array(16),rf=new Float32Array(9),of=new Float32Array(4);function er(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ef[s];if(r===void 0&&(r=new Float32Array(s),ef[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function xa(i,t){let e=nf[t];e===void 0&&(e=new Int32Array(t),nf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function wb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Sb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2fv(this.addr,t),ce(e,t)}}function Ab(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(le(e,t))return;i.uniform3fv(this.addr,t),ce(e,t)}}function Tb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4fv(this.addr,t),ce(e,t)}}function Eb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;of.set(n),i.uniformMatrix2fv(this.addr,!1,of),ce(e,n)}}function Cb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;rf.set(n),i.uniformMatrix3fv(this.addr,!1,rf),ce(e,n)}}function Pb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;sf.set(n),i.uniformMatrix4fv(this.addr,!1,sf),ce(e,n)}}function Lb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Rb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2iv(this.addr,t),ce(e,t)}}function Db(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;i.uniform3iv(this.addr,t),ce(e,t)}}function Ib(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4iv(this.addr,t),ce(e,t)}}function kb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ob(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2uiv(this.addr,t),ce(e,t)}}function Fb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;i.uniform3uiv(this.addr,t),ce(e,t)}}function zb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4uiv(this.addr,t),ce(e,t)}}function Nb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2D(t||Pf,s)}function Bb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Rf,s)}function Ub(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Df,s)}function Vb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Lf,s)}function Wb(i){switch(i){case 5126:return wb;case 35664:return Sb;case 35665:return Ab;case 35666:return Tb;case 35674:return Eb;case 35675:return Cb;case 35676:return Pb;case 5124:case 35670:return Lb;case 35667:case 35671:return Rb;case 35668:case 35672:return Db;case 35669:case 35673:return Ib;case 5125:return kb;case 36294:return Ob;case 36295:return Fb;case 36296:return zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Nb;case 35679:case 36299:case 36307:return Bb;case 35680:case 36300:case 36308:case 36293:return Ub;case 36289:case 36303:case 36311:case 36292:return Vb}}function Hb(i,t){i.uniform1fv(this.addr,t)}function Gb(i,t){let e=er(t,this.size,2);i.uniform2fv(this.addr,e)}function Xb(i,t){let e=er(t,this.size,3);i.uniform3fv(this.addr,e)}function qb(i,t){let e=er(t,this.size,4);i.uniform4fv(this.addr,e)}function Yb(i,t){let e=er(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $b(i,t){let e=er(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Zb(i,t){let e=er(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Jb(i,t){i.uniform1iv(this.addr,t)}function jb(i,t){i.uniform2iv(this.addr,t)}function Kb(i,t){i.uniform3iv(this.addr,t)}function Qb(i,t){i.uniform4iv(this.addr,t)}function tM(i,t){i.uniform1uiv(this.addr,t)}function eM(i,t){i.uniform2uiv(this.addr,t)}function nM(i,t){i.uniform3uiv(this.addr,t)}function iM(i,t){i.uniform4uiv(this.addr,t)}function sM(i,t,e){let n=this.cache,s=t.length,r=xa(e,s);le(n,r)||(i.uniform1iv(this.addr,r),ce(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Pf,r[o])}function rM(i,t,e){let n=this.cache,s=t.length,r=xa(e,s);le(n,r)||(i.uniform1iv(this.addr,r),ce(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Rf,r[o])}function oM(i,t,e){let n=this.cache,s=t.length,r=xa(e,s);le(n,r)||(i.uniform1iv(this.addr,r),ce(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Df,r[o])}function aM(i,t,e){let n=this.cache,s=t.length,r=xa(e,s);le(n,r)||(i.uniform1iv(this.addr,r),ce(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Lf,r[o])}function lM(i){switch(i){case 5126:return Hb;case 35664:return Gb;case 35665:return Xb;case 35666:return qb;case 35674:return Yb;case 35675:return $b;case 35676:return Zb;case 5124:case 35670:return Jb;case 35667:case 35671:return jb;case 35668:case 35672:return Kb;case 35669:case 35673:return Qb;case 5125:return tM;case 36294:return eM;case 36295:return nM;case 36296:return iM;case 35678:case 36198:case 36298:case 36306:case 35682:return sM;case 35679:case 36299:case 36307:return rM;case 35680:case 36300:case 36308:case 36293:return oM;case 36289:case 36303:case 36311:case 36292:return aM}}var vc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Wb(e.type)}},bc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=lM(e.type)}},Mc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},rc=/(\w+)(\])?(\[|\.)?/g;function af(i,t){i.seq.push(t),i.map[t.id]=t}function cM(i,t,e){let n=i.name,s=n.length;for(rc.lastIndex=0;;){let r=rc.exec(n),o=rc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){af(e,c===void 0?new vc(a,i,t):new bc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Mc(a),af(e,u)),e=u}}}var $s=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,35718);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);cM(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function lf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var hM=0;function uM(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function dM(i){switch(i){case Yi:return["Linear","( value )"];case ee:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function cf(i,t,e){let n=i.getShaderParameter(t,35713),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+uM(i.getShaderSource(t),o)}else return s}function fM(i,t){let e=dM(t);return"vec4 "+i+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function pM(i,t){let e;switch(t){case N_:e="Linear";break;case B_:e="Reinhard";break;case U_:e="OptimizedCineon";break;case V_:e="ACESFilmic";break;case W_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function mM(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Or).join(`
`)}function gM(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _M(i,t){let e={},n=i.getProgramParameter(t,35721);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Or(i){return i!==""}function hf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var xM=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(i){return i.replace(xM,yM)}function yM(i,t){let e=Tt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return wc(e)}var vM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function df(i){return i.replace(vM,bM)}function bM(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ff(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function MM(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===g_?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kr&&(t="SHADOWMAP_TYPE_VSM"),t}function wM(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Js:case js:t="ENVMAP_TYPE_CUBE";break;case ga:t="ENVMAP_TYPE_CUBE_UV";break}return t}function SM(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case js:t="ENVMAP_MODE_REFRACTION";break}return t}function AM(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hc:t="ENVMAP_BLENDING_MULTIPLY";break;case F_:t="ENVMAP_BLENDING_MIX";break;case z_:t="ENVMAP_BLENDING_ADD";break}return t}function TM(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function EM(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=MM(e),c=wM(e),h=SM(e),u=AM(e),d=TM(e),f=e.isWebGL2?"":mM(e),g=gM(r),m=s.createProgram(),p,_,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(Or).join(`
`),p.length>0&&(p+=`
`),_=[f,g].filter(Or).join(`
`),_.length>0&&(_+=`
`)):(p=[ff(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),_=[f,ff(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?Tt.tonemapping_pars_fragment:"",e.toneMapping!==Xn?pM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Tt.encodings_pars_fragment,fM("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Or).join(`
`)),o=wc(o),o=hf(o,e),o=uf(o,e),a=wc(a),a=hf(a,e),a=uf(a,e),o=df(o),a=df(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",e.glslVersion===Fd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let M=y+p+o,x=y+_+a,b=lf(s,35633,M),T=lf(s,35632,x);if(s.attachShader(m,b),s.attachShader(m,T),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),i.debug.checkShaderErrors){let A=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(b).trim(),B=s.getShaderInfoLog(T).trim(),$=!0,N=!0;if(s.getProgramParameter(m,35714)===!1){$=!1;let D=cf(s,b,"vertex"),O=cf(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,35715)+`

Program Info Log: `+A+`
`+D+`
`+O)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(L===""||B==="")&&(N=!1);N&&(this.diagnostics={runnable:$,programLog:A,vertexShader:{log:L,prefix:p},fragmentShader:{log:B,prefix:_}})}s.deleteShader(b),s.deleteShader(T);let C;this.getUniforms=function(){return C===void 0&&(C=new $s(s,m)),C};let v;return this.getAttributes=function(){return v===void 0&&(v=_M(s,m)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.name=e.shaderName,this.id=hM++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=T,this}var CM=0,Sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ac(t),e.set(t,n)),n}},Ac=class{constructor(t){this.id=CM++,this.code=t,this.usedTimes=0}};function PM(i,t,e,n,s,r,o){let a=new sa,l=new Sc,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v,A,L,B,$){let N=B.fog,D=$.geometry,O=v.isMeshStandardMaterial?B.environment:null,X=(v.isMeshStandardMaterial?e:t).get(v.envMap||O),Z=!!X&&X.mapping===ga?X.image.height:null,H=g[v.type];v.precision!==null&&(f=s.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let k=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,z=k!==void 0?k.length:0,Q=0;D.morphAttributes.position!==void 0&&(Q=1),D.morphAttributes.normal!==void 0&&(Q=2),D.morphAttributes.color!==void 0&&(Q=3);let J,tt,lt,yt;if(H){let Yt=Tn[H];J=Yt.vertexShader,tt=Yt.fragmentShader}else J=v.vertexShader,tt=v.fragmentShader,l.update(v),lt=l.getVertexShaderID(v),yt=l.getFragmentShaderID(v);let q=i.getRenderTarget(),Ht=v.alphaTest>0,vt=v.clearcoat>0,wt=v.iridescence>0;return{isWebGL2:h,shaderID:H,shaderName:v.type,vertexShader:J,fragmentShader:tt,defines:v.defines,customVertexShaderID:lt,customFragmentShaderID:yt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,instancing:$.isInstancedMesh===!0,instancingColor:$.isInstancedMesh===!0&&$.instanceColor!==null,supportsVertexTextures:d,outputEncoding:q===null?i.outputEncoding:q.isXRRenderTarget===!0?q.texture.encoding:Yi,map:!!v.map,matcap:!!v.matcap,envMap:!!X,envMapMode:X&&X.mapping,envMapCubeUVHeight:Z,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===ax,tangentSpaceNormalMap:v.normalMapType===Af,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===ee,clearcoat:vt,clearcoatMap:vt&&!!v.clearcoatMap,clearcoatRoughnessMap:vt&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:vt&&!!v.clearcoatNormalMap,iridescence:wt,iridescenceMap:wt&&!!v.iridescenceMap,iridescenceThicknessMap:wt&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===qs,alphaMap:!!v.alphaMap,alphaTest:Ht,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!D.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!N,useFog:v.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:u,skinning:$.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:Q,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:Xn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===vi,flipSided:v.side===Ze,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){let A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(let L in v.defines)A.push(L),A.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(_(A,v),y(A,v),A.push(i.outputEncoding)),A.push(v.customProgramCacheKey),A.join()}function _(v,A){v.push(A.precision),v.push(A.outputEncoding),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.combine),v.push(A.vertexUvs),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function y(v,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),v.push(a.mask)}function M(v){let A=g[v.type],L;if(A){let B=Tn[A];L=Mx.clone(B.uniforms)}else L=v.uniforms;return L}function x(v,A){let L;for(let B=0,$=c.length;B<$;B++){let N=c[B];if(N.cacheKey===A){L=N,++L.usedTimes;break}}return L===void 0&&(L=new EM(i,A,v,r),c.push(L)),L}function b(v){if(--v.usedTimes===0){let A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),v.destroy()}}function T(v){l.remove(v)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:x,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:C}}function LM(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function RM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function pf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function mf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,m,p){let _=i[t];return _===void 0?(_={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:m,group:p},i[t]=_):(_.id=u.id,_.object=u,_.geometry=d,_.material=f,_.groupOrder=g,_.renderOrder=u.renderOrder,_.z=m,_.group=p),t++,_}function a(u,d,f,g,m,p){let _=o(u,d,f,g,m,p);f.transmission>0?n.push(_):f.transparent===!0?s.push(_):e.push(_)}function l(u,d,f,g,m,p){let _=o(u,d,f,g,m,p);f.transmission>0?n.unshift(_):f.transparent===!0?s.unshift(_):e.unshift(_)}function c(u,d){e.length>1&&e.sort(u||RM),n.length>1&&n.sort(d||pf),s.length>1&&s.sort(d||pf)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function DM(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new mf,i.set(n,[o])):s>=r.length?(o=new mf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function IM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Ft};break;case"SpotLight":e={position:new R,direction:new R,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function kM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var OM=0;function FM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function zM(i,t){let e=new IM,n=kM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)s.probe.push(new R);let r=new R,o=new ne,a=new ne;function l(h,u){let d=0,f=0,g=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let m=0,p=0,_=0,y=0,M=0,x=0,b=0,T=0,C=0,v=0;h.sort(FM);let A=u!==!0?Math.PI:1;for(let B=0,$=h.length;B<$;B++){let N=h[B],D=N.color,O=N.intensity,X=N.distance,Z=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=D.r*O*A,f+=D.g*O*A,g+=D.b*O*A;else if(N.isLightProbe)for(let H=0;H<9;H++)s.probe[H].addScaledVector(N.sh.coefficients[H],O);else if(N.isDirectionalLight){let H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity*A),N.castShadow){let k=N.shadow,z=n.get(N);z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,s.directionalShadow[m]=z,s.directionalShadowMap[m]=Z,s.directionalShadowMatrix[m]=N.shadow.matrix,x++}s.directional[m]=H,m++}else if(N.isSpotLight){let H=e.get(N);H.position.setFromMatrixPosition(N.matrixWorld),H.color.copy(D).multiplyScalar(O*A),H.distance=X,H.coneCos=Math.cos(N.angle),H.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),H.decay=N.decay,s.spot[_]=H;let k=N.shadow;if(N.map&&(s.spotLightMap[C]=N.map,C++,k.updateMatrices(N),N.castShadow&&v++),s.spotLightMatrix[_]=k.matrix,N.castShadow){let z=n.get(N);z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,s.spotShadow[_]=z,s.spotShadowMap[_]=Z,T++}_++}else if(N.isRectAreaLight){let H=e.get(N);H.color.copy(D).multiplyScalar(O),H.halfWidth.set(N.width*.5,0,0),H.halfHeight.set(0,N.height*.5,0),s.rectArea[y]=H,y++}else if(N.isPointLight){let H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity*A),H.distance=N.distance,H.decay=N.decay,N.castShadow){let k=N.shadow,z=n.get(N);z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,z.shadowCameraNear=k.camera.near,z.shadowCameraFar=k.camera.far,s.pointShadow[p]=z,s.pointShadowMap[p]=Z,s.pointShadowMatrix[p]=N.shadow.matrix,b++}s.point[p]=H,p++}else if(N.isHemisphereLight){let H=e.get(N);H.skyColor.copy(N.color).multiplyScalar(O*A),H.groundColor.copy(N.groundColor).multiplyScalar(O*A),s.hemi[M]=H,M++}}y>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=nt.LTC_FLOAT_1,s.rectAreaLTC2=nt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=nt.LTC_HALF_1,s.rectAreaLTC2=nt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let L=s.hash;(L.directionalLength!==m||L.pointLength!==p||L.spotLength!==_||L.rectAreaLength!==y||L.hemiLength!==M||L.numDirectionalShadows!==x||L.numPointShadows!==b||L.numSpotShadows!==T||L.numSpotMaps!==C)&&(s.directional.length=m,s.spot.length=_,s.rectArea.length=y,s.point.length=p,s.hemi.length=M,s.directionalShadow.length=x,s.directionalShadowMap.length=x,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=x,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=T+C-v,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=v,L.directionalLength=m,L.pointLength=p,L.spotLength=_,L.rectAreaLength=y,L.hemiLength=M,L.numDirectionalShadows=x,L.numPointShadows=b,L.numSpotShadows=T,L.numSpotMaps=C,s.version=OM++)}function c(h,u){let d=0,f=0,g=0,m=0,p=0,_=u.matrixWorldInverse;for(let y=0,M=h.length;y<M;y++){let x=h[y];if(x.isDirectionalLight){let b=s.directional[d];b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),d++}else if(x.isSpotLight){let b=s.spot[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(_),g++}else if(x.isRectAreaLight){let b=s.rectArea[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(_),a.identity(),o.copy(x.matrixWorld),o.premultiply(_),a.extractRotation(o),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){let b=s.point[f];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(_),f++}else if(x.isHemisphereLight){let b=s.hemi[p];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:s}}function gf(i,t){let e=new zM(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function NM(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new gf(i,t),e.set(r,[l])):o>=a.length?(l=new gf(i,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var Tc=class extends Ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ec=class extends Ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},BM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function VM(i,t,e){let n=new Br,s=new Ot,r=new Ot,o=new $t,a=new Tc({depthPacking:ox}),l=new Ec,c={},h=e.maxTextureSize,u={0:Ze,1:Zs,2:vi},d=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:BM,fragmentShader:UM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new $n;g.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new $e(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vf,this.render=function(x,b,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||x.length===0)return;let C=i.getRenderTarget(),v=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),L=i.state;L.setBlending(bi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let B=0,$=x.length;B<$;B++){let N=x[B],D=N.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);let O=D.getFrameExtents();if(s.multiply(O),r.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/O.x),s.x=r.x*O.x,D.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/O.y),s.y=r.y*O.y,D.mapSize.y=r.y)),D.map===null){let Z=this.type!==kr?{minFilter:Pe,magFilter:Pe}:{};D.map=new Yn(s.x,s.y,Z),D.map.texture.name=N.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();let X=D.getViewportCount();for(let Z=0;Z<X;Z++){let H=D.getViewport(Z);o.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),L.viewport(o),D.updateMatrices(N,Z),n=D.getFrustum(),M(b,T,D.camera,N,this.type)}D.isPointLightShadow!==!0&&this.type===kr&&_(D,T),D.needsUpdate=!1}p.needsUpdate=!1,i.setRenderTarget(C,v,A)};function _(x,b){let T=t.update(m);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Yn(s.x,s.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,i.setRenderTarget(x.mapPass),i.clear(),i.renderBufferDirect(b,null,T,d,m,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,i.setRenderTarget(x.map),i.clear(),i.renderBufferDirect(b,null,T,f,m,null)}function y(x,b,T,C,v,A){let L=null,B=T.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(B!==void 0?L=B:L=T.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0){let $=L.uuid,N=b.uuid,D=c[$];D===void 0&&(D={},c[$]=D);let O=D[N];O===void 0&&(O=L.clone(),D[N]=O),L=O}return L.visible=b.visible,L.wireframe=b.wireframe,A===kr?L.side=b.shadowSide!==null?b.shadowSide:b.side:L.side=b.shadowSide!==null?b.shadowSide:u[b.side],L.alphaMap=b.alphaMap,L.alphaTest=b.alphaTest,L.clipShadows=b.clipShadows,L.clippingPlanes=b.clippingPlanes,L.clipIntersection=b.clipIntersection,L.displacementMap=b.displacementMap,L.displacementScale=b.displacementScale,L.displacementBias=b.displacementBias,L.wireframeLinewidth=b.wireframeLinewidth,L.linewidth=b.linewidth,T.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(T.matrixWorld),L.nearDistance=C,L.farDistance=v),L}function M(x,b,T,C,v){if(x.visible===!1)return;if(x.layers.test(b.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&v===kr)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,x.matrixWorld);let B=t.update(x),$=x.material;if(Array.isArray($)){let N=B.groups;for(let D=0,O=N.length;D<O;D++){let X=N[D],Z=$[X.materialIndex];if(Z&&Z.visible){let H=y(x,Z,C,T.near,T.far,v);i.renderBufferDirect(T,null,B,H,x,X)}}}else if($.visible){let N=y(x,$,C,T.near,T.far,v);i.renderBufferDirect(T,null,B,N,x,null)}}let L=x.children;for(let B=0,$=L.length;B<$;B++)M(L[B],b,T,C,v)}}function WM(i,t,e){let n=e.isWebGL2;function s(){let P=!1,W=new $t,j=null,ot=new $t(0,0,0,0);return{setMask:function(ut){j!==ut&&!P&&(i.colorMask(ut,ut,ut,ut),j=ut)},setLocked:function(ut){P=ut},setClear:function(ut,zt,ue,ye,wi){wi===!0&&(ut*=ye,zt*=ye,ue*=ye),W.set(ut,zt,ue,ye),ot.equals(W)===!1&&(i.clearColor(ut,zt,ue,ye),ot.copy(W))},reset:function(){P=!1,j=null,ot.set(-1,0,0,0)}}}function r(){let P=!1,W=null,j=null,ot=null;return{setTest:function(ut){ut?Ht(2929):vt(2929)},setMask:function(ut){W!==ut&&!P&&(i.depthMask(ut),W=ut)},setFunc:function(ut){if(j!==ut){switch(ut){case P_:i.depthFunc(512);break;case L_:i.depthFunc(519);break;case R_:i.depthFunc(513);break;case lc:i.depthFunc(515);break;case D_:i.depthFunc(514);break;case I_:i.depthFunc(518);break;case k_:i.depthFunc(516);break;case O_:i.depthFunc(517);break;default:i.depthFunc(515)}j=ut}},setLocked:function(ut){P=ut},setClear:function(ut){ot!==ut&&(i.clearDepth(ut),ot=ut)},reset:function(){P=!1,W=null,j=null,ot=null}}}function o(){let P=!1,W=null,j=null,ot=null,ut=null,zt=null,ue=null,ye=null,wi=null;return{setTest:function(jt){P||(jt?Ht(2960):vt(2960))},setMask:function(jt){W!==jt&&!P&&(i.stencilMask(jt),W=jt)},setFunc:function(jt,Ln,We){(j!==jt||ot!==Ln||ut!==We)&&(i.stencilFunc(jt,Ln,We),j=jt,ot=Ln,ut=We)},setOp:function(jt,Ln,We){(zt!==jt||ue!==Ln||ye!==We)&&(i.stencilOp(jt,Ln,We),zt=jt,ue=Ln,ye=We)},setLocked:function(jt){P=jt},setClear:function(jt){wi!==jt&&(i.clearStencil(jt),wi=jt)},reset:function(){P=!1,W=null,j=null,ot=null,ut=null,zt=null,ue=null,ye=null,wi=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,m=[],p=null,_=!1,y=null,M=null,x=null,b=null,T=null,C=null,v=null,A=!1,L=null,B=null,$=null,N=null,D=null,O=i.getParameter(35661),X=!1,Z=0,H=i.getParameter(7938);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=Z>=2);let k=null,z={},Q=i.getParameter(3088),J=i.getParameter(2978),tt=new $t().fromArray(Q),lt=new $t().fromArray(J);function yt(P,W,j){let ot=new Uint8Array(4),ut=i.createTexture();i.bindTexture(P,ut),i.texParameteri(P,10241,9728),i.texParameteri(P,10240,9728);for(let zt=0;zt<j;zt++)i.texImage2D(W+zt,0,6408,1,1,0,6408,5121,ot);return ut}let q={};q[3553]=yt(3553,3553,1),q[34067]=yt(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ht(2929),l.setFunc(lc),we(!1),cn(id),Ht(2884),pe(bi);function Ht(P){d[P]!==!0&&(i.enable(P),d[P]=!0)}function vt(P){d[P]!==!1&&(i.disable(P),d[P]=!1)}function wt(P,W){return f[P]!==W?(i.bindFramebuffer(P,W),f[P]=W,n&&(P===36009&&(f[36160]=W),P===36160&&(f[36009]=W)),!0):!1}function ct(P,W){let j=m,ot=!1;if(P)if(j=g.get(W),j===void 0&&(j=[],g.set(W,j)),P.isWebGLMultipleRenderTargets){let ut=P.texture;if(j.length!==ut.length||j[0]!==36064){for(let zt=0,ue=ut.length;zt<ue;zt++)j[zt]=36064+zt;j.length=ut.length,ot=!0}}else j[0]!==36064&&(j[0]=36064,ot=!0);else j[0]!==1029&&(j[0]=1029,ot=!0);ot&&(e.isWebGL2?i.drawBuffers(j):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(j))}function Yt(P){return p!==P?(i.useProgram(P),p=P,!0):!1}let Ct={[Hs]:32774,[x_]:32778,[y_]:32779};if(n)Ct[ad]=32775,Ct[ld]=32776;else{let P=t.get("EXT_blend_minmax");P!==null&&(Ct[ad]=P.MIN_EXT,Ct[ld]=P.MAX_EXT)}let _t={[v_]:0,[b_]:1,[M_]:768,[bf]:770,[C_]:776,[T_]:774,[S_]:772,[w_]:769,[Mf]:771,[E_]:775,[A_]:773};function pe(P,W,j,ot,ut,zt,ue,ye){if(P===bi){_===!0&&(vt(3042),_=!1);return}if(_===!1&&(Ht(3042),_=!0),P!==__){if(P!==y||ye!==A){if((M!==Hs||T!==Hs)&&(i.blendEquation(32774),M=Hs,T=Hs),ye)switch(P){case qs:i.blendFuncSeparate(1,771,1,771);break;case sd:i.blendFunc(1,1);break;case rd:i.blendFuncSeparate(0,769,0,1);break;case od:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case qs:i.blendFuncSeparate(770,771,1,771);break;case sd:i.blendFunc(770,1);break;case rd:i.blendFuncSeparate(0,769,0,1);break;case od:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}x=null,b=null,C=null,v=null,y=P,A=ye}return}ut=ut||W,zt=zt||j,ue=ue||ot,(W!==M||ut!==T)&&(i.blendEquationSeparate(Ct[W],Ct[ut]),M=W,T=ut),(j!==x||ot!==b||zt!==C||ue!==v)&&(i.blendFuncSeparate(_t[j],_t[ot],_t[zt],_t[ue]),x=j,b=ot,C=zt,v=ue),y=P,A=null}function Te(P,W){P.side===vi?vt(2884):Ht(2884);let j=P.side===Ze;W&&(j=!j),we(j),P.blending===qs&&P.transparent===!1?pe(bi):pe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);let ot=P.stencilWrite;c.setTest(ot),ot&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Gt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ht(32926):vt(32926)}function we(P){L!==P&&(P?i.frontFace(2304):i.frontFace(2305),L=P)}function cn(P){P!==p_?(Ht(2884),P!==B&&(P===id?i.cullFace(1029):P===m_?i.cullFace(1028):i.cullFace(1032))):vt(2884),B=P}function me(P){P!==$&&(X&&i.lineWidth(P),$=P)}function Gt(P,W,j){P?(Ht(32823),(N!==W||D!==j)&&(i.polygonOffset(W,j),N=W,D=j)):vt(32823)}function Cn(P){P?Ht(3089):vt(3089)}function Pn(P){P===void 0&&(P=33984+O-1),k!==P&&(i.activeTexture(P),k=P)}function E(P,W,j){j===void 0&&(k===null?j=33984+O-1:j=k);let ot=z[j];ot===void 0&&(ot={type:void 0,texture:void 0},z[j]=ot),(ot.type!==P||ot.texture!==W)&&(k!==j&&(i.activeTexture(j),k=j),i.bindTexture(P,W||q[P]),ot.type=P,ot.texture=W)}function w(){let P=z[k];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function V(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function st(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function bt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function mt(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xt(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ht(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function gt(P){tt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),tt.copy(P))}function dt(P){lt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),lt.copy(P))}function kt(P,W){let j=u.get(W);j===void 0&&(j=new WeakMap,u.set(W,j));let ot=j.get(P);ot===void 0&&(ot=i.getUniformBlockIndex(W,P.name),j.set(P,ot))}function Jt(P,W){let ot=u.get(W).get(P);h.get(P)!==ot&&(i.uniformBlockBinding(W,ot,P.__bindingPointIndex),h.set(P,ot))}function he(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},k=null,z={},f={},g=new WeakMap,m=[],p=null,_=!1,y=null,M=null,x=null,b=null,T=null,C=null,v=null,A=!1,L=null,B=null,$=null,N=null,D=null,tt.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ht,disable:vt,bindFramebuffer:wt,drawBuffers:ct,useProgram:Yt,setBlending:pe,setMaterial:Te,setFlipSided:we,setCullFace:cn,setLineWidth:me,setPolygonOffset:Gt,setScissorTest:Cn,activeTexture:Pn,bindTexture:E,unbindTexture:w,compressedTexImage2D:V,compressedTexImage3D:K,texImage2D:xt,texImage3D:ht,updateUBOMapping:kt,uniformBlockBinding:Jt,texStorage2D:Y,texStorage3D:mt,texSubImage2D:et,texSubImage3D:st,compressedTexSubImage2D:bt,compressedTexSubImage3D:rt,scissor:gt,viewport:dt,reset:he}}function HM(i,t,e,n,s,r,o){let a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,h=s.maxTextureSize,u=s.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),g=new WeakMap,m,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,w){return _?new OffscreenCanvas(E,w):ta("canvas")}function M(E,w,V,K){let et=1;if((E.width>K||E.height>K)&&(et=K/Math.max(E.width,E.height)),et<1||w===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let st=w?pc:Math.floor,bt=st(et*E.width),rt=st(et*E.height);m===void 0&&(m=y(bt,rt));let Y=V?y(bt,rt):m;return Y.width=bt,Y.height=rt,Y.getContext("2d").drawImage(E,0,0,bt,rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+bt+"x"+rt+")."),Y}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function x(E){return Nd(E.width)&&Nd(E.height)}function b(E){return a?!1:E.wrapS!==rn||E.wrapT!==rn||E.minFilter!==Pe&&E.minFilter!==Ye}function T(E,w){return E.generateMipmaps&&w&&E.minFilter!==Pe&&E.minFilter!==Ye}function C(E){i.generateMipmap(E)}function v(E,w,V,K,et=!1){if(a===!1)return w;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let st=w;return w===6403&&(V===5126&&(st=33326),V===5131&&(st=33325),V===5121&&(st=33321)),w===33319&&(V===5126&&(st=33328),V===5131&&(st=33327),V===5121&&(st=33323)),w===6408&&(V===5126&&(st=34836),V===5131&&(st=34842),V===5121&&(st=K===ee&&et===!1?35907:32856),V===32819&&(st=32854),V===32820&&(st=32855)),(st===33325||st===33326||st===33327||st===33328||st===34842||st===34836)&&t.get("EXT_color_buffer_float"),st}function A(E,w,V){return T(E,V)===!0||E.isFramebufferTexture&&E.minFilter!==Pe&&E.minFilter!==Ye?Math.log2(Math.max(w.width,w.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?w.mipmaps.length:1}function L(E){return E===Pe||E===cd||E===hd?9728:9729}function B(E){let w=E.target;w.removeEventListener("dispose",B),N(w),w.isVideoTexture&&g.delete(w)}function $(E){let w=E.target;w.removeEventListener("dispose",$),O(w)}function N(E){let w=n.get(E);if(w.__webglInit===void 0)return;let V=E.source,K=p.get(V);if(K){let et=K[w.__cacheKey];et.usedTimes--,et.usedTimes===0&&D(E),Object.keys(K).length===0&&p.delete(V)}n.remove(E)}function D(E){let w=n.get(E);i.deleteTexture(w.__webglTexture);let V=E.source,K=p.get(V);delete K[w.__cacheKey],o.memory.textures--}function O(E){let w=E.texture,V=n.get(E),K=n.get(w);if(K.__webglTexture!==void 0&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let et=0;et<6;et++)i.deleteFramebuffer(V.__webglFramebuffer[et]),V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer[et]);else{if(i.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&i.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&i.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let et=0;et<V.__webglColorRenderbuffer.length;et++)V.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(V.__webglColorRenderbuffer[et]);V.__webglDepthRenderbuffer&&i.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let et=0,st=w.length;et<st;et++){let bt=n.get(w[et]);bt.__webglTexture&&(i.deleteTexture(bt.__webglTexture),o.memory.textures--),n.remove(w[et])}n.remove(w),n.remove(E)}let X=0;function Z(){X=0}function H(){let E=X;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),X+=1,E}function k(E){let w=[];return w.push(E.wrapS),w.push(E.wrapT),w.push(E.wrapR||0),w.push(E.magFilter),w.push(E.minFilter),w.push(E.anisotropy),w.push(E.internalFormat),w.push(E.format),w.push(E.type),w.push(E.generateMipmaps),w.push(E.premultiplyAlpha),w.push(E.flipY),w.push(E.unpackAlignment),w.push(E.encoding),w.join()}function z(E,w){let V=n.get(E);if(E.isVideoTexture&&Cn(E),E.isRenderTargetTexture===!1&&E.version>0&&V.__version!==E.version){let K=E.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{vt(V,E,w);return}}e.bindTexture(3553,V.__webglTexture,33984+w)}function Q(E,w){let V=n.get(E);if(E.version>0&&V.__version!==E.version){vt(V,E,w);return}e.bindTexture(35866,V.__webglTexture,33984+w)}function J(E,w){let V=n.get(E);if(E.version>0&&V.__version!==E.version){vt(V,E,w);return}e.bindTexture(32879,V.__webglTexture,33984+w)}function tt(E,w){let V=n.get(E);if(E.version>0&&V.__version!==E.version){wt(V,E,w);return}e.bindTexture(34067,V.__webglTexture,33984+w)}let lt={[uc]:10497,[rn]:33071,[dc]:33648},yt={[Pe]:9728,[cd]:9984,[hd]:9986,[Ye]:9729,[H_]:9985,[_a]:9987};function q(E,w,V){if(V?(i.texParameteri(E,10242,lt[w.wrapS]),i.texParameteri(E,10243,lt[w.wrapT]),(E===32879||E===35866)&&i.texParameteri(E,32882,lt[w.wrapR]),i.texParameteri(E,10240,yt[w.magFilter]),i.texParameteri(E,10241,yt[w.minFilter])):(i.texParameteri(E,10242,33071),i.texParameteri(E,10243,33071),(E===32879||E===35866)&&i.texParameteri(E,32882,33071),(w.wrapS!==rn||w.wrapT!==rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,10240,L(w.magFilter)),i.texParameteri(E,10241,L(w.minFilter)),w.minFilter!==Pe&&w.minFilter!==Ye&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){let K=t.get("EXT_texture_filter_anisotropic");if(w.type===Wi&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===zr&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(i.texParameterf(E,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Ht(E,w){let V=!1;E.__webglInit===void 0&&(E.__webglInit=!0,w.addEventListener("dispose",B));let K=w.source,et=p.get(K);et===void 0&&(et={},p.set(K,et));let st=k(w);if(st!==E.__cacheKey){et[st]===void 0&&(et[st]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),et[st].usedTimes++;let bt=et[E.__cacheKey];bt!==void 0&&(et[E.__cacheKey].usedTimes--,bt.usedTimes===0&&D(w)),E.__cacheKey=st,E.__webglTexture=et[st].texture}return V}function vt(E,w,V){let K=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(K=35866),w.isData3DTexture&&(K=32879);let et=Ht(E,w),st=w.source;e.bindTexture(K,E.__webglTexture,33984+V);let bt=n.get(st);if(st.version!==bt.__version||et===!0){e.activeTexture(33984+V),i.pixelStorei(37440,w.flipY),i.pixelStorei(37441,w.premultiplyAlpha),i.pixelStorei(3317,w.unpackAlignment),i.pixelStorei(37443,0);let rt=b(w)&&x(w.image)===!1,Y=M(w.image,rt,!1,h);Y=Pn(w,Y);let mt=x(Y)||a,xt=r.convert(w.format,w.encoding),ht=r.convert(w.type),gt=v(w.internalFormat,xt,ht,w.encoding,w.isVideoTexture);q(K,w,mt);let dt,kt=w.mipmaps,Jt=a&&w.isVideoTexture!==!0,he=bt.__version===void 0||et===!0,P=A(w,Y,mt);if(w.isDepthTexture)gt=6402,a?w.type===Wi?gt=36012:w.type===Vi?gt=33190:w.type===Ys?gt=35056:gt=33189:w.type===Wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Gi&&gt===6402&&w.type!==Sf&&w.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Vi,ht=r.convert(w.type)),w.format===Ks&&gt===6402&&(gt=34041,w.type!==Ys&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Ys,ht=r.convert(w.type))),he&&(Jt?e.texStorage2D(3553,1,gt,Y.width,Y.height):e.texImage2D(3553,0,gt,Y.width,Y.height,0,xt,ht,null));else if(w.isDataTexture)if(kt.length>0&&mt){Jt&&he&&e.texStorage2D(3553,P,gt,kt[0].width,kt[0].height);for(let W=0,j=kt.length;W<j;W++)dt=kt[W],Jt?e.texSubImage2D(3553,W,0,0,dt.width,dt.height,xt,ht,dt.data):e.texImage2D(3553,W,gt,dt.width,dt.height,0,xt,ht,dt.data);w.generateMipmaps=!1}else Jt?(he&&e.texStorage2D(3553,P,gt,Y.width,Y.height),e.texSubImage2D(3553,0,0,0,Y.width,Y.height,xt,ht,Y.data)):e.texImage2D(3553,0,gt,Y.width,Y.height,0,xt,ht,Y.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Jt&&he&&e.texStorage3D(35866,P,gt,kt[0].width,kt[0].height,Y.depth);for(let W=0,j=kt.length;W<j;W++)dt=kt[W],w.format!==on?xt!==null?Jt?e.compressedTexSubImage3D(35866,W,0,0,0,dt.width,dt.height,Y.depth,xt,dt.data,0,0):e.compressedTexImage3D(35866,W,gt,dt.width,dt.height,Y.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage3D(35866,W,0,0,0,dt.width,dt.height,Y.depth,xt,ht,dt.data):e.texImage3D(35866,W,gt,dt.width,dt.height,Y.depth,0,xt,ht,dt.data)}else{Jt&&he&&e.texStorage2D(3553,P,gt,kt[0].width,kt[0].height);for(let W=0,j=kt.length;W<j;W++)dt=kt[W],w.format!==on?xt!==null?Jt?e.compressedTexSubImage2D(3553,W,0,0,dt.width,dt.height,xt,dt.data):e.compressedTexImage2D(3553,W,gt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage2D(3553,W,0,0,dt.width,dt.height,xt,ht,dt.data):e.texImage2D(3553,W,gt,dt.width,dt.height,0,xt,ht,dt.data)}else if(w.isDataArrayTexture)Jt?(he&&e.texStorage3D(35866,P,gt,Y.width,Y.height,Y.depth),e.texSubImage3D(35866,0,0,0,0,Y.width,Y.height,Y.depth,xt,ht,Y.data)):e.texImage3D(35866,0,gt,Y.width,Y.height,Y.depth,0,xt,ht,Y.data);else if(w.isData3DTexture)Jt?(he&&e.texStorage3D(32879,P,gt,Y.width,Y.height,Y.depth),e.texSubImage3D(32879,0,0,0,0,Y.width,Y.height,Y.depth,xt,ht,Y.data)):e.texImage3D(32879,0,gt,Y.width,Y.height,Y.depth,0,xt,ht,Y.data);else if(w.isFramebufferTexture){if(he)if(Jt)e.texStorage2D(3553,P,gt,Y.width,Y.height);else{let W=Y.width,j=Y.height;for(let ot=0;ot<P;ot++)e.texImage2D(3553,ot,gt,W,j,0,xt,ht,null),W>>=1,j>>=1}}else if(kt.length>0&&mt){Jt&&he&&e.texStorage2D(3553,P,gt,kt[0].width,kt[0].height);for(let W=0,j=kt.length;W<j;W++)dt=kt[W],Jt?e.texSubImage2D(3553,W,0,0,xt,ht,dt):e.texImage2D(3553,W,gt,xt,ht,dt);w.generateMipmaps=!1}else Jt?(he&&e.texStorage2D(3553,P,gt,Y.width,Y.height),e.texSubImage2D(3553,0,0,0,xt,ht,Y)):e.texImage2D(3553,0,gt,xt,ht,Y);T(w,mt)&&C(K),bt.__version=st.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function wt(E,w,V){if(w.image.length!==6)return;let K=Ht(E,w),et=w.source;e.bindTexture(34067,E.__webglTexture,33984+V);let st=n.get(et);if(et.version!==st.__version||K===!0){e.activeTexture(33984+V),i.pixelStorei(37440,w.flipY),i.pixelStorei(37441,w.premultiplyAlpha),i.pixelStorei(3317,w.unpackAlignment),i.pixelStorei(37443,0);let bt=w.isCompressedTexture||w.image[0].isCompressedTexture,rt=w.image[0]&&w.image[0].isDataTexture,Y=[];for(let W=0;W<6;W++)!bt&&!rt?Y[W]=M(w.image[W],!1,!0,c):Y[W]=rt?w.image[W].image:w.image[W],Y[W]=Pn(w,Y[W]);let mt=Y[0],xt=x(mt)||a,ht=r.convert(w.format,w.encoding),gt=r.convert(w.type),dt=v(w.internalFormat,ht,gt,w.encoding),kt=a&&w.isVideoTexture!==!0,Jt=st.__version===void 0||K===!0,he=A(w,mt,xt);q(34067,w,xt);let P;if(bt){kt&&Jt&&e.texStorage2D(34067,he,dt,mt.width,mt.height);for(let W=0;W<6;W++){P=Y[W].mipmaps;for(let j=0;j<P.length;j++){let ot=P[j];w.format!==on?ht!==null?kt?e.compressedTexSubImage2D(34069+W,j,0,0,ot.width,ot.height,ht,ot.data):e.compressedTexImage2D(34069+W,j,dt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?e.texSubImage2D(34069+W,j,0,0,ot.width,ot.height,ht,gt,ot.data):e.texImage2D(34069+W,j,dt,ot.width,ot.height,0,ht,gt,ot.data)}}}else{P=w.mipmaps,kt&&Jt&&(P.length>0&&he++,e.texStorage2D(34067,he,dt,Y[0].width,Y[0].height));for(let W=0;W<6;W++)if(rt){kt?e.texSubImage2D(34069+W,0,0,0,Y[W].width,Y[W].height,ht,gt,Y[W].data):e.texImage2D(34069+W,0,dt,Y[W].width,Y[W].height,0,ht,gt,Y[W].data);for(let j=0;j<P.length;j++){let ut=P[j].image[W].image;kt?e.texSubImage2D(34069+W,j+1,0,0,ut.width,ut.height,ht,gt,ut.data):e.texImage2D(34069+W,j+1,dt,ut.width,ut.height,0,ht,gt,ut.data)}}else{kt?e.texSubImage2D(34069+W,0,0,0,ht,gt,Y[W]):e.texImage2D(34069+W,0,dt,ht,gt,Y[W]);for(let j=0;j<P.length;j++){let ot=P[j];kt?e.texSubImage2D(34069+W,j+1,0,0,ht,gt,ot.image[W]):e.texImage2D(34069+W,j+1,dt,ht,gt,ot.image[W])}}}T(w,xt)&&C(34067),st.__version=et.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function ct(E,w,V,K,et){let st=r.convert(V.format,V.encoding),bt=r.convert(V.type),rt=v(V.internalFormat,st,bt,V.encoding);n.get(w).__hasExternalTextures||(et===32879||et===35866?e.texImage3D(et,0,rt,w.width,w.height,w.depth,0,st,bt,null):e.texImage2D(et,0,rt,w.width,w.height,0,st,bt,null)),e.bindFramebuffer(36160,E),Gt(w)?d.framebufferTexture2DMultisampleEXT(36160,K,et,n.get(V).__webglTexture,0,me(w)):(et===3553||et>=34069&&et<=34074)&&i.framebufferTexture2D(36160,K,et,n.get(V).__webglTexture,0),e.bindFramebuffer(36160,null)}function Yt(E,w,V){if(i.bindRenderbuffer(36161,E),w.depthBuffer&&!w.stencilBuffer){let K=33189;if(V||Gt(w)){let et=w.depthTexture;et&&et.isDepthTexture&&(et.type===Wi?K=36012:et.type===Vi&&(K=33190));let st=me(w);Gt(w)?d.renderbufferStorageMultisampleEXT(36161,st,K,w.width,w.height):i.renderbufferStorageMultisample(36161,st,K,w.width,w.height)}else i.renderbufferStorage(36161,K,w.width,w.height);i.framebufferRenderbuffer(36160,36096,36161,E)}else if(w.depthBuffer&&w.stencilBuffer){let K=me(w);V&&Gt(w)===!1?i.renderbufferStorageMultisample(36161,K,35056,w.width,w.height):Gt(w)?d.renderbufferStorageMultisampleEXT(36161,K,35056,w.width,w.height):i.renderbufferStorage(36161,34041,w.width,w.height),i.framebufferRenderbuffer(36160,33306,36161,E)}else{let K=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let et=0;et<K.length;et++){let st=K[et],bt=r.convert(st.format,st.encoding),rt=r.convert(st.type),Y=v(st.internalFormat,bt,rt,st.encoding),mt=me(w);V&&Gt(w)===!1?i.renderbufferStorageMultisample(36161,mt,Y,w.width,w.height):Gt(w)?d.renderbufferStorageMultisampleEXT(36161,mt,Y,w.width,w.height):i.renderbufferStorage(36161,Y,w.width,w.height)}}i.bindRenderbuffer(36161,null)}function Ct(E,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,E),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),z(w.depthTexture,0);let K=n.get(w.depthTexture).__webglTexture,et=me(w);if(w.depthTexture.format===Gi)Gt(w)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,K,0,et):i.framebufferTexture2D(36160,36096,3553,K,0);else if(w.depthTexture.format===Ks)Gt(w)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,K,0,et):i.framebufferTexture2D(36160,33306,3553,K,0);else throw new Error("Unknown depthTexture format")}function _t(E){let w=n.get(E),V=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ct(w.__webglFramebuffer,E)}else if(V){w.__webglDepthbuffer=[];for(let K=0;K<6;K++)e.bindFramebuffer(36160,w.__webglFramebuffer[K]),w.__webglDepthbuffer[K]=i.createRenderbuffer(),Yt(w.__webglDepthbuffer[K],E,!1)}else e.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),Yt(w.__webglDepthbuffer,E,!1);e.bindFramebuffer(36160,null)}function pe(E,w,V){let K=n.get(E);w!==void 0&&ct(K.__webglFramebuffer,E,E.texture,36064,3553),V!==void 0&&_t(E)}function Te(E){let w=E.texture,V=n.get(E),K=n.get(w);E.addEventListener("dispose",$),E.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=w.version,o.memory.textures++);let et=E.isWebGLCubeRenderTarget===!0,st=E.isWebGLMultipleRenderTargets===!0,bt=x(E)||a;if(et){V.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)V.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(V.__webglFramebuffer=i.createFramebuffer(),st)if(s.drawBuffers){let rt=E.texture;for(let Y=0,mt=rt.length;Y<mt;Y++){let xt=n.get(rt[Y]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&Gt(E)===!1){let rt=st?w:[w];V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let Y=0;Y<rt.length;Y++){let mt=rt[Y];V.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(36161,V.__webglColorRenderbuffer[Y]);let xt=r.convert(mt.format,mt.encoding),ht=r.convert(mt.type),gt=v(mt.internalFormat,xt,ht,mt.encoding,E.isXRRenderTarget===!0),dt=me(E);i.renderbufferStorageMultisample(36161,dt,gt,E.width,E.height),i.framebufferRenderbuffer(36160,36064+Y,36161,V.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(36161,null),E.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Yt(V.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(36160,null)}}if(et){e.bindTexture(34067,K.__webglTexture),q(34067,w,bt);for(let rt=0;rt<6;rt++)ct(V.__webglFramebuffer[rt],E,w,36064,34069+rt);T(w,bt)&&C(34067),e.unbindTexture()}else if(st){let rt=E.texture;for(let Y=0,mt=rt.length;Y<mt;Y++){let xt=rt[Y],ht=n.get(xt);e.bindTexture(3553,ht.__webglTexture),q(3553,xt,bt),ct(V.__webglFramebuffer,E,xt,36064+Y,3553),T(xt,bt)&&C(3553)}e.unbindTexture()}else{let rt=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?rt=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(rt,K.__webglTexture),q(rt,w,bt),ct(V.__webglFramebuffer,E,w,36064,rt),T(w,bt)&&C(rt),e.unbindTexture()}E.depthBuffer&&_t(E)}function we(E){let w=x(E)||a,V=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let K=0,et=V.length;K<et;K++){let st=V[K];if(T(st,w)){let bt=E.isWebGLCubeRenderTarget?34067:3553,rt=n.get(st).__webglTexture;e.bindTexture(bt,rt),C(bt),e.unbindTexture()}}}function cn(E){if(a&&E.samples>0&&Gt(E)===!1){let w=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],V=E.width,K=E.height,et=16384,st=[],bt=E.stencilBuffer?33306:36096,rt=n.get(E),Y=E.isWebGLMultipleRenderTargets===!0;if(Y)for(let mt=0;mt<w.length;mt++)e.bindFramebuffer(36160,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+mt,36161,null),e.bindFramebuffer(36160,rt.__webglFramebuffer),i.framebufferTexture2D(36009,36064+mt,3553,null,0);e.bindFramebuffer(36008,rt.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,rt.__webglFramebuffer);for(let mt=0;mt<w.length;mt++){st.push(36064+mt),E.depthBuffer&&st.push(bt);let xt=rt.__ignoreDepthValues!==void 0?rt.__ignoreDepthValues:!1;if(xt===!1&&(E.depthBuffer&&(et|=256),E.stencilBuffer&&(et|=1024)),Y&&i.framebufferRenderbuffer(36008,36064,36161,rt.__webglColorRenderbuffer[mt]),xt===!0&&(i.invalidateFramebuffer(36008,[bt]),i.invalidateFramebuffer(36009,[bt])),Y){let ht=n.get(w[mt]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,ht,0)}i.blitFramebuffer(0,0,V,K,0,0,V,K,et,9728),f&&i.invalidateFramebuffer(36008,st)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),Y)for(let mt=0;mt<w.length;mt++){e.bindFramebuffer(36160,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+mt,36161,rt.__webglColorRenderbuffer[mt]);let xt=n.get(w[mt]).__webglTexture;e.bindFramebuffer(36160,rt.__webglFramebuffer),i.framebufferTexture2D(36009,36064+mt,3553,xt,0)}e.bindFramebuffer(36009,rt.__webglMultisampledFramebuffer)}}function me(E){return Math.min(u,E.samples)}function Gt(E){let w=n.get(E);return a&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Cn(E){let w=o.render.frame;g.get(E)!==w&&(g.set(E,w),E.update())}function Pn(E,w){let V=E.encoding,K=E.format,et=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===fc||V!==Yi&&(V===ee?a===!1?t.has("EXT_sRGB")===!0&&K===on?(E.format=fc,E.minFilter=Ye,E.generateMipmaps=!1):w=ea.sRGBToLinear(w):(K!==on||et!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),w}this.allocateTextureUnit=H,this.resetTextureUnits=Z,this.setTexture2D=z,this.setTexture2DArray=Q,this.setTexture3D=J,this.setTextureCube=tt,this.rebindTextures=pe,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=Gt}function GM(i,t,e){let n=e.isWebGL2;function s(r,o=null){let a;if(r===qi)return 5121;if(r===Y_)return 32819;if(r===$_)return 32820;if(r===G_)return 5120;if(r===X_)return 5122;if(r===Sf)return 5123;if(r===q_)return 5124;if(r===Vi)return 5125;if(r===Wi)return 5126;if(r===zr)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Z_)return 6406;if(r===on)return 6408;if(r===j_)return 6409;if(r===K_)return 6410;if(r===Gi)return 6402;if(r===Ks)return 34041;if(r===Q_)return 6403;if(r===J_)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===fc)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===tx)return 36244;if(r===ex)return 33319;if(r===nx)return 33320;if(r===ix)return 36249;if(r===Cl||r===Pl||r===Ll||r===Rl)if(o===ee)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Cl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ll)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Rl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Cl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ll)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Rl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ud||r===dd||r===fd||r===pd)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ud)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===dd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===fd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===sx)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===md||r===gd)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===md)return o===ee?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===gd)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===_d||r===xd||r===yd||r===vd||r===bd||r===Md||r===wd||r===Sd||r===Ad||r===Td||r===Ed||r===Cd||r===Pd||r===Ld)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===_d)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xd)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yd)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vd)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===bd)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Md)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wd)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sd)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ad)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Td)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ed)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Cd)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Pd)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ld)return o===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rd)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Rd)return o===ee?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Ys?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Cc=class extends Me{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Xs=class extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},XM={type:"move"},Fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let m of t.hand.values()){let p=e.getJointPose(m,n);if(c.joints[m.jointName]===void 0){let y=new Xs;y.matrixAutoUpdate=!1,y.visible=!1,c.joints[m.jointName]=y,c.add(y)}let _=c.joints[m.jointName];p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(XM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}},Pc=class extends Ve{constructor(t,e,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:Gi,h!==Gi&&h!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Gi&&(n=Vi),n===void 0&&h===Ks&&(n=Ys),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Pe,this.minFilter=l!==void 0?l:Pe,this.flipY=!1,this.generateMipmaps=!1}},Lc=class extends Mi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=null,c=null,h=null,u=null,d=null,f=null,g=e.getContextAttributes(),m=null,p=null,_=[],y=[],M=new Me;M.layers.enable(1),M.viewport=new $t;let x=new Me;x.layers.enable(2),x.viewport=new $t;let b=[M,x],T=new Cc;T.layers.enable(1),T.layers.enable(2);let C=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let z=_[k];return z===void 0&&(z=new Fr,_[k]=z),z.getTargetRaySpace()},this.getControllerGrip=function(k){let z=_[k];return z===void 0&&(z=new Fr,_[k]=z),z.getGripSpace()},this.getHand=function(k){let z=_[k];return z===void 0&&(z=new Fr,_[k]=z),z.getHandSpace()};function A(k){let z=y.indexOf(k.inputSource);if(z===-1)return;let Q=_[z];Q!==void 0&&Q.dispatchEvent({type:k.type,data:k.inputSource})}function L(){s.removeEventListener("select",A),s.removeEventListener("selectstart",A),s.removeEventListener("selectend",A),s.removeEventListener("squeeze",A),s.removeEventListener("squeezestart",A),s.removeEventListener("squeezeend",A),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",B);for(let k=0;k<_.length;k++){let z=y[k];z!==null&&(y[k]=null,_[k].disconnect(z))}C=null,v=null,t.setRenderTarget(m),d=null,u=null,h=null,s=null,p=null,H.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",A),s.addEventListener("selectstart",A),s.addEventListener("selectend",A),s.addEventListener("squeeze",A),s.addEventListener("squeezestart",A),s.addEventListener("squeezeend",A),s.addEventListener("end",L),s.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await e.makeXRCompatible(),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let z={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,z),s.updateRenderState({baseLayer:d}),p=new Yn(d.framebufferWidth,d.framebufferHeight,{format:on,type:qi,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let z=null,Q=null,J=null;g.depth&&(J=g.stencil?35056:33190,z=g.stencil?Ks:Gi,Q=g.stencil?Ys:Vi);let tt={colorFormat:32856,depthFormat:J,scaleFactor:r};h=new XRWebGLBinding(s,e),u=h.createProjectionLayer(tt),s.updateRenderState({layers:[u]}),p=new Yn(u.textureWidth,u.textureHeight,{format:on,type:qi,depthTexture:new Pc(u.textureWidth,u.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});let lt=t.properties.get(p);lt.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await s.requestReferenceSpace(a),H.setContext(s),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function B(k){for(let z=0;z<k.removed.length;z++){let Q=k.removed[z],J=y.indexOf(Q);J>=0&&(y[J]=null,_[J].dispatchEvent({type:"disconnected",data:Q}))}for(let z=0;z<k.added.length;z++){let Q=k.added[z],J=y.indexOf(Q);if(J===-1){for(let lt=0;lt<_.length;lt++)if(lt>=y.length){y.push(Q),J=lt;break}else if(y[lt]===null){y[lt]=Q,J=lt;break}if(J===-1)break}let tt=_[J];tt&&tt.dispatchEvent({type:"connected",data:Q})}}let $=new R,N=new R;function D(k,z,Q){$.setFromMatrixPosition(z.matrixWorld),N.setFromMatrixPosition(Q.matrixWorld);let J=$.distanceTo(N),tt=z.projectionMatrix.elements,lt=Q.projectionMatrix.elements,yt=tt[14]/(tt[10]-1),q=tt[14]/(tt[10]+1),Ht=(tt[9]+1)/tt[5],vt=(tt[9]-1)/tt[5],wt=(tt[8]-1)/tt[0],ct=(lt[8]+1)/lt[0],Yt=yt*wt,Ct=yt*ct,_t=J/(-wt+ct),pe=_t*-wt;z.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(pe),k.translateZ(_t),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();let Te=yt+_t,we=q+_t,cn=Yt-pe,me=Ct+(J-pe),Gt=Ht*q/we*Te,Cn=vt*q/we*Te;k.projectionMatrix.makePerspective(cn,me,Gt,Cn,Te,we)}function O(k,z){z===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(z.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;T.near=x.near=M.near=k.near,T.far=x.far=M.far=k.far,(C!==T.near||v!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),C=T.near,v=T.far);let z=k.parent,Q=T.cameras;O(T,z);for(let tt=0;tt<Q.length;tt++)O(Q[tt],z);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),k.matrix.copy(T.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);let J=k.children;for(let tt=0,lt=J.length;tt<lt;tt++)J[tt].updateMatrixWorld(!0);Q.length===2?D(T,M,x):T.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(k){u!==null&&(u.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)};let X=null;function Z(k,z){if(c=z.getViewerPose(l||o),f=z,c!==null){let Q=c.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let J=!1;Q.length!==T.cameras.length&&(T.cameras.length=0,J=!0);for(let tt=0;tt<Q.length;tt++){let lt=Q[tt],yt=null;if(d!==null)yt=d.getViewport(lt);else{let Ht=h.getViewSubImage(u,lt);yt=Ht.viewport,tt===0&&(t.setRenderTargetTextures(p,Ht.colorTexture,u.ignoreDepthValues?void 0:Ht.depthStencilTexture),t.setRenderTarget(p))}let q=b[tt];q===void 0&&(q=new Me,q.layers.enable(tt),q.viewport=new $t,b[tt]=q),q.matrix.fromArray(lt.transform.matrix),q.projectionMatrix.fromArray(lt.projectionMatrix),q.viewport.set(yt.x,yt.y,yt.width,yt.height),tt===0&&T.matrix.copy(q.matrix),J===!0&&T.cameras.push(q)}}for(let Q=0;Q<_.length;Q++){let J=y[Q],tt=_[Q];J!==null&&tt!==void 0&&tt.update(J,z,l||o)}X&&X(k,z),f=null}let H=new Cf;H.setAnimationLoop(Z),this.setAnimationLoop=function(k){X=k},this.dispose=function(){}}};function qM(i,t){function e(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,_,y,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),f(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?a(m,p,_,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Ze&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Ze&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=t.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let y;p.map?y=p.map:p.specularMap?y=p.specularMap:p.displacementMap?y=p.displacementMap:p.normalMap?y=p.normalMap:p.bumpMap?y=p.bumpMap:p.roughnessMap?y=p.roughnessMap:p.metalnessMap?y=p.metalnessMap:p.alphaMap?y=p.alphaMap:p.emissiveMap?y=p.emissiveMap:p.clearcoatMap?y=p.clearcoatMap:p.clearcoatNormalMap?y=p.clearcoatNormalMap:p.clearcoatRoughnessMap?y=p.clearcoatRoughnessMap:p.iridescenceMap?y=p.iridescenceMap:p.iridescenceThicknessMap?y=p.iridescenceThicknessMap:p.specularIntensityMap?y=p.specularIntensityMap:p.specularColorMap?y=p.specularColorMap:p.transmissionMap?y=p.transmissionMap:p.thicknessMap?y=p.thicknessMap:p.sheenColorMap?y=p.sheenColorMap:p.sheenRoughnessMap&&(y=p.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix));let M;p.aoMap?M=p.aoMap:p.lightMap&&(M=p.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uv2Transform.value.copy(M.matrix))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M;p.map?M=p.map:p.alphaMap&&(M=p.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Ze&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function f(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function YM(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(35375):0;function l(y,M){let x=M.program;n.uniformBlockBinding(y,x)}function c(y,M){let x=s[y.id];x===void 0&&(g(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",p));let b=M.program;n.updateUBOMapping(y,b);let T=t.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function h(y){let M=u();y.__bindingPointIndex=M;let x=i.createBuffer(),b=y.__size,T=y.usage;return i.bindBuffer(35345,x),i.bufferData(35345,b,T),i.bindBuffer(35345,null),i.bindBufferBase(35345,M,x),x}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let M=s[y.id],x=y.uniforms,b=y.__cache;i.bindBuffer(35345,M);for(let T=0,C=x.length;T<C;T++){let v=x[T];if(f(v,T,b)===!0){let A=v.value,L=v.__offset;typeof A=="number"?(v.__data[0]=A,i.bufferSubData(35345,L,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):A.toArray(v.__data),i.bufferSubData(35345,L,v.__data))}}i.bindBuffer(35345,null)}function f(y,M,x){let b=y.value;if(x[M]===void 0)return typeof b=="number"?x[M]=b:x[M]=b.clone(),!0;if(typeof b=="number"){if(x[M]!==b)return x[M]=b,!0}else{let T=x[M];if(T.equals(b)===!1)return T.copy(b),!0}return!1}function g(y){let M=y.uniforms,x=0,b=16,T=0;for(let C=0,v=M.length;C<v;C++){let A=M[C],L=m(A);if(A.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=x,C>0){T=x%b;let B=b-T;T!==0&&B-L.boundary<0&&(x+=b-T,A.__offset=x)}x+=L.storage}return T=x%b,T>0&&(x+=b-T),y.__size=x,y.__cache={},this}function m(y){let M=y.value,x={boundary:0,storage:0};return typeof M=="number"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(y){let M=y.target;M.removeEventListener("dispose",p);let x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function _(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:_}}function $M(){let i=ta("canvas");return i.style.display="block",i}function Xc(i={}){this.isWebGLRenderer=!0;let t=i.canvas!==void 0?i.canvas:$M(),e=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1,h;e!==null?h=e.getContextAttributes().alpha:h=i.alpha!==void 0?i.alpha:!1;let u=null,d=null,f=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Yi,this.physicallyCorrectLights=!1,this.toneMapping=Xn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});let m=this,p=!1,_=0,y=0,M=null,x=-1,b=null,T=new $t,C=new $t,v=null,A=t.width,L=t.height,B=1,$=null,N=null,D=new $t(0,0,A,L),O=new $t(0,0,A,L),X=!1,Z=new Br,H=!1,k=!1,z=null,Q=new ne,J=new Ot,tt=new R,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function yt(){return M===null?B:1}let q=e;function Ht(S,F){for(let U=0;U<S.length;U++){let I=S[U],G=t.getContext(I,F);if(G!==null)return G}return null}try{let S={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wc}`),t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",kt,!1),q===null){let F=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&F.shift(),q=Ht(F,S),q===null)throw Ht(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let vt,wt,ct,Yt,Ct,_t,pe,Te,we,cn,me,Gt,Cn,Pn,E,w,V,K,et,st,bt,rt,Y,mt;function xt(){vt=new mb(q),wt=new cb(q,vt,i),vt.init(wt),rt=new GM(q,vt,wt),ct=new WM(q,vt,wt),Yt=new xb,Ct=new LM,_t=new HM(q,vt,ct,Ct,wt,rt,Yt),pe=new ub(m),Te=new pb(m),we=new Ex(q,wt),Y=new ab(q,vt,we,wt),cn=new gb(q,we,Yt,Y),me=new Mb(q,cn,we,Yt),et=new bb(q,wt,_t),w=new hb(Ct),Gt=new PM(m,pe,Te,vt,wt,Y,w),Cn=new qM(m,Ct),Pn=new DM,E=new NM(vt,wt),K=new ob(m,pe,Te,ct,me,h,o),V=new VM(m,me,wt),mt=new YM(q,Yt,wt,ct),st=new lb(q,vt,Yt,wt),bt=new _b(q,vt,Yt,wt),Yt.programs=Gt.programs,m.capabilities=wt,m.extensions=vt,m.properties=Ct,m.renderLists=Pn,m.shadowMap=V,m.state=ct,m.info=Yt}xt();let ht=new Lc(m,q);this.xr=ht,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let S=vt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=vt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(S){S!==void 0&&(B=S,this.setSize(A,L,!1))},this.getSize=function(S){return S.set(A,L)},this.setSize=function(S,F,U){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=S,L=F,t.width=Math.floor(S*B),t.height=Math.floor(F*B),U!==!1&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(A*B,L*B).floor()},this.setDrawingBufferSize=function(S,F,U){A=S,L=F,B=U,t.width=Math.floor(S*U),t.height=Math.floor(F*U),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(D)},this.setViewport=function(S,F,U,I){S.isVector4?D.set(S.x,S.y,S.z,S.w):D.set(S,F,U,I),ct.viewport(T.copy(D).multiplyScalar(B).floor())},this.getScissor=function(S){return S.copy(O)},this.setScissor=function(S,F,U,I){S.isVector4?O.set(S.x,S.y,S.z,S.w):O.set(S,F,U,I),ct.scissor(C.copy(O).multiplyScalar(B).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(S){ct.setScissorTest(X=S)},this.setOpaqueSort=function(S){$=S},this.setTransparentSort=function(S){N=S},this.getClearColor=function(S){return S.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(S=!0,F=!0,U=!0){let I=0;S&&(I|=16384),F&&(I|=256),U&&(I|=1024),q.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",kt,!1),Pn.dispose(),E.dispose(),Ct.dispose(),pe.dispose(),Te.dispose(),me.dispose(),Y.dispose(),mt.dispose(),Gt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",ot),ht.removeEventListener("sessionend",ut),z&&(z.dispose(),z=null),zt.stop()};function gt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;let S=Yt.autoReset,F=V.enabled,U=V.autoUpdate,I=V.needsUpdate,G=V.type;xt(),Yt.autoReset=S,V.enabled=F,V.autoUpdate=U,V.needsUpdate=I,V.type=G}function kt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Jt(S){let F=S.target;F.removeEventListener("dispose",Jt),he(F)}function he(S){P(S),Ct.remove(S)}function P(S){let F=Ct.get(S).programs;F!==void 0&&(F.forEach(function(U){Gt.releaseProgram(U)}),S.isShaderMaterial&&Gt.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,U,I,G,ft){F===null&&(F=lt);let Mt=G.isMesh&&G.matrixWorld.determinant()<0,Et=zf(S,F,U,I,G);ct.setMaterial(I,Mt);let At=U.index,Nt=U.attributes.position;if(At===null){if(Nt===void 0||Nt.count===0)return}else if(At.count===0)return;let Rt=1;I.wireframe===!0&&(At=cn.getWireframeAttribute(U),Rt=2),Y.setup(G,I,Et,U,At);let It,Qt=st;At!==null&&(It=we.get(At),Qt=bt,Qt.setIndex(It));let Si=At!==null?At.count:Nt.count,Qi=U.drawRange.start*Rt,ts=U.drawRange.count*Rt,hn=ft!==null?ft.start*Rt:0,Bt=ft!==null?ft.count*Rt:1/0,es=Math.max(Qi,hn),ie=Math.min(Si,Qi+ts,hn+Bt)-1,He=Math.max(0,ie-es+1);if(He!==0){if(G.isMesh)I.wireframe===!0?(ct.setLineWidth(I.wireframeLinewidth*yt()),Qt.setMode(1)):Qt.setMode(4);else if(G.isLine){let jn=I.linewidth;jn===void 0&&(jn=1),ct.setLineWidth(jn*yt()),G.isLineSegments?Qt.setMode(1):G.isLineLoop?Qt.setMode(2):Qt.setMode(3)}else G.isPoints?Qt.setMode(0):G.isSprite&&Qt.setMode(4);if(G.isInstancedMesh)Qt.renderInstances(es,He,G.count);else if(U.isInstancedBufferGeometry){let jn=Math.min(U.instanceCount,U._maxInstanceCount);Qt.renderInstances(es,He,jn)}else Qt.render(es,He)}},this.compile=function(S,F){function U(I,G,ft){I.transparent===!0&&I.side===vi?(I.side=Ze,I.needsUpdate=!0,We(I,G,ft),I.side=Zs,I.needsUpdate=!0,We(I,G,ft),I.side=vi):We(I,G,ft)}d=E.get(S),d.init(),g.push(d),S.traverseVisible(function(I){I.isLight&&I.layers.test(F.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),d.setupLights(m.physicallyCorrectLights),S.traverse(function(I){let G=I.material;if(G)if(Array.isArray(G))for(let ft=0;ft<G.length;ft++){let Mt=G[ft];U(Mt,S,I)}else U(G,S,I)}),g.pop(),d=null};let W=null;function j(S){W&&W(S)}function ot(){zt.stop()}function ut(){zt.start()}let zt=new Cf;zt.setAnimationLoop(j),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(S){W=S,ht.setAnimationLoop(S),S===null?zt.stop():zt.start()},ht.addEventListener("sessionstart",ot),ht.addEventListener("sessionend",ut),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(F),F=ht.getCamera()),S.isScene===!0&&S.onBeforeRender(m,S,F,M),d=E.get(S,g.length),d.init(),g.push(d),Q.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Z.setFromProjectionMatrix(Q),k=this.localClippingEnabled,H=w.init(this.clippingPlanes,k,F),u=Pn.get(S,f.length),u.init(),f.push(u),ue(S,F,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort($,N),H===!0&&w.beginShadows();let U=d.state.shadowsArray;if(V.render(U,S,F),H===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),K.render(u,S),d.setupLights(m.physicallyCorrectLights),F.isArrayCamera){let I=F.cameras;for(let G=0,ft=I.length;G<ft;G++){let Mt=I[G];ye(u,S,Mt,Mt.viewport)}}else ye(u,S,F);M!==null&&(_t.updateMultisampleRenderTarget(M),_t.updateRenderTargetMipmap(M)),S.isScene===!0&&S.onAfterRender(m,S,F),Y.resetDefaultState(),x=-1,b=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function ue(S,F,U,I){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)U=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Z.intersectsSprite(S)){I&&tt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Q);let Mt=me.update(S),Et=S.material;Et.visible&&u.push(S,Mt,Et,U,tt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Yt.render.frame&&(S.skeleton.update(),S.skeleton.frame=Yt.render.frame),!S.frustumCulled||Z.intersectsObject(S))){I&&tt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Q);let Mt=me.update(S),Et=S.material;if(Array.isArray(Et)){let At=Mt.groups;for(let Nt=0,Rt=At.length;Nt<Rt;Nt++){let It=At[Nt],Qt=Et[It.materialIndex];Qt&&Qt.visible&&u.push(S,Mt,Qt,U,tt.z,It)}}else Et.visible&&u.push(S,Mt,Et,U,tt.z,null)}}let ft=S.children;for(let Mt=0,Et=ft.length;Mt<Et;Mt++)ue(ft[Mt],F,U,I)}function ye(S,F,U,I){let G=S.opaque,ft=S.transmissive,Mt=S.transparent;d.setupLightsView(U),ft.length>0&&wi(G,F,U),I&&ct.viewport(T.copy(I)),G.length>0&&jt(G,F,U),ft.length>0&&jt(ft,F,U),Mt.length>0&&jt(Mt,F,U),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function wi(S,F,U){let I=wt.isWebGL2;z===null&&(z=new Yn(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")?zr:qi,minFilter:_a,samples:I&&r===!0?4:0})),m.getDrawingBufferSize(J),I?z.setSize(J.x,J.y):z.setSize(pc(J.x),pc(J.y));let G=m.getRenderTarget();m.setRenderTarget(z),m.clear();let ft=m.toneMapping;m.toneMapping=Xn,jt(S,F,U),m.toneMapping=ft,_t.updateMultisampleRenderTarget(z),_t.updateRenderTargetMipmap(z),m.setRenderTarget(G)}function jt(S,F,U){let I=F.isScene===!0?F.overrideMaterial:null;for(let G=0,ft=S.length;G<ft;G++){let Mt=S[G],Et=Mt.object,At=Mt.geometry,Nt=I===null?Mt.material:I,Rt=Mt.group;Et.layers.test(U.layers)&&Ln(Et,F,U,At,Nt,Rt)}}function Ln(S,F,U,I,G,ft){S.onBeforeRender(m,F,U,I,G,ft),S.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(m,F,U,I,S,ft),G.transparent===!0&&G.side===vi?(G.side=Ze,G.needsUpdate=!0,m.renderBufferDirect(U,F,I,G,S,ft),G.side=Zs,G.needsUpdate=!0,m.renderBufferDirect(U,F,I,G,S,ft),G.side=vi):m.renderBufferDirect(U,F,I,G,S,ft),S.onAfterRender(m,F,U,I,G,ft)}function We(S,F,U){F.isScene!==!0&&(F=lt);let I=Ct.get(S),G=d.state.lights,ft=d.state.shadowsArray,Mt=G.state.version,Et=Gt.getParameters(S,G.state,ft,F,U),At=Gt.getProgramCacheKey(Et),Nt=I.programs;I.environment=S.isMeshStandardMaterial?F.environment:null,I.fog=F.fog,I.envMap=(S.isMeshStandardMaterial?Te:pe).get(S.envMap||I.environment),Nt===void 0&&(S.addEventListener("dispose",Jt),Nt=new Map,I.programs=Nt);let Rt=Nt.get(At);if(Rt!==void 0){if(I.currentProgram===Rt&&I.lightsStateVersion===Mt)return $c(S,Et),Rt}else Et.uniforms=Gt.getUniforms(S),S.onBuild(U,Et,m),S.onBeforeCompile(Et,m),Rt=Gt.acquireProgram(Et,At),Nt.set(At,Rt),I.uniforms=Et.uniforms;let It=I.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(It.clippingPlanes=w.uniform),$c(S,Et),I.needsLights=Bf(S),I.lightsStateVersion=Mt,I.needsLights&&(It.ambientLightColor.value=G.state.ambient,It.lightProbe.value=G.state.probe,It.directionalLights.value=G.state.directional,It.directionalLightShadows.value=G.state.directionalShadow,It.spotLights.value=G.state.spot,It.spotLightShadows.value=G.state.spotShadow,It.rectAreaLights.value=G.state.rectArea,It.ltc_1.value=G.state.rectAreaLTC1,It.ltc_2.value=G.state.rectAreaLTC2,It.pointLights.value=G.state.point,It.pointLightShadows.value=G.state.pointShadow,It.hemisphereLights.value=G.state.hemi,It.directionalShadowMap.value=G.state.directionalShadowMap,It.directionalShadowMatrix.value=G.state.directionalShadowMatrix,It.spotShadowMap.value=G.state.spotShadowMap,It.spotLightMatrix.value=G.state.spotLightMatrix,It.spotLightMap.value=G.state.spotLightMap,It.pointShadowMap.value=G.state.pointShadowMap,It.pointShadowMatrix.value=G.state.pointShadowMatrix);let Qt=Rt.getUniforms(),Si=$s.seqWithValue(Qt.seq,It);return I.currentProgram=Rt,I.uniformsList=Si,Rt}function $c(S,F){let U=Ct.get(S);U.outputEncoding=F.outputEncoding,U.instancing=F.instancing,U.skinning=F.skinning,U.morphTargets=F.morphTargets,U.morphNormals=F.morphNormals,U.morphColors=F.morphColors,U.morphTargetsCount=F.morphTargetsCount,U.numClippingPlanes=F.numClippingPlanes,U.numIntersection=F.numClipIntersection,U.vertexAlphas=F.vertexAlphas,U.vertexTangents=F.vertexTangents,U.toneMapping=F.toneMapping}function zf(S,F,U,I,G){F.isScene!==!0&&(F=lt),_t.resetTextureUnits();let ft=F.fog,Mt=I.isMeshStandardMaterial?F.environment:null,Et=M===null?m.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Yi,At=(I.isMeshStandardMaterial?Te:pe).get(I.envMap||Mt),Nt=I.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Rt=!!I.normalMap&&!!U.attributes.tangent,It=!!U.morphAttributes.position,Qt=!!U.morphAttributes.normal,Si=!!U.morphAttributes.color,Qi=I.toneMapped?m.toneMapping:Xn,ts=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,hn=ts!==void 0?ts.length:0,Bt=Ct.get(I),es=d.state.lights;if(H===!0&&(k===!0||S!==b)){let Re=S===b&&I.id===x;w.setState(I,S,Re)}let ie=!1;I.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==es.state.version||Bt.outputEncoding!==Et||G.isInstancedMesh&&Bt.instancing===!1||!G.isInstancedMesh&&Bt.instancing===!0||G.isSkinnedMesh&&Bt.skinning===!1||!G.isSkinnedMesh&&Bt.skinning===!0||Bt.envMap!==At||I.fog===!0&&Bt.fog!==ft||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==w.numPlanes||Bt.numIntersection!==w.numIntersection)||Bt.vertexAlphas!==Nt||Bt.vertexTangents!==Rt||Bt.morphTargets!==It||Bt.morphNormals!==Qt||Bt.morphColors!==Si||Bt.toneMapping!==Qi||wt.isWebGL2===!0&&Bt.morphTargetsCount!==hn)&&(ie=!0):(ie=!0,Bt.__version=I.version);let He=Bt.currentProgram;ie===!0&&(He=We(I,F,G));let jn=!1,nr=!1,ya=!1,Se=He.getUniforms(),Ai=Bt.uniforms;if(ct.useProgram(He.program)&&(jn=!0,nr=!0,ya=!0),I.id!==x&&(x=I.id,nr=!0),jn||b!==S){if(Se.setValue(q,"projectionMatrix",S.projectionMatrix),wt.logarithmicDepthBuffer&&Se.setValue(q,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),b!==S&&(b=S,nr=!0,ya=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){let Re=Se.map.cameraPosition;Re!==void 0&&Re.setValue(q,tt.setFromMatrixPosition(S.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Se.setValue(q,"isOrthographic",S.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||G.isSkinnedMesh)&&Se.setValue(q,"viewMatrix",S.matrixWorldInverse)}if(G.isSkinnedMesh){Se.setOptional(q,G,"bindMatrix"),Se.setOptional(q,G,"bindMatrixInverse");let Re=G.skeleton;Re&&(wt.floatVertexTextures?(Re.boneTexture===null&&Re.computeBoneTexture(),Se.setValue(q,"boneTexture",Re.boneTexture,_t),Se.setValue(q,"boneTextureSize",Re.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let va=U.morphAttributes;if((va.position!==void 0||va.normal!==void 0||va.color!==void 0&&wt.isWebGL2===!0)&&et.update(G,U,I,He),(nr||Bt.receiveShadow!==G.receiveShadow)&&(Bt.receiveShadow=G.receiveShadow,Se.setValue(q,"receiveShadow",G.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(Ai.envMap.value=At,Ai.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),nr&&(Se.setValue(q,"toneMappingExposure",m.toneMappingExposure),Bt.needsLights&&Nf(Ai,ya),ft&&I.fog===!0&&Cn.refreshFogUniforms(Ai,ft),Cn.refreshMaterialUniforms(Ai,I,B,L,z),$s.upload(q,Bt.uniformsList,Ai,_t)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&($s.upload(q,Bt.uniformsList,Ai,_t),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Se.setValue(q,"center",G.center),Se.setValue(q,"modelViewMatrix",G.modelViewMatrix),Se.setValue(q,"normalMatrix",G.normalMatrix),Se.setValue(q,"modelMatrix",G.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){let Re=I.uniformsGroups;for(let ba=0,Uf=Re.length;ba<Uf;ba++)if(wt.isWebGL2){let Zc=Re[ba];mt.update(Zc,He),mt.bind(Zc,He)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return He}function Nf(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function Bf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(S,F,U){Ct.get(S.texture).__webglTexture=F,Ct.get(S.depthTexture).__webglTexture=U;let I=Ct.get(S);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=U===void 0,I.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,F){let U=Ct.get(S);U.__webglFramebuffer=F,U.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,U=0){M=S,_=F,y=U;let I=!0,G=null,ft=!1,Mt=!1;if(S){let At=Ct.get(S);At.__useDefaultFramebuffer!==void 0?(ct.bindFramebuffer(36160,null),I=!1):At.__webglFramebuffer===void 0?_t.setupRenderTarget(S):At.__hasExternalTextures&&_t.rebindTextures(S,Ct.get(S.texture).__webglTexture,Ct.get(S.depthTexture).__webglTexture);let Nt=S.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Mt=!0);let Rt=Ct.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(G=Rt[F],ft=!0):wt.isWebGL2&&S.samples>0&&_t.useMultisampledRTT(S)===!1?G=Ct.get(S).__webglMultisampledFramebuffer:G=Rt,T.copy(S.viewport),C.copy(S.scissor),v=S.scissorTest}else T.copy(D).multiplyScalar(B).floor(),C.copy(O).multiplyScalar(B).floor(),v=X;if(ct.bindFramebuffer(36160,G)&&wt.drawBuffers&&I&&ct.drawBuffers(S,G),ct.viewport(T),ct.scissor(C),ct.setScissorTest(v),ft){let At=Ct.get(S.texture);q.framebufferTexture2D(36160,36064,34069+F,At.__webglTexture,U)}else if(Mt){let At=Ct.get(S.texture),Nt=F||0;q.framebufferTextureLayer(36160,36064,At.__webglTexture,U||0,Nt)}x=-1},this.readRenderTargetPixels=function(S,F,U,I,G,ft,Mt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Ct.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Mt!==void 0&&(Et=Et[Mt]),Et){ct.bindFramebuffer(36160,Et);try{let At=S.texture,Nt=At.format,Rt=At.type;if(Nt!==on&&rt.convert(Nt)!==q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let It=Rt===zr&&(vt.has("EXT_color_buffer_half_float")||wt.isWebGL2&&vt.has("EXT_color_buffer_float"));if(Rt!==qi&&rt.convert(Rt)!==q.getParameter(35738)&&!(Rt===Wi&&(wt.isWebGL2||vt.has("OES_texture_float")||vt.has("WEBGL_color_buffer_float")))&&!It){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-I&&U>=0&&U<=S.height-G&&q.readPixels(F,U,I,G,rt.convert(Nt),rt.convert(Rt),ft)}finally{let At=M!==null?Ct.get(M).__webglFramebuffer:null;ct.bindFramebuffer(36160,At)}}},this.copyFramebufferToTexture=function(S,F,U=0){let I=Math.pow(2,-U),G=Math.floor(F.image.width*I),ft=Math.floor(F.image.height*I);_t.setTexture2D(F,0),q.copyTexSubImage2D(3553,U,0,0,S.x,S.y,G,ft),ct.unbindTexture()},this.copyTextureToTexture=function(S,F,U,I=0){let G=F.image.width,ft=F.image.height,Mt=rt.convert(U.format),Et=rt.convert(U.type);_t.setTexture2D(U,0),q.pixelStorei(37440,U.flipY),q.pixelStorei(37441,U.premultiplyAlpha),q.pixelStorei(3317,U.unpackAlignment),F.isDataTexture?q.texSubImage2D(3553,I,S.x,S.y,G,ft,Mt,Et,F.image.data):F.isCompressedTexture?q.compressedTexSubImage2D(3553,I,S.x,S.y,F.mipmaps[0].width,F.mipmaps[0].height,Mt,F.mipmaps[0].data):q.texSubImage2D(3553,I,S.x,S.y,Mt,Et,F.image),I===0&&U.generateMipmaps&&q.generateMipmap(3553),ct.unbindTexture()},this.copyTextureToTexture3D=function(S,F,U,I,G=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ft=S.max.x-S.min.x+1,Mt=S.max.y-S.min.y+1,Et=S.max.z-S.min.z+1,At=rt.convert(I.format),Nt=rt.convert(I.type),Rt;if(I.isData3DTexture)_t.setTexture3D(I,0),Rt=32879;else if(I.isDataArrayTexture)_t.setTexture2DArray(I,0),Rt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(37440,I.flipY),q.pixelStorei(37441,I.premultiplyAlpha),q.pixelStorei(3317,I.unpackAlignment);let It=q.getParameter(3314),Qt=q.getParameter(32878),Si=q.getParameter(3316),Qi=q.getParameter(3315),ts=q.getParameter(32877),hn=U.isCompressedTexture?U.mipmaps[0]:U.image;q.pixelStorei(3314,hn.width),q.pixelStorei(32878,hn.height),q.pixelStorei(3316,S.min.x),q.pixelStorei(3315,S.min.y),q.pixelStorei(32877,S.min.z),U.isDataTexture||U.isData3DTexture?q.texSubImage3D(Rt,G,F.x,F.y,F.z,ft,Mt,Et,At,Nt,hn.data):U.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Rt,G,F.x,F.y,F.z,ft,Mt,Et,At,hn.data)):q.texSubImage3D(Rt,G,F.x,F.y,F.z,ft,Mt,Et,At,Nt,hn),q.pixelStorei(3314,It),q.pixelStorei(32878,Qt),q.pixelStorei(3316,Si),q.pixelStorei(3315,Qi),q.pixelStorei(32877,ts),G===0&&I.generateMipmaps&&q.generateMipmap(Rt),ct.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?_t.setTextureCube(S,0):S.isData3DTexture?_t.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?_t.setTexture2DArray(S,0):_t.setTexture2D(S,0),ct.unbindTexture()},this.resetState=function(){_=0,y=0,M=null,ct.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var Rc=class extends Xc{};Rc.prototype.isWebGL1Renderer=!0;var ua=class extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}};var da=class extends Ji{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Af,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function yi(i,t,e){return If(i)?new i.constructor(i.subarray(t,e!==void 0?e:i.length)):i.slice(t,e)}function Jo(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function If(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var tr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Dc=class extends tr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dd,endingEnd:Dd}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Id:r=t,a=2*e-n;break;case kd:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Id:o=t,l=2*n-e;break;case kd:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),m=g*g,p=m*g,_=-d*p+2*d*m-d*g,y=(1+d)*p+(-1.5-2*d)*m+(-.5+d)*g+1,M=(-1-f)*p+(1.5+f)*m+.5*g,x=f*p-f*m;for(let b=0;b!==a;++b)r[b]=_*o[h+b]+y*o[c+b]+M*o[l+b]+x*o[u+b];return r}},Ic=class extends tr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},kc=class extends tr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ln=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Jo(e,this.TimeBufferType),this.values=Jo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Jo(t.times,Array),values:Jo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new kc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ic(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Dc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ko:e=this.InterpolantFactoryMethodDiscrete;break;case Qo:e=this.InterpolantFactoryMethodLinear;break;case Dl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ko;case this.InterpolantFactoryMethodLinear:return Qo;case this.InterpolantFactoryMethodSmooth:return Dl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=yi(n,r,o),this.values=yi(this.values,r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&If(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=yi(this.times),e=yi(this.values),n=this.getValueSize(),s=this.getInterpolation()===Dl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let m=e[u+g];if(m!==e[d+g]||m!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=yi(t,0,o),this.values=yi(e,0,o*n)):(this.times=t,this.values=e),this}clone(){let t=yi(this.times,0),e=yi(this.values,0),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=Qo;var ji=class extends ln{};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Ko;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Oc=class extends ln{};Oc.prototype.ValueTypeName="color";var Fc=class extends ln{};Fc.prototype.ValueTypeName="number";var zc=class extends tr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)En.slerpFlat(r,0,o,c-a,o,c,l);return r}},Vr=class extends ln{InterpolantFactoryMethodLinear(t){return new zc(this.times,this.values,this.getValueSize(),t)}};Vr.prototype.ValueTypeName="quaternion";Vr.prototype.DefaultInterpolation=Qo;Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends ln{};Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Ko;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Nc=class extends ln{};Nc.prototype.ValueTypeName="vector";var fa=class extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},pa=class extends fa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DefaultUp),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},oc=new ne,_f=new R,xf=new R,Bc=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Br,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;_f.setFromMatrixPosition(t.matrixWorld),e.position.copy(_f),xf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xf),e.updateMatrixWorld(),oc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var yf=new ne,Ir=new R,ac=new R,Uc=class extends Bc{constructor(){super(new Me(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ot(4,2),this._viewportCount=6,this._viewports=[new $t(2,1,1,1),new $t(0,1,1,1),new $t(3,1,1,1),new $t(1,1,1,1),new $t(3,0,1,1),new $t(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ir.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ir),ac.copy(n.position),ac.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ac),n.updateMatrixWorld(),s.makeTranslation(-Ir.x,-Ir.y,-Ir.z),yf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yf)}},ma=class extends fa{constructor(t,e,n=0,s=1){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Uc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}};var qc="\\[\\]\\.:\\/",ZM=new RegExp("["+qc+"]","g"),Yc="[^"+qc+"]",JM="[^"+qc.replace("\\.","")+"]",jM=/((?:WC+[\/:])*)/.source.replace("WC",Yc),KM=/(WCOD+)?/.source.replace("WCOD",JM),QM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yc),tw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yc),ew=new RegExp("^"+jM+KM+QM+tw+"$"),nw=["material","materials","bones","map"],Vc=class{constructor(t,e,n){let s=n||Vt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Vt=class{constructor(t,e,n){this.path=e,this.parsedPath=n||Vt.parseTrackName(e),this.node=Vt.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Vt.Composite(t,e,n):new Vt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ZM,"")}static parseTrackName(t){let e=ew.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);nw.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=Vt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Vt.Composite=Vc;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bw=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wc);var sw=new Of.default;window.onload=function(){ow()};var Ff=new Map;function rw(i){let t=document.createElement("canvas");t.setAttribute("id","graph-"+i),document.querySelector("#graph-content").appendChild(t);let n=t.getContext("2d"),s={type:"line",data:{datasets:[]},options:{animation:!1,normalized:!0,spanGaps:!0,elements:{point:{radius:0}},plugins:{title:{display:!0,text:i}}}},r=new ed(n,s);return Ff.set(i,r),r}function ow(){let i=new WebSocket(cw("/consumers/ws"));i.onmessage=t=>{let e=JSON.parse(t.data),n=aw(e);e.graph==="inclination"?uw(n):lw(e.graph,n,e.timestamp)}}function aw(i){let t=new Map;return Object.keys(i).forEach(e=>{e!=="timestamp"&&e!=="graph"&&t.set(e,i[e])}),t}function lw(i,t,e){let n=Ff.get(i);n===void 0&&(n=rw(i)),Array.from(t.keys()).sort().forEach((s,r)=>{let o=t.get(s);if(n.data.datasets.length<r+1){let c=sw.hex(s),h={label:s,borderColor:c,backgroundColor:c,data:[]};n.data.datasets.push(h)}let a=n.data.datasets[r].data,l={x:e,y:o};a.push(l),a.length>200&&a.shift()}),n.update()}function cw(i){let t=window.location.host;return(window.location.protocol==="https:"?"wss":"ws")+"://"+t+i}var Hr=new En(0,0,0,1),kf=!1;function hw(){let i=document.getElementById("container-3d"),t=new ua;t.background=new Ft(16777215);let e=new $e(new Zn(1,.5,2),new da({color:3713054}));t.add(e);let n=new Me(45,2,.1,100);t.add(n),n.position.x=-2,n.position.y=2,n.position.z=3,n.lookAt(e.position);let s=new pa(13421772,.4);t.add(s);let r=new ma(16777215,.8);n.add(r);let o=new Xc;o.setSize(i.clientWidth,i.clientHeight),o.render(t,n),i.appendChild(o.domElement);let a=()=>{let h=i.clientWidth,u=i.clientHeight;n.aspect=h/u,n.updateProjectionMatrix(),o.setSize(h,u)};new ResizeObserver(a).observe(i,{box:"content-box"});let c=()=>{window.requestAnimationFrame(c),e.setRotationFromQuaternion(Hr),o.render(t,n)};c()}function uw(i){kf||(hw(),kf=!0),Hr.x=-i.get("y"),Hr.y=-i.get("z"),Hr.z=i.get("x"),Hr.w=i.get("w")}})();
/*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */
/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
