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
for(let i=0; i < 10; i++){
  let rowB1 = document.createElement('div');
  let rowB2 = document.createElement('div');
  boards[0].append(rowB1);
  boards[1].append(rowB2);
  for(let j=0; j<10; j++){
    let cellB1 = document.createElement('div');
    cellB1.addEventListener('click',placeShips);
    cellB1.addEventListener('mouseenter',showPlacement);
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

    return {board, initShip,attack,sunkShips}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ3pDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxpRUFBZSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGgxLCBoMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tYWluIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMTVyZW07XHJcbn1cclxuLmJvYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5ib2FyZCA+IGRpdiA+IGRpdiB7XHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbn1cclxuXHJcbi5tc2cgcCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYm9hcmQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaDEsIGgyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxNXJlbTtcXHJcXG59XFxyXFxuLmJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbi5ib2FyZCA+IGRpdiA+IGRpdiB7XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxyXFxufVxcclxcblxcclxcbi5tc2cgcCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHBsYXllciBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCBzaGlwIGZyb20gJy4vc2hpcCc7XHJcblxyXG4vL1BsYXllcnNcclxubGV0IHBsYXllck9uZSA9IHBsYXllcigpO1xyXG5sZXQgcGxheWVyVHdvID0gcGxheWVyKCk7IC8vQ29tcHV0ZXJcclxubGV0IGFjdGl2ZVBsYXllciA9IHBsYXllck9uZTtcclxuXHJcblxyXG5sZXQgdmVydGljYWwgPSBmYWxzZTsgLy9Vc2VkIHRvIHRvZ2dsZSBiZXR3ZWVuIGhvcml6b250YWwgYW5kIHZlcnRpY2FsIHNoaXAgcGxhY2VtZW50XHJcbmxldCB0b2dnbGVWZXJ0aWNhbCA9ICgpID0+IHtcclxuICB2ZXJ0aWNhbCA9IHZlcnRpY2FsID09IHRydWUgPyBmYWxzZSA6IHRydWU7XHJcbn1cclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsKGUpID0+IHtcclxuICB0b2dnbGVWZXJ0aWNhbCgpO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSlcclxuXHJcblxyXG4vL0dldHMgeCBhbmQgeSBzZWxlY3RlZCBvbiBncmlkXHJcbmxldCBnZXRET01Db29yZHMgPSAoZSkgPT4ge1xyXG4gIGxldCBub2RlID0gZS50YXJnZXQ7XHJcbiAgbGV0IGNvbHMgPSBBcnJheS5mcm9tKG5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzKTtcclxuICBsZXQgcm93cyA9IEFycmF5LmZyb20obm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlcyk7XHJcbiAgbGV0IHggPSByb3dzLmluZGV4T2Yobm9kZS5wYXJlbnROb2RlKTtcclxuICBsZXQgeSA9IGNvbHMuaW5kZXhPZihub2RlKTtcclxuICByZXR1cm4gW3gseV07XHJcbn1cclxuXHJcbi8vUGxhY2Ugc2hpcHNcclxuLy9PbmNlIGFsbCBzaGlwcyBhcmUgcGxhY2VkLCB0aGUgQUkgd2lsbCBwbGFjZSBzaGlwc1xyXG5sZXQgcGxhY2VTaGlwcyA9IChlKSA9PiB7XHJcbiAgbGV0IFt4LHldID0gZ2V0RE9NQ29vcmRzKGUpO1xyXG4gIGxldCBlbmRQaGFzZSA9IHBsYXllck9uZS5pbml0U2hpcCh4LHksdmVydGljYWwsMCk7XHJcbiAgdXBkYXRlUGxheWVyRGlzcChwbGF5ZXJPbmUuYm9hcmQuYm9hcmQsYm9hcmRzWzBdKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1zZyBwXCIpLnRleHRDb250ZW50ID0gXCJTaGlwcyBMZWZ0OiBcIiArIHBsYXllck9uZS5zdW5rU2hpcHMubGVuZ3RoO1xyXG4gIGlmKGVuZFBoYXNlID09IHRydWUpe1xyXG4gICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXMuZm9yRWFjaChjb2wgPT4ge1xyXG4gICAgICBjb2wuY2hpbGROb2Rlcy5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLHBsYWNlU2hpcHMpO1xyXG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsc2hvd1BsYWNlbWVudCk7XHJcbiAgICAgIH0pICAgICAgXHJcbiAgICB9KTtcclxuICAgIGFpUGxhY2VTaGlwcygpO1xyXG4gICAgYm9hcmRzWzFdLmNoaWxkTm9kZXMuZm9yRWFjaChjb2wgPT4ge1xyXG4gICAgICBjb2wuY2hpbGROb2Rlcy5mb3JFYWNoKGNlbGwgPT4ge1xyXG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGF0dGFja0JvYXJkKTtcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1zZyBoMlwiKS50ZXh0Q29udGVudCA9IFwiQXR0YWNrIFNoaXBzXCI7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1zZyBwXCIpLnRleHRDb250ZW50ID0gXCJTaGlwcyBMZWZ0OiBcIiArICg1IC0gcGxheWVyVHdvLnN1bmtTaGlwcy5sZW5ndGgpO1xyXG4gICAgdXBkYXRlQ29tcERpc3AocGxheWVyVHdvLmJvYXJkLmJvYXJkLGJvYXJkc1sxXSk7XHJcbiAgfVxyXG59XHJcblxyXG5sZXQgYWlQbGFjZVNoaXBzID0gKCkgPT4ge1xyXG4gIGxldCBlbmRQaGFzZSA9IGZhbHNlO1xyXG4gIHdoaWxlKCFlbmRQaGFzZSl7XHJcbiAgICBsZXQgW3gseV0gPSBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjkpLE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo5KV07XHJcbiAgICBsZXQgdmVydGljYWwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMikgPT0gMCA/IGZhbHNlIDogdHJ1ZTtcclxuICAgIGVuZFBoYXNlID0gcGxheWVyVHdvLmluaXRTaGlwKHgseSx2ZXJ0aWNhbCwwKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5sZXQgYXR0YWNrQm9hcmQgPSAoZSkgPT4ge1xyXG4gIGxldCBbeCx5XSA9IGdldERPTUNvb3JkcyhlKTtcclxuICBsZXQgZW5kUGhhc2UgPSBwbGF5ZXJPbmUuYXR0YWNrKHBsYXllclR3byx4LHkpO1xyXG4gIGlmKGVuZFBoYXNlID09IHRydWUpe1xyXG4gICAgaWYocGxheWVyVHdvLnN1bmtTaGlwcy5sZW5ndGggPT0gNSl7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXNnIGgyXCIpLnRleHRDb250ZW50ID0gXCJQbGF5ZXIgd2lucyFcIjtcclxuICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXMuZm9yRWFjaChjb2wgPT4ge1xyXG4gICAgICAgIGNvbC5jaGlsZE5vZGVzLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxhdHRhY2tCb2FyZCk7XHJcbiAgICAgICAgfSkgICAgICBcclxuICAgICAgfSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgYWlBdHRhY2soKTtcclxuICAgICAgaWYocGxheWVyT25lLnN1bmtTaGlwcy5sZW5ndGggPT0gNSl7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tc2cgaDJcIikudGV4dENvbnRlbnQgPSBcIkNvbXB1dGVyIHdpbnMhXCI7XHJcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXMuZm9yRWFjaChjb2wgPT4ge1xyXG4gICAgICAgICAgY29sLmNoaWxkTm9kZXMuZm9yRWFjaChjZWxsID0+IHtcclxuICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsYXR0YWNrQm9hcmQpO1xyXG4gICAgICAgICAgfSkgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1zZyBwXCIpLnRleHRDb250ZW50ID0gXCJTaGlwcyBMZWZ0OiBcIiArICg1IC0gcGxheWVyVHdvLnN1bmtTaGlwcy5sZW5ndGgpO1xyXG4gIHVwZGF0ZVBsYXllckRpc3AocGxheWVyT25lLmJvYXJkLmJvYXJkLGJvYXJkc1swXSk7XHJcbiAgdXBkYXRlQ29tcERpc3AocGxheWVyVHdvLmJvYXJkLmJvYXJkLGJvYXJkc1sxXSk7XHJcbn1cclxuXHJcbmxldCBhaUF0dGFjayA9ICgpID0+IHtcclxuICBsZXQgZW5kUGhhc2UgPSBmYWxzZTtcclxuICB3aGlsZSghZW5kUGhhc2Upe1xyXG4gICAgbGV0IFt4LHldID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo5KSxNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqOSldO1xyXG4gICAgZW5kUGhhc2UgPSBwbGF5ZXJUd28uYXR0YWNrKHBsYXllck9uZSx4LHkpO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBzaG93UGxhY2VtZW50KGUpe1xyXG4gIFxyXG4gIGxldCBpc1ZlcnQgPSB2ZXJ0aWNhbDtcclxuICBsZXQgc2hpcExlbmd0aCA9IGFjdGl2ZVBsYXllci5zdW5rU2hpcHNbMF0ubGVuZ3RoXHJcbiAgbGV0IFt4LHldID0gZ2V0RE9NQ29vcmRzKGUpO1xyXG4gIGxldCBib2FyZCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICBjb25zb2xlLmxvZyh4K3NoaXBMZW5ndGgpO1xyXG4gICAgaWYoeCArIHNoaXBMZW5ndGggPj0gMTEgJiYgdmVydGljYWwgPT0gZmFsc2Upe1xyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDw9IDkteDsgaSsrKXtcclxuICAgICAgICBib2FyZC5jaGlsZE5vZGVzW3ggKyBpKighaXNWZXJ0KV0uY2hpbGROb2Rlc1t5ICsgaSooaXNWZXJ0KV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcclxuICAgICAgfVxyXG4gICAgfWVsc2UgaWYoeSArIHNoaXBMZW5ndGggPj0gMTEgJiYgdmVydGljYWwgPT0gdHJ1ZSl7XHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gOS15OyBpKyspe1xyXG4gICAgICAgIGJvYXJkLmNoaWxkTm9kZXNbeCArIGkqKCFpc1ZlcnQpXS5jaGlsZE5vZGVzW3kgKyBpKihpc1ZlcnQpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhib2FyZC5jaGlsZE5vZGVzW3ggKyBpKighaXNWZXJ0KV0uY2hpbGROb2Rlc1t5ICsgaSooaXNWZXJ0KV0uc3R5bGUuYmFja2dyb3VuZENvbG9yKVxyXG4gICAgICAgIGlmKGJvYXJkLmNoaWxkTm9kZXNbeCArIGkqKCFpc1ZlcnQpXS5jaGlsZE5vZGVzW3kgKyBpKihpc1ZlcnQpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gXCJpbmhlcml0XCIpe1xyXG4gICAgICAgICAgYm9hcmQuY2hpbGROb2Rlc1t4ICsgaSooIWlzVmVydCldLmNoaWxkTm9kZXNbeSArIGkqKGlzVmVydCldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYXF1YW1hcmluZVwiO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgYm9hcmQuY2hpbGROb2Rlc1t4ICsgaSooIWlzVmVydCldLmNoaWxkTm9kZXNbeSArIGkqKGlzVmVydCldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZS50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwoKSA9PiB7dXBkYXRlUGxheWVyRGlzcChwbGF5ZXJPbmUuYm9hcmQuYm9hcmQsYm9hcmRzWzBdKTt9KVxyXG59XHJcbi8vUmVxdWlyZXMgMkQgbm9kZWxpc3Qgb2YgdGhlIGJvYXJkRE9NXHJcbi8vVXBkYXRlIERpc3BsYXlcclxuZnVuY3Rpb24gdXBkYXRlUGxheWVyRGlzcChib2FyZCxib2FyZFdyYXBwZXIpe1xyXG4gIGxldCBib2FyZERPTSA9IFsuLi5ib2FyZFdyYXBwZXIuY2hpbGROb2Rlc107XHJcbiAgYm9hcmRET00gPSBib2FyZERPTS5tYXAoZSA9PiBlLmNoaWxkTm9kZXMpO1xyXG4gIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKXtcclxuICAgIGZvcihsZXQgaiA9IDA7IGogPCAxMDsgaisrKXtcclxuICAgICAgYm9hcmRET01baV1bal0udGV4dENvbnRlbnQgPSBib2FyZFtpXVtqXSA9PSBudWxsID8gbnVsbCA6IGJvYXJkW2ldW2pdLnRvU3RyaW5nKCk7XHJcbiAgICAgIHN3aXRjaChib2FyZERPTVtpXVtqXS50ZXh0Q29udGVudCl7XHJcbiAgICAgICAgY2FzZSgnUycpOlxyXG4gICAgICAgIGJvYXJkRE9NW2ldW2pdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdkYXJrc2VhZ3JlZW4nO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UoJzAnKTpcclxuICAgICAgICBib2FyZERPTVtpXVtqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZGltZ3JleSc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSgnMScpOlxyXG4gICAgICAgIGJvYXJkRE9NW2ldW2pdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdtYXJvb24nO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBib2FyZERPTVtpXVtqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnaW5oZXJpdCc7XHJcbiAgICAgIH07XHJcbiAgICAgIGJvYXJkRE9NW2ldW2pdLnRleHRDb250ZW50ID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNvbXBEaXNwKGJvYXJkLGJvYXJkV3JhcHBlcil7XHJcbiAgbGV0IGJvYXJkRE9NID0gWy4uLmJvYXJkV3JhcHBlci5jaGlsZE5vZGVzXTtcclxuICBib2FyZERPTSA9IGJvYXJkRE9NLm1hcChlID0+IGUuY2hpbGROb2Rlcyk7XHJcbiAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspe1xyXG4gICAgZm9yKGxldCBqID0gMDsgaiA8IDEwOyBqKyspe1xyXG4gICAgICBib2FyZERPTVtpXVtqXS50ZXh0Q29udGVudCA9IGJvYXJkW2ldW2pdID09IG51bGwgPyBudWxsIDogYm9hcmRbaV1bal0udG9TdHJpbmcoKTtcclxuICAgICAgc3dpdGNoKGJvYXJkRE9NW2ldW2pdLnRleHRDb250ZW50KXtcclxuICAgICAgICBjYXNlKCcwJyk6XHJcbiAgICAgICAgYm9hcmRET01baV1bal0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2RpbWdyZXknO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UoJzEnKTpcclxuICAgICAgICBib2FyZERPTVtpXVtqXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbWFyb29uJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgfTtcclxuICAgICBib2FyZERPTVtpXVtqXS50ZXh0Q29udGVudCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vL0NyZWF0ZSBHYW1lYm9hcmQgRGlzcGxheXNcclxubGV0IGJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmRcIilcclxuZm9yKGxldCBpPTA7IGkgPCAxMDsgaSsrKXtcclxuICBsZXQgcm93QjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsZXQgcm93QjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBib2FyZHNbMF0uYXBwZW5kKHJvd0IxKTtcclxuICBib2FyZHNbMV0uYXBwZW5kKHJvd0IyKTtcclxuICBmb3IobGV0IGo9MDsgajwxMDsgaisrKXtcclxuICAgIGxldCBjZWxsQjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNlbGxCMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycscGxhY2VTaGlwcyk7XHJcbiAgICBjZWxsQjEuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsc2hvd1BsYWNlbWVudCk7XHJcbiAgICBsZXQgY2VsbEIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByb3dCMS5hcHBlbmQoY2VsbEIxKTtcclxuICAgIHJvd0IyLmFwcGVuZChjZWxsQjIpO1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBnYW1lYm9hcmQgPSAoc2l6ZSkgPT4ge1xyXG4gIGNvbnN0IGJvYXJkID0gKCgpID0+IHtcclxuICAgIGxldCBhcnIgPSBbXTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspe1xyXG4gICAgICBhcnJbaV0gPSBbXVxyXG4gICAgICBmb3IobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKXtcclxuICAgICAgICBhcnJbaV1bal0gPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycjtcclxuICB9KSgpXHJcblxyXG4gIGNvbnN0IHBsYWNlU2hpcCA9ICh4LHksaXNWZXJ0LG5ld1NoaXApID0+IHtcclxuICAgIC8vY2hlY2sgaWYgb3V0IG9mIGJvdW5kc1xyXG4gICAgaWYoKChpc1ZlcnQgJiYgeSArIG5ld1NoaXAubGVuZ3RoIDw9IDEwKSB8fCAoIWlzVmVydCAmJiB4ICsgbmV3U2hpcC5sZW5ndGggPD0gMTApKSAmJiBib2FyZFt4XVt5XSA9PSBudWxsKXtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG5ld1NoaXAubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGlmKGJvYXJkW3ggKyBpKighaXNWZXJ0KV1beSArIGkqKGlzVmVydCldICE9IG51bGwpe3JldHVybiBmYWxzZX07XHJcbiAgICAgIH1cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG5ld1NoaXAubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGJvYXJkW3ggKyBpKighaXNWZXJ0KV1beSArIGkqKGlzVmVydCldID0gbmV3U2hpcDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy9udWxsID0+IGhpZGRlbiwgMCA9PiBtaXNzLCAxID0+IGhpdFxyXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCx5KSA9PiB7XHJcbiAgIC8vY2hlY2sgZm9yIHNoaXAgYXQgeCx5XHJcbiAgIGlmKGJvYXJkW3hdW3ldICE9IG51bGwpe1xyXG4gICAgICBib2FyZFt4XVt5XS5oaXQoKTtcclxuICAgICAgbGV0IHNoaXAgPSBib2FyZFt4XVt5XTtcclxuICAgICAgYm9hcmRbeF1beV0gPSAxO1xyXG4gICAgICByZXR1cm4gc2hpcDtcclxuICAgIH1cclxuICAgIGJvYXJkW3hdW3ldID0gMDtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuICAvL2xldCBzaGlwcyA9IFtdO1xyXG4gIHJldHVybiB7Ym9hcmQscGxhY2VTaGlwLHJlY2VpdmVBdHRhY2t9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnYW1lYm9hcmQiLCJpbXBvcnQgZ2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG5pbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XHJcblxyXG5jb25zdCBwbGF5ZXIgPSAoYm9hcmRTaXplID0gMTApID0+IHtcclxuICBsZXQgY3VycmVudFNoaXBzID0gW107XHJcbiAgbGV0IGJvYXJkID0gZ2FtZWJvYXJkKDEwKTtcclxuICBsZXQgYXR0YWNrcyA9IFtdXHJcbiAgbGV0IHN1bmtTaGlwcyA9IFtzaGlwKDUpLHNoaXAoNCksc2hpcCgzKSxzaGlwKDMpLHNoaXAoMildIC8vc3VuayBvciB1bnBsYWNlZCBzaGlwc1xyXG5cclxuICAgIC8vcmV0dXJuIGZhbHNlIGlmIHRoZSBwbGF5ZXIgY2FuIHBsYWNlIGFub3RoZXIgc2hpcCwgdHJ1ZSBvdGhlcndpc2VcclxuICAgIGNvbnN0IGluaXRTaGlwID0gKHgseSxpc1ZlcnQsaW5kZXhPZlN1bmtTaGlwKSA9PiB7XHJcbiAgICAgIGlmKHN1bmtTaGlwcy5sZW5ndGggPT0gMCl7cmV0dXJuIHRydWV9XHJcbiAgICAgIGlmKGJvYXJkLnBsYWNlU2hpcCh4LHksaXNWZXJ0LHN1bmtTaGlwc1tpbmRleE9mU3Vua1NoaXBdKSl7XHJcbiAgICAgICAgY3VycmVudFNoaXBzLnB1c2goc3Vua1NoaXBzW2luZGV4T2ZTdW5rU2hpcF0pO1xyXG4gICAgICAgIHN1bmtTaGlwcy5zcGxpY2UoaW5kZXhPZlN1bmtTaGlwLDEpO1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50U2hpcHMubGVuZ3RoID09IDUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vUmV0dXJucyBmYWxzZSBpZiB0aGUgcGxheWVyIGNhbiBtYWtlIGFub3RoZXIgYXR0YWNrLCB0cnVlIG90aGVyd2lzZVxyXG4gICAgY29uc3QgYXR0YWNrID0gKHBsYXllciwgeCx5KSA9PiB7XHJcbiAgICAgIC8vYXR0YWNrIGNhbm5vdCBiZSBpbiBhbHJlYWR5IHNlbGVjdGVkIGNvb3JkaW5hdGVcclxuICAgICAgaWYoYXR0YWNrcy5zb21lKGNvb3JkID0+IGNvb3JkWzBdID09IHggJiYgY29vcmRbMV0gPT0geSkpe3JldHVybiBmYWxzZX1cclxuICAgICAgYXR0YWNrcy5wdXNoKFt4LHldKTtcclxuICAgICAgbGV0IGhpdCA9IHBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKHgseSkgXHJcbiAgICAgIGlmKGhpdCAhPSAwKXtcclxuICAgICAgICBpZihoaXQuaXNTdW5rKCkpe1xyXG4gICAgICAgICAgcGxheWVyLnN1bmtTaGlwcy5wdXNoKGhpdCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNVTkshXCIpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIuc3Vua1NoaXBzKTtcclxuICAgICAgICAgIHJldHVybiBwbGF5ZXIuc3Vua1NoaXBzLmxlbmd0aCA8IDUgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaGl0ICE9IDAgPyBmYWxzZSA6IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtib2FyZCwgaW5pdFNoaXAsYXR0YWNrLHN1bmtTaGlwc31cclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwbGF5ZXIiLCJjb25zdCBzaGlwID0gKGxlbmd0aCkgPT4ge1xyXG4gIGxldCBoaXRzID0gMFxyXG4gIGxldCBzdW5rID0gZmFsc2VcclxuXHJcbiAgY29uc3QgaGl0ID0gKCkgPT4gKytoaXRzO1xyXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHN1bmsgPSBoaXRzID09IGxlbmd0aCA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiBcIlNcIjtcclxuICByZXR1cm4ge2xlbmd0aCxoaXQsaXNTdW5rLHRvU3RyaW5nfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hpcDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=