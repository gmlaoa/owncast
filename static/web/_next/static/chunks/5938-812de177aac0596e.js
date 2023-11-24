"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5938],{49474:function(t,n,e){e.d(n,{Z:function(){return compareAsc}});var r=e(19013),a=e(13882);function compareAsc(t,n){(0,a.Z)(2,arguments);var e=(0,r.Z)(t),o=(0,r.Z)(n),i=e.getTime()-o.getTime();return i<0?-1:i>0?1:i}},82161:function(t,n,e){e.d(n,{Z:function(){return differenceInMonths}});var r=e(19013),a=e(13882);function differenceInCalendarMonths(t,n){(0,a.Z)(2,arguments);var e=(0,r.Z)(t),o=(0,r.Z)(n);return 12*(e.getFullYear()-o.getFullYear())+(e.getMonth()-o.getMonth())}var o=e(49474);function endOfDay(t){(0,a.Z)(1,arguments);var n=(0,r.Z)(t);return n.setHours(23,59,59,999),n}function endOfMonth(t){(0,a.Z)(1,arguments);var n=(0,r.Z)(t),e=n.getMonth();return n.setFullYear(n.getFullYear(),e+1,0),n.setHours(23,59,59,999),n}function isLastDayOfMonth(t){(0,a.Z)(1,arguments);var n=(0,r.Z)(t);return endOfDay(n).getTime()===endOfMonth(n).getTime()}function differenceInMonths(t,n){(0,a.Z)(2,arguments);var e,i=(0,r.Z)(t),s=(0,r.Z)(n),u=(0,o.Z)(i,s),f=Math.abs(differenceInCalendarMonths(i,s));if(f<1)e=0;else{1===i.getMonth()&&i.getDate()>27&&i.setDate(30),i.setMonth(i.getMonth()-u*f);var c=(0,o.Z)(i,s)===-u;isLastDayOfMonth((0,r.Z)(t))&&1===f&&1===(0,o.Z)(t,s)&&(c=!1),e=u*(f-Number(c))}return 0===e?0:e}},45938:function(t,n,e){e.d(n,{Z:function(){return formatDistanceToNow}});var r=e(84314),a=e(49474),o=e(82161),i=e(11699),s=e(86559),u=e(19013);function assign_assign(t,n){if(null==t)throw TypeError("assign requires that input parameter not be null or undefined");for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t}function cloneObject(t){return assign_assign({},t)}var f=e(24262),c=e(13882);function formatDistance(t,n,e){(0,c.Z)(2,arguments);var l,h,m,d,Z,D=(0,r.j)(),M=null!==(l=null!==(h=null==e?void 0:e.locale)&&void 0!==h?h:D.locale)&&void 0!==l?l:s.Z;if(!M.formatDistance)throw RangeError("locale must contain formatDistance property");var v=(0,a.Z)(t,n);if(isNaN(v))throw RangeError("Invalid time value");var g=assign_assign(cloneObject(e),{addSuffix:!!(null==e?void 0:e.addSuffix),comparison:v});v>0?(m=(0,u.Z)(n),d=(0,u.Z)(t)):(m=(0,u.Z)(t),d=(0,u.Z)(n));var p=(0,i.Z)(d,m),b=Math.round((p-((0,f.Z)(d)-(0,f.Z)(m))/1e3)/60);if(b<2){if(null!=e&&e.includeSeconds){if(p<5)return M.formatDistance("lessThanXSeconds",5,g);if(p<10)return M.formatDistance("lessThanXSeconds",10,g);if(p<20)return M.formatDistance("lessThanXSeconds",20,g);if(p<40)return M.formatDistance("halfAMinute",0,g);else if(p<60)return M.formatDistance("lessThanXMinutes",1,g);else return M.formatDistance("xMinutes",1,g)}return 0===b?M.formatDistance("lessThanXMinutes",1,g):M.formatDistance("xMinutes",b,g)}if(b<45)return M.formatDistance("xMinutes",b,g);if(b<90)return M.formatDistance("aboutXHours",1,g);if(b<1440){var T=Math.round(b/60);return M.formatDistance("aboutXHours",T,g)}if(b<2520)return M.formatDistance("xDays",1,g);if(b<43200){var X=Math.round(b/1440);return M.formatDistance("xDays",X,g)}if(b<86400)return Z=Math.round(b/43200),M.formatDistance("aboutXMonths",Z,g);if((Z=(0,o.Z)(d,m))<12){var y=Math.round(b/43200);return M.formatDistance("xMonths",y,g)}var O=Z%12,w=Math.floor(Z/12);return O<3?M.formatDistance("aboutXYears",w,g):O<9?M.formatDistance("overXYears",w,g):M.formatDistance("almostXYears",w+1,g)}function formatDistanceToNow(t,n){return(0,c.Z)(1,arguments),formatDistance(t,Date.now(),n)}}}]);