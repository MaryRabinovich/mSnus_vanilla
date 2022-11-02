/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controllers/checkbox.html":
/*!***************************************!*\
  !*** ./src/controllers/checkbox.html ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<svg viewBox=\"0 0 100 100\">\n    <rect x=\"10\" y=\"10\" width=\"80\" height=\"80\" />\n    <polygon points=\"10,40 50,55 90,0 50,75 10,40\" />\n</svg>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/controllers/radio.html":
/*!************************************!*\
  !*** ./src/controllers/radio.html ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<svg viewBox=\"0 0 100 100\">\n    <circle cx=\"50\" cy=\"50\" r=\"40\" />\n    <circle cx=\"50\" cy=\"50\" r=\"25\" />\n</svg>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/layout/burger.html":
/*!********************************!*\
  !*** ./src/layout/burger.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<svg viewBox=\"0 0 100 100\">\n    <line x1=\"0\" y1=\"10\" x2=\"100\" y2=\"10\" />\n    <line x1=\"0\" y1=\"50\" x2=\"100\" y2=\"50\" />\n    <line x1=\"0\" y1=\"90\" x2=\"100\" y2=\"90\" />\n</svg>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/controllers/style.scss":
/*!************************************!*\
  !*** ./src/controllers/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/figures/style.scss":
/*!********************************!*\
  !*** ./src/figures/style.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/layout/style.scss":
/*!*******************************!*\
  !*** ./src/layout/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/controllers/builder.js":
/*!************************************!*\
  !*** ./src/controllers/builder.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./style.scss */ "./src/controllers/style.scss")

__webpack_require__(/*! ./checkboxes */ "./src/controllers/checkboxes.js")
__webpack_require__(/*! ./radioGroup */ "./src/controllers/radioGroup.js")
__webpack_require__(/*! ./input */ "./src/controllers/input.js")

/***/ }),

/***/ "./src/controllers/checkboxes.js":
/*!***************************************!*\
  !*** ./src/controllers/checkboxes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkbox_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.html */ "./src/controllers/checkbox.html");


const checkboxes = document.getElementsByClassName('checkbox')

for (let checkbox of checkboxes) {
    checkbox.innerHTML = _checkbox_html__WEBPACK_IMPORTED_MODULE_0__["default"] + checkbox.innerHTML
    globalThis.state.set(checkbox.id, true)

    checkbox.addEventListener('click', () => {
        checkbox.classList.toggle('checkbox-empty')
        globalThis.state.toggle(checkbox.id)
    })
}

/***/ }),

/***/ "./src/controllers/input.js":
/*!**********************************!*\
  !*** ./src/controllers/input.js ***!
  \**********************************/
/***/ (() => {

const numCols = document.getElementById('num-cols')

const min = numCols.getAttribute('min')
const max = numCols.getAttribute('max')

globalThis.state.set(numCols.id, numCols.value)

numCols.addEventListener('change', () => {
    if (numCols.value < min) numCols.value = min
    if (numCols.value > max) numCols.value = max
    globalThis.state.set(numCols.id, numCols.value)
})

/***/ }),

/***/ "./src/controllers/radioGroup.js":
/*!***************************************!*\
  !*** ./src/controllers/radioGroup.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _radio_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio.html */ "./src/controllers/radio.html");


const groupName = 'darkness'

const darknessGroup = document.getElementsByClassName(groupName)

function select(option, group = darknessGroup) {
    for (let item of group) {
        item.classList.add('radio-empty')
    }
    option.classList.remove('radio-empty')

    globalThis.state.set(groupName, option.id)
}

select(darknessGroup[0])

for (let option of darknessGroup) {
    option.innerHTML = _radio_html__WEBPACK_IMPORTED_MODULE_0__["default"] + option.innerHTML
    option.classList.add('radio')

    option.addEventListener('click', () => {
        select(option)
    })
}

/***/ }),

