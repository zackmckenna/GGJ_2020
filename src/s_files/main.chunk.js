(this["webpackJsonpgamejam"] = this["webpackJsonpgamejam"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    //animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};


if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

              newContent = newContent.__esModule ? newContent.default : newContent;

              if (typeof newContent === 'string') {
                newContent = [[module.i, newContent, '']];
              }

              update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

module.exports = exported;

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Prompt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Prompt */ "./src/components/Prompt.js");
/* harmony import */ var _components_StartPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/StartPage */ "./src/components/StartPage.js");
/* harmony import */ var _components_CreativeRound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/CreativeRound */ "./src/components/CreativeRound.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_MyComponentWithSound__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/MyComponentWithSound */ "./src/components/MyComponentWithSound.js");
var _jsxFileName = "/Users/zacharymckenna/Desktop/ggj2020/gamejam/src/App.js";











function App() {
  const [players, setPlayers] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [playerObjects, setPlayerObjects] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [judgeIndex, setJudgeIndex] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [judgeName, setJudgeName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('No judge yet');
  const [playerNames, setPlayerNames] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [parts, setParts] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [components, setComponents] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [criteria, setCriteria] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [timerCounter, setTimerCounter] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(120);
  const [nameInput, setNameInput] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('https://guarded-ridge-39330.herokuapp.com/api/airtable/parts').then(res => {
      console.log('Parts', res.data);
      res.data.map(part => {
        const newPart = part;
        setParts(parts => [...parts, newPart]);
      });
    });
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('https://guarded-ridge-39330.herokuapp.com/api/airtable/components').then(res => {
      console.log('Components', res.data);
      res.data.map(component => {
        const newComponent = component;
        setComponents(components => [...components, newComponent]);
      });
    });
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('https://guarded-ridge-39330.herokuapp.com/api/airtable/criteria').then(res => {
      console.log('Criteria', res.data);
      res.data.map(criteria => {
        if (criteria.Name) {
          const newCriteria = criteria;
          setCriteria(criteria => [...criteria, newCriteria]);
        }
      });
    });
  }, []);

  const incrementJudge = () => {
    if (judgeIndex >= playerObjects.length) {
      setJudgeIndex(0);
    } else {
      setJudgeIndex(judgeIndex + 1);
    }
  };

  const handleNameSubmit = event => {
    console.log(event);
    event.preventDefault();

    if (nameInput !== '') {
      const newPlayerObject = {
        name: nameInput,
        components: [],
        score: 0
      };
      setPlayerObjects([...playerObjects, newPlayerObject]);
      setPlayerNames(playerNames => [...playerNames, nameInput]);
      setNameInput('');
      event.target.value = '';
      console.log('Player Objects:', playerObjects);
    }
  }; // const judgeName = () => {
  //   if (playerObjects[judgeIndex]) {
  //     return playerObjects[judgeIndex].Name
  //   } else {
  //     return 'No judge yet'
  //   }
  // }
  // const handlePlayerChange = event => {
  //   setPlayers(event.target.value)
  // }
  // six items


  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
    className: "sticky-top",
    bg: "light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Brand, {
    href: "#home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Judge: ", judgeName, " TIME: ", timerCounter, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    inline: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Next Round"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "App-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyComponentWithSound__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    exact: true,
    path: "" + "/",
    render: () => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_StartPage__WEBPACK_IMPORTED_MODULE_6__["default"], {
        players: players // handlePlayerChange={handlePlayerChange}
        ,
        nameInput: nameInput,
        setNameInput: setNameInput,
        handleNameSubmit: handleNameSubmit,
        playerNames: playerNames,
        playerObjects: playerObjects,
        setJudgeName: setJudgeName,
        judgeIndex: judgeIndex,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: "" + "/prompt",
    render: () => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Prompt__WEBPACK_IMPORTED_MODULE_5__["default"], {
        players: players,
        parts: parts,
        criteria: criteria,
        playerNames: playerNames,
        playerObjects: playerObjects,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: "" + "/components",
    render: () => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CreativeRound__WEBPACK_IMPORTED_MODULE_7__["default"], {
        players: players,
        playerNames: playerNames,
        components: components,
        timerCounter: timerCounter,
        setTimerCounter: setTimerCounter,
        playerObjects: playerObjects,
        judgeIndex: judgeIndex,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/CreativeRound.js":
/*!*****************************************!*\
  !*** ./src/components/CreativeRound.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _InventoryItemCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InventoryItemCard */ "./src/components/InventoryItemCard.js");
/* harmony import */ var _InventoryGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InventoryGrid */ "./src/components/InventoryGrid.js");
var _jsxFileName = "/Users/zacharymckenna/Desktop/ggj2020/gamejam/src/components/CreativeRound.js";





const CreativeRound = ({
  timerCounter,
  setTimerCounter,
  players,
  playerNames,
  playerObjects,
  components,
  judgeIndex
}) => {
  const [componentArray, setComponentArray] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {// const updateCountdown = () => {
    //   console.log(timerCounter)
    //   if (timerCounter > 0) {
    //     setTimerCounter(timerCounter => timerCounter - 1)
    //     console.log(timerCounter)
    //   } else {
    //     clearInterval(timer)
    //   }
    // }
    // var timer = setInterval(updateCountdown, 1000)
  }, []);
  console.log(playerObjects);
  console.log(timerCounter);
  const roundPlayers = playerObjects.map(player => {
    for (let i = 0; i < 6; i++) {
      player.components[i] = components[Math.floor(Math.random() * components.length)];
    }
  });

  const boxMaker = index => {
    if (playerObjects[index]) {
      if (judgeIndex !== index) {
        //do player index
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InventoryGrid__WEBPACK_IMPORTED_MODULE_3__["default"], {
          player: playerObjects[index],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: undefined
        });
      } else {
        //do player index+1
        if (playerObjects[index + 1]) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InventoryGrid__WEBPACK_IMPORTED_MODULE_3__["default"], {
            player: playerObjects[index + 1],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: undefined
          });
        } else {
          return;
        }
      }
    } else {
      return;
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, boxMaker(0)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, boxMaker(1))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, boxMaker(2)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, boxMaker(3)))));
};

