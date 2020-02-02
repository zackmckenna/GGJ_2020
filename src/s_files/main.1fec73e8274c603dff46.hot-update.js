webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.1fec73e8274c603dff46.hot-update.js.map