/***/ "./src/figures/factory.js":
/*!********************************!*\
  !*** ./src/figures/factory.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const root = document.getElementById('figures')

const hidden = 'figure-hidden'

const width = window.innerWidth - 100

let sizeTotal
let margin
let size

function create(params) {
    const figure = document.createElement('div')
    root.appendChild(figure)
    
    figure.classList.add('figure')
    figure.classList.add(`figure-${params.form}`)
    
    const darkness = ['all']
    if (params.dark) darkness.unshift('dark')
    else darkness.unshift('light')
    figure.classList.add(
        `figure-${darkness[0]}-${params.color}`
    )

    let numCols
    resize()

    function update() {
        resize()
        if (isHidden()) return figure.classList.add(hidden)
        figure.classList.remove(hidden)
    }

    function isHidden() {
        if (!globalThis.state.get(params.form)) return true
        if (!globalThis.state.get(params.color)) return true
        if (!darkness.includes(
            globalThis.state.get('darkness')
        )) return true
        return false
    }

    function resize() {
        if (numCols === globalThis.state.get('num-cols')) return

        numCols = globalThis.state.get('num-cols')
        if (figure === root.firstChild) setDimensions()
        figure.style.margin = margin + 'px'
        figure.style.width = size + 'px'
        figure.style.height = size + 'px'
    }

    function setDimensions() {
        sizeTotal = Math.floor(width / numCols)
        margin = Math.floor(sizeTotal / 20)
        size = sizeTotal - 2 * margin
    }

    return { update }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    create
});

/***/ }),

/***/ "./src/figures/index.js":
/*!******************************!*\
  !*** ./src/figures/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/figures/factory.js");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validator */ "./src/figures/validator.js");
__webpack_require__(/*! ./style.scss */ "./src/figures/style.scss")

;


fetch('/data/test.json')
    .then(result => result.json())
    .then(result => render(result))

function render(data) {
    data.forEach(item => {
        if (!_validator__WEBPACK_IMPORTED_MODULE_1__["default"].validate(item)) return
        globalThis.state.notifier.register(

            _factory__WEBPACK_IMPORTED_MODULE_0__["default"].create(item)
            )
    })
}

/***/ }),

/***/ "./src/figures/validator.js":
/*!**********************************!*\
  !*** ./src/figures/validator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const rules = {
    form: ['circle', 'square'],
    color: ['red', 'green', 'blue', 'yellow'],
    dark: [true, false]
}

function validate(item) {
    for (let rule in rules) {
        if (!item.hasOwnProperty(rule)) return false
        if (!rules[rule].includes(item[rule])) return false
    }
    return true
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    validate
});

/***/ }),

/***/ "./src/layout/builder.js":
/*!*******************************!*\
  !*** ./src/layout/builder.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _burger_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger.html */ "./src/layout/burger.html");
__webpack_require__(/*! ./style.scss */ "./src/layout/style.scss")

const menu = document.querySelector('menu')
const main = document.querySelector('main')
const burger = document.getElementById('burger')

;

burger.innerHTML = _burger_html__WEBPACK_IMPORTED_MODULE_0__["default"]

burger.addEventListener('click', () => {
    menu.classList.toggle('menu-hidden')
})

main.addEventListener('click', () => {
    menu.classList.add('menu-hidden')
})

/***/ }),

/***/ "./src/state/notifier.js":
/*!*******************************!*\
  !*** ./src/state/notifier.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const observers = []

function register(observer) {
    observers.push(observer)
}

function notify() {
    for (let observer of observers) {
        observer.update()
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    register,
    notify
});

/***/ }),

/***/ "./src/state/storage.js":
/*!******************************!*\
  !*** ./src/state/storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _notifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifier */ "./src/state/notifier.js");


const state = {}

function set(key, value) {
    state[key] = value
    _notifier__WEBPACK_IMPORTED_MODULE_0__["default"].notify()
}

function toggle(key) {
    if (!typeof (state[key]) === 'boolean') return
    state[key] = !state[key]
    _notifier__WEBPACK_IMPORTED_MODULE_0__["default"].notify()
}

function get(key) {
    return state[key]
}

function all() {
    return state 
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    notifier: _notifier__WEBPACK_IMPORTED_MODULE_0__["default"],
    
    set,
    toggle,
    get,
    all
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state/storage */ "./src/state/storage.js");


globalThis.state = _state_storage__WEBPACK_IMPORTED_MODULE_0__["default"]

__webpack_require__(/*! ./layout/builder */ "./src/layout/builder.js")
__webpack_require__(/*! ./controllers/builder */ "./src/controllers/builder.js")
__webpack_require__(/*! ./figures/index */ "./src/figures/index.js")
})();

/******/ })()
;