/* harmony default export */ __webpack_exports__["default"] = (CreativeRound);

/***/ }),

/***/ "./src/components/InventoryGrid.js":
/*!*****************************************!*\
  !*** ./src/components/InventoryGrid.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _InventoryItemCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InventoryItemCard */ "./src/components/InventoryItemCard.js");
var _jsxFileName = "/Users/zacharymckenna/Desktop/ggj2020/gamejam/src/components/InventoryGrid.js";




const InventoryGrid = ({
  player
}) => {
  console.log(player);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, player.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "border border-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InventoryItemCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: player.components[0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InventoryItemCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: player.components[1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InventoryItemCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: player.components[2],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "border border-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InventoryItemCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: player.components[3],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InventoryItemCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: player.components[4],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InventoryItemCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: player.components[5],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (InventoryGrid);

/***/ }),

/***/ "./src/components/InventoryItemCard.js":
/*!*********************************************!*\
  !*** ./src/components/InventoryItemCard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "/Users/zacharymckenna/Desktop/ggj2020/gamejam/src/components/InventoryItemCard.js";



const InventoryItemCard = ({
  component
}) => {
  if (component.Attachments) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      style: {
        width: '8rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Img, {
      fluid: true,
      className: "text-center",
      style: {
        width: '100px',
        height: '100px'
      },
      variant: "top",
      src: component.Attachments[0].url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
      style: {
        fontSize: '13px'
      },
      className: "text-dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: undefined
    }, component.Name)));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
};

/* harmony default export */ __webpack_exports__["default"] = (InventoryItemCard);

/***/ }),

/***/ "./src/components/MyComponentWithSound.js":
/*!************************************************!*\
  !*** ./src/components/MyComponentWithSound.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-sound */ "./node_modules/react-sound/lib/index.js");
/* harmony import */ var react_sound__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_sound__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/zacharymckenna/Desktop/ggj2020/gamejam/src/components/MyComponentWithSound.js";



function getSound(name, path) {
  path = path || '/music/'; // default path here

  var soundStr = "" + path + name;
  return soundStr;
}

class MyComponentWithSound extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_sound__WEBPACK_IMPORTED_MODULE_1___default.a, {
      url: getSound('SpaceJunk_demo.mp3'),
      playStatus: react_sound__WEBPACK_IMPORTED_MODULE_1___default.a.status.PLAYING,
      playFromPosition: 0
      /* in milliseconds */
      ,
      onLoading: this.handleSongLoading,
      onPlaying: this.handleSongPlaying,
      onFinishedPlaying: this.handleSongFinishedPlaying,
      loop: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyComponentWithSound);

/***/ }),

