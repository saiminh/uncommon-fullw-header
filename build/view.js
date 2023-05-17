/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
function adjustFontSize() {
  const fullWHeaders = document.querySelectorAll('.uncommon-fullw-header');
  fullWHeaders.forEach(fullWHeader => {
    if (!fullWHeader.querySelector('.fullw')) {
      const originalText = fullWHeader.innerHTML;
      fullWHeader.innerHTML = '<span class="fullw">' + originalText + '</span>';
    }
    const span = fullWHeader.querySelector('.fullw'),
      spanWidth = span.offsetWidth,
      parentWidth = fullWHeader.offsetWidth,
      ratio = parentWidth / spanWidth,
      fontSizeSpan = parseFloat(window.getComputedStyle(span, null).getPropertyValue('font-size')),
      newFontSize = fontSizeSpan * ratio;
    fullWHeader.style.fontSize = newFontSize + 'px';
  });
}
window.addEventListener('DOMContentLoaded', function () {
  adjustFontSize();
  console.log('adjusting font size');
});
window.addEventListener('resize', function () {
  adjustFontSize();
});
/******/ })()
;
//# sourceMappingURL=view.js.map