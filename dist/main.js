/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class HashMap {
  constructor() {
    this.bucketAmount = 16;
    this.buckets = new Array(this.bucketAmount);
  }

  hash(key) {
    let hashCode = 0;
       
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i) % this.buckets;
    }
 
    return hashCode; // Returned hashCode equals bucket index
  }

  checkHashIndex(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
  }

  set(key, value) {
    const index = hash(key);
    this.checkHashIndex(index);
  }

  display() {
    return this.buckets;
  }
}

const hashmap = new HashMap();
console.log(hashmap.display());
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXdlYnBhY2stZXNsaW50LXByZXR0aWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzLXdlYnBhY2stZXNsaW50LXByZXR0aWVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanMtd2VicGFjay1lc2xpbnQtcHJldHRpZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IG51bGwsIG5leHROb2RlID0gbnVsbCkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm5leHROb2RlID0gbmV4dE5vZGU7XG4gIH1cbn1cblxuY2xhc3MgSGFzaE1hcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYnVja2V0QW1vdW50ID0gMTY7XG4gICAgdGhpcy5idWNrZXRzID0gbmV3IEFycmF5KHRoaXMuYnVja2V0QW1vdW50KTtcbiAgfVxuXG4gIGhhc2goa2V5KSB7XG4gICAgbGV0IGhhc2hDb2RlID0gMDtcbiAgICAgICBcbiAgICBjb25zdCBwcmltZU51bWJlciA9IDMxO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBoYXNoQ29kZSA9IHByaW1lTnVtYmVyICogaGFzaENvZGUgKyBrZXkuY2hhckNvZGVBdChpKSAlIHRoaXMuYnVja2V0cztcbiAgICB9XG4gXG4gICAgcmV0dXJuIGhhc2hDb2RlOyAvLyBSZXR1cm5lZCBoYXNoQ29kZSBlcXVhbHMgYnVja2V0IGluZGV4XG4gIH1cblxuICBjaGVja0hhc2hJbmRleChpbmRleCkge1xuICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5idWNrZXRzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVHJ5aW5nIHRvIGFjY2VzcyBpbmRleCBvdXQgb2YgYm91bmRcIik7XG4gICAgfVxuICB9XG5cbiAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBpbmRleCA9IGhhc2goa2V5KTtcbiAgICB0aGlzLmNoZWNrSGFzaEluZGV4KGluZGV4KTtcbiAgfVxuXG4gIGRpc3BsYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVja2V0cztcbiAgfVxufVxuXG5jb25zdCBoYXNobWFwID0gbmV3IEhhc2hNYXAoKTtcbmNvbnNvbGUubG9nKGhhc2htYXAuZGlzcGxheSgpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=