/***/ "./src/components/Prompt.js":
/*!**********************************!*\
  !*** ./src/components/Prompt.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "/Users/zacharymckenna/Desktop/ggj2020/gamejam/src/components/Prompt.js";


 //todo:
//-generate prompt from airtable randomw rows; "I need a __(part)__ that __(criteria)__"
//-display a random prompt image
//-indicate which player is the judge

var customerPix = new Array("RDE-001C.BMP", "KFR-010B.BMP", "GBR-505C.BMP", "GLB-031C.BMP", "CTD-012C.BMP", "DZI-323C.BMP", "ISLANDS.BMP", "GBR-504C.BMP", "KFR-011B.BMP", "FUTURGAL.BMP", "KFR-007B.BMP", "EDW-147C.BMP", "MCG-508C.BMP", "RHT-013C.BMP", "MCG-411C.BMP", "LAL-017C.BMP", "GREENSHP.BMP", "GBR-515C.BMP", "DRM-00~1.BMP", "DLN-101C.BMP", "BHB-069B.BMP", "MCG-518C.BMP", "DLA-006C.BMP", "BEL-102C.BMP", "CWL-004B.BMP", "LAL-016C.BMP", "GBR-538B.BMP", "HANGAR.BMP", "MCG-413C.BMP", "EDW-066B.BMP", "AMC-103C.BMP", "JLQ-253C.BMP", "LTF-015B.BMP", "RHT-016C.BMP", "KFR-015C.BMP", "CYH-010B.BMP", "DLA-008C.BMP", "LAL-014C.BMP", "CWL-006B.BMP", "DLN-105C.BMP", "HRD-052C.BMP", "HJL-016C.BMP", "CHN-003C.BMP", "KFR-008B.BMP", "AMC-020C.BMP", "HJL-017C.BMP", "RBP-002C.BMP", "GBR-025C.BMP", "RMO-011C.BMP", "KFR-013B.BMP");

function getRandomImage(imgAr, path) {
  path = path || '/images/'; // default path here

  var num = Math.floor(Math.random() * imgAr.length);
  var img = imgAr[num];
  var imgStr = "" + path + img;
  return imgStr;
}

const Prompt = ({
  players,
  playerObjects,
  playerNames,
  parts,
  criteria
}) => {
  const grabRandomPart = () => {
    if (parts) {
      return parts[Math.floor(Math.random() * parts.length)].Name;
    } else {
      return 'Error';
    }
  };

  const grabRandomCriteria = () => {
    if (criteria) {
      return criteria[Math.floor(Math.random() * criteria.length)].Name;
    } else {
      return 'Error';
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: getRandomImage(customerPix, '/images/scenarios/'),
    className: "App-logo",
    alt: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "I need a ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, grabRandomPart()), " that ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-warning",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, grabRandomCriteria()), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "There are ", playerObjects.length, " players."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "" + '/components',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "Start Game"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Prompt);

/***/ }),

/***/ "./src/components/StartPage.js":
/*!*************************************!*\
  !*** ./src/components/StartPage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/zacharymckenna/Desktop/ggj2020/gamejam/src/components/StartPage.js";



var introPix = new Array("STATION.BMP", "TEMPLE.BMP", "ASTEROID.BMP");

function getRandomImage(imgAr, path) {
  path = path || '/images/'; // default path here

  var num = Math.floor(Math.random() * imgAr.length);
  var img = imgAr[num];
  var imgStr = "" + path + img;
  return imgStr;
}

const StartPage = ({
  handlePlayerChange,
  players,
  setNameInput,
  nameInput,
  handleNameSubmit,
  playerNames,
  playerObjects,
  setJudgeName,
  judgeIndex
}) => {
  const handleClickStart = () => {
    console.log('clicked');
    setJudgeName(playerObjects[judgeIndex].name); // props.history.push('/prompt')
  };

  const handleClick = event => {
    event.preventDefault();
    handleNameSubmit(event);
  };

  const handleNameInputChange = event => {
    setNameInput(event.target.value);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Space Station Gizmo Guy!", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: getRandomImage(introPix, '/images/intros/'),
    className: "App-logo",
    alt: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "GGJ 2020"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Welcome to Space Station Gornath! What brings you this deep into the Omega Quadrant? Anyways, the rough conditions and remoteness of this region make this output an oasis for explorers. Most visitors have a need for repairs and upgrades. Due to this need multiple repair shops have emerged in the station, of varying quality\u2026"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "In this game you will take turns being the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "repair shop owners"), " and ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "customers"), " with particular needs. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "As the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "repair shop owner"), ", the sale is all that matters - the almighty space buck is king. You will need to work with what you have to engineer a solution and out-sell the rival shops. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "As the ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "customer"), ", you will decide which solution to purchase based on its ingenuity and how well it solves your problem. In these times, it doesn\u2019t take much to get a ship, and most pilots aren\u2019t experts in engineering."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "Get ready to craft some space stuff!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "Add up to 5 Players"), playerObjects.length <= 4 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onChange: event => handleNameInputChange(event),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "formBasicEmail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, "player name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    value: nameInput,
    type: "text",
    placeholder: "player name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    onClick: event => {
      event.preventDefault();
      handleClick(event);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, "Add Player"))) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, playerObjects.map((player, index) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: undefined
    }, player.name);
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "" + '/prompt',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => handleClickStart(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, "Start Game")));
};

/* harmony default export */ __webpack_exports__["default"] = (StartPage);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};


if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

              newContent = newContent.__esModule ? newContent.default : newContent;

              if (typeof newContent === 'string') {
                newContent = [[module.i, newContent, '']];
              }

              update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

module.exports = exported;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/zacharymckenna/Desktop/ggj2020/gamejam/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
})), document.getElementById('root'));

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/zacharymckenna/Desktop/ggj2020/gamejam/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/zacharymckenna/Desktop/ggj2020/gamejam/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/zacharymckenna/Desktop/ggj2020/gamejam/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map