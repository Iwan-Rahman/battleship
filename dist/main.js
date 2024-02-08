"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `h1, h2 {
  text-align: center;
}
.main {
  display: flex;
  justify-content: center;
  gap: 15rem;
}
.board {
  display: flex;
}
.board > div > div {
  width: 2rem;
  height: 2rem;
  border: 1px solid grey;
}

.msg p {
  text-align: center;
}

.board {
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,UAAU;AACZ;AACA;EACE,aAAa;AACf;AACA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["h1, h2 {\r\n  text-align: center;\r\n}\r\n.main {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 15rem;\r\n}\r\n.board {\r\n  display: flex;\r\n}\r\n.board > div > div {\r\n  width: 2rem;\r\n  height: 2rem;\r\n  border: 1px solid grey;\r\n}\r\n\r\n.msg p {\r\n  text-align: center;\r\n}\r\n\r\n.board {\r\n  text-align: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/ship.js");




//Players
let playerOne = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])();
let playerTwo = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])(); //Computer
let activePlayer = playerOne;


let vertical = false; //Used to toggle between horizontal and vertical ship placement
let toggleVertical = () => {
  vertical = vertical == true ? false : true;
}

document.querySelector(".board").addEventListener("contextmenu",(e) => {
  toggleVertical();
  updatePlayerDisp(playerOne.board.board,boards[0]);
  showPlacement(e);
  e.preventDefault();
})


//Gets x and y selected on grid
let getDOMCoords = (e) => {
  let node = e.target;
  let cols = Array.from(node.parentNode.childNodes);
  let rows = Array.from(node.parentNode.parentNode.childNodes);
  let x = rows.indexOf(node.parentNode);
  let y = cols.indexOf(node);
  return [x,y];
}

//Place ships
//Once all ships are placed, the AI will place ships
let placeShips = (e) => {
  let [x,y] = getDOMCoords(e);
  let endPhase = playerOne.initShip(x,y,vertical,0);
  updatePlayerDisp(playerOne.board.board,boards[0]);
  document.querySelector(".msg p").textContent = "Ships Left: " + playerOne.sunkShips.length;
  if(endPhase == true){
    e.target.parentNode.parentNode.childNodes.forEach(col => {
      col.childNodes.forEach(cell => {
        cell.removeEventListener('click',placeShips);
        cell.removeEventListener('mouseenter',showPlacement);
        cell.removeEventListener('wheel',scrollShip);
      })      
    });
    aiPlaceShips();
    boards[1].childNodes.forEach(col => {
      col.childNodes.forEach(cell => {
        cell.addEventListener('click',attackBoard);
      })
    })
    document.querySelector(".msg h2").textContent = "Attack Ships";
    document.querySelector(".msg p").textContent = "Ships Left: " + (5 - playerTwo.sunkShips.length);
    updateCompDisp(playerTwo.board.board,boards[1]);
  }
}

let aiPlaceShips = () => {
  let endPhase = false;
  while(!endPhase){
    let [x,y] = [Math.floor(Math.random()*9),Math.floor(Math.random()*9)];
    let vertical = Math.floor(Math.random()*2) == 0 ? false : true;
    endPhase = playerTwo.initShip(x,y,vertical,0);
  }
}


let attackBoard = (e) => {
  let [x,y] = getDOMCoords(e);
  let endPhase = playerOne.attack(playerTwo,x,y);
  if(endPhase == true){
    if(playerTwo.sunkShips.length == 5){
      document.querySelector(".msg h2").textContent = "Player wins!";
      e.target.parentNode.parentNode.childNodes.forEach(col => {
        col.childNodes.forEach(cell => {
          cell.removeEventListener('click',attackBoard);
        })      
      });
    }else{
      aiAttack();
      if(playerOne.sunkShips.length == 5){
        document.querySelector(".msg h2").textContent = "Computer wins!";
        e.target.parentNode.parentNode.childNodes.forEach(col => {
          col.childNodes.forEach(cell => {
            cell.removeEventListener('click',attackBoard);
          })      
        });
      }
    }
  }
  document.querySelector(".msg p").textContent = "Ships Left: " + (5 - playerTwo.sunkShips.length);
  updatePlayerDisp(playerOne.board.board,boards[0]);
  updateCompDisp(playerTwo.board.board,boards[1]);
}

