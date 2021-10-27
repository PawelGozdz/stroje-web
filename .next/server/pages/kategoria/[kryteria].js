(() => {
var exports = {};
exports.id = "pages/kategoria/[kryteria]";
exports.ids = ["pages/kategoria/[kryteria]"];
exports.modules = {

/***/ "./api/categories.js":
/*!***************************!*\
  !*** ./api/categories.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCategoriesApi": () => (/* binding */ getCategoriesApi)
/* harmony export */ });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.js");

async function getCategoriesApi() {
  try {
    const url = `${_utils_constants__WEBPACK_IMPORTED_MODULE_0__.BASE_PATH}/categories`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('getCategoriesApi -->>', error);
    return null;
  }
}

/***/ }),

/***/ "./api/gender.js":
/*!***********************!*\
  !*** ./api/gender.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGendersApi": () => (/* binding */ getGendersApi)
/* harmony export */ });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.js");

async function getGendersApi() {
  try {
    const url = `${_utils_constants__WEBPACK_IMPORTED_MODULE_0__.BASE_PATH}/genders`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('getGendersApi -->>', error);
    return null;
  }
}

/***/ }),

/***/ "./api/model.js":
/*!**********************!*\
  !*** ./api/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getModelsApi": () => (/* binding */ getModelsApi),
/* harmony export */   "getModelByCustomProps": () => (/* binding */ getModelByCustomProps),
/* harmony export */   "getModelByCustomPropsCount": () => (/* binding */ getModelByCustomPropsCount)
/* harmony export */ });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.js");

async function getModelsApi({
  limit = '',
  sort = '',
  page = ''
}) {
  try {
    const limitItems = `_limit=${limit}`;
    const sortItems = `_sort=${sort}`;
    const startItems = `_start=${page}`;
    const url = `${_utils_constants__WEBPACK_IMPORTED_MODULE_0__.BASE_PATH}/models?${limitItems}&${sortItems}&${startItems}&_publicationState=live`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('getModelsApi -->>', error);
    return null;
  }
}
async function getModelByCustomProps(query) {
  try {
    const url = `${_utils_constants__WEBPACK_IMPORTED_MODULE_0__.BASE_PATH}/models?${query}&_publicationState=live`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('getModelByCustomProps -->>', error);
    return null;
  }
}
async function getModelByCustomPropsCount(query) {
  try {
    const url = `${_utils_constants__WEBPACK_IMPORTED_MODULE_0__.BASE_PATH}/models/count?${query}&_publicationState=live`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('getModelByCustomPropsCount -->>', error);
    return null;
  }
}

/***/ }),

/***/ "./api/token.js":
/*!**********************!*\
  !*** ./api/token.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setToken": () => (/* binding */ setToken),
/* harmony export */   "getToken": () => (/* binding */ getToken),
/* harmony export */   "removeToken": () => (/* binding */ removeToken),
/* harmony export */   "hasExpiredToken": () => (/* binding */ hasExpiredToken)
/* harmony export */ });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);


function setToken(token) {
  localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__.TOKEN, token);
}
function getToken() {
  return localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__.TOKEN);
}
function removeToken() {
  localStorage.removeItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__.TOKEN);
}
function hasExpiredToken(token) {
  const tokenDecode = jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(token);
  const expireDate = tokenDecode.exp * 1000;
  const currentDate = new Date().getTime();

  if (currentDate > expireDate) {
    return true;
  }

  return false;
}

/***/ }),

/***/ "./components/BreadCrumbs/BreadCrumbs.js":
/*!***********************************************!*\
  !*** ./components/BreadCrumbs/BreadCrumbs.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BreadCrumbs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nextjs_breadcrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nextjs-breadcrumbs */ "nextjs-breadcrumbs");
/* harmony import */ var nextjs_breadcrumbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nextjs_breadcrumbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/styles */ "@mui/styles");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\components\\BreadCrumbs\\BreadCrumbs.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function BreadCrumbs() {
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
    component: "section",
    className: classes.section,
    id: "floating-bread-crumbs",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
      maxWidth: "xl",
      className: classes.container,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((nextjs_breadcrumbs__WEBPACK_IMPORTED_MODULE_1___default()), {
        transformLabel: title => title + ' /',
        activeItemClassName: classes.activeItem,
        inactiveItemClassName: classes.inactiveItem,
        listClassName: classes.list,
        labelsToUppercase: "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(theme => ({
  loader: {
    display: 'flex',
    justifyContent: 'center'
  },
  searchLink: {
    borderBottom: `1px solid ${theme.palette.grey[400]}`,
    '&:hover': {
      borderBottom: `1px solid ${theme.palette.grey[900]}`
    }
  },
  list: {
    display: 'flex',
    listStyleType: 'none',
    marginLeft: 0,
    paddingLeft: 0,
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    borderBottom: `1px solid ${theme.palette.grey[400]}`,
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      marginTop: theme.spacing(.25),
      marginBottom: theme.spacing(1)
    },
    [theme.breakpoints.only('xs')]: {
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(0),
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(0)
    },
    '& > li:not(:last-child)': {
      marginRight: theme.spacing(0.25)
    },
    '&:hover': {
      borderBottom: `1px solid ${theme.palette.grey[800]}`
    }
  },
  inactiveItem: {
    '& > a': {
      color: `${theme.palette.grey[500]}`,
      fontSize: '.6rem'
    }
  },
  activeItem: {
    '& > a': {
      color: `${theme.palette.grey[900]}`,
      fontSize: '.6rem'
    }
  },
  section: {
    marginTop: theme.spacing(0.5)
  },
  container: _objectSpread({}, theme.container)
}));

/***/ }),

/***/ "./components/BreadCrumbs/index.js":
/*!*****************************************!*\
  !*** ./components/BreadCrumbs/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _BreadCrumbs__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _BreadCrumbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BreadCrumbs */ "./components/BreadCrumbs/BreadCrumbs.js");


/***/ }),

/***/ "./components/CustomIcons/ElementIcon/ElementIcon.js":
/*!***********************************************************!*\
  !*** ./components/CustomIcons/ElementIcon/ElementIcon.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ElementIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/styles */ "@mui/styles");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\components\\CustomIcons\\ElementIcon\\ElementIcon.js";





const elementIcons = [{
  name: 'dodatki',
  path: '/icons/001-cooking-equipment.svg'
}, {
  name: 'spodnica',
  path: '/icons/001-skirt.svg'
}, {
  name: 'sweter',
  path: '/icons/002-sweater.svg'
}, {
  name: 'bron',
  path: '/icons/002-weapons.svg'
}, {
  name: 'kostium',
  path: '/icons/003-superhero.svg'
}, {
  name: 'hełm',
  path: '/icons/003-viking-helmet.svg'
}, {
  name: 'jednoczesciowy',
  path: '/icons/004-suit.svg'
}, {
  name: 'maska',
  path: '/icons/004-theater.svg'
}, {
  name: 'buty',
  path: '/icons/005-shoes.svg'
}, {
  name: 'nakrycie-glowy',
  path: '/icons/006-pamela.svg'
}, {
  name: 'zbroja',
  path: '/icons/007-armor.svg'
}, {
  name: 'suknia',
  path: '/icons/008-dress.svg'
}, {
  name: 'koszulka',
  path: '/icons/009-shirt.svg'
}, {
  name: 't-shirt',
  path: '/icons/010-tshirt.svg'
}, {
  name: 'spodnie',
  path: '/icons/trousers.svg'
}];
function ElementIcon(props) {
  var _$find;

  const theme = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
  const src = ((_$find = lodash__WEBPACK_IMPORTED_MODULE_2__.find(elementIcons, {
    name: props.url
  })) === null || _$find === void 0 ? void 0 : _$find.path) || '/icons/004-suit.svg';
  const width = props.width ? props.width + 'px' : '25px';
  const height = props.width ? props.width + 'px' : '25px';
  const color = (props === null || props === void 0 ? void 0 : props.color) || theme.palette.grey[700];
  const title = (props === null || props === void 0 ? void 0 : props.title) || 'kostiumy';
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
    src: src,
    height: height,
    width: width,
    color: color,
    title: title
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/CustomIcons/ElementIcon/index.js":
/*!*****************************************************!*\
  !*** ./components/CustomIcons/ElementIcon/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _ElementIcon__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _ElementIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementIcon */ "./components/CustomIcons/ElementIcon/ElementIcon.js");


/***/ }),

/***/ "./components/EmptyBar/EmptyBar.js":
/*!*****************************************!*\
  !*** ./components/EmptyBar/EmptyBar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmptyBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/styles */ "@mui/styles");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\components\\EmptyBar\\EmptyBar.js";




function EmptyBar({
  children
}) {
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    className: classes.space,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(theme => ({
  space: {
    minHeight: '6rem'
  }
}));

/***/ }),

/***/ "./components/EmptyBar/index.js":
/*!**************************************!*\
  !*** ./components/EmptyBar/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _EmptyBar__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _EmptyBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmptyBar */ "./components/EmptyBar/EmptyBar.js");


/***/ }),

/***/ "./components/FloatingMenu/CategoryMenu/CategoryMenu.js":
/*!**************************************************************!*\
  !*** ./components/FloatingMenu/CategoryMenu/CategoryMenu.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CategoryMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/styles */ "@mui/styles");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\components\\FloatingMenu\\CategoryMenu\\CategoryMenu.js";







function CategoryMenu({
  menu,
  query = ''
}) {
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
      className: classes.menuList,
      component: "ul",
      className: classes.list,
      children: lodash__WEBPACK_IMPORTED_MODULE_3__.size(menu) > 0 && lodash__WEBPACK_IMPORTED_MODULE_3__.map(menu, item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(CategoryItem, {
        item: item,
        query: query
      }, item.url, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 31
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

const CategoryItem = ({
  item,
  query
}) => {
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
    component: "li",
    className: classes.searchLink,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: `/kategoria/${item.url}${query ? `?q=${query}` : ''}`,
      passHref: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
        children: item.title || item.kategoria
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined);
};

const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(theme => ({
  loader: {
    display: 'flex',
    justifyContent: 'center'
  },
  searchLink: {
    borderBottom: `1px solid ${theme.palette.grey[400]}`,
    '&:hover': {
      borderBottom: `1px solid ${theme.palette.grey[900]}`
    }
  },
  list: {
    display: 'flex',
    listStyleType: 'none',
    marginLeft: 0,
    paddingLeft: 0,
    justifyContent: 'center',
    flexWrap: 'wrap',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1)
    },
    '& > li:not(:last-child)': {
      marginRight: theme.spacing(3),
      [theme.breakpoints.only('xs')]: {
        marginRight: theme.spacing(1)
      }
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1)
    }
  }
}));

/***/ }),

/***/ "./components/FloatingMenu/CategoryMenu/index.js":
/*!*******************************************************!*\
  !*** ./components/FloatingMenu/CategoryMenu/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _CategoryMenu__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _CategoryMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryMenu */ "./components/FloatingMenu/CategoryMenu/CategoryMenu.js");


/***/ }),

/***/ "./components/FloatingMenu/FloatingMenu.js":
/*!*************************************************!*\
  !*** ./components/FloatingMenu/FloatingMenu.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FloatingMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/styles */ "@mui/styles");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CategoryMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CategoryMenu */ "./components/FloatingMenu/CategoryMenu/index.js");
/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/StateContext */ "./context/StateContext.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\components\\FloatingMenu\\FloatingMenu.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function FloatingMenu() {
  const classes = useStyles();
  const additionalMenuItems = [{
    title: 'Więcej...',
    url: 'modele'
  }];
  const {
    genders,
    categories
  } = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_6__.useAppContext)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
    component: "section",
    className: classes.section,
    id: "floating-menu",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Container, {
      maxWidth: "xl",
      className: classes.container,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_CategoryMenu__WEBPACK_IMPORTED_MODULE_5__.default, {
        menu: genders,
        query: 'plec'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Divider, {
        orientation: "vertical",
        variant: "middle",
        flexItem: true,
        className: classes.divider
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_CategoryMenu__WEBPACK_IMPORTED_MODULE_5__.default, {
        menu: categories
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(theme => ({
  loader: {
    display: 'flex',
    justifyContent: 'center'
  },
  section: {
    background: theme.palette.grey[100],
    marginTop: theme.spacing(1.25)
  },
  container: _objectSpread({}, theme.container),
  divider: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));

/***/ }),

/***/ "./components/FloatingMenu/index.js":
/*!******************************************!*\
  !*** ./components/FloatingMenu/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _FloatingMenu__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _FloatingMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FloatingMenu */ "./components/FloatingMenu/FloatingMenu.js");


/***/ }),

/***/ "./components/Footer/Address/Address.js":
/*!**********************************************!*\
  !*** ./components/Footer/Address/Address.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Address)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/styles */ "@mui/styles");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\components\\Footer\\Address\\Address.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function Address({
  address
}) {
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
      component: "h4",
      children: address.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
      component: "ul",
      className: classes.list,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        children: lodash__WEBPACK_IMPORTED_MODULE_3__.map(address.values.phones)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        children: address.values.email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        children: address.values.address.city
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        children: address.values.address.street
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
        children: address.values.address.postCode
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(theme => ({
  section: _objectSpread(_objectSpread({}, theme.sections.section), {}, {
    alignItems: 'center'
  }),
  container: _objectSpread({}, theme.container)
}));

/***/ }),

/***/ "./components/Footer/Address/index.js":
/*!********************************************!*\
  !*** ./components/Footer/Address/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Address__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Address */ "./components/Footer/Address/Address.js");


/***/ }),

/***/ "./components/Footer/Categories/FooterCategoriesList.js":
/*!**************************************************************!*\
  !*** ./components/Footer/Categories/FooterCategoriesList.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FooterCategoriesList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/styles */ "@mui/styles");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\components\\Footer\\Categories\\FooterCategoriesList.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function FooterCategoriesList({
  categories
}) {
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
      component: "h4",
      children: categories.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
      component: "ul",
      className: classes.list,
      children: lodash__WEBPACK_IMPORTED_MODULE_3__.size(categories.values) > 0 && lodash__WEBPACK_IMPORTED_MODULE_3__.map(categories.values, item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Categoria, {
        item: item
      }, item.kategoria, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 44
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

const Categoria = ({
  item,
  query
}) => {
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    component: "li",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: `/kategoria/${item.url}`,
      passHref: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
        className: classes.link,
        children: item.kategoria
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined);
};

const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(theme => ({
  container: _objectSpread({}, theme.container),
  footer: {
    minHeight: '4rem;',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: theme.spacing(0)
  },
  link: {
    textDecoration: 'underline'
  }
}));

/***/ }),

/***/ "./components/Footer/Categories/index.js":
/*!***********************************************!*\
  !*** ./components/Footer/Categories/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _FooterCategoriesList__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _FooterCategoriesList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterCategoriesList */ "./components/Footer/Categories/FooterCategoriesList.js");


/***/ }),

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/styles */ "@mui/styles");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/StateContext */ "./context/StateContext.js");
/* harmony import */ var _Address__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Address */ "./components/Footer/Address/index.js");
/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Categories */ "./components/Footer/Categories/index.js");
/* harmony import */ var _Partners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Partners */ "./components/Footer/Partners/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\components\\Footer\\Footer.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function Footer() {
  const classes = useStyles();
  const footerMenu = [{
    title: 'Kategorie',
    values: (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useAppContext)().categories
  }, {
    title: 'Kontakt',
    values: {
      phones: ['788 479 789'],
      email: 'agencja-reklamowa-impuls@wp.pl',
      address: {
        street: 'ul. Owocowa 3',
        postCode: '27-200',
        city: 'Starachowice'
      }
    }
  }, {
    title: 'Partnerzy',
    values: [{
      title: 'Agencja Reklamowa Impuls',
      url: 'http://arimpuls.pl/'
    }, {
      title: 'Opieka Nad Grobami',
      url: 'http://opieka-nad-grobami.com/'
    }]
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
    maxWidth: "xl",
    className: classes.container,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Categories__WEBPACK_IMPORTED_MODULE_5__.default, {
      categories: footerMenu[0]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {
      className: classes.divider,
      orientation: "vertical",
      variant: "middle",
      flexItem: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Address__WEBPACK_IMPORTED_MODULE_4__.default, {
      address: footerMenu[1]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {
      className: classes.divider,
      orientation: "vertical",
      variant: "middle",
      flexItem: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Partners__WEBPACK_IMPORTED_MODULE_6__.default, {
      partners: footerMenu[2]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({
  container: _objectSpread(_objectSpread({}, theme.container), {}, {
    paddingTop: `${theme.spacing(3)}`,
    paddingBottom: `${theme.spacing(3)}`,
    background: `${theme.palette.common.primary.main} !important`,
    color: theme.palette.grey[50],
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
      alignItems: 'baseline'
    },
    '& h4': {
      fontSize: '1.4rem',
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        textAlign: 'left',
        fontSize: '1.6rem'
      }
    },
    '& ul': {
      marginLeft: 0,
      paddingLeft: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.up('md')]: {
        alignItems: 'flex-start'
      },
      '& > *': {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.up('sm')]: {
          justifyContent: 'flex-start'
        }
      },
      '&:not(:last-child)': {
        marginRight: theme.spacing(4)
      }
    }
  }),
  divider: {
    display: 'none',
    background: `${theme.palette.grey[50]} !important`,
    width: '1px',
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  }
}));

/***/ }),

/***/ "./components/Footer/Partners/Partners.js":
/*!************************************************!*\
  !*** ./components/Footer/Partners/Partners.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Partners)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/styles */ "@mui/styles");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\components\\Footer\\Partners\\Partners.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function Partners({
  partners
}) {
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
      component: "h4",
      children: partners.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
      component: "ul",
      className: classes.list,
      children: lodash__WEBPACK_IMPORTED_MODULE_3__.map(partners.values, p => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Partner, {
        partner: p
      }, p.url, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 38
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

const Partner = ({
  partner
}) => {
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    component: "li",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: `${partner.url}`,
      passHref: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
        className: classes.link,
        target: "_blank",
        children: partner.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(theme => ({
  section: _objectSpread(_objectSpread({}, theme.sections.section), {}, {
    alignItems: 'center'
  }),
  container: _objectSpread({}, theme.container),
  link: {
    textDecoration: 'underline'
  }
}));

/***/ }),

/***/ "./components/Footer/Partners/index.js":
/*!*********************************************!*\
  !*** ./components/Footer/Partners/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Partners__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Partners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Partners */ "./components/Footer/Partners/Partners.js");


/***/ }),

/***/ "./components/Footer/index.js":
/*!************************************!*\
  !*** ./components/Footer/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ "./components/Footer/Footer.js");


/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/styles */ "@mui/styles");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TopBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopBar */ "./components/Header/TopBar/index.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ "./components/Header/Menu/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\components\\Header\\Header.js";







function Header() {
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
    maxWidth: "xl",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Toolbar, {
      className: classes.toolbar,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_TopBar__WEBPACK_IMPORTED_MODULE_3__.default, {
        menu: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.menu
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_4__.default, {
        menu: _utils_constants__WEBPACK_IMPORTED_MODULE_5__.menu
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(theme => ({
  toolbar: {
    // minHeight: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center !important",
    padding: theme.spacing(1),
    paddingLeft: 0,
    paddingRight: 0
  }
}));

/***/ }),

/***/ "./components/Header/Menu/Menu.js":
/*!****************************************!*\
  !*** ./components/Header/Menu/Menu.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/styles */ "@mui/styles");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/SwipeableDrawer */ "@mui/material/SwipeableDrawer");
/* harmony import */ var _mui_material_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Button */ "@mui/material/Button");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/List */ "@mui/material/List");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Divider */ "@mui/material/Divider");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_PlaylistAddCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/PlaylistAddCheck */ "@material-ui/icons/PlaylistAddCheck");
/* harmony import */ var _material_ui_icons_PlaylistAddCheck__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlaylistAddCheck__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/ListItem */ "@mui/material/ListItem");
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/ListItemIcon */ "@mui/material/ListItemIcon");
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/ListItemText */ "@mui/material/ListItemText");
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "@material-ui/icons/MoveToInbox");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\components\\Header\\Menu\\Menu.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















function Menu({
  menu
}) {
  const theme = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
  const classes = useStyles();
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
    right: false
  });
  const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_12__.useMediaQuery)(theme.breakpoints.down('md'));

  const toggleDrawer = (anchor, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(_objectSpread(_objectSpread({}, state), {}, {
      [anchor]: open
    }));
  };

  const anchor = 'right';
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Box, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(MenuDrawer, {
      anchor: anchor,
      classes: classes,
      toggleDrawer: toggleDrawer,
      state: state,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
        className: classes.listHeader,
        variant: "h6",
        children: "Strony"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(MenuList, {
        menu: menu
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
        className: classes.listHeader,
        variant: "h6",
        children: "Partnerzy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(PartnersList, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

const MenuDrawer = ({
  children,
  classes,
  anchor,
  toggleDrawer,
  state
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Box, {
    component: "div",
    className: classes.root,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
        onClick: toggleDrawer(anchor, true),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_mui_material_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_3___default()), {
        anchor: anchor,
        open: state[anchor],
        onClose: toggleDrawer(anchor, false),
        onOpen: toggleDrawer(anchor, true),
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined)]
    }, anchor, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, undefined);
};

const MenuList = ({
  noIcon = false,
  classes,
  menu
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_mui_material_List__WEBPACK_IMPORTED_MODULE_5___default()), {
    className: classes ? classes.servicesListTopBar : '',
    children: menu.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(MenuItem, {
      noIcon: noIcon,
      item: item
    }, item.url, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, undefined);
};

const MenuItem = ({
  item,
  noIcon
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: `/${item.url}`,
    passHref: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8___default()), {
      button: true,
      component: "a",
      children: [!noIcon ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_material_ui_icons_PlaylistAddCheck__WEBPACK_IMPORTED_MODULE_7___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 34
        }, undefined), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 20
      }, undefined) : '', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_10___default()), {
        children: item.item
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, undefined);
};

const PartnersList = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_mui_material_List__WEBPACK_IMPORTED_MODULE_5___default()), {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "http://arimpuls.pl/",
      passHref: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8___default()), {
        button: true,
        component: "a",
        target: "_blank",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default()), {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_11___default()), {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, undefined), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_10___default()), {
          children: "Agencja Impuls"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 5
  }, undefined);
};

const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(theme => ({
  list: {
    width: '400px',
    background: 'tomato'
  },
  root: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: 'auto'
    }
  },
  fullList: {
    width: 'auto',
    marginTop: theme.spacing(3),
    fontWeight: 'bold'
  },
  authList: {},
  userDetails: {
    marginLeft: 'auto',
    textAlign: 'right',
    [theme.breakpoints.down('xs')]: {
      fontSize: '.85rem'
    }
  },
  userStyles: {
    display: 'inline-block',
    fontWeight: 'bold',
    textAlign: 'right'
  },
  servicesListTopBar: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: theme.spacing(3)
  },
  listHeader: {
    marginLeft: theme.spacing(1)
  }
}));

/***/ }),

/***/ "./components/Header/Menu/index.js":
/*!*****************************************!*\
  !*** ./components/Header/Menu/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Menu__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu */ "./components/Header/Menu/Menu.js");


/***/ }),

/***/ "./components/Header/TopBar/TopBar.js":
/*!********************************************!*\
  !*** ./components/Header/TopBar/TopBar.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TopBar)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/styles */ "@mui/styles");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\components\\Header\\TopBar\\TopBar.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function TopBar({
  menu
}) {
  const classes = useStyles();

  const indexPageItem = lodash__WEBPACK_IMPORTED_MODULE_4__.head(lodash__WEBPACK_IMPORTED_MODULE_4__.filter(menu, {
    url: ''
  }));

  const searchPageItem = lodash__WEBPACK_IMPORTED_MODULE_4__.head(lodash__WEBPACK_IMPORTED_MODULE_4__.filter(menu, {
    url: 'wyszukaj'
  }));

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Logo, {
      indexPage: indexPageItem
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

function Logo({
  indexPage
}) {
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
    href: `/${indexPage.url}`,
    passHref: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
        src: "/LOGO.svg",
        alt: "Site Logo",
        title: "Wypo\u017Cyczalnia stroj\xF3w karnawa\u0142owych",
        className: classes.logo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(theme => ({
  searchLink: _objectSpread(_objectSpread({}, theme.customButtons.primary), {}, {
    marginLeft: theme.spacing(5),
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      marginRight: 'auto'
    }
  }),
  searchIcon: {
    marginRight: theme.spacing(1)
  },
  logo: {
    width: '5.4rem',
    height: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: '6.8rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '7.2rem'
    } // boxShadow: theme.shadows[3, 6]

  },
  centreIcon: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center'
  }
}));

/***/ }),

/***/ "./components/Header/TopBar/index.js":
/*!*******************************************!*\
  !*** ./components/Header/TopBar/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _TopBar__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _TopBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopBar */ "./components/Header/TopBar/TopBar.js");


/***/ }),

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./components/Header/Header.js");


/***/ }),

/***/ "./components/IconTypeList/IconTypeList.js":
/*!*************************************************!*\
  !*** ./components/IconTypeList/IconTypeList.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IconTypeList)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomIcons_ElementIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CustomIcons/ElementIcon */ "./components/CustomIcons/ElementIcon/index.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/styles */ "@mui/styles");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\components\\IconTypeList\\IconTypeList.js";





function IconTypeList({
  model
}) {
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box, {
    className: classes.icons,
    children: lodash__WEBPACK_IMPORTED_MODULE_3__.map(model.parts, part => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_CustomIcons_ElementIcon__WEBPACK_IMPORTED_MODULE_1__.default, {
      title: part.tytul,
      url: part.url
    }, part.url, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
;
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(theme => ({
  icons: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

/***/ }),

/***/ "./components/IconTypeList/index.js":
/*!******************************************!*\
  !*** ./components/IconTypeList/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _IconTypeList__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _IconTypeList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconTypeList */ "./components/IconTypeList/IconTypeList.js");


/***/ }),

/***/ "./components/Image/Image.js":
/*!***********************************!*\
  !*** ./components/Image/Image.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageCustom)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var material_ui_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-ui-image */ "material-ui-image");
/* harmony import */ var material_ui_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_ui_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/styles */ "@mui/styles");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\components\\Image\\Image.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function ImageCustom(props) {
  const theme = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
  let size = props.src;
  const isKomputer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)(theme.breakpoints.up('lg'));
  const isTablet = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)(theme.breakpoints.only('md'));
  const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)(theme.breakpoints.down('sm'));

  if (lodash__WEBPACK_IMPORTED_MODULE_4__.size(props.formats) > 0) {
    var _props$formats, _props$formats$large, _props$formats2, _props$formats2$mediu, _props$formats3, _props$formats3$small;

    if (isKomputer) size = ((_props$formats = props.formats) === null || _props$formats === void 0 ? void 0 : (_props$formats$large = _props$formats.large) === null || _props$formats$large === void 0 ? void 0 : _props$formats$large.url) || size;
    if (isTablet) size = ((_props$formats2 = props.formats) === null || _props$formats2 === void 0 ? void 0 : (_props$formats2$mediu = _props$formats2.medium) === null || _props$formats2$mediu === void 0 ? void 0 : _props$formats2$mediu.url) || size;
    if (isMobile) size = ((_props$formats3 = props.formats) === null || _props$formats3 === void 0 ? void 0 : (_props$formats3$small = _props$formats3.small) === null || _props$formats3$small === void 0 ? void 0 : _props$formats3$small.url) || size;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((material_ui_image__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread(_objectSpread({}, props), {}, {
    src: `${_utils_constants__WEBPACK_IMPORTED_MODULE_5__.BASE_PATH}${size}`
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./components/Image/index.js":
/*!***********************************!*\
  !*** ./components/Image/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Image__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image */ "./components/Image/Image.js");


/***/ }),

/***/ "./components/ListModelsCards/ListModelCards.js":
/*!******************************************************!*\
  !*** ./components/ListModelsCards/ListModelCards.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ListModels)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/styles */ "@mui/styles");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ModelCard_ModelCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModelCard/ModelCard */ "./components/ListModelsCards/ModelCard/ModelCard.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\components\\ListModelsCards\\ListModelCards.js";






function ListModels({
  models
}) {
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
    container: true,
    className: classes.list,
    spacing: 2,
    component: "ul",
    className: classes.list,
    children: lodash__WEBPACK_IMPORTED_MODULE_4__.size(models) > 0 && lodash__WEBPACK_IMPORTED_MODULE_4__.map(models, model => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_ModelCard_ModelCard__WEBPACK_IMPORTED_MODULE_3__.default, {
      model: model
    }, model.tytul, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(theme => ({
  list: {
    display: 'flex',
    listStyleType: 'none',
    justifyContent: 'center',
    margin: 'auto',
    padding: 0,
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      marginTop: '3rem'
    }
  }
}));

/***/ }),

/***/ "./components/ListModelsCards/ModelCard/CustomCardContent/CustomCardContent.js":
/*!*************************************************************************************!*\
  !*** ./components/ListModelsCards/ModelCard/CustomCardContent/CustomCardContent.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomCardContent)
/* harmony export */ });
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/styles */ "@mui/styles");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SizeList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../SizeList */ "./components/SizeList/index.js");
/* harmony import */ var _IconTypeList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../IconTypeList */ "./components/IconTypeList/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\components\\ListModelsCards\\ModelCard\\CustomCardContent\\CustomCardContent.js";







function CustomCardContent({
  model
}) {
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardContent, {
    className: classes.cardContent,
    children: [_.size(model.opis) > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
        className: classes.opisContent,
        children: model.opis
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, this)]
    }, void 0, true), _.size(model.parts) > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        className: classes.container,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
          className: classes.opisContent,
          children: "Elementy stroju:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_IconTypeList__WEBPACK_IMPORTED_MODULE_4__.default, {
          model: model
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, this)]
    }, void 0, true), _.size(model.sizes) > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
      className: classes.container,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
        className: classes.opisContent,
        children: "Dost\u0119pne rozmiary:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_SizeList__WEBPACK_IMPORTED_MODULE_3__.default, {
        model: model
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
      className: classes.container,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
        className: classes.opisContent,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: `/${model.url}`,
          passHref: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
            className: classes.link,
            children: "Czytaj wi\u0119cej..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
;
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({
  cardContent: {
    '& > :not(:last-child)': {
      marginBottom: theme.spacing(1)
    }
  },
  opisContent: {
    color: theme.palette.grey[600],
    fontSize: '.9rem'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  link: {
    textDecoration: 'underline',
    color: theme.palette.common.secondary.main
  }
}));

/***/ }),

/***/ "./components/ListModelsCards/ModelCard/CustomCardContent/index.js":
/*!*************************************************************************!*\
  !*** ./components/ListModelsCards/ModelCard/CustomCardContent/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _CustomCardContent__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _CustomCardContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomCardContent */ "./components/ListModelsCards/ModelCard/CustomCardContent/CustomCardContent.js");


/***/ }),

/***/ "./components/ListModelsCards/ModelCard/CustomCardHeader/CustomCardHeader.js":
/*!***********************************************************************************!*\
  !*** ./components/ListModelsCards/ModelCard/CustomCardHeader/CustomCardHeader.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomCardHeader)
/* harmony export */ });
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/CardHeader */ "@mui/material/CardHeader");
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Avatar */ "@mui/material/Avatar");
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/styles */ "@mui/styles");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/colors */ "@mui/material/colors");
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\components\\ListModelsCards\\ModelCard\\CustomCardHeader\\CustomCardHeader.js";





function CustomCardHeader({
  model
}) {
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_0___default()), {
    avatar: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1___default()), {
      "aria-label": "P\u0142e\u0107",
      className: classes.avatar,
      title: model.plec.title,
      children: model.plec.title[0]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, this),
    title: model.tytul
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
;
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(theme => ({
  avatar: {
    backgroundColor: theme.palette.common.secondary.main
  }
}));

/***/ }),

/***/ "./components/ListModelsCards/ModelCard/CustomCardHeader/index.js":
/*!************************************************************************!*\
  !*** ./components/ListModelsCards/ModelCard/CustomCardHeader/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _CustomCardHeader__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _CustomCardHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomCardHeader */ "./components/ListModelsCards/ModelCard/CustomCardHeader/CustomCardHeader.js");


/***/ }),

/***/ "./components/ListModelsCards/ModelCard/ModelCard.js":
/*!***********************************************************!*\
  !*** ./components/ListModelsCards/ModelCard/ModelCard.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModelCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/styles */ "@mui/styles");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Card */ "@mui/material/Card");
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CardActions */ "@mui/material/CardActions");
/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Collapse */ "@mui/material/Collapse");
/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/IconButton */ "@mui/material/IconButton");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Image */ "./components/Image/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _CustomCardHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CustomCardHeader */ "./components/ListModelsCards/ModelCard/CustomCardHeader/index.js");
/* harmony import */ var _CustomCardContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CustomCardContent */ "./components/ListModelsCards/ModelCard/CustomCardContent/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\components\\ListModelsCards\\ModelCard\\ModelCard.js";















function ModelCard({
  model
}) {
  const {
    0: expanded,
    1: setExpanded
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const classes = useStyles();
  const hasPhotos = lodash__WEBPACK_IMPORTED_MODULE_11__.size(model.zdjecia) > 0;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    component: "li",
    item: true,
    xs: 12,
    sm: 6,
    md: 4,
    lg: 2,
    className: classes.li,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_mui_material_Card__WEBPACK_IMPORTED_MODULE_5___default()), {
      className: classes.root,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_CustomCardHeader__WEBPACK_IMPORTED_MODULE_12__.default, {
        model: model
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `/${model.url}`,
        passHref: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_Image__WEBPACK_IMPORTED_MODULE_10__.default, {
            src: hasPhotos ? model.zdjecia[0].url : '',
            aspectRatio: 0.7,
            alt: hasPhotos ? model.zdjecia[0].alternativeText : '',
            title: hasPhotos ? model.zdjecia[0].caption : '',
            formats: hasPhotos ? model.zdjecia[0].formats : ''
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(CustomActions, {
        handleExpandClick: handleExpandClick,
        expanded: expanded
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(CustomCollapse, {
        expanded: expanded,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_CustomCardContent__WEBPACK_IMPORTED_MODULE_13__.default, {
          model: model
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

const CustomCollapse = ({
  expanded,
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_7___default()), {
    in: expanded,
    timeout: "auto",
    unmountOnExit: true,
    children: lodash__WEBPACK_IMPORTED_MODULE_11__.size(children) > 0 && children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, undefined);
};

const CustomActions = ({
  handleExpandClick,
  expanded
}) => {
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_6___default()), {
    disableSpacing: true,
    className: classes.actions,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
      variant: "body2",
      color: "textSecondary",
      component: "p",
      children: "Rozwi\u0144 sczeg\xF3\u0142y"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8___default()), {
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.expand, {
        [classes.expandOpen]: expanded
      }),
      onClick: handleExpandClick,
      "aria-expanded": expanded,
      "aria-label": "show more",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, undefined);
};

const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(theme => ({
  root: {
    maxWidth: 'auto',
    display: 'flex',
    flexDirection: 'column'
  },
  li: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0 !important'
    }
  },
  actions: {
    marginTop: 'auto'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
}));

/***/ }),

/***/ "./components/ListModelsCards/index.js":
/*!*********************************************!*\
  !*** ./components/ListModelsCards/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _ListModelCards__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _ListModelCards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListModelCards */ "./components/ListModelsCards/ListModelCards.js");


/***/ }),

/***/ "./components/Pagination/Pagination.js":
/*!*********************************************!*\
  !*** ./components/Pagination/Pagination.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PaginationRounded)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/styles */ "@mui/styles");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\components\\Pagination\\Pagination.js";







function PaginationRounded({
  limitPerPage,
  total,
  page
}) {
  const classes = useStyles();
  const {
    0: pageNr,
    1: setPageNr
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(page);
  const totalPages = Math.ceil(total / limitPerPage);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const urlParse = query_string__WEBPACK_IMPORTED_MODULE_4___default().parseUrl(router.asPath);

  const goToPage = newPage => {
    urlParse.query.page = newPage;
    urlParse.query.limit = limitPerPage;
    setPageNr(newPage);
    const url = query_string__WEBPACK_IMPORTED_MODULE_4___default().stringifyUrl(urlParse);
    router.push(url);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Pagination, {
      variant: "outlined",
      shape: "rounded",
      page: pageNr,
      count: totalPages,
      onChange: (_, data) => goToPage(data),
      siblingCount: 1,
      className: classes.pagination
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2)
    }
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

/***/ }),

/***/ "./components/Pagination/index.js":
/*!****************************************!*\
  !*** ./components/Pagination/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Pagination__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination */ "./components/Pagination/Pagination.js");


/***/ }),

/***/ "./components/SizeList/SizeList.js":
/*!*****************************************!*\
  !*** ./components/SizeList/SizeList.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SizeList)
/* harmony export */ });
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/styles */ "@mui/styles");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\components\\SizeList\\SizeList.js";



function SizeList({
  model
}) {
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
    className: classes.sizeList,
    children: _.map(model.sizes, s => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(HtmlTooltip, {
      title: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("em", {
        children: s.opis
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 15
      }, this),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        className: classes.size,
        children: s.rozmiar
      }, s.url, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, this)
    }, s.url, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
;
const HtmlTooltip = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_0__.withStyles)(theme => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9'
  }
}))(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Tooltip);
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({
  size: {
    border: `1px solid ${theme.palette.grey[500]}`,
    padding: theme.spacing(1)
  },
  sizeList: {
    marginTop: theme.spacing(1),
    '& > :not(:last-child)': {
      marginRight: '1px'
    }
  }
}));

/***/ }),

/***/ "./components/SizeList/index.js":
/*!**************************************!*\
  !*** ./components/SizeList/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _SizeList__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _SizeList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SizeList */ "./components/SizeList/SizeList.js");


/***/ }),

/***/ "./context/StateContext.js":
/*!*********************************!*\
  !*** ./context/StateContext.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppWrapper": () => (/* binding */ AppWrapper),
/* harmony export */   "useAppContext": () => (/* binding */ useAppContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_gender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/gender */ "./api/gender.js");
/* harmony import */ var _api_categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/categories */ "./api/categories.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constants */ "./utils/constants.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\context\\StateContext.js";






const AppContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
function AppWrapper({
  children
}) {
  const {
    0: categories,
    1: setCategories
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: genders,
    1: setGenders
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const state = {
    menu: _utils_constants__WEBPACK_IMPORTED_MODULE_3__.menu
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (async () => {
      if (lodash__WEBPACK_IMPORTED_MODULE_4__.size(state.categories) === 0) {
        const response = await (0,_api_categories__WEBPACK_IMPORTED_MODULE_2__.getCategoriesApi)();
        setCategories(response || []);
      }
    })();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (async () => {
      if (lodash__WEBPACK_IMPORTED_MODULE_4__.size(state.genders) === 0) {
        const response = await (0,_api_gender__WEBPACK_IMPORTED_MODULE_1__.getGendersApi)();
        setGenders(response || []);
      }
    })();
  }, []);
  state.categories = categories;
  state.genders = genders;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(AppContext.Provider, {
    value: state,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
function useAppContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AppContext);
}

/***/ }),

/***/ "./layouts/BasicLayout/BasicLayout.js":
/*!********************************************!*\
  !*** ./layouts/BasicLayout/BasicLayout.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BasicLayout)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/styles */ "@mui/styles");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ "./components/Header/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\layouts\\BasicLayout\\BasicLayout.js";





function BasicLayout({
  children
}) {
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box, {
    className: classes.app,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box, {
      component: "header",
      className: classes.topBar,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box, {
      component: "main",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box, {
      component: "footer",
      className: classes.footer,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(theme => ({
  app: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'content-box'
  },
  topBar: {
    width: '100%',
    boxShadow: theme.shadows[4]
  },
  footer: {
    width: '100%',
    boxShadow: theme.shadows[4],
    marginTop: 'auto'
  },
  main: {
    flex: 1,
    maxWidth: '100%'
  }
}));

/***/ }),

/***/ "./layouts/BasicLayout/index.js":
/*!**************************************!*\
  !*** ./layouts/BasicLayout/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _BasicLayout__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _BasicLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicLayout */ "./layouts/BasicLayout/BasicLayout.js");


/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Image1;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

var _toBase64 = __webpack_require__(/*! ../shared/lib/to-base-64 */ "../shared/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../server/image-config */ "../server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const loadedImageURLs = new Set();

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load(_objectSpread({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, layout, placeholder, onLoadingComplete) {
  if (!img) {
    return;
  }

  const handleLoad = () => {
    if (!img.src.startsWith('data:')) {
      const p = 'decode' in img ? img.decode() : Promise.resolve();
      p.catch(() => {}).then(() => {
        if (placeholder === 'blur') {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        }

        loadedImageURLs.add(src);

        if (onLoadingComplete) {
          const {
            naturalWidth,
            naturalHeight
          } = img; // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.

          onLoadingComplete({
            naturalWidth,
            naturalHeight
          });
        }

        if (true) {
          var ref;

          if ((ref = img.parentElement) === null || ref === void 0 ? void 0 : ref.parentElement) {
            const parent = getComputedStyle(img.parentElement.parentElement);

            if (layout === 'responsive' && parent.display === 'flex') {
              console.warn(`Image with src "${src}" may not render properly as a child of a flex container. Consider wrapping the image with a div to configure the width.`);
            } else if (layout === 'fill' && parent.position !== 'relative') {
              console.warn(`Image with src "${src}" may not render properly with a parent using position:"${parent.position}". Consider changing the parent style to position:"relative" with a width and height.`);
            }
          }
        }
      });
    }
  };

  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

function Image1(_param) {
  var {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    lazyBoundary = '200px',
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    onLoadingComplete,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _param,
      all = _objectWithoutProperties(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]);

  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (layout === 'fill' && (width || height)) {
      console.warn(`Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp'] // should match next-image-loader
        ;
        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }

    if ('ref' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`);
    }

    if ('style' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "style" property. Please use the "className" property instead.`);
    }

    const rand = Math.floor(Math.random() * 1000) + 100;

    if (!unoptimized && !loader({
      src,
      width: rand,
      quality: 75
    }).includes(rand.toString())) {
      console.warn(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
    }
  }

  const [setRef, isIntersected] = (0, _useIntersection).useIntersection({
    rootMargin: lazyBoundary,
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };
  const blurStyle = placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: objectFit || 'cover',
    backgroundImage: `url("${blurDataURL}")`,
    backgroundPosition: objectPosition || '0% 0%'
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  let srcString = src;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: `data:image/svg+xml;base64,${(0, _toBase64).toBase64(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": layout,
    className: className,
    ref: img => {
      setRef(img);
      handleLoading(img, srcString, layout, placeholder, onLoadingComplete);
    },
    style: _objectSpread({}, imgStyle, blurStyle)
  })), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    "data-nimg": layout,
    style: imgStyle,
    className: className,
    loading: loading || 'lazy'
  }))), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
    // @ts-ignore: imagesrcset is not yet in the link element type.
    imagesrcset: imgAttributes.srcSet,
    // @ts-ignore: imagesizes is not yet in the link element type.
    imagesizes: imgAttributes.sizes
  })) : null);
}

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  const url = new URL(`${root}${normalizeSrc(src)}`);
  const params = url.searchParams;
  params.set('auto', params.get('auto') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function customLoader({
  src
}) {
  throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if ( true && !configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/kategoria/[kryteria].js":
/*!***************************************!*\
  !*** ./pages/kategoria/[kryteria].js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Model)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/styles */ "@mui/styles");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layouts_BasicLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layouts/BasicLayout */ "./layouts/BasicLayout/index.js");
/* harmony import */ var _components_ListModelsCards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ListModelsCards */ "./components/ListModelsCards/index.js");
/* harmony import */ var _components_BreadCrumbs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/BreadCrumbs */ "./components/BreadCrumbs/index.js");
/* harmony import */ var _components_FloatingMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/FloatingMenu */ "./components/FloatingMenu/index.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Pagination */ "./components/Pagination/index.js");
/* harmony import */ var _api_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../api/model */ "./api/model.js");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/fetch */ "./utils/fetch.js");
/* harmony import */ var _components_EmptyBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/EmptyBar */ "./components/EmptyBar/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\pages\\kategoria\\[kryteria].js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















function Model() {
  const classes = useStyles();
  const {
    query
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    0: models,
    1: setModels
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: loader,
    1: setLoader
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: count,
    1: setCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (async () => {
      setLoader(true);
      const buildQuery = {
        _limit: (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_12__.limitPerPage)(query),
        _start: (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_12__.getStartItem)(query)
      };
      const response = await (0,_api_model__WEBPACK_IMPORTED_MODULE_11__.getModelByCustomProps)(qs__WEBPACK_IMPORTED_MODULE_5__.stringify(_objectSpread(_objectSpread({}, buildQuery), {}, {
        _where: {
          [`${query.q || 'categories'}.url`]: query.kryteria
        }
      })));
      const responseCount = await (0,_api_model__WEBPACK_IMPORTED_MODULE_11__.getModelByCustomPropsCount)(qs__WEBPACK_IMPORTED_MODULE_5__.stringify({
        _where: {
          [`${query.q || 'categories'}.url`]: query.kryteria
        }
      }));
      setModels(response);
      setCount(responseCount);
      setLoader(false);
    })();
  }, [query]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_layouts_BasicLayout__WEBPACK_IMPORTED_MODULE_6__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_FloatingMenu__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_BreadCrumbs__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
      component: "section",
      className: classes.section,
      id: "wyszukaj-kategoria",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
        maxWidth: "xl",
        className: classes.container,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          variant: "h4",
          component: "h3",
          className: classes.sectionHeader,
          children: "Wi\u0119cej z kategorii..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          variant: "h5",
          component: "h4",
          className: classes.sectionSubHeader,
          children: lodash__WEBPACK_IMPORTED_MODULE_4__.size(query.kryteria) > 0 && query.kryteria
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), loader ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
      className: classes.spaceFiller,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CircularProgress, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 46
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
      component: "section",
      className: classes.section,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
        maxWidth: "xl",
        className: classes.container,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_ListModelsCards__WEBPACK_IMPORTED_MODULE_7__.default, {
          models: models
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_10__.default, {
      page: query.page ? parseInt(query.page) : 1,
      total: count,
      limitPerPage: (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_12__.limitPerPage)(query)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_EmptyBar__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(theme => ({
  section: _objectSpread(_objectSpread({}, theme.sections.section), {}, {
    paddingTop: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5)
    }
  }),
  sectionSubHeader: {
    color: theme.palette.grey[500]
  },
  spaceFiller: {
    minHeight: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

/***/ }),

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_PATH": () => (/* binding */ BASE_PATH),
/* harmony export */   "TOKEN": () => (/* binding */ TOKEN),
/* harmony export */   "menu": () => (/* binding */ menu),
/* harmony export */   "defaultPrize": () => (/* binding */ defaultPrize),
/* harmony export */   "defaultDisplayCarts": () => (/* binding */ defaultDisplayCarts)
/* harmony export */ });
const BASE_PATH = 'http://dev-api-stroje.agencja-impuls.atthost24.pl';
const TOKEN = 'accessToken';
const menu = [{
  "item": "Strona główna",
  "url": "",
  "opis": "Strona główna"
}, {
  "item": "Wyszukaj",
  "url": "wyszukaj",
  "opis": "Wyszukiwarka strojów"
}, {
  "item": "Kontakt",
  "url": "kontakt",
  "opis": "Strona kontaktowa"
}];
const defaultPrize = 25;
const defaultDisplayCarts = 18;

/***/ }),

/***/ "./utils/fetch.js":
/*!************************!*\
  !*** ./utils/fetch.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authFetch": () => (/* binding */ authFetch),
/* harmony export */   "limitPerPage": () => (/* binding */ limitPerPage),
/* harmony export */   "getStartItem": () => (/* binding */ getStartItem)
/* harmony export */ });
/* harmony import */ var _api_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/token */ "./api/token.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./utils/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



async function authFetch(url, params, logout) {
  const token = (0,_api_token__WEBPACK_IMPORTED_MODULE_0__.getToken)();

  if (!token) {
    // usuario no logeador
    logout();
  } else {
    if ((0,_api_token__WEBPACK_IMPORTED_MODULE_0__.hasExpiredToken)(token)) {
      // Token caducado
      logout();
    } else {
      const paramsTemp = _objectSpread(_objectSpread({}, params), {}, {
        headers: _objectSpread(_objectSpread({}, params === null || params === void 0 ? void 0 : params.headers), {}, {
          Authorization: `Bearer ${token}`
        })
      });

      try {
        const response = await fetch(url, paramsTemp);
        const result = await response.json();
        return result;
      } catch (error) {
        return error;
      }
    }
  }
}
const limitPerPage = query => {
  const currentLimit = parseInt(query.limit) || 6;
  if (!query.limit || Math.abs(currentLimit) > 36) return _constants__WEBPACK_IMPORTED_MODULE_1__.defaultDisplayCarts;else return currentLimit;
};
const getStartItem = query => {
  const currentPage = parseInt(query.page) || 0;
  const limit = limitPerPage(query);
  if (!query.page || currentPage === 1) return 0;else return currentPage * limit - limit;
};

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/MoveToInbox":
/*!*************************************************!*\
  !*** external "@material-ui/icons/MoveToInbox" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/MoveToInbox");

/***/ }),

/***/ "@material-ui/icons/PlaylistAddCheck":
/*!******************************************************!*\
  !*** external "@material-ui/icons/PlaylistAddCheck" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/PlaylistAddCheck");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/Avatar":
/*!***************************************!*\
  !*** external "@mui/material/Avatar" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ "@mui/material/Card":
/*!*************************************!*\
  !*** external "@mui/material/Card" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Card");

/***/ }),

/***/ "@mui/material/CardActions":
/*!********************************************!*\
  !*** external "@mui/material/CardActions" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CardActions");

/***/ }),

/***/ "@mui/material/CardHeader":
/*!*******************************************!*\
  !*** external "@mui/material/CardHeader" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CardHeader");

/***/ }),

/***/ "@mui/material/Collapse":
/*!*****************************************!*\
  !*** external "@mui/material/Collapse" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Collapse");

/***/ }),

/***/ "@mui/material/Divider":
/*!****************************************!*\
  !*** external "@mui/material/Divider" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Divider");

/***/ }),

/***/ "@mui/material/IconButton":
/*!*******************************************!*\
  !*** external "@mui/material/IconButton" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ "@mui/material/List":
/*!*************************************!*\
  !*** external "@mui/material/List" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/List");

/***/ }),

/***/ "@mui/material/ListItem":
/*!*****************************************!*\
  !*** external "@mui/material/ListItem" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ "@mui/material/ListItemIcon":
/*!*********************************************!*\
  !*** external "@mui/material/ListItemIcon" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemIcon");

/***/ }),

/***/ "@mui/material/ListItemText":
/*!*********************************************!*\
  !*** external "@mui/material/ListItemText" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ "@mui/material/SwipeableDrawer":
/*!************************************************!*\
  !*** external "@mui/material/SwipeableDrawer" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/SwipeableDrawer");

/***/ }),

/***/ "@mui/material/colors":
/*!***************************************!*\
  !*** external "@mui/material/colors" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/colors");

/***/ }),

/***/ "@mui/styles":
/*!******************************!*\
  !*** external "@mui/styles" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/styles");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("jwt-decode");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ "material-ui-image":
/*!************************************!*\
  !*** external "material-ui-image" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("material-ui-image");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nextjs-breadcrumbs":
/*!*************************************!*\
  !*** external "nextjs-breadcrumbs" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("nextjs-breadcrumbs");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("qs");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("query-string");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/kategoria/[kryteria].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMva2F0ZWdvcmlhL1trcnl0ZXJpYV0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxlQUFlQyxnQkFBZixHQUFrQztBQUN2QyxNQUFJO0FBQ0YsVUFBTUMsR0FBRyxHQUFJLEdBQUVGLHVEQUFVLGFBQXpCO0FBQ0EsVUFBTUcsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0YsR0FBRCxDQUE1QjtBQUNBLFVBQU1HLE1BQU0sR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBckI7QUFFQSxXQUFPRCxNQUFQO0FBQ0QsR0FORCxDQU1FLE9BQU9FLEtBQVAsRUFBYztBQUNkQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWixFQUFxQ0YsS0FBckM7QUFDQSxXQUFPLElBQVA7QUFDRDtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7O0FDYkQ7QUFFTyxlQUFlRyxhQUFmLEdBQStCO0FBQ3BDLE1BQUk7QUFDRixVQUFNUixHQUFHLEdBQUksR0FBRUYsdURBQVUsVUFBekI7QUFDQSxVQUFNRyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDRixHQUFELENBQTVCO0FBQ0EsVUFBTUcsTUFBTSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBVCxFQUFyQjtBQUVBLFdBQU9ELE1BQVA7QUFDRCxHQU5ELENBTUUsT0FBT0UsS0FBUCxFQUFjO0FBQ2RDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDRixLQUFsQztBQUNBLFdBQU8sSUFBUDtBQUNEO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JEO0FBRU8sZUFBZUksWUFBZixDQUE0QjtBQUFFQyxFQUFBQSxLQUFLLEdBQUcsRUFBVjtBQUFjQyxFQUFBQSxJQUFJLEdBQUcsRUFBckI7QUFBeUJDLEVBQUFBLElBQUksR0FBRztBQUFoQyxDQUE1QixFQUFrRTtBQUN2RSxNQUFJO0FBQ0YsVUFBTUMsVUFBVSxHQUFJLFVBQVNILEtBQU0sRUFBbkM7QUFDQSxVQUFNSSxTQUFTLEdBQUksU0FBUUgsSUFBSyxFQUFoQztBQUNBLFVBQU1JLFVBQVUsR0FBSSxVQUFTSCxJQUFLLEVBQWxDO0FBQ0EsVUFBTVosR0FBRyxHQUFJLEdBQUVGLHVEQUFVLFdBQVVlLFVBQVcsSUFBR0MsU0FBVSxJQUFHQyxVQUFXLHlCQUF6RTtBQUVBLFVBQU1kLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUQsQ0FBNUI7QUFDQSxVQUFNRyxNQUFNLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFULEVBQXJCO0FBRUEsV0FBT0QsTUFBUDtBQUNELEdBVkQsQ0FVRSxPQUFPRSxLQUFQLEVBQWM7QUFDZEMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFBaUNGLEtBQWpDO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7QUFDRjtBQUVNLGVBQWVXLHFCQUFmLENBQXFDQyxLQUFyQyxFQUE0QztBQUNqRCxNQUFJO0FBQ0YsVUFBTWpCLEdBQUcsR0FBSSxHQUFFRix1REFBVSxXQUFVbUIsS0FBTSx5QkFBekM7QUFFQSxVQUFNaEIsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0YsR0FBRCxDQUE1QjtBQUNBLFVBQU1HLE1BQU0sR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBckI7QUFFQSxXQUFPRCxNQUFQO0FBQ0QsR0FQRCxDQU9FLE9BQU9FLEtBQVAsRUFBYztBQUNkQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWixFQUEwQ0YsS0FBMUM7QUFDQSxXQUFPLElBQVA7QUFDRDtBQUNGO0FBRU0sZUFBZWEsMEJBQWYsQ0FBMENELEtBQTFDLEVBQWlEO0FBQ3RELE1BQUk7QUFDRixVQUFNakIsR0FBRyxHQUFJLEdBQUVGLHVEQUFVLGlCQUFnQm1CLEtBQU0seUJBQS9DO0FBRUEsVUFBTWhCLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUQsQ0FBNUI7QUFDQSxVQUFNRyxNQUFNLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFULEVBQXJCO0FBRUEsV0FBT0QsTUFBUDtBQUNELEdBUEQsQ0FPRSxPQUFPRSxLQUFQLEVBQWM7QUFDZEMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaUNBQVosRUFBK0NGLEtBQS9DO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NEO0FBQ0E7QUFFTyxTQUFTZ0IsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDOUJDLEVBQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkwsbURBQXJCLEVBQTRCRyxLQUE1QjtBQUNEO0FBRU0sU0FBU0csUUFBVCxHQUFvQjtBQUN6QixTQUFPRixZQUFZLENBQUNHLE9BQWIsQ0FBcUJQLG1EQUFyQixDQUFQO0FBQ0Q7QUFFTSxTQUFTUSxXQUFULEdBQXVCO0FBQzVCSixFQUFBQSxZQUFZLENBQUNLLFVBQWIsQ0FBd0JULG1EQUF4QjtBQUNEO0FBRU0sU0FBU1UsZUFBVCxDQUF5QlAsS0FBekIsRUFBZ0M7QUFDckMsUUFBTVEsV0FBVyxHQUFHVixpREFBUyxDQUFDRSxLQUFELENBQTdCO0FBQ0EsUUFBTVMsVUFBVSxHQUFHRCxXQUFXLENBQUNFLEdBQVosR0FBa0IsSUFBckM7QUFDQSxRQUFNQyxXQUFXLEdBQUcsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQXBCOztBQUNBLE1BQUlGLFdBQVcsR0FBR0YsVUFBbEIsRUFBOEI7QUFDNUIsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxLQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCRDtBQUNBO0FBQ0E7QUFDQTs7QUFHZSxTQUFTVSxXQUFULEdBQXVCO0FBQ3BDLFFBQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUVBLHNCQUNFLDhEQUFDLDhDQUFEO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBeUIsYUFBUyxFQUFFRCxPQUFPLENBQUNFLE9BQTVDO0FBQXFELE1BQUUsRUFBQyx1QkFBeEQ7QUFBQSwyQkFDRSw4REFBQyxvREFBRDtBQUFXLGNBQVEsRUFBQyxJQUFwQjtBQUF5QixlQUFTLEVBQUVGLE9BQU8sQ0FBQ0csU0FBNUM7QUFBQSw2QkFDRSw4REFBQywyREFBRDtBQUNFLHNCQUFjLEVBQUdDLEtBQUQsSUFBV0EsS0FBSyxHQUFHLElBRHJDO0FBRUUsMkJBQW1CLEVBQUVKLE9BQU8sQ0FBQ0ssVUFGL0I7QUFHRSw2QkFBcUIsRUFBRUwsT0FBTyxDQUFDTSxZQUhqQztBQUlFLHFCQUFhLEVBQUVOLE9BQU8sQ0FBQ08sSUFKekI7QUFLRSx5QkFBaUIsRUFBQztBQUxwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEO0FBRUQsTUFBTU4sU0FBUyxHQUFHTCx1REFBVSxDQUFDWSxLQUFLLEtBQUs7QUFDckNDLEVBQUFBLE1BQU0sRUFBRTtBQUNOQyxJQUFBQSxPQUFPLEVBQUUsTUFESDtBQUVOQyxJQUFBQSxjQUFjLEVBQUU7QUFGVixHQUQ2QjtBQUtyQ0MsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLFlBQVksRUFBRyxhQUFZTCxLQUFLLENBQUNNLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQixHQUFuQixDQUF3QixFQUR6QztBQUVWLGVBQVc7QUFDVEYsTUFBQUEsWUFBWSxFQUFHLGFBQVlMLEtBQUssQ0FBQ00sT0FBTixDQUFjQyxJQUFkLENBQW1CLEdBQW5CLENBQXdCO0FBRDFDO0FBRkQsR0FMeUI7QUFXckNSLEVBQUFBLElBQUksRUFBRTtBQUNKRyxJQUFBQSxPQUFPLEVBQUUsTUFETDtBQUVKTSxJQUFBQSxhQUFhLEVBQUUsTUFGWDtBQUdKQyxJQUFBQSxVQUFVLEVBQUUsQ0FIUjtBQUlKQyxJQUFBQSxXQUFXLEVBQUUsQ0FKVDtBQUtKUCxJQUFBQSxjQUFjLEVBQUUsWUFMWjtBQU1KUSxJQUFBQSxRQUFRLEVBQUUsTUFOTjtBQU9KTixJQUFBQSxZQUFZLEVBQUcsYUFBWUwsS0FBSyxDQUFDTSxPQUFOLENBQWNDLElBQWQsQ0FBbUIsR0FBbkIsQ0FBd0IsRUFQL0M7QUFRSixLQUFDUCxLQUFLLENBQUNZLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEI7QUFDNUJDLE1BQUFBLGFBQWEsRUFBRSxLQURhO0FBRTVCQyxNQUFBQSxTQUFTLEVBQUVmLEtBQUssQ0FBQ2dCLE9BQU4sQ0FBYyxHQUFkLENBRmlCO0FBRzVCQyxNQUFBQSxZQUFZLEVBQUVqQixLQUFLLENBQUNnQixPQUFOLENBQWMsQ0FBZDtBQUhjLEtBUjFCO0FBYUosS0FBQ2hCLEtBQUssQ0FBQ1ksV0FBTixDQUFrQk0sSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxHQUFnQztBQUM5QkMsTUFBQUEsVUFBVSxFQUFFbkIsS0FBSyxDQUFDZ0IsT0FBTixDQUFjLENBQWQsQ0FEa0I7QUFFOUJJLE1BQUFBLGFBQWEsRUFBRXBCLEtBQUssQ0FBQ2dCLE9BQU4sQ0FBYyxDQUFkLENBRmU7QUFHOUJELE1BQUFBLFNBQVMsRUFBRWYsS0FBSyxDQUFDZ0IsT0FBTixDQUFjLENBQWQsQ0FIbUI7QUFJOUJDLE1BQUFBLFlBQVksRUFBRWpCLEtBQUssQ0FBQ2dCLE9BQU4sQ0FBYyxDQUFkO0FBSmdCLEtBYjVCO0FBbUJKLCtCQUEyQjtBQUN6QkssTUFBQUEsV0FBVyxFQUFFckIsS0FBSyxDQUFDZ0IsT0FBTixDQUFjLElBQWQ7QUFEWSxLQW5CdkI7QUF1QkosZUFBVztBQUNUWCxNQUFBQSxZQUFZLEVBQUcsYUFBWUwsS0FBSyxDQUFDTSxPQUFOLENBQWNDLElBQWQsQ0FBbUIsR0FBbkIsQ0FBd0I7QUFEMUM7QUF2QlAsR0FYK0I7QUFzQ3JDVCxFQUFBQSxZQUFZLEVBQUU7QUFDWixhQUFTO0FBQ1B3QixNQUFBQSxLQUFLLEVBQUcsR0FBRXRCLEtBQUssQ0FBQ00sT0FBTixDQUFjQyxJQUFkLENBQW1CLEdBQW5CLENBQXdCLEVBRDNCO0FBRVBnQixNQUFBQSxRQUFRLEVBQUU7QUFGSDtBQURHLEdBdEN1QjtBQTRDckMxQixFQUFBQSxVQUFVLEVBQUU7QUFDVixhQUFTO0FBQ1B5QixNQUFBQSxLQUFLLEVBQUcsR0FBRXRCLEtBQUssQ0FBQ00sT0FBTixDQUFjQyxJQUFkLENBQW1CLEdBQW5CLENBQXdCLEVBRDNCO0FBRVBnQixNQUFBQSxRQUFRLEVBQUU7QUFGSDtBQURDLEdBNUN5QjtBQWtEckM3QixFQUFBQSxPQUFPLEVBQUU7QUFDUHFCLElBQUFBLFNBQVMsRUFBRWYsS0FBSyxDQUFDZ0IsT0FBTixDQUFjLEdBQWQ7QUFESixHQWxENEI7QUFxRHJDckIsRUFBQUEsU0FBUyxvQkFDSkssS0FBSyxDQUFDTCxTQURGO0FBckQ0QixDQUFMLENBQU4sQ0FBNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRXZCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNaUMsWUFBWSxHQUFHLENBQ25CO0FBQUVDLEVBQUFBLElBQUksRUFBRSxTQUFSO0FBQW1CQyxFQUFBQSxJQUFJLEVBQUU7QUFBekIsQ0FEbUIsRUFFbkI7QUFBRUQsRUFBQUEsSUFBSSxFQUFFLFVBQVI7QUFBb0JDLEVBQUFBLElBQUksRUFBRTtBQUExQixDQUZtQixFQUduQjtBQUFFRCxFQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsRUFBQUEsSUFBSSxFQUFFO0FBQXhCLENBSG1CLEVBSW5CO0FBQUVELEVBQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCQyxFQUFBQSxJQUFJLEVBQUU7QUFBdEIsQ0FKbUIsRUFLbkI7QUFBRUQsRUFBQUEsSUFBSSxFQUFFLFNBQVI7QUFBbUJDLEVBQUFBLElBQUksRUFBRTtBQUF6QixDQUxtQixFQU1uQjtBQUFFRCxFQUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQkMsRUFBQUEsSUFBSSxFQUFFO0FBQXRCLENBTm1CLEVBT25CO0FBQUVELEVBQUFBLElBQUksRUFBRSxnQkFBUjtBQUEwQkMsRUFBQUEsSUFBSSxFQUFFO0FBQWhDLENBUG1CLEVBUW5CO0FBQUVELEVBQUFBLElBQUksRUFBRSxPQUFSO0FBQWlCQyxFQUFBQSxJQUFJLEVBQUU7QUFBdkIsQ0FSbUIsRUFTbkI7QUFBRUQsRUFBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0JDLEVBQUFBLElBQUksRUFBRTtBQUF0QixDQVRtQixFQVVuQjtBQUFFRCxFQUFBQSxJQUFJLEVBQUUsZ0JBQVI7QUFBMEJDLEVBQUFBLElBQUksRUFBRTtBQUFoQyxDQVZtQixFQVduQjtBQUFFRCxFQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsRUFBQUEsSUFBSSxFQUFFO0FBQXhCLENBWG1CLEVBWW5CO0FBQUVELEVBQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCQyxFQUFBQSxJQUFJLEVBQUU7QUFBeEIsQ0FabUIsRUFhbkI7QUFBRUQsRUFBQUEsSUFBSSxFQUFFLFVBQVI7QUFBb0JDLEVBQUFBLElBQUksRUFBRTtBQUExQixDQWJtQixFQWNuQjtBQUFFRCxFQUFBQSxJQUFJLEVBQUUsU0FBUjtBQUFtQkMsRUFBQUEsSUFBSSxFQUFFO0FBQXpCLENBZG1CLEVBZW5CO0FBQUVELEVBQUFBLElBQUksRUFBRSxTQUFSO0FBQW1CQyxFQUFBQSxJQUFJLEVBQUU7QUFBekIsQ0FmbUIsQ0FBckI7QUFrQmUsU0FBU0MsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFBQTs7QUFDekMsUUFBTWhDLEtBQUssR0FBR3lCLHFEQUFRLEVBQXRCO0FBQ0EsUUFBTVEsR0FBRyxHQUFHLFdBQUFQLHdDQUFBLENBQU9FLFlBQVAsRUFBcUI7QUFBRUMsSUFBQUEsSUFBSSxFQUFFRyxLQUFLLENBQUNsRjtBQUFkLEdBQXJCLG1EQUEyQ2dGLElBQTNDLEtBQW1ELHFCQUEvRDtBQUNBLFFBQU1LLEtBQUssR0FBR0gsS0FBSyxDQUFDRyxLQUFOLEdBQWNILEtBQUssQ0FBQ0csS0FBTixHQUFjLElBQTVCLEdBQW1DLE1BQWpEO0FBQ0EsUUFBTUMsTUFBTSxHQUFHSixLQUFLLENBQUNHLEtBQU4sR0FBY0gsS0FBSyxDQUFDRyxLQUFOLEdBQWMsSUFBNUIsR0FBbUMsTUFBbEQ7QUFDQSxRQUFNYixLQUFLLEdBQUcsQ0FBQVUsS0FBSyxTQUFMLElBQUFBLEtBQUssV0FBTCxZQUFBQSxLQUFLLENBQUVWLEtBQVAsS0FBZ0J0QixLQUFLLENBQUNNLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQixHQUFuQixDQUE5QjtBQUNBLFFBQU1YLEtBQUssR0FBRyxDQUFBb0MsS0FBSyxTQUFMLElBQUFBLEtBQUssV0FBTCxZQUFBQSxLQUFLLENBQUVwQyxLQUFQLEtBQWdCLFVBQTlCO0FBRUEsc0JBQ0UsOERBQUMsbURBQUQ7QUFBTyxPQUFHLEVBQUVxQyxHQUFaO0FBQWlCLFVBQU0sRUFBRUcsTUFBekI7QUFBaUMsU0FBSyxFQUFFRCxLQUF4QztBQUErQyxTQUFLLEVBQUViLEtBQXREO0FBQTZELFNBQUssRUFBRTFCO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFbENEO0FBQ0E7QUFFQTs7QUFFZSxTQUFTeUMsUUFBVCxDQUFrQjtBQUFFQyxFQUFBQTtBQUFGLENBQWxCLEVBQWdDO0FBQzdDLFFBQU05QyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFDQSxzQkFDRSw4REFBQyw4Q0FBRDtBQUFLLGFBQVMsRUFBRUQsT0FBTyxDQUFDK0MsS0FBeEI7QUFBQSxjQUNHRDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEO0FBRUQsTUFBTTdDLFNBQVMsR0FBR0wsdURBQVUsQ0FBQ1ksS0FBSyxLQUFLO0FBQ3JDdUMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLFNBQVMsRUFBRTtBQUROO0FBRDhCLENBQUwsQ0FBTixDQUE1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUVkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZSxTQUFTRyxZQUFULENBQXNCO0FBQUVDLEVBQUFBLElBQUY7QUFBUTdFLEVBQUFBLEtBQUssR0FBRztBQUFoQixDQUF0QixFQUE0QztBQUN6RCxRQUFNeUIsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBRUEsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyw4Q0FBRDtBQUFLLGVBQVMsRUFBRUQsT0FBTyxDQUFDcUQsUUFBeEI7QUFBa0MsZUFBUyxFQUFDLElBQTVDO0FBQWlELGVBQVMsRUFBRXJELE9BQU8sQ0FBQ08sSUFBcEU7QUFBQSxnQkFFSTJCLHdDQUFBLENBQU9rQixJQUFQLElBQWUsQ0FBZixJQUNBbEIsdUNBQUEsQ0FBTWtCLElBQU4sRUFBWUksSUFBSSxpQkFBSSw4REFBQyxZQUFEO0FBQWMsWUFBSSxFQUFFQSxJQUFwQjtBQUEwQixhQUFLLEVBQUVqRjtBQUFqQyxTQUE2Q2lGLElBQUksQ0FBQ2xHLEdBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBcEI7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFVRDs7QUFFRCxNQUFNbUcsWUFBWSxHQUFHLENBQUM7QUFBRUQsRUFBQUEsSUFBRjtBQUFRakYsRUFBQUE7QUFBUixDQUFELEtBQXFCO0FBQ3hDLFFBQU15QixPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFFQSxzQkFDRSw4REFBQyw4Q0FBRDtBQUFLLGFBQVMsRUFBQyxJQUFmO0FBQW9CLGFBQVMsRUFBRUQsT0FBTyxDQUFDWSxVQUF2QztBQUFBLDJCQUVFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFHLGNBQWE0QyxJQUFJLENBQUNsRyxHQUFJLEdBQUVpQixLQUFLLEdBQUksTUFBS0EsS0FBTSxFQUFmLEdBQW1CLEVBQUcsRUFBaEU7QUFBbUUsY0FBUSxNQUEzRTtBQUFBLDZCQUNFO0FBQUEsa0JBQUlpRixJQUFJLENBQUNwRCxLQUFMLElBQWNvRCxJQUFJLENBQUNFO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBU0QsQ0FaRDs7QUFjQSxNQUFNekQsU0FBUyxHQUFHTCx1REFBVSxDQUFDWSxLQUFLLEtBQUs7QUFDckNDLEVBQUFBLE1BQU0sRUFBRTtBQUNOQyxJQUFBQSxPQUFPLEVBQUUsTUFESDtBQUVOQyxJQUFBQSxjQUFjLEVBQUU7QUFGVixHQUQ2QjtBQUtyQ0MsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLFlBQVksRUFBRyxhQUFZTCxLQUFLLENBQUNNLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQixHQUFuQixDQUF3QixFQUR6QztBQUVWLGVBQVc7QUFDVEYsTUFBQUEsWUFBWSxFQUFHLGFBQVlMLEtBQUssQ0FBQ00sT0FBTixDQUFjQyxJQUFkLENBQW1CLEdBQW5CLENBQXdCO0FBRDFDO0FBRkQsR0FMeUI7QUFXckNSLEVBQUFBLElBQUksRUFBRTtBQUNKRyxJQUFBQSxPQUFPLEVBQUUsTUFETDtBQUVKTSxJQUFBQSxhQUFhLEVBQUUsTUFGWDtBQUdKQyxJQUFBQSxVQUFVLEVBQUUsQ0FIUjtBQUlKQyxJQUFBQSxXQUFXLEVBQUUsQ0FKVDtBQUtKUCxJQUFBQSxjQUFjLEVBQUUsUUFMWjtBQU1KUSxJQUFBQSxRQUFRLEVBQUUsTUFOTjtBQU9KLEtBQUNYLEtBQUssQ0FBQ1ksV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QjtBQUM1QlYsTUFBQUEsY0FBYyxFQUFFLFlBRFk7QUFFNUJXLE1BQUFBLGFBQWEsRUFBRSxLQUZhO0FBRzVCQyxNQUFBQSxTQUFTLEVBQUVmLEtBQUssQ0FBQ2dCLE9BQU4sQ0FBYyxDQUFkLENBSGlCO0FBSTVCQyxNQUFBQSxZQUFZLEVBQUVqQixLQUFLLENBQUNnQixPQUFOLENBQWMsQ0FBZDtBQUpjLEtBUDFCO0FBYUosK0JBQTJCO0FBQ3pCSyxNQUFBQSxXQUFXLEVBQUVyQixLQUFLLENBQUNnQixPQUFOLENBQWMsQ0FBZCxDQURZO0FBRXpCLE9BQUNoQixLQUFLLENBQUNZLFdBQU4sQ0FBa0JNLElBQWxCLENBQXVCLElBQXZCLENBQUQsR0FBZ0M7QUFDOUJHLFFBQUFBLFdBQVcsRUFBRXJCLEtBQUssQ0FBQ2dCLE9BQU4sQ0FBYyxDQUFkO0FBRGlCO0FBRlAsS0FidkI7QUFtQkosS0FBQ2hCLEtBQUssQ0FBQ1ksV0FBTixDQUFrQnVDLElBQWxCLENBQXVCLElBQXZCLENBQUQsR0FBZ0M7QUFDOUJyQyxNQUFBQSxhQUFhLEVBQUUsUUFEZTtBQUU5QkMsTUFBQUEsU0FBUyxFQUFFZixLQUFLLENBQUNnQixPQUFOLENBQWMsQ0FBZCxDQUZtQjtBQUc5QkMsTUFBQUEsWUFBWSxFQUFFakIsS0FBSyxDQUFDZ0IsT0FBTixDQUFjLENBQWQ7QUFIZ0I7QUFuQjVCO0FBWCtCLENBQUwsQ0FBTixDQUE1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUVuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU3lDLFlBQVQsR0FBd0I7QUFDckMsUUFBTWpFLE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUVBLFFBQU1pRSxtQkFBbUIsR0FBRyxDQUFDO0FBQzNCOUQsSUFBQUEsS0FBSyxFQUFFLFdBRG9CO0FBRTNCOUMsSUFBQUEsR0FBRyxFQUFFO0FBRnNCLEdBQUQsQ0FBNUI7QUFLQSxRQUFNO0FBQUU2RyxJQUFBQSxPQUFGO0FBQVdDLElBQUFBO0FBQVgsTUFBMEJKLG9FQUFhLEVBQTdDO0FBRUEsc0JBQ0UsOERBQUMsOENBQUQ7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUF5QixhQUFTLEVBQUVoRSxPQUFPLENBQUNFLE9BQTVDO0FBQXFELE1BQUUsRUFBQyxlQUF4RDtBQUFBLDJCQUNFLDhEQUFDLG9EQUFEO0FBQVcsY0FBUSxFQUFDLElBQXBCO0FBQXlCLGVBQVMsRUFBRUYsT0FBTyxDQUFDRyxTQUE1QztBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQVUsWUFBSSxFQUFFZ0UsT0FBaEI7QUFBeUIsYUFBSyxFQUFFO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLGtEQUFEO0FBQVMsbUJBQVcsRUFBQyxVQUFyQjtBQUFnQyxlQUFPLEVBQUMsUUFBeEM7QUFBaUQsZ0JBQVEsTUFBekQ7QUFBMEQsaUJBQVMsRUFBRW5FLE9BQU8sQ0FBQ3FFO0FBQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFLDhEQUFDLGtEQUFEO0FBQVUsWUFBSSxFQUFFRDtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7QUFFRCxNQUFNbkUsU0FBUyxHQUFHTCx1REFBVSxDQUFDWSxLQUFLLEtBQUs7QUFDckNDLEVBQUFBLE1BQU0sRUFBRTtBQUNOQyxJQUFBQSxPQUFPLEVBQUUsTUFESDtBQUVOQyxJQUFBQSxjQUFjLEVBQUU7QUFGVixHQUQ2QjtBQUtyQ1QsRUFBQUEsT0FBTyxFQUFFO0FBQ1BvRSxJQUFBQSxVQUFVLEVBQUU5RCxLQUFLLENBQUNNLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQixHQUFuQixDQURMO0FBRVBRLElBQUFBLFNBQVMsRUFBRWYsS0FBSyxDQUFDZ0IsT0FBTixDQUFjLElBQWQ7QUFGSixHQUw0QjtBQVNyQ3JCLEVBQUFBLFNBQVMsb0JBQ0pLLEtBQUssQ0FBQ0wsU0FERixDQVQ0QjtBQVlyQ2tFLEVBQUFBLE9BQU8sRUFBRTtBQUNQcEQsSUFBQUEsVUFBVSxFQUFFVCxLQUFLLENBQUNnQixPQUFOLENBQWMsQ0FBZCxDQURMO0FBRVBLLElBQUFBLFdBQVcsRUFBRXJCLEtBQUssQ0FBQ2dCLE9BQU4sQ0FBYyxDQUFkLENBRk47QUFHUCxLQUFDaEIsS0FBSyxDQUFDWSxXQUFOLENBQWtCdUMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxHQUFnQztBQUM5QmpELE1BQUFBLE9BQU8sRUFBRTtBQURxQjtBQUh6QjtBQVo0QixDQUFMLENBQU4sQ0FBNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUU3QkE7QUFDQTtBQUNBO0FBQ0E7O0FBR2UsU0FBUzZELE9BQVQsQ0FBaUI7QUFBRUMsRUFBQUE7QUFBRixDQUFqQixFQUE4QjtBQUMzQyxRQUFNeEUsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBRUEsc0JBQ0UsOERBQUMsOENBQUQ7QUFBQSw0QkFDRSw4REFBQyxxREFBRDtBQUFZLGVBQVMsRUFBQyxJQUF0QjtBQUFBLGdCQUE0QnVFLE9BQU8sQ0FBQ3BFO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLDhDQUFEO0FBQUssZUFBUyxFQUFDLElBQWY7QUFBb0IsZUFBUyxFQUFFSixPQUFPLENBQUNPLElBQXZDO0FBQUEsOEJBQ0U7QUFBQSxrQkFBSzJCLHVDQUFBLENBQU1zQyxPQUFPLENBQUNDLE1BQVIsQ0FBZUMsTUFBckI7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLGtCQUFLRixPQUFPLENBQUNDLE1BQVIsQ0FBZUU7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBQSxrQkFBS0gsT0FBTyxDQUFDQyxNQUFSLENBQWVELE9BQWYsQ0FBdUJJO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFO0FBQUEsa0JBQUtKLE9BQU8sQ0FBQ0MsTUFBUixDQUFlRCxPQUFmLENBQXVCSztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFLRTtBQUFBLGtCQUFLTCxPQUFPLENBQUNDLE1BQVIsQ0FBZUQsT0FBZixDQUF1Qk07QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7QUFFRCxNQUFNN0UsU0FBUyxHQUFHTCx1REFBVSxDQUFDWSxLQUFLLEtBQUs7QUFDckNOLEVBQUFBLE9BQU8sa0NBQ0ZNLEtBQUssQ0FBQ3VFLFFBQU4sQ0FBZTdFLE9BRGI7QUFFTDhFLElBQUFBLFVBQVUsRUFBRTtBQUZQLElBRDhCO0FBS3JDN0UsRUFBQUEsU0FBUyxvQkFDSkssS0FBSyxDQUFDTCxTQURGO0FBTDRCLENBQUwsQ0FBTixDQUE1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBUzhFLG9CQUFULENBQThCO0FBQUViLEVBQUFBO0FBQUYsQ0FBOUIsRUFBOEM7QUFDM0QsUUFBTXBFLE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUVBLHNCQUNFLDhEQUFDLDhDQUFEO0FBQUEsNEJBQ0UsOERBQUMscURBQUQ7QUFBWSxlQUFTLEVBQUMsSUFBdEI7QUFBQSxnQkFBNEJtRSxVQUFVLENBQUNoRTtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyw4Q0FBRDtBQUFLLGVBQVMsRUFBQyxJQUFmO0FBQW9CLGVBQVMsRUFBRUosT0FBTyxDQUFDTyxJQUF2QztBQUFBLGdCQUVJMkIsd0NBQUEsQ0FBT2tDLFVBQVUsQ0FBQ0ssTUFBbEIsSUFBNEIsQ0FBNUIsSUFDQXZDLHVDQUFBLENBQU1rQyxVQUFVLENBQUNLLE1BQWpCLEVBQXlCakIsSUFBSSxpQkFBSSw4REFBQyxTQUFEO0FBQVcsWUFBSSxFQUFFQTtBQUFqQixTQUE0QkEsSUFBSSxDQUFDRSxTQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWpDO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0Q7O0FBRUQsTUFBTXdCLFNBQVMsR0FBRyxDQUFDO0FBQUUxQixFQUFBQSxJQUFGO0FBQVFqRixFQUFBQTtBQUFSLENBQUQsS0FBcUI7QUFDckMsUUFBTXlCLE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUVBLHNCQUNFLDhEQUFDLDhDQUFEO0FBQUssYUFBUyxFQUFDLElBQWY7QUFBQSwyQkFFRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBRyxjQUFhdUQsSUFBSSxDQUFDbEcsR0FBSSxFQUFuQztBQUFzQyxjQUFRLE1BQTlDO0FBQUEsNkJBQ0U7QUFBRyxpQkFBUyxFQUFFMEMsT0FBTyxDQUFDbUYsSUFBdEI7QUFBQSxrQkFBNkIzQixJQUFJLENBQUNFO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBUUQsQ0FYRDs7QUFhQSxNQUFNekQsU0FBUyxHQUFHTCx1REFBVSxDQUFDWSxLQUFLLEtBQUs7QUFDckNMLEVBQUFBLFNBQVMsb0JBQ0pLLEtBQUssQ0FBQ0wsU0FERixDQUQ0QjtBQUlyQ2lGLEVBQUFBLE1BQU0sRUFBRTtBQUNOcEMsSUFBQUEsU0FBUyxFQUFFLE9BREw7QUFFTnFDLElBQUFBLFNBQVMsRUFBRSxRQUZMO0FBR04zRSxJQUFBQSxPQUFPLEVBQUUsTUFISDtBQUlOc0UsSUFBQUEsVUFBVSxFQUFFLFFBSk47QUFLTnJFLElBQUFBLGNBQWMsRUFBRSxRQUxWO0FBTU5ZLElBQUFBLFNBQVMsRUFBRSxNQU5MO0FBT05FLElBQUFBLFlBQVksRUFBRWpCLEtBQUssQ0FBQ2dCLE9BQU4sQ0FBYyxDQUFkO0FBUFIsR0FKNkI7QUFhckMyRCxFQUFBQSxJQUFJLEVBQUU7QUFDSkcsSUFBQUEsY0FBYyxFQUFFO0FBRFo7QUFiK0IsQ0FBTCxDQUFOLENBQTVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUVuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0csTUFBVCxHQUFrQjtBQUMvQixRQUFNekYsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBRUEsUUFBTXlGLFVBQVUsR0FBRyxDQUNqQjtBQUFFdEYsSUFBQUEsS0FBSyxFQUFFLFdBQVQ7QUFBc0JxRSxJQUFBQSxNQUFNLEVBQUVULG9FQUFhLEdBQUdJO0FBQTlDLEdBRGlCLEVBRWpCO0FBQ0VoRSxJQUFBQSxLQUFLLEVBQUUsU0FEVDtBQUVFcUUsSUFBQUEsTUFBTSxFQUFFO0FBQ05DLE1BQUFBLE1BQU0sRUFBRSxDQUFDLGFBQUQsQ0FERjtBQUVOQyxNQUFBQSxLQUFLLEVBQUUsZ0NBRkQ7QUFHTkgsTUFBQUEsT0FBTyxFQUFFO0FBQUVLLFFBQUFBLE1BQU0sRUFBRSxlQUFWO0FBQTJCQyxRQUFBQSxRQUFRLEVBQUUsUUFBckM7QUFBK0NGLFFBQUFBLElBQUksRUFBRTtBQUFyRDtBQUhIO0FBRlYsR0FGaUIsRUFVakI7QUFDRXhFLElBQUFBLEtBQUssRUFBRSxXQURUO0FBRUVxRSxJQUFBQSxNQUFNLEVBQUUsQ0FDTjtBQUNFckUsTUFBQUEsS0FBSyxFQUFFLDBCQURUO0FBQ3FDOUMsTUFBQUEsR0FBRyxFQUFFO0FBRDFDLEtBRE0sRUFHSDtBQUNEOEMsTUFBQUEsS0FBSyxFQUFFLG9CQUROO0FBQzRCOUMsTUFBQUEsR0FBRyxFQUFFO0FBRGpDLEtBSEc7QUFGVixHQVZpQixDQUFuQjtBQXNCQSxzQkFDRSw4REFBQyxvREFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUF5QixhQUFTLEVBQUUwQyxPQUFPLENBQUNHLFNBQTVDO0FBQUEsNEJBQ0UsOERBQUMsZ0RBQUQ7QUFBWSxnQkFBVSxFQUFFdUYsVUFBVSxDQUFDLENBQUQ7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsa0RBQUQ7QUFBUyxlQUFTLEVBQUUxRixPQUFPLENBQUNxRSxPQUE1QjtBQUFxQyxpQkFBVyxFQUFDLFVBQWpEO0FBQTRELGFBQU8sRUFBQyxRQUFwRTtBQUE2RSxjQUFRO0FBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLDhEQUFDLDZDQUFEO0FBQVMsYUFBTyxFQUFFcUIsVUFBVSxDQUFDLENBQUQ7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUUsOERBQUMsa0RBQUQ7QUFBUyxlQUFTLEVBQUUxRixPQUFPLENBQUNxRSxPQUE1QjtBQUFxQyxpQkFBVyxFQUFDLFVBQWpEO0FBQTRELGFBQU8sRUFBQyxRQUFwRTtBQUE2RSxjQUFRO0FBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFLDhEQUFDLDhDQUFEO0FBQVUsY0FBUSxFQUFFcUIsVUFBVSxDQUFDLENBQUQ7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7QUFFRCxNQUFNekYsU0FBUyxHQUFHTCx1REFBVSxDQUFDWSxLQUFLLEtBQUs7QUFDckNMLEVBQUFBLFNBQVMsa0NBQ0pLLEtBQUssQ0FBQ0wsU0FERjtBQUVQd0IsSUFBQUEsVUFBVSxFQUFHLEdBQUVuQixLQUFLLENBQUNnQixPQUFOLENBQWMsQ0FBZCxDQUFpQixFQUZ6QjtBQUdQSSxJQUFBQSxhQUFhLEVBQUcsR0FBRXBCLEtBQUssQ0FBQ2dCLE9BQU4sQ0FBYyxDQUFkLENBQWlCLEVBSDVCO0FBSVA4QyxJQUFBQSxVQUFVLEVBQUcsR0FBRTlELEtBQUssQ0FBQ00sT0FBTixDQUFjNkUsTUFBZCxDQUFxQkMsT0FBckIsQ0FBNkJDLElBQUssYUFKMUM7QUFLUC9ELElBQUFBLEtBQUssRUFBRXRCLEtBQUssQ0FBQ00sT0FBTixDQUFjQyxJQUFkLENBQW1CLEVBQW5CLENBTEE7QUFNUEosSUFBQUEsY0FBYyxFQUFFLFFBTlQ7QUFPUHFFLElBQUFBLFVBQVUsRUFBRSxRQVBMO0FBUVAsS0FBQ3hFLEtBQUssQ0FBQ1ksV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QjtBQUM1QlYsTUFBQUEsY0FBYyxFQUFFLFlBRFk7QUFFNUJxRSxNQUFBQSxVQUFVLEVBQUU7QUFGZ0IsS0FSdkI7QUFZUCxZQUFRO0FBQ05qRCxNQUFBQSxRQUFRLEVBQUUsUUFESjtBQUVOc0QsTUFBQUEsU0FBUyxFQUFFLFFBRkw7QUFHTixPQUFDN0UsS0FBSyxDQUFDWSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUFELEdBQThCO0FBQzVCZ0UsUUFBQUEsU0FBUyxFQUFFLE1BRGlCO0FBRTVCdEQsUUFBQUEsUUFBUSxFQUFFO0FBRmtCO0FBSHhCLEtBWkQ7QUFvQlAsWUFBUTtBQUNOZCxNQUFBQSxVQUFVLEVBQUUsQ0FETjtBQUVOQyxNQUFBQSxXQUFXLEVBQUUsQ0FGUDtBQUdONEUsTUFBQUEsU0FBUyxFQUFFLE1BSEw7QUFJTnBGLE1BQUFBLE9BQU8sRUFBRSxNQUpIO0FBS05ZLE1BQUFBLGFBQWEsRUFBRSxRQUxUO0FBTU4wRCxNQUFBQSxVQUFVLEVBQUUsUUFOTjtBQU9OLE9BQUN4RSxLQUFLLENBQUNZLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEI7QUFDNUIyRCxRQUFBQSxVQUFVLEVBQUU7QUFEZ0IsT0FQeEI7QUFVTixlQUFTO0FBQ1B0RSxRQUFBQSxPQUFPLEVBQUUsTUFERjtBQUVQQyxRQUFBQSxjQUFjLEVBQUUsUUFGVDtBQUdQLFNBQUNILEtBQUssQ0FBQ1ksV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QjtBQUM1QlYsVUFBQUEsY0FBYyxFQUFFO0FBRFk7QUFIdkIsT0FWSDtBQWlCTiw0QkFBc0I7QUFDcEJrQixRQUFBQSxXQUFXLEVBQUVyQixLQUFLLENBQUNnQixPQUFOLENBQWMsQ0FBZDtBQURPO0FBakJoQjtBQXBCRCxJQUQ0QjtBQTJDckM2QyxFQUFBQSxPQUFPLEVBQUU7QUFDUDNELElBQUFBLE9BQU8sRUFBRSxNQURGO0FBRVA0RCxJQUFBQSxVQUFVLEVBQUcsR0FBRTlELEtBQUssQ0FBQ00sT0FBTixDQUFjQyxJQUFkLENBQW1CLEVBQW5CLENBQXVCLGFBRi9CO0FBR1A0QixJQUFBQSxLQUFLLEVBQUUsS0FIQTtBQUlQMUIsSUFBQUEsVUFBVSxFQUFFVCxLQUFLLENBQUNnQixPQUFOLENBQWMsQ0FBZCxDQUpMO0FBS1BLLElBQUFBLFdBQVcsRUFBRXJCLEtBQUssQ0FBQ2dCLE9BQU4sQ0FBYyxDQUFkLENBTE47QUFNUCxLQUFDaEIsS0FBSyxDQUFDWSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUFELEdBQThCO0FBQzVCWCxNQUFBQSxPQUFPLEVBQUU7QUFEbUI7QUFOdkI7QUEzQzRCLENBQUwsQ0FBTixDQUE1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTOEUsUUFBVCxDQUFrQjtBQUFFTyxFQUFBQTtBQUFGLENBQWxCLEVBQWdDO0FBQzdDLFFBQU0vRixPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFFQSxzQkFDRSw4REFBQyw4Q0FBRDtBQUFBLDRCQUNFLDhEQUFDLHFEQUFEO0FBQVksZUFBUyxFQUFDLElBQXRCO0FBQUEsZ0JBQTRCOEYsUUFBUSxDQUFDM0Y7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsOENBQUQ7QUFBSyxlQUFTLEVBQUMsSUFBZjtBQUFvQixlQUFTLEVBQUVKLE9BQU8sQ0FBQ08sSUFBdkM7QUFBQSxnQkFDRzJCLHVDQUFBLENBQU02RCxRQUFRLENBQUN0QixNQUFmLEVBQXVCdUIsQ0FBQyxpQkFBSSw4REFBQyxPQUFEO0FBQXFCLGVBQU8sRUFBRUE7QUFBOUIsU0FBY0EsQ0FBQyxDQUFDMUksR0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUE1QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEOztBQUVELE1BQU0ySSxPQUFPLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBaUI7QUFDL0IsUUFBTWxHLE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUVBLHNCQUNFLDhEQUFDLDhDQUFEO0FBQUssYUFBUyxFQUFDLElBQWY7QUFBQSwyQkFFRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBRyxHQUFFaUcsT0FBTyxDQUFDNUksR0FBSSxFQUEzQjtBQUE4QixjQUFRLE1BQXRDO0FBQUEsNkJBQ0U7QUFBRyxpQkFBUyxFQUFFMEMsT0FBTyxDQUFDbUYsSUFBdEI7QUFBNEIsY0FBTSxFQUFDLFFBQW5DO0FBQUEsa0JBQTZDZSxPQUFPLENBQUM5RjtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVNELENBWkQ7O0FBY0EsTUFBTUgsU0FBUyxHQUFHTCx1REFBVSxDQUFDWSxLQUFLLEtBQUs7QUFDckNOLEVBQUFBLE9BQU8sa0NBQ0ZNLEtBQUssQ0FBQ3VFLFFBQU4sQ0FBZTdFLE9BRGI7QUFFTDhFLElBQUFBLFVBQVUsRUFBRTtBQUZQLElBRDhCO0FBS3JDN0UsRUFBQUEsU0FBUyxvQkFDSkssS0FBSyxDQUFDTCxTQURGLENBTDRCO0FBUXJDZ0YsRUFBQUEsSUFBSSxFQUFFO0FBQ0pHLElBQUFBLGNBQWMsRUFBRTtBQURaO0FBUitCLENBQUwsQ0FBTixDQUE1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUdqQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNnQixNQUFULEdBQWtCO0FBQy9CLFFBQU10RyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFFQSxzQkFDRSw4REFBQyxvREFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUFBLDJCQUNFLDhEQUFDLGtEQUFEO0FBQVMsZUFBUyxFQUFFRCxPQUFPLENBQUN1RyxPQUE1QjtBQUFBLDhCQUNFLDhEQUFDLDRDQUFEO0FBQVEsWUFBSSxFQUFFbkQsa0RBQUlBO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLDBDQUFEO0FBQU0sWUFBSSxFQUFFQSxrREFBSUE7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEO0FBRUQsTUFBTW5ELFNBQVMsR0FBR0wsdURBQVUsQ0FBQ1ksS0FBSyxLQUFLO0FBQ3JDK0YsRUFBQUEsT0FBTyxFQUFFO0FBQ1A7QUFDQTdGLElBQUFBLE9BQU8sRUFBRSxNQUZGO0FBR1BZLElBQUFBLGFBQWEsRUFBRSxLQUhSO0FBSVBYLElBQUFBLGNBQWMsRUFBRSxlQUpUO0FBS1BxRSxJQUFBQSxVQUFVLEVBQUUsbUJBTEw7QUFNUHdCLElBQUFBLE9BQU8sRUFBRWhHLEtBQUssQ0FBQ2dCLE9BQU4sQ0FBYyxDQUFkLENBTkY7QUFPUE4sSUFBQUEsV0FBVyxFQUFFLENBUE47QUFRUHVGLElBQUFBLFlBQVksRUFBRTtBQVJQO0FBRDRCLENBQUwsQ0FBTixDQUE1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTSixJQUFULENBQWM7QUFBRWpELEVBQUFBO0FBQUYsQ0FBZCxFQUF3QjtBQUNyQyxRQUFNNUMsS0FBSyxHQUFHeUIscURBQVEsRUFBdEI7QUFDQSxRQUFNakMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBQ0EsUUFBTSxDQUFDbUgsS0FBRCxFQUFRQyxRQUFSLElBQW9CM0gscURBQUEsQ0FBZTtBQUN2QzRILElBQUFBLEtBQUssRUFBRTtBQURnQyxHQUFmLENBQTFCO0FBR0EsUUFBTUMsUUFBUSxHQUFHTCw2REFBYSxDQUFDMUcsS0FBSyxDQUFDWSxXQUFOLENBQWtCdUMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxDQUE5Qjs7QUFFQSxRQUFNNkQsWUFBWSxHQUFHLENBQUNDLE1BQUQsRUFBU0MsSUFBVCxLQUFtQkMsS0FBRCxJQUFXO0FBQ2hELFFBQUlBLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxJQUFOLEtBQWUsU0FBeEIsS0FBc0NELEtBQUssQ0FBQ0UsR0FBTixLQUFjLEtBQWQsSUFBdUJGLEtBQUssQ0FBQ0UsR0FBTixLQUFjLE9BQTNFLENBQUosRUFBeUY7QUFDdkY7QUFDRDs7QUFDRFIsSUFBQUEsUUFBUSxpQ0FBTUQsS0FBTjtBQUFhLE9BQUNLLE1BQUQsR0FBVUM7QUFBdkIsT0FBUjtBQUNELEdBTEQ7O0FBT0EsUUFBTUQsTUFBTSxHQUFHLE9BQWY7QUFFQSxzQkFDRSwrREFBQywrQ0FBRDtBQUFBLDJCQUNFLCtEQUFDLFVBQUQ7QUFBWSxZQUFNLEVBQUVBLE1BQXBCO0FBQTRCLGFBQU8sRUFBRXpILE9BQXJDO0FBQThDLGtCQUFZLEVBQUV3SCxZQUE1RDtBQUEwRSxXQUFLLEVBQUVKLEtBQWpGO0FBQUEsOEJBQ0UsK0RBQUMsc0RBQUQ7QUFBWSxpQkFBUyxFQUFFcEgsT0FBTyxDQUFDOEgsVUFBL0I7QUFBMkMsZUFBTyxFQUFDLElBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSwrREFBQyxRQUFEO0FBQVUsWUFBSSxFQUFFMUU7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UsK0RBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBS0UsK0RBQUMsc0RBQUQ7QUFBWSxpQkFBUyxFQUFFcEQsT0FBTyxDQUFDOEgsVUFBL0I7QUFBMkMsZUFBTyxFQUFDLElBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFNRSwrREFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRDs7QUFFRCxNQUFNQyxVQUFVLEdBQUcsQ0FBQztBQUFFakYsRUFBQUEsUUFBRjtBQUFZOUMsRUFBQUEsT0FBWjtBQUFxQnlILEVBQUFBLE1BQXJCO0FBQTZCRCxFQUFBQSxZQUE3QjtBQUEyQ0osRUFBQUE7QUFBM0MsQ0FBRCxLQUF3RDtBQUN6RSxzQkFDRSwrREFBQywrQ0FBRDtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQXFCLGFBQVMsRUFBRXBILE9BQU8sQ0FBQ2dJLElBQXhDO0FBQUEsMkJBQ0UsK0RBQUMsdURBQUQ7QUFBQSw4QkFDRSwrREFBQyw2REFBRDtBQUFRLGVBQU8sRUFBRVIsWUFBWSxDQUFDQyxNQUFELEVBQVMsSUFBVCxDQUE3QjtBQUFBLCtCQUNFLCtEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUUsK0RBQUMsc0VBQUQ7QUFDRSxjQUFNLEVBQUVBLE1BRFY7QUFFRSxZQUFJLEVBQUVMLEtBQUssQ0FBQ0ssTUFBRCxDQUZiO0FBR0UsZUFBTyxFQUFFRCxZQUFZLENBQUNDLE1BQUQsRUFBUyxLQUFULENBSHZCO0FBSUUsY0FBTSxFQUFFRCxZQUFZLENBQUNDLE1BQUQsRUFBUyxJQUFULENBSnRCO0FBQUEsa0JBTUczRTtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQSxPQUFxQjJFLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFpQkQsQ0FsQkQ7O0FBb0JBLE1BQU1RLFFBQVEsR0FBRyxDQUFDO0FBQUVDLEVBQUFBLE1BQU0sR0FBRyxLQUFYO0FBQWtCbEksRUFBQUEsT0FBbEI7QUFBMkJvRCxFQUFBQTtBQUEzQixDQUFELEtBQXVDO0FBQ3RELHNCQUNFLCtEQUFDLDJEQUFEO0FBQU0sYUFBUyxFQUFFcEQsT0FBTyxHQUFHQSxPQUFPLENBQUNtSSxrQkFBWCxHQUFnQyxFQUF4RDtBQUFBLGNBQ0cvRSxJQUFJLENBQUNHLEdBQUwsQ0FBU0MsSUFBSSxpQkFDWiwrREFBQyxRQUFEO0FBQVUsWUFBTSxFQUFFMEUsTUFBbEI7QUFBMEIsVUFBSSxFQUFFMUU7QUFBaEMsT0FBMkNBLElBQUksQ0FBQ2xHLEdBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFPRCxDQVJEOztBQVVBLE1BQU04SyxRQUFRLEdBQUcsQ0FBQztBQUFFNUUsRUFBQUEsSUFBRjtBQUFRMEUsRUFBQUE7QUFBUixDQUFELEtBQXNCO0FBQ3JDLHNCQUNFLCtEQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFHLElBQUcxRSxJQUFJLENBQUNsRyxHQUFJLEVBQXpCO0FBQTRCLFlBQVEsTUFBcEM7QUFBQSwyQkFDRSwrREFBQywrREFBRDtBQUFVLFlBQU0sTUFBaEI7QUFBaUIsZUFBUyxFQUFDLEdBQTNCO0FBQUEsaUJBQ0csQ0FBQzRLLE1BQUQsZ0JBQVUsK0RBQUMsbUVBQUQ7QUFBQSxnQ0FBYywrREFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBVixHQUFtRSxFQUR0RSxlQUVFLCtEQUFDLG9FQUFEO0FBQUEsa0JBQWUxRSxJQUFJLENBQUNBO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBUUQsQ0FURDs7QUFXQSxNQUFNNkUsWUFBWSxHQUFHLE1BQU07QUFDekIsc0JBQ0UsK0RBQUMsMkRBQUQ7QUFBQSwyQkFDRSwrREFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxxQkFBWDtBQUFpQyxjQUFRLE1BQXpDO0FBQUEsNkJBQ0UsK0RBQUMsK0RBQUQ7QUFBVSxjQUFNLE1BQWhCO0FBQWlCLGlCQUFTLEVBQUMsR0FBM0I7QUFBK0IsY0FBTSxFQUFDLFFBQXRDO0FBQUEsZ0NBQ0UsK0RBQUMsbUVBQUQ7QUFBQSxrQ0FBYywrREFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLCtEQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFVRCxDQVhEOztBQWNBLE1BQU1wSSxTQUFTLEdBQUdMLHVEQUFVLENBQUNZLEtBQUssS0FBSztBQUNyQ0QsRUFBQUEsSUFBSSxFQUFFO0FBQ0pvQyxJQUFBQSxLQUFLLEVBQUUsT0FESDtBQUVKMkIsSUFBQUEsVUFBVSxFQUFFO0FBRlIsR0FEK0I7QUFLckMwRCxFQUFBQSxJQUFJLEVBQUU7QUFDSixLQUFDeEgsS0FBSyxDQUFDWSxXQUFOLENBQWtCdUMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxHQUFnQztBQUM5QjFDLE1BQUFBLFVBQVUsRUFBRTtBQURrQjtBQUQ1QixHQUwrQjtBQVVyQ3FILEVBQUFBLFFBQVEsRUFBRTtBQUNSM0YsSUFBQUEsS0FBSyxFQUFFLE1BREM7QUFFUnBCLElBQUFBLFNBQVMsRUFBRWYsS0FBSyxDQUFDZ0IsT0FBTixDQUFjLENBQWQsQ0FGSDtBQUdSK0csSUFBQUEsVUFBVSxFQUFFO0FBSEosR0FWMkI7QUFlckNDLEVBQUFBLFFBQVEsRUFBRSxFQWYyQjtBQWdCckNDLEVBQUFBLFdBQVcsRUFBRTtBQUNYeEgsSUFBQUEsVUFBVSxFQUFFLE1BREQ7QUFFWG9FLElBQUFBLFNBQVMsRUFBRSxPQUZBO0FBR1gsS0FBQzdFLEtBQUssQ0FBQ1ksV0FBTixDQUFrQnVDLElBQWxCLENBQXVCLElBQXZCLENBQUQsR0FBZ0M7QUFDOUI1QixNQUFBQSxRQUFRLEVBQUU7QUFEb0I7QUFIckIsR0FoQndCO0FBdUJyQzJHLEVBQUFBLFVBQVUsRUFBRTtBQUNWaEksSUFBQUEsT0FBTyxFQUFFLGNBREM7QUFFVjZILElBQUFBLFVBQVUsRUFBRSxNQUZGO0FBR1ZsRCxJQUFBQSxTQUFTLEVBQUU7QUFIRCxHQXZCeUI7QUE0QnJDOEMsRUFBQUEsa0JBQWtCLEVBQUU7QUFDbEJ6SCxJQUFBQSxPQUFPLEVBQUUsTUFEUztBQUVsQlksSUFBQUEsYUFBYSxFQUFFLEtBRkc7QUFHbEJMLElBQUFBLFVBQVUsRUFBRVQsS0FBSyxDQUFDZ0IsT0FBTixDQUFjLENBQWQ7QUFITSxHQTVCaUI7QUFpQ3JDc0csRUFBQUEsVUFBVSxFQUFFO0FBQ1Y3RyxJQUFBQSxVQUFVLEVBQUVULEtBQUssQ0FBQ2dCLE9BQU4sQ0FBYyxDQUFkO0FBREY7QUFqQ3lCLENBQUwsQ0FBTixDQUE1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVlLFNBQVM0RSxNQUFULENBQWdCO0FBQUVoRCxFQUFBQTtBQUFGLENBQWhCLEVBQTBCO0FBQ3ZDLFFBQU1wRCxPQUFPLEdBQUdDLFNBQVMsRUFBekI7O0FBRUEsUUFBTTJJLGFBQWEsR0FBRzFHLHdDQUFBLENBQU9BLDBDQUFBLENBQVNrQixJQUFULEVBQWU7QUFBRTlGLElBQUFBLEdBQUcsRUFBRTtBQUFQLEdBQWYsQ0FBUCxDQUF0Qjs7QUFDQSxRQUFNeUwsY0FBYyxHQUFHN0csd0NBQUEsQ0FBT0EsMENBQUEsQ0FBU2tCLElBQVQsRUFBZTtBQUFFOUYsSUFBQUEsR0FBRyxFQUFFO0FBQVAsR0FBZixDQUFQLENBQXZCOztBQUVBLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsSUFBRDtBQUFNLGVBQVMsRUFBRXNMO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQVVEOztBQUVELFNBQVNJLElBQVQsQ0FBYztBQUFFQyxFQUFBQTtBQUFGLENBQWQsRUFBNkI7QUFDM0IsUUFBTWpKLE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUNBLHNCQUNFLDhEQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFHLElBQUdnSixTQUFTLENBQUMzTCxHQUFJLEVBQTlCO0FBQWlDLFlBQVEsTUFBekM7QUFBQSwyQkFDRTtBQUFBLDZCQUNFO0FBQUssV0FBRyxFQUFDLFdBQVQ7QUFBcUIsV0FBRyxFQUFDLFdBQXpCO0FBQXFDLGFBQUssRUFBQyxrREFBM0M7QUFBaUYsaUJBQVMsRUFBRTBDLE9BQU8sQ0FBQ2tKO0FBQXBHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0Q7O0FBRUQsTUFBTWpKLFNBQVMsR0FBR0wsdURBQVUsQ0FBQ1ksS0FBSyxLQUFLO0FBQ3JDSSxFQUFBQSxVQUFVLGtDQUNMSixLQUFLLENBQUMySSxhQUFOLENBQW9CdkQsT0FEZjtBQUVSM0UsSUFBQUEsVUFBVSxFQUFFVCxLQUFLLENBQUNnQixPQUFOLENBQWMsQ0FBZCxDQUZKO0FBR1JkLElBQUFBLE9BQU8sRUFBRSxNQUhEO0FBSVIsS0FBQ0YsS0FBSyxDQUFDWSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUFELEdBQThCO0FBQzVCWCxNQUFBQSxPQUFPLEVBQUUsTUFEbUI7QUFFNUJtQixNQUFBQSxXQUFXLEVBQUU7QUFGZTtBQUp0QixJQUQyQjtBQVVyQ3VILEVBQUFBLFVBQVUsRUFBRTtBQUNWdkgsSUFBQUEsV0FBVyxFQUFFckIsS0FBSyxDQUFDZ0IsT0FBTixDQUFjLENBQWQ7QUFESCxHQVZ5QjtBQWFyQzBILEVBQUFBLElBQUksRUFBRTtBQUNKdkcsSUFBQUEsS0FBSyxFQUFFLFFBREg7QUFFSkMsSUFBQUEsTUFBTSxFQUFFLE1BRko7QUFHSixLQUFDcEMsS0FBSyxDQUFDWSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUFELEdBQThCO0FBQzVCc0IsTUFBQUEsS0FBSyxFQUFFO0FBRHFCLEtBSDFCO0FBTUosS0FBQ25DLEtBQUssQ0FBQ1ksV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QjtBQUM1QnNCLE1BQUFBLEtBQUssRUFBRTtBQURxQixLQU4xQixDQVNKOztBQVRJLEdBYitCO0FBd0JyQzBHLEVBQUFBLFVBQVUsRUFBRTtBQUNWM0ksSUFBQUEsT0FBTyxFQUFFLE1BREM7QUFFVnNFLElBQUFBLFVBQVUsRUFBRSxRQUZGO0FBR1ZzRSxJQUFBQSxZQUFZLEVBQUU7QUFISjtBQXhCeUIsQ0FBTCxDQUFOLENBQTVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUduQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0MsWUFBVCxDQUFzQjtBQUFFQyxFQUFBQTtBQUFGLENBQXRCLEVBQWlDO0FBQzlDLFFBQU14SixPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFFQSxzQkFDRSw4REFBQyw4Q0FBRDtBQUFLLGFBQVMsRUFBRUQsT0FBTyxDQUFDeUosS0FBeEI7QUFBQSxjQUVJdkgsdUNBQUEsQ0FBTXNILEtBQUssQ0FBQ0UsS0FBWixFQUFtQkMsSUFBSSxpQkFDckIsOERBQUMsNkRBQUQ7QUFDRSxXQUFLLEVBQUVBLElBQUksQ0FBQ0MsS0FEZDtBQUVFLFNBQUcsRUFBRUQsSUFBSSxDQUFDck07QUFGWixPQUdPcU0sSUFBSSxDQUFDck0sR0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRDtBQUFBO0FBRUQsTUFBTTJDLFNBQVMsR0FBR0wsdURBQVUsQ0FBQ1ksS0FBSyxLQUFLO0FBQ3JDaUosRUFBQUEsS0FBSyxFQUFFO0FBQ0wvSSxJQUFBQSxPQUFPLEVBQUUsTUFESjtBQUVMQyxJQUFBQSxjQUFjLEVBQUU7QUFGWDtBQUQ4QixDQUFMLENBQU4sQ0FBNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUV2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVlLFNBQVNrSixXQUFULENBQXFCckgsS0FBckIsRUFBNEI7QUFDekMsUUFBTWhDLEtBQUssR0FBR3lCLHFEQUFRLEVBQXRCO0FBRUEsTUFBSXFCLElBQUksR0FBR2QsS0FBSyxDQUFDQyxHQUFqQjtBQUVBLFFBQU1xSCxVQUFVLEdBQUc1Qyw0REFBYSxDQUFDMUcsS0FBSyxDQUFDWSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUFELENBQWhDO0FBQ0EsUUFBTTBJLFFBQVEsR0FBRzdDLDREQUFhLENBQUMxRyxLQUFLLENBQUNZLFdBQU4sQ0FBa0JNLElBQWxCLENBQXVCLElBQXZCLENBQUQsQ0FBOUI7QUFDQSxRQUFNNkYsUUFBUSxHQUFHTCw0REFBYSxDQUFDMUcsS0FBSyxDQUFDWSxXQUFOLENBQWtCdUMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxDQUE5Qjs7QUFFQSxNQUFJekIsd0NBQUEsQ0FBT00sS0FBSyxDQUFDd0gsT0FBYixJQUF3QixDQUE1QixFQUErQjtBQUFBOztBQUM3QixRQUFJRixVQUFKLEVBQWdCeEcsSUFBSSxHQUFHLG1CQUFBZCxLQUFLLENBQUN3SCxPQUFOLDBGQUFlQyxLQUFmLDhFQUFzQjNNLEdBQXRCLEtBQTZCZ0csSUFBcEM7QUFDaEIsUUFBSXlHLFFBQUosRUFBY3pHLElBQUksR0FBRyxvQkFBQWQsS0FBSyxDQUFDd0gsT0FBTiw2RkFBZUUsTUFBZixnRkFBdUI1TSxHQUF2QixLQUE4QmdHLElBQXJDO0FBQ2QsUUFBSWlFLFFBQUosRUFBY2pFLElBQUksR0FBRyxvQkFBQWQsS0FBSyxDQUFDd0gsT0FBTiw2RkFBZUcsS0FBZixnRkFBc0I3TSxHQUF0QixLQUE2QmdHLElBQXBDO0FBQ2Y7O0FBRUQsc0JBQU8sOERBQUMsMERBQUQsa0NBQVdkLEtBQVg7QUFBa0IsT0FBRyxFQUFHLEdBQUVwRix1REFBVSxHQUFFa0csSUFBSztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRXhCRDtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVlLFNBQVNnSCxVQUFULENBQW9CO0FBQUVDLEVBQUFBO0FBQUYsQ0FBcEIsRUFBZ0M7QUFDN0MsUUFBTXZLLE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUVBLHNCQUNFLDhEQUFDLCtDQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLGFBQVMsRUFBRUQsT0FBTyxDQUFDTyxJQUFuQztBQUF5QyxXQUFPLEVBQUUsQ0FBbEQ7QUFBcUQsYUFBUyxFQUFDLElBQS9EO0FBQW9FLGFBQVMsRUFBRVAsT0FBTyxDQUFDTyxJQUF2RjtBQUFBLGNBQ0cyQix3Q0FBQSxDQUFPcUksTUFBUCxJQUFpQixDQUFqQixJQUFzQnJJLHVDQUFBLENBQU1xSSxNQUFOLEVBQWNmLEtBQUssaUJBQ3hDLDhEQUFDLHlEQUFEO0FBQVcsV0FBSyxFQUFFQTtBQUFsQixPQUE4QkEsS0FBSyxDQUFDSSxLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRHFCO0FBRHpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EO0FBRUQsTUFBTTNKLFNBQVMsR0FBR0wsdURBQVUsQ0FBQ1ksS0FBSyxLQUFLO0FBQ3JDRCxFQUFBQSxJQUFJLEVBQUU7QUFDSkcsSUFBQUEsT0FBTyxFQUFFLE1BREw7QUFFSk0sSUFBQUEsYUFBYSxFQUFFLE1BRlg7QUFHSkwsSUFBQUEsY0FBYyxFQUFFLFFBSFo7QUFJSjZKLElBQUFBLE1BQU0sRUFBRSxNQUpKO0FBS0poRSxJQUFBQSxPQUFPLEVBQUUsQ0FMTDtBQU1KaUUsSUFBQUEsUUFBUSxFQUFFLENBTk47QUFPSixLQUFDakssS0FBSyxDQUFDWSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUFELEdBQThCO0FBQzVCQyxNQUFBQSxhQUFhLEVBQUUsS0FEYTtBQUU1QkMsTUFBQUEsU0FBUyxFQUFFO0FBRmlCO0FBUDFCO0FBRCtCLENBQUwsQ0FBTixDQUE1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRWUsU0FBU3FKLGlCQUFULENBQTJCO0FBQUVwQixFQUFBQTtBQUFGLENBQTNCLEVBQXNDO0FBQ25ELFFBQU14SixPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFFQSxzQkFDRSw4REFBQyxzREFBRDtBQUFhLGFBQVMsRUFBRUQsT0FBTyxDQUFDNkssV0FBaEM7QUFBQSxlQUNHM0ksQ0FBQyxDQUFDb0IsSUFBRixDQUFPa0csS0FBSyxDQUFDc0IsSUFBYixJQUFxQixDQUFyQixpQkFDQztBQUFBLDhCQUNFLDhEQUFDLHFEQUFEO0FBQVksaUJBQVMsRUFBRTlLLE9BQU8sQ0FBQytLLFdBQS9CO0FBQUEsa0JBQ0d2QixLQUFLLENBQUNzQjtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBLG9CQUZKLEVBVUc1SSxDQUFDLENBQUNvQixJQUFGLENBQU9rRyxLQUFLLENBQUNFLEtBQWIsSUFBc0IsQ0FBdEIsaUJBQ0M7QUFBQSw4QkFDRSw4REFBQyw4Q0FBRDtBQUFLLGlCQUFTLEVBQUUxSixPQUFPLENBQUNHLFNBQXhCO0FBQUEsZ0NBQ0UsOERBQUMscURBQUQ7QUFBWSxtQkFBUyxFQUFFSCxPQUFPLENBQUMrSyxXQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUtFLDhEQUFDLGtEQUFEO0FBQWMsZUFBSyxFQUFFdkI7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVFFLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRjtBQUFBLG9CQVhKLEVBdUJHdEgsQ0FBQyxDQUFDb0IsSUFBRixDQUFPa0csS0FBSyxDQUFDd0IsS0FBYixJQUFzQixDQUF0QixpQkFDQyw4REFBQyw4Q0FBRDtBQUFLLGVBQVMsRUFBRWhMLE9BQU8sQ0FBQ0csU0FBeEI7QUFBQSw4QkFDRSw4REFBQyxxREFBRDtBQUFZLGlCQUFTLEVBQUVILE9BQU8sQ0FBQytLLFdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRSw4REFBQyw4Q0FBRDtBQUFVLGFBQUssRUFBRXZCO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkosZUFnQ0UsOERBQUMsOENBQUQ7QUFBSyxlQUFTLEVBQUV4SixPQUFPLENBQUNHLFNBQXhCO0FBQUEsNkJBQ0UsOERBQUMscURBQUQ7QUFBWSxpQkFBUyxFQUFFSCxPQUFPLENBQUMrSyxXQUEvQjtBQUFBLCtCQUNFLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFHLElBQUd2QixLQUFLLENBQUNsTSxHQUFJLEVBQTFCO0FBQTZCLGtCQUFRLE1BQXJDO0FBQUEsaUNBQ0U7QUFBRyxxQkFBUyxFQUFFMEMsT0FBTyxDQUFDbUYsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwQ0Q7QUFBQTtBQUVELE1BQU1sRixTQUFTLEdBQUdMLHVEQUFVLENBQUVZLEtBQUQsS0FBWTtBQUN2Q3FLLEVBQUFBLFdBQVcsRUFBRTtBQUNYLDZCQUF5QjtBQUN2QnBKLE1BQUFBLFlBQVksRUFBRWpCLEtBQUssQ0FBQ2dCLE9BQU4sQ0FBYyxDQUFkO0FBRFM7QUFEZCxHQUQwQjtBQU12Q3VKLEVBQUFBLFdBQVcsRUFBRTtBQUNYakosSUFBQUEsS0FBSyxFQUFFdEIsS0FBSyxDQUFDTSxPQUFOLENBQWNDLElBQWQsQ0FBbUIsR0FBbkIsQ0FESTtBQUVYZ0IsSUFBQUEsUUFBUSxFQUFFO0FBRkMsR0FOMEI7QUFVdkM1QixFQUFBQSxTQUFTLEVBQUU7QUFDVE8sSUFBQUEsT0FBTyxFQUFFLE1BREE7QUFFVEMsSUFBQUEsY0FBYyxFQUFFO0FBRlAsR0FWNEI7QUFjdkN3RSxFQUFBQSxJQUFJLEVBQUU7QUFDSkcsSUFBQUEsY0FBYyxFQUFFLFdBRFo7QUFFSnhELElBQUFBLEtBQUssRUFBRXRCLEtBQUssQ0FBQ00sT0FBTixDQUFjNkUsTUFBZCxDQUFxQnNGLFNBQXJCLENBQStCcEY7QUFGbEM7QUFkaUMsQ0FBWixDQUFELENBQTVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUV0REE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU3dGLGdCQUFULENBQTBCO0FBQUU3QixFQUFBQTtBQUFGLENBQTFCLEVBQXFDO0FBQ2xELFFBQU14SixPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFFQSxzQkFDRSw4REFBQyxpRUFBRDtBQUNFLFVBQU0sZUFDSiw4REFBQyw2REFBRDtBQUNFLG9CQUFXLGdCQURiO0FBRUUsZUFBUyxFQUFFRCxPQUFPLENBQUNzTCxNQUZyQjtBQUdFLFdBQUssRUFBRTlCLEtBQUssQ0FBQytCLElBQU4sQ0FBV25MLEtBSHBCO0FBQUEsZ0JBS0dvSixLQUFLLENBQUMrQixJQUFOLENBQVduTCxLQUFYLENBQWlCLENBQWpCO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBVUUsU0FBSyxFQUFFb0osS0FBSyxDQUFDSTtBQVZmO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEO0FBQUE7QUFFRCxNQUFNM0osU0FBUyxHQUFHTCx1REFBVSxDQUFFWSxLQUFELEtBQVk7QUFDdkM4SyxFQUFBQSxNQUFNLEVBQUU7QUFDTkUsSUFBQUEsZUFBZSxFQUFFaEwsS0FBSyxDQUFDTSxPQUFOLENBQWM2RSxNQUFkLENBQXFCc0YsU0FBckIsQ0FBK0JwRjtBQUQxQztBQUQrQixDQUFaLENBQUQsQ0FBNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU3dFLFNBQVQsQ0FBbUI7QUFBRWIsRUFBQUE7QUFBRixDQUFuQixFQUE4QjtBQUMzQyxRQUFNO0FBQUEsT0FBQ3VDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCcEksK0NBQVEsQ0FBQyxLQUFELENBQXhDO0FBQ0EsUUFBTTVELE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUVBLFFBQU1nTSxTQUFTLEdBQUcvSix5Q0FBQSxDQUFPc0gsS0FBSyxDQUFDMEMsT0FBYixJQUF3QixDQUExQzs7QUFFQSxRQUFNQyxpQkFBaUIsR0FBRyxNQUFNO0FBQzlCSCxJQUFBQSxXQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFYO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRSwrREFBQywrQ0FBRDtBQUFNLGFBQVMsRUFBQyxJQUFoQjtBQUFxQixRQUFJLE1BQXpCO0FBQTBCLE1BQUUsRUFBRSxFQUE5QjtBQUFrQyxNQUFFLEVBQUUsQ0FBdEM7QUFBeUMsTUFBRSxFQUFFLENBQTdDO0FBQWdELE1BQUUsRUFBRSxDQUFwRDtBQUF1RCxhQUFTLEVBQUUvTCxPQUFPLENBQUNvTSxFQUExRTtBQUFBLDJCQUNFLCtEQUFDLDJEQUFEO0FBQU0sZUFBUyxFQUFFcE0sT0FBTyxDQUFDZ0ksSUFBekI7QUFBQSw4QkFDRSwrREFBQyx1REFBRDtBQUFrQixhQUFLLEVBQUV3QjtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSwrREFBQyxrREFBRDtBQUFNLFlBQUksRUFBRyxJQUFHQSxLQUFLLENBQUNsTSxHQUFJLEVBQTFCO0FBQTZCLGdCQUFRLE1BQXJDO0FBQUEsK0JBQ0U7QUFBQSxpQ0FDRSwrREFBQyw0Q0FBRDtBQUNFLGVBQUcsRUFBRTJPLFNBQVMsR0FBR3pDLEtBQUssQ0FBQzBDLE9BQU4sQ0FBYyxDQUFkLEVBQWlCNU8sR0FBcEIsR0FBMEIsRUFEMUM7QUFFRSx1QkFBVyxFQUFFLEdBRmY7QUFHRSxlQUFHLEVBQUUyTyxTQUFTLEdBQUd6QyxLQUFLLENBQUMwQyxPQUFOLENBQWMsQ0FBZCxFQUFpQkcsZUFBcEIsR0FBc0MsRUFIdEQ7QUFJRSxpQkFBSyxFQUFFSixTQUFTLEdBQUd6QyxLQUFLLENBQUMwQyxPQUFOLENBQWMsQ0FBZCxFQUFpQkksT0FBcEIsR0FBOEIsRUFKaEQ7QUFLRSxtQkFBTyxFQUFFTCxTQUFTLEdBQUd6QyxLQUFLLENBQUMwQyxPQUFOLENBQWMsQ0FBZCxFQUFpQmxDLE9BQXBCLEdBQThCO0FBTGxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBY0UsK0RBQUMsYUFBRDtBQUNFLHlCQUFpQixFQUFFbUMsaUJBRHJCO0FBRUUsZ0JBQVEsRUFBRUo7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEYsZUFtQkUsK0RBQUMsY0FBRDtBQUFnQixnQkFBUSxFQUFFQSxRQUExQjtBQUFBLCtCQUNFLCtEQUFDLHdEQUFEO0FBQW1CLGVBQUssRUFBRXZDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJCRDs7QUFFRCxNQUFNK0MsY0FBYyxHQUFHLENBQUM7QUFBRVIsRUFBQUEsUUFBRjtBQUFZakosRUFBQUE7QUFBWixDQUFELEtBQTRCO0FBQ2pELHNCQUNFLCtEQUFDLCtEQUFEO0FBQVUsTUFBRSxFQUFFaUosUUFBZDtBQUF3QixXQUFPLEVBQUMsTUFBaEM7QUFBdUMsaUJBQWEsTUFBcEQ7QUFBQSxjQUNHN0oseUNBQUEsQ0FBT1ksUUFBUCxJQUFtQixDQUFuQixJQUF3QkE7QUFEM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsQ0FORDs7QUFRQSxNQUFNMEosYUFBYSxHQUFHLENBQUM7QUFBRUwsRUFBQUEsaUJBQUY7QUFBcUJKLEVBQUFBO0FBQXJCLENBQUQsS0FBcUM7QUFDekQsUUFBTS9MLE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUVBLHNCQUNFLCtEQUFDLGtFQUFEO0FBQWEsa0JBQWMsTUFBM0I7QUFBNEIsYUFBUyxFQUFFRCxPQUFPLENBQUN5TSxPQUEvQztBQUFBLDRCQUNFLCtEQUFDLHFEQUFEO0FBQVksYUFBTyxFQUFDLE9BQXBCO0FBQTRCLFdBQUssRUFBQyxlQUFsQztBQUFrRCxlQUFTLEVBQUMsR0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRSwrREFBQyxpRUFBRDtBQUNFLGVBQVMsRUFBRWhCLDJDQUFJLENBQUN6TCxPQUFPLENBQUMwTSxNQUFULEVBQWlCO0FBQzlCLFNBQUMxTSxPQUFPLENBQUMyTSxVQUFULEdBQXNCWjtBQURRLE9BQWpCLENBRGpCO0FBSUUsYUFBTyxFQUFFSSxpQkFKWDtBQUtFLHVCQUFlSixRQUxqQjtBQU1FLG9CQUFXLFdBTmI7QUFBQSw2QkFRRSwrREFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWlCRCxDQXBCRDs7QUFzQkEsTUFBTTlMLFNBQVMsR0FBR0wsdURBQVUsQ0FBRVksS0FBRCxLQUFZO0FBQ3ZDd0gsRUFBQUEsSUFBSSxFQUFFO0FBQ0o0RSxJQUFBQSxRQUFRLEVBQUUsTUFETjtBQUVKbE0sSUFBQUEsT0FBTyxFQUFFLE1BRkw7QUFHSlksSUFBQUEsYUFBYSxFQUFFO0FBSFgsR0FEaUM7QUFNdkM4SyxFQUFBQSxFQUFFLEVBQUU7QUFDRixLQUFDNUwsS0FBSyxDQUFDWSxXQUFOLENBQWtCdUMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxHQUFnQztBQUM5QnpDLE1BQUFBLFdBQVcsRUFBRTtBQURpQjtBQUQ5QixHQU5tQztBQVd2Q3VMLEVBQUFBLE9BQU8sRUFBRTtBQUNQbEwsSUFBQUEsU0FBUyxFQUFFO0FBREosR0FYOEI7QUFjdkNtTCxFQUFBQSxNQUFNLEVBQUU7QUFDTkcsSUFBQUEsU0FBUyxFQUFFLGNBREw7QUFFTjVMLElBQUFBLFVBQVUsRUFBRSxNQUZOO0FBR042TCxJQUFBQSxVQUFVLEVBQUV0TSxLQUFLLENBQUN1TSxXQUFOLENBQWtCQyxNQUFsQixDQUF5QixXQUF6QixFQUFzQztBQUNoREMsTUFBQUEsUUFBUSxFQUFFek0sS0FBSyxDQUFDdU0sV0FBTixDQUFrQkUsUUFBbEIsQ0FBMkJDO0FBRFcsS0FBdEM7QUFITixHQWQrQjtBQXFCdkNQLEVBQUFBLFVBQVUsRUFBRTtBQUNWRSxJQUFBQSxTQUFTLEVBQUU7QUFERDtBQXJCMkIsQ0FBWixDQUFELENBQTVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHZSxTQUFTUyxpQkFBVCxDQUEyQjtBQUFFQyxFQUFBQSxZQUFGO0FBQWdCQyxFQUFBQSxLQUFoQjtBQUF1QnRQLEVBQUFBO0FBQXZCLENBQTNCLEVBQTBEO0FBQ3ZFLFFBQU04QixPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFFQSxRQUFNO0FBQUEsT0FBQ3dOLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCOUosK0NBQVEsQ0FBQzFGLElBQUQsQ0FBcEM7QUFFQSxRQUFNeVAsVUFBVSxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUwsS0FBSyxHQUFHRCxZQUFsQixDQUFuQjtBQUNBLFFBQU1PLE1BQU0sR0FBR1Ysc0RBQVMsRUFBeEI7QUFDQSxRQUFNVyxRQUFRLEdBQUdWLDREQUFBLENBQXFCUyxNQUFNLENBQUNHLE1BQTVCLENBQWpCOztBQUVBLFFBQU1DLFFBQVEsR0FBSUMsT0FBRCxJQUFhO0FBQzVCSixJQUFBQSxRQUFRLENBQUN4UCxLQUFULENBQWVMLElBQWYsR0FBc0JpUSxPQUF0QjtBQUNBSixJQUFBQSxRQUFRLENBQUN4UCxLQUFULENBQWVQLEtBQWYsR0FBdUJ1UCxZQUF2QjtBQUNBRyxJQUFBQSxTQUFTLENBQUNTLE9BQUQsQ0FBVDtBQUNBLFVBQU03USxHQUFHLEdBQUcrUCxnRUFBQSxDQUF5QlUsUUFBekIsQ0FBWjtBQUNBRCxJQUFBQSxNQUFNLENBQUNPLElBQVAsQ0FBWS9RLEdBQVo7QUFDRCxHQU5EOztBQVFBLHNCQUNFO0FBQUssYUFBUyxFQUFFMEMsT0FBTyxDQUFDZ0ksSUFBeEI7QUFBQSwyQkFDRSw4REFBQyxxREFBRDtBQUNFLGFBQU8sRUFBQyxVQURWO0FBRUUsV0FBSyxFQUFDLFNBRlI7QUFHRSxVQUFJLEVBQUV5RixNQUhSO0FBSUUsV0FBSyxFQUFFRSxVQUpUO0FBS0UsY0FBUSxFQUFFLENBQUN6TCxDQUFELEVBQUlvTSxJQUFKLEtBQWFKLFFBQVEsQ0FBQ0ksSUFBRCxDQUxqQztBQU1FLGtCQUFZLEVBQUUsQ0FOaEI7QUFPRSxlQUFTLEVBQUV0TyxPQUFPLENBQUN1TztBQVByQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7QUFFRCxNQUFNdE8sU0FBUyxHQUFHTCx1REFBVSxDQUFFWSxLQUFELEtBQVk7QUFDdkN3SCxFQUFBQSxJQUFJLEVBQUU7QUFDSixhQUFTO0FBQ1B6RyxNQUFBQSxTQUFTLEVBQUVmLEtBQUssQ0FBQ2dCLE9BQU4sQ0FBYyxDQUFkO0FBREo7QUFETCxHQURpQztBQU12QytNLEVBQUFBLFVBQVUsRUFBRTtBQUNWN04sSUFBQUEsT0FBTyxFQUFFLE1BREM7QUFFVkMsSUFBQUEsY0FBYyxFQUFFO0FBRk47QUFOMkIsQ0FBWixDQUFELENBQTVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRXhDQTtBQUNBOztBQUVlLFNBQVNnSyxRQUFULENBQWtCO0FBQUVuQixFQUFBQTtBQUFGLENBQWxCLEVBQTZCO0FBQzFDLFFBQU14SixPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFFQSxzQkFDRSw4REFBQyw4Q0FBRDtBQUFLLGFBQVMsRUFBRUQsT0FBTyxDQUFDME8sUUFBeEI7QUFBQSxjQUVJeE0sQ0FBQyxDQUFDcUIsR0FBRixDQUFNaUcsS0FBSyxDQUFDd0IsS0FBWixFQUFtQjJELENBQUMsaUJBQ2xCLDhEQUFDLFdBQUQ7QUFDRSxXQUFLLGVBQ0g7QUFBQSxrQkFBS0EsQ0FBQyxDQUFDN0Q7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQSw2QkFNRTtBQUFrQixpQkFBUyxFQUFFOUssT0FBTyxDQUFDc0QsSUFBckM7QUFBQSxrQkFBNENxTCxDQUFDLENBQUNDO0FBQTlDLFNBQVdELENBQUMsQ0FBQ3JSLEdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GLE9BSU9xUixDQUFDLENBQUNyUixHQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdCRDtBQUFBO0FBRUQsTUFBTXVSLFdBQVcsR0FBR0wsdURBQVUsQ0FBRWhPLEtBQUQsS0FBWTtBQUN6Q3NPLEVBQUFBLE9BQU8sRUFBRTtBQUNQdEQsSUFBQUEsZUFBZSxFQUFFLFNBRFY7QUFFUDFKLElBQUFBLEtBQUssRUFBRSxxQkFGQTtBQUdQOEssSUFBQUEsUUFBUSxFQUFFLEdBSEg7QUFJUDdLLElBQUFBLFFBQVEsRUFBRXZCLEtBQUssQ0FBQ3VPLFVBQU4sQ0FBaUJDLE9BQWpCLENBQXlCLEVBQXpCLENBSkg7QUFLUEMsSUFBQUEsTUFBTSxFQUFFO0FBTEQ7QUFEZ0MsQ0FBWixDQUFELENBQVYsQ0FRaEJSLGtEQVJnQixDQUFwQjtBQVdBLE1BQU14TyxTQUFTLEdBQUdMLHVEQUFVLENBQUVZLEtBQUQsS0FBWTtBQUN2QzhDLEVBQUFBLElBQUksRUFBRTtBQUNKMkwsSUFBQUEsTUFBTSxFQUFHLGFBQVl6TyxLQUFLLENBQUNNLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQixHQUFuQixDQUF3QixFQUR6QztBQUVKeUYsSUFBQUEsT0FBTyxFQUFFaEcsS0FBSyxDQUFDZ0IsT0FBTixDQUFjLENBQWQ7QUFGTCxHQURpQztBQUt2Q2tOLEVBQUFBLFFBQVEsRUFBRTtBQUNSbk4sSUFBQUEsU0FBUyxFQUFFZixLQUFLLENBQUNnQixPQUFOLENBQWMsQ0FBZCxDQURIO0FBRVIsNkJBQXlCO0FBQ3ZCSyxNQUFBQSxXQUFXLEVBQUU7QUFEVTtBQUZqQjtBQUw2QixDQUFaLENBQUQsQ0FBNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRW5DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU11TixVQUFVLGdCQUFHRixvREFBYSxFQUFoQztBQUVPLFNBQVNHLFVBQVQsQ0FBb0I7QUFBRXZNLEVBQUFBO0FBQUYsQ0FBcEIsRUFBa0M7QUFDdkMsUUFBTTtBQUFBLE9BQUNzQixVQUFEO0FBQUEsT0FBYWtMO0FBQWIsTUFBOEIxTCwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFDQSxRQUFNO0FBQUEsT0FBQ08sT0FBRDtBQUFBLE9BQVVvTDtBQUFWLE1BQXdCM0wsK0NBQVEsQ0FBQyxFQUFELENBQXRDO0FBRUEsUUFBTXdELEtBQUssR0FBRztBQUFFaEUsSUFBQUEsSUFBSUEsb0RBQUFBO0FBQU4sR0FBZDtBQUVBUyxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxLQUFDLFlBQVk7QUFDWCxVQUFJM0Isd0NBQUEsQ0FBT2tGLEtBQUssQ0FBQ2hELFVBQWIsTUFBNkIsQ0FBakMsRUFBb0M7QUFDbEMsY0FBTTdHLFFBQVEsR0FBRyxNQUFNRixpRUFBZ0IsRUFBdkM7QUFDQWlTLFFBQUFBLGFBQWEsQ0FBQy9SLFFBQVEsSUFBSSxFQUFiLENBQWI7QUFDRDtBQUNGLEtBTEQ7QUFNRCxHQVBRLEVBT04sRUFQTSxDQUFUO0FBU0FzRyxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxLQUFDLFlBQVk7QUFDWCxVQUFJM0Isd0NBQUEsQ0FBT2tGLEtBQUssQ0FBQ2pELE9BQWIsTUFBMEIsQ0FBOUIsRUFBaUM7QUFDL0IsY0FBTTVHLFFBQVEsR0FBRyxNQUFNTywwREFBYSxFQUFwQztBQUNBeVIsUUFBQUEsVUFBVSxDQUFDaFMsUUFBUSxJQUFJLEVBQWIsQ0FBVjtBQUNEO0FBQ0YsS0FMRDtBQU1ELEdBUFEsRUFPTixFQVBNLENBQVQ7QUFTQTZKLEVBQUFBLEtBQUssQ0FBQ2hELFVBQU4sR0FBbUJBLFVBQW5CO0FBQ0FnRCxFQUFBQSxLQUFLLENBQUNqRCxPQUFOLEdBQWdCQSxPQUFoQjtBQUVBLHNCQUNFLDhEQUFDLFVBQUQsQ0FBWSxRQUFaO0FBQXFCLFNBQUssRUFBRWlELEtBQTVCO0FBQUEsY0FDR3RFO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7QUFFTSxTQUFTa0IsYUFBVCxHQUF5QjtBQUM5QixTQUFPbUwsaURBQVUsQ0FBQ0MsVUFBRCxDQUFqQjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0ksV0FBVCxDQUFxQjtBQUFFMU0sRUFBQUE7QUFBRixDQUFyQixFQUFtQztBQUNoRCxRQUFNOUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBRUEsc0JBQ0UsOERBQUMsOENBQUQ7QUFBSyxhQUFTLEVBQUVELE9BQU8sQ0FBQ3lQLEdBQXhCO0FBQUEsNEJBQ0UsOERBQUMsOENBQUQ7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUF3QixlQUFTLEVBQUV6UCxPQUFPLENBQUMwUCxNQUEzQztBQUFBLDZCQUNFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRSw4REFBQyw4Q0FBRDtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsZ0JBQ0c1TTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQVNFLDhEQUFDLDhDQUFEO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBd0IsZUFBUyxFQUFFOUMsT0FBTyxDQUFDb0YsTUFBM0M7QUFBQSw2QkFDRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7QUFFRCxNQUFNbkYsU0FBUyxHQUFHTCx1REFBVSxDQUFDWSxLQUFLLEtBQUs7QUFDckNpUCxFQUFBQSxHQUFHLEVBQUU7QUFDSHpNLElBQUFBLFNBQVMsRUFBRSxPQURSO0FBRUh0QyxJQUFBQSxPQUFPLEVBQUUsTUFGTjtBQUdIWSxJQUFBQSxhQUFhLEVBQUUsUUFIWjtBQUlIcU8sSUFBQUEsU0FBUyxFQUFFO0FBSlIsR0FEZ0M7QUFPckNELEVBQUFBLE1BQU0sRUFBRTtBQUNOL00sSUFBQUEsS0FBSyxFQUFFLE1BREQ7QUFFTmlOLElBQUFBLFNBQVMsRUFBRXBQLEtBQUssQ0FBQ3FQLE9BQU4sQ0FBYyxDQUFkO0FBRkwsR0FQNkI7QUFXckN6SyxFQUFBQSxNQUFNLEVBQUU7QUFDTnpDLElBQUFBLEtBQUssRUFBRSxNQUREO0FBRU5pTixJQUFBQSxTQUFTLEVBQUVwUCxLQUFLLENBQUNxUCxPQUFOLENBQWMsQ0FBZCxDQUZMO0FBR050TyxJQUFBQSxTQUFTLEVBQUU7QUFITCxHQVg2QjtBQWdCckNzRSxFQUFBQSxJQUFJLEVBQUU7QUFDSmlLLElBQUFBLElBQUksRUFBRSxDQURGO0FBRUpsRCxJQUFBQSxRQUFRLEVBQUU7QUFGTjtBQWhCK0IsQ0FBTCxDQUFOLENBQTVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUV6QmE7O0FBQ2JtRCw4Q0FBNkM7QUFDekNHLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBRCxlQUFBLEdBQWtCRSxNQUFsQjs7QUFDQSxJQUFJQyxNQUFNLEdBQUdDLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLG9CQUFELENBQVIsQ0FBbkM7O0FBQ0EsSUFBSUMsS0FBSyxHQUFHRixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyw4Q0FBRCxDQUFSLENBQWxDOztBQUNBLElBQUlFLFNBQVMsR0FBR0YsbUJBQU8sQ0FBQywwREFBRCxDQUF2Qjs7QUFDQSxJQUFJRyxZQUFZLEdBQUdILG1CQUFPLENBQUMsc0RBQUQsQ0FBMUI7O0FBQ0EsSUFBSUksZ0JBQWdCLEdBQUdKLG1CQUFPLENBQUMsK0VBQUQsQ0FBOUI7O0FBQ0EsU0FBU0ssZUFBVCxDQUF5QkMsR0FBekIsRUFBOEIvSSxHQUE5QixFQUFtQ3FJLEtBQW5DLEVBQTBDO0FBQ3RDLE1BQUlySSxHQUFHLElBQUkrSSxHQUFYLEVBQWdCO0FBQ1piLElBQUFBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQlksR0FBdEIsRUFBMkIvSSxHQUEzQixFQUFnQztBQUM1QnFJLE1BQUFBLEtBQUssRUFBRUEsS0FEcUI7QUFFNUJXLE1BQUFBLFVBQVUsRUFBRSxJQUZnQjtBQUc1QkMsTUFBQUEsWUFBWSxFQUFFLElBSGM7QUFJNUJDLE1BQUFBLFFBQVEsRUFBRTtBQUprQixLQUFoQztBQU1ILEdBUEQsTUFPTztBQUNISCxJQUFBQSxHQUFHLENBQUMvSSxHQUFELENBQUgsR0FBV3FJLEtBQVg7QUFDSDs7QUFDRCxTQUFPVSxHQUFQO0FBQ0g7O0FBQ0QsU0FBU1Asc0JBQVQsQ0FBZ0NPLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDSSxVQUFYLEdBQXdCSixHQUF4QixHQUE4QjtBQUNqQzVPLElBQUFBLE9BQU8sRUFBRTRPO0FBRHdCLEdBQXJDO0FBR0g7O0FBQ0QsU0FBU0ssYUFBVCxDQUF1QkMsTUFBdkIsRUFBK0I7QUFDM0IsT0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBN0IsRUFBcUNGLENBQUMsRUFBdEMsRUFBeUM7QUFDckMsUUFBSUcsTUFBTSxHQUFHRixTQUFTLENBQUNELENBQUQsQ0FBVCxJQUFnQixJQUFoQixHQUF1QkMsU0FBUyxDQUFDRCxDQUFELENBQWhDLEdBQXNDLEVBQW5EO0FBRUEsUUFBSUksT0FBTyxHQUFHeEIsTUFBTSxDQUFDeUIsSUFBUCxDQUFZRixNQUFaLENBQWQ7O0FBQ0EsUUFBSSxPQUFPdkIsTUFBTSxDQUFDMEIscUJBQWQsS0FBd0MsVUFBNUMsRUFBd0Q7QUFDcERGLE1BQUFBLE9BQU8sR0FBR0EsT0FBTyxDQUFDRyxNQUFSLENBQWUzQixNQUFNLENBQUMwQixxQkFBUCxDQUE2QkgsTUFBN0IsRUFBcUN4SSxNQUFyQyxDQUE0QyxVQUFTNkksR0FBVCxFQUFjO0FBQy9FLGVBQU81QixNQUFNLENBQUM2Qix3QkFBUCxDQUFnQ04sTUFBaEMsRUFBd0NLLEdBQXhDLEVBQTZDZCxVQUFwRDtBQUNILE9BRndCLENBQWYsQ0FBVjtBQUdIOztBQUNEVSxJQUFBQSxPQUFPLENBQUNNLE9BQVIsQ0FBZ0IsVUFBU2hLLEdBQVQsRUFBYztBQUMxQjhJLE1BQUFBLGVBQWUsQ0FBQ08sTUFBRCxFQUFTckosR0FBVCxFQUFjeUosTUFBTSxDQUFDekosR0FBRCxDQUFwQixDQUFmO0FBQ0gsS0FGRDtBQUdIOztBQUNELFNBQU9xSixNQUFQO0FBQ0g7O0FBQ0QsU0FBU1ksd0JBQVQsQ0FBa0NSLE1BQWxDLEVBQTBDUyxRQUExQyxFQUFvRDtBQUNoRCxNQUFJVCxNQUFNLElBQUksSUFBZCxFQUFvQixPQUFPLEVBQVA7O0FBRXBCLE1BQUlKLE1BQU0sR0FBR2MsNkJBQTZCLENBQUNWLE1BQUQsRUFBU1MsUUFBVCxDQUExQzs7QUFDQSxNQUFJbEssR0FBSixFQUFTc0osQ0FBVDs7QUFDQSxNQUFJcEIsTUFBTSxDQUFDMEIscUJBQVgsRUFBa0M7QUFDOUIsUUFBSVEsZ0JBQWdCLEdBQUdsQyxNQUFNLENBQUMwQixxQkFBUCxDQUE2QkgsTUFBN0IsQ0FBdkI7O0FBQ0EsU0FBSUgsQ0FBQyxHQUFHLENBQVIsRUFBV0EsQ0FBQyxHQUFHYyxnQkFBZ0IsQ0FBQ1osTUFBaEMsRUFBd0NGLENBQUMsRUFBekMsRUFBNEM7QUFDeEN0SixNQUFBQSxHQUFHLEdBQUdvSyxnQkFBZ0IsQ0FBQ2QsQ0FBRCxDQUF0QjtBQUNBLFVBQUlZLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQnJLLEdBQWpCLEtBQXlCLENBQTdCLEVBQWdDO0FBQ2hDLFVBQUksQ0FBQ2tJLE1BQU0sQ0FBQ29DLFNBQVAsQ0FBaUJDLG9CQUFqQixDQUFzQ0MsSUFBdEMsQ0FBMkNmLE1BQTNDLEVBQW1EekosR0FBbkQsQ0FBTCxFQUE4RDtBQUM5RHFKLE1BQUFBLE1BQU0sQ0FBQ3JKLEdBQUQsQ0FBTixHQUFjeUosTUFBTSxDQUFDekosR0FBRCxDQUFwQjtBQUNIO0FBQ0o7O0FBQ0QsU0FBT3FKLE1BQVA7QUFDSDs7QUFDRCxTQUFTYyw2QkFBVCxDQUF1Q1YsTUFBdkMsRUFBK0NTLFFBQS9DLEVBQXlEO0FBQ3JELE1BQUlULE1BQU0sSUFBSSxJQUFkLEVBQW9CLE9BQU8sRUFBUDtBQUVwQixNQUFJSixNQUFNLEdBQUcsRUFBYjtBQUVBLE1BQUlvQixVQUFVLEdBQUd2QyxNQUFNLENBQUN5QixJQUFQLENBQVlGLE1BQVosQ0FBakI7QUFDQSxNQUFJekosR0FBSixFQUFTc0osQ0FBVDs7QUFDQSxPQUFJQSxDQUFDLEdBQUcsQ0FBUixFQUFXQSxDQUFDLEdBQUdtQixVQUFVLENBQUNqQixNQUExQixFQUFrQ0YsQ0FBQyxFQUFuQyxFQUFzQztBQUNsQ3RKLElBQUFBLEdBQUcsR0FBR3lLLFVBQVUsQ0FBQ25CLENBQUQsQ0FBaEI7QUFDQSxRQUFJWSxRQUFRLENBQUNHLE9BQVQsQ0FBaUJySyxHQUFqQixLQUF5QixDQUE3QixFQUFnQztBQUNoQ3FKLElBQUFBLE1BQU0sQ0FBQ3JKLEdBQUQsQ0FBTixHQUFjeUosTUFBTSxDQUFDekosR0FBRCxDQUFwQjtBQUNIOztBQUNELFNBQU9xSixNQUFQO0FBQ0g7O0FBQ0QsTUFBTXFCLGVBQWUsR0FBRyxJQUFJQyxHQUFKLEVBQXhCOztBQUNBLElBQUksTUFBK0I7QUFDL0JDLEVBQUFBLE1BQU0sQ0FBQ0MscUJBQVAsR0FBK0IsSUFBL0I7QUFDSDs7QUFDRCxNQUFNQyxvQkFBb0IsR0FBRyxDQUN6QixNQUR5QixFQUV6QixPQUZ5QixFQUd6QkMsU0FIeUIsQ0FBN0I7QUFLQSxNQUFNQyxPQUFPLEdBQUcsSUFBSUMsR0FBSixDQUFRLENBQ3BCLENBQ0ksU0FESixFQUVJQyxhQUZKLENBRG9CLEVBS3BCLENBQ0ksT0FESixFQUVJQyxXQUZKLENBTG9CLEVBU3BCLENBQ0ksWUFESixFQUVJQyxnQkFGSixDQVRvQixFQWFwQixDQUNJLFFBREosRUFFSUMsWUFGSixDQWJvQixFQWlCcEIsQ0FDSSxRQURKLEVBRUlDLFlBRkosQ0FqQm9CLENBQVIsQ0FBaEI7QUFzQkEsTUFBTUMsbUJBQW1CLEdBQUcsQ0FDeEIsTUFEd0IsRUFFeEIsT0FGd0IsRUFHeEIsV0FId0IsRUFJeEIsWUFKd0IsRUFLeEJSLFNBTHdCLENBQTVCOztBQU9BLFNBQVNTLGVBQVQsQ0FBeUI1USxHQUF6QixFQUE4QjtBQUMxQixTQUFPQSxHQUFHLENBQUNULE9BQUosS0FBZ0I0USxTQUF2QjtBQUNIOztBQUNELFNBQVNVLGlCQUFULENBQTJCN1EsR0FBM0IsRUFBZ0M7QUFDNUIsU0FBT0EsR0FBRyxDQUFDQSxHQUFKLEtBQVltUSxTQUFuQjtBQUNIOztBQUNELFNBQVNXLGNBQVQsQ0FBd0I5USxHQUF4QixFQUE2QjtBQUN6QixTQUFPLE9BQU9BLEdBQVAsS0FBZSxRQUFmLEtBQTRCNFEsZUFBZSxDQUFDNVEsR0FBRCxDQUFmLElBQXdCNlEsaUJBQWlCLENBQUM3USxHQUFELENBQXJFLENBQVA7QUFDSDs7QUFDRCxNQUFNO0FBQUUrUSxFQUFBQSxXQUFXLEVBQUVDLGlCQUFmO0FBQW1DQyxFQUFBQSxVQUFVLEVBQUVDLGdCQUEvQztBQUFrRWxULEVBQUFBLE1BQU0sRUFBRW1ULFlBQTFFO0FBQXlGdFIsRUFBQUEsSUFBSSxFQUFFdVIsVUFBL0Y7QUFBNEdDLEVBQUFBLE9BQU8sRUFBRUM7QUFBckgsSUFBMElDLHNKQUFBLElBQWlDdkQsWUFBWSxDQUFDMEQsa0JBQTlMLEVBQ0E7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLENBQ2IsR0FBR1gsaUJBRFUsRUFFYixHQUFHRSxnQkFGVSxDQUFqQjtBQUlBRixpQkFBaUIsQ0FBQ3hWLElBQWxCLENBQXVCLENBQUNvVyxDQUFELEVBQUlDLENBQUosS0FBUUQsQ0FBQyxHQUFHQyxDQUFuQztBQUVBRixRQUFRLENBQUNuVyxJQUFULENBQWMsQ0FBQ29XLENBQUQsRUFBSUMsQ0FBSixLQUFRRCxDQUFDLEdBQUdDLENBQTFCOztBQUVBLFNBQVNDLFNBQVQsQ0FBbUI1UixLQUFuQixFQUEwQjZSLE1BQTFCLEVBQWtDeEosS0FBbEMsRUFBeUM7QUFDckMsTUFBSUEsS0FBSyxLQUFLd0osTUFBTSxLQUFLLE1BQVgsSUFBcUJBLE1BQU0sS0FBSyxZQUFyQyxDQUFULEVBQTZEO0FBQ3pEO0FBQ0EsVUFBTUMsZUFBZSxHQUFHLG9CQUF4QjtBQUNBLFVBQU1DLFlBQVksR0FBRyxFQUFyQjs7QUFDQSxTQUFJLElBQUlDLEtBQVIsRUFBZUEsS0FBSyxHQUFHRixlQUFlLENBQUNHLElBQWhCLENBQXFCNUosS0FBckIsQ0FBdkIsRUFBb0QySixLQUFwRCxFQUEwRDtBQUN0REQsTUFBQUEsWUFBWSxDQUFDckcsSUFBYixDQUFrQndHLFFBQVEsQ0FBQ0YsS0FBSyxDQUFDLENBQUQsQ0FBTixDQUExQjtBQUNIOztBQUNELFFBQUlELFlBQVksQ0FBQ3JELE1BQWpCLEVBQXlCO0FBQ3JCLFlBQU15RCxhQUFhLEdBQUdsSCxJQUFJLENBQUNtSCxHQUFMLENBQVMsR0FBR0wsWUFBWixJQUE0QixJQUFsRDtBQUNBLGFBQU87QUFDSE0sUUFBQUEsTUFBTSxFQUFFWixRQUFRLENBQUN0TCxNQUFULENBQWlCNkYsQ0FBRCxJQUFLQSxDQUFDLElBQUk4RSxpQkFBaUIsQ0FBQyxDQUFELENBQWpCLEdBQXVCcUIsYUFBakQsQ0FETDtBQUdIRyxRQUFBQSxJQUFJLEVBQUU7QUFISCxPQUFQO0FBS0g7O0FBQ0QsV0FBTztBQUNIRCxNQUFBQSxNQUFNLEVBQUVaLFFBREw7QUFFSGEsTUFBQUEsSUFBSSxFQUFFO0FBRkgsS0FBUDtBQUlIOztBQUNELE1BQUksT0FBT3RTLEtBQVAsS0FBaUIsUUFBakIsSUFBNkI2UixNQUFNLEtBQUssTUFBeEMsSUFBa0RBLE1BQU0sS0FBSyxZQUFqRSxFQUErRTtBQUMzRSxXQUFPO0FBQ0hRLE1BQUFBLE1BQU0sRUFBRXZCLGlCQURMO0FBRUh3QixNQUFBQSxJQUFJLEVBQUU7QUFGSCxLQUFQO0FBSUg7O0FBQ0QsUUFBTUQsTUFBTSxHQUFHLENBQ1gsR0FBRyxJQUFJeEMsR0FBSixFQUFRO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNJN1AsS0FESixFQUVJQSxLQUFLLEdBQUc7QUFBRTtBQUZkLElBR0VZLEdBSEYsQ0FHTzJSLENBQUQsSUFBS2QsUUFBUSxDQUFDMVIsSUFBVCxDQUFlc0QsQ0FBRCxJQUFLQSxDQUFDLElBQUlrUCxDQUF4QixLQUNGZCxRQUFRLENBQUNBLFFBQVEsQ0FBQy9DLE1BQVQsR0FBa0IsQ0FBbkIsQ0FKakIsQ0FSRyxDQURRLENBQWY7QUFnQkEsU0FBTztBQUNIMkQsSUFBQUEsTUFERztBQUVIQyxJQUFBQSxJQUFJLEVBQUU7QUFGSCxHQUFQO0FBSUg7O0FBQ0QsU0FBU0UsZ0JBQVQsQ0FBMEI7QUFBRTFTLEVBQUFBLEdBQUY7QUFBUTJTLEVBQUFBLFdBQVI7QUFBc0JaLEVBQUFBLE1BQXRCO0FBQStCN1IsRUFBQUEsS0FBL0I7QUFBdUMwUyxFQUFBQSxPQUF2QztBQUFpRHJLLEVBQUFBLEtBQWpEO0FBQXlEdkssRUFBQUE7QUFBekQsQ0FBMUIsRUFBOEY7QUFDMUYsTUFBSTJVLFdBQUosRUFBaUI7QUFDYixXQUFPO0FBQ0gzUyxNQUFBQSxHQURHO0FBRUg2UyxNQUFBQSxNQUFNLEVBQUUxQyxTQUZMO0FBR0g1SCxNQUFBQSxLQUFLLEVBQUU0SDtBQUhKLEtBQVA7QUFLSDs7QUFDRCxRQUFNO0FBQUVvQyxJQUFBQSxNQUFGO0FBQVdDLElBQUFBO0FBQVgsTUFBcUJWLFNBQVMsQ0FBQzVSLEtBQUQsRUFBUTZSLE1BQVIsRUFBZ0J4SixLQUFoQixDQUFwQztBQUNBLFFBQU11SyxJQUFJLEdBQUdQLE1BQU0sQ0FBQzNELE1BQVAsR0FBZ0IsQ0FBN0I7QUFDQSxTQUFPO0FBQ0hyRyxJQUFBQSxLQUFLLEVBQUUsQ0FBQ0EsS0FBRCxJQUFVaUssSUFBSSxLQUFLLEdBQW5CLEdBQXlCLE9BQXpCLEdBQW1DakssS0FEdkM7QUFFSHNLLElBQUFBLE1BQU0sRUFBRU4sTUFBTSxDQUFDelIsR0FBUCxDQUFXLENBQUMyUixDQUFELEVBQUkvRCxDQUFKLEtBQVMsR0FBRTFRLE1BQU0sQ0FBQztBQUM3QmdDLE1BQUFBLEdBRDZCO0FBRTdCNFMsTUFBQUEsT0FGNkI7QUFHN0IxUyxNQUFBQSxLQUFLLEVBQUV1UztBQUhzQixLQUFELENBSTdCLElBQUdELElBQUksS0FBSyxHQUFULEdBQWVDLENBQWYsR0FBbUIvRCxDQUFDLEdBQUcsQ0FBRSxHQUFFOEQsSUFBSyxFQUpsQyxFQUtOTyxJQUxNLENBS0QsSUFMQyxDQUZMO0FBUUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EvUyxJQUFBQSxHQUFHLEVBQUVoQyxNQUFNLENBQUM7QUFDUmdDLE1BQUFBLEdBRFE7QUFFUjRTLE1BQUFBLE9BRlE7QUFHUjFTLE1BQUFBLEtBQUssRUFBRXFTLE1BQU0sQ0FBQ08sSUFBRDtBQUhMLEtBQUQ7QUFkUixHQUFQO0FBb0JIOztBQUNELFNBQVNFLE1BQVQsQ0FBZ0JDLENBQWhCLEVBQW1CO0FBQ2YsTUFBSSxPQUFPQSxDQUFQLEtBQWEsUUFBakIsRUFBMkI7QUFDdkIsV0FBT0EsQ0FBUDtBQUNIOztBQUNELE1BQUksT0FBT0EsQ0FBUCxLQUFhLFFBQWpCLEVBQTJCO0FBQ3ZCLFdBQU9iLFFBQVEsQ0FBQ2EsQ0FBRCxFQUFJLEVBQUosQ0FBZjtBQUNIOztBQUNELFNBQU85QyxTQUFQO0FBQ0g7O0FBQ0QsU0FBUytDLGtCQUFULENBQTRCQyxXQUE1QixFQUF5QztBQUNyQyxRQUFNQyxJQUFJLEdBQUdoRCxPQUFPLENBQUNpRCxHQUFSLENBQVlsQyxZQUFaLENBQWI7O0FBQ0EsTUFBSWlDLElBQUosRUFBVTtBQUNOLFdBQU9BLElBQUksQ0FBQzVFLGFBQWEsQ0FBQztBQUN0QmpKLE1BQUFBLElBQUksRUFBRTZMO0FBRGdCLEtBQUQsRUFFdEIrQixXQUZzQixDQUFkLENBQVg7QUFHSDs7QUFDRCxRQUFNLElBQUlHLEtBQUosQ0FBVyx5REFBd0R0RixZQUFZLENBQUN1RixhQUFiLENBQTJCUixJQUEzQixDQUFnQyxJQUFoQyxDQUFzQyxlQUFjNUIsWUFBYSxFQUFwSSxDQUFOO0FBQ0gsRUFDRDtBQUNBOzs7QUFDQSxTQUFTcUMsYUFBVCxDQUF1QkMsR0FBdkIsRUFBNEJ6VCxHQUE1QixFQUFpQytSLE1BQWpDLEVBQXlDMkIsV0FBekMsRUFBc0RDLGlCQUF0RCxFQUF5RTtBQUNyRSxNQUFJLENBQUNGLEdBQUwsRUFBVTtBQUNOO0FBQ0g7O0FBQ0QsUUFBTUcsVUFBVSxHQUFHLE1BQUk7QUFDbkIsUUFBSSxDQUFDSCxHQUFHLENBQUN6VCxHQUFKLENBQVE2VCxVQUFSLENBQW1CLE9BQW5CLENBQUwsRUFBa0M7QUFDOUIsWUFBTXRRLENBQUMsR0FBRyxZQUFZa1EsR0FBWixHQUFrQkEsR0FBRyxDQUFDSyxNQUFKLEVBQWxCLEdBQWlDQyxPQUFPLENBQUNDLE9BQVIsRUFBM0M7QUFDQXpRLE1BQUFBLENBQUMsQ0FBQzBRLEtBQUYsQ0FBUSxNQUFJLENBQ1gsQ0FERCxFQUNHQyxJQURILENBQ1EsTUFBSTtBQUNSLFlBQUlSLFdBQVcsS0FBSyxNQUFwQixFQUE0QjtBQUN4QkQsVUFBQUEsR0FBRyxDQUFDVSxLQUFKLENBQVU5TixNQUFWLEdBQW1CLE1BQW5CO0FBQ0FvTixVQUFBQSxHQUFHLENBQUNVLEtBQUosQ0FBVUMsY0FBVixHQUEyQixNQUEzQjtBQUNBWCxVQUFBQSxHQUFHLENBQUNVLEtBQUosQ0FBVUUsZUFBVixHQUE0QixNQUE1QjtBQUNIOztBQUNEdkUsUUFBQUEsZUFBZSxDQUFDd0UsR0FBaEIsQ0FBb0J0VSxHQUFwQjs7QUFDQSxZQUFJMlQsaUJBQUosRUFBdUI7QUFDbkIsZ0JBQU07QUFBRVksWUFBQUEsWUFBRjtBQUFpQkMsWUFBQUE7QUFBakIsY0FBb0NmLEdBQTFDLENBRG1CLENBRW5CO0FBQ0E7O0FBQ0FFLFVBQUFBLGlCQUFpQixDQUFDO0FBQ2RZLFlBQUFBLFlBRGM7QUFFZEMsWUFBQUE7QUFGYyxXQUFELENBQWpCO0FBSUg7O0FBQ0Qsa0JBQTJDO0FBQ3ZDLGNBQUlDLEdBQUo7O0FBQ0EsY0FBSSxDQUFDQSxHQUFHLEdBQUdoQixHQUFHLENBQUNpQixhQUFYLE1BQThCLElBQTlCLElBQXNDRCxHQUFHLEtBQUssS0FBSyxDQUFuRCxHQUF1RCxLQUFLLENBQTVELEdBQWdFQSxHQUFHLENBQUNDLGFBQXhFLEVBQXVGO0FBQ25GLGtCQUFNQyxNQUFNLEdBQUdDLGdCQUFnQixDQUFDbkIsR0FBRyxDQUFDaUIsYUFBSixDQUFrQkEsYUFBbkIsQ0FBL0I7O0FBQ0EsZ0JBQUkzQyxNQUFNLEtBQUssWUFBWCxJQUEyQjRDLE1BQU0sQ0FBQzFXLE9BQVAsS0FBbUIsTUFBbEQsRUFBMEQ7QUFDdEQ5QyxjQUFBQSxPQUFPLENBQUMwWixJQUFSLENBQWMsbUJBQWtCN1UsR0FBSSwwSEFBcEM7QUFDSCxhQUZELE1BRU8sSUFBSStSLE1BQU0sS0FBSyxNQUFYLElBQXFCNEMsTUFBTSxDQUFDRyxRQUFQLEtBQW9CLFVBQTdDLEVBQXlEO0FBQzVEM1osY0FBQUEsT0FBTyxDQUFDMFosSUFBUixDQUFjLG1CQUFrQjdVLEdBQUksMkRBQTBEMlUsTUFBTSxDQUFDRyxRQUFTLHVGQUE5RztBQUNIO0FBQ0o7QUFDSjtBQUNKLE9BNUJEO0FBNkJIO0FBQ0osR0FqQ0Q7O0FBa0NBLE1BQUlyQixHQUFHLENBQUNzQixRQUFSLEVBQWtCO0FBQ2Q7QUFDQTtBQUNBO0FBQ0FuQixJQUFBQSxVQUFVO0FBQ2IsR0FMRCxNQUtPO0FBQ0hILElBQUFBLEdBQUcsQ0FBQ3VCLE1BQUosR0FBYXBCLFVBQWI7QUFDSDtBQUNKOztBQUNELFNBQVNsRyxNQUFULENBQWdCdUgsTUFBaEIsRUFBd0I7QUFDcEIsTUFBSTtBQUFFalYsSUFBQUEsR0FBRjtBQUFRdUksSUFBQUEsS0FBUjtBQUFnQm9LLElBQUFBLFdBQVcsR0FBRSxLQUE3QjtBQUFxQ3VDLElBQUFBLFFBQVEsR0FBRSxLQUEvQztBQUF1REMsSUFBQUEsT0FBdkQ7QUFBaUVDLElBQUFBLFlBQVksR0FBRSxPQUEvRTtBQUF5RkMsSUFBQUEsU0FBekY7QUFBcUd6QyxJQUFBQSxPQUFyRztBQUErRzFTLElBQUFBLEtBQS9HO0FBQXVIQyxJQUFBQSxNQUF2SDtBQUFnSW1WLElBQUFBLFNBQWhJO0FBQTRJQyxJQUFBQSxjQUE1STtBQUE2SjVCLElBQUFBLGlCQUE3SjtBQUFpTDNWLElBQUFBLE1BQU0sR0FBRWtWLGtCQUF6TDtBQUE4TVEsSUFBQUEsV0FBVyxHQUFFLE9BQTNOO0FBQXFPOEIsSUFBQUE7QUFBck8sTUFBc1BQLE1BQTFQO0FBQUEsTUFBa1FRLEdBQUcsR0FBR3BHLHdCQUF3QixDQUFDNEYsTUFBRCxFQUFTLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsYUFBakIsRUFBZ0MsVUFBaEMsRUFBNEMsU0FBNUMsRUFBdUQsY0FBdkQsRUFBdUUsV0FBdkUsRUFBb0YsU0FBcEYsRUFBK0YsT0FBL0YsRUFBd0csUUFBeEcsRUFBa0gsV0FBbEgsRUFBK0gsZ0JBQS9ILEVBQWlKLG1CQUFqSixFQUFzSyxRQUF0SyxFQUFnTCxhQUFoTCxFQUErTCxhQUEvTCxDQUFULENBQWhTOztBQUNBLE1BQUlTLElBQUksR0FBR0QsR0FBWDtBQUNBLE1BQUkxRCxNQUFNLEdBQUd4SixLQUFLLEdBQUcsWUFBSCxHQUFrQixXQUFwQzs7QUFDQSxNQUFJLFlBQVltTixJQUFoQixFQUFzQjtBQUNsQjtBQUNBLFFBQUlBLElBQUksQ0FBQzNELE1BQVQsRUFBaUJBLE1BQU0sR0FBRzJELElBQUksQ0FBQzNELE1BQWQsQ0FGQyxDQUdsQjs7QUFDQSxXQUFPMkQsSUFBSSxDQUFDLFFBQUQsQ0FBWDtBQUNIOztBQUNELE1BQUlDLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxNQUFJN0UsY0FBYyxDQUFDOVEsR0FBRCxDQUFsQixFQUF5QjtBQUNyQixVQUFNNFYsZUFBZSxHQUFHaEYsZUFBZSxDQUFDNVEsR0FBRCxDQUFmLEdBQXVCQSxHQUFHLENBQUNULE9BQTNCLEdBQXFDUyxHQUE3RDs7QUFDQSxRQUFJLENBQUM0VixlQUFlLENBQUM1VixHQUFyQixFQUEwQjtBQUN0QixZQUFNLElBQUlzVCxLQUFKLENBQVcsOElBQTZJdUMsSUFBSSxDQUFDQyxTQUFMLENBQWVGLGVBQWYsQ0FBZ0MsRUFBeEwsQ0FBTjtBQUNIOztBQUNESixJQUFBQSxXQUFXLEdBQUdBLFdBQVcsSUFBSUksZUFBZSxDQUFDSixXQUE3QztBQUNBRyxJQUFBQSxTQUFTLEdBQUdDLGVBQWUsQ0FBQzVWLEdBQTVCOztBQUNBLFFBQUksQ0FBQytSLE1BQUQsSUFBV0EsTUFBTSxLQUFLLE1BQTFCLEVBQWtDO0FBQzlCNVIsTUFBQUEsTUFBTSxHQUFHQSxNQUFNLElBQUl5VixlQUFlLENBQUN6VixNQUFuQztBQUNBRCxNQUFBQSxLQUFLLEdBQUdBLEtBQUssSUFBSTBWLGVBQWUsQ0FBQzFWLEtBQWpDOztBQUNBLFVBQUksQ0FBQzBWLGVBQWUsQ0FBQ3pWLE1BQWpCLElBQTJCLENBQUN5VixlQUFlLENBQUMxVixLQUFoRCxFQUF1RDtBQUNuRCxjQUFNLElBQUlvVCxLQUFKLENBQVcsMkpBQTBKdUMsSUFBSSxDQUFDQyxTQUFMLENBQWVGLGVBQWYsQ0FBZ0MsRUFBck0sQ0FBTjtBQUNIO0FBQ0o7QUFDSjs7QUFDRDVWLEVBQUFBLEdBQUcsR0FBRyxPQUFPQSxHQUFQLEtBQWUsUUFBZixHQUEwQkEsR0FBMUIsR0FBZ0MyVixTQUF0QztBQUNBLFFBQU1JLFFBQVEsR0FBRy9DLE1BQU0sQ0FBQzlTLEtBQUQsQ0FBdkI7QUFDQSxRQUFNOFYsU0FBUyxHQUFHaEQsTUFBTSxDQUFDN1MsTUFBRCxDQUF4QjtBQUNBLFFBQU04VixVQUFVLEdBQUdqRCxNQUFNLENBQUNKLE9BQUQsQ0FBekI7QUFDQSxNQUFJc0QsTUFBTSxHQUFHLENBQUNoQixRQUFELEtBQWNDLE9BQU8sS0FBSyxNQUFaLElBQXNCLE9BQU9BLE9BQVAsS0FBbUIsV0FBdkQsQ0FBYjs7QUFDQSxNQUFJblYsR0FBRyxDQUFDNlQsVUFBSixDQUFlLE9BQWYsS0FBMkI3VCxHQUFHLENBQUM2VCxVQUFKLENBQWUsT0FBZixDQUEvQixFQUF3RDtBQUNwRDtBQUNBbEIsSUFBQUEsV0FBVyxHQUFHLElBQWQ7QUFDQXVELElBQUFBLE1BQU0sR0FBRyxLQUFUO0FBQ0g7O0FBQ0QsTUFBSSxLQUFKLEVBQStELEVBRTlEOztBQUNELFlBQTJDO0FBQ3ZDLFFBQUksQ0FBQ2xXLEdBQUwsRUFBVTtBQUNOLFlBQU0sSUFBSXNULEtBQUosQ0FBVywwSEFBeUh1QyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNySjVWLFFBQUFBLEtBRHFKO0FBRXJKQyxRQUFBQSxNQUZxSjtBQUdySnlTLFFBQUFBO0FBSHFKLE9BQWYsQ0FJdkksRUFKRyxDQUFOO0FBS0g7O0FBQ0QsUUFBSSxDQUFDakMsbUJBQW1CLENBQUN5RixRQUFwQixDQUE2QnJFLE1BQTdCLENBQUwsRUFBMkM7QUFDdkMsWUFBTSxJQUFJdUIsS0FBSixDQUFXLG1CQUFrQnRULEdBQUksOENBQTZDK1IsTUFBTyxzQkFBcUJwQixtQkFBbUIsQ0FBQzdQLEdBQXBCLENBQXdCdVYsTUFBeEIsRUFBZ0N0RCxJQUFoQyxDQUFxQyxHQUFyQyxDQUEwQyxHQUFwSixDQUFOO0FBQ0g7O0FBQ0QsUUFBSSxPQUFPZ0QsUUFBUCxLQUFvQixXQUFwQixJQUFtQ08sS0FBSyxDQUFDUCxRQUFELENBQXhDLElBQXNELE9BQU9DLFNBQVAsS0FBcUIsV0FBckIsSUFBb0NNLEtBQUssQ0FBQ04sU0FBRCxDQUFuRyxFQUFnSDtBQUM1RyxZQUFNLElBQUkxQyxLQUFKLENBQVcsbUJBQWtCdFQsR0FBSSw2RUFBakMsQ0FBTjtBQUNIOztBQUNELFFBQUkrUixNQUFNLEtBQUssTUFBWCxLQUFzQjdSLEtBQUssSUFBSUMsTUFBL0IsQ0FBSixFQUE0QztBQUN4Q2hGLE1BQUFBLE9BQU8sQ0FBQzBaLElBQVIsQ0FBYyxtQkFBa0I3VSxHQUFJLDJGQUFwQztBQUNIOztBQUNELFFBQUksQ0FBQ2tRLG9CQUFvQixDQUFDa0csUUFBckIsQ0FBOEJqQixPQUE5QixDQUFMLEVBQTZDO0FBQ3pDLFlBQU0sSUFBSTdCLEtBQUosQ0FBVyxtQkFBa0J0VCxHQUFJLCtDQUE4Q21WLE9BQVEsc0JBQXFCakYsb0JBQW9CLENBQUNwUCxHQUFyQixDQUF5QnVWLE1BQXpCLEVBQWlDdEQsSUFBakMsQ0FBc0MsR0FBdEMsQ0FBMkMsR0FBdkosQ0FBTjtBQUNIOztBQUNELFFBQUltQyxRQUFRLElBQUlDLE9BQU8sS0FBSyxNQUE1QixFQUFvQztBQUNoQyxZQUFNLElBQUk3QixLQUFKLENBQVcsbUJBQWtCdFQsR0FBSSxpRkFBakMsQ0FBTjtBQUNIOztBQUNELFFBQUkwVCxXQUFXLEtBQUssTUFBcEIsRUFBNEI7QUFDeEIsVUFBSTNCLE1BQU0sS0FBSyxNQUFYLElBQXFCLENBQUNnRSxRQUFRLElBQUksQ0FBYixLQUFtQkMsU0FBUyxJQUFJLENBQWhDLElBQXFDLElBQTlELEVBQW9FO0FBQ2hFN2EsUUFBQUEsT0FBTyxDQUFDMFosSUFBUixDQUFjLG1CQUFrQjdVLEdBQUksc0dBQXBDO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDd1YsV0FBTCxFQUFrQjtBQUNkLGNBQU1lLGNBQWMsR0FBRyxDQUNuQixNQURtQixFQUVuQixLQUZtQixFQUduQixNQUhtQixDQUF2QixDQUlFO0FBSkY7QUFNQSxjQUFNLElBQUlqRCxLQUFKLENBQVcsbUJBQWtCdFQsR0FBSTtBQUN2RDtBQUNBO0FBQ0EsbUdBQW1HdVcsY0FBYyxDQUFDeEQsSUFBZixDQUFvQixHQUFwQixDQUF5QjtBQUM1SDtBQUNBLGdGQUxzQixDQUFOO0FBTUg7QUFDSjs7QUFDRCxRQUFJLFNBQVMyQyxJQUFiLEVBQW1CO0FBQ2Z2YSxNQUFBQSxPQUFPLENBQUMwWixJQUFSLENBQWMsbUJBQWtCN1UsR0FBSSxpR0FBcEM7QUFDSDs7QUFDRCxRQUFJLFdBQVcwVixJQUFmLEVBQXFCO0FBQ2pCdmEsTUFBQUEsT0FBTyxDQUFDMFosSUFBUixDQUFjLG1CQUFrQjdVLEdBQUksdUZBQXBDO0FBQ0g7O0FBQ0QsVUFBTXdXLElBQUksR0FBR3JMLElBQUksQ0FBQ3NMLEtBQUwsQ0FBV3RMLElBQUksQ0FBQ3VMLE1BQUwsS0FBZ0IsSUFBM0IsSUFBbUMsR0FBaEQ7O0FBQ0EsUUFBSSxDQUFDL0QsV0FBRCxJQUFnQixDQUFDM1UsTUFBTSxDQUFDO0FBQ3hCZ0MsTUFBQUEsR0FEd0I7QUFFeEJFLE1BQUFBLEtBQUssRUFBRXNXLElBRmlCO0FBR3hCNUQsTUFBQUEsT0FBTyxFQUFFO0FBSGUsS0FBRCxDQUFOLENBSWxCd0QsUUFKa0IsQ0FJVEksSUFBSSxDQUFDRyxRQUFMLEVBSlMsQ0FBckIsRUFJOEI7QUFDMUJ4YixNQUFBQSxPQUFPLENBQUMwWixJQUFSLENBQWMsbUJBQWtCN1UsR0FBSSx5SEFBdkIsR0FBbUosK0VBQWhLO0FBQ0g7QUFDSjs7QUFDRCxRQUFNLENBQUM0VyxNQUFELEVBQVNDLGFBQVQsSUFBMEIsQ0FBQyxHQUFHNUksZ0JBQUosRUFBc0I2SSxlQUF0QixDQUFzQztBQUNsRUMsSUFBQUEsVUFBVSxFQUFFM0IsWUFEc0Q7QUFFbEU0QixJQUFBQSxRQUFRLEVBQUUsQ0FBQ2Q7QUFGdUQsR0FBdEMsQ0FBaEM7QUFJQSxRQUFNZSxTQUFTLEdBQUcsQ0FBQ2YsTUFBRCxJQUFXVyxhQUE3QjtBQUNBLE1BQUlLLFlBQUo7QUFDQSxNQUFJQyxVQUFKO0FBQ0EsTUFBSUMsUUFBSjtBQUNBLE1BQUlDLFFBQVEsR0FBRztBQUNYdkMsSUFBQUEsUUFBUSxFQUFFLFVBREM7QUFFWHdDLElBQUFBLEdBQUcsRUFBRSxDQUZNO0FBR1hDLElBQUFBLElBQUksRUFBRSxDQUhLO0FBSVhDLElBQUFBLE1BQU0sRUFBRSxDQUpHO0FBS1gzUyxJQUFBQSxLQUFLLEVBQUUsQ0FMSTtBQU1YcUksSUFBQUEsU0FBUyxFQUFFLFlBTkE7QUFPWG5KLElBQUFBLE9BQU8sRUFBRSxDQVBFO0FBUVh5SSxJQUFBQSxNQUFNLEVBQUUsTUFSRztBQVNYekUsSUFBQUEsTUFBTSxFQUFFLE1BVEc7QUFVWDlKLElBQUFBLE9BQU8sRUFBRSxPQVZFO0FBV1hpQyxJQUFBQSxLQUFLLEVBQUUsQ0FYSTtBQVlYQyxJQUFBQSxNQUFNLEVBQUUsQ0FaRztBQWFYc1gsSUFBQUEsUUFBUSxFQUFFLE1BYkM7QUFjWHROLElBQUFBLFFBQVEsRUFBRSxNQWRDO0FBZVg1SixJQUFBQSxTQUFTLEVBQUUsTUFmQTtBQWdCWG1YLElBQUFBLFNBQVMsRUFBRSxNQWhCQTtBQWlCWHBDLElBQUFBLFNBakJXO0FBa0JYQyxJQUFBQTtBQWxCVyxHQUFmO0FBb0JBLFFBQU1vQyxTQUFTLEdBQUdqRSxXQUFXLEtBQUssTUFBaEIsR0FBeUI7QUFDdkNyTixJQUFBQSxNQUFNLEVBQUUsWUFEK0I7QUFFdkMrTixJQUFBQSxjQUFjLEVBQUVrQixTQUFTLElBQUksT0FGVTtBQUd2Q2pCLElBQUFBLGVBQWUsRUFBRyxRQUFPbUIsV0FBWSxJQUhFO0FBSXZDb0MsSUFBQUEsa0JBQWtCLEVBQUVyQyxjQUFjLElBQUk7QUFKQyxHQUF6QixHQUtkLEVBTEo7O0FBT0EsTUFBSXhELE1BQU0sS0FBSyxNQUFmLEVBQXVCO0FBQ25CO0FBQ0FtRixJQUFBQSxZQUFZLEdBQUc7QUFDWGpaLE1BQUFBLE9BQU8sRUFBRSxPQURFO0FBRVg0WixNQUFBQSxRQUFRLEVBQUUsUUFGQztBQUdYL0MsTUFBQUEsUUFBUSxFQUFFLFVBSEM7QUFJWHdDLE1BQUFBLEdBQUcsRUFBRSxDQUpNO0FBS1hDLE1BQUFBLElBQUksRUFBRSxDQUxLO0FBTVhDLE1BQUFBLE1BQU0sRUFBRSxDQU5HO0FBT1gzUyxNQUFBQSxLQUFLLEVBQUUsQ0FQSTtBQVFYcUksTUFBQUEsU0FBUyxFQUFFLFlBUkE7QUFTWG5GLE1BQUFBLE1BQU0sRUFBRTtBQVRHLEtBQWY7QUFXSCxHQWJELE1BYU8sSUFBSSxPQUFPZ08sUUFBUCxLQUFvQixXQUFwQixJQUFtQyxPQUFPQyxTQUFQLEtBQXFCLFdBQTVELEVBQXlFO0FBQzVFO0FBQ0EsVUFBTThCLFFBQVEsR0FBRzlCLFNBQVMsR0FBR0QsUUFBN0I7QUFDQSxVQUFNN1csVUFBVSxHQUFHb1gsS0FBSyxDQUFDd0IsUUFBRCxDQUFMLEdBQWtCLE1BQWxCLEdBQTRCLEdBQUVBLFFBQVEsR0FBRyxHQUFJLEdBQWhFOztBQUNBLFFBQUkvRixNQUFNLEtBQUssWUFBZixFQUE2QjtBQUN6QjtBQUNBbUYsTUFBQUEsWUFBWSxHQUFHO0FBQ1hqWixRQUFBQSxPQUFPLEVBQUUsT0FERTtBQUVYNFosUUFBQUEsUUFBUSxFQUFFLFFBRkM7QUFHWC9DLFFBQUFBLFFBQVEsRUFBRSxVQUhDO0FBSVg1SCxRQUFBQSxTQUFTLEVBQUUsWUFKQTtBQUtYbkYsUUFBQUEsTUFBTSxFQUFFO0FBTEcsT0FBZjtBQU9Bb1AsTUFBQUEsVUFBVSxHQUFHO0FBQ1RsWixRQUFBQSxPQUFPLEVBQUUsT0FEQTtBQUVUaVAsUUFBQUEsU0FBUyxFQUFFLFlBRkY7QUFHVGhPLFFBQUFBO0FBSFMsT0FBYjtBQUtILEtBZEQsTUFjTyxJQUFJNlMsTUFBTSxLQUFLLFdBQWYsRUFBNEI7QUFDL0I7QUFDQW1GLE1BQUFBLFlBQVksR0FBRztBQUNYalosUUFBQUEsT0FBTyxFQUFFLGNBREU7QUFFWGtNLFFBQUFBLFFBQVEsRUFBRSxNQUZDO0FBR1gwTixRQUFBQSxRQUFRLEVBQUUsUUFIQztBQUlYL0MsUUFBQUEsUUFBUSxFQUFFLFVBSkM7QUFLWDVILFFBQUFBLFNBQVMsRUFBRSxZQUxBO0FBTVhuRixRQUFBQSxNQUFNLEVBQUU7QUFORyxPQUFmO0FBUUFvUCxNQUFBQSxVQUFVLEdBQUc7QUFDVGpLLFFBQUFBLFNBQVMsRUFBRSxZQURGO0FBRVRqUCxRQUFBQSxPQUFPLEVBQUUsT0FGQTtBQUdUa00sUUFBQUEsUUFBUSxFQUFFO0FBSEQsT0FBYjtBQUtBaU4sTUFBQUEsUUFBUSxHQUFJLGVBQWNyQixRQUFTLGFBQVlDLFNBQVUsc0RBQXpEO0FBQ0gsS0FoQk0sTUFnQkEsSUFBSWpFLE1BQU0sS0FBSyxPQUFmLEVBQXdCO0FBQzNCO0FBQ0FtRixNQUFBQSxZQUFZLEdBQUc7QUFDWFcsUUFBQUEsUUFBUSxFQUFFLFFBREM7QUFFWDNLLFFBQUFBLFNBQVMsRUFBRSxZQUZBO0FBR1hqUCxRQUFBQSxPQUFPLEVBQUUsY0FIRTtBQUlYNlcsUUFBQUEsUUFBUSxFQUFFLFVBSkM7QUFLWDVVLFFBQUFBLEtBQUssRUFBRTZWLFFBTEk7QUFNWDVWLFFBQUFBLE1BQU0sRUFBRTZWO0FBTkcsT0FBZjtBQVFIO0FBQ0osR0E3Q00sTUE2Q0E7QUFDSDtBQUNBLGNBQTJDO0FBQ3ZDLFlBQU0sSUFBSTFDLEtBQUosQ0FBVyxtQkFBa0J0VCxHQUFJLHlFQUFqQyxDQUFOO0FBQ0g7QUFDSjs7QUFDRCxNQUFJK1gsYUFBYSxHQUFHO0FBQ2hCL1gsSUFBQUEsR0FBRyxFQUFFLGdGQURXO0FBRWhCNlMsSUFBQUEsTUFBTSxFQUFFMUMsU0FGUTtBQUdoQjVILElBQUFBLEtBQUssRUFBRTRIO0FBSFMsR0FBcEI7O0FBS0EsTUFBSThHLFNBQUosRUFBZTtBQUNYYyxJQUFBQSxhQUFhLEdBQUdyRixnQkFBZ0IsQ0FBQztBQUM3QjFTLE1BQUFBLEdBRDZCO0FBRTdCMlMsTUFBQUEsV0FGNkI7QUFHN0JaLE1BQUFBLE1BSDZCO0FBSTdCN1IsTUFBQUEsS0FBSyxFQUFFNlYsUUFKc0I7QUFLN0JuRCxNQUFBQSxPQUFPLEVBQUVxRCxVQUxvQjtBQU03QjFOLE1BQUFBLEtBTjZCO0FBTzdCdkssTUFBQUE7QUFQNkIsS0FBRCxDQUFoQztBQVNIOztBQUNELE1BQUlnYSxTQUFTLEdBQUdoWSxHQUFoQjtBQUNBLFNBQU8sYUFBYzJOLE1BQU0sQ0FBQ3BPLE9BQVAsQ0FBZTBZLGFBQWYsQ0FBNkIsS0FBN0IsRUFBb0M7QUFDckQ5RCxJQUFBQSxLQUFLLEVBQUUrQztBQUQ4QyxHQUFwQyxFQUVsQkMsVUFBVSxHQUFHLGFBQWN4SixNQUFNLENBQUNwTyxPQUFQLENBQWUwWSxhQUFmLENBQTZCLEtBQTdCLEVBQW9DO0FBQzlEOUQsSUFBQUEsS0FBSyxFQUFFZ0Q7QUFEdUQsR0FBcEMsRUFFM0JDLFFBQVEsR0FBRyxhQUFjekosTUFBTSxDQUFDcE8sT0FBUCxDQUFlMFksYUFBZixDQUE2QixLQUE3QixFQUFvQztBQUM1RDlELElBQUFBLEtBQUssRUFBRTtBQUNIaEssTUFBQUEsUUFBUSxFQUFFLE1BRFA7QUFFSGxNLE1BQUFBLE9BQU8sRUFBRSxPQUZOO0FBR0g4SixNQUFBQSxNQUFNLEVBQUUsQ0FITDtBQUlIeUUsTUFBQUEsTUFBTSxFQUFFLE1BSkw7QUFLSHpJLE1BQUFBLE9BQU8sRUFBRTtBQUxOLEtBRHFEO0FBUTVEbVUsSUFBQUEsR0FBRyxFQUFFLEVBUnVEO0FBUzVELG1CQUFlLElBVDZDO0FBVTVEbFksSUFBQUEsR0FBRyxFQUFHLDZCQUE0QixDQUFDLEdBQUcrTixTQUFKLEVBQWVvSyxRQUFmLENBQXdCZixRQUF4QixDQUFrQztBQVZSLEdBQXBDLENBQWpCLEdBV04sSUFieUIsQ0FBakIsR0FhQSxJQWZRLEVBZUYsYUFBY3pKLE1BQU0sQ0FBQ3BPLE9BQVAsQ0FBZTBZLGFBQWYsQ0FBNkIsS0FBN0IsRUFBb0MzSyxNQUFNLENBQUM4SyxNQUFQLENBQWMsRUFBZCxFQUNsRTFDLElBRGtFLEVBQzVEcUMsYUFENEQsRUFDN0M7QUFDcEJNLElBQUFBLFFBQVEsRUFBRSxPQURVO0FBRXBCLGlCQUFhdEcsTUFGTztBQUdwQnNELElBQUFBLFNBQVMsRUFBRUEsU0FIUztBQUlwQlosSUFBQUEsR0FBRyxFQUFHaEIsR0FBRCxJQUFPO0FBQ1JtRCxNQUFBQSxNQUFNLENBQUNuRCxHQUFELENBQU47QUFDQUQsTUFBQUEsYUFBYSxDQUFDQyxHQUFELEVBQU11RSxTQUFOLEVBQWlCakcsTUFBakIsRUFBeUIyQixXQUF6QixFQUFzQ0MsaUJBQXRDLENBQWI7QUFDSCxLQVBtQjtBQVFwQlEsSUFBQUEsS0FBSyxFQUFFM0YsYUFBYSxDQUFDLEVBQUQsRUFDakI2SSxRQURpQixFQUNQTSxTQURPO0FBUkEsR0FENkMsQ0FBcEMsQ0FmWixFQTBCaEIsYUFBY2hLLE1BQU0sQ0FBQ3BPLE9BQVAsQ0FBZTBZLGFBQWYsQ0FBNkIsVUFBN0IsRUFBeUMsSUFBekMsRUFBK0MsYUFBY3RLLE1BQU0sQ0FBQ3BPLE9BQVAsQ0FBZTBZLGFBQWYsQ0FBNkIsS0FBN0IsRUFBb0MzSyxNQUFNLENBQUM4SyxNQUFQLENBQWMsRUFBZCxFQUNqSDFDLElBRGlILEVBQzNHaEQsZ0JBQWdCLENBQUM7QUFDdEIxUyxJQUFBQSxHQURzQjtBQUV0QjJTLElBQUFBLFdBRnNCO0FBR3RCWixJQUFBQSxNQUhzQjtBQUl0QjdSLElBQUFBLEtBQUssRUFBRTZWLFFBSmU7QUFLdEJuRCxJQUFBQSxPQUFPLEVBQUVxRCxVQUxhO0FBTXRCMU4sSUFBQUEsS0FOc0I7QUFPdEJ2SyxJQUFBQTtBQVBzQixHQUFELENBRDJGLEVBU2hIO0FBQ0FxYSxJQUFBQSxRQUFRLEVBQUUsT0FEVjtBQUVBLGlCQUFhdEcsTUFGYjtBQUdBb0MsSUFBQUEsS0FBSyxFQUFFa0QsUUFIUDtBQUlBaEMsSUFBQUEsU0FBUyxFQUFFQSxTQUpYO0FBS0FGLElBQUFBLE9BQU8sRUFBRUEsT0FBTyxJQUFJO0FBTHBCLEdBVGdILENBQXBDLENBQTdELENBMUJFLEVBeUNmRCxRQUFRLEdBQUc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBY3ZILEVBQUFBLE1BQU0sQ0FBQ3BPLE9BQVAsQ0FBZTBZLGFBQWYsQ0FBNkJuSyxLQUFLLENBQUN2TyxPQUFuQyxFQUE0QyxJQUE1QyxFQUFrRCxhQUFjb08sTUFBTSxDQUFDcE8sT0FBUCxDQUFlMFksYUFBZixDQUE2QixNQUE3QixFQUFxQztBQUMvRzdTLElBQUFBLEdBQUcsRUFBRSxZQUFZMlMsYUFBYSxDQUFDL1gsR0FBMUIsR0FBZ0MrWCxhQUFhLENBQUNsRixNQUE5QyxHQUF1RGtGLGFBQWEsQ0FBQ3hQLEtBRHFDO0FBRS9HK1AsSUFBQUEsR0FBRyxFQUFFLFNBRjBHO0FBRy9HQyxJQUFBQSxFQUFFLEVBQUUsT0FIMkc7QUFJL0dDLElBQUFBLElBQUksRUFBRVQsYUFBYSxDQUFDbEYsTUFBZCxHQUF1QjFDLFNBQXZCLEdBQW1DNEgsYUFBYSxDQUFDL1gsR0FKd0Q7QUFLL0c7QUFDQXlZLElBQUFBLFdBQVcsRUFBRVYsYUFBYSxDQUFDbEYsTUFOb0Y7QUFPL0c7QUFDQTZGLElBQUFBLFVBQVUsRUFBRVgsYUFBYSxDQUFDeFA7QUFScUYsR0FBckMsQ0FBaEUsQ0FMQSxHQWNSLElBdkRlLENBQXJCO0FBd0RIOztBQUNELFNBQVNvUSxZQUFULENBQXNCM1ksR0FBdEIsRUFBMkI7QUFDdkIsU0FBT0EsR0FBRyxDQUFDLENBQUQsQ0FBSCxLQUFXLEdBQVgsR0FBaUJBLEdBQUcsQ0FBQzRZLEtBQUosQ0FBVSxDQUFWLENBQWpCLEdBQWdDNVksR0FBdkM7QUFDSDs7QUFDRCxTQUFTdVEsV0FBVCxDQUFxQjtBQUFFaEwsRUFBQUEsSUFBRjtBQUFTdkYsRUFBQUEsR0FBVDtBQUFlRSxFQUFBQSxLQUFmO0FBQXVCMFMsRUFBQUE7QUFBdkIsQ0FBckIsRUFBd0Q7QUFDcEQ7QUFDQSxRQUFNL1gsR0FBRyxHQUFHLElBQUlnZSxHQUFKLENBQVMsR0FBRXRULElBQUssR0FBRW9ULFlBQVksQ0FBQzNZLEdBQUQsQ0FBTSxFQUFwQyxDQUFaO0FBQ0EsUUFBTThZLE1BQU0sR0FBR2plLEdBQUcsQ0FBQ2tlLFlBQW5CO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLE1BQVgsRUFBbUJGLE1BQU0sQ0FBQ3pGLEdBQVAsQ0FBVyxNQUFYLEtBQXNCLFFBQXpDO0FBQ0F5RixFQUFBQSxNQUFNLENBQUNFLEdBQVAsQ0FBVyxLQUFYLEVBQWtCRixNQUFNLENBQUN6RixHQUFQLENBQVcsS0FBWCxLQUFxQixLQUF2QztBQUNBeUYsRUFBQUEsTUFBTSxDQUFDRSxHQUFQLENBQVcsR0FBWCxFQUFnQkYsTUFBTSxDQUFDekYsR0FBUCxDQUFXLEdBQVgsS0FBbUJuVCxLQUFLLENBQUN5VyxRQUFOLEVBQW5DOztBQUNBLE1BQUkvRCxPQUFKLEVBQWE7QUFDVGtHLElBQUFBLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLEdBQVgsRUFBZ0JwRyxPQUFPLENBQUMrRCxRQUFSLEVBQWhCO0FBQ0g7O0FBQ0QsU0FBTzliLEdBQUcsQ0FBQzJkLElBQVg7QUFDSDs7QUFDRCxTQUFTL0gsWUFBVCxDQUFzQjtBQUFFbEwsRUFBQUEsSUFBRjtBQUFTdkYsRUFBQUEsR0FBVDtBQUFlRSxFQUFBQTtBQUFmLENBQXRCLEVBQStDO0FBQzNDLFNBQVEsR0FBRXFGLElBQUssR0FBRW9ULFlBQVksQ0FBQzNZLEdBQUQsQ0FBTSxZQUFXRSxLQUFNLEVBQXBEO0FBQ0g7O0FBQ0QsU0FBU3NRLGdCQUFULENBQTBCO0FBQUVqTCxFQUFBQSxJQUFGO0FBQVN2RixFQUFBQSxHQUFUO0FBQWVFLEVBQUFBLEtBQWY7QUFBdUIwUyxFQUFBQTtBQUF2QixDQUExQixFQUE2RDtBQUN6RDtBQUNBLFFBQU1rRyxNQUFNLEdBQUcsQ0FDWCxRQURXLEVBRVgsU0FGVyxFQUdYLE9BQU81WSxLQUhJLEVBSVgsUUFBUTBTLE9BQU8sSUFBSSxNQUFuQixDQUpXLENBQWY7QUFNQSxNQUFJcUcsWUFBWSxHQUFHSCxNQUFNLENBQUMvRixJQUFQLENBQVksR0FBWixJQUFtQixHQUF0QztBQUNBLFNBQVEsR0FBRXhOLElBQUssR0FBRTBULFlBQWEsR0FBRU4sWUFBWSxDQUFDM1ksR0FBRCxDQUFNLEVBQWxEO0FBQ0g7O0FBQ0QsU0FBUzBRLFlBQVQsQ0FBc0I7QUFBRTFRLEVBQUFBO0FBQUYsQ0FBdEIsRUFBZ0M7QUFDNUIsUUFBTSxJQUFJc1QsS0FBSixDQUFXLG1CQUFrQnRULEdBQUksNkJBQXZCLEdBQXVELHlFQUFqRSxDQUFOO0FBQ0g7O0FBQ0QsU0FBU3NRLGFBQVQsQ0FBdUI7QUFBRS9LLEVBQUFBLElBQUY7QUFBU3ZGLEVBQUFBLEdBQVQ7QUFBZUUsRUFBQUEsS0FBZjtBQUF1QjBTLEVBQUFBO0FBQXZCLENBQXZCLEVBQTBEO0FBQ3RELFlBQTJDO0FBQ3ZDLFVBQU1zRyxhQUFhLEdBQUcsRUFBdEIsQ0FEdUMsQ0FFdkM7O0FBQ0EsUUFBSSxDQUFDbFosR0FBTCxFQUFVa1osYUFBYSxDQUFDdE4sSUFBZCxDQUFtQixLQUFuQjtBQUNWLFFBQUksQ0FBQzFMLEtBQUwsRUFBWWdaLGFBQWEsQ0FBQ3ROLElBQWQsQ0FBbUIsT0FBbkI7O0FBQ1osUUFBSXNOLGFBQWEsQ0FBQ3RLLE1BQWQsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDMUIsWUFBTSxJQUFJMEUsS0FBSixDQUFXLG9DQUFtQzRGLGFBQWEsQ0FBQ25HLElBQWQsQ0FBbUIsSUFBbkIsQ0FBeUIsZ0dBQStGOEMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDdkw5VixRQUFBQSxHQUR1TDtBQUV2TEUsUUFBQUEsS0FGdUw7QUFHdkwwUyxRQUFBQTtBQUh1TCxPQUFmLENBSXpLLEVBSkcsQ0FBTjtBQUtIOztBQUNELFFBQUk1UyxHQUFHLENBQUM2VCxVQUFKLENBQWUsSUFBZixDQUFKLEVBQTBCO0FBQ3RCLFlBQU0sSUFBSVAsS0FBSixDQUFXLHdCQUF1QnRULEdBQUksMEdBQXRDLENBQU47QUFDSDs7QUFDRCxRQUFJLENBQUNBLEdBQUcsQ0FBQzZULFVBQUosQ0FBZSxHQUFmLENBQUQsSUFBd0J2QyxhQUE1QixFQUEyQztBQUN2QyxVQUFJNkgsU0FBSjs7QUFDQSxVQUFJO0FBQ0FBLFFBQUFBLFNBQVMsR0FBRyxJQUFJTixHQUFKLENBQVE3WSxHQUFSLENBQVo7QUFDSCxPQUZELENBRUUsT0FBT29aLEdBQVAsRUFBWTtBQUNWamUsUUFBQUEsT0FBTyxDQUFDRCxLQUFSLENBQWNrZSxHQUFkO0FBQ0EsY0FBTSxJQUFJOUYsS0FBSixDQUFXLHdCQUF1QnRULEdBQUksaUlBQXRDLENBQU47QUFDSDs7QUFDRCxVQUFJLFNBQW1DLENBQUNzUixhQUFhLENBQUM4RSxRQUFkLENBQXVCK0MsU0FBUyxDQUFDRSxRQUFqQyxDQUF4QyxFQUFvRjtBQUNoRixjQUFNLElBQUkvRixLQUFKLENBQVcscUJBQW9CdFQsR0FBSSxrQ0FBaUNtWixTQUFTLENBQUNFLFFBQVMsK0RBQTdFLEdBQStJLDhFQUF6SixDQUFOO0FBQ0g7QUFDSjtBQUNKOztBQUNELFNBQVEsR0FBRTlULElBQUssUUFBTytULGtCQUFrQixDQUFDdFosR0FBRCxDQUFNLE1BQUtFLEtBQU0sTUFBSzBTLE9BQU8sSUFBSSxFQUFHLEVBQTVFO0FBQ0g7Ozs7Ozs7Ozs7O0FDaG1CWTs7QUFDYnRGLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELGVBQUEsR0FBa0IsS0FBSyxDQUF2Qjs7QUFDQSxJQUFJRyxNQUFNLEdBQUdDLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLG9CQUFELENBQVIsQ0FBbkM7O0FBQ0EsSUFBSTBMLE9BQU8sR0FBRzFMLG1CQUFPLENBQUMseUZBQUQsQ0FBckI7O0FBQ0EsSUFBSTJMLFFBQVEsR0FBRzNMLG1CQUFPLENBQUMsMkRBQUQsQ0FBdEI7O0FBQ0EsSUFBSUksZ0JBQWdCLEdBQUdKLG1CQUFPLENBQUMsK0VBQUQsQ0FBOUI7O0FBQ0EsU0FBU0Qsc0JBQVQsQ0FBZ0NPLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDSSxVQUFYLEdBQXdCSixHQUF4QixHQUE4QjtBQUNqQzVPLElBQUFBLE9BQU8sRUFBRTRPO0FBRHdCLEdBQXJDO0FBR0g7O0FBQ0QsTUFBTXNMLFVBQVUsR0FBRyxFQUFuQjs7QUFFQSxTQUFTQyxRQUFULENBQWtCck8sTUFBbEIsRUFBMEJtTixJQUExQixFQUFnQ0QsRUFBaEMsRUFBb0NvQixPQUFwQyxFQUE2QztBQUN6QyxNQUFJLElBQUosRUFBOEM7QUFDOUMsTUFBSSxDQUFDLENBQUMsR0FBR0osT0FBSixFQUFhSyxVQUFiLENBQXdCcEIsSUFBeEIsQ0FBTCxFQUFvQyxPQUZLLENBR3pDO0FBQ0E7QUFDQTtBQUNBOztBQUNBbk4sRUFBQUEsTUFBTSxDQUFDcU8sUUFBUCxDQUFnQmxCLElBQWhCLEVBQXNCRCxFQUF0QixFQUEwQm9CLE9BQTFCLEVBQW1DMUYsS0FBbkMsQ0FBMENtRixHQUFELElBQU87QUFDNUMsY0FBMkM7QUFDdkM7QUFDQSxZQUFNQSxHQUFOO0FBQ0g7QUFDSixHQUxEO0FBTUEsUUFBTVMsU0FBUyxHQUFHRixPQUFPLElBQUksT0FBT0EsT0FBTyxDQUFDRyxNQUFmLEtBQTBCLFdBQXJDLEdBQW1ESCxPQUFPLENBQUNHLE1BQTNELEdBQW9Fek8sTUFBTSxJQUFJQSxNQUFNLENBQUN5TyxNQUF2RyxDQWJ5QyxDQWN6Qzs7QUFDQUwsRUFBQUEsVUFBVSxDQUFDakIsSUFBSSxHQUFHLEdBQVAsR0FBYUQsRUFBYixJQUFtQnNCLFNBQVMsR0FBRyxNQUFNQSxTQUFULEdBQXFCLEVBQWpELENBQUQsQ0FBVixHQUFtRSxJQUFuRTtBQUNIOztBQUNELFNBQVNFLGVBQVQsQ0FBeUI3VSxLQUF6QixFQUFnQztBQUM1QixRQUFNO0FBQUV1SixJQUFBQTtBQUFGLE1BQWN2SixLQUFLLENBQUM4VSxhQUExQjtBQUNBLFNBQU92TCxNQUFNLElBQUlBLE1BQU0sS0FBSyxPQUFyQixJQUFnQ3ZKLEtBQUssQ0FBQytVLE9BQXRDLElBQWlEL1UsS0FBSyxDQUFDZ1YsT0FBdkQsSUFBa0VoVixLQUFLLENBQUNpVixRQUF4RSxJQUFvRmpWLEtBQUssQ0FBQ2tWLE1BQTFGLElBQW9HbFYsS0FBSyxDQUFDbVYsV0FBTixJQUFxQm5WLEtBQUssQ0FBQ21WLFdBQU4sQ0FBa0JDLEtBQWxCLEtBQTRCLENBQTVKO0FBQ0g7O0FBQ0QsU0FBU0MsV0FBVCxDQUFxQkMsQ0FBckIsRUFBd0JuUCxNQUF4QixFQUFnQ21OLElBQWhDLEVBQXNDRCxFQUF0QyxFQUEwQ2tDLE9BQTFDLEVBQW1EQyxPQUFuRCxFQUE0REMsTUFBNUQsRUFBb0ViLE1BQXBFLEVBQTRFO0FBQ3hFLFFBQU07QUFBRWMsSUFBQUE7QUFBRixNQUFnQkosQ0FBQyxDQUFDUixhQUF4Qjs7QUFDQSxNQUFJWSxRQUFRLEtBQUssR0FBYixLQUFxQmIsZUFBZSxDQUFDUyxDQUFELENBQWYsSUFBc0IsQ0FBQyxDQUFDLEdBQUdqQixPQUFKLEVBQWFLLFVBQWIsQ0FBd0JwQixJQUF4QixDQUE1QyxDQUFKLEVBQWdGO0FBQzVFO0FBQ0E7QUFDSDs7QUFDRGdDLEVBQUFBLENBQUMsQ0FBQ0ssY0FBRixHQU53RSxDQU94RTs7QUFDQSxNQUFJRixNQUFNLElBQUksSUFBVixJQUFrQnBDLEVBQUUsQ0FBQzlJLE9BQUgsQ0FBVyxHQUFYLEtBQW1CLENBQXpDLEVBQTRDO0FBQ3hDa0wsSUFBQUEsTUFBTSxHQUFHLEtBQVQ7QUFDSCxHQVZ1RSxDQVd4RTs7O0FBQ0F0UCxFQUFBQSxNQUFNLENBQUNvUCxPQUFPLEdBQUcsU0FBSCxHQUFlLE1BQXZCLENBQU4sQ0FBcUNqQyxJQUFyQyxFQUEyQ0QsRUFBM0MsRUFBK0M7QUFDM0NtQyxJQUFBQSxPQUQyQztBQUUzQ1osSUFBQUEsTUFGMkM7QUFHM0NhLElBQUFBO0FBSDJDLEdBQS9DO0FBS0g7O0FBQ0QsU0FBU25hLElBQVQsQ0FBY1QsS0FBZCxFQUFxQjtBQUNqQixZQUEyQztBQUN2QyxhQUFTK2EsZUFBVCxDQUF5QkMsSUFBekIsRUFBK0I7QUFDM0IsYUFBTyxJQUFJekgsS0FBSixDQUFXLGdDQUErQnlILElBQUksQ0FBQzNWLEdBQUksZ0JBQWUyVixJQUFJLENBQUNDLFFBQVMsNkJBQTRCRCxJQUFJLENBQUNFLE1BQU8sYUFBOUcsSUFBOEgsU0FBZ0MsQ0FBaEMsR0FBcUcsRUFBbk8sQ0FBVixDQUFQO0FBQ0gsS0FIc0MsQ0FJdkM7OztBQUNBLFVBQU1DLGtCQUFrQixHQUFHO0FBQ3ZCMUMsTUFBQUEsSUFBSSxFQUFFO0FBRGlCLEtBQTNCO0FBR0EsVUFBTTJDLGFBQWEsR0FBRzdOLE1BQU0sQ0FBQ3lCLElBQVAsQ0FBWW1NLGtCQUFaLENBQXRCO0FBQ0FDLElBQUFBLGFBQWEsQ0FBQy9MLE9BQWQsQ0FBdUJoSyxHQUFELElBQU87QUFDekIsVUFBSUEsR0FBRyxLQUFLLE1BQVosRUFBb0I7QUFDaEIsWUFBSXJGLEtBQUssQ0FBQ3FGLEdBQUQsQ0FBTCxJQUFjLElBQWQsSUFBc0IsT0FBT3JGLEtBQUssQ0FBQ3FGLEdBQUQsQ0FBWixLQUFzQixRQUF0QixJQUFrQyxPQUFPckYsS0FBSyxDQUFDcUYsR0FBRCxDQUFaLEtBQXNCLFFBQWxGLEVBQTRGO0FBQ3hGLGdCQUFNMFYsZUFBZSxDQUFDO0FBQ2xCMVYsWUFBQUEsR0FEa0I7QUFFbEI0VixZQUFBQSxRQUFRLEVBQUUsc0JBRlE7QUFHbEJDLFlBQUFBLE1BQU0sRUFBRWxiLEtBQUssQ0FBQ3FGLEdBQUQsQ0FBTCxLQUFlLElBQWYsR0FBc0IsTUFBdEIsR0FBK0IsT0FBT3JGLEtBQUssQ0FBQ3FGLEdBQUQ7QUFIakMsV0FBRCxDQUFyQjtBQUtIO0FBQ0osT0FSRCxNQVFPO0FBQ0g7QUFDQTtBQUNBLGNBQU0zRixDQUFDLEdBQUcyRixHQUFWO0FBQ0g7QUFDSixLQWRELEVBVHVDLENBd0J2Qzs7QUFDQSxVQUFNZ1csa0JBQWtCLEdBQUc7QUFDdkI3QyxNQUFBQSxFQUFFLEVBQUUsSUFEbUI7QUFFdkJrQyxNQUFBQSxPQUFPLEVBQUUsSUFGYztBQUd2QkUsTUFBQUEsTUFBTSxFQUFFLElBSGU7QUFJdkJELE1BQUFBLE9BQU8sRUFBRSxJQUpjO0FBS3ZCVyxNQUFBQSxRQUFRLEVBQUUsSUFMYTtBQU12QjNCLE1BQUFBLFFBQVEsRUFBRSxJQU5hO0FBT3ZCSSxNQUFBQSxNQUFNLEVBQUU7QUFQZSxLQUEzQjtBQVNBLFVBQU13QixhQUFhLEdBQUdoTyxNQUFNLENBQUN5QixJQUFQLENBQVlxTSxrQkFBWixDQUF0QjtBQUNBRSxJQUFBQSxhQUFhLENBQUNsTSxPQUFkLENBQXVCaEssR0FBRCxJQUFPO0FBQ3pCLFlBQU1tVyxPQUFPLEdBQUcsT0FBT3hiLEtBQUssQ0FBQ3FGLEdBQUQsQ0FBNUI7O0FBQ0EsVUFBSUEsR0FBRyxLQUFLLElBQVosRUFBa0I7QUFDZCxZQUFJckYsS0FBSyxDQUFDcUYsR0FBRCxDQUFMLElBQWNtVyxPQUFPLEtBQUssUUFBMUIsSUFBc0NBLE9BQU8sS0FBSyxRQUF0RCxFQUFnRTtBQUM1RCxnQkFBTVQsZUFBZSxDQUFDO0FBQ2xCMVYsWUFBQUEsR0FEa0I7QUFFbEI0VixZQUFBQSxRQUFRLEVBQUUsc0JBRlE7QUFHbEJDLFlBQUFBLE1BQU0sRUFBRU07QUFIVSxXQUFELENBQXJCO0FBS0g7QUFDSixPQVJELE1BUU8sSUFBSW5XLEdBQUcsS0FBSyxRQUFaLEVBQXNCO0FBQ3pCLFlBQUlyRixLQUFLLENBQUNxRixHQUFELENBQUwsSUFBY21XLE9BQU8sS0FBSyxRQUE5QixFQUF3QztBQUNwQyxnQkFBTVQsZUFBZSxDQUFDO0FBQ2xCMVYsWUFBQUEsR0FEa0I7QUFFbEI0VixZQUFBQSxRQUFRLEVBQUUsVUFGUTtBQUdsQkMsWUFBQUEsTUFBTSxFQUFFTTtBQUhVLFdBQUQsQ0FBckI7QUFLSDtBQUNKLE9BUk0sTUFRQSxJQUFJblcsR0FBRyxLQUFLLFNBQVIsSUFBcUJBLEdBQUcsS0FBSyxRQUE3QixJQUF5Q0EsR0FBRyxLQUFLLFNBQWpELElBQThEQSxHQUFHLEtBQUssVUFBdEUsSUFBb0ZBLEdBQUcsS0FBSyxVQUFoRyxFQUE0RztBQUMvRyxZQUFJckYsS0FBSyxDQUFDcUYsR0FBRCxDQUFMLElBQWMsSUFBZCxJQUFzQm1XLE9BQU8sS0FBSyxTQUF0QyxFQUFpRDtBQUM3QyxnQkFBTVQsZUFBZSxDQUFDO0FBQ2xCMVYsWUFBQUEsR0FEa0I7QUFFbEI0VixZQUFBQSxRQUFRLEVBQUUsV0FGUTtBQUdsQkMsWUFBQUEsTUFBTSxFQUFFTTtBQUhVLFdBQUQsQ0FBckI7QUFLSDtBQUNKLE9BUk0sTUFRQTtBQUNIO0FBQ0E7QUFDQSxjQUFNOWIsQ0FBQyxHQUFHMkYsR0FBVjtBQUNIO0FBQ0osS0EvQkQsRUFuQ3VDLENBbUV2QztBQUNBOztBQUNBLFVBQU1vVyxTQUFTLEdBQUc3TixNQUFNLENBQUNwTyxPQUFQLENBQWVrYyxNQUFmLENBQXNCLEtBQXRCLENBQWxCOztBQUNBLFFBQUkxYixLQUFLLENBQUMyWixRQUFOLElBQWtCLENBQUM4QixTQUFTLENBQUNFLE9BQWpDLEVBQTBDO0FBQ3RDRixNQUFBQSxTQUFTLENBQUNFLE9BQVYsR0FBb0IsSUFBcEI7QUFDQXZnQixNQUFBQSxPQUFPLENBQUMwWixJQUFSLENBQWEsc0tBQWI7QUFDSDtBQUNKOztBQUNELFFBQU10UixDQUFDLEdBQUd4RCxLQUFLLENBQUMyWixRQUFOLEtBQW1CLEtBQTdCO0FBQ0EsUUFBTXJPLE1BQU0sR0FBRyxDQUFDLEdBQUdtTyxRQUFKLEVBQWM3TyxTQUFkLEVBQWY7O0FBQ0EsUUFBTTtBQUFFNk4sSUFBQUEsSUFBRjtBQUFTRCxJQUFBQTtBQUFULE1BQWlCNUssTUFBTSxDQUFDcE8sT0FBUCxDQUFlb2MsT0FBZixDQUF1QixNQUFJO0FBQzlDLFVBQU0sQ0FBQ0MsWUFBRCxFQUFlQyxVQUFmLElBQTZCLENBQUMsR0FBR3RDLE9BQUosRUFBYXVDLFdBQWIsQ0FBeUJ6USxNQUF6QixFQUFpQ3RMLEtBQUssQ0FBQ3lZLElBQXZDLEVBQTZDLElBQTdDLENBQW5DO0FBQ0EsV0FBTztBQUNIQSxNQUFBQSxJQUFJLEVBQUVvRCxZQURIO0FBRUhyRCxNQUFBQSxFQUFFLEVBQUV4WSxLQUFLLENBQUN3WSxFQUFOLEdBQVcsQ0FBQyxHQUFHZ0IsT0FBSixFQUFhdUMsV0FBYixDQUF5QnpRLE1BQXpCLEVBQWlDdEwsS0FBSyxDQUFDd1ksRUFBdkMsQ0FBWCxHQUF3RHNELFVBQVUsSUFBSUQ7QUFGdkUsS0FBUDtBQUlILEdBTnNCLEVBTXBCLENBQ0N2USxNQURELEVBRUN0TCxLQUFLLENBQUN5WSxJQUZQLEVBR0N6WSxLQUFLLENBQUN3WSxFQUhQLENBTm9CLENBQXZCOztBQVdBLE1BQUk7QUFBRWxZLElBQUFBLFFBQUY7QUFBYW9hLElBQUFBLE9BQWI7QUFBdUJDLElBQUFBLE9BQXZCO0FBQWlDQyxJQUFBQSxNQUFqQztBQUEwQ2IsSUFBQUE7QUFBMUMsTUFBc0QvWixLQUExRCxDQXpGaUIsQ0EwRmpCOztBQUNBLE1BQUksT0FBT00sUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUM5QkEsSUFBQUEsUUFBUSxHQUFHLGFBQWNzTixNQUFNLENBQUNwTyxPQUFQLENBQWUwWSxhQUFmLENBQTZCLEdBQTdCLEVBQWtDLElBQWxDLEVBQXdDNVgsUUFBeEMsQ0FBekI7QUFDSCxHQTdGZ0IsQ0E4RmpCOzs7QUFDQSxNQUFJMGIsS0FBSjs7QUFDQSxZQUE0QztBQUN4QyxRQUFJO0FBQ0FBLE1BQUFBLEtBQUssR0FBR3BPLE1BQU0sQ0FBQ3BPLE9BQVAsQ0FBZXljLFFBQWYsQ0FBd0IvYyxJQUF4QixDQUE2Qm9CLFFBQTdCLENBQVI7QUFDSCxLQUZELENBRUUsT0FBTytZLEdBQVAsRUFBWTtBQUNWLFlBQU0sSUFBSTlGLEtBQUosQ0FBVyw4REFBNkR2VCxLQUFLLENBQUN5WSxJQUFLLDRGQUF6RSxJQUF3SyxTQUFnQyxDQUFoQyxHQUFzRyxFQUE5USxDQUFWLENBQU47QUFDSDtBQUNKLEdBTkQsTUFNTyxFQUVOOztBQUNELFFBQU15RCxRQUFRLEdBQUdGLEtBQUssSUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQTFCLElBQXNDQSxLQUFLLENBQUN0SCxHQUE3RDtBQUNBLFFBQU0sQ0FBQ3lILGtCQUFELEVBQXFCakYsU0FBckIsSUFBa0MsQ0FBQyxHQUFHaEosZ0JBQUosRUFBc0I2SSxlQUF0QixDQUFzQztBQUMxRUMsSUFBQUEsVUFBVSxFQUFFO0FBRDhELEdBQXRDLENBQXhDOztBQUdBLFFBQU1ILE1BQU0sR0FBR2pKLE1BQU0sQ0FBQ3BPLE9BQVAsQ0FBZTRjLFdBQWYsQ0FBNEJDLEVBQUQsSUFBTTtBQUM1Q0YsSUFBQUEsa0JBQWtCLENBQUNFLEVBQUQsQ0FBbEI7O0FBQ0EsUUFBSUgsUUFBSixFQUFjO0FBQ1YsVUFBSSxPQUFPQSxRQUFQLEtBQW9CLFVBQXhCLEVBQW9DQSxRQUFRLENBQUNHLEVBQUQsQ0FBUixDQUFwQyxLQUNLLElBQUksT0FBT0gsUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUNuQ0EsUUFBQUEsUUFBUSxDQUFDUCxPQUFULEdBQW1CVSxFQUFuQjtBQUNIO0FBQ0o7QUFDSixHQVJjLEVBUVosQ0FDQ0gsUUFERCxFQUVDQyxrQkFGRCxDQVJZLENBQWY7O0FBWUF2TyxFQUFBQSxNQUFNLENBQUNwTyxPQUFQLENBQWU2QixTQUFmLENBQXlCLE1BQUk7QUFDekIsVUFBTWliLGNBQWMsR0FBR3BGLFNBQVMsSUFBSTFULENBQWIsSUFBa0IsQ0FBQyxHQUFHZ1csT0FBSixFQUFhSyxVQUFiLENBQXdCcEIsSUFBeEIsQ0FBekM7QUFDQSxVQUFNcUIsU0FBUyxHQUFHLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsR0FBZ0NBLE1BQWhDLEdBQXlDek8sTUFBTSxJQUFJQSxNQUFNLENBQUN5TyxNQUE1RTtBQUNBLFVBQU13QyxZQUFZLEdBQUc3QyxVQUFVLENBQUNqQixJQUFJLEdBQUcsR0FBUCxHQUFhRCxFQUFiLElBQW1Cc0IsU0FBUyxHQUFHLE1BQU1BLFNBQVQsR0FBcUIsRUFBakQsQ0FBRCxDQUEvQjs7QUFDQSxRQUFJd0MsY0FBYyxJQUFJLENBQUNDLFlBQXZCLEVBQXFDO0FBQ2pDNUMsTUFBQUEsUUFBUSxDQUFDck8sTUFBRCxFQUFTbU4sSUFBVCxFQUFlRCxFQUFmLEVBQW1CO0FBQ3ZCdUIsUUFBQUEsTUFBTSxFQUFFRDtBQURlLE9BQW5CLENBQVI7QUFHSDtBQUNKLEdBVEQsRUFTRyxDQUNDdEIsRUFERCxFQUVDQyxJQUZELEVBR0N2QixTQUhELEVBSUM2QyxNQUpELEVBS0N2VyxDQUxELEVBTUM4SCxNQU5ELENBVEg7O0FBaUJBLFFBQU1rUixVQUFVLEdBQUc7QUFDZjlILElBQUFBLEdBQUcsRUFBRW1DLE1BRFU7QUFFZjRGLElBQUFBLE9BQU8sRUFBR2hDLENBQUQsSUFBSztBQUNWLFVBQUl1QixLQUFLLENBQUNoYyxLQUFOLElBQWUsT0FBT2djLEtBQUssQ0FBQ2hjLEtBQU4sQ0FBWXljLE9BQW5CLEtBQStCLFVBQWxELEVBQThEO0FBQzFEVCxRQUFBQSxLQUFLLENBQUNoYyxLQUFOLENBQVl5YyxPQUFaLENBQW9CaEMsQ0FBcEI7QUFDSDs7QUFDRCxVQUFJLENBQUNBLENBQUMsQ0FBQ2lDLGdCQUFQLEVBQXlCO0FBQ3JCbEMsUUFBQUEsV0FBVyxDQUFDQyxDQUFELEVBQUluUCxNQUFKLEVBQVltTixJQUFaLEVBQWtCRCxFQUFsQixFQUFzQmtDLE9BQXRCLEVBQStCQyxPQUEvQixFQUF3Q0MsTUFBeEMsRUFBZ0RiLE1BQWhELENBQVg7QUFDSDtBQUNKO0FBVGMsR0FBbkI7O0FBV0F5QyxFQUFBQSxVQUFVLENBQUNHLFlBQVgsR0FBMkJsQyxDQUFELElBQUs7QUFDM0IsUUFBSSxDQUFDLENBQUMsR0FBR2pCLE9BQUosRUFBYUssVUFBYixDQUF3QnBCLElBQXhCLENBQUwsRUFBb0M7O0FBQ3BDLFFBQUl1RCxLQUFLLENBQUNoYyxLQUFOLElBQWUsT0FBT2djLEtBQUssQ0FBQ2hjLEtBQU4sQ0FBWTJjLFlBQW5CLEtBQW9DLFVBQXZELEVBQW1FO0FBQy9EWCxNQUFBQSxLQUFLLENBQUNoYyxLQUFOLENBQVkyYyxZQUFaLENBQXlCbEMsQ0FBekI7QUFDSDs7QUFDRGQsSUFBQUEsUUFBUSxDQUFDck8sTUFBRCxFQUFTbU4sSUFBVCxFQUFlRCxFQUFmLEVBQW1CO0FBQ3ZCckQsTUFBQUEsUUFBUSxFQUFFO0FBRGEsS0FBbkIsQ0FBUjtBQUdILEdBUkQsQ0FySmlCLENBOEpqQjtBQUNBOzs7QUFDQSxNQUFJblYsS0FBSyxDQUFDc2IsUUFBTixJQUFrQlUsS0FBSyxDQUFDNVcsSUFBTixLQUFlLEdBQWYsSUFBc0IsRUFBRSxVQUFVNFcsS0FBSyxDQUFDaGMsS0FBbEIsQ0FBNUMsRUFBc0U7QUFDbEUsVUFBTThaLFNBQVMsR0FBRyxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLEdBQWdDQSxNQUFoQyxHQUF5Q3pPLE1BQU0sSUFBSUEsTUFBTSxDQUFDeU8sTUFBNUUsQ0FEa0UsQ0FFbEU7QUFDQTs7QUFDQSxVQUFNNkMsWUFBWSxHQUFHdFIsTUFBTSxJQUFJQSxNQUFNLENBQUN1UixjQUFqQixJQUFtQyxDQUFDLEdBQUdyRCxPQUFKLEVBQWFzRCxlQUFiLENBQTZCdEUsRUFBN0IsRUFBaUNzQixTQUFqQyxFQUE0Q3hPLE1BQU0sSUFBSUEsTUFBTSxDQUFDeVIsT0FBN0QsRUFBc0V6UixNQUFNLElBQUlBLE1BQU0sQ0FBQzBSLGFBQXZGLENBQXhEO0FBQ0FSLElBQUFBLFVBQVUsQ0FBQy9ELElBQVgsR0FBa0JtRSxZQUFZLElBQUksQ0FBQyxHQUFHcEQsT0FBSixFQUFheUQsV0FBYixDQUF5QixDQUFDLEdBQUd6RCxPQUFKLEVBQWEwRCxTQUFiLENBQXVCMUUsRUFBdkIsRUFBMkJzQixTQUEzQixFQUFzQ3hPLE1BQU0sSUFBSUEsTUFBTSxDQUFDNlIsYUFBdkQsQ0FBekIsQ0FBbEM7QUFDSDs7QUFDRCxTQUFPLGFBQWN2UCxNQUFNLENBQUNwTyxPQUFQLENBQWU0ZCxZQUFmLENBQTRCcEIsS0FBNUIsRUFBbUNRLFVBQW5DLENBQXJCO0FBQ0g7O0FBQ0QsSUFBSWEsUUFBUSxHQUFHNWMsSUFBZjtBQUNBZ04sZUFBQSxHQUFrQjRQLFFBQWxCOzs7Ozs7Ozs7OztBQ2pPYTs7QUFDYjlQLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELCtCQUFBLEdBQWtDNlAsdUJBQWxDO0FBQ0E3UCxrQ0FBQSxHQUFxQyxLQUFLLENBQTFDOztBQUNBLFNBQVM2UCx1QkFBVCxDQUFpQ3hkLElBQWpDLEVBQXVDO0FBQ25DLFNBQU9BLElBQUksQ0FBQzBkLFFBQUwsQ0FBYyxHQUFkLEtBQXNCMWQsSUFBSSxLQUFLLEdBQS9CLEdBQXFDQSxJQUFJLENBQUMrWSxLQUFMLENBQVcsQ0FBWCxFQUFjLENBQUMsQ0FBZixDQUFyQyxHQUF5RC9ZLElBQWhFO0FBQ0g7O0FBQ0QsTUFBTXlkLDBCQUEwQixHQUFHL0wsTUFBQSxHQUFxQzFSLENBQXJDLEdBUS9Cd2QsdUJBUko7QUFTQTdQLGtDQUFBLEdBQXFDOFAsMEJBQXJDOzs7Ozs7Ozs7OztBQ2xCYTs7QUFDYmhRLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELDJCQUFBLEdBQThCQSwwQkFBQSxHQUE2QixLQUFLLENBQWhFOztBQUNBLE1BQU1rUSxtQkFBbUIsR0FBRyxPQUFPRSxJQUFQLEtBQWdCLFdBQWhCLElBQStCQSxJQUFJLENBQUNGLG1CQUFwQyxJQUEyREUsSUFBSSxDQUFDRixtQkFBTCxDQUF5QkcsSUFBekIsQ0FBOEJDLE1BQTlCLENBQTNELElBQW9HLFVBQVNDLEVBQVQsRUFBYTtBQUN6SSxNQUFJQyxLQUFLLEdBQUdqaEIsSUFBSSxDQUFDa2hCLEdBQUwsRUFBWjtBQUNBLFNBQU9DLFVBQVUsQ0FBQyxZQUFXO0FBQ3pCSCxJQUFBQSxFQUFFLENBQUM7QUFDQ0ksTUFBQUEsVUFBVSxFQUFFLEtBRGI7QUFFQ0MsTUFBQUEsYUFBYSxFQUFFLFlBQVc7QUFDdEIsZUFBT2pULElBQUksQ0FBQ2tULEdBQUwsQ0FBUyxDQUFULEVBQVksTUFBTXRoQixJQUFJLENBQUNraEIsR0FBTCxLQUFhRCxLQUFuQixDQUFaLENBQVA7QUFDSDtBQUpGLEtBQUQsQ0FBRjtBQU1ILEdBUGdCLEVBT2QsQ0FQYyxDQUFqQjtBQVFILENBVkQ7O0FBV0F4USwyQkFBQSxHQUE4QmtRLG1CQUE5Qjs7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxPQUFPQyxJQUFQLEtBQWdCLFdBQWhCLElBQStCQSxJQUFJLENBQUNELGtCQUFwQyxJQUEwREMsSUFBSSxDQUFDRCxrQkFBTCxDQUF3QkUsSUFBeEIsQ0FBNkJDLE1BQTdCLENBQTFELElBQWtHLFVBQVNRLEVBQVQsRUFBYTtBQUN0SSxTQUFPQyxZQUFZLENBQUNELEVBQUQsQ0FBbkI7QUFDSCxDQUZEOztBQUdBOVEsMEJBQUEsR0FBNkJtUSxrQkFBN0I7Ozs7Ozs7Ozs7O0FDcEJhOztBQUNiclEsOENBQTZDO0FBQ3pDRyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUQsc0JBQUEsR0FBeUJnUixjQUF6QjtBQUNBaFIsb0JBQUEsR0FBdUJpUixZQUF2QjtBQUNBalIsOEJBQUEsR0FBaUNrUixzQkFBakM7QUFDQWxSLHlCQUFBLEdBQTRCbVIsaUJBQTVCOztBQUNBLElBQUlDLHNCQUFzQixHQUFHaFIsc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsa0hBQUQsQ0FBUixDQUFuRDs7QUFDQSxJQUFJZ1Isb0JBQW9CLEdBQUdoUixtQkFBTyxDQUFDLHlGQUFELENBQWxDOztBQUNBLFNBQVNELHNCQUFULENBQWdDTyxHQUFoQyxFQUFxQztBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0ksVUFBWCxHQUF3QkosR0FBeEIsR0FBOEI7QUFDakM1TyxJQUFBQSxPQUFPLEVBQUU0TztBQUR3QixHQUFyQztBQUdILEVBQ0Q7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQU0yUSxpQkFBaUIsR0FBRyxJQUExQjs7QUFDQSxTQUFTQyxVQUFULENBQW9CM1osR0FBcEIsRUFBeUJ0RSxHQUF6QixFQUE4QmtlLFNBQTlCLEVBQXlDO0FBQ3JDLE1BQUlDLEtBQUssR0FBR25lLEdBQUcsQ0FBQ3VTLEdBQUosQ0FBUWpPLEdBQVIsQ0FBWjs7QUFDQSxNQUFJNlosS0FBSixFQUFXO0FBQ1AsUUFBSSxZQUFZQSxLQUFoQixFQUF1QjtBQUNuQixhQUFPQSxLQUFLLENBQUNDLE1BQWI7QUFDSDs7QUFDRCxXQUFPbkwsT0FBTyxDQUFDQyxPQUFSLENBQWdCaUwsS0FBaEIsQ0FBUDtBQUNIOztBQUNELE1BQUlFLFFBQUo7QUFDQSxRQUFNQyxJQUFJLEdBQUcsSUFBSXJMLE9BQUosQ0FBYUMsT0FBRCxJQUFXO0FBQ2hDbUwsSUFBQUEsUUFBUSxHQUFHbkwsT0FBWDtBQUNILEdBRlksQ0FBYjtBQUdBbFQsRUFBQUEsR0FBRyxDQUFDa1ksR0FBSixDQUFRNVQsR0FBUixFQUFhNlosS0FBSyxHQUFHO0FBQ2pCakwsSUFBQUEsT0FBTyxFQUFFbUwsUUFEUTtBQUVqQkQsSUFBQUEsTUFBTSxFQUFFRTtBQUZTLEdBQXJCO0FBSUEsU0FBT0osU0FBUyxHQUFHQSxTQUFTLEdBQUc5SyxJQUFaLENBQWtCekcsS0FBRCxLQUFVMFIsUUFBUSxDQUFDMVIsS0FBRCxDQUFSLEVBQWlCQSxLQUEzQixDQUFqQixDQUFILEdBQ1oyUixJQURKO0FBRUg7O0FBQ0QsU0FBU0MsV0FBVCxDQUFxQjNjLElBQXJCLEVBQTJCO0FBQ3ZCLE1BQUk7QUFDQUEsSUFBQUEsSUFBSSxHQUFHNGMsUUFBUSxDQUFDckgsYUFBVCxDQUF1QixNQUF2QixDQUFQO0FBQ0EsV0FBTztBQUNQO0FBQ0MsT0FBQyxDQUFDNkYsTUFBTSxDQUFDeUIsb0JBQVQsSUFBaUMsQ0FBQyxDQUFDRCxRQUFRLENBQUNFLFlBQTdDLElBQThEOWMsSUFBSSxDQUFDK2MsT0FBTCxDQUFhQyxRQUFiLENBQXNCLFVBQXRCO0FBRjlEO0FBR0gsR0FMRCxDQUtFLE9BQU9sRixDQUFQLEVBQVU7QUFDUixXQUFPLEtBQVA7QUFDSDtBQUNKOztBQUNELE1BQU1tRixXQUFXLEdBQUdOLFdBQVcsRUFBL0I7O0FBQ0EsU0FBU08sY0FBVCxDQUF3QnBILElBQXhCLEVBQThCRCxFQUE5QixFQUFrQzdWLElBQWxDLEVBQXdDO0FBQ3BDLFNBQU8sSUFBSXFSLE9BQUosQ0FBWSxDQUFDOEwsR0FBRCxFQUFNQyxHQUFOLEtBQVk7QUFDM0IsUUFBSVIsUUFBUSxDQUFDUyxhQUFULENBQXdCLCtCQUE4QnZILElBQUssSUFBM0QsQ0FBSixFQUFxRTtBQUNqRSxhQUFPcUgsR0FBRyxFQUFWO0FBQ0g7O0FBQ0RuZCxJQUFBQSxJQUFJLEdBQUc0YyxRQUFRLENBQUNySCxhQUFULENBQXVCLE1BQXZCLENBQVAsQ0FKMkIsQ0FLM0I7O0FBQ0EsUUFBSU0sRUFBSixFQUFRN1YsSUFBSSxDQUFDNlYsRUFBTCxHQUFVQSxFQUFWO0FBQ1I3VixJQUFBQSxJQUFJLENBQUM0VixHQUFMLEdBQVksVUFBWjtBQUNBNVYsSUFBQUEsSUFBSSxDQUFDc2QsV0FBTCxHQUFtQnpPLFNBQW5CO0FBQ0E3TyxJQUFBQSxJQUFJLENBQUNzUyxNQUFMLEdBQWM2SyxHQUFkO0FBQ0FuZCxJQUFBQSxJQUFJLENBQUN3ZCxPQUFMLEdBQWVKLEdBQWYsQ0FWMkIsQ0FXM0I7O0FBQ0FwZCxJQUFBQSxJQUFJLENBQUM4VixJQUFMLEdBQVlBLElBQVo7QUFDQThHLElBQUFBLFFBQVEsQ0FBQ2xaLElBQVQsQ0FBYytaLFdBQWQsQ0FBMEJ6ZCxJQUExQjtBQUNILEdBZE0sQ0FBUDtBQWVIOztBQUNELE1BQU0wZCxnQkFBZ0IsR0FBR0MsTUFBTSxDQUFDLGtCQUFELENBQS9COztBQUNBLFNBQVM3QixjQUFULENBQXdCcEYsR0FBeEIsRUFBNkI7QUFDekIsU0FBTzlMLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQjZMLEdBQXRCLEVBQTJCZ0gsZ0JBQTNCLEVBQTZDLEVBQTdDLENBQVA7QUFFSDs7QUFDRCxTQUFTM0IsWUFBVCxDQUFzQnJGLEdBQXRCLEVBQTJCO0FBQ3ZCLFNBQU9BLEdBQUcsSUFBSWdILGdCQUFnQixJQUFJaEgsR0FBbEM7QUFDSDs7QUFDRCxTQUFTa0gsWUFBVCxDQUFzQnRnQixHQUF0QixFQUEyQnVnQixNQUEzQixFQUFtQztBQUMvQixTQUFPLElBQUl4TSxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVd00sTUFBVixLQUFtQjtBQUNsQ0QsSUFBQUEsTUFBTSxHQUFHakIsUUFBUSxDQUFDckgsYUFBVCxDQUF1QixRQUF2QixDQUFULENBRGtDLENBRWxDO0FBQ0E7QUFDQTs7QUFDQXNJLElBQUFBLE1BQU0sQ0FBQ3ZMLE1BQVAsR0FBZ0JoQixPQUFoQjs7QUFDQXVNLElBQUFBLE1BQU0sQ0FBQ0wsT0FBUCxHQUFpQixNQUFJTSxNQUFNLENBQUNoQyxjQUFjLENBQUMsSUFBSWxMLEtBQUosQ0FBVywwQkFBeUJ0VCxHQUFJLEVBQXhDLENBQUQsQ0FBZixDQUEzQixDQU5rQyxDQVFsQztBQUNBOzs7QUFDQXVnQixJQUFBQSxNQUFNLENBQUNQLFdBQVAsR0FBcUJ6TyxTQUFyQixDQVZrQyxDQVdsQztBQUNBOztBQUNBZ1AsSUFBQUEsTUFBTSxDQUFDdmdCLEdBQVAsR0FBYUEsR0FBYjtBQUNBc2YsSUFBQUEsUUFBUSxDQUFDbUIsSUFBVCxDQUFjTixXQUFkLENBQTBCSSxNQUExQjtBQUNILEdBZk0sQ0FBUDtBQWdCSCxFQUNEO0FBQ0E7OztBQUNBLElBQUlHLGVBQUosRUFDQTs7QUFDQSxTQUFTQyx5QkFBVCxDQUFtQ3BkLENBQW5DLEVBQXNDcWQsRUFBdEMsRUFBMEN4SCxHQUExQyxFQUErQztBQUMzQyxTQUFPLElBQUlyRixPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVd00sTUFBVixLQUFtQjtBQUNsQyxRQUFJSyxTQUFTLEdBQUcsS0FBaEI7QUFDQXRkLElBQUFBLENBQUMsQ0FBQzJRLElBQUYsQ0FBUTRNLENBQUQsSUFBSztBQUNSO0FBQ0FELE1BQUFBLFNBQVMsR0FBRyxJQUFaO0FBQ0E3TSxNQUFBQSxPQUFPLENBQUM4TSxDQUFELENBQVA7QUFDSCxLQUpELEVBSUc3TSxLQUpILENBSVN1TSxNQUpULEVBRmtDLENBT2xDO0FBQ0E7O0FBQ0EsY0FBNEM7QUFDeEMsT0FBQ0UsZUFBZSxJQUFJM00sT0FBTyxDQUFDQyxPQUFSLEVBQXBCLEVBQXVDRSxJQUF2QyxDQUE0QyxNQUFJO0FBQzVDLFNBQUMsR0FBRzJLLG9CQUFKLEVBQTBCbkIsbUJBQTFCLENBQThDLE1BQUlRLFVBQVUsQ0FBQyxNQUFJO0FBQ3pELGNBQUksQ0FBQzJDLFNBQUwsRUFBZ0I7QUFDWkwsWUFBQUEsTUFBTSxDQUFDcEgsR0FBRCxDQUFOO0FBQ0g7QUFDSixTQUp1RCxFQUlyRHdILEVBSnFELENBQTVEO0FBTUgsT0FQRDtBQVFIOztBQUNELGVBQTRDLEVBTzNDO0FBQ0osR0EzQk0sQ0FBUDtBQTRCSDs7QUFDRCxTQUFTbEMsc0JBQVQsR0FBa0M7QUFDOUIsTUFBSWQsSUFBSSxDQUFDbUQsZ0JBQVQsRUFBMkI7QUFDdkIsV0FBT2hOLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQjRKLElBQUksQ0FBQ21ELGdCQUFyQixDQUFQO0FBQ0g7O0FBQ0QsUUFBTUMsZUFBZSxHQUFHLElBQUlqTixPQUFKLENBQWFDLE9BQUQsSUFBVztBQUMzQztBQUNBLFVBQU0rSixFQUFFLEdBQUdILElBQUksQ0FBQ3FELG1CQUFoQjs7QUFDQXJELElBQUFBLElBQUksQ0FBQ3FELG1CQUFMLEdBQTJCLE1BQUk7QUFDM0JqTixNQUFBQSxPQUFPLENBQUM0SixJQUFJLENBQUNtRCxnQkFBTixDQUFQO0FBQ0FoRCxNQUFBQSxFQUFFLElBQUlBLEVBQUUsRUFBUjtBQUNILEtBSEQ7QUFJSCxHQVB1QixDQUF4QjtBQVFBLFNBQU80Qyx5QkFBeUIsQ0FBQ0ssZUFBRCxFQUFrQmxDLGlCQUFsQixFQUFxQ04sY0FBYyxDQUFDLElBQUlsTCxLQUFKLENBQVUsc0NBQVYsQ0FBRCxDQUFuRCxDQUFoQztBQUNIOztBQUNELFNBQVM0TixnQkFBVCxDQUEwQkMsV0FBMUIsRUFBdUNDLEtBQXZDLEVBQThDO0FBQzFDLFlBQTRDO0FBQ3hDLFdBQU9yTixPQUFPLENBQUNDLE9BQVIsQ0FBZ0I7QUFDbkJxTixNQUFBQSxPQUFPLEVBQUUsQ0FDTEYsV0FBVyxHQUFHLDRCQUFkLEdBQTZDRyxTQUFTLENBQUMsQ0FBQyxHQUFHMUMsc0JBQUosRUFBNEJyZixPQUE1QixDQUFvQzZoQixLQUFwQyxFQUEyQyxLQUEzQyxDQUFELENBRGpELENBRFU7QUFJbkI7QUFDQUcsTUFBQUEsR0FBRyxFQUFFO0FBTGMsS0FBaEIsQ0FBUDtBQU9IOztBQUNELFNBQU83QyxzQkFBc0IsR0FBR3hLLElBQXpCLENBQStCc04sUUFBRCxJQUFZO0FBQzdDLFFBQUksRUFBRUosS0FBSyxJQUFJSSxRQUFYLENBQUosRUFBMEI7QUFDdEIsWUFBTWhELGNBQWMsQ0FBQyxJQUFJbEwsS0FBSixDQUFXLDJCQUEwQjhOLEtBQU0sRUFBM0MsQ0FBRCxDQUFwQjtBQUNIOztBQUNELFVBQU1LLFFBQVEsR0FBR0QsUUFBUSxDQUFDSixLQUFELENBQVIsQ0FBZ0J0Z0IsR0FBaEIsQ0FBcUJtZSxLQUFELElBQVNrQyxXQUFXLEdBQUcsU0FBZCxHQUEwQkcsU0FBUyxDQUFDckMsS0FBRCxDQUFoRSxDQUFqQjtBQUVBLFdBQU87QUFDSG9DLE1BQUFBLE9BQU8sRUFBRUksUUFBUSxDQUFDcGIsTUFBVCxDQUFpQnFiLENBQUQsSUFBS0EsQ0FBQyxDQUFDbkUsUUFBRixDQUFXLEtBQVgsQ0FBckIsQ0FETjtBQUdIZ0UsTUFBQUEsR0FBRyxFQUFFRSxRQUFRLENBQUNwYixNQUFULENBQWlCcWIsQ0FBRCxJQUFLQSxDQUFDLENBQUNuRSxRQUFGLENBQVcsTUFBWCxDQUFyQjtBQUhGLEtBQVA7QUFNSCxHQVpNLENBQVA7QUFhSDs7QUFDRCxTQUFTb0IsaUJBQVQsQ0FBMkJ3QyxXQUEzQixFQUF3QztBQUNwQyxRQUFNUSxXQUFXLEdBQUcsSUFBSXRSLEdBQUosRUFBcEI7QUFDQSxRQUFNdVIsYUFBYSxHQUFHLElBQUl2UixHQUFKLEVBQXRCO0FBQ0EsUUFBTXdSLFdBQVcsR0FBRyxJQUFJeFIsR0FBSixFQUFwQjtBQUNBLFFBQU15UixNQUFNLEdBQUcsSUFBSXpSLEdBQUosRUFBZjs7QUFDQSxXQUFTMFIsa0JBQVQsQ0FBNEIvaEIsR0FBNUIsRUFBaUM7QUFDN0IsUUFBSW9mLElBQUksR0FBR3dDLGFBQWEsQ0FBQ3ZPLEdBQWQsQ0FBa0JyVCxHQUFsQixDQUFYOztBQUNBLFFBQUlvZixJQUFKLEVBQVU7QUFDTixhQUFPQSxJQUFQO0FBQ0gsS0FKNEIsQ0FLN0I7OztBQUNBLFFBQUlFLFFBQVEsQ0FBQ1MsYUFBVCxDQUF3QixnQkFBZS9mLEdBQUksSUFBM0MsQ0FBSixFQUFxRDtBQUNqRCxhQUFPK1QsT0FBTyxDQUFDQyxPQUFSLEVBQVA7QUFDSDs7QUFDRDROLElBQUFBLGFBQWEsQ0FBQzVJLEdBQWQsQ0FBa0JoWixHQUFsQixFQUF1Qm9mLElBQUksR0FBR2tCLFlBQVksQ0FBQ3RnQixHQUFELENBQTFDO0FBQ0EsV0FBT29mLElBQVA7QUFDSDs7QUFDRCxXQUFTNEMsZUFBVCxDQUF5QnhKLElBQXpCLEVBQStCO0FBQzNCLFFBQUk0RyxJQUFJLEdBQUd5QyxXQUFXLENBQUN4TyxHQUFaLENBQWdCbUYsSUFBaEIsQ0FBWDs7QUFDQSxRQUFJNEcsSUFBSixFQUFVO0FBQ04sYUFBT0EsSUFBUDtBQUNIOztBQUNEeUMsSUFBQUEsV0FBVyxDQUFDN0ksR0FBWixDQUFnQlIsSUFBaEIsRUFBc0I0RyxJQUFJLEdBQUdya0IsS0FBSyxDQUFDeWQsSUFBRCxDQUFMLENBQVl0RSxJQUFaLENBQWtCMkwsR0FBRCxJQUFPO0FBQ2pELFVBQUksQ0FBQ0EsR0FBRyxDQUFDb0MsRUFBVCxFQUFhO0FBQ1QsY0FBTSxJQUFJM08sS0FBSixDQUFXLDhCQUE2QmtGLElBQUssRUFBN0MsQ0FBTjtBQUNIOztBQUNELGFBQU9xSCxHQUFHLENBQUNxQyxJQUFKLEdBQVdoTyxJQUFYLENBQWlCZ08sSUFBRCxLQUFTO0FBQ3hCMUosUUFBQUEsSUFBSSxFQUFFQSxJQURrQjtBQUV4QjJKLFFBQUFBLE9BQU8sRUFBRUQ7QUFGZSxPQUFULENBQWhCLENBQVA7QUFLSCxLQVQ0QixFQVMxQmpPLEtBVDBCLENBU25CbUYsR0FBRCxJQUFPO0FBQ1osWUFBTW9GLGNBQWMsQ0FBQ3BGLEdBQUQsQ0FBcEI7QUFDSCxLQVg0QixDQUE3QjtBQVlBLFdBQU9nRyxJQUFQO0FBQ0g7O0FBQ0QsU0FBTztBQUNIZ0QsSUFBQUEsY0FBYyxDQUFFaEIsS0FBRixFQUFTO0FBQ25CLGFBQU9yQyxVQUFVLENBQUNxQyxLQUFELEVBQVFPLFdBQVIsQ0FBakI7QUFDSCxLQUhFOztBQUlIVSxJQUFBQSxZQUFZLENBQUVqQixLQUFGLEVBQVNrQixPQUFULEVBQWtCO0FBQzFCdk8sTUFBQUEsT0FBTyxDQUFDQyxPQUFSLENBQWdCc08sT0FBaEIsRUFBeUJwTyxJQUF6QixDQUErQnFPLEVBQUQsSUFBTUEsRUFBRSxFQUF0QyxFQUNFck8sSUFERixDQUNRMUcsT0FBRCxLQUFZO0FBQ1hnVixRQUFBQSxTQUFTLEVBQUVoVixPQUFPLElBQUlBLE9BQU8sQ0FBQ2pPLE9BQW5CLElBQThCaU8sT0FEOUI7QUFFWEEsUUFBQUEsT0FBTyxFQUFFQTtBQUZFLE9BQVosQ0FEUCxFQUtHNEwsR0FBRCxLQUFRO0FBQ0ZsZSxRQUFBQSxLQUFLLEVBQUVrZTtBQURMLE9BQVIsQ0FMRixFQVFFbEYsSUFSRixDQVFRdU8sS0FBRCxJQUFTO0FBQ1osY0FBTUMsR0FBRyxHQUFHZixXQUFXLENBQUN0TyxHQUFaLENBQWdCK04sS0FBaEIsQ0FBWjtBQUNBTyxRQUFBQSxXQUFXLENBQUMzSSxHQUFaLENBQWdCb0ksS0FBaEIsRUFBdUJxQixLQUF2QjtBQUNBLFlBQUlDLEdBQUcsSUFBSSxhQUFhQSxHQUF4QixFQUE2QkEsR0FBRyxDQUFDMU8sT0FBSixDQUFZeU8sS0FBWjtBQUNoQyxPQVpEO0FBYUgsS0FsQkU7O0FBbUJIRSxJQUFBQSxTQUFTLENBQUV2QixLQUFGLEVBQVMxSCxRQUFULEVBQW1CO0FBQ3hCLGFBQU9xRixVQUFVLENBQUNxQyxLQUFELEVBQVFVLE1BQVIsRUFBZ0IsTUFBSTtBQUNqQyxjQUFNYyxpQkFBaUIsR0FBRzFCLGdCQUFnQixDQUFDQyxXQUFELEVBQWNDLEtBQWQsQ0FBaEIsQ0FBcUNsTixJQUFyQyxDQUEwQyxDQUFDO0FBQUVtTixVQUFBQSxPQUFGO0FBQVlFLFVBQUFBO0FBQVosU0FBRCxLQUFzQjtBQUN0RixpQkFBT3hOLE9BQU8sQ0FBQzBCLEdBQVIsQ0FBWSxDQUNma00sV0FBVyxDQUFDeEwsR0FBWixDQUFnQmlMLEtBQWhCLElBQXlCLEVBQXpCLEdBQThCck4sT0FBTyxDQUFDMEIsR0FBUixDQUFZNEwsT0FBTyxDQUFDdmdCLEdBQVIsQ0FBWWloQixrQkFBWixDQUFaLENBRGYsRUFFZmhPLE9BQU8sQ0FBQzBCLEdBQVIsQ0FBWThMLEdBQUcsQ0FBQ3pnQixHQUFKLENBQVFraEIsZUFBUixDQUFaLENBRmUsQ0FBWixDQUFQO0FBSUgsU0FMeUIsRUFLdkI5TixJQUx1QixDQUtqQjJMLEdBQUQsSUFBTztBQUNYLGlCQUFPLEtBQUt1QyxjQUFMLENBQW9CaEIsS0FBcEIsRUFBMkJsTixJQUEzQixDQUFpQzJPLFVBQUQsS0FBZTtBQUM5Q0EsWUFBQUEsVUFEOEM7QUFFOUNDLFlBQUFBLE1BQU0sRUFBRWpELEdBQUcsQ0FBQyxDQUFEO0FBRm1DLFdBQWYsQ0FBaEMsQ0FBUDtBQUtILFNBWHlCLENBQTFCOztBQVlBLGtCQUE0QztBQUN4Q2EsVUFBQUEsZUFBZSxHQUFHLElBQUkzTSxPQUFKLENBQWFDLE9BQUQsSUFBVztBQUNyQyxnQkFBSTRPLGlCQUFKLEVBQXVCO0FBQ25CLHFCQUFPQSxpQkFBaUIsQ0FBQ0csT0FBbEIsQ0FBMEIsTUFBSTtBQUNqQy9PLGdCQUFBQSxPQUFPO0FBQ1YsZUFGTSxDQUFQO0FBR0g7QUFDSixXQU5pQixDQUFsQjtBQU9IOztBQUNELGVBQU8yTSx5QkFBeUIsQ0FBQ2lDLGlCQUFELEVBQW9COUQsaUJBQXBCLEVBQXVDTixjQUFjLENBQUMsSUFBSWxMLEtBQUosQ0FBVyxtQ0FBa0M4TixLQUFNLEVBQW5ELENBQUQsQ0FBckQsQ0FBekIsQ0FBdUlsTixJQUF2SSxDQUE0SSxDQUFDO0FBQUUyTyxVQUFBQSxVQUFGO0FBQWVDLFVBQUFBO0FBQWYsU0FBRCxLQUE0QjtBQUMzSyxnQkFBTWpELEdBQUcsR0FBR3ZTLE1BQU0sQ0FBQzhLLE1BQVAsQ0FBYztBQUN0QjBLLFlBQUFBLE1BQU0sRUFBRUE7QUFEYyxXQUFkLEVBRVRELFVBRlMsQ0FBWjtBQUdBLGlCQUFPLFdBQVdBLFVBQVgsR0FBd0JBLFVBQXhCLEdBQXFDaEQsR0FBNUM7QUFDSCxTQUxNLEVBS0o1TCxLQUxJLENBS0dtRixHQUFELElBQU87QUFDWixjQUFJTSxRQUFKLEVBQWM7QUFDVjtBQUNBLGtCQUFNTixHQUFOO0FBQ0g7O0FBQ0QsaUJBQU87QUFDSGxlLFlBQUFBLEtBQUssRUFBRWtlO0FBREosV0FBUDtBQUdILFNBYk0sQ0FBUDtBQWNILE9BcENnQixDQUFqQjtBQXFDSCxLQXpERTs7QUEwREhNLElBQUFBLFFBQVEsQ0FBRTBILEtBQUYsRUFBUztBQUNiO0FBQ0E7QUFDQSxVQUFJNEIsRUFBSjs7QUFDQSxVQUFJQSxFQUFFLEdBQUdDLFNBQVMsQ0FBQ0MsVUFBbkIsRUFBK0I7QUFDM0I7QUFDQSxZQUFJRixFQUFFLENBQUNHLFFBQUgsSUFBZSxLQUFLMUYsSUFBTCxDQUFVdUYsRUFBRSxDQUFDSSxhQUFiLENBQW5CLEVBQWdELE9BQU9yUCxPQUFPLENBQUNDLE9BQVIsRUFBUDtBQUNuRDs7QUFDRCxhQUFPa04sZ0JBQWdCLENBQUNDLFdBQUQsRUFBY0MsS0FBZCxDQUFoQixDQUFxQ2xOLElBQXJDLENBQTJDbVAsTUFBRCxJQUFVdFAsT0FBTyxDQUFDMEIsR0FBUixDQUFZa0ssV0FBVyxHQUFHMEQsTUFBTSxDQUFDaEMsT0FBUCxDQUFldmdCLEdBQWYsQ0FBb0J5ZixNQUFELElBQVVYLGNBQWMsQ0FBQ1csTUFBRCxFQUFTLFFBQVQsQ0FBM0MsQ0FBSCxHQUMxRSxFQURtRCxDQUFwRCxFQUVMck0sSUFGSyxDQUVBLE1BQUk7QUFDUCxTQUFDLEdBQUcySyxvQkFBSixFQUEwQm5CLG1CQUExQixDQUE4QyxNQUFJLEtBQUtpRixTQUFMLENBQWV2QixLQUFmLEVBQXNCLElBQXRCLEVBQTRCbk4sS0FBNUIsQ0FBa0MsTUFBSSxDQUNuRixDQUQ2QyxDQUFsRDtBQUdILE9BTk0sRUFNSkEsS0FOSSxFQU1FO0FBQ1QsWUFBSSxDQUNILENBUk0sQ0FBUDtBQVNIOztBQTNFRSxHQUFQO0FBNkVIOzs7Ozs7Ozs7OztBQ3RSWTs7QUFDYjNHLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FILDBDQUF5QztBQUNyQ2MsRUFBQUEsVUFBVSxFQUFFLElBRHlCO0FBRXJDaUYsRUFBQUEsR0FBRyxFQUFFLFlBQVc7QUFDWixXQUFPa0csT0FBTyxDQUFDaGEsT0FBZjtBQUNIO0FBSm9DLENBQXpDO0FBTUErTiw4Q0FBNkM7QUFDekNjLEVBQUFBLFVBQVUsRUFBRSxJQUQ2QjtBQUV6Q2lGLEVBQUFBLEdBQUcsRUFBRSxZQUFXO0FBQ1osV0FBT2lRLFdBQVcsQ0FBQy9qQixPQUFuQjtBQUNIO0FBSndDLENBQTdDO0FBTUFpTyxpQkFBQSxHQUFvQjdDLFNBQXBCO0FBQ0E2QyxvQkFBQSxHQUF1QitWLFlBQXZCO0FBQ0EvVixnQ0FBQSxHQUFtQ2dXLHdCQUFuQztBQUNBaFcsZUFBQSxHQUFrQixLQUFLLENBQXZCOztBQUNBLElBQUlHLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFuQzs7QUFDQSxJQUFJMEwsT0FBTyxHQUFHM0wsc0JBQXNCLENBQUNDLG1CQUFPLENBQUMseUZBQUQsQ0FBUixDQUFwQzs7QUFDQSxJQUFJNFYsY0FBYyxHQUFHNVYsbUJBQU8sQ0FBQyxrRUFBRCxDQUE1Qjs7QUFDQSxJQUFJeVYsV0FBVyxHQUFHMVYsc0JBQXNCLENBQUNDLG1CQUFPLENBQUMscUVBQUQsQ0FBUixDQUF4Qzs7QUFDQSxTQUFTRCxzQkFBVCxDQUFnQ08sR0FBaEMsRUFBcUM7QUFDakMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNJLFVBQVgsR0FBd0JKLEdBQXhCLEdBQThCO0FBQ2pDNU8sSUFBQUEsT0FBTyxFQUFFNE87QUFEd0IsR0FBckM7QUFHSDs7QUFDRCxNQUFNdVYsZUFBZSxHQUFHO0FBQ3BCclksRUFBQUEsTUFBTSxFQUFFLElBRFk7QUFFcEJzWSxFQUFBQSxjQUFjLEVBQUUsRUFGSTs7QUFHcEJDLEVBQUFBLEtBQUssQ0FBRTdGLEVBQUYsRUFBTTtBQUNQLFFBQUksS0FBSzFTLE1BQVQsRUFBaUIsT0FBTzBTLEVBQUUsRUFBVDs7QUFDakIsZUFBbUMsRUFFbEM7QUFDSjs7QUFSbUIsQ0FBeEIsRUFVQTs7QUFDQSxNQUFNOEYsaUJBQWlCLEdBQUcsQ0FDdEIsVUFEc0IsRUFFdEIsT0FGc0IsRUFHdEIsT0FIc0IsRUFJdEIsUUFKc0IsRUFLdEIsWUFMc0IsRUFNdEIsWUFOc0IsRUFPdEIsVUFQc0IsRUFRdEIsUUFSc0IsRUFTdEIsU0FUc0IsRUFVdEIsZUFWc0IsRUFXdEIsU0FYc0IsRUFZdEIsV0Fac0IsRUFhdEIsZ0JBYnNCLEVBY3RCLGVBZHNCLENBQTFCO0FBZ0JBLE1BQU1DLFlBQVksR0FBRyxDQUNqQixrQkFEaUIsRUFFakIscUJBRmlCLEVBR2pCLHFCQUhpQixFQUlqQixrQkFKaUIsRUFLakIsaUJBTGlCLEVBTWpCLG9CQU5pQixDQUFyQjtBQVFBLE1BQU1DLGdCQUFnQixHQUFHLENBQ3JCLE1BRHFCLEVBRXJCLFNBRnFCLEVBR3JCLFFBSHFCLEVBSXJCLE1BSnFCLEVBS3JCLFVBTHFCLEVBTXJCLGdCQU5xQixDQUF6QixFQVFBOztBQUNBelcsTUFBTSxDQUFDQyxjQUFQLENBQXNCbVcsZUFBdEIsRUFBdUMsUUFBdkMsRUFBaUQ7QUFDN0NyUSxFQUFBQSxHQUFHLEdBQUk7QUFDSCxXQUFPa0csT0FBTyxDQUFDaGEsT0FBUixDQUFnQnlrQixNQUF2QjtBQUNIOztBQUg0QyxDQUFqRDtBQUtBSCxpQkFBaUIsQ0FBQ3pVLE9BQWxCLENBQTJCNlUsS0FBRCxJQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EzVyxFQUFBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JtVyxlQUF0QixFQUF1Q08sS0FBdkMsRUFBOEM7QUFDMUM1USxJQUFBQSxHQUFHLEdBQUk7QUFDSCxZQUFNaEksTUFBTSxHQUFHNlksU0FBUyxFQUF4QjtBQUNBLGFBQU83WSxNQUFNLENBQUM0WSxLQUFELENBQWI7QUFDSDs7QUFKeUMsR0FBOUM7QUFNSCxDQVhEO0FBWUFGLGdCQUFnQixDQUFDM1UsT0FBakIsQ0FBMEI2VSxLQUFELElBQVM7QUFDOUJQLEVBQUFBLGVBQWUsQ0FBQ08sS0FBRCxDQUFmLEdBQXlCLENBQUMsR0FBR2xKLElBQUosS0FBVztBQUNoQyxVQUFNMVAsTUFBTSxHQUFHNlksU0FBUyxFQUF4QjtBQUNBLFdBQU83WSxNQUFNLENBQUM0WSxLQUFELENBQU4sQ0FBYyxHQUFHbEosSUFBakIsQ0FBUDtBQUNILEdBSEQ7QUFJSCxDQUxEO0FBTUErSSxZQUFZLENBQUMxVSxPQUFiLENBQXNCbEssS0FBRCxJQUFTO0FBQzFCd2UsRUFBQUEsZUFBZSxDQUFDRSxLQUFoQixDQUFzQixNQUFJO0FBQ3RCckssSUFBQUEsT0FBTyxDQUFDaGEsT0FBUixDQUFnQnlrQixNQUFoQixDQUF1QkcsRUFBdkIsQ0FBMEJqZixLQUExQixFQUFpQyxDQUFDLEdBQUc2VixJQUFKLEtBQVc7QUFDeEMsWUFBTXFKLFVBQVUsR0FBSSxLQUFJbGYsS0FBSyxDQUFDbWYsTUFBTixDQUFhLENBQWIsRUFBZ0JDLFdBQWhCLEVBQThCLEdBQUVwZixLQUFLLENBQUNxZixTQUFOLENBQWdCLENBQWhCLENBQW1CLEVBQTNFO0FBQ0EsWUFBTUMsZ0JBQWdCLEdBQUdkLGVBQXpCOztBQUNBLFVBQUljLGdCQUFnQixDQUFDSixVQUFELENBQXBCLEVBQWtDO0FBQzlCLFlBQUk7QUFDQUksVUFBQUEsZ0JBQWdCLENBQUNKLFVBQUQsQ0FBaEIsQ0FBNkIsR0FBR3JKLElBQWhDO0FBQ0gsU0FGRCxDQUVFLE9BQU8zQixHQUFQLEVBQVk7QUFDVmplLFVBQUFBLE9BQU8sQ0FBQ0QsS0FBUixDQUFlLHdDQUF1Q2twQixVQUFXLEVBQWpFO0FBQ0FqcEIsVUFBQUEsT0FBTyxDQUFDRCxLQUFSLENBQWUsR0FBRWtlLEdBQUcsQ0FBQ3FMLE9BQVEsS0FBSXJMLEdBQUcsQ0FBQ3NMLEtBQU0sRUFBM0M7QUFDSDtBQUNKO0FBQ0osS0FYRDtBQVlILEdBYkQ7QUFjSCxDQWZEOztBQWdCQSxTQUFTUixTQUFULEdBQXFCO0FBQ2pCLE1BQUksQ0FBQ1IsZUFBZSxDQUFDclksTUFBckIsRUFBNkI7QUFDekIsVUFBTW9aLE9BQU8sR0FBRyxnQ0FBZ0MscUVBQWhEO0FBQ0EsVUFBTSxJQUFJblIsS0FBSixDQUFVbVIsT0FBVixDQUFOO0FBQ0g7O0FBQ0QsU0FBT2YsZUFBZSxDQUFDclksTUFBdkI7QUFDSDs7QUFDRCxJQUFJK1IsUUFBUSxHQUFHc0csZUFBZjtBQUNBbFcsZUFBQSxHQUFrQjRQLFFBQWxCOztBQUNBLFNBQVN6UyxTQUFULEdBQXFCO0FBQ2pCLFNBQU9nRCxNQUFNLENBQUNwTyxPQUFQLENBQWVtTixVQUFmLENBQTBCK1csY0FBYyxDQUFDa0IsYUFBekMsQ0FBUDtBQUNIOztBQUNELFNBQVNwQixZQUFULENBQXNCLEdBQUd4SSxJQUF6QixFQUErQjtBQUMzQjJJLEVBQUFBLGVBQWUsQ0FBQ3JZLE1BQWhCLEdBQXlCLElBQUlrTyxPQUFPLENBQUNoYSxPQUFaLENBQW9CLEdBQUd3YixJQUF2QixDQUF6QjtBQUNBMkksRUFBQUEsZUFBZSxDQUFDQyxjQUFoQixDQUErQnZVLE9BQS9CLENBQXdDMk8sRUFBRCxJQUFNQSxFQUFFLEVBQS9DO0FBRUEyRixFQUFBQSxlQUFlLENBQUNDLGNBQWhCLEdBQWlDLEVBQWpDO0FBQ0EsU0FBT0QsZUFBZSxDQUFDclksTUFBdkI7QUFDSDs7QUFDRCxTQUFTbVksd0JBQVQsQ0FBa0NuWSxNQUFsQyxFQUEwQztBQUN0QyxRQUFNbU8sUUFBUSxHQUFHbk8sTUFBakI7QUFDQSxRQUFNdVosUUFBUSxHQUFHLEVBQWpCOztBQUVBLE9BQUssTUFBTUMsUUFBWCxJQUF1QmhCLGlCQUF2QixFQUF5QztBQUNyQyxRQUFJLE9BQU9ySyxRQUFRLENBQUNxTCxRQUFELENBQWYsS0FBOEIsUUFBbEMsRUFBNEM7QUFDeENELE1BQUFBLFFBQVEsQ0FBQ0MsUUFBRCxDQUFSLEdBQXFCdlgsTUFBTSxDQUFDOEssTUFBUCxDQUFjME0sS0FBSyxDQUFDQyxPQUFOLENBQWN2TCxRQUFRLENBQUNxTCxRQUFELENBQXRCLElBQW9DLEVBQXBDLEdBQXlDLEVBQXZELEVBQ2xCckwsUUFBUSxDQUFDcUwsUUFBRCxDQURVLENBQXJCLENBQ3VCO0FBRHZCO0FBR0E7QUFDSDs7QUFDREQsSUFBQUEsUUFBUSxDQUFDQyxRQUFELENBQVIsR0FBcUJyTCxRQUFRLENBQUNxTCxRQUFELENBQTdCO0FBQ0gsR0FacUMsQ0FhdEM7OztBQUNBRCxFQUFBQSxRQUFRLENBQUNaLE1BQVQsR0FBa0J6SyxPQUFPLENBQUNoYSxPQUFSLENBQWdCeWtCLE1BQWxDO0FBQ0FELEVBQUFBLGdCQUFnQixDQUFDM1UsT0FBakIsQ0FBMEI2VSxLQUFELElBQVM7QUFDOUJXLElBQUFBLFFBQVEsQ0FBQ1gsS0FBRCxDQUFSLEdBQWtCLENBQUMsR0FBR2xKLElBQUosS0FBVztBQUN6QixhQUFPdkIsUUFBUSxDQUFDeUssS0FBRCxDQUFSLENBQWdCLEdBQUdsSixJQUFuQixDQUFQO0FBQ0gsS0FGRDtBQUdILEdBSkQ7QUFLQSxTQUFPNkosUUFBUDtBQUNIOzs7Ozs7Ozs7OztBQ3hKWTs7QUFDYnRYLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELHVCQUFBLEdBQTBCc0osZUFBMUI7O0FBQ0EsSUFBSW5KLE1BQU0sR0FBR0UsbUJBQU8sQ0FBQyxvQkFBRCxDQUFwQjs7QUFDQSxJQUFJZ1Isb0JBQW9CLEdBQUdoUixtQkFBTyxDQUFDLHlGQUFELENBQWxDOztBQUNBLE1BQU1tWCx1QkFBdUIsR0FBRyxPQUFPQyxvQkFBUCxLQUFnQyxXQUFoRTs7QUFDQSxTQUFTbk8sZUFBVCxDQUF5QjtBQUFFQyxFQUFBQSxVQUFGO0FBQWVDLEVBQUFBO0FBQWYsQ0FBekIsRUFBcUQ7QUFDakQsUUFBTWtPLFVBQVUsR0FBR2xPLFFBQVEsSUFBSSxDQUFDZ08sdUJBQWhDO0FBQ0EsUUFBTUcsU0FBUyxHQUFHLENBQUMsR0FBR3hYLE1BQUosRUFBWThOLE1BQVosRUFBbEI7QUFDQSxRQUFNLENBQUMySixPQUFELEVBQVVDLFVBQVYsSUFBd0IsQ0FBQyxHQUFHMVgsTUFBSixFQUFZeE0sUUFBWixDQUFxQixLQUFyQixDQUE5QjtBQUNBLFFBQU15VixNQUFNLEdBQUcsQ0FBQyxHQUFHakosTUFBSixFQUFZd08sV0FBWixDQUF5QkMsRUFBRCxJQUFNO0FBQ3pDLFFBQUkrSSxTQUFTLENBQUN6SixPQUFkLEVBQXVCO0FBQ25CeUosTUFBQUEsU0FBUyxDQUFDekosT0FBVjtBQUNBeUosTUFBQUEsU0FBUyxDQUFDekosT0FBVixHQUFvQnZMLFNBQXBCO0FBQ0g7O0FBQ0QsUUFBSStVLFVBQVUsSUFBSUUsT0FBbEIsRUFBMkI7O0FBQzNCLFFBQUloSixFQUFFLElBQUlBLEVBQUUsQ0FBQ2tKLE9BQWIsRUFBc0I7QUFDbEJILE1BQUFBLFNBQVMsQ0FBQ3pKLE9BQVYsR0FBb0I2SixPQUFPLENBQUNuSixFQUFELEVBQU1uRixTQUFELElBQWFBLFNBQVMsSUFBSW9PLFVBQVUsQ0FBQ3BPLFNBQUQsQ0FBekMsRUFDekI7QUFDRUYsUUFBQUE7QUFERixPQUR5QixDQUEzQjtBQUlIO0FBQ0osR0FaYyxFQVlaLENBQ0NtTyxVQURELEVBRUNuTyxVQUZELEVBR0NxTyxPQUhELENBWlksQ0FBZjtBQWlCQSxHQUFDLEdBQUd6WCxNQUFKLEVBQVl2TSxTQUFaLENBQXNCLE1BQUk7QUFDdEIsUUFBSSxDQUFDNGpCLHVCQUFMLEVBQThCO0FBQzFCLFVBQUksQ0FBQ0ksT0FBTCxFQUFjO0FBQ1YsY0FBTUksWUFBWSxHQUFHLENBQUMsR0FBRzNHLG9CQUFKLEVBQTBCbkIsbUJBQTFCLENBQThDLE1BQUkySCxVQUFVLENBQUMsSUFBRCxDQUE1RCxDQUFyQjtBQUVBLGVBQU8sTUFBSSxDQUFDLEdBQUd4RyxvQkFBSixFQUEwQmxCLGtCQUExQixDQUE2QzZILFlBQTdDLENBQVg7QUFFSDtBQUNKO0FBQ0osR0FURCxFQVNHLENBQ0NKLE9BREQsQ0FUSDtBQVlBLFNBQU8sQ0FDSHhPLE1BREcsRUFFSHdPLE9BRkcsQ0FBUDtBQUlIOztBQUNELFNBQVNHLE9BQVQsQ0FBaUJFLE9BQWpCLEVBQTBCQyxRQUExQixFQUFvQy9MLE9BQXBDLEVBQTZDO0FBQ3pDLFFBQU07QUFBRTJFLElBQUFBLEVBQUY7QUFBT3FILElBQUFBLFFBQVA7QUFBa0JDLElBQUFBO0FBQWxCLE1BQWdDQyxjQUFjLENBQUNsTSxPQUFELENBQXBEO0FBQ0FpTSxFQUFBQSxRQUFRLENBQUM1TSxHQUFULENBQWF5TSxPQUFiLEVBQXNCQyxRQUF0QjtBQUNBQyxFQUFBQSxRQUFRLENBQUNKLE9BQVQsQ0FBaUJFLE9BQWpCO0FBQ0EsU0FBTyxTQUFTTixTQUFULEdBQXFCO0FBQ3hCUyxJQUFBQSxRQUFRLENBQUNFLE1BQVQsQ0FBZ0JMLE9BQWhCO0FBQ0FFLElBQUFBLFFBQVEsQ0FBQ1IsU0FBVCxDQUFtQk0sT0FBbkIsRUFGd0IsQ0FHeEI7O0FBQ0EsUUFBSUcsUUFBUSxDQUFDL2tCLElBQVQsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDckI4a0IsTUFBQUEsUUFBUSxDQUFDSSxVQUFUO0FBQ0FDLE1BQUFBLFNBQVMsQ0FBQ0YsTUFBVixDQUFpQnhILEVBQWpCO0FBQ0g7QUFDSixHQVJEO0FBU0g7O0FBQ0QsTUFBTTBILFNBQVMsR0FBRyxJQUFJM1YsR0FBSixFQUFsQjs7QUFDQSxTQUFTd1YsY0FBVCxDQUF3QmxNLE9BQXhCLEVBQWlDO0FBQzdCLFFBQU0yRSxFQUFFLEdBQUczRSxPQUFPLENBQUM1QyxVQUFSLElBQXNCLEVBQWpDO0FBQ0EsTUFBSTZOLFFBQVEsR0FBR29CLFNBQVMsQ0FBQzNTLEdBQVYsQ0FBY2lMLEVBQWQsQ0FBZjs7QUFDQSxNQUFJc0csUUFBSixFQUFjO0FBQ1YsV0FBT0EsUUFBUDtBQUNIOztBQUNELFFBQU1nQixRQUFRLEdBQUcsSUFBSXZWLEdBQUosRUFBakI7QUFDQSxRQUFNc1YsUUFBUSxHQUFHLElBQUlWLG9CQUFKLENBQTBCZ0IsT0FBRCxJQUFXO0FBQ2pEQSxJQUFBQSxPQUFPLENBQUM3VyxPQUFSLENBQWlCNlAsS0FBRCxJQUFTO0FBQ3JCLFlBQU15RyxRQUFRLEdBQUdFLFFBQVEsQ0FBQ3ZTLEdBQVQsQ0FBYTRMLEtBQUssQ0FBQ3hRLE1BQW5CLENBQWpCO0FBQ0EsWUFBTXdJLFNBQVMsR0FBR2dJLEtBQUssQ0FBQ2lILGNBQU4sSUFBd0JqSCxLQUFLLENBQUNrSCxpQkFBTixHQUEwQixDQUFwRTs7QUFDQSxVQUFJVCxRQUFRLElBQUl6TyxTQUFoQixFQUEyQjtBQUN2QnlPLFFBQUFBLFFBQVEsQ0FBQ3pPLFNBQUQsQ0FBUjtBQUNIO0FBQ0osS0FORDtBQU9ILEdBUmdCLEVBUWQwQyxPQVJjLENBQWpCO0FBU0FxTSxFQUFBQSxTQUFTLENBQUNoTixHQUFWLENBQWNzRixFQUFkLEVBQWtCc0csUUFBUSxHQUFHO0FBQ3pCdEcsSUFBQUEsRUFEeUI7QUFFekJxSCxJQUFBQSxRQUZ5QjtBQUd6QkMsSUFBQUE7QUFIeUIsR0FBN0I7QUFLQSxTQUFPaEIsUUFBUDtBQUNIOzs7Ozs7Ozs7OztBQ25GWTs7QUFDYnRYLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELGVBQUEsR0FBa0I0WSxVQUFsQjs7QUFDQSxJQUFJelksTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUFSLENBQW5DOztBQUNBLElBQUkwTCxPQUFPLEdBQUcxTCxtQkFBTyxDQUFDLDJEQUFELENBQXJCOztBQUNBLFNBQVNELHNCQUFULENBQWdDTyxHQUFoQyxFQUFxQztBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0ksVUFBWCxHQUF3QkosR0FBeEIsR0FBOEI7QUFDakM1TyxJQUFBQSxPQUFPLEVBQUU0TztBQUR3QixHQUFyQztBQUdIOztBQUNELFNBQVNpWSxVQUFULENBQW9CQyxpQkFBcEIsRUFBdUM7QUFDbkMsV0FBU0MsaUJBQVQsQ0FBMkJ2bUIsS0FBM0IsRUFBa0M7QUFDOUIsV0FBTyxhQUFjNE4sTUFBTSxDQUFDcE8sT0FBUCxDQUFlMFksYUFBZixDQUE2Qm9PLGlCQUE3QixFQUFnRC9ZLE1BQU0sQ0FBQzhLLE1BQVAsQ0FBYztBQUMvRS9NLE1BQUFBLE1BQU0sRUFBRSxDQUFDLEdBQUdrTyxPQUFKLEVBQWE1TyxTQUFiO0FBRHVFLEtBQWQsRUFFbEU1SyxLQUZrRSxDQUFoRCxDQUFyQjtBQUdIOztBQUNEdW1CLEVBQUFBLGlCQUFpQixDQUFDQyxlQUFsQixHQUFvQ0YsaUJBQWlCLENBQUNFLGVBQXREO0FBQ0FELEVBQUFBLGlCQUFpQixDQUFDRSxtQkFBbEIsR0FBd0NILGlCQUFpQixDQUFDRyxtQkFBMUQ7O0FBQ0EsWUFBMkM7QUFDdkMsVUFBTTVtQixJQUFJLEdBQUd5bUIsaUJBQWlCLENBQUNJLFdBQWxCLElBQWlDSixpQkFBaUIsQ0FBQ3ptQixJQUFuRCxJQUEyRCxTQUF4RTtBQUNBMG1CLElBQUFBLGlCQUFpQixDQUFDRyxXQUFsQixHQUFpQyxjQUFhN21CLElBQUssR0FBbkQ7QUFDSDs7QUFDRCxTQUFPMG1CLGlCQUFQO0FBQ0g7Ozs7Ozs7Ozs7O0FDekJZOztBQUNiaFosOENBQTZDO0FBQ3pDRyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUQsdUJBQUEsR0FBMEJxUCxlQUExQjtBQUNBclAsaUJBQUEsR0FBb0J5UCxTQUFwQjtBQUNBelAsaUJBQUEsR0FBb0JrWixTQUFwQjtBQUNBbFosbUJBQUEsR0FBc0JtWixXQUF0QjtBQUNBblosbUJBQUEsR0FBc0J3UCxXQUF0QjtBQUNBeFAsbUJBQUEsR0FBc0JvWixXQUF0QjtBQUNBcFosa0JBQUEsR0FBcUJvTSxVQUFyQjtBQUNBcE0scUJBQUEsR0FBd0JxWixhQUF4QjtBQUNBclosbUJBQUEsR0FBc0JzTyxXQUF0QjtBQUNBdE8sZUFBQSxHQUFrQixLQUFLLENBQXZCOztBQUNBLElBQUlzWix1QkFBdUIsR0FBR2paLG1CQUFPLENBQUMsNkdBQUQsQ0FBckM7O0FBQ0EsSUFBSWtaLFlBQVksR0FBR2xaLG1CQUFPLENBQUMscUZBQUQsQ0FBMUI7O0FBQ0EsSUFBSW1aLG9CQUFvQixHQUFHblosbUJBQU8sQ0FBQyxvRkFBRCxDQUFsQzs7QUFDQSxJQUFJb1osb0JBQW9CLEdBQUdwWixtQkFBTyxDQUFDLG9FQUFELENBQWxDOztBQUNBLElBQUlxWixLQUFLLEdBQUd0WixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyx3QkFBRCxDQUFSLENBQWxDOztBQUNBLElBQUlzWixNQUFNLEdBQUd0WixtQkFBTyxDQUFDLHFDQUFELENBQXBCOztBQUNBLElBQUl1WixVQUFVLEdBQUd2WixtQkFBTyxDQUFDLDhDQUFELENBQXhCOztBQUNBLElBQUl3WixpQkFBaUIsR0FBR3haLG1CQUFPLENBQUMsOERBQUQsQ0FBL0I7O0FBQ0EsSUFBSXlaLFlBQVksR0FBR3paLG1CQUFPLENBQUMsZ0RBQUQsQ0FBMUI7O0FBQ0EsSUFBSTBaLGdCQUFnQixHQUFHM1osc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsdUNBQUQsQ0FBUixDQUE3Qzs7QUFDQSxJQUFJMlosYUFBYSxHQUFHM1osbUJBQU8sQ0FBQyxvREFBRCxDQUEzQjs7QUFDQSxJQUFJNFosV0FBVyxHQUFHNVosbUJBQU8sQ0FBQyxnREFBRCxDQUF6Qjs7QUFDQSxTQUFTRCxzQkFBVCxDQUFnQ08sR0FBaEMsRUFBcUM7QUFDakMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNJLFVBQVgsR0FBd0JKLEdBQXhCLEdBQThCO0FBQ2pDNU8sSUFBQUEsT0FBTyxFQUFFNE87QUFEd0IsR0FBckM7QUFHSDs7QUFDRCxJQUFJdVosa0JBQUo7O0FBQ0EsSUFBSW5XLEtBQUosRUFBcUMsRUFFcEM7O0FBQ0QsTUFBTXFXLFFBQVEsR0FBR3JXLE1BQUEsSUFBc0MsRUFBdkQ7O0FBQ0EsU0FBU3VXLHNCQUFULEdBQWtDO0FBQzlCLFNBQU94YSxNQUFNLENBQUM4SyxNQUFQLENBQWMsSUFBSTlFLEtBQUosQ0FBVSxpQkFBVixDQUFkLEVBQTRDO0FBQy9DdU4sSUFBQUEsU0FBUyxFQUFFO0FBRG9DLEdBQTVDLENBQVA7QUFHSDs7QUFDRCxTQUFTa0gsYUFBVCxDQUF1QmxvQixJQUF2QixFQUE2Qm1vQixNQUE3QixFQUFxQztBQUNqQyxTQUFPQSxNQUFNLElBQUlub0IsSUFBSSxDQUFDZ1UsVUFBTCxDQUFnQixHQUFoQixDQUFWLEdBQWlDaFUsSUFBSSxLQUFLLEdBQVQsR0FBZSxDQUFDLEdBQUdpbkIsdUJBQUosRUFBNkJ4SiwwQkFBN0IsQ0FBd0QwSyxNQUF4RCxDQUFmLEdBQWtGLEdBQUVBLE1BQU8sR0FBRUMsZUFBZSxDQUFDcG9CLElBQUQsQ0FBZixLQUEwQixHQUExQixHQUFnQ0EsSUFBSSxDQUFDMGtCLFNBQUwsQ0FBZSxDQUFmLENBQWhDLEdBQW9EMWtCLElBQUssRUFBdkwsR0FBMkxBLElBQWxNO0FBQ0g7O0FBQ0QsU0FBU2dkLGVBQVQsQ0FBeUJoZCxJQUF6QixFQUErQmlhLE1BQS9CLEVBQXVDZ0QsT0FBdkMsRUFBZ0RDLGFBQWhELEVBQStEO0FBQzNELE1BQUl4TCxLQUFKLEVBQXFDLEVBQXJDLE1BT087QUFDSCxXQUFPLEtBQVA7QUFDSDtBQUNKOztBQUNELFNBQVMwTCxTQUFULENBQW1CcGQsSUFBbkIsRUFBeUJpYSxNQUF6QixFQUFpQ29ELGFBQWpDLEVBQWdEO0FBQzVDLE1BQUkzTCxLQUFKLEVBQXFDLEVBS3BDOztBQUNELFNBQU8xUixJQUFQO0FBQ0g7O0FBQ0QsU0FBUzZtQixTQUFULENBQW1CN21CLElBQW5CLEVBQXlCaWEsTUFBekIsRUFBaUM7QUFDN0IsTUFBSXZJLEtBQUosRUFBcUMsRUFLcEM7O0FBQ0QsU0FBTzFSLElBQVA7QUFDSDs7QUFDRCxTQUFTb29CLGVBQVQsQ0FBeUJwb0IsSUFBekIsRUFBK0I7QUFDM0IsUUFBTStvQixVQUFVLEdBQUcvb0IsSUFBSSxDQUFDNFAsT0FBTCxDQUFhLEdBQWIsQ0FBbkI7QUFDQSxRQUFNb1osU0FBUyxHQUFHaHBCLElBQUksQ0FBQzRQLE9BQUwsQ0FBYSxHQUFiLENBQWxCOztBQUNBLE1BQUltWixVQUFVLEdBQUcsQ0FBQyxDQUFkLElBQW1CQyxTQUFTLEdBQUcsQ0FBQyxDQUFwQyxFQUF1QztBQUNuQ2hwQixJQUFBQSxJQUFJLEdBQUdBLElBQUksQ0FBQzBrQixTQUFMLENBQWUsQ0FBZixFQUFrQnFFLFVBQVUsR0FBRyxDQUFDLENBQWQsR0FBa0JBLFVBQWxCLEdBQStCQyxTQUFqRCxDQUFQO0FBQ0g7O0FBQ0QsU0FBT2hwQixJQUFQO0FBQ0g7O0FBQ0QsU0FBUzhtQixXQUFULENBQXFCOW1CLElBQXJCLEVBQTJCO0FBQ3ZCQSxFQUFBQSxJQUFJLEdBQUdvb0IsZUFBZSxDQUFDcG9CLElBQUQsQ0FBdEI7QUFDQSxTQUFPQSxJQUFJLEtBQUsrbkIsUUFBVCxJQUFxQi9uQixJQUFJLENBQUNnVSxVQUFMLENBQWdCK1QsUUFBUSxHQUFHLEdBQTNCLENBQTVCO0FBQ0g7O0FBQ0QsU0FBUzVLLFdBQVQsQ0FBcUJuZCxJQUFyQixFQUEyQjtBQUN2QjtBQUNBLFNBQU9rb0IsYUFBYSxDQUFDbG9CLElBQUQsRUFBTytuQixRQUFQLENBQXBCO0FBQ0g7O0FBQ0QsU0FBU2hCLFdBQVQsQ0FBcUIvbUIsSUFBckIsRUFBMkI7QUFDdkJBLEVBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDK1ksS0FBTCxDQUFXZ1AsUUFBUSxDQUFDaFosTUFBcEIsQ0FBUDtBQUNBLE1BQUksQ0FBQy9PLElBQUksQ0FBQ2dVLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBTCxFQUEyQmhVLElBQUksR0FBSSxJQUFHQSxJQUFLLEVBQWhCO0FBQzNCLFNBQU9BLElBQVA7QUFDSDs7QUFDRCxTQUFTK1osVUFBVCxDQUFvQi9lLEdBQXBCLEVBQXlCO0FBQ3JCO0FBQ0EsTUFBSUEsR0FBRyxDQUFDZ1osVUFBSixDQUFlLEdBQWYsS0FBdUJoWixHQUFHLENBQUNnWixVQUFKLENBQWUsR0FBZixDQUF2QixJQUE4Q2haLEdBQUcsQ0FBQ2daLFVBQUosQ0FBZSxHQUFmLENBQWxELEVBQXVFLE9BQU8sSUFBUDs7QUFDdkUsTUFBSTtBQUNBO0FBQ0EsVUFBTWlWLGNBQWMsR0FBRyxDQUFDLEdBQUczQixNQUFKLEVBQVk0QixpQkFBWixFQUF2QjtBQUNBLFVBQU1DLFFBQVEsR0FBRyxJQUFJblEsR0FBSixDQUFRaGUsR0FBUixFQUFhaXVCLGNBQWIsQ0FBakI7QUFDQSxXQUFPRSxRQUFRLENBQUNDLE1BQVQsS0FBb0JILGNBQXBCLElBQXNDbkMsV0FBVyxDQUFDcUMsUUFBUSxDQUFDVCxRQUFWLENBQXhEO0FBQ0gsR0FMRCxDQUtFLE9BQU85b0IsQ0FBUCxFQUFVO0FBQ1IsV0FBTyxLQUFQO0FBQ0g7QUFDSjs7QUFDRCxTQUFTb25CLGFBQVQsQ0FBdUJ6RixLQUF2QixFQUE4QjhILFVBQTlCLEVBQTBDcHRCLEtBQTFDLEVBQWlEO0FBQzdDLE1BQUlxdEIsaUJBQWlCLEdBQUcsRUFBeEI7QUFDQSxRQUFNQyxZQUFZLEdBQUcsQ0FBQyxHQUFHM0IsV0FBSixFQUFpQjRCLGFBQWpCLENBQStCakksS0FBL0IsQ0FBckI7QUFDQSxRQUFNa0ksYUFBYSxHQUFHRixZQUFZLENBQUNHLE1BQW5DO0FBQ0EsUUFBTUMsY0FBYyxHQUFHO0FBQ3ZCLEdBQUNOLFVBQVUsS0FBSzlILEtBQWYsR0FBdUIsQ0FBQyxHQUFHb0csYUFBSixFQUFtQmlDLGVBQW5CLENBQW1DTCxZQUFuQyxFQUFpREYsVUFBakQsQ0FBdkIsR0FBc0YsRUFBdkYsS0FBOEY7QUFDOUY7QUFDQXB0QixFQUFBQSxLQUhBO0FBSUFxdEIsRUFBQUEsaUJBQWlCLEdBQUcvSCxLQUFwQjtBQUNBLFFBQU10SSxNQUFNLEdBQUd4TCxNQUFNLENBQUN5QixJQUFQLENBQVl1YSxhQUFaLENBQWY7O0FBQ0EsTUFBSSxDQUFDeFEsTUFBTSxDQUFDNFEsS0FBUCxDQUFjQyxLQUFELElBQVM7QUFDdkIsUUFBSWxjLEtBQUssR0FBRytiLGNBQWMsQ0FBQ0csS0FBRCxDQUFkLElBQXlCLEVBQXJDO0FBQ0EsVUFBTTtBQUFFQyxNQUFBQSxNQUFGO0FBQVdDLE1BQUFBO0FBQVgsUUFBeUJQLGFBQWEsQ0FBQ0ssS0FBRCxDQUE1QyxDQUZ1QixDQUd2QjtBQUNBOztBQUNBLFFBQUlHLFFBQVEsR0FBSSxJQUFHRixNQUFNLEdBQUcsS0FBSCxHQUFXLEVBQUcsR0FBRUQsS0FBTSxHQUEvQzs7QUFDQSxRQUFJRSxRQUFKLEVBQWM7QUFDVkMsTUFBQUEsUUFBUSxHQUFJLEdBQUUsQ0FBQ3JjLEtBQUQsR0FBUyxHQUFULEdBQWUsRUFBRyxJQUFHcWMsUUFBUyxHQUE1QztBQUNIOztBQUNELFFBQUlGLE1BQU0sSUFBSSxDQUFDOUUsS0FBSyxDQUFDQyxPQUFOLENBQWN0WCxLQUFkLENBQWYsRUFBcUNBLEtBQUssR0FBRyxDQUN6Q0EsS0FEeUMsQ0FBUjtBQUdyQyxXQUFPLENBQUNvYyxRQUFRLElBQUlGLEtBQUssSUFBSUgsY0FBdEIsTUFDTkwsaUJBQWlCLEdBQUdBLGlCQUFpQixDQUFDMU8sT0FBbEIsQ0FBMEJxUCxRQUExQixFQUFvQ0YsTUFBTSxHQUFHbmMsS0FBSyxDQUFDM00sR0FBTixFQUFVO0FBQzVFO0FBQ0E7QUFDQTtBQUNDaXBCLElBQUFBLE9BQUQsSUFBV3pRLGtCQUFrQixDQUFDeVEsT0FBRCxDQUpxQyxFQUtoRWhYLElBTGdFLENBSzNELEdBTDJELENBQUgsR0FLakR1RyxrQkFBa0IsQ0FBQzdMLEtBQUQsQ0FMWCxLQUt1QixHQU5yQyxDQUFQO0FBT0gsR0FuQkksQ0FBTCxFQW1CSTtBQUNBMGIsSUFBQUEsaUJBQWlCLEdBQUcsRUFBcEIsQ0FBdUI7QUFBdkIsS0FEQSxDQUdKO0FBQ0E7QUFDQzs7QUFDRCxTQUFPO0FBQ0hyUSxJQUFBQSxNQURHO0FBRUg5ZCxJQUFBQSxNQUFNLEVBQUVtdUI7QUFGTCxHQUFQO0FBSUg7O0FBQ0QsU0FBU2Esa0JBQVQsQ0FBNEJsdUIsS0FBNUIsRUFBbUNnZCxNQUFuQyxFQUEyQztBQUN2QyxRQUFNbVIsYUFBYSxHQUFHLEVBQXRCO0FBRUEzYyxFQUFBQSxNQUFNLENBQUN5QixJQUFQLENBQVlqVCxLQUFaLEVBQW1Cc1QsT0FBbkIsQ0FBNEJoSyxHQUFELElBQU87QUFDOUIsUUFBSSxDQUFDMFQsTUFBTSxDQUFDMUMsUUFBUCxDQUFnQmhSLEdBQWhCLENBQUwsRUFBMkI7QUFDdkI2a0IsTUFBQUEsYUFBYSxDQUFDN2tCLEdBQUQsQ0FBYixHQUFxQnRKLEtBQUssQ0FBQ3NKLEdBQUQsQ0FBMUI7QUFDSDtBQUNKLEdBSkQ7QUFLQSxTQUFPNmtCLGFBQVA7QUFDSDs7QUFDRCxTQUFTbk8sV0FBVCxDQUFxQnpRLE1BQXJCLEVBQTZCbU4sSUFBN0IsRUFBbUMwUixTQUFuQyxFQUE4QztBQUMxQztBQUNBLE1BQUlDLElBQUo7QUFDQSxNQUFJQyxXQUFXLEdBQUcsT0FBTzVSLElBQVAsS0FBZ0IsUUFBaEIsR0FBMkJBLElBQTNCLEdBQWtDLENBQUMsR0FBRzJPLE1BQUosRUFBWWtELG9CQUFaLENBQWlDN1IsSUFBakMsQ0FBcEQsQ0FIMEMsQ0FJMUM7QUFDQTs7QUFDQSxRQUFNOFIsYUFBYSxHQUFHRixXQUFXLENBQUNsWSxLQUFaLENBQWtCLG9CQUFsQixDQUF0QjtBQUNBLFFBQU1xWSxrQkFBa0IsR0FBR0QsYUFBYSxHQUFHRixXQUFXLENBQUN6QixNQUFaLENBQW1CMkIsYUFBYSxDQUFDLENBQUQsQ0FBYixDQUFpQjFiLE1BQXBDLENBQUgsR0FBaUR3YixXQUF6RjtBQUNBLFFBQU1JLFFBQVEsR0FBR0Qsa0JBQWtCLENBQUNFLEtBQW5CLENBQXlCLEdBQXpCLENBQWpCOztBQUNBLE1BQUksQ0FBQ0QsUUFBUSxDQUFDLENBQUQsQ0FBUixJQUFlLEVBQWhCLEVBQW9CdFksS0FBcEIsQ0FBMEIsV0FBMUIsQ0FBSixFQUE0QztBQUN4Qy9XLElBQUFBLE9BQU8sQ0FBQ0QsS0FBUixDQUFlLHVDQUFzQ2t2QixXQUFZLDZFQUFqRTtBQUNBLFVBQU1NLGFBQWEsR0FBRyxDQUFDLEdBQUd2RCxNQUFKLEVBQVl3RCx3QkFBWixDQUFxQ0osa0JBQXJDLENBQXRCO0FBQ0FILElBQUFBLFdBQVcsR0FBRyxDQUFDRSxhQUFhLEdBQUdBLGFBQWEsQ0FBQyxDQUFELENBQWhCLEdBQXNCLEVBQXBDLElBQTBDSSxhQUF4RDtBQUNILEdBYnlDLENBYzFDOzs7QUFDQSxNQUFJLENBQUM5USxVQUFVLENBQUN3USxXQUFELENBQWYsRUFBOEI7QUFDMUIsV0FBT0YsU0FBUyxHQUFHLENBQ2ZFLFdBRGUsQ0FBSCxHQUVaQSxXQUZKO0FBR0g7O0FBQ0QsTUFBSTtBQUNBRCxJQUFBQSxJQUFJLEdBQUcsSUFBSXRSLEdBQUosQ0FBUXVSLFdBQVcsQ0FBQ3ZXLFVBQVosQ0FBdUIsR0FBdkIsSUFBOEJ4SSxNQUFNLENBQUNHLE1BQXJDLEdBQThDSCxNQUFNLENBQUNrZCxRQUE3RCxFQUF1RSxVQUF2RSxDQUFQO0FBQ0gsR0FGRCxDQUVFLE9BQU85b0IsQ0FBUCxFQUFVO0FBQ1I7QUFDQTBxQixJQUFBQSxJQUFJLEdBQUcsSUFBSXRSLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBYixDQUFQO0FBQ0g7O0FBQ0QsTUFBSTtBQUNBLFVBQU0rUixRQUFRLEdBQUcsSUFBSS9SLEdBQUosQ0FBUXVSLFdBQVIsRUFBcUJELElBQXJCLENBQWpCO0FBQ0FTLElBQUFBLFFBQVEsQ0FBQ3JDLFFBQVQsR0FBb0IsQ0FBQyxHQUFHekIsdUJBQUosRUFBNkJ4SiwwQkFBN0IsQ0FBd0RzTixRQUFRLENBQUNyQyxRQUFqRSxDQUFwQjtBQUNBLFFBQUlzQyxjQUFjLEdBQUcsRUFBckI7O0FBQ0EsUUFBSSxDQUFDLEdBQUd6RCxVQUFKLEVBQWdCMEQsY0FBaEIsQ0FBK0JGLFFBQVEsQ0FBQ3JDLFFBQXhDLEtBQXFEcUMsUUFBUSxDQUFDN1IsWUFBOUQsSUFBOEVtUixTQUFsRixFQUE2RjtBQUN6RixZQUFNcHVCLEtBQUssR0FBRyxDQUFDLEdBQUd3ckIsWUFBSixFQUFrQnlELHNCQUFsQixDQUF5Q0gsUUFBUSxDQUFDN1IsWUFBbEQsQ0FBZDtBQUNBLFlBQU07QUFBRS9kLFFBQUFBLE1BQUY7QUFBVzhkLFFBQUFBO0FBQVgsVUFBdUIrTixhQUFhLENBQUMrRCxRQUFRLENBQUNyQyxRQUFWLEVBQW9CcUMsUUFBUSxDQUFDckMsUUFBN0IsRUFBdUN6c0IsS0FBdkMsQ0FBMUM7O0FBQ0EsVUFBSWQsTUFBSixFQUFZO0FBQ1I2dkIsUUFBQUEsY0FBYyxHQUFHLENBQUMsR0FBRzFELE1BQUosRUFBWWtELG9CQUFaLENBQWlDO0FBQzlDOUIsVUFBQUEsUUFBUSxFQUFFdnRCLE1BRG9DO0FBRTlDZ3dCLFVBQUFBLElBQUksRUFBRUosUUFBUSxDQUFDSSxJQUYrQjtBQUc5Q2x2QixVQUFBQSxLQUFLLEVBQUVrdUIsa0JBQWtCLENBQUNsdUIsS0FBRCxFQUFRZ2QsTUFBUjtBQUhxQixTQUFqQyxDQUFqQjtBQUtIO0FBQ0osS0FkRCxDQWVBOzs7QUFDQSxVQUFNOEMsWUFBWSxHQUFHZ1AsUUFBUSxDQUFDM0IsTUFBVCxLQUFvQmtCLElBQUksQ0FBQ2xCLE1BQXpCLEdBQWtDMkIsUUFBUSxDQUFDcFMsSUFBVCxDQUFjSSxLQUFkLENBQW9CZ1MsUUFBUSxDQUFDM0IsTUFBVCxDQUFnQnJhLE1BQXBDLENBQWxDLEdBQWdGZ2MsUUFBUSxDQUFDcFMsSUFBOUc7QUFDQSxXQUFPMFIsU0FBUyxHQUFHLENBQ2Z0TyxZQURlLEVBRWZpUCxjQUFjLElBQUlqUCxZQUZILENBQUgsR0FHWkEsWUFISjtBQUlILEdBckJELENBcUJFLE9BQU9uYyxDQUFQLEVBQVU7QUFDUixXQUFPeXFCLFNBQVMsR0FBRyxDQUNmRSxXQURlLENBQUgsR0FFWkEsV0FGSjtBQUdIO0FBQ0o7O0FBQ0QsU0FBU2EsV0FBVCxDQUFxQnB3QixHQUFyQixFQUEwQjtBQUN0QixRQUFNb3VCLE1BQU0sR0FBRyxDQUFDLEdBQUc5QixNQUFKLEVBQVk0QixpQkFBWixFQUFmO0FBQ0EsU0FBT2x1QixHQUFHLENBQUNnWixVQUFKLENBQWVvVixNQUFmLElBQXlCcHVCLEdBQUcsQ0FBQzBwQixTQUFKLENBQWMwRSxNQUFNLENBQUNyYSxNQUFyQixDQUF6QixHQUF3RC9ULEdBQS9EO0FBQ0g7O0FBQ0QsU0FBU3F3QixZQUFULENBQXNCN2YsTUFBdEIsRUFBOEJ4USxHQUE5QixFQUFtQzBkLEVBQW5DLEVBQXVDO0FBQ25DO0FBQ0E7QUFDQSxNQUFJLENBQUNxRCxZQUFELEVBQWVDLFVBQWYsSUFBNkJDLFdBQVcsQ0FBQ3pRLE1BQUQsRUFBU3hRLEdBQVQsRUFBYyxJQUFkLENBQTVDO0FBQ0EsUUFBTW91QixNQUFNLEdBQUcsQ0FBQyxHQUFHOUIsTUFBSixFQUFZNEIsaUJBQVosRUFBZjtBQUNBLFFBQU1vQyxhQUFhLEdBQUd2UCxZQUFZLENBQUMvSCxVQUFiLENBQXdCb1YsTUFBeEIsQ0FBdEI7QUFDQSxRQUFNbUMsV0FBVyxHQUFHdlAsVUFBVSxJQUFJQSxVQUFVLENBQUNoSSxVQUFYLENBQXNCb1YsTUFBdEIsQ0FBbEM7QUFDQXJOLEVBQUFBLFlBQVksR0FBR3FQLFdBQVcsQ0FBQ3JQLFlBQUQsQ0FBMUI7QUFDQUMsRUFBQUEsVUFBVSxHQUFHQSxVQUFVLEdBQUdvUCxXQUFXLENBQUNwUCxVQUFELENBQWQsR0FBNkJBLFVBQXBEO0FBQ0EsUUFBTXdQLFdBQVcsR0FBR0YsYUFBYSxHQUFHdlAsWUFBSCxHQUFrQm9CLFdBQVcsQ0FBQ3BCLFlBQUQsQ0FBOUQ7QUFDQSxRQUFNMFAsVUFBVSxHQUFHL1MsRUFBRSxHQUFHMFMsV0FBVyxDQUFDblAsV0FBVyxDQUFDelEsTUFBRCxFQUFTa04sRUFBVCxDQUFaLENBQWQsR0FBMENzRCxVQUFVLElBQUlELFlBQTdFO0FBQ0EsU0FBTztBQUNIL2dCLElBQUFBLEdBQUcsRUFBRXd3QixXQURGO0FBRUg5UyxJQUFBQSxFQUFFLEVBQUU2UyxXQUFXLEdBQUdFLFVBQUgsR0FBZ0J0TyxXQUFXLENBQUNzTyxVQUFEO0FBRnZDLEdBQVA7QUFJSDs7QUFDRCxTQUFTQyxtQkFBVCxDQUE2QmhELFFBQTdCLEVBQXVDaUQsS0FBdkMsRUFBOEM7QUFDMUMsUUFBTUMsYUFBYSxHQUFHLENBQUMsR0FBRzNFLHVCQUFKLEVBQTZCekosdUJBQTdCLENBQXFELENBQUMsR0FBRzJKLG9CQUFKLEVBQTBCMEUsbUJBQTFCLENBQThDbkQsUUFBOUMsQ0FBckQsQ0FBdEI7O0FBQ0EsTUFBSWtELGFBQWEsS0FBSyxNQUFsQixJQUE0QkEsYUFBYSxLQUFLLFNBQWxELEVBQTZEO0FBQ3pELFdBQU9sRCxRQUFQO0FBQ0gsR0FKeUMsQ0FLMUM7OztBQUNBLE1BQUksQ0FBQ2lELEtBQUssQ0FBQ3BWLFFBQU4sQ0FBZXFWLGFBQWYsQ0FBTCxFQUFvQztBQUNoQztBQUNBRCxJQUFBQSxLQUFLLENBQUNHLElBQU4sQ0FBWWx3QixJQUFELElBQVE7QUFDZixVQUFJLENBQUMsR0FBRzJyQixVQUFKLEVBQWdCMEQsY0FBaEIsQ0FBK0JydkIsSUFBL0IsS0FBd0MsQ0FBQyxHQUFHZ3NCLFdBQUosRUFBaUI0QixhQUFqQixDQUErQjV0QixJQUEvQixFQUFxQ213QixFQUFyQyxDQUF3Q25PLElBQXhDLENBQTZDZ08sYUFBN0MsQ0FBNUMsRUFBeUc7QUFDckdsRCxRQUFBQSxRQUFRLEdBQUc5c0IsSUFBWDtBQUNBLGVBQU8sSUFBUDtBQUNIO0FBQ0osS0FMRDtBQU1IOztBQUNELFNBQU8sQ0FBQyxHQUFHcXJCLHVCQUFKLEVBQTZCekosdUJBQTdCLENBQXFEa0wsUUFBckQsQ0FBUDtBQUNIOztBQUNELE1BQU1zRCx1QkFBdUIsR0FBR3RhLE1BQUEsSUFBbUgsQ0FBbko7QUFRQSxNQUFNMmEsa0JBQWtCLEdBQUc3TCxNQUFNLENBQUMsb0JBQUQsQ0FBakM7O0FBQ0EsU0FBUzhMLFVBQVQsQ0FBb0J0eEIsR0FBcEIsRUFBeUJ1eEIsUUFBekIsRUFBbUM7QUFDL0IsU0FBT3J4QixLQUFLLENBQUNGLEdBQUQsRUFBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQXd4QixJQUFBQSxXQUFXLEVBQUU7QUFaQyxHQUFOLENBQUwsQ0FhSm5ZLElBYkksQ0FhRTJMLEdBQUQsSUFBTztBQUNYLFFBQUksQ0FBQ0EsR0FBRyxDQUFDb0MsRUFBVCxFQUFhO0FBQ1QsVUFBSW1LLFFBQVEsR0FBRyxDQUFYLElBQWdCdk0sR0FBRyxDQUFDeU0sTUFBSixJQUFjLEdBQWxDLEVBQXVDO0FBQ25DLGVBQU9ILFVBQVUsQ0FBQ3R4QixHQUFELEVBQU11eEIsUUFBUSxHQUFHLENBQWpCLENBQWpCO0FBQ0g7O0FBQ0QsVUFBSXZNLEdBQUcsQ0FBQ3lNLE1BQUosS0FBZSxHQUFuQixFQUF3QjtBQUNwQixlQUFPek0sR0FBRyxDQUFDNWtCLElBQUosR0FBV2laLElBQVgsQ0FBaUJySSxJQUFELElBQVE7QUFDM0IsY0FBSUEsSUFBSSxDQUFDMGdCLFFBQVQsRUFBbUI7QUFDZixtQkFBTztBQUNIQSxjQUFBQSxRQUFRLEVBQUVMO0FBRFAsYUFBUDtBQUdIOztBQUNELGdCQUFNLElBQUk1WSxLQUFKLENBQVcsNkJBQVgsQ0FBTjtBQUNILFNBUE0sQ0FBUDtBQVFIOztBQUNELFlBQU0sSUFBSUEsS0FBSixDQUFXLDZCQUFYLENBQU47QUFDSDs7QUFDRCxXQUFPdU0sR0FBRyxDQUFDNWtCLElBQUosRUFBUDtBQUNILEdBL0JNLENBQVA7QUFnQ0g7O0FBQ0QsU0FBU3V4QixhQUFULENBQXVCQyxRQUF2QixFQUFpQ0MsY0FBakMsRUFBaUQ7QUFDN0MsU0FBT1AsVUFBVSxDQUFDTSxRQUFELEVBQVdDLGNBQWMsR0FBRyxDQUFILEdBQU8sQ0FBaEMsQ0FBVixDQUE2Q3pZLEtBQTdDLENBQW9EbUYsR0FBRCxJQUFPO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLFFBQUksQ0FBQ3NULGNBQUwsRUFBcUI7QUFDakIsT0FBQyxHQUFHM0YsWUFBSixFQUFrQnZJLGNBQWxCLENBQWlDcEYsR0FBakM7QUFDSDs7QUFDRCxVQUFNQSxHQUFOO0FBQ0gsR0FSTSxDQUFQO0FBU0g7O0FBQ0QsTUFBTXVULE1BQU4sQ0FBYTtBQUNUQyxFQUFBQSxXQUFXLENBQUNDLFNBQUQsRUFBWUMsTUFBWixFQUFvQkMsR0FBcEIsRUFBeUI7QUFBRUMsSUFBQUEsWUFBRjtBQUFpQkMsSUFBQUEsVUFBakI7QUFBOEJDLElBQUFBLEdBQTlCO0FBQW9DQyxJQUFBQSxPQUFwQztBQUE4Q0MsSUFBQUEsU0FBUyxFQUFFQyxVQUF6RDtBQUFzRWpVLElBQUFBLEdBQUcsRUFBRWtVLElBQTNFO0FBQWtGQyxJQUFBQSxZQUFsRjtBQUFpR0MsSUFBQUEsVUFBakc7QUFBOEcxVCxJQUFBQSxNQUE5RztBQUF1SGdELElBQUFBLE9BQXZIO0FBQWlJSSxJQUFBQSxhQUFqSTtBQUFpSkgsSUFBQUEsYUFBako7QUFBaUswUSxJQUFBQTtBQUFqSyxHQUF6QixFQUF1TTtBQUM5TTtBQUNBLFNBQUtDLEdBQUwsR0FBVyxFQUFYLENBRjhNLENBSTlNOztBQUNBLFNBQUtDLEdBQUwsR0FBVyxFQUFYO0FBRUEsU0FBS0MsSUFBTCxHQUFZLENBQVo7O0FBQ0EsU0FBS0MsVUFBTCxHQUFtQnJULENBQUQsSUFBSztBQUNuQixZQUFNN1YsS0FBSyxHQUFHNlYsQ0FBQyxDQUFDN1YsS0FBaEI7O0FBQ0EsVUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQUU0akIsVUFBQUEsUUFBUSxFQUFFc0UsU0FBWjtBQUF3Qi93QixVQUFBQSxLQUFLLEVBQUVneEI7QUFBL0IsWUFBMkMsSUFBakQ7QUFDQSxhQUFLZ0IsV0FBTCxDQUFpQixjQUFqQixFQUFpQyxDQUFDLEdBQUczRyxNQUFKLEVBQVlrRCxvQkFBWixDQUFpQztBQUM5RDlCLFVBQUFBLFFBQVEsRUFBRXZMLFdBQVcsQ0FBQzZQLFNBQUQsQ0FEeUM7QUFFOUQvd0IsVUFBQUEsS0FBSyxFQUFFZ3hCO0FBRnVELFNBQWpDLENBQWpDLEVBR0ksQ0FBQyxHQUFHM0YsTUFBSixFQUFZNEcsTUFBWixFQUhKO0FBSUE7QUFDSDs7QUFDRCxVQUFJLENBQUNwcEIsS0FBSyxDQUFDcXBCLEdBQVgsRUFBZ0I7QUFDWjtBQUNIOztBQUNELFVBQUlDLFlBQUo7QUFDQSxZQUFNO0FBQUVwekIsUUFBQUEsR0FBRjtBQUFRMGQsUUFBQUEsRUFBRSxFQUFFd1UsR0FBWjtBQUFrQnBULFFBQUFBLE9BQWxCO0FBQTRCdVUsUUFBQUE7QUFBNUIsVUFBcUN2cEIsS0FBM0M7O0FBQ0EsVUFBSTRNLEtBQUosRUFBMkMsRUF1QjFDOztBQUNELFdBQUtxYyxJQUFMLEdBQVlNLEdBQVo7QUFDQSxZQUFNO0FBQUUzRixRQUFBQSxRQUFRLEVBQUVzRTtBQUFaLFVBQTJCLENBQUMsR0FBR3hGLGlCQUFKLEVBQXVCa0gsZ0JBQXZCLENBQXdDMXpCLEdBQXhDLENBQWpDLENBakRtQixDQWtEbkI7QUFDQTs7QUFDQSxVQUFJLEtBQUsyekIsS0FBTCxJQUFjekIsR0FBRyxLQUFLLEtBQUt2aEIsTUFBM0IsSUFBcUNxaEIsU0FBUyxLQUFLLEtBQUt0RSxRQUE1RCxFQUFzRTtBQUNsRTtBQUNILE9BdERrQixDQXVEbkI7QUFDQTs7O0FBQ0EsVUFBSSxLQUFLa0csSUFBTCxJQUFhLENBQUMsS0FBS0EsSUFBTCxDQUFVOXBCLEtBQVYsQ0FBbEIsRUFBb0M7QUFDaEM7QUFDSDs7QUFDRCxXQUFLK3BCLE1BQUwsQ0FBWSxjQUFaLEVBQTRCN3pCLEdBQTVCLEVBQWlDa3lCLEdBQWpDLEVBQXNDemYsTUFBTSxDQUFDOEssTUFBUCxDQUFjLEVBQWQsRUFDbkN1QixPQURtQyxFQUMxQjtBQUNSZSxRQUFBQSxPQUFPLEVBQUVmLE9BQU8sQ0FBQ2UsT0FBUixJQUFtQixLQUFLaVUsUUFEekI7QUFFUjdVLFFBQUFBLE1BQU0sRUFBRUgsT0FBTyxDQUFDRyxNQUFSLElBQWtCLEtBQUtvRDtBQUZ2QixPQUQwQixDQUF0QyxFQUlJK1EsWUFKSjtBQUtILEtBakVELENBUjhNLENBMEU5TTs7O0FBQ0EsU0FBSzdNLEtBQUwsR0FBYSxDQUFDLEdBQUcwRix1QkFBSixFQUE2QnpKLHVCQUE3QixDQUFxRHdQLFNBQXJELENBQWIsQ0EzRThNLENBNEU5TTs7QUFDQSxTQUFLK0IsVUFBTCxHQUFrQixFQUFsQixDQTdFOE0sQ0ErRTlNO0FBQ0E7QUFDQTs7QUFDQSxRQUFJL0IsU0FBUyxLQUFLLFNBQWxCLEVBQTZCO0FBQ3pCLFdBQUsrQixVQUFMLENBQWdCLEtBQUt4TixLQUFyQixJQUE4QjtBQUMxQmdNLFFBQUFBLFNBQVMsRUFBRUMsVUFEZTtBQUUxQndCLFFBQUFBLE9BQU8sRUFBRSxJQUZpQjtBQUcxQjl1QixRQUFBQSxLQUFLLEVBQUVpdEIsWUFIbUI7QUFJMUI1VCxRQUFBQSxHQUFHLEVBQUVrVSxJQUpxQjtBQUsxQndCLFFBQUFBLE9BQU8sRUFBRTlCLFlBQVksSUFBSUEsWUFBWSxDQUFDOEIsT0FMWjtBQU0xQkMsUUFBQUEsT0FBTyxFQUFFL0IsWUFBWSxJQUFJQSxZQUFZLENBQUMrQjtBQU5aLE9BQTlCO0FBUUg7O0FBQ0QsU0FBS0gsVUFBTCxDQUFnQixPQUFoQixJQUEyQjtBQUN2QnhCLE1BQUFBLFNBQVMsRUFBRUYsR0FEWTtBQUV2QnJMLE1BQUFBLFdBQVcsRUFBRTtBQUZVLEtBQTNCLENBNUY4TSxDQWdHOU07QUFDQTs7QUFDQSxTQUFLbUMsTUFBTCxHQUFjMkksTUFBTSxDQUFDM0ksTUFBckI7QUFDQSxTQUFLaUosVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLMUUsUUFBTCxHQUFnQnNFLFNBQWhCO0FBQ0EsU0FBSy93QixLQUFMLEdBQWFneEIsTUFBYixDQXJHOE0sQ0FzRzlNO0FBQ0E7O0FBQ0EsVUFBTWtDLGlCQUFpQixHQUFHLENBQUMsR0FBRzVILFVBQUosRUFBZ0IwRCxjQUFoQixDQUErQitCLFNBQS9CLEtBQTZDalAsSUFBSSxDQUFDcVIsYUFBTCxDQUFtQkMsVUFBMUY7O0FBQ0EsU0FBSzFqQixNQUFMLEdBQWN3akIsaUJBQWlCLEdBQUduQyxTQUFILEdBQWVFLEdBQTlDO0FBQ0EsU0FBS25GLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS3VILEdBQUwsR0FBVzVCLFlBQVg7QUFDQSxTQUFLNkIsR0FBTCxHQUFXLElBQVg7QUFDQSxTQUFLQyxRQUFMLEdBQWdCbEMsT0FBaEIsQ0E3RzhNLENBOEc5TTtBQUNBOztBQUNBLFNBQUtxQixLQUFMLEdBQWEsSUFBYjtBQUNBLFNBQUtoQixVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUs4QixPQUFMLEdBQWUsQ0FBQyxFQUFFMVIsSUFBSSxDQUFDcVIsYUFBTCxDQUFtQk0sSUFBbkIsSUFBMkIzUixJQUFJLENBQUNxUixhQUFMLENBQW1CTyxHQUE5QyxJQUFxRDVSLElBQUksQ0FBQ3FSLGFBQUwsQ0FBbUJRLE1BQW5CLElBQTZCLENBQUM3UixJQUFJLENBQUNxUixhQUFMLENBQW1CUyxHQUF0RyxJQUE2RyxDQUFDVixpQkFBRCxJQUFzQixDQUFDcFIsSUFBSSxDQUFDK1IsUUFBTCxDQUFjQyxNQUFyQyxJQUErQyxDQUFDcmUsS0FBL0osQ0FBaEI7QUFDQSxTQUFLa2MsU0FBTCxHQUFpQixDQUFDLENBQUNBLFNBQW5CO0FBQ0EsU0FBSzdRLGNBQUwsR0FBc0IsS0FBdEI7O0FBQ0EsUUFBSXJMLEtBQUosRUFBcUMsRUFNcEM7O0FBQ0QsZUFBbUMsRUF1QmxDO0FBQ0o7O0FBQ0QwZSxFQUFBQSxNQUFNLEdBQUc7QUFDTG5TLElBQUFBLE1BQU0sQ0FBQzZSLFFBQVAsQ0FBZ0JNLE1BQWhCO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7OztBQUFNQyxFQUFBQSxJQUFJLEdBQUc7QUFDTHBTLElBQUFBLE1BQU0sQ0FBQ2lPLE9BQVAsQ0FBZW1FLElBQWY7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQU10a0IsRUFBQUEsSUFBSSxDQUFDL1EsR0FBRCxFQUFNMGQsRUFBTixFQUFVb0IsT0FBTyxHQUFHLEVBQXBCLEVBQ0g7QUFDQyxRQUFJcEksS0FBSixFQUEyQyxFQWExQzs7QUFDRCxLQUFDO0FBQUUxVyxNQUFBQSxHQUFGO0FBQVEwZCxNQUFBQTtBQUFSLFFBQWdCMlMsWUFBWSxDQUFDLElBQUQsRUFBT3J3QixHQUFQLEVBQVkwZCxFQUFaLENBQTdCO0FBQ0EsV0FBTyxLQUFLbVcsTUFBTCxDQUFZLFdBQVosRUFBeUI3ekIsR0FBekIsRUFBOEIwZCxFQUE5QixFQUFrQ29CLE9BQWxDLENBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQU1jLEVBQUFBLE9BQU8sQ0FBQzVmLEdBQUQsRUFBTTBkLEVBQU4sRUFBVW9CLE9BQU8sR0FBRyxFQUFwQixFQUNOO0FBQ0MsS0FBQztBQUFFOWUsTUFBQUEsR0FBRjtBQUFRMGQsTUFBQUE7QUFBUixRQUFnQjJTLFlBQVksQ0FBQyxJQUFELEVBQU9yd0IsR0FBUCxFQUFZMGQsRUFBWixDQUE3QjtBQUNBLFdBQU8sS0FBS21XLE1BQUwsQ0FBWSxjQUFaLEVBQTRCN3pCLEdBQTVCLEVBQWlDMGQsRUFBakMsRUFBcUNvQixPQUFyQyxDQUFQO0FBQ0g7O0FBQ1csUUFBTitVLE1BQU0sQ0FBQ3lCLE1BQUQsRUFBU3QxQixHQUFULEVBQWMwZCxFQUFkLEVBQWtCb0IsT0FBbEIsRUFBMkJzVSxZQUEzQixFQUF5QztBQUNqRCxRQUFJLENBQUNyVSxVQUFVLENBQUMvZSxHQUFELENBQWYsRUFBc0I7QUFDbEJpakIsTUFBQUEsTUFBTSxDQUFDNlIsUUFBUCxDQUFnQm5YLElBQWhCLEdBQXVCM2QsR0FBdkI7QUFDQSxhQUFPLEtBQVA7QUFDSDs7QUFDRCxVQUFNdTFCLGlCQUFpQixHQUFHdjFCLEdBQUcsS0FBSzBkLEVBQVIsSUFBY29CLE9BQU8sQ0FBQzBXLEVBQXRCLElBQTRCMVcsT0FBTyxDQUFDbVcsa0JBQTlELENBTGlELENBTWpEO0FBQ0E7O0FBQ0EsUUFBSW5XLE9BQU8sQ0FBQzBXLEVBQVosRUFBZ0I7QUFDWixXQUFLZixPQUFMLEdBQWUsSUFBZjtBQUNIOztBQUNELFVBQU1nQixVQUFVLEdBQUcsS0FBS3hXLE1BQXhCOztBQUNBLFFBQUl2SSxLQUFKLEVBQXFDLFlBNkNwQzs7QUFDRCxRQUFJLENBQUNvSSxPQUFPLENBQUMwVyxFQUFiLEVBQWlCO0FBQ2IsV0FBSzdCLEtBQUwsR0FBYSxLQUFiO0FBQ0gsS0E1RGdELENBNkRqRDs7O0FBQ0EsUUFBSXJILE1BQU0sQ0FBQ3dKLEVBQVgsRUFBZTtBQUNYQyxNQUFBQSxXQUFXLENBQUNDLElBQVosQ0FBaUIsYUFBakI7QUFDSDs7QUFDRCxVQUFNO0FBQUVuVyxNQUFBQSxPQUFPLEdBQUU7QUFBWCxRQUFzQmYsT0FBNUI7QUFDQSxVQUFNbVgsVUFBVSxHQUFHO0FBQ2ZwVyxNQUFBQTtBQURlLEtBQW5COztBQUdBLFFBQUksS0FBS3FXLGNBQVQsRUFBeUI7QUFDckIsV0FBS0Msa0JBQUwsQ0FBd0IsS0FBS0QsY0FBN0IsRUFBNkNELFVBQTdDO0FBQ0g7O0FBQ0R2WSxJQUFBQSxFQUFFLEdBQUd5RSxXQUFXLENBQUNDLFNBQVMsQ0FBQzBKLFdBQVcsQ0FBQ3BPLEVBQUQsQ0FBWCxHQUFrQnFPLFdBQVcsQ0FBQ3JPLEVBQUQsQ0FBN0IsR0FBb0NBLEVBQXJDLEVBQXlDb0IsT0FBTyxDQUFDRyxNQUFqRCxFQUF5RCxLQUFLb0QsYUFBOUQsQ0FBVixDQUFoQjtBQUNBLFVBQU0rVCxTQUFTLEdBQUd2SyxTQUFTLENBQUNDLFdBQVcsQ0FBQ3BPLEVBQUQsQ0FBWCxHQUFrQnFPLFdBQVcsQ0FBQ3JPLEVBQUQsQ0FBN0IsR0FBb0NBLEVBQXJDLEVBQXlDLEtBQUt1QixNQUE5QyxDQUEzQjtBQUNBLFNBQUtpWCxjQUFMLEdBQXNCeFksRUFBdEI7QUFDQSxRQUFJMlksWUFBWSxHQUFHWixVQUFVLEtBQUssS0FBS3hXLE1BQXZDLENBM0VpRCxDQTRFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxRQUFJLENBQUNILE9BQU8sQ0FBQzBXLEVBQVQsSUFBZSxLQUFLYyxlQUFMLENBQXFCRixTQUFyQixDQUFmLElBQWtELENBQUNDLFlBQXZELEVBQXFFO0FBQ2pFLFdBQUsxbEIsTUFBTCxHQUFjeWxCLFNBQWQ7QUFDQXRFLE1BQUFBLE1BQU0sQ0FBQzNJLE1BQVAsQ0FBY29OLElBQWQsQ0FBbUIsaUJBQW5CLEVBQXNDN1ksRUFBdEMsRUFBMEN1WSxVQUExQyxFQUZpRSxDQUdqRTs7QUFDQSxXQUFLaEQsV0FBTCxDQUFpQnFDLE1BQWpCLEVBQXlCdDFCLEdBQXpCLEVBQThCMGQsRUFBOUIsRUFBa0NvQixPQUFsQztBQUNBLFdBQUswWCxZQUFMLENBQWtCSixTQUFsQjtBQUNBLFdBQUtLLE1BQUwsQ0FBWSxLQUFLMUMsVUFBTCxDQUFnQixLQUFLeE4sS0FBckIsQ0FBWixFQUF5QyxJQUF6QztBQUNBdUwsTUFBQUEsTUFBTSxDQUFDM0ksTUFBUCxDQUFjb04sSUFBZCxDQUFtQixvQkFBbkIsRUFBeUM3WSxFQUF6QyxFQUE2Q3VZLFVBQTdDO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7O0FBQ0QsUUFBSVMsTUFBTSxHQUFHLENBQUMsR0FBR2xLLGlCQUFKLEVBQXVCa0gsZ0JBQXZCLENBQXdDMXpCLEdBQXhDLENBQWI7QUFDQSxRQUFJO0FBQUUwdEIsTUFBQUEsUUFBUSxFQUFFc0UsU0FBWjtBQUF3Qi93QixNQUFBQSxLQUFLLEVBQUVneEI7QUFBL0IsUUFBMkN5RSxNQUEvQyxDQTVGaUQsQ0E2RmpEO0FBQ0E7QUFDQTs7QUFDQSxRQUFJL0YsS0FBSixFQUFXZ0csUUFBWDs7QUFDQSxRQUFJO0FBQ0FoRyxNQUFBQSxLQUFLLEdBQUcsTUFBTSxLQUFLeUIsVUFBTCxDQUFnQndFLFdBQWhCLEVBQWQ7QUFDQSxPQUFDO0FBQUVDLFFBQUFBLFVBQVUsRUFBRUY7QUFBZCxVQUE0QixNQUFNLENBQUMsR0FBR3pLLFlBQUosRUFBa0JySSxzQkFBbEIsRUFBbkM7QUFDSCxLQUhELENBR0UsT0FBTzRPLElBQVAsRUFBYTtBQUNYO0FBQ0E7QUFDQXhQLE1BQUFBLE1BQU0sQ0FBQzZSLFFBQVAsQ0FBZ0JuWCxJQUFoQixHQUF1QkQsRUFBdkI7QUFDQSxhQUFPLEtBQVA7QUFDSCxLQXpHZ0QsQ0EwR2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFFBQUksQ0FBQyxLQUFLb1osUUFBTCxDQUFjVixTQUFkLENBQUQsSUFBNkIsQ0FBQ0MsWUFBbEMsRUFBZ0Q7QUFDNUNmLE1BQUFBLE1BQU0sR0FBRyxjQUFUO0FBQ0gsS0FqSGdELENBa0hqRDtBQUNBOzs7QUFDQSxRQUFJdFUsVUFBVSxHQUFHdEQsRUFBakIsQ0FwSGlELENBcUhqRDtBQUNBO0FBQ0E7O0FBQ0FzVSxJQUFBQSxTQUFTLEdBQUdBLFNBQVMsR0FBRyxDQUFDLEdBQUcvRix1QkFBSixFQUE2QnpKLHVCQUE3QixDQUFxRHVKLFdBQVcsQ0FBQ2lHLFNBQUQsQ0FBaEUsQ0FBSCxHQUFrRkEsU0FBdkc7O0FBQ0EsUUFBSXVELGlCQUFpQixJQUFJdkQsU0FBUyxLQUFLLFNBQXZDLEVBQWtEO0FBQzlDbFQsTUFBQUEsT0FBTyxDQUFDbVcsa0JBQVIsR0FBNkIsSUFBN0I7O0FBQ0EsVUFBSXZlLEtBQUosRUFBMkQsRUFBM0QsTUFXTztBQUNIZ2dCLFFBQUFBLE1BQU0sQ0FBQ2hKLFFBQVAsR0FBa0JnRCxtQkFBbUIsQ0FBQ3NCLFNBQUQsRUFBWXJCLEtBQVosQ0FBckM7O0FBQ0EsWUFBSStGLE1BQU0sQ0FBQ2hKLFFBQVAsS0FBb0JzRSxTQUF4QixFQUFtQztBQUMvQkEsVUFBQUEsU0FBUyxHQUFHMEUsTUFBTSxDQUFDaEosUUFBbkI7QUFDQWdKLFVBQUFBLE1BQU0sQ0FBQ2hKLFFBQVAsR0FBa0J2TCxXQUFXLENBQUM2UCxTQUFELENBQTdCO0FBQ0FoeUIsVUFBQUEsR0FBRyxHQUFHLENBQUMsR0FBR3NzQixNQUFKLEVBQVlrRCxvQkFBWixDQUFpQ2tILE1BQWpDLENBQU47QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsVUFBTW5RLEtBQUssR0FBRyxDQUFDLEdBQUcwRix1QkFBSixFQUE2QnpKLHVCQUE3QixDQUFxRHdQLFNBQXJELENBQWQ7O0FBQ0EsUUFBSSxDQUFDalQsVUFBVSxDQUFDckIsRUFBRCxDQUFmLEVBQXFCO0FBQ2pCLGdCQUEyQztBQUN2QyxjQUFNLElBQUlqRixLQUFKLENBQVcsa0JBQWlCelksR0FBSSxjQUFhMGQsRUFBRywyQ0FBdEMsR0FBb0Ysb0ZBQTlGLENBQU47QUFDSDs7QUFDRHVGLE1BQUFBLE1BQU0sQ0FBQzZSLFFBQVAsQ0FBZ0JuWCxJQUFoQixHQUF1QkQsRUFBdkI7QUFDQSxhQUFPLEtBQVA7QUFDSDs7QUFDRHNELElBQUFBLFVBQVUsR0FBRzZLLFNBQVMsQ0FBQ0UsV0FBVyxDQUFDL0ssVUFBRCxDQUFaLEVBQTBCLEtBQUsvQixNQUEvQixDQUF0Qjs7QUFDQSxRQUFJLENBQUMsR0FBR3NOLFVBQUosRUFBZ0IwRCxjQUFoQixDQUErQjFKLEtBQS9CLENBQUosRUFBMkM7QUFDdkMsWUFBTW1QLFFBQVEsR0FBRyxDQUFDLEdBQUdsSixpQkFBSixFQUF1QmtILGdCQUF2QixDQUF3QzFTLFVBQXhDLENBQWpCO0FBQ0EsWUFBTXFOLFVBQVUsR0FBR3FILFFBQVEsQ0FBQ2hJLFFBQTVCO0FBQ0EsWUFBTXVKLFVBQVUsR0FBRyxDQUFDLEdBQUdySyxXQUFKLEVBQWlCNEIsYUFBakIsQ0FBK0JqSSxLQUEvQixDQUFuQjtBQUNBLFlBQU0yUSxVQUFVLEdBQUcsQ0FBQyxHQUFHdkssYUFBSixFQUFtQmlDLGVBQW5CLENBQW1DcUksVUFBbkMsRUFBK0M1SSxVQUEvQyxDQUFuQjtBQUNBLFlBQU04SSxpQkFBaUIsR0FBRzVRLEtBQUssS0FBSzhILFVBQXBDO0FBQ0EsWUFBTTJCLGNBQWMsR0FBR21ILGlCQUFpQixHQUFHbkwsYUFBYSxDQUFDekYsS0FBRCxFQUFROEgsVUFBUixFQUFvQjRELE1BQXBCLENBQWhCLEdBQThDLEVBQXRGOztBQUVBLFVBQUksQ0FBQ2lGLFVBQUQsSUFBZUMsaUJBQWlCLElBQUksQ0FBQ25ILGNBQWMsQ0FBQzd2QixNQUF4RCxFQUFnRTtBQUM1RCxjQUFNaTNCLGFBQWEsR0FBRzNrQixNQUFNLENBQUN5QixJQUFQLENBQVkraUIsVUFBVSxDQUFDdkksTUFBdkIsRUFBK0JsakIsTUFBL0IsQ0FBdUNzakIsS0FBRCxJQUFTLENBQUNtRCxNQUFNLENBQUNuRCxLQUFELENBQXRELENBQXRCOztBQUVBLFlBQUlzSSxhQUFhLENBQUNyakIsTUFBZCxHQUF1QixDQUEzQixFQUE4QjtBQUMxQixvQkFBMkM7QUFDdkN6VCxZQUFBQSxPQUFPLENBQUMwWixJQUFSLENBQWMsR0FBRW1kLGlCQUFpQixHQUFJLG9CQUFKLEdBQTJCLGlDQUFpQyw4QkFBaEYsR0FBaUgsZUFBY0MsYUFBYSxDQUFDbGYsSUFBZCxDQUFtQixJQUFuQixDQUF5Qiw4QkFBcks7QUFDSDs7QUFDRCxnQkFBTSxJQUFJTyxLQUFKLENBQVUsQ0FBQzBlLGlCQUFpQixHQUFJLDBCQUF5Qm4zQixHQUFJLG9DQUFtQ28zQixhQUFhLENBQUNsZixJQUFkLENBQW1CLElBQW5CLENBQXlCLGlDQUE3RixHQUFpSSw4QkFBNkJtVyxVQUFXLDhDQUE2QzlILEtBQU0sS0FBOU8sSUFBdVAsK0NBQThDNFEsaUJBQWlCLEdBQUcsMkJBQUgsR0FBaUMsc0JBQXVCLEVBQXhYLENBQU47QUFDSDtBQUNKLE9BVEQsTUFTTyxJQUFJQSxpQkFBSixFQUF1QjtBQUMxQnpaLFFBQUFBLEVBQUUsR0FBRyxDQUFDLEdBQUc0TyxNQUFKLEVBQVlrRCxvQkFBWixDQUFpQy9jLE1BQU0sQ0FBQzhLLE1BQVAsQ0FBYyxFQUFkLEVBQ25DbVksUUFEbUMsRUFDekI7QUFDVGhJLFVBQUFBLFFBQVEsRUFBRXNDLGNBQWMsQ0FBQzd2QixNQURoQjtBQUVUYyxVQUFBQSxLQUFLLEVBQUVrdUIsa0JBQWtCLENBQUM4QyxNQUFELEVBQVNqQyxjQUFjLENBQUMvUixNQUF4QjtBQUZoQixTQUR5QixDQUFqQyxDQUFMO0FBS0gsT0FOTSxNQU1BO0FBQ0g7QUFDQXhMLFFBQUFBLE1BQU0sQ0FBQzhLLE1BQVAsQ0FBYzBVLE1BQWQsRUFBc0JpRixVQUF0QjtBQUNIO0FBQ0o7O0FBQ0RwRixJQUFBQSxNQUFNLENBQUMzSSxNQUFQLENBQWNvTixJQUFkLENBQW1CLGtCQUFuQixFQUF1QzdZLEVBQXZDLEVBQTJDdVksVUFBM0M7O0FBQ0EsUUFBSTtBQUNBLFVBQUlyYyxHQUFKLEVBQVN5ZCxJQUFUO0FBQ0EsVUFBSUMsU0FBUyxHQUFHLE1BQU0sS0FBS0MsWUFBTCxDQUFrQmhSLEtBQWxCLEVBQXlCeUwsU0FBekIsRUFBb0NDLE1BQXBDLEVBQTRDdlUsRUFBNUMsRUFBZ0RzRCxVQUFoRCxFQUE0RGlWLFVBQTVELENBQXRCO0FBQ0EsVUFBSTtBQUFFNTFCLFFBQUFBLEtBQUY7QUFBVTZFLFFBQUFBLEtBQVY7QUFBa0IrdUIsUUFBQUEsT0FBbEI7QUFBNEJDLFFBQUFBO0FBQTVCLFVBQXlDb0QsU0FBN0MsQ0FIQSxDQUlBOztBQUNBLFVBQUksQ0FBQ3JELE9BQU8sSUFBSUMsT0FBWixLQUF3Qmh2QixLQUE1QixFQUFtQztBQUMvQixZQUFJQSxLQUFLLENBQUNzeUIsU0FBTixJQUFtQnR5QixLQUFLLENBQUNzeUIsU0FBTixDQUFnQkMsWUFBdkMsRUFBcUQ7QUFDakQsZ0JBQU1DLFdBQVcsR0FBR3h5QixLQUFLLENBQUNzeUIsU0FBTixDQUFnQkMsWUFBcEMsQ0FEaUQsQ0FFakQ7QUFDQTtBQUNBOztBQUNBLGNBQUlDLFdBQVcsQ0FBQzFlLFVBQVosQ0FBdUIsR0FBdkIsQ0FBSixFQUFpQztBQUM3QixrQkFBTTJlLFVBQVUsR0FBRyxDQUFDLEdBQUduTCxpQkFBSixFQUF1QmtILGdCQUF2QixDQUF3Q2dFLFdBQXhDLENBQW5CO0FBQ0FDLFlBQUFBLFVBQVUsQ0FBQ2pLLFFBQVgsR0FBc0JnRCxtQkFBbUIsQ0FBQ2lILFVBQVUsQ0FBQ2pLLFFBQVosRUFBc0JpRCxLQUF0QixDQUF6QztBQUNBLGtCQUFNO0FBQUUzd0IsY0FBQUEsR0FBRyxFQUFFNDNCLE1BQVA7QUFBZ0JsYSxjQUFBQSxFQUFFLEVBQUVtYTtBQUFwQixnQkFBK0J4SCxZQUFZLENBQUMsSUFBRCxFQUFPcUgsV0FBUCxFQUFvQkEsV0FBcEIsQ0FBakQ7QUFDQSxtQkFBTyxLQUFLN0QsTUFBTCxDQUFZeUIsTUFBWixFQUFvQnNDLE1BQXBCLEVBQTRCQyxLQUE1QixFQUFtQy9ZLE9BQW5DLENBQVA7QUFDSDs7QUFDRG1FLFVBQUFBLE1BQU0sQ0FBQzZSLFFBQVAsQ0FBZ0JuWCxJQUFoQixHQUF1QitaLFdBQXZCO0FBQ0EsaUJBQU8sSUFBSXhlLE9BQUosQ0FBWSxNQUFJLENBQ3RCLENBRE0sQ0FBUDtBQUVIOztBQUNELGFBQUswWixTQUFMLEdBQWlCLENBQUMsQ0FBQzF0QixLQUFLLENBQUM0eUIsV0FBekIsQ0FoQitCLENBaUIvQjs7QUFDQSxZQUFJNXlCLEtBQUssQ0FBQ3dzQixRQUFOLEtBQW1CTCxrQkFBdkIsRUFBMkM7QUFDdkMsY0FBSTBHLGFBQUo7O0FBQ0EsY0FBSTtBQUNBLGtCQUFNLEtBQUtDLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBTjtBQUNBRCxZQUFBQSxhQUFhLEdBQUcsTUFBaEI7QUFDSCxXQUhELENBR0UsT0FBT256QixDQUFQLEVBQVU7QUFDUm16QixZQUFBQSxhQUFhLEdBQUcsU0FBaEI7QUFDSDs7QUFDRFQsVUFBQUEsU0FBUyxHQUFHLE1BQU0sS0FBS0MsWUFBTCxDQUFrQlEsYUFBbEIsRUFBaUNBLGFBQWpDLEVBQWdEOUYsTUFBaEQsRUFBd0R2VSxFQUF4RCxFQUE0RHNELFVBQTVELEVBQXdFO0FBQ3RGbkIsWUFBQUEsT0FBTyxFQUFFO0FBRDZFLFdBQXhFLENBQWxCO0FBR0g7QUFDSjs7QUFDRGlTLE1BQUFBLE1BQU0sQ0FBQzNJLE1BQVAsQ0FBY29OLElBQWQsQ0FBbUIscUJBQW5CLEVBQTBDN1ksRUFBMUMsRUFBOEN1WSxVQUE5QztBQUNBLFdBQUtoRCxXQUFMLENBQWlCcUMsTUFBakIsRUFBeUJ0MUIsR0FBekIsRUFBOEIwZCxFQUE5QixFQUFrQ29CLE9BQWxDOztBQUNBLGdCQUEyQztBQUN2QyxjQUFNbVosT0FBTyxHQUFHLEtBQUtsRSxVQUFMLENBQWdCLE9BQWhCLEVBQXlCeEIsU0FBekM7QUFDQXRQLFFBQUFBLE1BQU0sQ0FBQ2lWLElBQVAsQ0FBWUMsYUFBWixHQUE0QkYsT0FBTyxDQUFDdk0sZUFBUixLQUE0QnVNLE9BQU8sQ0FBQ3RNLG1CQUFwQyxJQUEyRCxDQUFDMkwsU0FBUyxDQUFDL0UsU0FBVixDQUFvQjdHLGVBQTVHO0FBQ0g7O0FBQ0QsVUFBSTVNLE9BQU8sQ0FBQzBXLEVBQVIsSUFBY3hELFNBQVMsS0FBSyxTQUE1QixJQUF5QyxDQUFDLENBQUNwWSxHQUFHLEdBQUdtSixJQUFJLENBQUNxUixhQUFMLENBQW1CbHZCLEtBQTFCLE1BQXFDLElBQXJDLElBQTZDMFUsR0FBRyxLQUFLLEtBQUssQ0FBMUQsR0FBOEQsS0FBSyxDQUFuRSxHQUF1RSxDQUFDeWQsSUFBSSxHQUFHemQsR0FBRyxDQUFDNGQsU0FBWixNQUEyQixJQUEzQixJQUFtQ0gsSUFBSSxLQUFLLEtBQUssQ0FBakQsR0FBcUQsS0FBSyxDQUExRCxHQUE4REEsSUFBSSxDQUFDZSxVQUEzSSxNQUEySixHQUFwTSxLQUE0TWx6QixLQUFLLEtBQUssSUFBVixJQUFrQkEsS0FBSyxLQUFLLEtBQUssQ0FBakMsR0FBcUMsS0FBSyxDQUExQyxHQUE4Q0EsS0FBSyxDQUFDc3lCLFNBQWhRLENBQUosRUFBZ1I7QUFDNVE7QUFDQTtBQUNBdHlCLFFBQUFBLEtBQUssQ0FBQ3N5QixTQUFOLENBQWdCWSxVQUFoQixHQUE2QixHQUE3QjtBQUNILE9BOUNELENBK0NBOzs7QUFDQSxZQUFNQyxtQkFBbUIsR0FBR3ZaLE9BQU8sQ0FBQ2UsT0FBUixJQUFtQixLQUFLMEcsS0FBTCxLQUFlQSxLQUE5RDs7QUFDQSxVQUFJK1IsT0FBSjs7QUFDQSxZQUFNQyxZQUFZLEdBQUcsQ0FBQ0QsT0FBTyxHQUFHeFosT0FBTyxDQUFDZ0IsTUFBbkIsTUFBK0IsSUFBL0IsSUFBdUN3WSxPQUFPLEtBQUssS0FBSyxDQUF4RCxHQUE0REEsT0FBNUQsR0FBc0UsQ0FBQ0QsbUJBQTVGO0FBQ0EsWUFBTUcsV0FBVyxHQUFHRCxZQUFZLEdBQUc7QUFDL0JuZ0IsUUFBQUEsQ0FBQyxFQUFFLENBRDRCO0FBRS9CbWIsUUFBQUEsQ0FBQyxFQUFFO0FBRjRCLE9BQUgsR0FHNUIsSUFISjtBQUlBLFlBQU0sS0FBS3BWLEdBQUwsQ0FBU29JLEtBQVQsRUFBZ0J5TCxTQUFoQixFQUEyQkMsTUFBM0IsRUFBbUNtRSxTQUFuQyxFQUE4Q2tCLFNBQTlDLEVBQXlEbEUsWUFBWSxLQUFLLElBQWpCLElBQXlCQSxZQUFZLEtBQUssS0FBSyxDQUEvQyxHQUFtREEsWUFBbkQsR0FBa0VvRixXQUEzSCxFQUF3SXBmLEtBQXhJLENBQStJdUcsQ0FBRCxJQUFLO0FBQ3JKLFlBQUlBLENBQUMsQ0FBQ3FHLFNBQU4sRUFBaUIzbEIsS0FBSyxHQUFHQSxLQUFLLElBQUlzZixDQUFqQixDQUFqQixLQUNLLE1BQU1BLENBQU47QUFDUixPQUhLLENBQU47O0FBSUEsVUFBSXRmLEtBQUosRUFBVztBQUNQeXhCLFFBQUFBLE1BQU0sQ0FBQzNJLE1BQVAsQ0FBY29OLElBQWQsQ0FBbUIsa0JBQW5CLEVBQXVDbDJCLEtBQXZDLEVBQThDKzFCLFNBQTlDLEVBQXlESCxVQUF6RDtBQUNBLGNBQU01MUIsS0FBTjtBQUNIOztBQUNELFVBQUlxVyxLQUFKLEVBQXFDLEVBSXBDOztBQUNEb2IsTUFBQUEsTUFBTSxDQUFDM0ksTUFBUCxDQUFjb04sSUFBZCxDQUFtQixxQkFBbkIsRUFBMEM3WSxFQUExQyxFQUE4Q3VZLFVBQTlDO0FBQ0EsYUFBTyxJQUFQO0FBQ0gsS0F0RUQsQ0FzRUUsT0FBT3hELElBQVAsRUFBYTtBQUNYLFVBQUlBLElBQUksQ0FBQ3pNLFNBQVQsRUFBb0I7QUFDaEIsZUFBTyxLQUFQO0FBQ0g7O0FBQ0QsWUFBTXlNLElBQU47QUFDSDtBQUNKOztBQUNEUSxFQUFBQSxXQUFXLENBQUNxQyxNQUFELEVBQVN0MUIsR0FBVCxFQUFjMGQsRUFBZCxFQUFrQm9CLE9BQU8sR0FBRyxFQUE1QixFQUNSO0FBQ0MsY0FBMkM7QUFDdkMsVUFBSSxPQUFPbUUsTUFBTSxDQUFDaU8sT0FBZCxLQUEwQixXQUE5QixFQUEyQztBQUN2QzV3QixRQUFBQSxPQUFPLENBQUNELEtBQVIsQ0FBZSwyQ0FBZjtBQUNBO0FBQ0g7O0FBQ0QsVUFBSSxPQUFPNGlCLE1BQU0sQ0FBQ2lPLE9BQVAsQ0FBZW9FLE1BQWYsQ0FBUCxLQUFrQyxXQUF0QyxFQUFtRDtBQUMvQ2gxQixRQUFBQSxPQUFPLENBQUNELEtBQVIsQ0FBZSwyQkFBMEJpMUIsTUFBTyxtQkFBaEQ7QUFDQTtBQUNIO0FBQ0o7O0FBQ0QsUUFBSUEsTUFBTSxLQUFLLFdBQVgsSUFBMEIsQ0FBQyxHQUFHaEosTUFBSixFQUFZNEcsTUFBWixPQUF5QnhWLEVBQXZELEVBQTJEO0FBQ3ZELFdBQUtvVyxRQUFMLEdBQWdCaFYsT0FBTyxDQUFDZSxPQUF4QjtBQUNBb0QsTUFBQUEsTUFBTSxDQUFDaU8sT0FBUCxDQUFlb0UsTUFBZixFQUF1QjtBQUNuQnQxQixRQUFBQSxHQURtQjtBQUVuQjBkLFFBQUFBLEVBRm1CO0FBR25Cb0IsUUFBQUEsT0FIbUI7QUFJbkJxVSxRQUFBQSxHQUFHLEVBQUUsSUFKYztBQUtuQkUsUUFBQUEsR0FBRyxFQUFFLEtBQUtOLElBQUwsR0FBWXVDLE1BQU0sS0FBSyxXQUFYLEdBQXlCLEtBQUt2QyxJQUE5QixHQUFxQyxLQUFLQSxJQUFMLEdBQVk7QUFML0MsT0FBdkIsRUFNRztBQUNIO0FBQ0E7QUFDQSxRQVRBLEVBU0lyVixFQVRKO0FBVUg7QUFDSjs7QUFDeUIsUUFBcEJpYixvQkFBb0IsQ0FBQ3BhLEdBQUQsRUFBTW1QLFFBQU4sRUFBZ0J6c0IsS0FBaEIsRUFBdUJ5YyxFQUF2QixFQUEyQnVZLFVBQTNCLEVBQXVDMkMsYUFBdkMsRUFBc0Q7QUFDNUUsUUFBSXJhLEdBQUcsQ0FBQ3lILFNBQVIsRUFBbUI7QUFDZjtBQUNBLFlBQU16SCxHQUFOO0FBQ0g7O0FBQ0QsUUFBSSxDQUFDLEdBQUcyTixZQUFKLEVBQWtCdEksWUFBbEIsQ0FBK0JyRixHQUEvQixLQUF1Q3FhLGFBQTNDLEVBQTBEO0FBQ3REOUcsTUFBQUEsTUFBTSxDQUFDM0ksTUFBUCxDQUFjb04sSUFBZCxDQUFtQixrQkFBbkIsRUFBdUNoWSxHQUF2QyxFQUE0Q2IsRUFBNUMsRUFBZ0R1WSxVQUFoRCxFQURzRCxDQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBaFQsTUFBQUEsTUFBTSxDQUFDNlIsUUFBUCxDQUFnQm5YLElBQWhCLEdBQXVCRCxFQUF2QixDQVBzRCxDQVF0RDtBQUNBOztBQUNBLFlBQU11UCxzQkFBc0IsRUFBNUI7QUFDSDs7QUFDRCxRQUFJO0FBQ0EsVUFBSXVGLFVBQUo7QUFDQSxVQUFJeEwsV0FBSjtBQUNBLFVBQUk5aEIsS0FBSjs7QUFDQSxVQUFJLE9BQU9zdEIsVUFBUCxLQUFzQixXQUF0QixJQUFxQyxPQUFPeEwsV0FBUCxLQUF1QixXQUFoRSxFQUE2RTtBQUN6RSxTQUFDO0FBQUVwbUIsVUFBQUEsSUFBSSxFQUFFNHhCLFVBQVI7QUFBcUJ4TCxVQUFBQTtBQUFyQixZQUFzQyxNQUFNLEtBQUtnUixjQUFMLENBQW9CLFNBQXBCLENBQTdDO0FBQ0g7O0FBQ0QsWUFBTVYsU0FBUyxHQUFHO0FBQ2RweUIsUUFBQUEsS0FEYztBQUVkcXRCLFFBQUFBLFNBQVMsRUFBRUMsVUFGRztBQUdkeEwsUUFBQUEsV0FIYztBQUlkekksUUFBQUEsR0FKYztBQUtkbGUsUUFBQUEsS0FBSyxFQUFFa2U7QUFMTyxPQUFsQjs7QUFPQSxVQUFJLENBQUMrWSxTQUFTLENBQUNweUIsS0FBZixFQUFzQjtBQUNsQixZQUFJO0FBQ0FveUIsVUFBQUEsU0FBUyxDQUFDcHlCLEtBQVYsR0FBa0IsTUFBTSxLQUFLd21CLGVBQUwsQ0FBcUI4RyxVQUFyQixFQUFpQztBQUNyRGpVLFlBQUFBLEdBRHFEO0FBRXJEbVAsWUFBQUEsUUFGcUQ7QUFHckR6c0IsWUFBQUE7QUFIcUQsV0FBakMsQ0FBeEI7QUFLSCxTQU5ELENBTUUsT0FBTzQzQixNQUFQLEVBQWU7QUFDYnY0QixVQUFBQSxPQUFPLENBQUNELEtBQVIsQ0FBYyx5Q0FBZCxFQUF5RHc0QixNQUF6RDtBQUNBdkIsVUFBQUEsU0FBUyxDQUFDcHlCLEtBQVYsR0FBa0IsRUFBbEI7QUFFSDtBQUNKOztBQUNELGFBQU9veUIsU0FBUDtBQUNILEtBNUJELENBNEJFLE9BQU93QixZQUFQLEVBQXFCO0FBQ25CLGFBQU8sS0FBS0gsb0JBQUwsQ0FBMEJHLFlBQTFCLEVBQXdDcEwsUUFBeEMsRUFBa0R6c0IsS0FBbEQsRUFBeUR5YyxFQUF6RCxFQUE2RHVZLFVBQTdELEVBQXlFLElBQXpFLENBQVA7QUFDSDtBQUNKOztBQUNpQixRQUFac0IsWUFBWSxDQUFDaFIsS0FBRCxFQUFRbUgsUUFBUixFQUFrQnpzQixLQUFsQixFQUF5QnljLEVBQXpCLEVBQTZCc0QsVUFBN0IsRUFBeUNpVixVQUF6QyxFQUFxRDtBQUNuRSxRQUFJO0FBQ0EsWUFBTThDLGlCQUFpQixHQUFHLEtBQUtoRixVQUFMLENBQWdCeE4sS0FBaEIsQ0FBMUI7O0FBQ0EsVUFBSTBQLFVBQVUsQ0FBQ3BXLE9BQVgsSUFBc0JrWixpQkFBdEIsSUFBMkMsS0FBS3hTLEtBQUwsS0FBZUEsS0FBOUQsRUFBcUU7QUFDakUsZUFBT3dTLGlCQUFQO0FBQ0g7O0FBQ0QsWUFBTUMsZUFBZSxHQUFHRCxpQkFBaUIsSUFBSSxhQUFhQSxpQkFBbEMsR0FBc0R6akIsU0FBdEQsR0FBa0V5akIsaUJBQTFGO0FBQ0EsWUFBTXpCLFNBQVMsR0FBRzBCLGVBQWUsR0FBR0EsZUFBSCxHQUFxQixNQUFNLEtBQUtoQixjQUFMLENBQW9CelIsS0FBcEIsRUFBMkJsTixJQUEzQixDQUFpQzJMLEdBQUQsS0FBUTtBQUM1RnVOLFFBQUFBLFNBQVMsRUFBRXZOLEdBQUcsQ0FBQ3BrQixJQUQ2RTtBQUU1Rm9tQixRQUFBQSxXQUFXLEVBQUVoQyxHQUFHLENBQUNnQyxXQUYyRTtBQUc1RmlOLFFBQUFBLE9BQU8sRUFBRWpQLEdBQUcsQ0FBQ2lVLEdBQUosQ0FBUWhGLE9BSDJFO0FBSTVGQyxRQUFBQSxPQUFPLEVBQUVsUCxHQUFHLENBQUNpVSxHQUFKLENBQVEvRTtBQUoyRSxPQUFSLENBQWhDLENBQTVEO0FBT0EsWUFBTTtBQUFFM0IsUUFBQUEsU0FBUyxFQUFFQyxVQUFiO0FBQTBCeUIsUUFBQUEsT0FBMUI7QUFBb0NDLFFBQUFBO0FBQXBDLFVBQWlEb0QsU0FBdkQ7O0FBQ0EsZ0JBQTJDO0FBQ3ZDLGNBQU07QUFBRTRCLFVBQUFBO0FBQUYsWUFBMEJsbUIsbUJBQU8sQ0FBQyxvRUFBRCxDQUF2Qzs7QUFDQSxZQUFJLENBQUNrbUIsa0JBQWtCLENBQUMxRyxVQUFELENBQXZCLEVBQXFDO0FBQ2pDLGdCQUFNLElBQUkvWixLQUFKLENBQVcseURBQXdEaVYsUUFBUyxHQUE1RSxDQUFOO0FBQ0g7QUFDSjs7QUFDRCxVQUFJa0UsUUFBSjs7QUFDQSxVQUFJcUMsT0FBTyxJQUFJQyxPQUFmLEVBQXdCO0FBQ3BCdEMsUUFBQUEsUUFBUSxHQUFHLEtBQUtRLFVBQUwsQ0FBZ0IrRyxXQUFoQixDQUE0QixDQUFDLEdBQUc3TSxNQUFKLEVBQVlrRCxvQkFBWixDQUFpQztBQUNwRTlCLFVBQUFBLFFBRG9FO0FBRXBFenNCLFVBQUFBO0FBRm9FLFNBQWpDLENBQTVCLEVBR1ArZixVQUhPLEVBR0tpVCxPQUhMLEVBR2MsS0FBS2hWLE1BSG5CLENBQVg7QUFJSDs7QUFDRCxZQUFNL1osS0FBSyxHQUFHLE1BQU0sS0FBS2swQixRQUFMLENBQWMsTUFBSW5GLE9BQU8sR0FBRyxLQUFLb0YsY0FBTCxDQUFvQnpILFFBQXBCLENBQUgsR0FBbUNzQyxPQUFPLEdBQUcsS0FBS29GLGNBQUwsQ0FBb0IxSCxRQUFwQixDQUFILEdBQW1DLEtBQUtsRyxlQUFMLENBQXFCOEcsVUFBckIsRUFBaUM7QUFDdko7QUFDSTlFLFFBQUFBLFFBREo7QUFFSXpzQixRQUFBQSxLQUZKO0FBR0kwUCxRQUFBQSxNQUFNLEVBQUUrTSxFQUhaO0FBSUl1QixRQUFBQSxNQUFNLEVBQUUsS0FBS0EsTUFKakI7QUFLSWdELFFBQUFBLE9BQU8sRUFBRSxLQUFLQSxPQUxsQjtBQU1JSSxRQUFBQSxhQUFhLEVBQUUsS0FBS0E7QUFOeEIsT0FEc0gsQ0FBdEcsQ0FBcEI7QUFVQWlWLE1BQUFBLFNBQVMsQ0FBQ3B5QixLQUFWLEdBQWtCQSxLQUFsQjtBQUNBLFdBQUs2dUIsVUFBTCxDQUFnQnhOLEtBQWhCLElBQXlCK1EsU0FBekI7QUFDQSxhQUFPQSxTQUFQO0FBQ0gsS0F4Q0QsQ0F3Q0UsT0FBT2lDLElBQVAsRUFBYTtBQUNYLGFBQU8sS0FBS1osb0JBQUwsQ0FBMEJZLElBQTFCLEVBQWdDN0wsUUFBaEMsRUFBMEN6c0IsS0FBMUMsRUFBaUR5YyxFQUFqRCxFQUFxRHVZLFVBQXJELENBQVA7QUFDSDtBQUNKOztBQUNEOVgsRUFBQUEsR0FBRyxDQUFDb0ksS0FBRCxFQUFRbUgsUUFBUixFQUFrQnpzQixLQUFsQixFQUF5QnljLEVBQXpCLEVBQTZCMU0sSUFBN0IsRUFBbUN3bkIsV0FBbkMsRUFBZ0Q7QUFDL0MsU0FBSzdGLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxTQUFLcE0sS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS21ILFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS3pzQixLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLMFAsTUFBTCxHQUFjK00sRUFBZDtBQUNBLFdBQU8sS0FBSytZLE1BQUwsQ0FBWXpsQixJQUFaLEVBQWtCd25CLFdBQWxCLENBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBOzs7QUFBTWdCLEVBQUFBLGNBQWMsQ0FBQ3RXLEVBQUQsRUFBSztBQUNqQixTQUFLMFEsSUFBTCxHQUFZMVEsRUFBWjtBQUNIOztBQUNEb1QsRUFBQUEsZUFBZSxDQUFDNVksRUFBRCxFQUFLO0FBQ2hCLFFBQUksQ0FBQyxLQUFLL00sTUFBVixFQUFrQixPQUFPLEtBQVA7QUFDbEIsVUFBTSxDQUFDOG9CLFlBQUQsRUFBZUMsT0FBZixJQUEwQixLQUFLL29CLE1BQUwsQ0FBWWlmLEtBQVosQ0FBa0IsR0FBbEIsQ0FBaEM7QUFDQSxVQUFNLENBQUMrSixZQUFELEVBQWVDLE9BQWYsSUFBMEJsYyxFQUFFLENBQUNrUyxLQUFILENBQVMsR0FBVCxDQUFoQyxDQUhnQixDQUloQjs7QUFDQSxRQUFJZ0ssT0FBTyxJQUFJSCxZQUFZLEtBQUtFLFlBQTVCLElBQTRDRCxPQUFPLEtBQUtFLE9BQTVELEVBQXFFO0FBQ2pFLGFBQU8sSUFBUDtBQUNILEtBUGUsQ0FRaEI7OztBQUNBLFFBQUlILFlBQVksS0FBS0UsWUFBckIsRUFBbUM7QUFDL0IsYUFBTyxLQUFQO0FBQ0gsS0FYZSxDQVloQjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsV0FBT0QsT0FBTyxLQUFLRSxPQUFuQjtBQUNIOztBQUNEcEQsRUFBQUEsWUFBWSxDQUFDOVksRUFBRCxFQUFLO0FBQ2IsVUFBTSxHQUFHeVMsSUFBSCxJQUFXelMsRUFBRSxDQUFDa1MsS0FBSCxDQUFTLEdBQVQsQ0FBakIsQ0FEYSxDQUViO0FBQ0E7O0FBQ0EsUUFBSU8sSUFBSSxLQUFLLEVBQVQsSUFBZUEsSUFBSSxLQUFLLEtBQTVCLEVBQW1DO0FBQy9CbE4sTUFBQUEsTUFBTSxDQUFDNFcsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNBO0FBQ0gsS0FQWSxDQVFiOzs7QUFDQSxVQUFNQyxJQUFJLEdBQUdyVixRQUFRLENBQUNzVixjQUFULENBQXdCNUosSUFBeEIsQ0FBYjs7QUFDQSxRQUFJMkosSUFBSixFQUFVO0FBQ05BLE1BQUFBLElBQUksQ0FBQ0UsY0FBTDtBQUNBO0FBQ0gsS0FiWSxDQWNiO0FBQ0E7OztBQUNBLFVBQU1DLE1BQU0sR0FBR3hWLFFBQVEsQ0FBQ3lWLGlCQUFULENBQTJCL0osSUFBM0IsRUFBaUMsQ0FBakMsQ0FBZjs7QUFDQSxRQUFJOEosTUFBSixFQUFZO0FBQ1JBLE1BQUFBLE1BQU0sQ0FBQ0QsY0FBUDtBQUNIO0FBQ0o7O0FBQ0RsRCxFQUFBQSxRQUFRLENBQUNubUIsTUFBRCxFQUFTO0FBQ2IsV0FBTyxLQUFLQSxNQUFMLEtBQWdCQSxNQUF2QjtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBb0IsUUFBUmtPLFFBQVEsQ0FBQzdlLEdBQUQsRUFBTTJRLE1BQU0sR0FBRzNRLEdBQWYsRUFBb0I4ZSxPQUFPLEdBQUcsRUFBOUIsRUFDYjtBQUNDLFFBQUk0WCxNQUFNLEdBQUcsQ0FBQyxHQUFHbEssaUJBQUosRUFBdUJrSCxnQkFBdkIsQ0FBd0MxekIsR0FBeEMsQ0FBYjtBQUNBLFFBQUk7QUFBRTB0QixNQUFBQSxRQUFRLEVBQUV5TTtBQUFaLFFBQTJCekQsTUFBL0I7O0FBQ0EsUUFBSWhnQixLQUFKLEVBQXFDLEVBV3BDOztBQUNELFVBQU1pYSxLQUFLLEdBQUcsTUFBTSxLQUFLeUIsVUFBTCxDQUFnQndFLFdBQWhCLEVBQXBCO0FBQ0EsUUFBSTVWLFVBQVUsR0FBR3JRLE1BQWpCOztBQUNBLFFBQUkrRixLQUFKLEVBQStELEVBQS9ELE1BYU87QUFDSGdnQixNQUFBQSxNQUFNLENBQUNoSixRQUFQLEdBQWtCZ0QsbUJBQW1CLENBQUNnRyxNQUFNLENBQUNoSixRQUFSLEVBQWtCaUQsS0FBbEIsQ0FBckM7O0FBQ0EsVUFBSStGLE1BQU0sQ0FBQ2hKLFFBQVAsS0FBb0J5TSxTQUF4QixFQUFtQztBQUMvQkEsUUFBQUEsU0FBUyxHQUFHekQsTUFBTSxDQUFDaEosUUFBbkI7QUFDQWdKLFFBQUFBLE1BQU0sQ0FBQ2hKLFFBQVAsR0FBa0J5TSxTQUFsQjtBQUNBbjZCLFFBQUFBLEdBQUcsR0FBRyxDQUFDLEdBQUdzc0IsTUFBSixFQUFZa0Qsb0JBQVosQ0FBaUNrSCxNQUFqQyxDQUFOO0FBQ0g7QUFDSjs7QUFDRCxVQUFNblEsS0FBSyxHQUFHLENBQUMsR0FBRzBGLHVCQUFKLEVBQTZCekosdUJBQTdCLENBQXFEMlgsU0FBckQsQ0FBZCxDQXRDRCxDQXVDQzs7QUFDQSxjQUEyQztBQUN2QztBQUNIOztBQUNELFVBQU1qaEIsT0FBTyxDQUFDMEIsR0FBUixDQUFZLENBQ2QsS0FBS3dYLFVBQUwsQ0FBZ0JnSSxNQUFoQixDQUF1QjdULEtBQXZCLEVBQThCbE4sSUFBOUIsQ0FBb0NnaEIsS0FBRCxJQUFTO0FBQ3hDLGFBQU9BLEtBQUssR0FBRyxLQUFLaEIsY0FBTCxDQUFvQixLQUFLakgsVUFBTCxDQUFnQitHLFdBQWhCLENBQTRCbjVCLEdBQTVCLEVBQWlDZ2hCLFVBQWpDLEVBQTZDLElBQTdDLEVBQW1ELE9BQU9sQyxPQUFPLENBQUNHLE1BQWYsS0FBMEIsV0FBMUIsR0FBd0NILE9BQU8sQ0FBQ0csTUFBaEQsR0FBeUQsS0FBS0EsTUFBakgsQ0FBcEIsQ0FBSCxHQUFtSixLQUEvSjtBQUNILEtBRkQsQ0FEYyxFQUlkLEtBQUttVCxVQUFMLENBQWdCdFQsT0FBTyxDQUFDekUsUUFBUixHQUFtQixVQUFuQixHQUFnQyxVQUFoRCxFQUE0RGtNLEtBQTVELENBSmMsQ0FBWixDQUFOO0FBTUg7O0FBQ21CLFFBQWR5UixjQUFjLENBQUN6UixLQUFELEVBQVE7QUFDeEIsUUFBSVAsU0FBUyxHQUFHLEtBQWhCOztBQUNBLFVBQU1zVSxNQUFNLEdBQUcsS0FBSy9GLEdBQUwsR0FBVyxNQUFJO0FBQzFCdk8sTUFBQUEsU0FBUyxHQUFHLElBQVo7QUFDSCxLQUZEOztBQUdBLFVBQU11VSxlQUFlLEdBQUcsTUFBTSxLQUFLbkksVUFBTCxDQUFnQm9JLFFBQWhCLENBQXlCalUsS0FBekIsQ0FBOUI7O0FBQ0EsUUFBSVAsU0FBSixFQUFlO0FBQ1gsWUFBTTNsQixLQUFLLEdBQUcsSUFBSW9ZLEtBQUosQ0FBVyx3Q0FBdUM4TixLQUFNLEdBQXhELENBQWQ7QUFDQWxtQixNQUFBQSxLQUFLLENBQUMybEIsU0FBTixHQUFrQixJQUFsQjtBQUNBLFlBQU0zbEIsS0FBTjtBQUNIOztBQUNELFFBQUlpNkIsTUFBTSxLQUFLLEtBQUsvRixHQUFwQixFQUF5QjtBQUNyQixXQUFLQSxHQUFMLEdBQVcsSUFBWDtBQUNIOztBQUNELFdBQU9nRyxlQUFQO0FBQ0g7O0FBQ0RuQixFQUFBQSxRQUFRLENBQUMxUixFQUFELEVBQUs7QUFDVCxRQUFJMUIsU0FBUyxHQUFHLEtBQWhCOztBQUNBLFVBQU1zVSxNQUFNLEdBQUcsTUFBSTtBQUNmdFUsTUFBQUEsU0FBUyxHQUFHLElBQVo7QUFDSCxLQUZEOztBQUdBLFNBQUt1TyxHQUFMLEdBQVcrRixNQUFYO0FBQ0EsV0FBTzVTLEVBQUUsR0FBR3JPLElBQUwsQ0FBV3JJLElBQUQsSUFBUTtBQUNyQixVQUFJc3BCLE1BQU0sS0FBSyxLQUFLL0YsR0FBcEIsRUFBeUI7QUFDckIsYUFBS0EsR0FBTCxHQUFXLElBQVg7QUFDSDs7QUFDRCxVQUFJdk8sU0FBSixFQUFlO0FBQ1gsY0FBTXVULElBQUksR0FBRyxJQUFJOWdCLEtBQUosQ0FBVSxpQ0FBVixDQUFiO0FBQ0E4Z0IsUUFBQUEsSUFBSSxDQUFDdlQsU0FBTCxHQUFpQixJQUFqQjtBQUNBLGNBQU11VCxJQUFOO0FBQ0g7O0FBQ0QsYUFBT3ZvQixJQUFQO0FBQ0gsS0FWTSxDQUFQO0FBV0g7O0FBQ0Rxb0IsRUFBQUEsY0FBYyxDQUFDekgsUUFBRCxFQUFXO0FBQ3JCLFVBQU07QUFBRWpVLE1BQUFBLElBQUksRUFBRThjO0FBQVIsUUFBc0IsSUFBSXpjLEdBQUosQ0FBUTRULFFBQVIsRUFBa0IzTyxNQUFNLENBQUM2UixRQUFQLENBQWdCblgsSUFBbEMsQ0FBNUI7O0FBQ0EsUUFBSSxLQUFKLEVBQW9GLEVBRW5GOztBQUNELFdBQU9nVSxhQUFhLENBQUNDLFFBQUQsRUFBVyxLQUFLK0IsS0FBaEIsQ0FBYixDQUFvQ3RhLElBQXBDLENBQTBDckksSUFBRCxJQUFRO0FBQ3BELFdBQUs2aEIsR0FBTCxDQUFTNEgsUUFBVCxJQUFxQnpwQixJQUFyQjtBQUNBLGFBQU9BLElBQVA7QUFDSCxLQUhNLENBQVA7QUFJSDs7QUFDRHNvQixFQUFBQSxjQUFjLENBQUMxSCxRQUFELEVBQVc7QUFDckIsVUFBTTtBQUFFalUsTUFBQUEsSUFBSSxFQUFFK2M7QUFBUixRQUF5QixJQUFJMWMsR0FBSixDQUFRNFQsUUFBUixFQUFrQjNPLE1BQU0sQ0FBQzZSLFFBQVAsQ0FBZ0JuWCxJQUFsQyxDQUEvQjs7QUFDQSxRQUFJLEtBQUttVixHQUFMLENBQVM0SCxXQUFULENBQUosRUFBMkI7QUFDdkIsYUFBTyxLQUFLNUgsR0FBTCxDQUFTNEgsV0FBVCxDQUFQO0FBQ0g7O0FBQ0QsV0FBTyxLQUFLNUgsR0FBTCxDQUFTNEgsV0FBVCxJQUF3Qi9JLGFBQWEsQ0FBQ0MsUUFBRCxFQUFXLEtBQUsrQixLQUFoQixDQUFiLENBQW9DdGEsSUFBcEMsQ0FBMENySSxJQUFELElBQVE7QUFDNUUsYUFBTyxLQUFLOGhCLEdBQUwsQ0FBUzRILFdBQVQsQ0FBUDtBQUNBLGFBQU8xcEIsSUFBUDtBQUNILEtBSDhCLEVBRzVCb0ksS0FINEIsQ0FHckJtZ0IsSUFBRCxJQUFRO0FBQ2IsYUFBTyxLQUFLekcsR0FBTCxDQUFTNEgsV0FBVCxDQUFQO0FBQ0EsWUFBTW5CLElBQU47QUFDSCxLQU44QixDQUEvQjtBQU9IOztBQUNEN04sRUFBQUEsZUFBZSxDQUFDNkcsU0FBRCxFQUFZb0ksR0FBWixFQUFpQjtBQUM1QixVQUFNO0FBQUVwSSxNQUFBQSxTQUFTLEVBQUVxSTtBQUFiLFFBQXVCLEtBQUs3RyxVQUFMLENBQWdCLE9BQWhCLENBQTdCOztBQUNBLFVBQU04RyxPQUFPLEdBQUcsS0FBS3JHLFFBQUwsQ0FBY29HLElBQWQsQ0FBaEI7O0FBQ0FELElBQUFBLEdBQUcsQ0FBQ0UsT0FBSixHQUFjQSxPQUFkO0FBQ0EsV0FBTyxDQUFDLEdBQUd2TyxNQUFKLEVBQVl3TyxtQkFBWixDQUFnQ0YsSUFBaEMsRUFBc0M7QUFDekNDLE1BQUFBLE9BRHlDO0FBRXpDdEksTUFBQUEsU0FGeUM7QUFHekMvaEIsTUFBQUEsTUFBTSxFQUFFLElBSGlDO0FBSXpDbXFCLE1BQUFBO0FBSnlDLEtBQXRDLENBQVA7QUFNSDs7QUFDRHhFLEVBQUFBLGtCQUFrQixDQUFDelksRUFBRCxFQUFLdVksVUFBTCxFQUFpQjtBQUMvQixRQUFJLEtBQUsxQixHQUFULEVBQWM7QUFDVnpDLE1BQUFBLE1BQU0sQ0FBQzNJLE1BQVAsQ0FBY29OLElBQWQsQ0FBbUIsa0JBQW5CLEVBQXVDdEosc0JBQXNCLEVBQTdELEVBQWlFdlAsRUFBakUsRUFBcUV1WSxVQUFyRTtBQUNBLFdBQUsxQixHQUFMO0FBQ0EsV0FBS0EsR0FBTCxHQUFXLElBQVg7QUFDSDtBQUNKOztBQUNEa0MsRUFBQUEsTUFBTSxDQUFDemxCLElBQUQsRUFBT3duQixXQUFQLEVBQW9CO0FBQ3RCLFdBQU8sS0FBS2xFLEdBQUwsQ0FBU3RqQixJQUFULEVBQWUsS0FBSytpQixVQUFMLENBQWdCLE9BQWhCLEVBQXlCeEIsU0FBeEMsRUFBbURpRyxXQUFuRCxDQUFQO0FBQ0g7O0FBdnZCUTs7QUF5dkJiMUcsTUFBTSxDQUFDM0ksTUFBUCxHQUFnQixDQUFDLEdBQUdrRCxLQUFKLEVBQVczbkIsT0FBWCxFQUFoQjtBQUNBaU8sZUFBQSxHQUFrQm1mLE1BQWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2aUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU3FKLEtBQVQsR0FBaUI7QUFDOUIsUUFBTXo0QixPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFDQSxRQUFNO0FBQUUxQixJQUFBQTtBQUFGLE1BQVk2TyxzREFBUyxFQUEzQjtBQUVBLFFBQU07QUFBQSxPQUFDN0MsTUFBRDtBQUFBLE9BQVNtdUI7QUFBVCxNQUFzQjkwQiwrQ0FBUSxDQUFDLElBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ25ELE1BQUQ7QUFBQSxPQUFTazRCO0FBQVQsTUFBc0IvMEIsK0NBQVEsQ0FBQyxLQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNnMUIsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JqMUIsK0NBQVEsQ0FBQyxJQUFELENBQWxDO0FBRUFDLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkLEtBQUMsWUFBWTtBQUNYODBCLE1BQUFBLFNBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQSxZQUFNRyxVQUFVLEdBQUc7QUFDakJDLFFBQUFBLE1BQU0sRUFBRXhyQiwyREFBWSxDQUFDaFAsS0FBRCxDQURIO0FBRWpCeTZCLFFBQUFBLE1BQU0sRUFBRVIsMkRBQVksQ0FBQ2o2QixLQUFEO0FBRkgsT0FBbkI7QUFLQSxZQUFNaEIsUUFBUSxHQUFHLE1BQU1lLGtFQUFxQixDQUMxQ2c2Qix5Q0FBQSxpQ0FBa0JRLFVBQWxCO0FBQThCRyxRQUFBQSxNQUFNLEVBQUU7QUFBRSxXQUFFLEdBQUUxNkIsS0FBSyxDQUFDMjZCLENBQU4sSUFBVyxZQUFhLE1BQTVCLEdBQW9DMzZCLEtBQUssQ0FBQzQ2QjtBQUE1QztBQUF0QyxTQUQwQyxDQUE1QztBQUlBLFlBQU1DLGFBQWEsR0FBRyxNQUFNNTZCLHVFQUEwQixDQUNwRDg1Qix5Q0FBQSxDQUFhO0FBQUVXLFFBQUFBLE1BQU0sRUFBRTtBQUFFLFdBQUUsR0FBRTE2QixLQUFLLENBQUMyNkIsQ0FBTixJQUFXLFlBQWEsTUFBNUIsR0FBb0MzNkIsS0FBSyxDQUFDNDZCO0FBQTVDO0FBQVYsT0FBYixDQURvRCxDQUF0RDtBQUlBVCxNQUFBQSxTQUFTLENBQUNuN0IsUUFBRCxDQUFUO0FBQ0FzN0IsTUFBQUEsUUFBUSxDQUFDTyxhQUFELENBQVI7QUFFQVQsTUFBQUEsU0FBUyxDQUFDLEtBQUQsQ0FBVDtBQUNELEtBbkJEO0FBb0JELEdBckJRLEVBcUJOLENBQUNwNkIsS0FBRCxDQXJCTSxDQUFUO0FBdUJBLHNCQUNFLCtEQUFDLHlEQUFEO0FBQUEsNEJBQ0UsK0RBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsK0RBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UsK0RBQUMsOENBQUQ7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUF5QixlQUFTLEVBQUV5QixPQUFPLENBQUNFLE9BQTVDO0FBQXFELFFBQUUsRUFBQyxvQkFBeEQ7QUFBQSw2QkFDRSwrREFBQyxvREFBRDtBQUFXLGdCQUFRLEVBQUMsSUFBcEI7QUFBeUIsaUJBQVMsRUFBRUYsT0FBTyxDQUFDRyxTQUE1QztBQUFBLGdDQUVFLCtEQUFDLHFEQUFEO0FBQVksaUJBQU8sRUFBQyxJQUFwQjtBQUF5QixtQkFBUyxFQUFDLElBQW5DO0FBQXdDLG1CQUFTLEVBQUVILE9BQU8sQ0FBQ3E1QixhQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUtFLCtEQUFDLHFEQUFEO0FBQVksaUJBQU8sRUFBQyxJQUFwQjtBQUF5QixtQkFBUyxFQUFDLElBQW5DO0FBQXdDLG1CQUFTLEVBQUVyNUIsT0FBTyxDQUFDczVCLGdCQUEzRDtBQUFBLG9CQUVJcDNCLHdDQUFBLENBQU8zRCxLQUFLLENBQUM0NkIsUUFBYixJQUF5QixDQUF6QixJQUE4QjU2QixLQUFLLENBQUM0NkI7QUFGeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsRUFpQkcxNEIsTUFBTSxnQkFDTCwrREFBQyw4Q0FBRDtBQUFLLGVBQVMsRUFBRVQsT0FBTyxDQUFDdTVCLFdBQXhCO0FBQUEsNkJBQXFDLCtEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURLLGdCQUlMLCtEQUFDLDhDQUFEO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBeUIsZUFBUyxFQUFFdjVCLE9BQU8sQ0FBQ0UsT0FBNUM7QUFBQSw2QkFDRSwrREFBQyxvREFBRDtBQUFXLGdCQUFRLEVBQUMsSUFBcEI7QUFBeUIsaUJBQVMsRUFBRUYsT0FBTyxDQUFDRyxTQUE1QztBQUFBLCtCQUNFLCtEQUFDLGdFQUFEO0FBQWdCLGdCQUFNLEVBQUVvSztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQkosZUE2QkUsK0RBQUMsNERBQUQ7QUFDRSxVQUFJLEVBQUVoTSxLQUFLLENBQUNMLElBQU4sR0FBYTJXLFFBQVEsQ0FBQ3RXLEtBQUssQ0FBQ0wsSUFBUCxDQUFyQixHQUFvQyxDQUQ1QztBQUVFLFdBQUssRUFBRTA2QixLQUZUO0FBR0Usa0JBQVksRUFBRXJyQiwyREFBWSxDQUFDaFAsS0FBRDtBQUg1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBN0JGLGVBbUNFLCtEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1Q0Q7QUFFRCxNQUFNMEIsU0FBUyxHQUFHTCx1REFBVSxDQUFDWSxLQUFLLEtBQUs7QUFDckNOLEVBQUFBLE9BQU8sa0NBQ0ZNLEtBQUssQ0FBQ3VFLFFBQU4sQ0FBZTdFLE9BRGI7QUFFTHlCLElBQUFBLFVBQVUsRUFBRW5CLEtBQUssQ0FBQ2dCLE9BQU4sQ0FBYyxDQUFkLENBRlA7QUFHTCxLQUFDaEIsS0FBSyxDQUFDWSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUFELEdBQThCO0FBQzVCTSxNQUFBQSxVQUFVLEVBQUVuQixLQUFLLENBQUNnQixPQUFOLENBQWMsQ0FBZDtBQURnQjtBQUh6QixJQUQ4QjtBQVFyQzgzQixFQUFBQSxnQkFBZ0IsRUFBRTtBQUNoQngzQixJQUFBQSxLQUFLLEVBQUV0QixLQUFLLENBQUNNLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQixHQUFuQjtBQURTLEdBUm1CO0FBV3JDdzRCLEVBQUFBLFdBQVcsRUFBRTtBQUNYdjJCLElBQUFBLFNBQVMsRUFBRSxNQURBO0FBRVh0QyxJQUFBQSxPQUFPLEVBQUUsTUFGRTtBQUdYQyxJQUFBQSxjQUFjLEVBQUUsUUFITDtBQUlYcUUsSUFBQUEsVUFBVSxFQUFFO0FBSkQ7QUFYd0IsQ0FBTCxDQUFOLENBQTVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZPLE1BQU01SCxTQUFTLEdBQUcsbURBQWxCO0FBQ0EsTUFBTXFCLEtBQUssR0FBRyxhQUFkO0FBRUEsTUFBTTJFLElBQUksR0FBRyxDQUFDO0FBQ25CLFVBQVEsZUFEVztBQUNNLFNBQU8sRUFEYjtBQUNpQixVQUFRO0FBRHpCLENBQUQsRUFFakI7QUFDRCxVQUFRLFVBRFA7QUFDbUIsU0FBTyxVQUQxQjtBQUNzQyxVQUFRO0FBRDlDLENBRmlCLEVBSWpCO0FBQ0QsVUFBUSxTQURQO0FBQ2tCLFNBQU8sU0FEekI7QUFDb0MsVUFBUTtBQUQ1QyxDQUppQixDQUFiO0FBU0EsTUFBTW8yQixZQUFZLEdBQUcsRUFBckI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxFQUE1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JQO0FBQ0E7QUFFTyxlQUFlQyxTQUFmLENBQXlCcDhCLEdBQXpCLEVBQThCaWUsTUFBOUIsRUFBc0NvZSxNQUF0QyxFQUE4QztBQUNuRCxRQUFNLzZCLEtBQUssR0FBR0csb0RBQVEsRUFBdEI7O0FBRUEsTUFBSSxDQUFDSCxLQUFMLEVBQVk7QUFDVjtBQUNBKzZCLElBQUFBLE1BQU07QUFDUCxHQUhELE1BR087QUFDTCxRQUFJeDZCLDJEQUFlLENBQUNQLEtBQUQsQ0FBbkIsRUFBNEI7QUFDMUI7QUFDQSs2QixNQUFBQSxNQUFNO0FBQ1AsS0FIRCxNQUdPO0FBQ0wsWUFBTUMsVUFBVSxtQ0FDWHJlLE1BRFc7QUFFZHNlLFFBQUFBLE9BQU8sa0NBQ0Z0ZSxNQURFLGFBQ0ZBLE1BREUsdUJBQ0ZBLE1BQU0sQ0FBRXNlLE9BRE47QUFFTEMsVUFBQUEsYUFBYSxFQUFHLFVBQVNsN0IsS0FBTTtBQUYxQjtBQUZPLFFBQWhCOztBQVFBLFVBQUk7QUFDRixjQUFNckIsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0YsR0FBRCxFQUFNczhCLFVBQU4sQ0FBNUI7QUFDQSxjQUFNbjhCLE1BQU0sR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBckI7QUFDQSxlQUFPRCxNQUFQO0FBQ0QsT0FKRCxDQUlFLE9BQU9FLEtBQVAsRUFBYztBQUNkLGVBQU9BLEtBQVA7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUVNLE1BQU00UCxZQUFZLEdBQUloUCxLQUFELElBQVc7QUFDckMsUUFBTXc3QixZQUFZLEdBQUdsbEIsUUFBUSxDQUFDdFcsS0FBSyxDQUFDUCxLQUFQLENBQVIsSUFBeUIsQ0FBOUM7QUFDQSxNQUFJLENBQUNPLEtBQUssQ0FBQ1AsS0FBUCxJQUFnQjRQLElBQUksQ0FBQ29zQixHQUFMLENBQVNELFlBQVQsSUFBeUIsRUFBN0MsRUFBaUQsT0FBT04sMkRBQVAsQ0FBakQsS0FDSyxPQUFPTSxZQUFQO0FBQ04sQ0FKTTtBQU1BLE1BQU12QixZQUFZLEdBQUlqNkIsS0FBRCxJQUFXO0FBQ3JDLFFBQU0wN0IsV0FBVyxHQUFHcGxCLFFBQVEsQ0FBQ3RXLEtBQUssQ0FBQ0wsSUFBUCxDQUFSLElBQXdCLENBQTVDO0FBQ0EsUUFBTUYsS0FBSyxHQUFHdVAsWUFBWSxDQUFDaFAsS0FBRCxDQUExQjtBQUNBLE1BQUksQ0FBQ0EsS0FBSyxDQUFDTCxJQUFQLElBQWUrN0IsV0FBVyxLQUFLLENBQW5DLEVBQXNDLE9BQU8sQ0FBUCxDQUF0QyxLQUNLLE9BQU9BLFdBQVcsR0FBR2o4QixLQUFkLEdBQXNCQSxLQUE3QjtBQUNOLENBTE07Ozs7Ozs7Ozs7QUN2Q1AsMkdBQStDOzs7Ozs7Ozs7OztBQ0EvQyx5R0FBOEM7Ozs7Ozs7Ozs7OztBQ0E5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDs7QUFFbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDdkIsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFlBQVk7QUFDWixjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCLGlCQUFpQjtBQUNqQixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLDBCQUEwQjtBQUMxQixjQUFjO0FBQ2QsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNqT2E7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDLENBQUM7QUFDRixFQUFFLGtKQUF5RDtBQUMzRDs7Ozs7Ozs7Ozs7O0FDTkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9hcGkvY2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vYXBpL2dlbmRlci5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vYXBpL21vZGVsLmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9hcGkvdG9rZW4uanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2NvbXBvbmVudHMvQnJlYWRDcnVtYnMvQnJlYWRDcnVtYnMuanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2NvbXBvbmVudHMvQnJlYWRDcnVtYnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2NvbXBvbmVudHMvQ3VzdG9tSWNvbnMvRWxlbWVudEljb24vRWxlbWVudEljb24uanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2NvbXBvbmVudHMvQ3VzdG9tSWNvbnMvRWxlbWVudEljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2NvbXBvbmVudHMvRW1wdHlCYXIvRW1wdHlCYXIuanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2NvbXBvbmVudHMvRW1wdHlCYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2NvbXBvbmVudHMvRmxvYXRpbmdNZW51L0NhdGVnb3J5TWVudS9DYXRlZ29yeU1lbnUuanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2NvbXBvbmVudHMvRmxvYXRpbmdNZW51L0NhdGVnb3J5TWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vY29tcG9uZW50cy9GbG9hdGluZ01lbnUvRmxvYXRpbmdNZW51LmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9jb21wb25lbnRzL0Zsb2F0aW5nTWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vY29tcG9uZW50cy9Gb290ZXIvQWRkcmVzcy9BZGRyZXNzLmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9jb21wb25lbnRzL0Zvb3Rlci9BZGRyZXNzL2luZGV4LmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9jb21wb25lbnRzL0Zvb3Rlci9DYXRlZ29yaWVzL0Zvb3RlckNhdGVnb3JpZXNMaXN0LmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9jb21wb25lbnRzL0Zvb3Rlci9DYXRlZ29yaWVzL2luZGV4LmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2NvbXBvbmVudHMvRm9vdGVyL1BhcnRuZXJzL1BhcnRuZXJzLmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9jb21wb25lbnRzL0Zvb3Rlci9QYXJ0bmVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vY29tcG9uZW50cy9IZWFkZXIvTWVudS9NZW51LmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9jb21wb25lbnRzL0hlYWRlci9NZW51L2luZGV4LmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9jb21wb25lbnRzL0hlYWRlci9Ub3BCYXIvVG9wQmFyLmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9jb21wb25lbnRzL0hlYWRlci9Ub3BCYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9jb21wb25lbnRzL0ljb25UeXBlTGlzdC9JY29uVHlwZUxpc3QuanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2NvbXBvbmVudHMvSWNvblR5cGVMaXN0L2luZGV4LmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9jb21wb25lbnRzL0ltYWdlL0ltYWdlLmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9jb21wb25lbnRzL0ltYWdlL2luZGV4LmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9jb21wb25lbnRzL0xpc3RNb2RlbHNDYXJkcy9MaXN0TW9kZWxDYXJkcy5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vY29tcG9uZW50cy9MaXN0TW9kZWxzQ2FyZHMvTW9kZWxDYXJkL0N1c3RvbUNhcmRDb250ZW50L0N1c3RvbUNhcmRDb250ZW50LmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9jb21wb25lbnRzL0xpc3RNb2RlbHNDYXJkcy9Nb2RlbENhcmQvQ3VzdG9tQ2FyZENvbnRlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2NvbXBvbmVudHMvTGlzdE1vZGVsc0NhcmRzL01vZGVsQ2FyZC9DdXN0b21DYXJkSGVhZGVyL0N1c3RvbUNhcmRIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2NvbXBvbmVudHMvTGlzdE1vZGVsc0NhcmRzL01vZGVsQ2FyZC9DdXN0b21DYXJkSGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9jb21wb25lbnRzL0xpc3RNb2RlbHNDYXJkcy9Nb2RlbENhcmQvTW9kZWxDYXJkLmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9jb21wb25lbnRzL0xpc3RNb2RlbHNDYXJkcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vY29tcG9uZW50cy9QYWdpbmF0aW9uL1BhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2NvbXBvbmVudHMvUGFnaW5hdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vY29tcG9uZW50cy9TaXplTGlzdC9TaXplTGlzdC5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vY29tcG9uZW50cy9TaXplTGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vY29udGV4dC9TdGF0ZUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2xheW91dHMvQmFzaWNMYXlvdXQvQmFzaWNMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2xheW91dHMvQmFzaWNMYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2ltYWdlLmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vcGFnZXMva2F0ZWdvcmlhL1trcnl0ZXJpYV0uanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vdXRpbHMvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCIiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3ZlVG9JbmJveFwiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGxheWxpc3RBZGRDaGVja1wiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCIiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWxcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9BdmF0YXJcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9DYXJkXCIiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvQ2FyZEFjdGlvbnNcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9DYXJkSGVhZGVyXCIiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvQ29sbGFwc2VcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9EaXZpZGVyXCIiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvblwiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0xpc3RcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbVwiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtSWNvblwiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtVGV4dFwiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL1N3aXBlYWJsZURyYXdlclwiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL2NvbG9yc1wiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJAbXVpL3N0eWxlc1wiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJjbHN4XCIiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC9leHRlcm5hbCBcImp3dC1kZWNvZGVcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC9leHRlcm5hbCBcIm1hdGVyaWFsLXVpLWltYWdlXCIiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJuZXh0anMtYnJlYWRjcnVtYnNcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwicXNcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwicXVlcnktc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvaWdub3JlZHxEOlxcUHJvamVrdHkgV1dXXFxLb21lcmN5am5lXFxTdHJvamUgMi4wXFxjbGllbnQtdXBkYXRlXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXHNoYXJlZFxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJBU0VfUEFUSCB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllc0FwaSgpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7QkFTRV9QQVRIfS9jYXRlZ29yaWVzYDtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZ2V0Q2F0ZWdvcmllc0FwaSAtLT4+JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJBU0VfUEFUSCB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R2VuZGVyc0FwaSgpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7QkFTRV9QQVRIfS9nZW5kZXJzYDtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZ2V0R2VuZGVyc0FwaSAtLT4+JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEJBU0VfUEFUSCB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TW9kZWxzQXBpKHsgbGltaXQgPSAnJywgc29ydCA9ICcnLCBwYWdlID0gJycgfSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBsaW1pdEl0ZW1zID0gYF9saW1pdD0ke2xpbWl0fWA7XHJcbiAgICBjb25zdCBzb3J0SXRlbXMgPSBgX3NvcnQ9JHtzb3J0fWA7XHJcbiAgICBjb25zdCBzdGFydEl0ZW1zID0gYF9zdGFydD0ke3BhZ2V9YDtcclxuICAgIGNvbnN0IHVybCA9IGAke0JBU0VfUEFUSH0vbW9kZWxzPyR7bGltaXRJdGVtc30mJHtzb3J0SXRlbXN9JiR7c3RhcnRJdGVtc30mX3B1YmxpY2F0aW9uU3RhdGU9bGl2ZWA7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKCdnZXRNb2RlbHNBcGkgLS0+PicsIGVycm9yKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1vZGVsQnlDdXN0b21Qcm9wcyhxdWVyeSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHtCQVNFX1BBVEh9L21vZGVscz8ke3F1ZXJ5fSZfcHVibGljYXRpb25TdGF0ZT1saXZlYDtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coJ2dldE1vZGVsQnlDdXN0b21Qcm9wcyAtLT4+JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TW9kZWxCeUN1c3RvbVByb3BzQ291bnQocXVlcnkpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdXJsID0gYCR7QkFTRV9QQVRIfS9tb2RlbHMvY291bnQ/JHtxdWVyeX0mX3B1YmxpY2F0aW9uU3RhdGU9bGl2ZWA7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKCdnZXRNb2RlbEJ5Q3VzdG9tUHJvcHNDb3VudCAtLT4+JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBUT0tFTiB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCBqd3REZWNvZGUgZnJvbSAnand0LWRlY29kZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0VG9rZW4odG9rZW4pIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShUT0tFTiwgdG9rZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9rZW4oKSB7XHJcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFRPS0VOKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRva2VuKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFRPS0VOKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc0V4cGlyZWRUb2tlbih0b2tlbikge1xyXG4gIGNvbnN0IHRva2VuRGVjb2RlID0gand0RGVjb2RlKHRva2VuKTtcclxuICBjb25zdCBleHBpcmVEYXRlID0gdG9rZW5EZWNvZGUuZXhwICogMTAwMDtcclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIGlmIChjdXJyZW50RGF0ZSA+IGV4cGlyZURhdGUpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJyZWFkY3J1bWJzIGZyb20gJ25leHRqcy1icmVhZGNydW1icyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbXVpL3N0eWxlcyc7XHJcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnJlYWRDcnVtYnMoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBjb21wb25lbnQ9J3NlY3Rpb24nIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufSBpZD0nZmxvYXRpbmctYnJlYWQtY3J1bWJzJz5cclxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD0neGwnIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxCcmVhZGNydW1ic1xyXG4gICAgICAgICAgdHJhbnNmb3JtTGFiZWw9eyh0aXRsZSkgPT4gdGl0bGUgKyAnIC8nfVxyXG4gICAgICAgICAgYWN0aXZlSXRlbUNsYXNzTmFtZT17Y2xhc3Nlcy5hY3RpdmVJdGVtfVxyXG4gICAgICAgICAgaW5hY3RpdmVJdGVtQ2xhc3NOYW1lPXtjbGFzc2VzLmluYWN0aXZlSXRlbX1cclxuICAgICAgICAgIGxpc3RDbGFzc05hbWU9e2NsYXNzZXMubGlzdH1cclxuICAgICAgICAgIGxhYmVsc1RvVXBwZXJjYXNlPSd0cnVlJyAvPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBsb2FkZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICB9LFxyXG4gIHNlYXJjaExpbms6IHtcclxuICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZ3JleVs0MDBdfWAsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5ncmV5WzkwMF19YFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbGlzdDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgbGlzdFN0eWxlVHlwZTogJ25vbmUnLFxyXG4gICAgbWFyZ2luTGVmdDogMCxcclxuICAgIHBhZGRpbmdMZWZ0OiAwLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcclxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmdyZXlbNDAwXX1gLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKC4yNSksXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMub25seSgneHMnKV06IHtcclxuICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZygwKSxcclxuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZygwKSxcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDApLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMCksXHJcbiAgICB9LFxyXG4gICAgJyYgPiBsaTpub3QoOmxhc3QtY2hpbGQpJzoge1xyXG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygwLjI1KSxcclxuICAgIH0sXHJcblxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZ3JleVs4MDBdfWAsXHJcbiAgICB9XHJcbiAgfSxcclxuICBpbmFjdGl2ZUl0ZW06IHtcclxuICAgICcmID4gYSc6IHtcclxuICAgICAgY29sb3I6IGAke3RoZW1lLnBhbGV0dGUuZ3JleVs1MDBdfWAsXHJcbiAgICAgIGZvbnRTaXplOiAnLjZyZW0nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGFjdGl2ZUl0ZW06IHtcclxuICAgICcmID4gYSc6IHtcclxuICAgICAgY29sb3I6IGAke3RoZW1lLnBhbGV0dGUuZ3JleVs5MDBdfWAsXHJcbiAgICAgIGZvbnRTaXplOiAnLjZyZW0nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlY3Rpb246IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygwLjUpXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIC4uLnRoZW1lLmNvbnRhaW5lclxyXG4gIH1cclxuXHJcbn0pKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQnJlYWRDcnVtYnMnOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG11aS9zdHlsZXMnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuY29uc3QgZWxlbWVudEljb25zID0gW1xyXG4gIHsgbmFtZTogJ2RvZGF0a2knLCBwYXRoOiAnL2ljb25zLzAwMS1jb29raW5nLWVxdWlwbWVudC5zdmcnIH0sXHJcbiAgeyBuYW1lOiAnc3BvZG5pY2EnLCBwYXRoOiAnL2ljb25zLzAwMS1za2lydC5zdmcnIH0sXHJcbiAgeyBuYW1lOiAnc3dldGVyJywgcGF0aDogJy9pY29ucy8wMDItc3dlYXRlci5zdmcnIH0sXHJcbiAgeyBuYW1lOiAnYnJvbicsIHBhdGg6ICcvaWNvbnMvMDAyLXdlYXBvbnMuc3ZnJyB9LFxyXG4gIHsgbmFtZTogJ2tvc3RpdW0nLCBwYXRoOiAnL2ljb25zLzAwMy1zdXBlcmhlcm8uc3ZnJyB9LFxyXG4gIHsgbmFtZTogJ2hlxYJtJywgcGF0aDogJy9pY29ucy8wMDMtdmlraW5nLWhlbG1ldC5zdmcnIH0sXHJcbiAgeyBuYW1lOiAnamVkbm9jemVzY2lvd3knLCBwYXRoOiAnL2ljb25zLzAwNC1zdWl0LnN2ZycgfSxcclxuICB7IG5hbWU6ICdtYXNrYScsIHBhdGg6ICcvaWNvbnMvMDA0LXRoZWF0ZXIuc3ZnJyB9LFxyXG4gIHsgbmFtZTogJ2J1dHknLCBwYXRoOiAnL2ljb25zLzAwNS1zaG9lcy5zdmcnIH0sXHJcbiAgeyBuYW1lOiAnbmFrcnljaWUtZ2xvd3knLCBwYXRoOiAnL2ljb25zLzAwNi1wYW1lbGEuc3ZnJyB9LFxyXG4gIHsgbmFtZTogJ3picm9qYScsIHBhdGg6ICcvaWNvbnMvMDA3LWFybW9yLnN2ZycgfSxcclxuICB7IG5hbWU6ICdzdWtuaWEnLCBwYXRoOiAnL2ljb25zLzAwOC1kcmVzcy5zdmcnIH0sXHJcbiAgeyBuYW1lOiAna29zenVsa2EnLCBwYXRoOiAnL2ljb25zLzAwOS1zaGlydC5zdmcnIH0sXHJcbiAgeyBuYW1lOiAndC1zaGlydCcsIHBhdGg6ICcvaWNvbnMvMDEwLXRzaGlydC5zdmcnIH0sXHJcbiAgeyBuYW1lOiAnc3BvZG5pZScsIHBhdGg6ICcvaWNvbnMvdHJvdXNlcnMuc3ZnJyB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWxlbWVudEljb24ocHJvcHMpIHtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3Qgc3JjID0gXy5maW5kKGVsZW1lbnRJY29ucywgeyBuYW1lOiBwcm9wcy51cmwgfSk/LnBhdGggfHwgJy9pY29ucy8wMDQtc3VpdC5zdmcnO1xyXG4gIGNvbnN0IHdpZHRoID0gcHJvcHMud2lkdGggPyBwcm9wcy53aWR0aCArICdweCcgOiAnMjVweCc7XHJcbiAgY29uc3QgaGVpZ2h0ID0gcHJvcHMud2lkdGggPyBwcm9wcy53aWR0aCArICdweCcgOiAnMjVweCc7XHJcbiAgY29uc3QgY29sb3IgPSBwcm9wcz8uY29sb3IgfHwgdGhlbWUucGFsZXR0ZS5ncmV5WzcwMF07XHJcbiAgY29uc3QgdGl0bGUgPSBwcm9wcz8udGl0bGUgfHwgJ2tvc3RpdW15J1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEltYWdlIHNyYz17c3JjfSBoZWlnaHQ9e2hlaWdodH0gd2lkdGg9e3dpZHRofSBjb2xvcj17Y29sb3J9IHRpdGxlPXt0aXRsZX0gLz5cclxuICApO1xyXG59XHJcblxyXG5cclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vRWxlbWVudEljb24nO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG11aS9zdHlsZXMnO1xyXG5cclxuaW1wb3J0IHsgQm94IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFbXB0eUJhcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnNwYWNlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgc3BhY2U6IHtcclxuICAgIG1pbkhlaWdodDogJzZyZW0nXHJcbiAgfVxyXG59KSk7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0VtcHR5QmFyJzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG11aS9zdHlsZXMnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEJveCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnlNZW51KHsgbWVudSwgcXVlcnkgPSAnJyB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMubWVudUxpc3R9IGNvbXBvbmVudD0ndWwnIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBfLnNpemUobWVudSkgPiAwICYmXHJcbiAgICAgICAgICBfLm1hcChtZW51LCBpdGVtID0+IDxDYXRlZ29yeUl0ZW0gaXRlbT17aXRlbX0gcXVlcnk9e3F1ZXJ5fSBrZXk9e2l0ZW0udXJsfSAvPilcclxuICAgICAgICB9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBDYXRlZ29yeUl0ZW0gPSAoeyBpdGVtLCBxdWVyeSB9KSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBjb21wb25lbnQ9J2xpJyBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoTGlua30gPlxyXG5cclxuICAgICAgPExpbmsgaHJlZj17YC9rYXRlZ29yaWEvJHtpdGVtLnVybH0ke3F1ZXJ5ID8gYD9xPSR7cXVlcnl9YCA6ICcnfWB9IHBhc3NIcmVmPlxyXG4gICAgICAgIDxhPntpdGVtLnRpdGxlIHx8IGl0ZW0ua2F0ZWdvcmlhfTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG5cclxuICAgIDwvQm94PlxyXG4gIClcclxufTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBsb2FkZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICB9LFxyXG4gIHNlYXJjaExpbms6IHtcclxuICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZ3JleVs0MDBdfWAsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5ncmV5WzkwMF19YFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbGlzdDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgbGlzdFN0eWxlVHlwZTogJ25vbmUnLFxyXG4gICAgbWFyZ2luTGVmdDogMCxcclxuICAgIHBhZGRpbmdMZWZ0OiAwLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgfSxcclxuICAgICcmID4gbGk6bm90KDpsYXN0LWNoaWxkKSc6IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5vbmx5KCd4cycpXToge1xyXG4gICAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbn0pKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2F0ZWdvcnlNZW51JzsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtdWkvc3R5bGVzJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEJveCwgRGl2aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgTGlzdE1lbnUgZnJvbSAnLi9DYXRlZ29yeU1lbnUnO1xyXG5pbXBvcnQgeyB1c2VBcHBDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9TdGF0ZUNvbnRleHQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmxvYXRpbmdNZW51KCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgYWRkaXRpb25hbE1lbnVJdGVtcyA9IFt7XHJcbiAgICB0aXRsZTogJ1dpxJljZWouLi4nLFxyXG4gICAgdXJsOiAnbW9kZWxlJ1xyXG4gIH1dO1xyXG5cclxuICBjb25zdCB7IGdlbmRlcnMsIGNhdGVnb3JpZXMgfSA9IHVzZUFwcENvbnRleHQoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggY29tcG9uZW50PSdzZWN0aW9uJyBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0gaWQ9J2Zsb2F0aW5nLW1lbnUnPlxyXG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPSd4bCcgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPExpc3RNZW51IG1lbnU9e2dlbmRlcnN9IHF1ZXJ5PXsncGxlYyd9IC8+XHJcbiAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHZhcmlhbnQ9XCJtaWRkbGVcIiBmbGV4SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuZGl2aWRlcn0gLz5cclxuICAgICAgICA8TGlzdE1lbnUgbWVudT17Y2F0ZWdvcmllc30gLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBsb2FkZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICB9LFxyXG4gIHNlY3Rpb246IHtcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdLFxyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEuMjUpXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIC4uLnRoZW1lLmNvbnRhaW5lclxyXG4gIH0sXHJcbiAgZGl2aWRlcjoge1xyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfVxyXG4gIH1cclxufSkpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9GbG9hdGluZ01lbnUnOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbXVpL3N0eWxlcyc7XHJcbmltcG9ydCB7IEJveCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkcmVzcyh7IGFkZHJlc3MgfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD0naDQnPnthZGRyZXNzLnRpdGxlfTwvVHlwb2dyYXBoeT5cclxuICAgICAgPEJveCBjb21wb25lbnQ9J3VsJyBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XHJcbiAgICAgICAgPGxpPntfLm1hcChhZGRyZXNzLnZhbHVlcy5waG9uZXMpfTwvbGk+XHJcbiAgICAgICAgPGxpPnthZGRyZXNzLnZhbHVlcy5lbWFpbH08L2xpPlxyXG4gICAgICAgIDxsaT57YWRkcmVzcy52YWx1ZXMuYWRkcmVzcy5jaXR5fTwvbGk+XHJcbiAgICAgICAgPGxpPnthZGRyZXNzLnZhbHVlcy5hZGRyZXNzLnN0cmVldH08L2xpPlxyXG4gICAgICAgIDxsaT57YWRkcmVzcy52YWx1ZXMuYWRkcmVzcy5wb3N0Q29kZX08L2xpPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBzZWN0aW9uOiB7XHJcbiAgICAuLi50aGVtZS5zZWN0aW9ucy5zZWN0aW9uLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIC4uLnRoZW1lLmNvbnRhaW5lclxyXG4gIH0sXHJcbn0pKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQWRkcmVzcyc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbXVpL3N0eWxlcyc7XHJcbmltcG9ydCB7IEJveCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXJDYXRlZ29yaWVzTGlzdCh7IGNhdGVnb3JpZXMgfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD0naDQnPntjYXRlZ29yaWVzLnRpdGxlfTwvVHlwb2dyYXBoeT5cclxuICAgICAgPEJveCBjb21wb25lbnQ9J3VsJyBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXy5zaXplKGNhdGVnb3JpZXMudmFsdWVzKSA+IDAgJiZcclxuICAgICAgICAgIF8ubWFwKGNhdGVnb3JpZXMudmFsdWVzLCBpdGVtID0+IDxDYXRlZ29yaWEgaXRlbT17aXRlbX0ga2V5PXtpdGVtLmthdGVnb3JpYX0gLz4pXHJcbiAgICAgICAgfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IENhdGVnb3JpYSA9ICh7IGl0ZW0sIHF1ZXJ5IH0pID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGNvbXBvbmVudD0nbGknID5cclxuXHJcbiAgICAgIDxMaW5rIGhyZWY9e2Ava2F0ZWdvcmlhLyR7aXRlbS51cmx9YH0gcGFzc0hyZWY+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PntpdGVtLmthdGVnb3JpYX08L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICAuLi50aGVtZS5jb250YWluZXJcclxuICB9LFxyXG4gIGZvb3Rlcjoge1xyXG4gICAgbWluSGVpZ2h0OiAnNHJlbTsnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgbWFyZ2luVG9wOiAnYXV0bycsXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMClcclxuICB9LFxyXG4gIGxpbms6IHtcclxuICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJ1xyXG4gIH1cclxufSkpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Gb290ZXJDYXRlZ29yaWVzTGlzdCc7IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtdWkvc3R5bGVzJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBEaXZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdXNlQXBwQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvU3RhdGVDb250ZXh0JztcclxuaW1wb3J0IEFkZHJlc3MgZnJvbSAnLi9BZGRyZXNzJztcclxuaW1wb3J0IENhdGVnb3JpZXMgZnJvbSAnLi9DYXRlZ29yaWVzJztcclxuaW1wb3J0IFBhcnRuZXJzIGZyb20gJy4vUGFydG5lcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgZm9vdGVyTWVudSA9IFtcclxuICAgIHsgdGl0bGU6ICdLYXRlZ29yaWUnLCB2YWx1ZXM6IHVzZUFwcENvbnRleHQoKS5jYXRlZ29yaWVzIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnS29udGFrdCcsXHJcbiAgICAgIHZhbHVlczoge1xyXG4gICAgICAgIHBob25lczogWyc3ODggNDc5IDc4OSddLFxyXG4gICAgICAgIGVtYWlsOiAnYWdlbmNqYS1yZWtsYW1vd2EtaW1wdWxzQHdwLnBsJyxcclxuICAgICAgICBhZGRyZXNzOiB7IHN0cmVldDogJ3VsLiBPd29jb3dhIDMnLCBwb3N0Q29kZTogJzI3LTIwMCcsIGNpdHk6ICdTdGFyYWNob3dpY2UnIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdQYXJ0bmVyenknLFxyXG4gICAgICB2YWx1ZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogJ0FnZW5jamEgUmVrbGFtb3dhIEltcHVscycsIHVybDogJ2h0dHA6Ly9hcmltcHVscy5wbC8nXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgdGl0bGU6ICdPcGlla2EgTmFkIEdyb2JhbWknLCB1cmw6ICdodHRwOi8vb3BpZWthLW5hZC1ncm9iYW1pLmNvbS8nXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1heFdpZHRoPSd4bCcgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxDYXRlZ29yaWVzIGNhdGVnb3JpZXM9e2Zvb3Rlck1lbnVbMF19IC8+XHJcbiAgICAgIDxEaXZpZGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXZpZGVyfSBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgdmFyaWFudD1cIm1pZGRsZVwiIGZsZXhJdGVtIC8+XHJcbiAgICAgIDxBZGRyZXNzIGFkZHJlc3M9e2Zvb3Rlck1lbnVbMV19IC8+XHJcbiAgICAgIDxEaXZpZGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXZpZGVyfSBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgdmFyaWFudD1cIm1pZGRsZVwiIGZsZXhJdGVtIC8+XHJcbiAgICAgIDxQYXJ0bmVycyBwYXJ0bmVycz17Zm9vdGVyTWVudVsyXX0gLz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgLi4udGhlbWUuY29udGFpbmVyLFxyXG4gICAgcGFkZGluZ1RvcDogYCR7dGhlbWUuc3BhY2luZygzKX1gLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogYCR7dGhlbWUuc3BhY2luZygzKX1gLFxyXG4gICAgYmFja2dyb3VuZDogYCR7dGhlbWUucGFsZXR0ZS5jb21tb24ucHJpbWFyeS5tYWlufSAhaW1wb3J0YW50YCxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmdyZXlbNTBdLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdiYXNlbGluZScsXHJcbiAgICB9LFxyXG4gICAgJyYgaDQnOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMS40cmVtJyxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMS42cmVtJyxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICcmIHVsJzoge1xyXG4gICAgICBtYXJnaW5MZWZ0OiAwLFxyXG4gICAgICBwYWRkaW5nTGVmdDogMCxcclxuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICB9LFxyXG4gICAgICAnJiA+IConOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgJyY6bm90KDpsYXN0LWNoaWxkKSc6IHtcclxuICAgICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZyg0KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBkaXZpZGVyOiB7XHJcbiAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICBiYWNrZ3JvdW5kOiBgJHt0aGVtZS5wYWxldHRlLmdyZXlbNTBdfSAhaW1wb3J0YW50YCxcclxuICAgIHdpZHRoOiAnMXB4JyxcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnXHJcbiAgICB9LFxyXG4gIH1cclxufSkpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG11aS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBCb3gsIFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFydG5lcnMoeyBwYXJ0bmVycyB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PSdoNCc+e3BhcnRuZXJzLnRpdGxlfTwvVHlwb2dyYXBoeT5cclxuICAgICAgPEJveCBjb21wb25lbnQ9J3VsJyBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XHJcbiAgICAgICAge18ubWFwKHBhcnRuZXJzLnZhbHVlcywgcCA9PiA8UGFydG5lciBrZXk9e3AudXJsfSBwYXJ0bmVyPXtwfSAvPil9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgUGFydG5lciA9ICh7IHBhcnRuZXIgfSkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggY29tcG9uZW50PSdsaScgPlxyXG5cclxuICAgICAgPExpbmsgaHJlZj17YCR7cGFydG5lci51cmx9YH0gcGFzc0hyZWY+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9IHRhcmdldD1cIl9ibGFua1wiPntwYXJ0bmVyLnRpdGxlfTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgc2VjdGlvbjoge1xyXG4gICAgLi4udGhlbWUuc2VjdGlvbnMuc2VjdGlvbixcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICAuLi50aGVtZS5jb250YWluZXJcclxuICB9LFxyXG4gIGxpbms6IHtcclxuICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJ1xyXG4gIH1cclxufSkpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9QYXJ0bmVycyc7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vRm9vdGVyJzsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbXVpL3N0eWxlcyc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgVG9vbGJhciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgVG9wQmFyIGZyb20gJy4vVG9wQmFyJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi9NZW51JztcclxuaW1wb3J0IHsgbWVudSB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD0neGwnPlxyXG4gICAgICA8VG9vbGJhciBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+XHJcbiAgICAgICAgPFRvcEJhciBtZW51PXttZW51fSAvPlxyXG4gICAgICAgIDxNZW51IG1lbnU9e21lbnV9IC8+XHJcbiAgICAgIDwvVG9vbGJhcj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHRvb2xiYXI6IHtcclxuICAgIC8vIG1pbkhlaWdodDogMTAwLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXIgIWltcG9ydGFudFwiLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIHBhZGRpbmdMZWZ0OiAwLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAwLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gJ0BtdWkvc3R5bGVzJztcclxuaW1wb3J0IFN3aXBlYWJsZURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL1N3aXBlYWJsZURyYXdlcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbXVpL21hdGVyaWFsL0RpdmlkZXInO1xyXG5pbXBvcnQgUGxheWxpc3RBZGRDaGVja0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlsaXN0QWRkQ2hlY2snO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0SXRlbUljb24nO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IEluYm94SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3gnO1xyXG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5LCBCb3gsIFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnUoeyBtZW51IH0pIHtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgcmlnaHQ6IGZhbHNlLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKGFuY2hvciwgb3BlbikgPT4gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nICYmIChldmVudC5rZXkgPT09ICdUYWInIHx8IGV2ZW50LmtleSA9PT0gJ1NoaWZ0JykpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgW2FuY2hvcl06IG9wZW4gfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYW5jaG9yID0gJ3JpZ2h0JztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIDxNZW51RHJhd2VyIGFuY2hvcj17YW5jaG9yfSBjbGFzc2VzPXtjbGFzc2VzfSB0b2dnbGVEcmF3ZXI9e3RvZ2dsZURyYXdlcn0gc3RhdGU9e3N0YXRlfT5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEhlYWRlcn0gdmFyaWFudD1cImg2XCI+U3Ryb255PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxNZW51TGlzdCBtZW51PXttZW51fSAvPlxyXG4gICAgICAgIDxEaXZpZGVyIC8+XHJcblxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SGVhZGVyfSB2YXJpYW50PVwiaDZcIj5QYXJ0bmVyenk8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFBhcnRuZXJzTGlzdCAvPlxyXG5cclxuICAgICAgPC9NZW51RHJhd2VyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgTWVudURyYXdlciA9ICh7IGNoaWxkcmVuLCBjbGFzc2VzLCBhbmNob3IsIHRvZ2dsZURyYXdlciwgc3RhdGUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGNvbXBvbmVudD0nZGl2JyBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2FuY2hvcn0+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCB0cnVlKX0+XHJcbiAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8U3dpcGVhYmxlRHJhd2VyXHJcbiAgICAgICAgICBhbmNob3I9e2FuY2hvcn1cclxuICAgICAgICAgIG9wZW49e3N0YXRlW2FuY2hvcl19XHJcbiAgICAgICAgICBvbkNsb3NlPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9XHJcbiAgICAgICAgICBvbk9wZW49e3RvZ2dsZURyYXdlcihhbmNob3IsIHRydWUpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1N3aXBlYWJsZURyYXdlcj5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBNZW51TGlzdCA9ICh7IG5vSWNvbiA9IGZhbHNlLCBjbGFzc2VzLCBtZW51IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpc3QgY2xhc3NOYW1lPXtjbGFzc2VzID8gY2xhc3Nlcy5zZXJ2aWNlc0xpc3RUb3BCYXIgOiAnJ30+XHJcbiAgICAgIHttZW51Lm1hcChpdGVtID0+IChcclxuICAgICAgICA8TWVudUl0ZW0gbm9JY29uPXtub0ljb259IGl0ZW09e2l0ZW19IGtleT17aXRlbS51cmx9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9MaXN0PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBNZW51SXRlbSA9ICh7IGl0ZW0sIG5vSWNvbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2AvJHtpdGVtLnVybH1gfSBwYXNzSHJlZj5cclxuICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjb21wb25lbnQ9XCJhXCI+XHJcbiAgICAgICAgeyFub0ljb24gPyA8TGlzdEl0ZW1JY29uPjxQbGF5bGlzdEFkZENoZWNrSWNvbiAvPiA8L0xpc3RJdGVtSWNvbj4gOiAnJ31cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0PntpdGVtLml0ZW19PC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFBhcnRuZXJzTGlzdCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpc3Q+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCJodHRwOi8vYXJpbXB1bHMucGwvXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjb21wb25lbnQ9XCJhXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1JY29uPjxJbmJveEljb24gLz4gPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0PkFnZW5jamEgSW1wdWxzPC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9MaXN0PlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGxpc3Q6IHtcclxuICAgIHdpZHRoOiAnNDAwcHgnLFxyXG4gICAgYmFja2dyb3VuZDogJ3RvbWF0bydcclxuICB9LFxyXG4gIHJvb3Q6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBtYXJnaW5MZWZ0OiAnYXV0bydcclxuICAgIH1cclxuICB9LFxyXG4gIGZ1bGxMaXN0OiB7XHJcbiAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnXHJcbiAgfSxcclxuICBhdXRoTGlzdDoge30sXHJcbiAgdXNlckRldGFpbHM6IHtcclxuICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcclxuICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBmb250U2l6ZTogJy44NXJlbSdcclxuICAgIH1cclxuICB9LFxyXG4gIHVzZXJTdHlsZXM6IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgdGV4dEFsaWduOiAncmlnaHQnXHJcbiAgfSxcclxuICBzZXJ2aWNlc0xpc3RUb3BCYXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcclxuICB9LFxyXG4gIGxpc3RIZWFkZXI6IHtcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSlcclxuICB9XHJcbn0pKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vTWVudSc7IiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtdWkvc3R5bGVzJztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZWFyY2gnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3BCYXIoeyBtZW51IH0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IGluZGV4UGFnZUl0ZW0gPSBfLmhlYWQoXy5maWx0ZXIobWVudSwgeyB1cmw6ICcnIH0pKTtcclxuICBjb25zdCBzZWFyY2hQYWdlSXRlbSA9IF8uaGVhZChfLmZpbHRlcihtZW51LCB7IHVybDogJ3d5c3p1a2FqJyB9KSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TG9nbyBpbmRleFBhZ2U9e2luZGV4UGFnZUl0ZW19IC8+XHJcbiAgICAgIHsvKiA8Qm94IGNvbXBvbmVudD0nZGl2JyBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoTGlua30gPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2Avd3lzenVrYWpgfSBwYXNzSHJlZj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5jZW50cmVJY29ufT48U2VhcmNoSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoSWNvbn0gLz4ge3NlYXJjaFBhZ2VJdGVtLml0ZW19PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9Cb3g+ICovfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTG9nbyh7IGluZGV4UGFnZSB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtgLyR7aW5kZXhQYWdlLnVybH1gfSBwYXNzSHJlZj5cclxuICAgICAgPGE+XHJcbiAgICAgICAgPGltZyBzcmM9Jy9MT0dPLnN2ZycgYWx0PSdTaXRlIExvZ28nIHRpdGxlPSdXeXBvxbx5Y3phbG5pYSBzdHJvasOzdyBrYXJuYXdhxYJvd3ljaCcgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299IC8+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgc2VhcmNoTGluazoge1xyXG4gICAgLi4udGhlbWUuY3VzdG9tQnV0dG9ucy5wcmltYXJ5LFxyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZyg1KSxcclxuICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBtYXJnaW5SaWdodDogJ2F1dG8nXHJcbiAgICB9XHJcbiAgfSxcclxuICBzZWFyY2hJY29uOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKVxyXG4gIH0sXHJcbiAgbG9nbzoge1xyXG4gICAgd2lkdGg6ICc1LjRyZW0nLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHdpZHRoOiAnNi44cmVtJyxcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7XHJcbiAgICAgIHdpZHRoOiAnNy4ycmVtJyxcclxuICAgIH0sXHJcbiAgICAvLyBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMywgNl1cclxuICB9LFxyXG4gIGNlbnRyZUljb246IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgYWxpZ25Db250ZW50OiAnY2VudGVyJ1xyXG4gIH1cclxufSkpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Ub3BCYXInOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0hlYWRlcic7IiwiaW1wb3J0IHsgQm94IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBFbGVtZW50SWNvbiBmcm9tICcuLi9DdXN0b21JY29ucy9FbGVtZW50SWNvbic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbXVpL3N0eWxlcyc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEljb25UeXBlTGlzdCh7IG1vZGVsIH0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uc30+XHJcbiAgICAgIHtcclxuICAgICAgICBfLm1hcChtb2RlbC5wYXJ0cywgcGFydCA9PiAoXHJcbiAgICAgICAgICA8RWxlbWVudEljb25cclxuICAgICAgICAgICAgdGl0bGU9e3BhcnQudHl0dWx9XHJcbiAgICAgICAgICAgIHVybD17cGFydC51cmx9XHJcbiAgICAgICAgICAgIGtleT17cGFydC51cmx9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpXHJcbiAgICAgIH1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgaWNvbnM6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnXHJcbiAgfVxyXG59KSk7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0ljb25UeXBlTGlzdCc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ21hdGVyaWFsLXVpLWltYWdlJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tICdAbXVpL3N0eWxlcyc7XHJcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW1wb3J0IHsgQkFTRV9QQVRIIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlQ3VzdG9tKHByb3BzKSB7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG5cclxuICBsZXQgc2l6ZSA9IHByb3BzLnNyYztcclxuXHJcbiAgY29uc3QgaXNLb21wdXRlciA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJykpO1xyXG4gIGNvbnN0IGlzVGFibGV0ID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5vbmx5KCdtZCcpKTtcclxuICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKSk7XHJcblxyXG4gIGlmIChfLnNpemUocHJvcHMuZm9ybWF0cykgPiAwKSB7XHJcbiAgICBpZiAoaXNLb21wdXRlcikgc2l6ZSA9IHByb3BzLmZvcm1hdHM/LmxhcmdlPy51cmwgfHwgc2l6ZTtcclxuICAgIGlmIChpc1RhYmxldCkgc2l6ZSA9IHByb3BzLmZvcm1hdHM/Lm1lZGl1bT8udXJsIHx8IHNpemU7XHJcbiAgICBpZiAoaXNNb2JpbGUpIHNpemUgPSBwcm9wcy5mb3JtYXRzPy5zbWFsbD8udXJsIHx8IHNpemU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPEltYWdlIHsuLi5wcm9wc30gc3JjPXtgJHtCQVNFX1BBVEh9JHtzaXplfWB9IC8+XHJcbn1cclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSW1hZ2UnOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbXVpL3N0eWxlcyc7XHJcbmltcG9ydCBNb2RlbENhcmQgZnJvbSAnLi9Nb2RlbENhcmQvTW9kZWxDYXJkJztcclxuXHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RNb2RlbHMoeyBtb2RlbHMgfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0gc3BhY2luZz17Mn0gY29tcG9uZW50PSd1bCcgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9ID5cclxuICAgICAge18uc2l6ZShtb2RlbHMpID4gMCAmJiBfLm1hcChtb2RlbHMsIG1vZGVsID0+IChcclxuICAgICAgICA8TW9kZWxDYXJkIG1vZGVsPXttb2RlbH0ga2V5PXttb2RlbC50eXR1bH0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L0dyaWQ+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgbGlzdDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgbGlzdFN0eWxlVHlwZTogJ25vbmUnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgICBtYXJnaW5Ub3A6ICczcmVtJyxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG11aS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBCb3gsIERpdmlkZXIsIENhcmRDb250ZW50IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgU2l6ZUxpc3QgZnJvbSAnLi4vLi4vLi4vU2l6ZUxpc3QnO1xyXG5pbXBvcnQgSWNvblR5cGVMaXN0IGZyb20gJy4uLy4uLy4uL0ljb25UeXBlTGlzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21DYXJkQ29udGVudCh7IG1vZGVsIH0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRDb250ZW50fT5cclxuICAgICAge18uc2l6ZShtb2RlbC5vcGlzKSA+IDAgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMub3Bpc0NvbnRlbnR9PlxyXG4gICAgICAgICAgICB7bW9kZWwub3Bpc31cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7Xy5zaXplKG1vZGVsLnBhcnRzKSA+IDAgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMub3Bpc0NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgIEVsZW1lbnR5IHN0cm9qdTpcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgPEljb25UeXBlTGlzdCBtb2RlbD17bW9kZWx9IC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7Xy5zaXplKG1vZGVsLnNpemVzKSA+IDAgJiYgKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMub3Bpc0NvbnRlbnR9PlxyXG4gICAgICAgICAgICBEb3N0xJlwbmUgcm96bWlhcnk6XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8U2l6ZUxpc3QgbW9kZWw9e21vZGVsfSAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMub3Bpc0NvbnRlbnR9PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC8ke21vZGVsLnVybH1gfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PkN6eXRhaiB3acSZY2VqLi4uPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NhcmRDb250ZW50ID5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgY2FyZENvbnRlbnQ6IHtcclxuICAgICcmID4gOm5vdCg6bGFzdC1jaGlsZCknOiB7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgb3Bpc0NvbnRlbnQ6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmdyZXlbNjAwXSxcclxuICAgIGZvbnRTaXplOiAnLjlyZW0nXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbidcclxuICB9LFxyXG4gIGxpbms6IHtcclxuICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5zZWNvbmRhcnkubWFpblxyXG4gIH1cclxufSkpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DdXN0b21DYXJkQ29udGVudCc7IiwiaW1wb3J0IENhcmRIZWFkZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkSGVhZGVyJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICdAbXVpL21hdGVyaWFsL0F2YXRhcic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbXVpL3N0eWxlcyc7XHJcbmltcG9ydCB7IHJlZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvY29sb3JzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbUNhcmRIZWFkZXIoeyBtb2RlbCB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRIZWFkZXJcclxuICAgICAgYXZhdGFyPXtcclxuICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiUMWCZcSHXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9XHJcbiAgICAgICAgICB0aXRsZT17bW9kZWwucGxlYy50aXRsZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bW9kZWwucGxlYy50aXRsZVswXX1cclxuICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgfVxyXG4gICAgICB0aXRsZT17bW9kZWwudHl0dWx9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBhdmF0YXI6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uc2Vjb25kYXJ5Lm1haW4sXHJcbiAgfSxcclxufSkpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DdXN0b21DYXJkSGVhZGVyJzsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEdyaWQsIFR5cG9ncmFwaHksIEJveCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtdWkvc3R5bGVzJztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkJztcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZEFjdGlvbnMnO1xyXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnQG11aS9tYXRlcmlhbC9Db2xsYXBzZSc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZSc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi8uLi9JbWFnZSc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IEN1c3RvbUNhcmRIZWFkZXIgZnJvbSAnLi9DdXN0b21DYXJkSGVhZGVyJztcclxuaW1wb3J0IEN1c3RvbUNhcmRDb250ZW50IGZyb20gJy4vQ3VzdG9tQ2FyZENvbnRlbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kZWxDYXJkKHsgbW9kZWwgfSkge1xyXG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgaGFzUGhvdG9zID0gXy5zaXplKG1vZGVsLnpkamVjaWEpID4gMDtcclxuXHJcbiAgY29uc3QgaGFuZGxlRXhwYW5kQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRFeHBhbmRlZCghZXhwYW5kZWQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjb21wb25lbnQ9J2xpJyBpdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs0fSBsZz17Mn0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpfT5cclxuICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgIDxDdXN0b21DYXJkSGVhZGVyIG1vZGVsPXttb2RlbH0gLz5cclxuICAgICAgICA8TGluayBocmVmPXtgLyR7bW9kZWwudXJsfWB9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17aGFzUGhvdG9zID8gbW9kZWwuemRqZWNpYVswXS51cmwgOiAnJ31cclxuICAgICAgICAgICAgICBhc3BlY3RSYXRpbz17MC43fVxyXG4gICAgICAgICAgICAgIGFsdD17aGFzUGhvdG9zID8gbW9kZWwuemRqZWNpYVswXS5hbHRlcm5hdGl2ZVRleHQgOiAnJ31cclxuICAgICAgICAgICAgICB0aXRsZT17aGFzUGhvdG9zID8gbW9kZWwuemRqZWNpYVswXS5jYXB0aW9uIDogJyd9XHJcbiAgICAgICAgICAgICAgZm9ybWF0cz17aGFzUGhvdG9zID8gbW9kZWwuemRqZWNpYVswXS5mb3JtYXRzIDogJyd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICA8Q3VzdG9tQWN0aW9uc1xyXG4gICAgICAgICAgaGFuZGxlRXhwYW5kQ2xpY2s9e2hhbmRsZUV4cGFuZENsaWNrfVxyXG4gICAgICAgICAgZXhwYW5kZWQ9e2V4cGFuZGVkfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxDdXN0b21Db2xsYXBzZSBleHBhbmRlZD17ZXhwYW5kZWR9PlxyXG4gICAgICAgICAgPEN1c3RvbUNhcmRDb250ZW50IG1vZGVsPXttb2RlbH0gLz5cclxuICAgICAgICA8L0N1c3RvbUNvbGxhcHNlPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgQ3VzdG9tQ29sbGFwc2UgPSAoeyBleHBhbmRlZCwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29sbGFwc2UgaW49e2V4cGFuZGVkfSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XHJcbiAgICAgIHtfLnNpemUoY2hpbGRyZW4pID4gMCAmJiBjaGlsZHJlbn1cclxuICAgIDwvQ29sbGFwc2U+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEN1c3RvbUFjdGlvbnMgPSAoeyBoYW5kbGVFeHBhbmRDbGljaywgZXhwYW5kZWQgfSkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkQWN0aW9ucyBkaXNhYmxlU3BhY2luZyBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICBSb3p3acWEIHNjemVnw7PFgnlcclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmV4cGFuZCwge1xyXG4gICAgICAgICAgW2NsYXNzZXMuZXhwYW5kT3Blbl06IGV4cGFuZGVkLFxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUV4cGFuZENsaWNrfVxyXG4gICAgICAgIGFyaWEtZXhwYW5kZWQ9e2V4cGFuZGVkfVxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJzaG93IG1vcmVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEV4cGFuZE1vcmVJY29uIC8+XHJcbiAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG1heFdpZHRoOiAnYXV0bycsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICB9LFxyXG4gIGxpOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgcGFkZGluZ0xlZnQ6ICcwICFpbXBvcnRhbnQnLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWN0aW9uczoge1xyXG4gICAgbWFyZ2luVG9wOiAnYXV0bydcclxuICB9LFxyXG4gIGV4cGFuZDoge1xyXG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDBkZWcpJyxcclxuICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgndHJhbnNmb3JtJywge1xyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnRlc3QsXHJcbiAgICB9KSxcclxuICB9LFxyXG4gIGV4cGFuZE9wZW46IHtcclxuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgxODBkZWcpJyxcclxuICB9LFxyXG59KSk7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0xpc3RNb2RlbENhcmRzJzsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtdWkvc3R5bGVzJztcclxuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tICdxdWVyeS1zdHJpbmcnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2luYXRpb25Sb3VuZGVkKHsgbGltaXRQZXJQYWdlLCB0b3RhbCwgcGFnZSB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCBbcGFnZU5yLCBzZXRQYWdlTnJdID0gdXNlU3RhdGUocGFnZSk7XHJcblxyXG4gIGNvbnN0IHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodG90YWwgLyBsaW1pdFBlclBhZ2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHVybFBhcnNlID0gcXVlcnlTdHJpbmcucGFyc2VVcmwocm91dGVyLmFzUGF0aCk7XHJcblxyXG4gIGNvbnN0IGdvVG9QYWdlID0gKG5ld1BhZ2UpID0+IHtcclxuICAgIHVybFBhcnNlLnF1ZXJ5LnBhZ2UgPSBuZXdQYWdlO1xyXG4gICAgdXJsUGFyc2UucXVlcnkubGltaXQgPSBsaW1pdFBlclBhZ2U7XHJcbiAgICBzZXRQYWdlTnIobmV3UGFnZSk7XHJcbiAgICBjb25zdCB1cmwgPSBxdWVyeVN0cmluZy5zdHJpbmdpZnlVcmwodXJsUGFyc2UpO1xyXG4gICAgcm91dGVyLnB1c2godXJsKVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgIHNoYXBlPVwicm91bmRlZFwiXHJcbiAgICAgICAgcGFnZT17cGFnZU5yfVxyXG4gICAgICAgIGNvdW50PXt0b3RhbFBhZ2VzfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoXywgZGF0YSkgPT4gZ29Ub1BhZ2UoZGF0YSl9XHJcbiAgICAgICAgc2libGluZ0NvdW50PXsxfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYWdpbmF0aW9ufVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgJyYgPiAqJzoge1xyXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGFnaW5hdGlvbjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXHJcbiAgfVxyXG59KSk7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1BhZ2luYXRpb24nOyIsImltcG9ydCB7IG1ha2VTdHlsZXMsIHdpdGhTdHlsZXMgfSBmcm9tICdAbXVpL3N0eWxlcyc7XHJcbmltcG9ydCB7IEJveCwgVG9vbHRpcCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2l6ZUxpc3QoeyBtb2RlbCB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuc2l6ZUxpc3R9PlxyXG4gICAgICB7XHJcbiAgICAgICAgXy5tYXAobW9kZWwuc2l6ZXMsIHMgPT4gKFxyXG4gICAgICAgICAgPEh0bWxUb29sdGlwXHJcbiAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICA8ZW0+e3Mub3Bpc308L2VtPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGtleT17cy51cmx9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGtleT17cy51cmx9IGNsYXNzTmFtZT17Y2xhc3Nlcy5zaXplfT57cy5yb3ptaWFyfTwvc3Bhbj5cclxuICAgICAgICAgIDwvSHRtbFRvb2x0aXA+XHJcbiAgICAgICAgKSlcclxuICAgICAgfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEh0bWxUb29sdGlwID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgdG9vbHRpcDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2Y1ZjVmOScsXHJcbiAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC44NyknLFxyXG4gICAgbWF4V2lkdGg6IDIyMCxcclxuICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMTIpLFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkYWRkZTknLFxyXG4gIH0sXHJcbn0pKShUb29sdGlwKTtcclxuXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBzaXplOiB7XHJcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmdyZXlbNTAwXX1gLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKVxyXG4gIH0sXHJcbiAgc2l6ZUxpc3Q6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICcmID4gOm5vdCg6bGFzdC1jaGlsZCknOiB7XHJcbiAgICAgIG1hcmdpblJpZ2h0OiAnMXB4J1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU2l6ZUxpc3QnOyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldEdlbmRlcnNBcGkgfSBmcm9tICcuLi9hcGkvZ2VuZGVyJztcclxuaW1wb3J0IHsgZ2V0Q2F0ZWdvcmllc0FwaSB9IGZyb20gJy4uL2FwaS9jYXRlZ29yaWVzJztcclxuaW1wb3J0IHsgbWVudSB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXBwV3JhcHBlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2dlbmRlcnMsIHNldEdlbmRlcnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBzdGF0ZSA9IHsgbWVudSB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKF8uc2l6ZShzdGF0ZS5jYXRlZ29yaWVzKSA9PT0gMCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0Q2F0ZWdvcmllc0FwaSgpO1xyXG4gICAgICAgIHNldENhdGVnb3JpZXMocmVzcG9uc2UgfHwgW10pO1xyXG4gICAgICB9XHJcbiAgICB9KSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChfLnNpemUoc3RhdGUuZ2VuZGVycykgPT09IDApIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEdlbmRlcnNBcGkoKTtcclxuICAgICAgICBzZXRHZW5kZXJzKHJlc3BvbnNlIHx8IFtdKVxyXG4gICAgICB9XHJcbiAgICB9KSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgc3RhdGUuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXM7XHJcbiAgc3RhdGUuZ2VuZGVycyA9IGdlbmRlcnM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwcENvbnRleHQoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbn0iLCJpbXBvcnQgeyBCb3ggfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtdWkvc3R5bGVzJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFzaWNMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYXBwfT5cclxuICAgICAgPEJveCBjb21wb25lbnQ9J2hlYWRlcicgY2xhc3NOYW1lPXtjbGFzc2VzLnRvcEJhcn0+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8L0JveD5cclxuXHJcbiAgICAgIDxCb3ggY29tcG9uZW50PSdtYWluJz5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvQm94PlxyXG5cclxuICAgICAgPEJveCBjb21wb25lbnQ9J2Zvb3RlcicgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGFwcDoge1xyXG4gICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBib3hTaXppbmc6ICdjb250ZW50LWJveCdcclxuICB9LFxyXG4gIHRvcEJhcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s0XVxyXG4gIH0sXHJcbiAgZm9vdGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzRdLFxyXG4gICAgbWFyZ2luVG9wOiAnYXV0bydcclxuICB9LFxyXG4gIG1haW46IHtcclxuICAgIGZsZXg6IDEsXHJcbiAgICBtYXhXaWR0aDogJzEwMCUnXHJcbiAgfSxcclxufSkpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9CYXNpY0xheW91dCc7ICIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gSW1hZ2UxO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfaGVhZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvaGVhZFwiKSk7XG52YXIgX3RvQmFzZTY0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdG8tYmFzZS02NFwiKTtcbnZhciBfaW1hZ2VDb25maWcgPSByZXF1aXJlKFwiLi4vc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbihzeW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0ge1xuICAgIH07XG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHZhciBrZXksIGk7XG4gICAgZm9yKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5jb25zdCBsb2FkZWRJbWFnZVVSTHMgPSBuZXcgU2V0KCk7XG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZTtcbn1cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gW1xuICAgICdsYXp5JyxcbiAgICAnZWFnZXInLFxuICAgIHVuZGVmaW5lZFxuXTtcbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwKFtcbiAgICBbXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgZGVmYXVsdExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnaW1naXgnLFxuICAgICAgICBpbWdpeExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY2xvdWRpbmFyeScsXG4gICAgICAgIGNsb3VkaW5hcnlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2FrYW1haScsXG4gICAgICAgIGFrYW1haUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY3VzdG9tJyxcbiAgICAgICAgY3VzdG9tTG9hZGVyXG4gICAgXSwgXG5dKTtcbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICAgJ2ZpbGwnLFxuICAgICdmaXhlZCcsXG4gICAgJ2ludHJpbnNpYycsXG4gICAgJ3Jlc3BvbnNpdmUnLFxuICAgIHVuZGVmaW5lZCwgXG5dO1xuZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYykge1xuICAgIHJldHVybiBzcmMuZGVmYXVsdCAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5zcmMgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYykge1xuICAgIHJldHVybiB0eXBlb2Ygc3JjID09PSAnb2JqZWN0JyAmJiAoaXNTdGF0aWNSZXF1aXJlKHNyYykgfHwgaXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7XG59XG5jb25zdCB7IGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyAsIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMgLCBsb2FkZXI6IGNvbmZpZ0xvYWRlciAsIHBhdGg6IGNvbmZpZ1BhdGggLCBkb21haW5zOiBjb25maWdEb21haW5zICwgIH0gPSBwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyB8fCBfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0O1xuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFtcbiAgICAuLi5jb25maWdEZXZpY2VTaXplcyxcbiAgICAuLi5jb25maWdJbWFnZVNpemVzXG5dO1xuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuYWxsU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKSB7XG4gICAgaWYgKHNpemVzICYmIChsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykpIHtcbiAgICAgICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICAgICAgY29uc3Qgdmlld3BvcnRXaWR0aFJlID0gLyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFtdO1xuICAgICAgICBmb3IobGV0IG1hdGNoOyBtYXRjaCA9IHZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTsgbWF0Y2gpe1xuICAgICAgICAgICAgcGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcigocyk9PnMgPj0gY29uZmlnRGV2aWNlU2l6ZXNbMF0gKiBzbWFsbGVzdFJhdGlvXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHwgbGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgd2lkdGhzID0gW1xuICAgICAgICAuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgICBbXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi8gXG4gICAgICAgIF0ubWFwKCh3KT0+YWxsU2l6ZXMuZmluZCgocCk9PnAgPj0gd1xuICAgICAgICAgICAgKSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgICApKSwgXG4gICAgXTtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHMsXG4gICAgICAgIGtpbmQ6ICd4J1xuICAgIH07XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHsgc3JjICwgdW5vcHRpbWl6ZWQgLCBsYXlvdXQgLCB3aWR0aCAsIHF1YWxpdHkgLCBzaXplcyAsIGxvYWRlciAgfSkge1xuICAgIGlmICh1bm9wdGltaXplZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHsgd2lkdGhzICwga2luZCAgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcyk7XG4gICAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgICAgICBzcmNTZXQ6IHdpZHRocy5tYXAoKHcsIGkpPT5gJHtsb2FkZXIoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3XG4gICAgICAgICAgICB9KX0gJHtraW5kID09PSAndycgPyB3IDogaSArIDF9JHtraW5kfWBcbiAgICAgICAgKS5qb2luKCcsICcpLFxuICAgICAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgICAgICAvLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAgICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAgICAgLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4gICAgICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgICAgICBzcmM6IGxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoc1tsYXN0XVxuICAgICAgICB9KVxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRJbnQoeCkge1xuICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcykge1xuICAgIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpO1xuICAgIGlmIChsb2FkKSB7XG4gICAgICAgIHJldHVybiBsb2FkKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgcm9vdDogY29uZmlnUGF0aFxuICAgICAgICB9LCBsb2FkZXJQcm9wcykpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7XG59XG4vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gaGFuZGxlTG9hZGluZyhpbWcsIHNyYywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICBpZiAoIWltZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUxvYWQgPSAoKT0+e1xuICAgICAgICBpZiAoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICAgICAgY29uc3QgcCA9ICdkZWNvZGUnIGluIGltZyA/IGltZy5kZWNvZGUoKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgcC5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgfSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5maWx0ZXIgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9hZGVkSW1hZ2VVUkxzLmFkZChzcmMpO1xuICAgICAgICAgICAgICAgIGlmIChvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG5hdHVyYWxXaWR0aCAsIG5hdHVyYWxIZWlnaHQgIH0gPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhc3MgYmFjayByZWFkLW9ubHkgcHJpbWl0aXZlIHZhbHVlcyBidXQgbm90IHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyB1bmRlcmx5aW5nIERPTSBlbGVtZW50IGJlY2F1c2UgaXQgY291bGQgYmUgbWlzdXNlZC5cbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkaW5nQ29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbEhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChyZWYgPSBpbWcucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZ2V0Q29tcHV0ZWRTdHlsZShpbWcucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJyAmJiBwYXJlbnQuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IGFzIGEgY2hpbGQgb2YgYSBmbGV4IGNvbnRhaW5lci4gQ29uc2lkZXIgd3JhcHBpbmcgdGhlIGltYWdlIHdpdGggYSBkaXYgdG8gY29uZmlndXJlIHRoZSB3aWR0aC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgcGFyZW50LnBvc2l0aW9uICE9PSAncmVsYXRpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IHdpdGggYSBwYXJlbnQgdXNpbmcgcG9zaXRpb246XCIke3BhcmVudC5wb3NpdGlvbn1cIi4gQ29uc2lkZXIgY2hhbmdpbmcgdGhlIHBhcmVudCBzdHlsZSB0byBwb3NpdGlvbjpcInJlbGF0aXZlXCIgd2l0aCBhIHdpZHRoIGFuZCBoZWlnaHQuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKGltZy5jb21wbGV0ZSkge1xuICAgICAgICAvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuICAgICAgICAvLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuICAgICAgICBoYW5kbGVMb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGhhbmRsZUxvYWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gSW1hZ2UxKF9wYXJhbSkge1xuICAgIHZhciB7IHNyYyAsIHNpemVzICwgdW5vcHRpbWl6ZWQgPWZhbHNlICwgcHJpb3JpdHkgPWZhbHNlICwgbG9hZGluZyAsIGxhenlCb3VuZGFyeSA9JzIwMHB4JyAsIGNsYXNzTmFtZSAsIHF1YWxpdHkgLCB3aWR0aCAsIGhlaWdodCAsIG9iamVjdEZpdCAsIG9iamVjdFBvc2l0aW9uICwgb25Mb2FkaW5nQ29tcGxldGUgLCBsb2FkZXIgPWRlZmF1bHRJbWFnZUxvYWRlciAsIHBsYWNlaG9sZGVyID0nZW1wdHknICwgYmx1ckRhdGFVUkwgIH0gPSBfcGFyYW0sIGFsbCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcGFyYW0sIFtcInNyY1wiLCBcInNpemVzXCIsIFwidW5vcHRpbWl6ZWRcIiwgXCJwcmlvcml0eVwiLCBcImxvYWRpbmdcIiwgXCJsYXp5Qm91bmRhcnlcIiwgXCJjbGFzc05hbWVcIiwgXCJxdWFsaXR5XCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJvYmplY3RGaXRcIiwgXCJvYmplY3RQb3NpdGlvblwiLCBcIm9uTG9hZGluZ0NvbXBsZXRlXCIsIFwibG9hZGVyXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJibHVyRGF0YVVSTFwiXSk7XG4gICAgbGV0IHJlc3QgPSBhbGw7XG4gICAgbGV0IGxheW91dCA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYyc7XG4gICAgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICAgICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dDtcbiAgICAgICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgICAgICBkZWxldGUgcmVzdFsnbGF5b3V0J107XG4gICAgfVxuICAgIGxldCBzdGF0aWNTcmMgPSAnJztcbiAgICBpZiAoaXNTdGF0aWNJbXBvcnQoc3JjKSkge1xuICAgICAgICBjb25zdCBzdGF0aWNJbWFnZURhdGEgPSBpc1N0YXRpY1JlcXVpcmUoc3JjKSA/IHNyYy5kZWZhdWx0IDogc3JjO1xuICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5zcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBibHVyRGF0YVVSTCA9IGJsdXJEYXRhVVJMIHx8IHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtcbiAgICAgICAgc3RhdGljU3JjID0gc3RhdGljSW1hZ2VEYXRhLnNyYztcbiAgICAgICAgaWYgKCFsYXlvdXQgfHwgbGF5b3V0ICE9PSAnZmlsbCcpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCBzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggPSB3aWR0aCB8fCBzdGF0aWNJbWFnZURhdGEud2lkdGg7XG4gICAgICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHQgfHwgIXN0YXRpY0ltYWdlRGF0YS53aWR0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3JjID0gdHlwZW9mIHNyYyA9PT0gJ3N0cmluZycgPyBzcmMgOiBzdGF0aWNTcmM7XG4gICAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpO1xuICAgIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpO1xuICAgIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSk7XG4gICAgbGV0IGlzTGF6eSA9ICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJyk7XG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCdkYXRhOicpIHx8IHNyYy5zdGFydHNXaXRoKCdibG9iOicpKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgICAgIHVub3B0aW1pemVkID0gdHJ1ZTtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBsb2FkZWRJbWFnZVVSTHMuaGFzKHNyYykpIHtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKHdpZHRoSW50KSB8fCB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTihoZWlnaHRJbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIgcHJvcGVydHkuIFRoZXNlIHNob3VsZCBiZSBudW1lcmljIHZhbHVlcy5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgKHdpZHRoIHx8IGhlaWdodCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBhbmQgXCJsYXlvdXQ9J2ZpbGwnXCIgaGFzIHVudXNlZCBwcm9wZXJ0aWVzIGFzc2lnbmVkLiBQbGVhc2UgcmVtb3ZlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIi5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgaWYgKGxheW91dCAhPT0gJ2ZpbGwnICYmICh3aWR0aEludCB8fCAwKSAqIChoZWlnaHRJbnQgfHwgMCkgPCAxNjAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYmx1ckRhdGFVUkwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBWQUxJRF9CTFVSX0VYVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgJ2pwZWcnLFxuICAgICAgICAgICAgICAgICAgICAncG5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ3dlYnAnXG4gICAgICAgICAgICAgICAgXSAvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdyZWYnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInJlZlwiIHByb3BlcnR5LiBDb25zaWRlciB1c2luZyB0aGUgXCJvbkxvYWRpbmdDb21wbGV0ZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdzdHlsZScgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwic3R5bGVcIiBwcm9wZXJ0eS4gUGxlYXNlIHVzZSB0aGUgXCJjbGFzc05hbWVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIDEwMDtcbiAgICAgICAgaWYgKCF1bm9wdGltaXplZCAmJiAhbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHdpZHRoOiByYW5kLFxuICAgICAgICAgICAgcXVhbGl0eTogNzVcbiAgICAgICAgfSkuaW5jbHVkZXMocmFuZC50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBhIFwibG9hZGVyXCIgcHJvcGVydHkgdGhhdCBkb2VzIG5vdCBpbXBsZW1lbnQgd2lkdGguIFBsZWFzZSBpbXBsZW1lbnQgaXQgb3IgdXNlIHRoZSBcInVub3B0aW1pemVkXCIgcHJvcGVydHkgaW5zdGVhZC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlci13aWR0aGApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46IGxhenlCb3VuZGFyeSxcbiAgICAgICAgZGlzYWJsZWQ6ICFpc0xhenlcbiAgICB9KTtcbiAgICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWQ7XG4gICAgbGV0IHdyYXBwZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdmc7XG4gICAgbGV0IGltZ1N0eWxlID0ge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG9iamVjdEZpdCxcbiAgICAgICAgb2JqZWN0UG9zaXRpb25cbiAgICB9O1xuICAgIGNvbnN0IGJsdXJTdHlsZSA9IHBsYWNlaG9sZGVyID09PSAnYmx1cicgPyB7XG4gICAgICAgIGZpbHRlcjogJ2JsdXIoMjBweCknLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogb2JqZWN0Rml0IHx8ICdjb3ZlcicsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYCxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBvYmplY3RQb3NpdGlvbiB8fCAnMCUgMCUnXG4gICAgfSA6IHtcbiAgICB9O1xuICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgICAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50O1xuICAgICAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWA7XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodEludFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGltZ0F0dHJpYnV0ZXMgPSB7XG4gICAgICAgIHNyYzogJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgfTtcbiAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgICAgIHNpemVzLFxuICAgICAgICAgICAgbG9hZGVyXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3JjU3RyaW5nID0gc3JjO1xuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogd3JhcHBlclN0eWxlXG4gICAgfSwgc2l6ZXJTdHlsZSA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiBzaXplclN0eWxlXG4gICAgfSwgc2l6ZXJTdmcgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgIHBhZGRpbmc6IDBcbiAgICAgICAgfSxcbiAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgICAgIHNyYzogYGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCwgX3RvQmFzZTY0KS50b0Jhc2U2NChzaXplclN2Zyl9YFxuICAgIH0pIDogbnVsbCkgOiBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgaW1nQXR0cmlidXRlcywge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiBsYXlvdXQsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICByZWY6IChpbWcpPT57XG4gICAgICAgICAgICBzZXRSZWYoaW1nKTtcbiAgICAgICAgICAgIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmNTdHJpbmcsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICB9LCBpbWdTdHlsZSwgYmx1clN0eWxlKVxuICAgIH0pKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICBzcmMsXG4gICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICBsYXlvdXQsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgc2l6ZXMsXG4gICAgICAgIGxvYWRlclxuICAgIH0pLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgc3R5bGU6IGltZ1N0eWxlLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgbG9hZGluZzogbG9hZGluZyB8fCAnbGF6eSdcbiAgICB9KSkpLCBwcmlvcml0eSA/IC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgLy9cbiAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgIGtleTogJ19fbmltZy0nICsgaW1nQXR0cmlidXRlcy5zcmMgKyBpbWdBdHRyaWJ1dGVzLnNyY1NldCArIGltZ0F0dHJpYnV0ZXMuc2l6ZXMsXG4gICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICAgIGFzOiBcImltYWdlXCIsXG4gICAgICAgIGhyZWY6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmMsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNyY3NldDogaW1nQXR0cmlidXRlcy5zcmNTZXQsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc2l6ZXM6IGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICB9KSkgOiBudWxsKSk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKSB7XG4gICAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjO1xufVxuZnVuY3Rpb24gaW1naXhMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9hdXRvPWZvcm1hdCZmaXQ9bWF4Jnc9MzAwXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9YCk7XG4gICAgY29uc3QgcGFyYW1zID0gdXJsLnNlYXJjaFBhcmFtcztcbiAgICBwYXJhbXMuc2V0KCdhdXRvJywgcGFyYW1zLmdldCgnYXV0bycpIHx8ICdmb3JtYXQnKTtcbiAgICBwYXJhbXMuc2V0KCdmaXQnLCBwYXJhbXMuZ2V0KCdmaXQnKSB8fCAnbWF4Jyk7XG4gICAgcGFyYW1zLnNldCgndycsIHBhcmFtcy5nZXQoJ3cnKSB8fCB3aWR0aC50b1N0cmluZygpKTtcbiAgICBpZiAocXVhbGl0eSkge1xuICAgICAgICBwYXJhbXMuc2V0KCdxJywgcXVhbGl0eS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybC5ocmVmO1xufVxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICB9KSB7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7XG59XG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gICAgY29uc3QgcGFyYW1zID0gW1xuICAgICAgICAnZl9hdXRvJyxcbiAgICAgICAgJ2NfbGltaXQnLFxuICAgICAgICAnd18nICsgd2lkdGgsXG4gICAgICAgICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXG4gICAgXTtcbiAgICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJztcbiAgICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7XG59XG5mdW5jdGlvbiBjdXN0b21Mb2FkZXIoeyBzcmMgIH0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgbWlzc2luZyBcImxvYWRlclwiIHByb3AuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXJgKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdO1xuICAgICAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICAgICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7XG4gICAgICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtcbiAgICAgICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgICAgICAgIGxldCBwYXJzZWRTcmM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmICFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgKyBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIik7XG52YXIgX3JvdXRlcjEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBwcmVmZXRjaGVkID0ge1xufTtcbmZ1bmN0aW9uIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuO1xuICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycik9PntcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0ICB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJyB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyO1xufVxuZnVuY3Rpb24gbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpIHtcbiAgICBjb25zdCB7IG5vZGVOYW1lICB9ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsICYmIGFzLmluZGV4T2YoJyMnKSA+PSAwKSB7XG4gICAgICAgIHNjcm9sbCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgICAgc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBzY3JvbGxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgaHJlZjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzID0gT2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtcbiAgICAgICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgYXM6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICAgICAgICBsb2NhbGU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wcyA9IE9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7XG4gICAgICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyZXBsYWNlJyB8fCBrZXkgPT09ICdzY3JvbGwnIHx8IGtleSA9PT0gJ3NoYWxsb3cnIHx8IGtleSA9PT0gJ3Bhc3NIcmVmJyB8fCBrZXkgPT09ICdwcmVmZXRjaCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBoYXNXYXJuZWQgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO1xuICAgICAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZTtcbiAgICBjb25zdCByb3V0ZXIgPSAoMCwgX3JvdXRlcjEpLnVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaHJlZiAsIGFzICB9ID0gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xuICAgICAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgYXM6IHByb3BzLmFzID8gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgcHJvcHMuaHJlZixcbiAgICAgICAgcHJvcHMuYXNcbiAgICBdKTtcbiAgICBsZXQgeyBjaGlsZHJlbiAsIHJlcGxhY2UgLCBzaGFsbG93ICwgc2Nyb2xsICwgbG9jYWxlICB9ID0gcHJvcHM7XG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIG51bGwsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgbGV0IGNoaWxkO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCIgXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZFJlZiA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmO1xuICAgIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogJzIwMHB4J1xuICAgIH0pO1xuICAgIGNvbnN0IHNldFJlZiA9IF9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtcbiAgICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBjaGlsZFJlZixcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmXG4gICAgXSk7XG4gICAgX3JlYWN0LmRlZmF1bHQudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZik7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV07XG4gICAgICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBhcyxcbiAgICAgICAgaHJlZixcbiAgICAgICAgaXNWaXNpYmxlLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHAsXG4gICAgICAgIHJvdXRlclxuICAgIF0pO1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgICAgIHJlZjogc2V0UmVmLFxuICAgICAgICBvbkNsaWNrOiAoZSk9PntcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZSk9PntcbiAgICAgICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgIHByaW9yaXR5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpIHtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAgICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICAgICAgY29uc3QgbG9jYWxlRG9tYWluID0gcm91dGVyICYmIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJiAoMCwgX3JvdXRlcikuZ2V0RG9tYWluTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcywgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzKTtcbiAgICAgICAgY2hpbGRQcm9wcy5ocmVmID0gbG9jYWxlRG9tYWluIHx8ICgwLCBfcm91dGVyKS5hZGRCYXNlUGF0aCgoMCwgX3JvdXRlcikuYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpO1xuICAgIH1cbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpKTtcbn1cbnZhciBfZGVmYXVsdCA9IExpbms7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG5mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCA/IChwYXRoKT0+e1xuICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLyc7XG4gICAgfVxufSA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tYXJrQXNzZXRFcnJvciA9IG1hcmtBc3NldEVycm9yO1xuZXhwb3J0cy5pc0Fzc2V0RXJyb3IgPSBpc0Fzc2V0RXJyb3I7XG5leHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3QgPSBnZXRDbGllbnRCdWlsZE1hbmlmZXN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZUxvYWRlciA9IGNyZWF0ZVJvdXRlTG9hZGVyO1xudmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDA7XG5mdW5jdGlvbiB3aXRoRnV0dXJlKGtleSwgbWFwLCBnZW5lcmF0b3IpIHtcbiAgICBsZXQgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTtcbiAgICB9XG4gICAgbGV0IHJlc29sdmVyO1xuICAgIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgcmVzb2x2ZXIgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIG1hcC5zZXQoa2V5LCBlbnRyeSA9IHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZXIsXG4gICAgICAgIGZ1dHVyZTogcHJvbVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3IgPyBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSk9PihyZXNvbHZlcih2YWx1ZSksIHZhbHVlKVxuICAgICkgOiBwcm9tO1xufVxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaykge1xuICAgIHRyeSB7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIHJldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB8fCBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmNvbnN0IGNhblByZWZldGNoID0gaGFzUHJlZmV0Y2goKTtcbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsIGFzLCBsaW5rKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaik9PntcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgICAgICBpZiAoYXMpIGxpbmsuYXMgPSBhcztcbiAgICAgICAgbGluay5yZWwgPSBgcHJlZmV0Y2hgO1xuICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgbGluay5vbmxvYWQgPSByZXM7XG4gICAgICAgIGxpbmsub25lcnJvciA9IHJlajtcbiAgICAgICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9KTtcbn1cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTtcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVycjtcbn1cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsIHNjcmlwdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAgICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgICAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuICAgICAgICA7XG4gICAgICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgICAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAgICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTtcbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsIG1zLCBlcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBwLnRoZW4oKHIpPT57XG4gICAgICAgICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgLy8gV2Ugd3JhcCB0aGVzZSBjaGVja3Mgc2VwYXJhdGVseSBmb3IgYmV0dGVyIGRlYWQtY29kZSBlbGltaW5hdGlvbiBpblxuICAgICAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpIHtcbiAgICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICB9XG4gICAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7XG4gICAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpPT57XG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTtcbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgc2NyaXB0czogW1xuICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICsgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArIGVuY29kZVVSSSgoMCwgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSkuZGVmYXVsdChyb3V0ZSwgJy5qcycpKSwgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgICAgICAgY3NzOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCk9PntcbiAgICAgICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcCgoZW50cnkpPT5hc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5qcycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KSB7XG4gICAgY29uc3QgZW50cnlwb2ludHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCByb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYykge1xuICAgICAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCBwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpIHtcbiAgICAgICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZik7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZVNoZWV0cy5zZXQoaHJlZiwgcHJvbSA9IGZldGNoKGhyZWYpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2hlbkVudHJ5cG9pbnQgKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVudHJ5cG9pbnQgKHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbigoZm4pPT5mbigpXG4gICAgICAgICAgICApLnRoZW4oKGV4cG9ydHMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHMsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLCAoZXJyKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRoZW4oKGlucHV0KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFJvdXRlIChyb3V0ZSwgcHJlZmV0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCByb3V0ZXMsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVGaWxlc1Byb21pc2UgPSBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigoeyBzY3JpcHRzICwgY3NzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKSA/IFtdIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLCBcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCk9Pih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV2QnVpbGRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVGaWxlc1Byb21pc2UuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChyb3V0ZUZpbGVzUHJvbWlzZSwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoeyBlbnRyeXBvaW50ICwgc3R5bGVzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5cG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlcztcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmV0Y2ggKHJvdXRlKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAgICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICAgICAgICBsZXQgY247XG4gICAgICAgICAgICBpZiAoY24gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigob3V0cHV0KT0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2ggPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCk9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpXG4gICAgICAgICAgICAgICAgKSA6IFtdKVxuICAgICAgICAgICAgKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3dpdGhSb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbmV4cG9ydHMudXNlUm91dGVyID0gdXNlUm91dGVyO1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XG5leHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSA9IG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKSk7XG52YXIgX3JvdXRlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dFwiKTtcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xuICAgIHJvdXRlcjogbnVsbCxcbiAgICByZWFkeUNhbGxiYWNrczogW10sXG4gICAgcmVhZHkgKGNiKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgICAncGF0aG5hbWUnLFxuICAgICdyb3V0ZScsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnYXNQYXRoJyxcbiAgICAnY29tcG9uZW50cycsXG4gICAgJ2lzRmFsbGJhY2snLFxuICAgICdiYXNlUGF0aCcsXG4gICAgJ2xvY2FsZScsXG4gICAgJ2xvY2FsZXMnLFxuICAgICdkZWZhdWx0TG9jYWxlJyxcbiAgICAnaXNSZWFkeScsXG4gICAgJ2lzUHJldmlldycsXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcbiAgICAnZG9tYWluTG9jYWxlcycsIFxuXTtcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxuXTtcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICAgJ3B1c2gnLFxuICAgICdyZXBsYWNlJyxcbiAgICAncmVsb2FkJyxcbiAgICAnYmFjaycsXG4gICAgJ3ByZWZldGNoJyxcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcbl07XG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICAgIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIH1cbn0pO1xudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAgIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICB9O1xufSk7XG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICsgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxudmFyIF9kZWZhdWx0ID0gc2luZ2xldG9uUm91dGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJncykge1xuICAgIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgX3JvdXRlci5kZWZhdWx0KC4uLmFyZ3MpO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYik9PmNiKClcbiAgICApO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdO1xuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxuZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcikge1xuICAgIGNvbnN0IF9yb3V0ZXIxID0gcm91dGVyO1xuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7XG4gICAgICAgIGlmICh0eXBlb2YgX3JvdXRlcjFbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXIxW3Byb3BlcnR5XSkgPyBbXSA6IHtcbiAgICAgICAgICAgIH0sIF9yb3V0ZXIxW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXIxW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICAgIGluc3RhbmNlLmV2ZW50cyA9IF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAgICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICByZXR1cm4gX3JvdXRlcjFbZmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoUm91dGVyO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcbiAgICAgICAgfSwgcHJvcHMpKSk7XG4gICAgfVxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICBXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG4gICAgICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xuICAgIH1cbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREb21haW5Mb2NhbGUgPSBnZXREb21haW5Mb2NhbGU7XG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xuZXhwb3J0cy5oYXNCYXNlUGF0aCA9IGhhc0Jhc2VQYXRoO1xuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZXhwb3J0cy5pc0xvY2FsVVJMID0gaXNMb2NhbFVSTDtcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcbnZhciBfZGVub3JtYWxpemVQYWdlUGF0aCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO1xudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xudmFyIF9xdWVyeXN0cmluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO1xudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xudmFyIF9yb3V0ZVJlZ2V4ID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO1xuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xufVxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XG59XG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGggfHwgJyd9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiYgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlciA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8IHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgKyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xufVxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gICAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpO1xufVxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpIHx8IHVybC5zdGFydHNXaXRoKCc/JykpIHJldHVybiB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgICAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XG4gICAgY29uc3QgZHluYW1pY1JlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHwgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5O1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xuICAgICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJyc7XG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPSBpbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLCByZXBlYXQgPyB2YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XG4gICAgfSkpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuICAgICAgICA7XG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcbiAgICB9O1xufVxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFF1ZXJ5ID0ge1xuICAgIH07XG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLCBocmVmLCByZXNvbHZlQXMpIHtcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICAgIGxldCBiYXNlO1xuICAgIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKTtcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gICAgY29uc3QgdXJsUHJvdG9NYXRjaCA9IHVybEFzU3RyaW5nLm1hdGNoKC9eW2EtekEtWl17MSx9OlxcL1xcLy8pO1xuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcbiAgICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xuICAgICAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmw7XG4gICAgfVxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBiYXNlID0gbmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJykgPyByb3V0ZXIuYXNQYXRoIDogcm91dGVyLnBhdGhuYW1lLCAnaHR0cDovL24nKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSk7XG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJiBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiYgcmVzb2x2ZUFzKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW4gPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpIDogZmluYWxVcmwuaHJlZjtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG59XG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsIHVybCwgYXMpIHtcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKTtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7XG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpPT57XG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xufVxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPSBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiYgISFmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICB9XG59KCk7XG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgICAgICAgdGhpcy5zZHIgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWR4ID0gaWR4O1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzMSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkxO1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9ICgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZTEpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XG4gICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqLyBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGFzeW5jIGNoYW5nZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMsIGZvcmNlZFNjcm9sbCkge1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XG4gICAgICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgICAgICAgICBpZiAoIWRpZE5hdmlnYXRlICYmIGRldGVjdGVkRG9tYWluICYmIHRoaXMuaXNMb2NhbGVEb21haW4gJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3Qgcm91dGVQcm9wcyA9IHtcbiAgICAgICAgICAgIHNoYWxsb3dcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSk7XG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XG4gICAgICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZTtcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbCk7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XG4gICAgICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgICAgIGxldCBwYWdlcywgcmV3cml0ZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XG4gICAgICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgICAgICBwYXRobmFtZTEgPSBwYXRobmFtZTEgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lMSkpIDogcGF0aG5hbWUxO1xuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aDtcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTEsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpO1xuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGUgPyBgSW50ZXJwb2xhdGluZyBocmVmYCA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgKyBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeTEsIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XG4gICAgICAgICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsICwgYXM6IG5ld0FzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsb3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gKF9zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCkgIT09IG51bGwgJiYgX3Njcm9sbCAhPT0gdm9pZCAwID8gX3Njcm9sbCA6ICFpc1ZhbGlkU2hhbGxvd1JvdXRlO1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZTtcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgaWYgKGVycjEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCAoMCwgX3V0aWxzKS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcbiAgICAgICAgICAgIGxldCBzdHlsZVNoZWV0cztcbiAgICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICh7IHBhZ2U6IENvbXBvbmVudDEgLCBzdHlsZVNoZWV0cyAgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mbyA/IHVuZGVmaW5lZCA6IGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFIcmVmO1xuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycjIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGg7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gdGhpcy5jbGMgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcDEpO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcywgcm91dGVQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG59XG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtdWkvc3R5bGVzJztcclxuaW1wb3J0IHsgQm94LCBDaXJjdWxhclByb2dyZXNzLCBDb250YWluZXIsIFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCAqIGFzIHFzIGZyb20gJ3FzJztcclxuXHJcbmltcG9ydCBCYXNpY0xheW91dCBmcm9tICcuLi8uLi9sYXlvdXRzL0Jhc2ljTGF5b3V0JztcclxuaW1wb3J0IExpc3RNb2RlbENhcmRzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGlzdE1vZGVsc0NhcmRzJztcclxuaW1wb3J0IEJyZWFkQ3J1bWJzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQnJlYWRDcnVtYnMnO1xyXG5pbXBvcnQgRmxvYXRpbmdNZW51IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRmxvYXRpbmdNZW51JztcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcclxuaW1wb3J0IHsgZ2V0TW9kZWxCeUN1c3RvbVByb3BzLCBnZXRNb2RlbEJ5Q3VzdG9tUHJvcHNDb3VudCB9IGZyb20gJy4uLy4uL2FwaS9tb2RlbCc7XHJcbmltcG9ydCB7IGxpbWl0UGVyUGFnZSwgZ2V0U3RhcnRJdGVtIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmV0Y2gnO1xyXG5pbXBvcnQgRW1wdHlCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9FbXB0eUJhcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RlbCgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IFttb2RlbHMsIHNldE1vZGVsc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkZXIodHJ1ZSk7XHJcbiAgICAgIGNvbnN0IGJ1aWxkUXVlcnkgPSB7XHJcbiAgICAgICAgX2xpbWl0OiBsaW1pdFBlclBhZ2UocXVlcnkpLFxyXG4gICAgICAgIF9zdGFydDogZ2V0U3RhcnRJdGVtKHF1ZXJ5KSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0TW9kZWxCeUN1c3RvbVByb3BzKFxyXG4gICAgICAgIHFzLnN0cmluZ2lmeSh7IC4uLmJ1aWxkUXVlcnksIF93aGVyZTogeyBbYCR7cXVlcnkucSB8fCAnY2F0ZWdvcmllcyd9LnVybGBdOiBxdWVyeS5rcnl0ZXJpYSB9IH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZUNvdW50ID0gYXdhaXQgZ2V0TW9kZWxCeUN1c3RvbVByb3BzQ291bnQoXHJcbiAgICAgICAgcXMuc3RyaW5naWZ5KHsgX3doZXJlOiB7IFtgJHtxdWVyeS5xIHx8ICdjYXRlZ29yaWVzJ30udXJsYF06IHF1ZXJ5LmtyeXRlcmlhIH0gfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHNldE1vZGVscyhyZXNwb25zZSk7XHJcbiAgICAgIHNldENvdW50KHJlc3BvbnNlQ291bnQpO1xyXG5cclxuICAgICAgc2V0TG9hZGVyKGZhbHNlKTtcclxuICAgIH0pKCk7XHJcbiAgfSwgW3F1ZXJ5XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QmFzaWNMYXlvdXQ+XHJcbiAgICAgIDxGbG9hdGluZ01lbnUgLz5cclxuICAgICAgPEJyZWFkQ3J1bWJzIC8+XHJcbiAgICAgIDxCb3ggY29tcG9uZW50PSdzZWN0aW9uJyBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0gaWQ9J3d5c3p1a2FqLWthdGVnb3JpYSc+XHJcbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD0neGwnIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g0JyBjb21wb25lbnQ9J2gzJyBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbkhlYWRlcn0+XHJcbiAgICAgICAgICAgIFdpxJljZWogeiBrYXRlZ29yaWkuLi5cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1JyBjb21wb25lbnQ9J2g0JyBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvblN1YkhlYWRlcn0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBfLnNpemUocXVlcnkua3J5dGVyaWEpID4gMCAmJiBxdWVyeS5rcnl0ZXJpYVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvQm94PlxyXG5cclxuICAgICAge2xvYWRlciA/IChcclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGFjZUZpbGxlcn0+PENpcmN1bGFyUHJvZ3Jlc3MgLz48L0JveD5cclxuICAgICAgKSA6IChcclxuXHJcbiAgICAgICAgPEJveCBjb21wb25lbnQ9J3NlY3Rpb24nIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9J3hsJyBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPExpc3RNb2RlbENhcmRzIG1vZGVscz17bW9kZWxzfSAvPlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICl9XHJcblxyXG5cclxuICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICBwYWdlPXtxdWVyeS5wYWdlID8gcGFyc2VJbnQocXVlcnkucGFnZSkgOiAxfVxyXG4gICAgICAgIHRvdGFsPXtjb3VudH1cclxuICAgICAgICBsaW1pdFBlclBhZ2U9e2xpbWl0UGVyUGFnZShxdWVyeSl9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8RW1wdHlCYXIgLz5cclxuICAgIDwvQmFzaWNMYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgc2VjdGlvbjoge1xyXG4gICAgLi4udGhlbWUuc2VjdGlvbnMuc2VjdGlvbixcclxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XHJcbiAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoNSksXHJcbiAgICB9XHJcbiAgfSxcclxuICBzZWN0aW9uU3ViSGVhZGVyOiB7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5ncmV5WzUwMF1cclxuICB9LFxyXG4gIHNwYWNlRmlsbGVyOiB7XHJcbiAgICBtaW5IZWlnaHQ6ICc1MHZoJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXHJcbiAgfVxyXG59KSk7XHJcbiIsImV4cG9ydCBjb25zdCBCQVNFX1BBVEggPSAnaHR0cDovL2Rldi1hcGktc3Ryb2plLmFnZW5jamEtaW1wdWxzLmF0dGhvc3QyNC5wbCc7XHJcbmV4cG9ydCBjb25zdCBUT0tFTiA9ICdhY2Nlc3NUb2tlbic7XHJcblxyXG5leHBvcnQgY29uc3QgbWVudSA9IFt7XHJcbiAgXCJpdGVtXCI6IFwiU3Ryb25hIGfFgsOzd25hXCIsIFwidXJsXCI6IFwiXCIsIFwib3Bpc1wiOiBcIlN0cm9uYSBnxYLDs3duYVwiXHJcbn0sIHtcclxuICBcIml0ZW1cIjogXCJXeXN6dWthalwiLCBcInVybFwiOiBcInd5c3p1a2FqXCIsIFwib3Bpc1wiOiBcIld5c3p1a2l3YXJrYSBzdHJvasOzd1wiLFxyXG59LCB7XHJcbiAgXCJpdGVtXCI6IFwiS29udGFrdFwiLCBcInVybFwiOiBcImtvbnRha3RcIiwgXCJvcGlzXCI6IFwiU3Ryb25hIGtvbnRha3Rvd2FcIixcclxufVxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdFByaXplID0gMjU7XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0RGlzcGxheUNhcnRzID0gMTg7IiwiaW1wb3J0IHsgZ2V0VG9rZW4sIGhhc0V4cGlyZWRUb2tlbiB9IGZyb20gJy4uL2FwaS90b2tlbic7XHJcbmltcG9ydCB7IGRlZmF1bHREaXNwbGF5Q2FydHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0aEZldGNoKHVybCwgcGFyYW1zLCBsb2dvdXQpIHtcclxuICBjb25zdCB0b2tlbiA9IGdldFRva2VuKCk7XHJcblxyXG4gIGlmICghdG9rZW4pIHtcclxuICAgIC8vIHVzdWFyaW8gbm8gbG9nZWFkb3JcclxuICAgIGxvZ291dCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoaGFzRXhwaXJlZFRva2VuKHRva2VuKSkge1xyXG4gICAgICAvLyBUb2tlbiBjYWR1Y2Fkb1xyXG4gICAgICBsb2dvdXQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHBhcmFtc1RlbXAgPSB7XHJcbiAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIC4uLnBhcmFtcz8uaGVhZGVycyxcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgcGFyYW1zVGVtcCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbGltaXRQZXJQYWdlID0gKHF1ZXJ5KSA9PiB7XHJcbiAgY29uc3QgY3VycmVudExpbWl0ID0gcGFyc2VJbnQocXVlcnkubGltaXQpIHx8IDY7XHJcbiAgaWYgKCFxdWVyeS5saW1pdCB8fCBNYXRoLmFicyhjdXJyZW50TGltaXQpID4gMzYpIHJldHVybiBkZWZhdWx0RGlzcGxheUNhcnRzO1xyXG4gIGVsc2UgcmV0dXJuIGN1cnJlbnRMaW1pdDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGFydEl0ZW0gPSAocXVlcnkpID0+IHtcclxuICBjb25zdCBjdXJyZW50UGFnZSA9IHBhcnNlSW50KHF1ZXJ5LnBhZ2UpIHx8IDA7XHJcbiAgY29uc3QgbGltaXQgPSBsaW1pdFBlclBhZ2UocXVlcnkpO1xyXG4gIGlmICghcXVlcnkucGFnZSB8fCBjdXJyZW50UGFnZSA9PT0gMSkgcmV0dXJuIDA7XHJcbiAgZWxzZSByZXR1cm4gY3VycmVudFBhZ2UgKiBsaW1pdCAtIGxpbWl0O1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBSRUFDVF9GUkFHTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01vdmVUb0luYm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9QbGF5bGlzdEFkZENoZWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0F2YXRhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0NhcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9DYXJkQWN0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0NhcmRIZWFkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9Db2xsYXBzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0RpdmlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvTGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1JY29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1UZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvU3dpcGVhYmxlRHJhd2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsc3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiand0LWRlY29kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWF0ZXJpYWwtdWktaW1hZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHRqcy1icmVhZGNydW1ic1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJxc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJxdWVyeS1zdHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJCQVNFX1BBVEgiLCJnZXRDYXRlZ29yaWVzQXBpIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsInJlc3VsdCIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJnZXRHZW5kZXJzQXBpIiwiZ2V0TW9kZWxzQXBpIiwibGltaXQiLCJzb3J0IiwicGFnZSIsImxpbWl0SXRlbXMiLCJzb3J0SXRlbXMiLCJzdGFydEl0ZW1zIiwiZ2V0TW9kZWxCeUN1c3RvbVByb3BzIiwicXVlcnkiLCJnZXRNb2RlbEJ5Q3VzdG9tUHJvcHNDb3VudCIsIlRPS0VOIiwiand0RGVjb2RlIiwic2V0VG9rZW4iLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRUb2tlbiIsImdldEl0ZW0iLCJyZW1vdmVUb2tlbiIsInJlbW92ZUl0ZW0iLCJoYXNFeHBpcmVkVG9rZW4iLCJ0b2tlbkRlY29kZSIsImV4cGlyZURhdGUiLCJleHAiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwiUmVhY3QiLCJCcmVhZGNydW1icyIsIm1ha2VTdHlsZXMiLCJCb3giLCJDb250YWluZXIiLCJCcmVhZENydW1icyIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJzZWN0aW9uIiwiY29udGFpbmVyIiwidGl0bGUiLCJhY3RpdmVJdGVtIiwiaW5hY3RpdmVJdGVtIiwibGlzdCIsInRoZW1lIiwibG9hZGVyIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50Iiwic2VhcmNoTGluayIsImJvcmRlckJvdHRvbSIsInBhbGV0dGUiLCJncmV5IiwibGlzdFN0eWxlVHlwZSIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nTGVmdCIsImZsZXhXcmFwIiwiYnJlYWtwb2ludHMiLCJ1cCIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwibWFyZ2luQm90dG9tIiwib25seSIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luUmlnaHQiLCJjb2xvciIsImZvbnRTaXplIiwiZGVmYXVsdCIsInVzZVRoZW1lIiwiXyIsIkltYWdlIiwiZWxlbWVudEljb25zIiwibmFtZSIsInBhdGgiLCJFbGVtZW50SWNvbiIsInByb3BzIiwic3JjIiwiZmluZCIsIndpZHRoIiwiaGVpZ2h0IiwiRW1wdHlCYXIiLCJjaGlsZHJlbiIsInNwYWNlIiwibWluSGVpZ2h0IiwiTGluayIsIlR5cG9ncmFwaHkiLCJDYXRlZ29yeU1lbnUiLCJtZW51IiwibWVudUxpc3QiLCJzaXplIiwibWFwIiwiaXRlbSIsIkNhdGVnb3J5SXRlbSIsImthdGVnb3JpYSIsImRvd24iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRpdmlkZXIiLCJMaXN0TWVudSIsInVzZUFwcENvbnRleHQiLCJGbG9hdGluZ01lbnUiLCJhZGRpdGlvbmFsTWVudUl0ZW1zIiwiZ2VuZGVycyIsImNhdGVnb3JpZXMiLCJkaXZpZGVyIiwiYmFja2dyb3VuZCIsIkFkZHJlc3MiLCJhZGRyZXNzIiwidmFsdWVzIiwicGhvbmVzIiwiZW1haWwiLCJjaXR5Iiwic3RyZWV0IiwicG9zdENvZGUiLCJzZWN0aW9ucyIsImFsaWduSXRlbXMiLCJGb290ZXJDYXRlZ29yaWVzTGlzdCIsIkNhdGVnb3JpYSIsImxpbmsiLCJmb290ZXIiLCJ0ZXh0QWxpZ24iLCJ0ZXh0RGVjb3JhdGlvbiIsIkNhdGVnb3JpZXMiLCJQYXJ0bmVycyIsIkZvb3RlciIsImZvb3Rlck1lbnUiLCJjb21tb24iLCJwcmltYXJ5IiwibWFpbiIsImxpc3RTdHlsZSIsInBhcnRuZXJzIiwicCIsIlBhcnRuZXIiLCJwYXJ0bmVyIiwiVG9vbGJhciIsIlRvcEJhciIsIk1lbnUiLCJIZWFkZXIiLCJ0b29sYmFyIiwicGFkZGluZyIsInBhZGRpbmdSaWdodCIsIlN3aXBlYWJsZURyYXdlciIsIkJ1dHRvbiIsIkxpc3QiLCJQbGF5bGlzdEFkZENoZWNrSWNvbiIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1JY29uIiwiTGlzdEl0ZW1UZXh0IiwiSW5ib3hJY29uIiwidXNlTWVkaWFRdWVyeSIsIk1lbnVJY29uIiwic3RhdGUiLCJzZXRTdGF0ZSIsInJpZ2h0IiwiaXNNb2JpbGUiLCJ0b2dnbGVEcmF3ZXIiLCJhbmNob3IiLCJvcGVuIiwiZXZlbnQiLCJ0eXBlIiwia2V5IiwibGlzdEhlYWRlciIsIk1lbnVEcmF3ZXIiLCJyb290IiwiTWVudUxpc3QiLCJub0ljb24iLCJzZXJ2aWNlc0xpc3RUb3BCYXIiLCJNZW51SXRlbSIsIlBhcnRuZXJzTGlzdCIsImZ1bGxMaXN0IiwiZm9udFdlaWdodCIsImF1dGhMaXN0IiwidXNlckRldGFpbHMiLCJ1c2VyU3R5bGVzIiwiU2VhcmNoSWNvbiIsImluZGV4UGFnZUl0ZW0iLCJoZWFkIiwiZmlsdGVyIiwic2VhcmNoUGFnZUl0ZW0iLCJMb2dvIiwiaW5kZXhQYWdlIiwibG9nbyIsImN1c3RvbUJ1dHRvbnMiLCJzZWFyY2hJY29uIiwiY2VudHJlSWNvbiIsImFsaWduQ29udGVudCIsIkljb25UeXBlTGlzdCIsIm1vZGVsIiwiaWNvbnMiLCJwYXJ0cyIsInBhcnQiLCJ0eXR1bCIsIkltYWdlQ3VzdG9tIiwiaXNLb21wdXRlciIsImlzVGFibGV0IiwiZm9ybWF0cyIsImxhcmdlIiwibWVkaXVtIiwic21hbGwiLCJHcmlkIiwiTW9kZWxDYXJkIiwiTGlzdE1vZGVscyIsIm1vZGVscyIsIm1hcmdpbiIsImZsZXhHcm93IiwiQ2FyZENvbnRlbnQiLCJTaXplTGlzdCIsIkN1c3RvbUNhcmRDb250ZW50IiwiY2FyZENvbnRlbnQiLCJvcGlzIiwib3Bpc0NvbnRlbnQiLCJzaXplcyIsInNlY29uZGFyeSIsIkNhcmRIZWFkZXIiLCJBdmF0YXIiLCJyZWQiLCJDdXN0b21DYXJkSGVhZGVyIiwiYXZhdGFyIiwicGxlYyIsImJhY2tncm91bmRDb2xvciIsImNsc3giLCJDYXJkIiwiQ2FyZEFjdGlvbnMiLCJDb2xsYXBzZSIsIkljb25CdXR0b24iLCJFeHBhbmRNb3JlSWNvbiIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJoYXNQaG90b3MiLCJ6ZGplY2lhIiwiaGFuZGxlRXhwYW5kQ2xpY2siLCJsaSIsImFsdGVybmF0aXZlVGV4dCIsImNhcHRpb24iLCJDdXN0b21Db2xsYXBzZSIsIkN1c3RvbUFjdGlvbnMiLCJhY3Rpb25zIiwiZXhwYW5kIiwiZXhwYW5kT3BlbiIsIm1heFdpZHRoIiwidHJhbnNmb3JtIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZHVyYXRpb24iLCJzaG9ydGVzdCIsIlBhZ2luYXRpb24iLCJ1c2VSb3V0ZXIiLCJxdWVyeVN0cmluZyIsIlBhZ2luYXRpb25Sb3VuZGVkIiwibGltaXRQZXJQYWdlIiwidG90YWwiLCJwYWdlTnIiLCJzZXRQYWdlTnIiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJyb3V0ZXIiLCJ1cmxQYXJzZSIsInBhcnNlVXJsIiwiYXNQYXRoIiwiZ29Ub1BhZ2UiLCJuZXdQYWdlIiwic3RyaW5naWZ5VXJsIiwicHVzaCIsImRhdGEiLCJwYWdpbmF0aW9uIiwid2l0aFN0eWxlcyIsIlRvb2x0aXAiLCJzaXplTGlzdCIsInMiLCJyb3ptaWFyIiwiSHRtbFRvb2x0aXAiLCJ0b29sdGlwIiwidHlwb2dyYXBoeSIsInB4VG9SZW0iLCJib3JkZXIiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJBcHBXcmFwcGVyIiwic2V0Q2F0ZWdvcmllcyIsInNldEdlbmRlcnMiLCJCYXNpY0xheW91dCIsImFwcCIsInRvcEJhciIsImJveFNpemluZyIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJmbGV4IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJJbWFnZTEiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9oZWFkIiwiX3RvQmFzZTY0IiwiX2ltYWdlQ29uZmlnIiwiX3VzZUludGVyc2VjdGlvbiIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9fZXNNb2R1bGUiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiY29uY2F0Iiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZm9yRWFjaCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsImV4Y2x1ZGVkIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJzb3VyY2VTeW1ib2xLZXlzIiwiaW5kZXhPZiIsInByb3RvdHlwZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiY2FsbCIsInNvdXJjZUtleXMiLCJsb2FkZWRJbWFnZVVSTHMiLCJTZXQiLCJnbG9iYWwiLCJfX05FWFRfSU1BR0VfSU1QT1JURUQiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsInVuZGVmaW5lZCIsImxvYWRlcnMiLCJNYXAiLCJkZWZhdWx0TG9hZGVyIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiY3VzdG9tTG9hZGVyIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImlzU3RhdGljUmVxdWlyZSIsImlzU3RhdGljSW1hZ2VEYXRhIiwiaXNTdGF0aWNJbXBvcnQiLCJkZXZpY2VTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0ltYWdlU2l6ZXMiLCJjb25maWdMb2FkZXIiLCJjb25maWdQYXRoIiwiZG9tYWlucyIsImNvbmZpZ0RvbWFpbnMiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX0lNQUdFX09QVFMiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsImEiLCJiIiwiZ2V0V2lkdGhzIiwibGF5b3V0Iiwidmlld3BvcnRXaWR0aFJlIiwicGVyY2VudFNpemVzIiwibWF0Y2giLCJleGVjIiwicGFyc2VJbnQiLCJzbWFsbGVzdFJhdGlvIiwibWluIiwid2lkdGhzIiwia2luZCIsInciLCJnZW5lcmF0ZUltZ0F0dHJzIiwidW5vcHRpbWl6ZWQiLCJxdWFsaXR5Iiwic3JjU2V0IiwibGFzdCIsImpvaW4iLCJnZXRJbnQiLCJ4IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwiZ2V0IiwiRXJyb3IiLCJWQUxJRF9MT0FERVJTIiwiaGFuZGxlTG9hZGluZyIsImltZyIsInBsYWNlaG9sZGVyIiwib25Mb2FkaW5nQ29tcGxldGUiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJ0aGVuIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsImFkZCIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJyZWYiLCJwYXJlbnRFbGVtZW50IiwicGFyZW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIndhcm4iLCJwb3NpdGlvbiIsImNvbXBsZXRlIiwib25sb2FkIiwiX3BhcmFtIiwicHJpb3JpdHkiLCJsb2FkaW5nIiwibGF6eUJvdW5kYXJ5IiwiY2xhc3NOYW1lIiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaXNMYXp5IiwiaGFzIiwiaW5jbHVkZXMiLCJTdHJpbmciLCJpc05hTiIsIlZBTElEX0JMVVJfRVhUIiwicmFuZCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJzZXRSZWYiLCJpc0ludGVyc2VjdGVkIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nU3R5bGUiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwibWluV2lkdGgiLCJtYXhIZWlnaHQiLCJibHVyU3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJvdmVyZmxvdyIsInF1b3RpZW50IiwiaW1nQXR0cmlidXRlcyIsInNyY1N0cmluZyIsImNyZWF0ZUVsZW1lbnQiLCJhbHQiLCJ0b0Jhc2U2NCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVsIiwiYXMiLCJocmVmIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJVUkwiLCJwYXJhbXMiLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiZXJyIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfcm91dGVyIiwiX3JvdXRlcjEiLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJvcHRpb25zIiwiaXNMb2NhbFVSTCIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwiZSIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwidXNlUmVmIiwiY3VycmVudCIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwiZW5kc1dpdGgiLCJfX05FWFRfVFJBSUxJTkdfU0xBU0giLCJ0ZXN0IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwid2luZG93IiwiY2IiLCJzdGFydCIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImlkIiwiY2xlYXJUaW1lb3V0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImZ1dHVyZSIsInJlc29sdmVyIiwicHJvbSIsImhhc1ByZWZldGNoIiwiZG9jdW1lbnQiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25lcnJvciIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFwcGVuZFNjcmlwdCIsInNjcmlwdCIsInJlamVjdCIsImJvZHkiLCJkZXZCdWlsZFByb21pc2UiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0Iiwib2siLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJyb3V0ZUZpbGVzUHJvbWlzZSIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJmaW5hbGx5IiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwiX3dpdGhSb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyQ29udGV4dCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZGlzcGxheU5hbWUiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsImRldGVjdERvbWFpbkxvY2FsZSIsIl9fTkVYVF9JMThOX1NVUFBPUlQiLCJiYXNlUGF0aCIsIl9fTkVYVF9ST1VURVJfQkFTRVBBVEgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJkZXRlY3RlZExvY2FsZSIsImRldGVjdGVkRG9tYWluIiwiaHR0cCIsImRvbWFpbiIsInBhdGhuYW1lIiwicGF0aExvd2VyIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVMb3dlciIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwidXJsUHJvdG9NYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJfX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OIiwiaGlzdG9yeSIsInNlc3Npb25TdG9yYWdlIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwicGF0aG5hbWUxIiwicXVlcnkxIiwiYXMxIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJDb21wb25lbnQxIiwiZXJyMSIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJzZGMiLCJzZHIiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFnZVhPZmZzZXQiLCJ5IiwicGFnZVlPZmZzZXQiLCJwYXJzZSIsInBhcnNlUmVsYXRpdmVVcmwiLCJpc1NzciIsIl9icHMiLCJjaGFuZ2UiLCJfc2hhbGxvdyIsImNvbXBvbmVudHMiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJpc1JlYWR5IiwiZ3NzcCIsImdpcCIsImFwcEdpcCIsImdzcCIsImxvY2F0aW9uIiwic2VhcmNoIiwiX19ORVhUX0hBU19SRVdSSVRFUyIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlbG9hZCIsImJhY2siLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwicHJldkxvY2FsZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJfc2Nyb2xsIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImVycjIiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGF0aG5hbWUyIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHAxIiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJDaXJjdWxhclByb2dyZXNzIiwicXMiLCJMaXN0TW9kZWxDYXJkcyIsImdldFN0YXJ0SXRlbSIsIk1vZGVsIiwic2V0TW9kZWxzIiwic2V0TG9hZGVyIiwiY291bnQiLCJzZXRDb3VudCIsImJ1aWxkUXVlcnkiLCJfbGltaXQiLCJfc3RhcnQiLCJfd2hlcmUiLCJxIiwia3J5dGVyaWEiLCJyZXNwb25zZUNvdW50Iiwic2VjdGlvbkhlYWRlciIsInNlY3Rpb25TdWJIZWFkZXIiLCJzcGFjZUZpbGxlciIsImRlZmF1bHRQcml6ZSIsImRlZmF1bHREaXNwbGF5Q2FydHMiLCJhdXRoRmV0Y2giLCJsb2dvdXQiLCJwYXJhbXNUZW1wIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjdXJyZW50TGltaXQiLCJhYnMiLCJjdXJyZW50UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=