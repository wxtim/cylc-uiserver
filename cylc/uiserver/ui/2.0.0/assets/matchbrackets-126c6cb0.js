import{a as T}from"./codemirror-ab5992a1.js";var H={exports:{}},M;function F(){return M||(M=1,function(S,R){(function(f){f(T)})(function(f){var m=/MSIE \d/.test(navigator.userAgent)&&(document.documentMode==null||document.documentMode<8),o=f.Pos,p={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"};function B(t){return t&&t.bracketRegex||/[(){}[\]]/}function L(t,a,e){var i=t.getLineHandle(a.line),n=a.ch-1,l=e&&e.afterCursor;l==null&&(l=/(^| )cm-fat-cursor($| )/.test(t.getWrapperElement().className));var h=B(e),u=!l&&n>=0&&h.test(i.text.charAt(n))&&p[i.text.charAt(n)]||h.test(i.text.charAt(n+1))&&p[i.text.charAt(++n)];if(!u)return null;var r=u.charAt(1)==">"?1:-1;if(e&&e.strict&&r>0!=(n==a.ch))return null;var g=t.getTokenTypeAt(o(a.line,n+1)),s=y(t,o(a.line,n+(r>0?1:0)),r,g,e);return s==null?null:{from:o(a.line,n),to:s&&s.pos,match:s&&s.ch==u.charAt(0),forward:r>0}}function y(t,a,e,i,n){for(var l=n&&n.maxScanLineLength||1e4,h=n&&n.maxScanLines||1e3,u=[],r=B(n),g=e>0?Math.min(a.line+h,t.lastLine()+1):Math.max(t.firstLine()-1,a.line-h),s=a.line;s!=g;s+=e){var c=t.getLine(s);if(c){var k=e>0?0:c.length-1,E=e>0?c.length:-1;if(!(c.length>l))for(s==a.line&&(k=a.ch-(e<0?1:0));k!=E;k+=e){var x=c.charAt(k);if(r.test(x)&&(i===void 0||(t.getTokenTypeAt(o(s,k+1))||"")==(i||""))){var b=p[x];if(b&&b.charAt(1)==">"==e>0)u.push(x);else if(u.length)u.pop();else return{pos:o(s,k),ch:x}}}}}return s-e==(e>0?t.lastLine():t.firstLine())?!1:null}function A(t,a,e){for(var i=t.state.matchBrackets.maxHighlightLineLength||1e3,n=e&&e.highlightNonMatching,l=[],h=t.listSelections(),u=0;u<h.length;u++){var r=h[u].empty()&&L(t,h[u].head,e);if(r&&(r.match||n!==!1)&&t.getLine(r.from.line).length<=i){var g=r.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";l.push(t.markText(r.from,o(r.from.line,r.from.ch+1),{className:g})),r.to&&t.getLine(r.to.line).length<=i&&l.push(t.markText(r.to,o(r.to.line,r.to.ch+1),{className:g}))}}if(l.length){m&&t.state.focused&&t.focus();var s=function(){t.operation(function(){for(var c=0;c<l.length;c++)l[c].clear()})};if(a)setTimeout(s,800);else return s}}function v(t){t.operation(function(){t.state.matchBrackets.currentlyHighlighted&&(t.state.matchBrackets.currentlyHighlighted(),t.state.matchBrackets.currentlyHighlighted=null),t.state.matchBrackets.currentlyHighlighted=A(t,!1,t.state.matchBrackets)})}function d(t){t.state.matchBrackets&&t.state.matchBrackets.currentlyHighlighted&&(t.state.matchBrackets.currentlyHighlighted(),t.state.matchBrackets.currentlyHighlighted=null)}f.defineOption("matchBrackets",!1,function(t,a,e){e&&e!=f.Init&&(t.off("cursorActivity",v),t.off("focus",v),t.off("blur",d),d(t)),a&&(t.state.matchBrackets=typeof a=="object"?a:{},t.on("cursorActivity",v),t.on("focus",v),t.on("blur",d))}),f.defineExtension("matchBrackets",function(){A(this,!0)}),f.defineExtension("findMatchingBracket",function(t,a,e){return(e||typeof a=="boolean")&&(e?(e.strict=a,a=e):a=a?{strict:!0}:null),L(this,t,a)}),f.defineExtension("scanForBracket",function(t,a,e,i){return y(this,t,a,e,i)})})}()),H.exports}export{F as r};