let aiAttack = () => {
  let endPhase = false;
  while(!endPhase){
    let [x,y] = [Math.floor(Math.random()*9),Math.floor(Math.random()*9)];
    endPhase = playerTwo.attack(playerOne,x,y);
  }
}
function showPlacement(e){
  
  let isVert = vertical;
  let shipLength = activePlayer.sunkShips[0].length
  let [x,y] = getDOMCoords(e);
  let board = e.target.parentNode.parentNode;
  console.log(x+shipLength);
    if(x + shipLength >= 11 && vertical == false){
      for(let i = 0; i <= 9-x; i++){
        board.childNodes[x + i*(!isVert)].childNodes[y + i*(isVert)].style.backgroundColor = "red";
      }
    }else if(y + shipLength >= 11 && vertical == true){
      for(let i = 0; i <= 9-y; i++){
        board.childNodes[x + i*(!isVert)].childNodes[y + i*(isVert)].style.backgroundColor = "red";
      }
    }
    else{
      for(let i = 0; i < shipLength; i++){
        console.log(board.childNodes[x + i*(!isVert)].childNodes[y + i*(isVert)].style.backgroundColor)
        if(board.childNodes[x + i*(!isVert)].childNodes[y + i*(isVert)].style.backgroundColor == "inherit"){
          board.childNodes[x + i*(!isVert)].childNodes[y + i*(isVert)].style.backgroundColor = "aquamarine";
        }else{
          board.childNodes[x + i*(!isVert)].childNodes[y + i*(isVert)].style.backgroundColor = "red";
        }

      }
    }
    e.target.addEventListener("mouseleave",() => {updatePlayerDisp(playerOne.board.board,boards[0]);})
}
//Requires 2D nodelist of the boardDOM
//Update Display
function updatePlayerDisp(board,boardWrapper){
  let boardDOM = [...boardWrapper.childNodes];
  boardDOM = boardDOM.map(e => e.childNodes);
  for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
      boardDOM[i][j].textContent = board[i][j] == null ? null : board[i][j].toString();
      switch(boardDOM[i][j].textContent){
        case('S'):
        boardDOM[i][j].style.backgroundColor = 'darkseagreen';
        break;
        case('0'):
        boardDOM[i][j].style.backgroundColor = 'dimgrey';
        break;
        case('1'):
        boardDOM[i][j].style.backgroundColor = 'maroon';
        break;
        default:
          boardDOM[i][j].style.backgroundColor = 'inherit';
      };
      boardDOM[i][j].textContent = null;
    }
  }
}

function updateCompDisp(board,boardWrapper){
  let boardDOM = [...boardWrapper.childNodes];
  boardDOM = boardDOM.map(e => e.childNodes);
  for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
      boardDOM[i][j].textContent = board[i][j] == null ? null : board[i][j].toString();
      switch(boardDOM[i][j].textContent){
        case('0'):
        boardDOM[i][j].style.backgroundColor = 'dimgrey';
        break;
        case('1'):
        boardDOM[i][j].style.backgroundColor = 'maroon';
        break;
      };
     boardDOM[i][j].textContent = null;
    }
  }
}


//Create Gameboard Displays
let boards = document.querySelectorAll(".board")
function scrollShip (e){
  if(e.deltaY < -10){
    activePlayer.switchShip(true);
    updatePlayerDisp(playerOne.board.board,boards[0]);
    showPlacement(e);
  }else if(e.deltaY > 10){
    activePlayer.switchShip(false);
    updatePlayerDisp(playerOne.board.board,boards[0]);
    showPlacement(e);
  }
}
for(let i=0; i < 10; i++){
  let rowB1 = document.createElement('div');
  let rowB2 = document.createElement('div');
  boards[0].append(rowB1);
  boards[1].append(rowB2);
  for(let j=0; j<10; j++){
    let cellB1 = document.createElement('div');
    cellB1.addEventListener('click',placeShips);
    cellB1.addEventListener('mouseenter',showPlacement);
    cellB1.addEventListener('wheel',scrollShip);
    let cellB2 = document.createElement('div');
    rowB1.append(cellB1);
    rowB2.append(cellB2);
  }
}


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const gameboard = (size) => {
  const board = (() => {
    let arr = [];
    for(let i = 0; i < size; i++){
      arr[i] = []
      for(let j = 0; j < size; j++){
        arr[i][j] = null;
      }
    }

    return arr;
  })()

  const placeShip = (x,y,isVert,newShip) => {
    //check if out of bounds
    if(((isVert && y + newShip.length <= 10) || (!isVert && x + newShip.length <= 10)) && board[x][y] == null){
      for(let i = 0; i < newShip.length; i++){
        if(board[x + i*(!isVert)][y + i*(isVert)] != null){return false};
      }
      for(let i = 0; i < newShip.length; i++){
        board[x + i*(!isVert)][y + i*(isVert)] = newShip;
      }
      return true
    }else{
      return false;
    }
  }
  
  //null => hidden, 0 => miss, 1 => hit
  const receiveAttack = (x,y) => {
   //check for ship at x,y
   if(board[x][y] != null){
      board[x][y].hit();
      let ship = board[x][y];
      board[x][y] = 1;
      return ship;
    }
    board[x][y] = 0;
    return 0;
  }
  //let ships = [];
  return {board,placeShip,receiveAttack}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboard);

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");



const player = (boardSize = 10) => {
  let currentShips = [];
  let board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])(10);
  let attacks = []
  let sunkShips = [(0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(5),(0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(4),(0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3),(0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3),(0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(2)] //sunk or unplaced ships

    //return false if the player can place another ship, true otherwise
    const initShip = (x,y,isVert,indexOfSunkShip) => {
      if(sunkShips.length == 0){return true}
      if(board.placeShip(x,y,isVert,sunkShips[indexOfSunkShip])){
        currentShips.push(sunkShips[indexOfSunkShip]);
        sunkShips.splice(indexOfSunkShip,1);
        return currentShips.length == 5 ? true : false;
      }else{
        return false;
      }
    }

    //Returns false if the player can make another attack, true otherwise
    const attack = (player, x,y) => {
      //attack cannot be in already selected coordinate
      if(attacks.some(coord => coord[0] == x && coord[1] == y)){return false}
      attacks.push([x,y]);
      let hit = player.board.receiveAttack(x,y) 
      if(hit != 0){
        if(hit.isSunk()){
          player.sunkShips.push(hit);
          console.log("SUNK!")
          console.log(player.sunkShips);
          return player.sunkShips.length < 5 ? false : true;
        };
      }
      return hit != 0 ? false : true;
    }

    
    const switchShip = (fwdDirection) => {
      if(sunkShips.length != 0 && !fwdDirection){
        sunkShips.unshift(sunkShips[sunkShips.length - 1]);
        sunkShips.pop();
      }else{
        sunkShips.push(sunkShips[0]);
        sunkShips.shift();
      }
    }
    return {board, initShip,attack,sunkShips, switchShip}
  }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ship = (length) => {
  let hits = 0
  let sunk = false

  const hit = () => ++hits;
  const isSunk = () => sunk = hits == length ? true : false;

  const toString = () => "S";
  return {length,hit,isSunk,toString}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ship);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/game.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLGlEQUFJLElBQUksaURBQUk7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDbkRmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLGlFQUFlLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaDEsIGgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxNXJlbTtcclxufVxyXG4uYm9hcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmJvYXJkID4gZGl2ID4gZGl2IHtcclxuICB3aWR0aDogMnJlbTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxufVxyXG5cclxuLm1zZyBwIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib2FyZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJoMSwgaDIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4ubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDE1cmVtO1xcclxcbn1cXHJcXG4uYm9hcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuLmJvYXJkID4gZGl2ID4gZGl2IHtcXHJcXG4gIHdpZHRoOiAycmVtO1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLm1zZyBwIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgcGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHNoaXAgZnJvbSAnLi9zaGlwJztcclxuXHJcbi8vUGxheWVyc1xyXG5sZXQgcGxheWVyT25lID0gcGxheWVyKCk7XHJcbmxldCBwbGF5ZXJUd28gPSBwbGF5ZXIoKTsgLy9Db21wdXRlclxyXG5sZXQgYWN0aXZlUGxheWVyID0gcGxheWVyT25lO1xyXG5cclxuXHJcbmxldCB2ZXJ0aWNhbCA9IGZhbHNlOyAvL1VzZWQgdG8gdG9nZ2xlIGJldHdlZW4gaG9yaXpvbnRhbCBhbmQgdmVydGljYWwgc2hpcCBwbGFjZW1lbnRcclxubGV0IHRvZ2dsZVZlcnRpY2FsID0gKCkgPT4ge1xyXG4gIHZlcnRpY2FsID0gdmVydGljYWwgPT0gdHJ1ZSA/IGZhbHNlIDogdHJ1ZTtcclxufVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwoZSkgPT4ge1xyXG4gIHRvZ2dsZVZlcnRpY2FsKCk7XHJcbiAgdXBkYXRlUGxheWVyRGlzcChwbGF5ZXJPbmUuYm9hcmQuYm9hcmQsYm9hcmRzWzBdKTtcclxuICBzaG93UGxhY2VtZW50KGUpO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSlcclxuXHJcblxyXG4vL0dldHMgeCBhbmQgeSBzZWxlY3RlZCBvbiBncmlkXHJcbmxldCBnZXRET01Db29yZHMgPSAoZSkgPT4ge1xyXG4gIGxldCBub2RlID0gZS50YXJnZXQ7XHJcbiAgbGV0IGNvbHMgPSBBcnJheS5mcm9tKG5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzKTtcclxuICBsZXQgcm93cyA9IEFycmF5LmZyb20obm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlcyk7XHJcbiAgbGV0IHggPSByb3dzLmluZGV4T2Yobm9kZS5wYXJlbnROb2RlKTtcclxuICBsZXQgeSA9IGNvbHMuaW5kZXhPZihub2RlKTtcclxuICByZXR1cm4gW3gseV07XHJcbn1cclxuXHJcbi8vUGxhY2Ugc2hpcHNcclxuLy9PbmNlIGFsbCBzaGlwcyBhcmUgcGxhY2VkLCB0aGUgQUkgd2lsbCBwbGFjZSBzaGlwc1xyXG5sZXQgcGxhY2VTaGlwcyA9IChlKSA9PiB7XHJcbiAgbGV0IFt4LHldID0gZ2V0RE9NQ29vcmRzKGUpO1xyXG4gIGxldCBlbmRQaGFzZSA9IHBsYXllck9uZS5pbml0U2hpcCh4LHksdmVydGljYWwsMCk7XHJcbiAgdXBkYXRlUGxheWVyRGlzcChwbGF5ZXJPbmUuYm9hcmQuYm9hcmQsYm9hcmRzWzBdKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1zZyBwXCIpLnRleHRDb250ZW50ID0gXCJTaGlwcyBMZWZ0OiBcIiArIHBsYXllck9uZS5zdW5rU2hpcHMubGVuZ3RoO1xyXG4gIGlmKGVuZFBoYXNlID09IHRydWUpe1xyXG4gICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXMuZm9yRWFjaChjb2wgPT4ge1xyXG4gICAgICBjb2wuY2hpbGROb2Rlcy5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLHBsYWNlU2hpcHMpO1xyXG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsc2hvd1BsYWNlbWVudCk7XHJcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsc2Nyb2xsU2hpcCk7XHJcbiAgICAgIH0pICAgICAgXHJcbiAgICB9KTtcclxuICAgIGFpUGxhY2VTaGlwcygpO1xyXG4gICAgYm9hcmRzWzFdLmNoaWxkTm9kZXMuZm9yRWFjaChjb2wgPT4ge1xyXG4gICAgICBjb2wuY2hpbGROb2Rlcy5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGF0dGFja0JvYXJkKTtcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1zZyBoMlwiKS50ZXh0Q29udGVudCA9IFwiQXR0YWNrIFNoaXBzXCI7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1zZyBwXCIpLnRleHRDb250ZW50ID0gXCJTaGlwcyBMZWZ0OiBcIiArICg1IC0gcGxheWVyVHdvLnN1bmtTaGlwcy5sZW5ndGgpO1xyXG4gICAgdXBkYXRlQ29tcERpc3AocGxheWVyVHdvLmJvYXJkLmJvYXJkLGJvYXJkc1sxXSk7XHJcbiAgfVxyXG59XHJcblxyXG5sZXQgYWlQbGFjZVNoaXBzID0gKCkgPT4ge1xyXG4gIGxldCBlbmRQaGFzZSA9IGZhbHNlO1xyXG4gIHdoaWxlKCFlbmRQaGFzZSl7XHJcbiAgICBsZXQgW3gseV0gPSBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjkpLE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo5KV07XHJcbiAgICBsZXQgdmVydGljYWwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMikgPT0gMCA/IGZhbHNlIDogdHJ1ZTtcclxuICAgIGVuZFBoYXNlID0gcGxheWVyVHdvLmluaXRTaGlwKHgseSx2ZXJ0aWNhbCwwKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5sZXQgYXR0YWNrQm9hcmQgPSAoZSkgPT4ge1xyXG4gIGxldCBbeCx5XSA9IGdldERPTUNvb3JkcyhlKTtcclxuICBsZXQgZW5kUGhhc2UgPSBwbGF5ZXJPbmUuYXR0YWNrKHBsYXllclR3byx4LHkpO1xyXG4gIGlmKGVuZFBoYXNlID09IHRydWUpe1xyXG4gICAgaWYocGxheWVyVHdvLnN1bmtTaGlwcy5sZW5ndGggPT0gNSl7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXNnIGgyXCIpLnRleHRDb250ZW50ID0gXCJQbGF5ZXIgd2lucyFcIjtcclxuICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXMuZm9yRWFjaChjb2wgPT4ge1xyXG4gICAgICAgIGNvbC5jaGlsZE5vZGVzLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxhdHRhY2tCb2FyZCk7XHJcbiAgICAgICAgfSkgICAgICBcclxuICAgICAgfSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgYWlBdHRhY2soKTtcclxuICAgICAgaWYocGxheWVyT25lLnN1bmtTaGlwcy5sZW5ndGggPT0gNSl7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tc2cgaDJcIikudGV4dENvbnRlbnQgPSBcIkNvbXB1dGVyIHdpbnMhXCI7XHJcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXMuZm9yRWFjaChjb2wgPT4ge1xyXG4gICAgICAgICAgY29sLmNoaWxkTm9kZXMuZm9yRWFjaChjZWxsID0+IHtcclxuICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsYXR0YWNrQm9hcmQpO1xyXG4gICAgICAgICAgfSkgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1zZyBwXCIpLnRleHRDb250ZW50ID0gXCJTaGlwcyBMZWZ0OiBcIiArICg1IC0gcGxheWVyVHdvLnN1bmtTaGlwcy5sZW5ndGgpO1xyXG4gIHVwZGF0ZVBsYXllckRpc3AocGxheWVyT25lLmJvYXJkLmJvYXJkLGJvYXJkc1swXSk7XHJcbiAgdXBkYXRlQ29tcERpc3AocGxheWVyVHdvLmJvYXJkLmJvYXJkLGJvYXJkc1sxXSk7XHJcbn1cclxuXHJcbmxldCBhaUF0dGFjayA9ICgpID0+IHtcclxuICBsZXQgZW5kUGhhc2UgPSBmYWxzZTtcclxuICB3aGlsZSghZW5kUGhhc2Upe1xyXG4gICAgbGV0IFt4LHldID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo5KSxNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqOSldO1xyXG4gICAgZW5kUGhhc2UgPSBwbGF5ZXJUd28uYXR0YWNrKHBsYXllck9uZSx4LHkpO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBzaG93UGxhY2VtZW50KGUpe1xyXG4gIFxyXG4gIGxldCBpc1ZlcnQgPSB2ZXJ0aWNhbDtcclxuICBsZXQgc2hpcExlbmd0aCA9IGFjdGl2ZVBsYXllci5zdW5rU2hpcHNbMF0ubGVuZ3RoXHJcbiAgbGV0IFt4LHldID0gZ2V0RE9NQ29vcmRzKGUpO1xyXG4gIGxldCBib2FyZCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICBjb25zb2xlLmxvZyh4K3NoaXBMZW5ndGgpO1xyXG4gICAgaWYoeCArIHNoaXBMZW5ndGggPj0gMTEgJiYgdmVydGljYWwgPT0gZmFsc2Upe1xyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDw9IDkteDsgaSsrKXtcclxuICAgICAgICBib2FyZC5jaGlsZE5vZGVzW3ggKyBpKighaXNWZXJ0KV0uY2hpbGROb2Rlc1t5ICsgaSooaXNWZXJ0KV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcclxuICAgICAgfVxyXG4gICAgfWVsc2UgaWYoeSArIHNoaXBMZW5ndGggPj0gMTEgJiYgdmVydGljYWwgPT0gdHJ1ZSl7XHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gOS15OyBpKyspe1xyXG4gICAgICAgIGJvYXJkLmNoaWxkTm9kZXNbeCArIGkqKCFpc1ZlcnQpXS5jaGlsZE5vZGVzW3kgKyBpKihpc1ZlcnQpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhib2FyZC5jaGlsZE5vZGVzW3ggKyBpKighaXNWZXJ0KV0uY2hpbGROb2Rlc1t5ICsgaSooaXNWZXJ0KV0uc3R5bGUuYmFja2dyb3VuZENvbG9yKVxyXG4gICAgICAgIGlmKGJvYXJkLmNoaWxkTm9kZXNbeCArIGkqKCFpc1ZlcnQpXS5jaGlsZE5vZGVzW3kgKyBpKihpc1ZlcnQpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gXCJpbmhlcml0XCIpe1xyXG4gICAgICAgICAgYm9hcmQuY2hpbGROb2Rlc1t4ICsgaSooIWlzVmVydCldLmNoaWxkTm9kZXNbeSArIGkqKGlzVmVydCldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYXF1YW1hcmluZVwiO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgYm9hcmQuY2hpbGROb2Rlc1t4ICsgaSooIWlzVmVydCldLmNoaWxkTm9kZXNbeSArIGkqKGlzVmVydCldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZS50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwoKSA9PiB7dXBkYXRlUGxheWVyRGlzcChwbGF5ZXJPbmUuYm9hcmQuYm9hcmQsYm9hcmRzWzBdKTt9KVxyXG59XHJcbi8vUmVxdWlyZXMgMkQgbm9kZWxpc3Qgb2YgdGhlIGJvYXJkRE9NXHJcbi8vVXBkYXRlIERpc3BsYXlcclxuZnVuY3Rpb24gdXBkYXRlUGxheWVyRGlzcChib2FyZCxib2FyZFdyYXBwZXIpe1xyXG4gIGxldCBib2FyZERPTSA9IFsuLi5ib2FyZFdyYXBwZXIuY2hpbGROb2Rlc107XHJcbiAgYm9hcmRET00gPSBib2FyZERPTS5tYXAoZSA9PiBlLmNoaWxkTm9kZXMpO1xyXG4gIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKXtcclxuICAgIGZvcihsZXQgaiA9IDA7IGogPCAxMDsgaisrKXtcclxuICAgICAgYm9hcmRET01baV1bal0udGV4dENvbnRlbnQgPSBib2FyZFtpXVtqXSA9PSBudWxsID8gbnVsbCA6IGJvYXJkW2ldW2pdLnRvU3RyaW5nKCk7XHJcbiAgICAgIHN3aXRjaChib2FyZERPTVtpXVtqXS50ZXh0Q29udGVudCl7XHJcbiAgICAgICAgY2FzZSgnUycpOlxyXG4gICAgICAgIGJvYXJkRE9NW2ldW2pdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdkYXJrc2VhZ3JlZW4nO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UoJzAnKTpcclxuICAgICAgICBib2FyZERPTVtpXVtqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZGltZ3JleSc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSgnMScpOlxyXG4gICAgICAgIGJvYXJkRE9NW2ldW2pdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdtYXJvb24nO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBib2FyZERPTVtpXVtqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5oZXJpdCc7XHJcbiAgICAgIH07XHJcbiAgICAgIGJvYXJkRE9NW2ldW2pdLnRleHRDb250ZW50ID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNvbXBEaXNwKGJvYXJkLGJvYXJkV3JhcHBlcil7XHJcbiAgbGV0IGJvYXJkRE9NID0gWy4uLmJvYXJkV3JhcHBlci5jaGlsZE5vZGVzXTtcclxuICBib2FyZERPTSA9IGJvYXJkRE9NLm1hcChlID0+IGUuY2hpbGROb2Rlcyk7XHJcbiAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspe1xyXG4gICAgZm9yKGxldCBqID0gMDsgaiA8IDEwOyBqKyspe1xyXG4gICAgICBib2FyZERPTVtpXVtqXS50ZXh0Q29udGVudCA9IGJvYXJkW2ldW2pdID09IG51bGwgPyBudWxsIDogYm9hcmRbaV1bal0udG9TdHJpbmcoKTtcclxuICAgICAgc3dpdGNoKGJvYXJkRE9NW2ldW2pdLnRleHRDb250ZW50KXtcclxuICAgICAgICBjYXNlKCcwJyk6XHJcbiAgICAgICAgYm9hcmRET01baV1bal0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2RpbWdyZXknO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UoJzEnKTpcclxuICAgICAgICBib2FyZERPTVtpXVtqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbWFyb29uJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgfTtcclxuICAgICBib2FyZERPTVtpXVtqXS50ZXh0Q29udGVudCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy9DcmVhdGUgR2FtZWJvYXJkIERpc3BsYXlzXHJcbmxldCBib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkXCIpXHJcbmZ1bmN0aW9uIHNjcm9sbFNoaXAgKGUpe1xyXG4gIGlmKGUuZGVsdGFZIDwgLTEwKXtcclxuICAgIGFjdGl2ZVBsYXllci5zd2l0Y2hTaGlwKHRydWUpO1xyXG4gICAgdXBkYXRlUGxheWVyRGlzcChwbGF5ZXJPbmUuYm9hcmQuYm9hcmQsYm9hcmRzWzBdKTtcclxuICAgIHNob3dQbGFjZW1lbnQoZSk7XHJcbiAgfWVsc2UgaWYoZS5kZWx0YVkgPiAxMCl7XHJcbiAgICBhY3RpdmVQbGF5ZXIuc3dpdGNoU2hpcChmYWxzZSk7XHJcbiAgICB1cGRhdGVQbGF5ZXJEaXNwKHBsYXllck9uZS5ib2FyZC5ib2FyZCxib2FyZHNbMF0pO1xyXG4gICAgc2hvd1BsYWNlbWVudChlKTtcclxuICB9XHJcbn1cclxuZm9yKGxldCBpPTA7IGkgPCAxMDsgaSsrKXtcclxuICBsZXQgcm93QjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsZXQgcm93QjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBib2FyZHNbMF0uYXBwZW5kKHJvd0IxKTtcclxuICBib2FyZHNbMV0uYXBwZW5kKHJvd0IyKTtcclxuICBmb3IobGV0IGo9MDsgajwxMDsgaisrKXtcclxuICAgIGxldCBjZWxsQjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxCMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycscGxhY2VTaGlwcyk7XHJcbiAgICBjZWxsQjEuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsc2hvd1BsYWNlbWVudCk7XHJcbiAgICBjZWxsQjEuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLHNjcm9sbFNoaXApO1xyXG4gICAgbGV0IGNlbGxCMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcm93QjEuYXBwZW5kKGNlbGxCMSk7XHJcbiAgICByb3dCMi5hcHBlbmQoY2VsbEIyKTtcclxuICB9XHJcbn1cclxuIiwiY29uc3QgZ2FtZWJvYXJkID0gKHNpemUpID0+IHtcclxuICBjb25zdCBib2FyZCA9ICgoKSA9PiB7XHJcbiAgICBsZXQgYXJyID0gW107XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKXtcclxuICAgICAgYXJyW2ldID0gW11cclxuICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHNpemU7IGorKyl7XHJcbiAgICAgICAgYXJyW2ldW2pdID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnI7XHJcbiAgfSkoKVxyXG5cclxuICBjb25zdCBwbGFjZVNoaXAgPSAoeCx5LGlzVmVydCxuZXdTaGlwKSA9PiB7XHJcbiAgICAvL2NoZWNrIGlmIG91dCBvZiBib3VuZHNcclxuICAgIGlmKCgoaXNWZXJ0ICYmIHkgKyBuZXdTaGlwLmxlbmd0aCA8PSAxMCkgfHwgKCFpc1ZlcnQgJiYgeCArIG5ld1NoaXAubGVuZ3RoIDw9IDEwKSkgJiYgYm9hcmRbeF1beV0gPT0gbnVsbCl7XHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBuZXdTaGlwLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBpZihib2FyZFt4ICsgaSooIWlzVmVydCldW3kgKyBpKihpc1ZlcnQpXSAhPSBudWxsKXtyZXR1cm4gZmFsc2V9O1xyXG4gICAgICB9XHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBuZXdTaGlwLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBib2FyZFt4ICsgaSooIWlzVmVydCldW3kgKyBpKihpc1ZlcnQpXSA9IG5ld1NoaXA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1lbHNle1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vbnVsbCA9PiBoaWRkZW4sIDAgPT4gbWlzcywgMSA9PiBoaXRcclxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgseSkgPT4ge1xyXG4gICAvL2NoZWNrIGZvciBzaGlwIGF0IHgseVxyXG4gICBpZihib2FyZFt4XVt5XSAhPSBudWxsKXtcclxuICAgICAgYm9hcmRbeF1beV0uaGl0KCk7XHJcbiAgICAgIGxldCBzaGlwID0gYm9hcmRbeF1beV07XHJcbiAgICAgIGJvYXJkW3hdW3ldID0gMTtcclxuICAgICAgcmV0dXJuIHNoaXA7XHJcbiAgICB9XHJcbiAgICBib2FyZFt4XVt5XSA9IDA7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcbiAgLy9sZXQgc2hpcHMgPSBbXTtcclxuICByZXR1cm4ge2JvYXJkLHBsYWNlU2hpcCxyZWNlaXZlQXR0YWNrfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZWJvYXJkIiwiaW1wb3J0IGdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcclxuaW1wb3J0IHNoaXAgZnJvbSBcIi4vc2hpcFwiO1xyXG5cclxuY29uc3QgcGxheWVyID0gKGJvYXJkU2l6ZSA9IDEwKSA9PiB7XHJcbiAgbGV0IGN1cnJlbnRTaGlwcyA9IFtdO1xyXG4gIGxldCBib2FyZCA9IGdhbWVib2FyZCgxMCk7XHJcbiAgbGV0IGF0dGFja3MgPSBbXVxyXG4gIGxldCBzdW5rU2hpcHMgPSBbc2hpcCg1KSxzaGlwKDQpLHNoaXAoMyksc2hpcCgzKSxzaGlwKDIpXSAvL3N1bmsgb3IgdW5wbGFjZWQgc2hpcHNcclxuXHJcbiAgICAvL3JldHVybiBmYWxzZSBpZiB0aGUgcGxheWVyIGNhbiBwbGFjZSBhbm90aGVyIHNoaXAsIHRydWUgb3RoZXJ3aXNlXHJcbiAgICBjb25zdCBpbml0U2hpcCA9ICh4LHksaXNWZXJ0LGluZGV4T2ZTdW5rU2hpcCkgPT4ge1xyXG4gICAgICBpZihzdW5rU2hpcHMubGVuZ3RoID09IDApe3JldHVybiB0cnVlfVxyXG4gICAgICBpZihib2FyZC5wbGFjZVNoaXAoeCx5LGlzVmVydCxzdW5rU2hpcHNbaW5kZXhPZlN1bmtTaGlwXSkpe1xyXG4gICAgICAgIGN1cnJlbnRTaGlwcy5wdXNoKHN1bmtTaGlwc1tpbmRleE9mU3Vua1NoaXBdKTtcclxuICAgICAgICBzdW5rU2hpcHMuc3BsaWNlKGluZGV4T2ZTdW5rU2hpcCwxKTtcclxuICAgICAgICByZXR1cm4gY3VycmVudFNoaXBzLmxlbmd0aCA9PSA1ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL1JldHVybnMgZmFsc2UgaWYgdGhlIHBsYXllciBjYW4gbWFrZSBhbm90aGVyIGF0dGFjaywgdHJ1ZSBvdGhlcndpc2VcclxuICAgIGNvbnN0IGF0dGFjayA9IChwbGF5ZXIsIHgseSkgPT4ge1xyXG4gICAgICAvL2F0dGFjayBjYW5ub3QgYmUgaW4gYWxyZWFkeSBzZWxlY3RlZCBjb29yZGluYXRlXHJcbiAgICAgIGlmKGF0dGFja3Muc29tZShjb29yZCA9PiBjb29yZFswXSA9PSB4ICYmIGNvb3JkWzFdID09IHkpKXtyZXR1cm4gZmFsc2V9XHJcbiAgICAgIGF0dGFja3MucHVzaChbeCx5XSk7XHJcbiAgICAgIGxldCBoaXQgPSBwbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayh4LHkpIFxyXG4gICAgICBpZihoaXQgIT0gMCl7XHJcbiAgICAgICAgaWYoaGl0LmlzU3VuaygpKXtcclxuICAgICAgICAgIHBsYXllci5zdW5rU2hpcHMucHVzaChoaXQpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJTVU5LIVwiKVxyXG4gICAgICAgICAgY29uc29sZS5sb2cocGxheWVyLnN1bmtTaGlwcyk7XHJcbiAgICAgICAgICByZXR1cm4gcGxheWVyLnN1bmtTaGlwcy5sZW5ndGggPCA1ID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGhpdCAhPSAwID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgY29uc3Qgc3dpdGNoU2hpcCA9IChmd2REaXJlY3Rpb24pID0+IHtcclxuICAgICAgaWYoc3Vua1NoaXBzLmxlbmd0aCAhPSAwICYmICFmd2REaXJlY3Rpb24pe1xyXG4gICAgICAgIHN1bmtTaGlwcy51bnNoaWZ0KHN1bmtTaGlwc1tzdW5rU2hpcHMubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgIHN1bmtTaGlwcy5wb3AoKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgc3Vua1NoaXBzLnB1c2goc3Vua1NoaXBzWzBdKTtcclxuICAgICAgICBzdW5rU2hpcHMuc2hpZnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtib2FyZCwgaW5pdFNoaXAsYXR0YWNrLHN1bmtTaGlwcywgc3dpdGNoU2hpcH1cclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwbGF5ZXIiLCJjb25zdCBzaGlwID0gKGxlbmd0aCkgPT4ge1xyXG4gIGxldCBoaXRzID0gMFxyXG4gIGxldCBzdW5rID0gZmFsc2VcclxuXHJcbiAgY29uc3QgaGl0ID0gKCkgPT4gKytoaXRzO1xyXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHN1bmsgPSBoaXRzID09IGxlbmd0aCA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiBcIlNcIjtcclxuICByZXR1cm4ge2xlbmd0aCxoaXQsaXNTdW5rLHRvU3RyaW5nfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hpcDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=