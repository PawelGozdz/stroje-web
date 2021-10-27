(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
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

/***/ "./components/CarouselScreenshots/CarouselScreenshots.js":
/*!***************************************************************!*\
  !*** ./components/CarouselScreenshots/CarouselScreenshots.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CarouselScreenshots)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Image */ "./components/Image/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\components\\CarouselScreenshots\\CarouselScreenshots.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * @docs https://react-slick.neostack.com/docs/api#accessibility
 */



const defaultSettings = {
  // className: 'carousel-screenshots',
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToScroll: 1
};
function CarouselScreenshots({
  images,
  settings,
  aspectRatio = 0.7
}) {
  const options = settings || defaultSettings;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react_slick__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread(_objectSpread({}, options), {}, {
      children: lodash__WEBPACK_IMPORTED_MODULE_2__.map(images, img => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Image__WEBPACK_IMPORTED_MODULE_3__.default, {
        src: img === null || img === void 0 ? void 0 : img.url,
        aspectRatio: 0.7,
        alt: img === null || img === void 0 ? void 0 : img.alternativeText,
        title: img === null || img === void 0 ? void 0 : img.caption,
        formats: img === null || img === void 0 ? void 0 : img.formats,
        aspectRatio: aspectRatio // onClick={() => openImage(ss.url)}

      }, img === null || img === void 0 ? void 0 : img.id, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, this))
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./components/CarouselScreenshots/index.js":
/*!*************************************************!*\
  !*** ./components/CarouselScreenshots/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _CarouselScreenshots__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _CarouselScreenshots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarouselScreenshots */ "./components/CarouselScreenshots/CarouselScreenshots.js");


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

/***/ "./components/MainPage/Hero/GenderButtons/GenderButtons.js":
/*!*****************************************************************!*\
  !*** ./components/MainPage/Hero/GenderButtons/GenderButtons.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GenderButtons)
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
/* harmony import */ var _api_gender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api/gender */ "./api/gender.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\components\\MainPage\\Hero\\GenderButtons\\GenderButtons.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function GenderButtons() {
  const classes = useStyles();
  const {
    0: gender,
    1: setGender
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: loader,
    1: setLoader
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (async () => {
      setLoader(true);
      const response = await (0,_api_gender__WEBPACK_IMPORTED_MODULE_5__.getGendersApi)();
      setGender(response || []);
      setLoader(false);
    })();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(ButtonList, {
      gender: gender,
      classes: classes,
      loader: loader
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

const ButtonList = ({
  gender,
  classes,
  loader
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
    component: "div",
    className: classes.buttons,
    children: loader ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CircularProgress, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }, undefined) : lodash__WEBPACK_IMPORTED_MODULE_3__.size(gender) > 0 && lodash__WEBPACK_IMPORTED_MODULE_3__.map(gender, genderItem => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(ButtonCta, {
      genderItem: genderItem,
      classes: classes
    }, genderItem.url, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 61
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined);
};

const ButtonCta = ({
  genderItem,
  classes
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
    component: "div",
    className: classes.searchLink,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: `/kategoria/${genderItem.url}?q=plec`,
      passHref: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
        className: classes.ctaButton,
        children: genderItem.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, undefined);
};

const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(theme => ({
  subHeading: {
    color: theme.palette.grey[50]
  },
  buttons: {
    paddingBottom: theme.spacing(3),
    display: 'flex',
    alignContent: 'flex-start',
    '& > *:not(:last-child)': {
      marginRight: theme.spacing(2)
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(1)
    }
  },
  ctaButton: _objectSpread(_objectSpread({}, theme.customButtons.primary), {}, {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.7rem'
    },
    color: theme.palette.grey[50]
  })
}));

/***/ }),

/***/ "./components/MainPage/Hero/GenderButtons/index.js":
/*!*********************************************************!*\
  !*** ./components/MainPage/Hero/GenderButtons/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _GenderButtons__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _GenderButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenderButtons */ "./components/MainPage/Hero/GenderButtons/GenderButtons.js");


/***/ }),

/***/ "./components/MainPage/Hero/HeroSlider/HeroSlider.js":
/*!***********************************************************!*\
  !*** ./components/MainPage/Hero/HeroSlider/HeroSlider.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeroSlider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/styles */ "@mui/styles");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CarouselScreenshots__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../CarouselScreenshots */ "./components/CarouselScreenshots/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\components\\MainPage\\Hero\\HeroSlider\\HeroSlider.js";






function HeroSlider() {
  const classes = useStyles();
  const {
    0: loader,
    1: setLoader
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: images,
    1: setImages
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (async () => {
      setLoader(true);
      const response = tempImages;
      setImages(response || null);
      setLoader(false);
    })();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
    container: true,
    item: true,
    className: classes.slider,
    sm: 12,
    md: 6,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Paper, {
      variant: "outlined",
      className: classes.photo,
      children: loader ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CircularProgress, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, this) : lodash__WEBPACK_IMPORTED_MODULE_4__.size(images) > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_CarouselScreenshots__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: classes.carousel,
        images: images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(theme => ({
  photo: {
    width: '100%',
    maxWidth: '22rem',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: '20rem'
    }
  },
  slider: {
    order: 1,
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(4),
      order: 2
    }
  },
  carousel: {
    maxHeight: '100%'
  }
}));
const tempImages = [{
  "id": 6,
  "name": "batman-ps4.jpg",
  "alternativeText": "Batman na czarno",
  "caption": "BAtman czarny",
  "width": 393,
  "height": 500,
  "formats": {
    "thumbnail": {
      "name": "thumbnail_batman-ps4.jpg",
      "hash": "thumbnail_batman_ps4_aefd777ea3",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "width": 123,
      "height": 156,
      "size": 6.21,
      "path": null,
      "url": "/uploads/thumbnail_batman_ps4_aefd777ea3.jpg"
    },
    "xsmall": {
      "name": "xsmall_batman-ps4.jpg",
      "hash": "xsmall_batman_ps4_aefd777ea3",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "width": 50,
      "height": 64,
      "size": 1.69,
      "path": null,
      "url": "/uploads/xsmall_batman_ps4_aefd777ea3.jpg"
    }
  },
  "hash": "batman_ps4_aefd777ea3",
  "ext": ".jpg",
  "mime": "image/jpeg",
  "size": 41.21,
  "url": "/uploads/batman_ps4_aefd777ea3.jpg",
  "previewUrl": null,
  "provider": "local",
  "provider_metadata": null,
  "created_at": "2021-10-11T17:18:49.000Z",
  "updated_at": "2021-10-11T17:18:50.000Z"
}, {
  "id": 7,
  "name": "kapitan-ameryka-stroj.jpg",
  "alternativeText": "Batman na niebiesko",
  "caption": "Batmak na niebiesko",
  "width": 1302,
  "height": 1734,
  "formats": {
    "thumbnail": {
      "name": "thumbnail_kapitan-ameryka-stroj.jpg",
      "hash": "thumbnail_kapitan_ameryka_stroj_33f9d83ce3",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "width": 117,
      "height": 156,
      "size": 3.74,
      "path": null,
      "url": "/uploads/thumbnail_kapitan_ameryka_stroj_33f9d83ce3.jpg"
    },
    "xlarge": {
      "name": "xlarge_kapitan-ameryka-stroj.jpg",
      "hash": "xlarge_kapitan_ameryka_stroj_33f9d83ce3",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "width": 1291,
      "height": 1720,
      "size": 111.35,
      "path": null,
      "url": "/uploads/xlarge_kapitan_ameryka_stroj_33f9d83ce3.jpg"
    },
    "large": {
      "name": "large_kapitan-ameryka-stroj.jpg",
      "hash": "large_kapitan_ameryka_stroj_33f9d83ce3",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "width": 901,
      "height": 1200,
      "size": 66.69,
      "path": null,
      "url": "/uploads/large_kapitan_ameryka_stroj_33f9d83ce3.jpg"
    },
    "medium": {
      "name": "medium_kapitan-ameryka-stroj.jpg",
      "hash": "medium_kapitan_ameryka_stroj_33f9d83ce3",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "width": 646,
      "height": 860,
      "size": 40.73,
      "path": null,
      "url": "/uploads/medium_kapitan_ameryka_stroj_33f9d83ce3.jpg"
    },
    "small": {
      "name": "small_kapitan-ameryka-stroj.jpg",
      "hash": "small_kapitan_ameryka_stroj_33f9d83ce3",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "width": 451,
      "height": 600,
      "size": 24.42,
      "path": null,
      "url": "/uploads/small_kapitan_ameryka_stroj_33f9d83ce3.jpg"
    },
    "xsmall": {
      "name": "xsmall_kapitan-ameryka-stroj.jpg",
      "hash": "xsmall_kapitan_ameryka_stroj_33f9d83ce3",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "width": 48,
      "height": 64,
      "size": 1.31,
      "path": null,
      "url": "/uploads/xsmall_kapitan_ameryka_stroj_33f9d83ce3.jpg"
    }
  },
  "hash": "kapitan_ameryka_stroj_33f9d83ce3",
  "ext": ".jpg",
  "mime": "image/jpeg",
  "size": 104.64,
  "url": "/uploads/kapitan_ameryka_stroj_33f9d83ce3.jpg",
  "previewUrl": null,
  "provider": "local",
  "provider_metadata": null,
  "created_at": "2021-10-11T17:18:49.000Z",
  "updated_at": "2021-10-11T17:18:50.000Z"
}];

/***/ }),

/***/ "./components/MainPage/Hero/HeroSlider/index.js":
/*!******************************************************!*\
  !*** ./components/MainPage/Hero/HeroSlider/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _HeroSlider__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _HeroSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeroSlider */ "./components/MainPage/Hero/HeroSlider/HeroSlider.js");


/***/ }),

/***/ "./components/MainPage/Hero/HomeHero.js":
/*!**********************************************!*\
  !*** ./components/MainPage/Hero/HomeHero.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomeHero)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/styles */ "@mui/styles");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\components\\MainPage\\Hero\\HomeHero.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function HomeHero({
  children
}) {
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    component: "section",
    className: classes.section,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
      maxWidth: "lg",
      className: classes.container,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(theme => ({
  section: _objectSpread(_objectSpread({}, theme.sections.section), {}, {
    background: 'linear-gradient( 109.6deg,  rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1% );',
    alignItems: 'center'
  }),
  container: _objectSpread({}, theme.container)
}));

/***/ }),

/***/ "./components/MainPage/Hero/HomeHeroContent/HomeHeroContent.js":
/*!*********************************************************************!*\
  !*** ./components/MainPage/Hero/HomeHeroContent/HomeHeroContent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomeHeroContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/styles */ "@mui/styles");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _GenderButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../GenderButtons */ "./components/MainPage/Hero/GenderButtons/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\components\\MainPage\\Hero\\HomeHeroContent\\HomeHeroContent.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function HomeHeroContent() {
  const classes = useStyles();

  const scrollToElement = async () => {
    document.getElementById('news').scrollIntoView({
      behavior: "smooth"
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    container: true,
    item: true,
    className: classes.action,
    sm: 12,
    md: 6,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
      variant: "h4",
      component: "h2",
      className: classes.subHeading,
      children: "Jakiego stroju szukasz?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
      component: "p",
      className: classes.subHeading,
      children: "Superbohaterowie, rycerze, postacie z kresk\xF3wek, oraz wiele innych..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_GenderButtons__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
      variant: "h4",
      component: "h2",
      className: classes.subHeading,
      children: "Sprawd\u017A nowo\u015Bci"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
      component: "div",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
        className: classes.ctaButton,
        onClick: scrollToElement,
        children: "Nowo\u015Bci"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(theme => ({
  subHeading: {
    color: theme.palette.grey[50]
  },
  ctaButton: _objectSpread(_objectSpread({}, theme.customButtons.primary), {}, {
    [theme.breakpoints.down('md')]: {
      fontSize: '0.7rem'
    },
    color: theme.palette.grey[50],
    cursor: 'pointer'
  }),
  action: {
    display: 'flex',
    flexDirection: 'column',
    order: 2,
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      textAlign: 'center',
      order: 1,
      marginTop: '5rem'
    },
    '& > *:not(:last-child)': {
      marginBottom: '1rem',
      [theme.breakpoints.up('sm')]: {
        marginBottom: '1.2rem'
      }
    }
  }
}));

/***/ }),

/***/ "./components/MainPage/Hero/HomeHeroContent/index.js":
/*!***********************************************************!*\
  !*** ./components/MainPage/Hero/HomeHeroContent/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _HomeHeroContent__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _HomeHeroContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeHeroContent */ "./components/MainPage/Hero/HomeHeroContent/HomeHeroContent.js");


/***/ }),

/***/ "./components/MainPage/Hero/index.js":
/*!*******************************************!*\
  !*** ./components/MainPage/Hero/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _HomeHero__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _HomeHero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeHero */ "./components/MainPage/Hero/HomeHero.js");


/***/ }),

/***/ "./components/MainPage/Services/Services.js":
/*!**************************************************!*\
  !*** ./components/MainPage/Services/Services.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Services)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/styles */ "@mui/styles");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ListModelsCards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ListModelsCards */ "./components/ListModelsCards/index.js");
/* harmony import */ var _api_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api/model */ "./api/model.js");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/fetch */ "./utils/fetch.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\components\\MainPage\\Services\\Services.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function Services() {
  const classes = useStyles();
  const {
    query
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    0: models,
    1: setModels
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: loader,
    1: setLoader
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (async () => {
      setLoader(true);
      query.limit = 6;
      const limit = (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_6__.limitPerPage)(query);
      const page = (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_6__.getStartItem)(query);
      const response = await (0,_api_model__WEBPACK_IMPORTED_MODULE_5__.getModelsApi)({
        sort: 'created_at:DESC',
        limit,
        page
      });
      setModels(response || []);
      setLoader(false);
    })();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    component: "section",
    className: classes.section,
    id: "news",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
      maxWidth: "lg",
      className: classes.container,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        variant: "h3",
        component: "h3",
        className: classes.sectionHeader,
        children: "Nowo\u015Bci"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
      maxWidth: "xl",
      className: classes.container,
      className: classes.loader,
      children: loader ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CircularProgress, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ListModelsCards__WEBPACK_IMPORTED_MODULE_4__.default, {
        models: models
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}
const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(theme => ({
  section: _objectSpread(_objectSpread({}, theme.sections.section), {}, {
    // background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
    background: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(171,102,255,1) 0%, rgba(116,182,247,1) 90% )',
    alignItems: 'center',
    color: theme.palette.grey[50]
  }),
  container: _objectSpread(_objectSpread({}, theme.container), {}, {
    alignItems: 'center'
  }),
  loader: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

/***/ }),

/***/ "./components/MainPage/Services/index.js":
/*!***********************************************!*\
  !*** ./components/MainPage/Services/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Services__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Services */ "./components/MainPage/Services/Services.js");


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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _layouts_BasicLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts/BasicLayout */ "./layouts/BasicLayout/index.js");
/* harmony import */ var _components_MainPage_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MainPage/Hero */ "./components/MainPage/Hero/index.js");
/* harmony import */ var _components_MainPage_Services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MainPage/Services */ "./components/MainPage/Services/index.js");
/* harmony import */ var _components_MainPage_Hero_HeroSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MainPage/Hero/HeroSlider */ "./components/MainPage/Hero/HeroSlider/index.js");
/* harmony import */ var _components_MainPage_Hero_HomeHeroContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MainPage/Hero/HomeHeroContent */ "./components/MainPage/Hero/HomeHeroContent/index.js");
/* harmony import */ var _components_EmptyBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/EmptyBar */ "./components/EmptyBar/index.js");
/* harmony import */ var _components_FloatingMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/FloatingMenu */ "./components/FloatingMenu/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\Projekty WWW\\Komercyjne\\Stroje 2.0\\client-update\\pages\\index.js";








function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_layouts_BasicLayout__WEBPACK_IMPORTED_MODULE_0__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_FloatingMenu__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_MainPage_Hero__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_MainPage_Hero_HeroSlider__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_MainPage_Hero_HomeHeroContent__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_EmptyBar__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_MainPage_Services__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_EmptyBar__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-slick");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXFDO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7O0FBRWxEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCLGVBQWU7QUFDZixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixZQUFZO0FBQ1osY0FBYztBQUNkLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQix3QkFBd0I7QUFDeEIseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6QixpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQixjQUFjO0FBQ2QsY0FBYztBQUNkLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUIsY0FBYztBQUNkLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDak9hOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQyxDQUFDO0FBQ0YsRUFBRSxrSkFBeUQ7QUFDM0Q7Ozs7Ozs7Ozs7OztBQ05BOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vYXBpL2NhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2FwaS9nZW5kZXIuanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2FwaS9tb2RlbC5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vYXBpL3Rva2VuLmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9jb21wb25lbnRzL0Nhcm91c2VsU2NyZWVuc2hvdHMvQ2Fyb3VzZWxTY3JlZW5zaG90cy5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vY29tcG9uZW50cy9DYXJvdXNlbFNjcmVlbnNob3RzL2luZGV4LmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9jb21wb25lbnRzL0N1c3RvbUljb25zL0VsZW1lbnRJY29uL0VsZW1lbnRJY29uLmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9jb21wb25lbnRzL0VtcHR5QmFyL0VtcHR5QmFyLmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9jb21wb25lbnRzL0Zsb2F0aW5nTWVudS9DYXRlZ29yeU1lbnUvQ2F0ZWdvcnlNZW51LmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9jb21wb25lbnRzL0Zsb2F0aW5nTWVudS9GbG9hdGluZ01lbnUuanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2NvbXBvbmVudHMvRm9vdGVyL0FkZHJlc3MvQWRkcmVzcy5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vY29tcG9uZW50cy9Gb290ZXIvQ2F0ZWdvcmllcy9Gb290ZXJDYXRlZ29yaWVzTGlzdC5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9jb21wb25lbnRzL0Zvb3Rlci9QYXJ0bmVycy9QYXJ0bmVycy5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9jb21wb25lbnRzL0hlYWRlci9NZW51L01lbnUuanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2NvbXBvbmVudHMvSGVhZGVyL1RvcEJhci9Ub3BCYXIuanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2NvbXBvbmVudHMvSWNvblR5cGVMaXN0L0ljb25UeXBlTGlzdC5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vY29tcG9uZW50cy9JbWFnZS9JbWFnZS5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vY29tcG9uZW50cy9MaXN0TW9kZWxzQ2FyZHMvTGlzdE1vZGVsQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2NvbXBvbmVudHMvTGlzdE1vZGVsc0NhcmRzL01vZGVsQ2FyZC9DdXN0b21DYXJkQ29udGVudC9DdXN0b21DYXJkQ29udGVudC5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vY29tcG9uZW50cy9MaXN0TW9kZWxzQ2FyZHMvTW9kZWxDYXJkL0N1c3RvbUNhcmRIZWFkZXIvQ3VzdG9tQ2FyZEhlYWRlci5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vY29tcG9uZW50cy9MaXN0TW9kZWxzQ2FyZHMvTW9kZWxDYXJkL01vZGVsQ2FyZC5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vY29tcG9uZW50cy9NYWluUGFnZS9IZXJvL0dlbmRlckJ1dHRvbnMvR2VuZGVyQnV0dG9ucy5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vY29tcG9uZW50cy9NYWluUGFnZS9IZXJvL0dlbmRlckJ1dHRvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2NvbXBvbmVudHMvTWFpblBhZ2UvSGVyby9IZXJvU2xpZGVyL0hlcm9TbGlkZXIuanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2NvbXBvbmVudHMvTWFpblBhZ2UvSGVyby9IZXJvU2xpZGVyL2luZGV4LmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9jb21wb25lbnRzL01haW5QYWdlL0hlcm8vSG9tZUhlcm8uanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2NvbXBvbmVudHMvTWFpblBhZ2UvSGVyby9Ib21lSGVyb0NvbnRlbnQvSG9tZUhlcm9Db250ZW50LmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9jb21wb25lbnRzL01haW5QYWdlL0hlcm8vSG9tZUhlcm9Db250ZW50L2luZGV4LmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9jb21wb25lbnRzL01haW5QYWdlL0hlcm8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2NvbXBvbmVudHMvTWFpblBhZ2UvU2VydmljZXMvU2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2NvbXBvbmVudHMvTWFpblBhZ2UvU2VydmljZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2NvbXBvbmVudHMvU2l6ZUxpc3QvU2l6ZUxpc3QuanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL2NvbnRleHQvU3RhdGVDb250ZXh0LmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9sYXlvdXRzL0Jhc2ljTGF5b3V0L0Jhc2ljTGF5b3V0LmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC8uL3V0aWxzL2ZldGNoLmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3hcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1BsYXlsaXN0QWRkQ2hlY2tcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsXCIiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvQXZhdGFyXCIiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvQ2FyZFwiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0NhcmRBY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvQ2FyZEhlYWRlclwiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0NvbGxhcHNlXCIiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvRGl2aWRlclwiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9MaXN0XCIiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1cIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbUljb25cIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9MaXN0SXRlbVRleHRcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9Td2lwZWFibGVEcmF3ZXJcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9jb2xvcnNcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwiQG11aS9zdHlsZXNcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwiY2xzeFwiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJqd3QtZGVjb2RlXCIiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJtYXRlcmlhbC11aS1pbWFnZVwiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiIiwid2VicGFjazovL3N0cm9qZS1jbGllbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwicmVhY3Qtc2xpY2tcIiIsIndlYnBhY2s6Ly9zdHJvamUtY2xpZW50L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vc3Ryb2plLWNsaWVudC9pZ25vcmVkfEQ6XFxQcm9qZWt0eSBXV1dcXEtvbWVyY3lqbmVcXFN0cm9qZSAyLjBcXGNsaWVudC11cGRhdGVcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcc2hhcmVkXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQkFTRV9QQVRIIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDYXRlZ29yaWVzQXBpKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHtCQVNFX1BBVEh9L2NhdGVnb3JpZXNgO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKCdnZXRDYXRlZ29yaWVzQXBpIC0tPj4nLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQkFTRV9QQVRIIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRHZW5kZXJzQXBpKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHtCQVNFX1BBVEh9L2dlbmRlcnNgO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKCdnZXRHZW5kZXJzQXBpIC0tPj4nLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQkFTRV9QQVRIIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNb2RlbHNBcGkoeyBsaW1pdCA9ICcnLCBzb3J0ID0gJycsIHBhZ2UgPSAnJyB9KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGxpbWl0SXRlbXMgPSBgX2xpbWl0PSR7bGltaXR9YDtcclxuICAgIGNvbnN0IHNvcnRJdGVtcyA9IGBfc29ydD0ke3NvcnR9YDtcclxuICAgIGNvbnN0IHN0YXJ0SXRlbXMgPSBgX3N0YXJ0PSR7cGFnZX1gO1xyXG4gICAgY29uc3QgdXJsID0gYCR7QkFTRV9QQVRIfS9tb2RlbHM/JHtsaW1pdEl0ZW1zfSYke3NvcnRJdGVtc30mJHtzdGFydEl0ZW1zfSZfcHVibGljYXRpb25TdGF0ZT1saXZlYDtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coJ2dldE1vZGVsc0FwaSAtLT4+JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TW9kZWxCeUN1c3RvbVByb3BzKHF1ZXJ5KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVybCA9IGAke0JBU0VfUEFUSH0vbW9kZWxzPyR7cXVlcnl9Jl9wdWJsaWNhdGlvblN0YXRlPWxpdmVgO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZ2V0TW9kZWxCeUN1c3RvbVByb3BzIC0tPj4nLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNb2RlbEJ5Q3VzdG9tUHJvcHNDb3VudChxdWVyeSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1cmwgPSBgJHtCQVNFX1BBVEh9L21vZGVscy9jb3VudD8ke3F1ZXJ5fSZfcHVibGljYXRpb25TdGF0ZT1saXZlYDtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coJ2dldE1vZGVsQnlDdXN0b21Qcm9wc0NvdW50IC0tPj4nLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFRPS0VOIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcclxuaW1wb3J0IGp3dERlY29kZSBmcm9tICdqd3QtZGVjb2RlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRUb2tlbih0b2tlbikge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFRPS0VOLCB0b2tlbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2tlbigpIHtcclxuICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oVE9LRU4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9rZW4oKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oVE9LRU4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzRXhwaXJlZFRva2VuKHRva2VuKSB7XHJcbiAgY29uc3QgdG9rZW5EZWNvZGUgPSBqd3REZWNvZGUodG9rZW4pO1xyXG4gIGNvbnN0IGV4cGlyZURhdGUgPSB0b2tlbkRlY29kZS5leHAgKiAxMDAwO1xyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgaWYgKGN1cnJlbnREYXRlID4gZXhwaXJlRGF0ZSkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vSW1hZ2UnO1xyXG5cclxuLyoqXHJcbiAqIEBkb2NzIGh0dHBzOi8vcmVhY3Qtc2xpY2submVvc3RhY2suY29tL2RvY3MvYXBpI2FjY2Vzc2liaWxpdHlcclxuICovXHJcblxyXG5jb25zdCBkZWZhdWx0U2V0dGluZ3MgPSB7XHJcbiAgLy8gY2xhc3NOYW1lOiAnY2Fyb3VzZWwtc2NyZWVuc2hvdHMnLFxyXG4gIGRvdHM6IHRydWUsXHJcbiAgaW5maW5pdGU6IHRydWUsXHJcbiAgYXV0b3BsYXk6IHRydWUsXHJcbiAgYXV0b3BsYXlTcGVlZDogNDAwMCxcclxuICBzbGlkZXNUb1Njcm9sbDogMSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcm91c2VsU2NyZWVuc2hvdHMoeyBpbWFnZXMsIHNldHRpbmdzLCBhc3BlY3RSYXRpbyA9IDAuNyB9KSB7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHNldHRpbmdzIHx8IGRlZmF1bHRTZXR0aW5ncztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTbGlkZXIgey4uLm9wdGlvbnN9PlxyXG4gICAgICAgIHtfLm1hcChpbWFnZXMsIChpbWcpID0+IChcclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9e2ltZz8udXJsfVxyXG4gICAgICAgICAgICBhc3BlY3RSYXRpbz17MC43fVxyXG4gICAgICAgICAgICBhbHQ9e2ltZz8uYWx0ZXJuYXRpdmVUZXh0fVxyXG4gICAgICAgICAgICB0aXRsZT17aW1nPy5jYXB0aW9ufVxyXG4gICAgICAgICAgICBmb3JtYXRzPXtpbWc/LmZvcm1hdHN9XHJcbiAgICAgICAgICAgIGtleT17aW1nPy5pZH1cclxuICAgICAgICAgICAgYXNwZWN0UmF0aW89e2FzcGVjdFJhdGlvfVxyXG4gICAgICAgICAgLy8gb25DbGljaz17KCkgPT4gb3BlbkltYWdlKHNzLnVybCl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1NsaWRlcj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJvdXNlbFNjcmVlbnNob3RzJzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtdWkvc3R5bGVzJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbmNvbnN0IGVsZW1lbnRJY29ucyA9IFtcclxuICB7IG5hbWU6ICdkb2RhdGtpJywgcGF0aDogJy9pY29ucy8wMDEtY29va2luZy1lcXVpcG1lbnQuc3ZnJyB9LFxyXG4gIHsgbmFtZTogJ3Nwb2RuaWNhJywgcGF0aDogJy9pY29ucy8wMDEtc2tpcnQuc3ZnJyB9LFxyXG4gIHsgbmFtZTogJ3N3ZXRlcicsIHBhdGg6ICcvaWNvbnMvMDAyLXN3ZWF0ZXIuc3ZnJyB9LFxyXG4gIHsgbmFtZTogJ2Jyb24nLCBwYXRoOiAnL2ljb25zLzAwMi13ZWFwb25zLnN2ZycgfSxcclxuICB7IG5hbWU6ICdrb3N0aXVtJywgcGF0aDogJy9pY29ucy8wMDMtc3VwZXJoZXJvLnN2ZycgfSxcclxuICB7IG5hbWU6ICdoZcWCbScsIHBhdGg6ICcvaWNvbnMvMDAzLXZpa2luZy1oZWxtZXQuc3ZnJyB9LFxyXG4gIHsgbmFtZTogJ2plZG5vY3plc2Npb3d5JywgcGF0aDogJy9pY29ucy8wMDQtc3VpdC5zdmcnIH0sXHJcbiAgeyBuYW1lOiAnbWFza2EnLCBwYXRoOiAnL2ljb25zLzAwNC10aGVhdGVyLnN2ZycgfSxcclxuICB7IG5hbWU6ICdidXR5JywgcGF0aDogJy9pY29ucy8wMDUtc2hvZXMuc3ZnJyB9LFxyXG4gIHsgbmFtZTogJ25ha3J5Y2llLWdsb3d5JywgcGF0aDogJy9pY29ucy8wMDYtcGFtZWxhLnN2ZycgfSxcclxuICB7IG5hbWU6ICd6YnJvamEnLCBwYXRoOiAnL2ljb25zLzAwNy1hcm1vci5zdmcnIH0sXHJcbiAgeyBuYW1lOiAnc3VrbmlhJywgcGF0aDogJy9pY29ucy8wMDgtZHJlc3Muc3ZnJyB9LFxyXG4gIHsgbmFtZTogJ2tvc3p1bGthJywgcGF0aDogJy9pY29ucy8wMDktc2hpcnQuc3ZnJyB9LFxyXG4gIHsgbmFtZTogJ3Qtc2hpcnQnLCBwYXRoOiAnL2ljb25zLzAxMC10c2hpcnQuc3ZnJyB9LFxyXG4gIHsgbmFtZTogJ3Nwb2RuaWUnLCBwYXRoOiAnL2ljb25zL3Ryb3VzZXJzLnN2ZycgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVsZW1lbnRJY29uKHByb3BzKSB7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IHNyYyA9IF8uZmluZChlbGVtZW50SWNvbnMsIHsgbmFtZTogcHJvcHMudXJsIH0pPy5wYXRoIHx8ICcvaWNvbnMvMDA0LXN1aXQuc3ZnJztcclxuICBjb25zdCB3aWR0aCA9IHByb3BzLndpZHRoID8gcHJvcHMud2lkdGggKyAncHgnIDogJzI1cHgnO1xyXG4gIGNvbnN0IGhlaWdodCA9IHByb3BzLndpZHRoID8gcHJvcHMud2lkdGggKyAncHgnIDogJzI1cHgnO1xyXG4gIGNvbnN0IGNvbG9yID0gcHJvcHM/LmNvbG9yIHx8IHRoZW1lLnBhbGV0dGUuZ3JleVs3MDBdO1xyXG4gIGNvbnN0IHRpdGxlID0gcHJvcHM/LnRpdGxlIHx8ICdrb3N0aXVteSdcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbWFnZSBzcmM9e3NyY30gaGVpZ2h0PXtoZWlnaHR9IHdpZHRoPXt3aWR0aH0gY29sb3I9e2NvbG9yfSB0aXRsZT17dGl0bGV9IC8+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbXVpL3N0eWxlcyc7XHJcblxyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVtcHR5QmFyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuc3BhY2V9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBzcGFjZToge1xyXG4gICAgbWluSGVpZ2h0OiAnNnJlbSdcclxuICB9XHJcbn0pKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtdWkvc3R5bGVzJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBCb3gsIFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5TWVudSh7IG1lbnUsIHF1ZXJ5ID0gJycgfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVMaXN0fSBjb21wb25lbnQ9J3VsJyBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXy5zaXplKG1lbnUpID4gMCAmJlxyXG4gICAgICAgICAgXy5tYXAobWVudSwgaXRlbSA9PiA8Q2F0ZWdvcnlJdGVtIGl0ZW09e2l0ZW19IHF1ZXJ5PXtxdWVyeX0ga2V5PXtpdGVtLnVybH0gLz4pXHJcbiAgICAgICAgfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgQ2F0ZWdvcnlJdGVtID0gKHsgaXRlbSwgcXVlcnkgfSkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggY29tcG9uZW50PSdsaScgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaExpbmt9ID5cclxuXHJcbiAgICAgIDxMaW5rIGhyZWY9e2Ava2F0ZWdvcmlhLyR7aXRlbS51cmx9JHtxdWVyeSA/IGA/cT0ke3F1ZXJ5fWAgOiAnJ31gfSBwYXNzSHJlZj5cclxuICAgICAgICA8YT57aXRlbS50aXRsZSB8fCBpdGVtLmthdGVnb3JpYX08L2E+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICA8L0JveD5cclxuICApXHJcbn07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgbG9hZGVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgfSxcclxuICBzZWFyY2hMaW5rOiB7XHJcbiAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmdyZXlbNDAwXX1gLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZ3JleVs5MDBdfWBcclxuICAgIH1cclxuICB9LFxyXG4gIGxpc3Q6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGxpc3RTdHlsZVR5cGU6ICdub25lJyxcclxuICAgIG1hcmdpbkxlZnQ6IDAsXHJcbiAgICBwYWRkaW5nTGVmdDogMCxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIH0sXHJcbiAgICAnJiA+IGxpOm5vdCg6bGFzdC1jaGlsZCknOiB7XHJcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMub25seSgneHMnKV06IHtcclxuICAgICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG59KSk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG11aS9zdHlsZXMnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQm94LCBEaXZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBMaXN0TWVudSBmcm9tICcuL0NhdGVnb3J5TWVudSc7XHJcbmltcG9ydCB7IHVzZUFwcENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L1N0YXRlQ29udGV4dCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGbG9hdGluZ01lbnUoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCBhZGRpdGlvbmFsTWVudUl0ZW1zID0gW3tcclxuICAgIHRpdGxlOiAnV2nEmWNlai4uLicsXHJcbiAgICB1cmw6ICdtb2RlbGUnXHJcbiAgfV07XHJcblxyXG4gIGNvbnN0IHsgZ2VuZGVycywgY2F0ZWdvcmllcyB9ID0gdXNlQXBwQ29udGV4dCgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBjb21wb25lbnQ9J3NlY3Rpb24nIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufSBpZD0nZmxvYXRpbmctbWVudSc+XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9J3hsJyBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8TGlzdE1lbnUgbWVudT17Z2VuZGVyc30gcXVlcnk9eydwbGVjJ30gLz5cclxuICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgdmFyaWFudD1cIm1pZGRsZVwiIGZsZXhJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXZpZGVyfSAvPlxyXG4gICAgICAgIDxMaXN0TWVudSBtZW51PXtjYXRlZ29yaWVzfSAvPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGxvYWRlcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgc2VjdGlvbjoge1xyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF0sXHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMS4yNSlcclxuICB9LFxyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgLi4udGhlbWUuY29udGFpbmVyXHJcbiAgfSxcclxuICBkaXZpZGVyOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICB9XHJcbiAgfVxyXG59KSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbXVpL3N0eWxlcyc7XHJcbmltcG9ydCB7IEJveCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkcmVzcyh7IGFkZHJlc3MgfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD0naDQnPnthZGRyZXNzLnRpdGxlfTwvVHlwb2dyYXBoeT5cclxuICAgICAgPEJveCBjb21wb25lbnQ9J3VsJyBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XHJcbiAgICAgICAgPGxpPntfLm1hcChhZGRyZXNzLnZhbHVlcy5waG9uZXMpfTwvbGk+XHJcbiAgICAgICAgPGxpPnthZGRyZXNzLnZhbHVlcy5lbWFpbH08L2xpPlxyXG4gICAgICAgIDxsaT57YWRkcmVzcy52YWx1ZXMuYWRkcmVzcy5jaXR5fTwvbGk+XHJcbiAgICAgICAgPGxpPnthZGRyZXNzLnZhbHVlcy5hZGRyZXNzLnN0cmVldH08L2xpPlxyXG4gICAgICAgIDxsaT57YWRkcmVzcy52YWx1ZXMuYWRkcmVzcy5wb3N0Q29kZX08L2xpPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBzZWN0aW9uOiB7XHJcbiAgICAuLi50aGVtZS5zZWN0aW9ucy5zZWN0aW9uLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIC4uLnRoZW1lLmNvbnRhaW5lclxyXG4gIH0sXHJcbn0pKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtdWkvc3R5bGVzJztcclxuaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlckNhdGVnb3JpZXNMaXN0KHsgY2F0ZWdvcmllcyB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PSdoNCc+e2NhdGVnb3JpZXMudGl0bGV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8Qm94IGNvbXBvbmVudD0ndWwnIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBfLnNpemUoY2F0ZWdvcmllcy52YWx1ZXMpID4gMCAmJlxyXG4gICAgICAgICAgXy5tYXAoY2F0ZWdvcmllcy52YWx1ZXMsIGl0ZW0gPT4gPENhdGVnb3JpYSBpdGVtPXtpdGVtfSBrZXk9e2l0ZW0ua2F0ZWdvcmlhfSAvPilcclxuICAgICAgICB9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgQ2F0ZWdvcmlhID0gKHsgaXRlbSwgcXVlcnkgfSkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggY29tcG9uZW50PSdsaScgPlxyXG5cclxuICAgICAgPExpbmsgaHJlZj17YC9rYXRlZ29yaWEvJHtpdGVtLnVybH1gfSBwYXNzSHJlZj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+e2l0ZW0ua2F0ZWdvcmlhfTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBjb250YWluZXI6IHtcclxuICAgIC4uLnRoZW1lLmNvbnRhaW5lclxyXG4gIH0sXHJcbiAgZm9vdGVyOiB7XHJcbiAgICBtaW5IZWlnaHQ6ICc0cmVtOycsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBtYXJnaW5Ub3A6ICdhdXRvJyxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygwKVxyXG4gIH0sXHJcbiAgbGluazoge1xyXG4gICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnXHJcbiAgfVxyXG59KSk7XHJcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbXVpL3N0eWxlcyc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgRGl2aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVzZUFwcENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L1N0YXRlQ29udGV4dCc7XHJcbmltcG9ydCBBZGRyZXNzIGZyb20gJy4vQWRkcmVzcyc7XHJcbmltcG9ydCBDYXRlZ29yaWVzIGZyb20gJy4vQ2F0ZWdvcmllcyc7XHJcbmltcG9ydCBQYXJ0bmVycyBmcm9tICcuL1BhcnRuZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IGZvb3Rlck1lbnUgPSBbXHJcbiAgICB7IHRpdGxlOiAnS2F0ZWdvcmllJywgdmFsdWVzOiB1c2VBcHBDb250ZXh0KCkuY2F0ZWdvcmllcyB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ0tvbnRha3QnLFxyXG4gICAgICB2YWx1ZXM6IHtcclxuICAgICAgICBwaG9uZXM6IFsnNzg4IDQ3OSA3ODknXSxcclxuICAgICAgICBlbWFpbDogJ2FnZW5jamEtcmVrbGFtb3dhLWltcHVsc0B3cC5wbCcsXHJcbiAgICAgICAgYWRkcmVzczogeyBzdHJlZXQ6ICd1bC4gT3dvY293YSAzJywgcG9zdENvZGU6ICcyNy0yMDAnLCBjaXR5OiAnU3RhcmFjaG93aWNlJyB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnUGFydG5lcnp5JyxcclxuICAgICAgdmFsdWVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6ICdBZ2VuY2phIFJla2xhbW93YSBJbXB1bHMnLCB1cmw6ICdodHRwOi8vYXJpbXB1bHMucGwvJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIHRpdGxlOiAnT3BpZWthIE5hZCBHcm9iYW1pJywgdXJsOiAnaHR0cDovL29waWVrYS1uYWQtZ3JvYmFtaS5jb20vJ1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD0neGwnIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICA8Q2F0ZWdvcmllcyBjYXRlZ29yaWVzPXtmb290ZXJNZW51WzBdfSAvPlxyXG4gICAgICA8RGl2aWRlciBjbGFzc05hbWU9e2NsYXNzZXMuZGl2aWRlcn0gb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHZhcmlhbnQ9XCJtaWRkbGVcIiBmbGV4SXRlbSAvPlxyXG4gICAgICA8QWRkcmVzcyBhZGRyZXNzPXtmb290ZXJNZW51WzFdfSAvPlxyXG4gICAgICA8RGl2aWRlciBjbGFzc05hbWU9e2NsYXNzZXMuZGl2aWRlcn0gb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHZhcmlhbnQ9XCJtaWRkbGVcIiBmbGV4SXRlbSAvPlxyXG4gICAgICA8UGFydG5lcnMgcGFydG5lcnM9e2Zvb3Rlck1lbnVbMl19IC8+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBjb250YWluZXI6IHtcclxuICAgIC4uLnRoZW1lLmNvbnRhaW5lcixcclxuICAgIHBhZGRpbmdUb3A6IGAke3RoZW1lLnNwYWNpbmcoMyl9YCxcclxuICAgIHBhZGRpbmdCb3R0b206IGAke3RoZW1lLnNwYWNpbmcoMyl9YCxcclxuICAgIGJhY2tncm91bmQ6IGAke3RoZW1lLnBhbGV0dGUuY29tbW9uLnByaW1hcnkubWFpbn0gIWltcG9ydGFudGAsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5ncmV5WzUwXSxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnYmFzZWxpbmUnLFxyXG4gICAgfSxcclxuICAgICcmIGg0Jzoge1xyXG4gICAgICBmb250U2l6ZTogJzEuNHJlbScsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcclxuICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcclxuICAgICAgICBmb250U2l6ZTogJzEuNnJlbScsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAnJiB1bCc6IHtcclxuICAgICAgbWFyZ2luTGVmdDogMCxcclxuICAgICAgcGFkZGluZ0xlZnQ6IDAsXHJcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcclxuICAgICAgfSxcclxuICAgICAgJyYgPiAqJzoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgICcmOm5vdCg6bGFzdC1jaGlsZCknOiB7XHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoNClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGl2aWRlcjoge1xyXG4gICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgYmFja2dyb3VuZDogYCR7dGhlbWUucGFsZXR0ZS5ncmV5WzUwXX0gIWltcG9ydGFudGAsXHJcbiAgICB3aWR0aDogJzFweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4J1xyXG4gICAgfSxcclxuICB9XHJcbn0pKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtdWkvc3R5bGVzJztcclxuaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhcnRuZXJzKHsgcGFydG5lcnMgfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD0naDQnPntwYXJ0bmVycy50aXRsZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxCb3ggY29tcG9uZW50PSd1bCcgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxyXG4gICAgICAgIHtfLm1hcChwYXJ0bmVycy52YWx1ZXMsIHAgPT4gPFBhcnRuZXIga2V5PXtwLnVybH0gcGFydG5lcj17cH0gLz4pfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IFBhcnRuZXIgPSAoeyBwYXJ0bmVyIH0pID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGNvbXBvbmVudD0nbGknID5cclxuXHJcbiAgICAgIDxMaW5rIGhyZWY9e2Ake3BhcnRuZXIudXJsfWB9IHBhc3NIcmVmPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj57cGFydG5lci50aXRsZX08L2E+XHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHNlY3Rpb246IHtcclxuICAgIC4uLnRoZW1lLnNlY3Rpb25zLnNlY3Rpb24sXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgLi4udGhlbWUuY29udGFpbmVyXHJcbiAgfSxcclxuICBsaW5rOiB7XHJcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZSdcclxuICB9XHJcbn0pKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG11aS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFRvb2xiYXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IFRvcEJhciBmcm9tICcuL1RvcEJhcic7XHJcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSc7XHJcbmltcG9ydCB7IG1lbnUgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9J3hsJz5cclxuICAgICAgPFRvb2xiYXIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9PlxyXG4gICAgICAgIDxUb3BCYXIgbWVudT17bWVudX0gLz5cclxuICAgICAgICA8TWVudSBtZW51PXttZW51fSAvPlxyXG4gICAgICA8L1Rvb2xiYXI+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICB0b29sYmFyOiB7XHJcbiAgICAvLyBtaW5IZWlnaHQ6IDEwMCxcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyICFpbXBvcnRhbnRcIixcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBwYWRkaW5nTGVmdDogMCxcclxuICAgIHBhZGRpbmdSaWdodDogMCxcclxuICB9LFxyXG59KSk7XHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tICdAbXVpL3N0eWxlcyc7XHJcbmltcG9ydCBTd2lwZWFibGVEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Td2lwZWFibGVEcmF3ZXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0JztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EaXZpZGVyJztcclxuaW1wb3J0IFBsYXlsaXN0QWRkQ2hlY2tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QbGF5bGlzdEFkZENoZWNrJztcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1JY29uJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3RJdGVtVGV4dCc7XHJcbmltcG9ydCBJbmJveEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vdmVUb0luYm94JztcclxuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSwgQm94LCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51KHsgbWVudSB9KSB7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIHJpZ2h0OiBmYWxzZSxcclxuICB9KTtcclxuICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9IChhbmNob3IsIG9wZW4pID0+IChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LnR5cGUgPT09ICdrZXlkb3duJyAmJiAoZXZlbnQua2V5ID09PSAnVGFiJyB8fCBldmVudC5rZXkgPT09ICdTaGlmdCcpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFthbmNob3JdOiBvcGVuIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFuY2hvciA9ICdyaWdodCc7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8TWVudURyYXdlciBhbmNob3I9e2FuY2hvcn0gY2xhc3Nlcz17Y2xhc3Nlc30gdG9nZ2xlRHJhd2VyPXt0b2dnbGVEcmF3ZXJ9IHN0YXRlPXtzdGF0ZX0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RIZWFkZXJ9IHZhcmlhbnQ9XCJoNlwiPlN0cm9ueTwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8TWVudUxpc3QgbWVudT17bWVudX0gLz5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEhlYWRlcn0gdmFyaWFudD1cImg2XCI+UGFydG5lcnp5PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxQYXJ0bmVyc0xpc3QgLz5cclxuXHJcbiAgICAgIDwvTWVudURyYXdlcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IE1lbnVEcmF3ZXIgPSAoeyBjaGlsZHJlbiwgY2xhc3NlcywgYW5jaG9yLCB0b2dnbGVEcmF3ZXIsIHN0YXRlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBjb21wb25lbnQ9J2RpdicgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXthbmNob3J9PlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyKGFuY2hvciwgdHJ1ZSl9PlxyXG4gICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPFN3aXBlYWJsZURyYXdlclxyXG4gICAgICAgICAgYW5jaG9yPXthbmNob3J9XHJcbiAgICAgICAgICBvcGVuPXtzdGF0ZVthbmNob3JdfVxyXG4gICAgICAgICAgb25DbG9zZT17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxyXG4gICAgICAgICAgb25PcGVuPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCB0cnVlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Td2lwZWFibGVEcmF3ZXI+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgTWVudUxpc3QgPSAoeyBub0ljb24gPSBmYWxzZSwgY2xhc3NlcywgbWVudSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0IGNsYXNzTmFtZT17Y2xhc3NlcyA/IGNsYXNzZXMuc2VydmljZXNMaXN0VG9wQmFyIDogJyd9PlxyXG4gICAgICB7bWVudS5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgPE1lbnVJdGVtIG5vSWNvbj17bm9JY29ufSBpdGVtPXtpdGVtfSBrZXk9e2l0ZW0udXJsfSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvTGlzdD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgTWVudUl0ZW0gPSAoeyBpdGVtLCBub0ljb24gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtgLyR7aXRlbS51cmx9YH0gcGFzc0hyZWY+XHJcbiAgICAgIDxMaXN0SXRlbSBidXR0b24gY29tcG9uZW50PVwiYVwiPlxyXG4gICAgICAgIHshbm9JY29uID8gPExpc3RJdGVtSWNvbj48UGxheWxpc3RBZGRDaGVja0ljb24gLz4gPC9MaXN0SXRlbUljb24+IDogJyd9XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dD57aXRlbS5pdGVtfTwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICA8L0xpc3RJdGVtPlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBQYXJ0bmVyc0xpc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0PlxyXG4gICAgICA8TGluayBocmVmPVwiaHR0cDovL2FyaW1wdWxzLnBsL1wiIHBhc3NIcmVmPlxyXG4gICAgICAgIDxMaXN0SXRlbSBidXR0b24gY29tcG9uZW50PVwiYVwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgPExpc3RJdGVtSWNvbj48SW5ib3hJY29uIC8+IDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgPExpc3RJdGVtVGV4dD5BZ2VuY2phIEltcHVsczwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvTGlzdD5cclxuICApO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBsaXN0OiB7XHJcbiAgICB3aWR0aDogJzQwMHB4JyxcclxuICAgIGJhY2tncm91bmQ6ICd0b21hdG8nXHJcbiAgfSxcclxuICByb290OiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nXHJcbiAgICB9XHJcbiAgfSxcclxuICBmdWxsTGlzdDoge1xyXG4gICAgd2lkdGg6ICdhdXRvJyxcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJ1xyXG4gIH0sXHJcbiAgYXV0aExpc3Q6IHt9LFxyXG4gIHVzZXJEZXRhaWxzOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXHJcbiAgICB0ZXh0QWxpZ246ICdyaWdodCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgZm9udFNpemU6ICcuODVyZW0nXHJcbiAgICB9XHJcbiAgfSxcclxuICB1c2VyU3R5bGVzOiB7XHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIHRleHRBbGlnbjogJ3JpZ2h0J1xyXG4gIH0sXHJcbiAgc2VydmljZXNMaXN0VG9wQmFyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgfSxcclxuICBsaXN0SGVhZGVyOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpXHJcbiAgfVxyXG59KSk7XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbXVpL3N0eWxlcyc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9wQmFyKHsgbWVudSB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCBpbmRleFBhZ2VJdGVtID0gXy5oZWFkKF8uZmlsdGVyKG1lbnUsIHsgdXJsOiAnJyB9KSk7XHJcbiAgY29uc3Qgc2VhcmNoUGFnZUl0ZW0gPSBfLmhlYWQoXy5maWx0ZXIobWVudSwgeyB1cmw6ICd3eXN6dWthaicgfSkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExvZ28gaW5kZXhQYWdlPXtpbmRleFBhZ2VJdGVtfSAvPlxyXG4gICAgICB7LyogPEJveCBjb21wb25lbnQ9J2RpdicgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaExpbmt9ID5cclxuICAgICAgICA8TGluayBocmVmPXtgL3d5c3p1a2FqYH0gcGFzc0hyZWY+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMuY2VudHJlSWNvbn0+PFNlYXJjaEljb24gY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEljb259IC8+IHtzZWFyY2hQYWdlSXRlbS5pdGVtfTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvQm94PiAqL31cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExvZ28oeyBpbmRleFBhZ2UgfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17YC8ke2luZGV4UGFnZS51cmx9YH0gcGFzc0hyZWY+XHJcbiAgICAgIDxhPlxyXG4gICAgICAgIDxpbWcgc3JjPScvTE9HTy5zdmcnIGFsdD0nU2l0ZSBMb2dvJyB0aXRsZT0nV3lwb8W8eWN6YWxuaWEgc3Ryb2rDs3cga2FybmF3YcWCb3d5Y2gnIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfSAvPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHNlYXJjaExpbms6IHtcclxuICAgIC4uLnRoZW1lLmN1c3RvbUJ1dHRvbnMucHJpbWFyeSxcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoNSksXHJcbiAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2VhcmNoSWNvbjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSlcclxuICB9LFxyXG4gIGxvZ286IHtcclxuICAgIHdpZHRoOiAnNS40cmVtJyxcclxuICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICB3aWR0aDogJzYuOHJlbScsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpXToge1xyXG4gICAgICB3aWR0aDogJzcuMnJlbScsXHJcbiAgICB9LFxyXG4gICAgLy8gYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzMsIDZdXHJcbiAgfSxcclxuICBjZW50cmVJY29uOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGFsaWduQ29udGVudDogJ2NlbnRlcidcclxuICB9XHJcbn0pKTtcclxuIiwiaW1wb3J0IHsgQm94IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBFbGVtZW50SWNvbiBmcm9tICcuLi9DdXN0b21JY29ucy9FbGVtZW50SWNvbic7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbXVpL3N0eWxlcyc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEljb25UeXBlTGlzdCh7IG1vZGVsIH0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uc30+XHJcbiAgICAgIHtcclxuICAgICAgICBfLm1hcChtb2RlbC5wYXJ0cywgcGFydCA9PiAoXHJcbiAgICAgICAgICA8RWxlbWVudEljb25cclxuICAgICAgICAgICAgdGl0bGU9e3BhcnQudHl0dWx9XHJcbiAgICAgICAgICAgIHVybD17cGFydC51cmx9XHJcbiAgICAgICAgICAgIGtleT17cGFydC51cmx9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpXHJcbiAgICAgIH1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgaWNvbnM6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnXHJcbiAgfVxyXG59KSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdtYXRlcmlhbC11aS1pbWFnZSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSAnQG11aS9zdHlsZXMnO1xyXG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmltcG9ydCB7IEJBU0VfUEFUSCB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZUN1c3RvbShwcm9wcykge1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuXHJcbiAgbGV0IHNpemUgPSBwcm9wcy5zcmM7XHJcblxyXG4gIGNvbnN0IGlzS29tcHV0ZXIgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpKTtcclxuICBjb25zdCBpc1RhYmxldCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMub25seSgnbWQnKSk7XHJcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJykpO1xyXG5cclxuICBpZiAoXy5zaXplKHByb3BzLmZvcm1hdHMpID4gMCkge1xyXG4gICAgaWYgKGlzS29tcHV0ZXIpIHNpemUgPSBwcm9wcy5mb3JtYXRzPy5sYXJnZT8udXJsIHx8IHNpemU7XHJcbiAgICBpZiAoaXNUYWJsZXQpIHNpemUgPSBwcm9wcy5mb3JtYXRzPy5tZWRpdW0/LnVybCB8fCBzaXplO1xyXG4gICAgaWYgKGlzTW9iaWxlKSBzaXplID0gcHJvcHMuZm9ybWF0cz8uc21hbGw/LnVybCB8fCBzaXplO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxJbWFnZSB7Li4ucHJvcHN9IHNyYz17YCR7QkFTRV9QQVRIfSR7c2l6ZX1gfSAvPlxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbXVpL3N0eWxlcyc7XHJcbmltcG9ydCBNb2RlbENhcmQgZnJvbSAnLi9Nb2RlbENhcmQvTW9kZWxDYXJkJztcclxuXHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RNb2RlbHMoeyBtb2RlbHMgfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0gc3BhY2luZz17Mn0gY29tcG9uZW50PSd1bCcgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9ID5cclxuICAgICAge18uc2l6ZShtb2RlbHMpID4gMCAmJiBfLm1hcChtb2RlbHMsIG1vZGVsID0+IChcclxuICAgICAgICA8TW9kZWxDYXJkIG1vZGVsPXttb2RlbH0ga2V5PXttb2RlbC50eXR1bH0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L0dyaWQ+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgbGlzdDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgbGlzdFN0eWxlVHlwZTogJ25vbmUnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgICBtYXJnaW5Ub3A6ICczcmVtJyxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG11aS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBCb3gsIERpdmlkZXIsIENhcmRDb250ZW50IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgU2l6ZUxpc3QgZnJvbSAnLi4vLi4vLi4vU2l6ZUxpc3QnO1xyXG5pbXBvcnQgSWNvblR5cGVMaXN0IGZyb20gJy4uLy4uLy4uL0ljb25UeXBlTGlzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21DYXJkQ29udGVudCh7IG1vZGVsIH0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRDb250ZW50fT5cclxuICAgICAge18uc2l6ZShtb2RlbC5vcGlzKSA+IDAgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMub3Bpc0NvbnRlbnR9PlxyXG4gICAgICAgICAgICB7bW9kZWwub3Bpc31cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7Xy5zaXplKG1vZGVsLnBhcnRzKSA+IDAgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMub3Bpc0NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgIEVsZW1lbnR5IHN0cm9qdTpcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgPEljb25UeXBlTGlzdCBtb2RlbD17bW9kZWx9IC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7Xy5zaXplKG1vZGVsLnNpemVzKSA+IDAgJiYgKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMub3Bpc0NvbnRlbnR9PlxyXG4gICAgICAgICAgICBEb3N0xJlwbmUgcm96bWlhcnk6XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8U2l6ZUxpc3QgbW9kZWw9e21vZGVsfSAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMub3Bpc0NvbnRlbnR9PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC8ke21vZGVsLnVybH1gfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PkN6eXRhaiB3acSZY2VqLi4uPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NhcmRDb250ZW50ID5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgY2FyZENvbnRlbnQ6IHtcclxuICAgICcmID4gOm5vdCg6bGFzdC1jaGlsZCknOiB7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgb3Bpc0NvbnRlbnQ6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmdyZXlbNjAwXSxcclxuICAgIGZvbnRTaXplOiAnLjlyZW0nXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbidcclxuICB9LFxyXG4gIGxpbms6IHtcclxuICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5zZWNvbmRhcnkubWFpblxyXG4gIH1cclxufSkpO1xyXG4iLCJpbXBvcnQgQ2FyZEhlYWRlciBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmRIZWFkZXInO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXZhdGFyJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtdWkvc3R5bGVzJztcclxuaW1wb3J0IHsgcmVkIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9jb2xvcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tQ2FyZEhlYWRlcih7IG1vZGVsIH0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZEhlYWRlclxyXG4gICAgICBhdmF0YXI9e1xyXG4gICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJQxYJlxIdcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn1cclxuICAgICAgICAgIHRpdGxlPXttb2RlbC5wbGVjLnRpdGxlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHttb2RlbC5wbGVjLnRpdGxlWzBdfVxyXG4gICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICB9XHJcbiAgICAgIHRpdGxlPXttb2RlbC50eXR1bH1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGF2YXRhcjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5zZWNvbmRhcnkubWFpbixcclxuICB9LFxyXG59KSk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSwgQm94IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG11aS9zdHlsZXMnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmQnO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkQWN0aW9ucyc7XHJcbmltcG9ydCBDb2xsYXBzZSBmcm9tICdAbXVpL21hdGVyaWFsL0NvbGxhcHNlJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uJztcclxuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlJztcclxuaW1wb3J0IEltYWdlIGZyb20gJy4uLy4uL0ltYWdlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgQ3VzdG9tQ2FyZEhlYWRlciBmcm9tICcuL0N1c3RvbUNhcmRIZWFkZXInO1xyXG5pbXBvcnQgQ3VzdG9tQ2FyZENvbnRlbnQgZnJvbSAnLi9DdXN0b21DYXJkQ29udGVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RlbENhcmQoeyBtb2RlbCB9KSB7XHJcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCBoYXNQaG90b3MgPSBfLnNpemUobW9kZWwuemRqZWNpYSkgPiAwO1xyXG5cclxuICBjb25zdCBoYW5kbGVFeHBhbmRDbGljayA9ICgpID0+IHtcclxuICAgIHNldEV4cGFuZGVkKCFleHBhbmRlZCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNvbXBvbmVudD0nbGknIGl0ZW0geHM9ezEyfSBzbT17Nn0gbWQ9ezR9IGxnPXsyfSBjbGFzc05hbWU9e2NsYXNzZXMubGl9PlxyXG4gICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgPEN1c3RvbUNhcmRIZWFkZXIgbW9kZWw9e21vZGVsfSAvPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvJHttb2RlbC51cmx9YH0gcGFzc0hyZWY+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtoYXNQaG90b3MgPyBtb2RlbC56ZGplY2lhWzBdLnVybCA6ICcnfVxyXG4gICAgICAgICAgICAgIGFzcGVjdFJhdGlvPXswLjd9XHJcbiAgICAgICAgICAgICAgYWx0PXtoYXNQaG90b3MgPyBtb2RlbC56ZGplY2lhWzBdLmFsdGVybmF0aXZlVGV4dCA6ICcnfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtoYXNQaG90b3MgPyBtb2RlbC56ZGplY2lhWzBdLmNhcHRpb24gOiAnJ31cclxuICAgICAgICAgICAgICBmb3JtYXRzPXtoYXNQaG90b3MgPyBtb2RlbC56ZGplY2lhWzBdLmZvcm1hdHMgOiAnJ31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgIDxDdXN0b21BY3Rpb25zXHJcbiAgICAgICAgICBoYW5kbGVFeHBhbmRDbGljaz17aGFuZGxlRXhwYW5kQ2xpY2t9XHJcbiAgICAgICAgICBleHBhbmRlZD17ZXhwYW5kZWR9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEN1c3RvbUNvbGxhcHNlIGV4cGFuZGVkPXtleHBhbmRlZH0+XHJcbiAgICAgICAgICA8Q3VzdG9tQ2FyZENvbnRlbnQgbW9kZWw9e21vZGVsfSAvPlxyXG4gICAgICAgIDwvQ3VzdG9tQ29sbGFwc2U+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBDdXN0b21Db2xsYXBzZSA9ICh7IGV4cGFuZGVkLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb2xsYXBzZSBpbj17ZXhwYW5kZWR9IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cclxuICAgICAge18uc2l6ZShjaGlsZHJlbikgPiAwICYmIGNoaWxkcmVufVxyXG4gICAgPC9Db2xsYXBzZT5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQ3VzdG9tQWN0aW9ucyA9ICh7IGhhbmRsZUV4cGFuZENsaWNrLCBleHBhbmRlZCB9KSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmRBY3Rpb25zIGRpc2FibGVTcGFjaW5nIGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgIFJvendpxYQgc2N6ZWfDs8WCeVxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuZXhwYW5kLCB7XHJcbiAgICAgICAgICBbY2xhc3Nlcy5leHBhbmRPcGVuXTogZXhwYW5kZWQsXHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlRXhwYW5kQ2xpY2t9XHJcbiAgICAgICAgYXJpYS1leHBhbmRlZD17ZXhwYW5kZWR9XHJcbiAgICAgICAgYXJpYS1sYWJlbD1cInNob3cgbW9yZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8RXhwYW5kTW9yZUljb24gLz5cclxuICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgPC9DYXJkQWN0aW9ucz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWF4V2lkdGg6ICdhdXRvJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gIH0sXHJcbiAgbGk6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nTGVmdDogJzAgIWltcG9ydGFudCcsXHJcbiAgICB9XHJcbiAgfSxcclxuICBhY3Rpb25zOiB7XHJcbiAgICBtYXJnaW5Ub3A6ICdhdXRvJ1xyXG4gIH0sXHJcbiAgZXhwYW5kOiB7XHJcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMGRlZyknLFxyXG4gICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd0cmFuc2Zvcm0nLCB7XHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVzdCxcclxuICAgIH0pLFxyXG4gIH0sXHJcbiAgZXhwYW5kT3Blbjoge1xyXG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDE4MGRlZyknLFxyXG4gIH0sXHJcbn0pKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbXVpL3N0eWxlcyc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgQm94LCBDaXJjdWxhclByb2dyZXNzIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IGdldEdlbmRlcnNBcGkgfSBmcm9tICcuLi8uLi8uLi8uLi9hcGkvZ2VuZGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdlbmRlckJ1dHRvbnMoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCBbZ2VuZGVyLCBzZXRHZW5kZXJdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkZXIsIHNldExvYWRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkZXIodHJ1ZSk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0R2VuZGVyc0FwaSgpO1xyXG4gICAgICBzZXRHZW5kZXIocmVzcG9uc2UgfHwgW10pO1xyXG4gICAgICBzZXRMb2FkZXIoZmFsc2UpO1xyXG4gICAgfSkoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8QnV0dG9uTGlzdCBnZW5kZXI9e2dlbmRlcn0gY2xhc3Nlcz17Y2xhc3Nlc30gbG9hZGVyPXtsb2FkZXJ9IC8+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IEJ1dHRvbkxpc3QgPSAoeyBnZW5kZXIsIGNsYXNzZXMsIGxvYWRlciB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggY29tcG9uZW50PSdkaXYnIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25zfT5cclxuICAgICAge2xvYWRlclxyXG4gICAgICAgID8gPENpcmN1bGFyUHJvZ3Jlc3MgLz5cclxuICAgICAgICA6IF8uc2l6ZShnZW5kZXIpID4gMCAmJiBfLm1hcChnZW5kZXIsIGdlbmRlckl0ZW0gPT4gPEJ1dHRvbkN0YSBnZW5kZXJJdGVtPXtnZW5kZXJJdGVtfSBrZXk9e2dlbmRlckl0ZW0udXJsfSBjbGFzc2VzPXtjbGFzc2VzfSAvPilcclxuICAgICAgfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEJ1dHRvbkN0YSA9ICh7IGdlbmRlckl0ZW0sIGNsYXNzZXMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGNvbXBvbmVudD0nZGl2JyBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoTGlua30gPlxyXG5cclxuICAgICAgPExpbmsgaHJlZj17YC9rYXRlZ29yaWEvJHtnZW5kZXJJdGVtLnVybH0/cT1wbGVjYH0gcGFzc0hyZWY+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmN0YUJ1dHRvbn0+e2dlbmRlckl0ZW0udGl0bGV9PC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBzdWJIZWFkaW5nOiB7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5ncmV5WzUwXSxcclxuICB9LFxyXG4gIGJ1dHRvbnM6IHtcclxuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcclxuICAgICcmID4gKjpub3QoOmxhc3QtY2hpbGQpJzoge1xyXG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKVxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGN0YUJ1dHRvbjoge1xyXG4gICAgLi4udGhlbWUuY3VzdG9tQnV0dG9ucy5wcmltYXJ5LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMC43cmVtJ1xyXG4gICAgfSxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmdyZXlbNTBdXHJcbiAgfSxcclxufSkpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9HZW5kZXJCdXR0b25zJzsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkLCBCb3gsIFR5cG9ncmFwaHksIENpcmN1bGFyUHJvZ3Jlc3MsIFBhcGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbXVpL3N0eWxlcyc7XHJcbmltcG9ydCBDYXJvdXNlbFNjcmVlbnNob3RzIGZyb20gJy4uLy4uLy4uL0Nhcm91c2VsU2NyZWVuc2hvdHMnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvU2xpZGVyKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNldExvYWRlcih0cnVlKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gdGVtcEltYWdlcztcclxuXHJcbiAgICAgIHNldEltYWdlcyhyZXNwb25zZSB8fCBudWxsKTtcclxuICAgICAgc2V0TG9hZGVyKGZhbHNlKTtcclxuICAgIH0pKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWRcclxuICAgICAgY29udGFpbmVyIGl0ZW1cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNsaWRlcn1cclxuICAgICAgc209ezEyfSBtZD17Nn1cclxuICAgID5cclxuICAgICAgPFBhcGVyIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5waG90b30+XHJcbiAgICAgICAge2xvYWRlclxyXG4gICAgICAgICAgPyA8Q2lyY3VsYXJQcm9ncmVzcyAvPlxyXG4gICAgICAgICAgOiBfLnNpemUoaW1hZ2VzKSA+IDAgJiYgKFxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWxTY3JlZW5zaG90c1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJvdXNlbH1cclxuICAgICAgICAgICAgICBpbWFnZXM9e2ltYWdlc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcGhvdG86IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBtYXhXaWR0aDogJzIycmVtJyxcclxuICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIG1heFdpZHRoOiAnMjByZW0nXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2xpZGVyOiB7XHJcbiAgICBvcmRlcjogMSxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICAgIG9yZGVyOiAyXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2Fyb3VzZWw6IHtcclxuICAgIG1heEhlaWdodDogJzEwMCUnXHJcbiAgfVxyXG59KSk7XHJcblxyXG5jb25zdCB0ZW1wSW1hZ2VzID0gW3tcclxuICBcImlkXCI6IDYsXHJcbiAgXCJuYW1lXCI6IFwiYmF0bWFuLXBzNC5qcGdcIixcclxuICBcImFsdGVybmF0aXZlVGV4dFwiOiBcIkJhdG1hbiBuYSBjemFybm9cIixcclxuICBcImNhcHRpb25cIjogXCJCQXRtYW4gY3phcm55XCIsXHJcbiAgXCJ3aWR0aFwiOiAzOTMsXHJcbiAgXCJoZWlnaHRcIjogNTAwLFxyXG4gIFwiZm9ybWF0c1wiOiB7XHJcbiAgICBcInRodW1ibmFpbFwiOiB7XHJcbiAgICAgIFwibmFtZVwiOiBcInRodW1ibmFpbF9iYXRtYW4tcHM0LmpwZ1wiLFxyXG4gICAgICBcImhhc2hcIjogXCJ0aHVtYm5haWxfYmF0bWFuX3BzNF9hZWZkNzc3ZWEzXCIsXHJcbiAgICAgIFwiZXh0XCI6IFwiLmpwZ1wiLFxyXG4gICAgICBcIm1pbWVcIjogXCJpbWFnZS9qcGVnXCIsXHJcbiAgICAgIFwid2lkdGhcIjogMTIzLFxyXG4gICAgICBcImhlaWdodFwiOiAxNTYsXHJcbiAgICAgIFwic2l6ZVwiOiA2LjIxLFxyXG4gICAgICBcInBhdGhcIjogbnVsbCxcclxuICAgICAgXCJ1cmxcIjogXCIvdXBsb2Fkcy90aHVtYm5haWxfYmF0bWFuX3BzNF9hZWZkNzc3ZWEzLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAgXCJ4c21hbGxcIjoge1xyXG4gICAgICBcIm5hbWVcIjogXCJ4c21hbGxfYmF0bWFuLXBzNC5qcGdcIixcclxuICAgICAgXCJoYXNoXCI6IFwieHNtYWxsX2JhdG1hbl9wczRfYWVmZDc3N2VhM1wiLFxyXG4gICAgICBcImV4dFwiOiBcIi5qcGdcIixcclxuICAgICAgXCJtaW1lXCI6IFwiaW1hZ2UvanBlZ1wiLFxyXG4gICAgICBcIndpZHRoXCI6IDUwLFxyXG4gICAgICBcImhlaWdodFwiOiA2NCxcclxuICAgICAgXCJzaXplXCI6IDEuNjksXHJcbiAgICAgIFwicGF0aFwiOiBudWxsLFxyXG4gICAgICBcInVybFwiOiBcIi91cGxvYWRzL3hzbWFsbF9iYXRtYW5fcHM0X2FlZmQ3NzdlYTMuanBnXCJcclxuICAgIH1cclxuICB9LFxyXG4gIFwiaGFzaFwiOiBcImJhdG1hbl9wczRfYWVmZDc3N2VhM1wiLFxyXG4gIFwiZXh0XCI6IFwiLmpwZ1wiLFxyXG4gIFwibWltZVwiOiBcImltYWdlL2pwZWdcIixcclxuICBcInNpemVcIjogNDEuMjEsXHJcbiAgXCJ1cmxcIjogXCIvdXBsb2Fkcy9iYXRtYW5fcHM0X2FlZmQ3NzdlYTMuanBnXCIsXHJcbiAgXCJwcmV2aWV3VXJsXCI6IG51bGwsXHJcbiAgXCJwcm92aWRlclwiOiBcImxvY2FsXCIsXHJcbiAgXCJwcm92aWRlcl9tZXRhZGF0YVwiOiBudWxsLFxyXG4gIFwiY3JlYXRlZF9hdFwiOiBcIjIwMjEtMTAtMTFUMTc6MTg6NDkuMDAwWlwiLFxyXG4gIFwidXBkYXRlZF9hdFwiOiBcIjIwMjEtMTAtMTFUMTc6MTg6NTAuMDAwWlwiXHJcbn0sXHJcbntcclxuICBcImlkXCI6IDcsXHJcbiAgXCJuYW1lXCI6IFwia2FwaXRhbi1hbWVyeWthLXN0cm9qLmpwZ1wiLFxyXG4gIFwiYWx0ZXJuYXRpdmVUZXh0XCI6IFwiQmF0bWFuIG5hIG5pZWJpZXNrb1wiLFxyXG4gIFwiY2FwdGlvblwiOiBcIkJhdG1hayBuYSBuaWViaWVza29cIixcclxuICBcIndpZHRoXCI6IDEzMDIsXHJcbiAgXCJoZWlnaHRcIjogMTczNCxcclxuICBcImZvcm1hdHNcIjoge1xyXG4gICAgXCJ0aHVtYm5haWxcIjoge1xyXG4gICAgICBcIm5hbWVcIjogXCJ0aHVtYm5haWxfa2FwaXRhbi1hbWVyeWthLXN0cm9qLmpwZ1wiLFxyXG4gICAgICBcImhhc2hcIjogXCJ0aHVtYm5haWxfa2FwaXRhbl9hbWVyeWthX3N0cm9qXzMzZjlkODNjZTNcIixcclxuICAgICAgXCJleHRcIjogXCIuanBnXCIsXHJcbiAgICAgIFwibWltZVwiOiBcImltYWdlL2pwZWdcIixcclxuICAgICAgXCJ3aWR0aFwiOiAxMTcsXHJcbiAgICAgIFwiaGVpZ2h0XCI6IDE1NixcclxuICAgICAgXCJzaXplXCI6IDMuNzQsXHJcbiAgICAgIFwicGF0aFwiOiBudWxsLFxyXG4gICAgICBcInVybFwiOiBcIi91cGxvYWRzL3RodW1ibmFpbF9rYXBpdGFuX2FtZXJ5a2Ffc3Ryb2pfMzNmOWQ4M2NlMy5qcGdcIlxyXG4gICAgfSxcclxuICAgIFwieGxhcmdlXCI6IHtcclxuICAgICAgXCJuYW1lXCI6IFwieGxhcmdlX2thcGl0YW4tYW1lcnlrYS1zdHJvai5qcGdcIixcclxuICAgICAgXCJoYXNoXCI6IFwieGxhcmdlX2thcGl0YW5fYW1lcnlrYV9zdHJval8zM2Y5ZDgzY2UzXCIsXHJcbiAgICAgIFwiZXh0XCI6IFwiLmpwZ1wiLFxyXG4gICAgICBcIm1pbWVcIjogXCJpbWFnZS9qcGVnXCIsXHJcbiAgICAgIFwid2lkdGhcIjogMTI5MSxcclxuICAgICAgXCJoZWlnaHRcIjogMTcyMCxcclxuICAgICAgXCJzaXplXCI6IDExMS4zNSxcclxuICAgICAgXCJwYXRoXCI6IG51bGwsXHJcbiAgICAgIFwidXJsXCI6IFwiL3VwbG9hZHMveGxhcmdlX2thcGl0YW5fYW1lcnlrYV9zdHJval8zM2Y5ZDgzY2UzLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAgXCJsYXJnZVwiOiB7XHJcbiAgICAgIFwibmFtZVwiOiBcImxhcmdlX2thcGl0YW4tYW1lcnlrYS1zdHJvai5qcGdcIixcclxuICAgICAgXCJoYXNoXCI6IFwibGFyZ2Vfa2FwaXRhbl9hbWVyeWthX3N0cm9qXzMzZjlkODNjZTNcIixcclxuICAgICAgXCJleHRcIjogXCIuanBnXCIsXHJcbiAgICAgIFwibWltZVwiOiBcImltYWdlL2pwZWdcIixcclxuICAgICAgXCJ3aWR0aFwiOiA5MDEsXHJcbiAgICAgIFwiaGVpZ2h0XCI6IDEyMDAsXHJcbiAgICAgIFwic2l6ZVwiOiA2Ni42OSxcclxuICAgICAgXCJwYXRoXCI6IG51bGwsXHJcbiAgICAgIFwidXJsXCI6IFwiL3VwbG9hZHMvbGFyZ2Vfa2FwaXRhbl9hbWVyeWthX3N0cm9qXzMzZjlkODNjZTMuanBnXCJcclxuICAgIH0sXHJcbiAgICBcIm1lZGl1bVwiOiB7XHJcbiAgICAgIFwibmFtZVwiOiBcIm1lZGl1bV9rYXBpdGFuLWFtZXJ5a2Etc3Ryb2ouanBnXCIsXHJcbiAgICAgIFwiaGFzaFwiOiBcIm1lZGl1bV9rYXBpdGFuX2FtZXJ5a2Ffc3Ryb2pfMzNmOWQ4M2NlM1wiLFxyXG4gICAgICBcImV4dFwiOiBcIi5qcGdcIixcclxuICAgICAgXCJtaW1lXCI6IFwiaW1hZ2UvanBlZ1wiLFxyXG4gICAgICBcIndpZHRoXCI6IDY0NixcclxuICAgICAgXCJoZWlnaHRcIjogODYwLFxyXG4gICAgICBcInNpemVcIjogNDAuNzMsXHJcbiAgICAgIFwicGF0aFwiOiBudWxsLFxyXG4gICAgICBcInVybFwiOiBcIi91cGxvYWRzL21lZGl1bV9rYXBpdGFuX2FtZXJ5a2Ffc3Ryb2pfMzNmOWQ4M2NlMy5qcGdcIlxyXG4gICAgfSxcclxuICAgIFwic21hbGxcIjoge1xyXG4gICAgICBcIm5hbWVcIjogXCJzbWFsbF9rYXBpdGFuLWFtZXJ5a2Etc3Ryb2ouanBnXCIsXHJcbiAgICAgIFwiaGFzaFwiOiBcInNtYWxsX2thcGl0YW5fYW1lcnlrYV9zdHJval8zM2Y5ZDgzY2UzXCIsXHJcbiAgICAgIFwiZXh0XCI6IFwiLmpwZ1wiLFxyXG4gICAgICBcIm1pbWVcIjogXCJpbWFnZS9qcGVnXCIsXHJcbiAgICAgIFwid2lkdGhcIjogNDUxLFxyXG4gICAgICBcImhlaWdodFwiOiA2MDAsXHJcbiAgICAgIFwic2l6ZVwiOiAyNC40MixcclxuICAgICAgXCJwYXRoXCI6IG51bGwsXHJcbiAgICAgIFwidXJsXCI6IFwiL3VwbG9hZHMvc21hbGxfa2FwaXRhbl9hbWVyeWthX3N0cm9qXzMzZjlkODNjZTMuanBnXCJcclxuICAgIH0sXHJcbiAgICBcInhzbWFsbFwiOiB7XHJcbiAgICAgIFwibmFtZVwiOiBcInhzbWFsbF9rYXBpdGFuLWFtZXJ5a2Etc3Ryb2ouanBnXCIsXHJcbiAgICAgIFwiaGFzaFwiOiBcInhzbWFsbF9rYXBpdGFuX2FtZXJ5a2Ffc3Ryb2pfMzNmOWQ4M2NlM1wiLFxyXG4gICAgICBcImV4dFwiOiBcIi5qcGdcIixcclxuICAgICAgXCJtaW1lXCI6IFwiaW1hZ2UvanBlZ1wiLFxyXG4gICAgICBcIndpZHRoXCI6IDQ4LFxyXG4gICAgICBcImhlaWdodFwiOiA2NCxcclxuICAgICAgXCJzaXplXCI6IDEuMzEsXHJcbiAgICAgIFwicGF0aFwiOiBudWxsLFxyXG4gICAgICBcInVybFwiOiBcIi91cGxvYWRzL3hzbWFsbF9rYXBpdGFuX2FtZXJ5a2Ffc3Ryb2pfMzNmOWQ4M2NlMy5qcGdcIlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgXCJoYXNoXCI6IFwia2FwaXRhbl9hbWVyeWthX3N0cm9qXzMzZjlkODNjZTNcIixcclxuICBcImV4dFwiOiBcIi5qcGdcIixcclxuICBcIm1pbWVcIjogXCJpbWFnZS9qcGVnXCIsXHJcbiAgXCJzaXplXCI6IDEwNC42NCxcclxuICBcInVybFwiOiBcIi91cGxvYWRzL2thcGl0YW5fYW1lcnlrYV9zdHJval8zM2Y5ZDgzY2UzLmpwZ1wiLFxyXG4gIFwicHJldmlld1VybFwiOiBudWxsLFxyXG4gIFwicHJvdmlkZXJcIjogXCJsb2NhbFwiLFxyXG4gIFwicHJvdmlkZXJfbWV0YWRhdGFcIjogbnVsbCxcclxuICBcImNyZWF0ZWRfYXRcIjogXCIyMDIxLTEwLTExVDE3OjE4OjQ5LjAwMFpcIixcclxuICBcInVwZGF0ZWRfYXRcIjogXCIyMDIxLTEwLTExVDE3OjE4OjUwLjAwMFpcIlxyXG59XVxyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9IZXJvU2xpZGVyJzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG11aS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEJveCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZUhlcm8oeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBjb21wb25lbnQ9J3NlY3Rpb24nIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cclxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD0nbGcnIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9ID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgc2VjdGlvbjoge1xyXG4gICAgLi4udGhlbWUuc2VjdGlvbnMuc2VjdGlvbixcclxuICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoIDEwOS42ZGVnLCAgcmdiYSg2MSwyNDUsMTY3LDEpIDExLjIlLCByZ2JhKDksMTExLDIyNCwxKSA5MS4xJSApOycsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgLi4udGhlbWUuY29udGFpbmVyXHJcbiAgfSxcclxufSkpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG11aS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBHcmlkLCBCb3gsIFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgR2VuZGVyQnV0dG9ucyBmcm9tICcuLi9HZW5kZXJCdXR0b25zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVIZXJvQ29udGVudCgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IHNjcm9sbFRvRWxlbWVudCA9IGFzeW5jICgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdzJykuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZFxyXG4gICAgICBjb250YWluZXIgaXRlbVxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9ufVxyXG4gICAgICBzbT17MTJ9IG1kPXs2fVxyXG4gICAgPlxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCcgY29tcG9uZW50PSdoMicgY2xhc3NOYW1lPXtjbGFzc2VzLnN1YkhlYWRpbmd9ID5cclxuICAgICAgICBKYWtpZWdvIHN0cm9qdSBzenVrYXN6P1xyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD0ncCcgY2xhc3NOYW1lPXtjbGFzc2VzLnN1YkhlYWRpbmd9ID5cclxuICAgICAgICBTdXBlcmJvaGF0ZXJvd2llLCByeWNlcnplLCBwb3N0YWNpZSB6IGtyZXNrw7N3ZWssIG9yYXogd2llbGUgaW5ueWNoLi4uXHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgIDxHZW5kZXJCdXR0b25zIC8+XHJcblxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCcgY29tcG9uZW50PSdoMicgY2xhc3NOYW1lPXtjbGFzc2VzLnN1YkhlYWRpbmd9ID5cclxuICAgICAgICBTcHJhd2TFuiBub3dvxZtjaVxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICA8Qm94IGNvbXBvbmVudD0nZGl2Jz5cclxuICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMuY3RhQnV0dG9ufSBvbkNsaWNrPXtzY3JvbGxUb0VsZW1lbnR9Pk5vd2/Fm2NpPC9hPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvR3JpZD5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICBzdWJIZWFkaW5nOiB7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5ncmV5WzUwXSxcclxuICB9LFxyXG4gIGN0YUJ1dHRvbjoge1xyXG4gICAgLi4udGhlbWUuY3VzdG9tQnV0dG9ucy5wcmltYXJ5LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMC43cmVtJ1xyXG4gICAgfSxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmdyZXlbNTBdLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcidcclxuICB9LFxyXG4gIGFjdGlvbjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBvcmRlcjogMixcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgb3JkZXI6IDEsXHJcbiAgICAgIG1hcmdpblRvcDogJzVyZW0nXHJcbiAgICB9LFxyXG4gICAgJyYgPiAqOm5vdCg6bGFzdC1jaGlsZCknOiB7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTogJzFyZW0nLFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnMS4ycmVtJ1xyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0sXHJcbn0pKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSG9tZUhlcm9Db250ZW50JzsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Ib21lSGVybyc7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbXVpL3N0eWxlcyc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQm94LCBUeXBvZ3JhcGh5LCBDaXJjdWxhclByb2dyZXNzIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExpc3RNb2RlbENhcmRzIGZyb20gJy4uLy4uL0xpc3RNb2RlbHNDYXJkcyc7XHJcbmltcG9ydCB7IGdldE1vZGVsc0FwaSB9IGZyb20gJy4uLy4uLy4uL2FwaS9tb2RlbCc7XHJcbmltcG9ydCB7IGxpbWl0UGVyUGFnZSwgZ2V0U3RhcnRJdGVtIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZmV0Y2gnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmljZXMoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbbW9kZWxzLCBzZXRNb2RlbHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkZXIsIHNldExvYWRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkZXIodHJ1ZSk7XHJcbiAgICAgIHF1ZXJ5LmxpbWl0ID0gNjtcclxuICAgICAgY29uc3QgbGltaXQgPSBsaW1pdFBlclBhZ2UocXVlcnkpO1xyXG4gICAgICBjb25zdCBwYWdlID0gZ2V0U3RhcnRJdGVtKHF1ZXJ5KTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0TW9kZWxzQXBpKHtcclxuICAgICAgICBzb3J0OiAnY3JlYXRlZF9hdDpERVNDJyxcclxuICAgICAgICBsaW1pdCxcclxuICAgICAgICBwYWdlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2V0TW9kZWxzKHJlc3BvbnNlIHx8IFtdKTtcclxuICAgICAgc2V0TG9hZGVyKGZhbHNlKTtcclxuICAgIH0pKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBjb21wb25lbnQ9J3NlY3Rpb24nIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufSBpZD0nbmV3cyc+XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9J2xnJyBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMycgY29tcG9uZW50PSdoMycgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25IZWFkZXJ9Pk5vd2/Fm2NpPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD0neGwnIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2FkZXJ9ID5cclxuICAgICAgICB7bG9hZGVyXHJcbiAgICAgICAgICA/IDxDaXJjdWxhclByb2dyZXNzIC8+XHJcbiAgICAgICAgICA6IDxMaXN0TW9kZWxDYXJkcyBtb2RlbHM9e21vZGVsc30gLz5cclxuICAgICAgICB9XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgc2VjdGlvbjoge1xyXG4gICAgLi4udGhlbWUuc2VjdGlvbnMuc2VjdGlvbixcclxuICAgIC8vIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZTZiOGIgMzAlLCAjZmY4ZTUzIDkwJSknLFxyXG4gICAgYmFja2dyb3VuZDogJ3JhZGlhbC1ncmFkaWVudCggY2lyY2xlIGZhcnRoZXN0LWNvcm5lciBhdCAxMCUgMjAlLCAgcmdiYSgxNzEsMTAyLDI1NSwxKSAwJSwgcmdiYSgxMTYsMTgyLDI0NywxKSA5MCUgKScsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmdyZXlbNTBdXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIC4uLnRoZW1lLmNvbnRhaW5lcixcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXHJcbiAgfSxcclxuICBsb2FkZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICB9XHJcbn0pKTtcclxuXHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1NlcnZpY2VzJzsiLCJpbXBvcnQgeyBtYWtlU3R5bGVzLCB3aXRoU3R5bGVzIH0gZnJvbSAnQG11aS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBCb3gsIFRvb2x0aXAgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpemVMaXN0KHsgbW9kZWwgfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnNpemVMaXN0fT5cclxuICAgICAge1xyXG4gICAgICAgIF8ubWFwKG1vZGVsLnNpemVzLCBzID0+IChcclxuICAgICAgICAgIDxIdG1sVG9vbHRpcFxyXG4gICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgPGVtPntzLm9waXN9PC9lbT5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBrZXk9e3MudXJsfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBrZXk9e3MudXJsfSBjbGFzc05hbWU9e2NsYXNzZXMuc2l6ZX0+e3Mucm96bWlhcn08L3NwYW4+XHJcbiAgICAgICAgICA8L0h0bWxUb29sdGlwPlxyXG4gICAgICAgICkpXHJcbiAgICAgIH1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBIdG1sVG9vbHRpcCA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHRvb2x0aXA6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmNWY1ZjknLFxyXG4gICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcclxuICAgIG1heFdpZHRoOiAyMjAsXHJcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDEyKSxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZGFkZGU5JyxcclxuICB9LFxyXG59KSkoVG9vbHRpcCk7XHJcblxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgc2l6ZToge1xyXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5ncmV5WzUwMF19YCxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSlcclxuICB9LFxyXG4gIHNpemVMaXN0OiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAnJiA+IDpub3QoOmxhc3QtY2hpbGQpJzoge1xyXG4gICAgICBtYXJnaW5SaWdodDogJzFweCdcclxuICAgIH1cclxuICB9LFxyXG59KSk7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldEdlbmRlcnNBcGkgfSBmcm9tICcuLi9hcGkvZ2VuZGVyJztcclxuaW1wb3J0IHsgZ2V0Q2F0ZWdvcmllc0FwaSB9IGZyb20gJy4uL2FwaS9jYXRlZ29yaWVzJztcclxuaW1wb3J0IHsgbWVudSB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXBwV3JhcHBlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2dlbmRlcnMsIHNldEdlbmRlcnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBzdGF0ZSA9IHsgbWVudSB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKF8uc2l6ZShzdGF0ZS5jYXRlZ29yaWVzKSA9PT0gMCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0Q2F0ZWdvcmllc0FwaSgpO1xyXG4gICAgICAgIHNldENhdGVnb3JpZXMocmVzcG9uc2UgfHwgW10pO1xyXG4gICAgICB9XHJcbiAgICB9KSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChfLnNpemUoc3RhdGUuZ2VuZGVycykgPT09IDApIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEdlbmRlcnNBcGkoKTtcclxuICAgICAgICBzZXRHZW5kZXJzKHJlc3BvbnNlIHx8IFtdKVxyXG4gICAgICB9XHJcbiAgICB9KSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgc3RhdGUuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXM7XHJcbiAgc3RhdGUuZ2VuZGVycyA9IGdlbmRlcnM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwcENvbnRleHQoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbn0iLCJpbXBvcnQgeyBCb3ggfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtdWkvc3R5bGVzJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFzaWNMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYXBwfT5cclxuICAgICAgPEJveCBjb21wb25lbnQ9J2hlYWRlcicgY2xhc3NOYW1lPXtjbGFzc2VzLnRvcEJhcn0+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8L0JveD5cclxuXHJcbiAgICAgIDxCb3ggY29tcG9uZW50PSdtYWluJz5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvQm94PlxyXG5cclxuICAgICAgPEJveCBjb21wb25lbnQ9J2Zvb3RlcicgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIGFwcDoge1xyXG4gICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBib3hTaXppbmc6ICdjb250ZW50LWJveCdcclxuICB9LFxyXG4gIHRvcEJhcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s0XVxyXG4gIH0sXHJcbiAgZm9vdGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzRdLFxyXG4gICAgbWFyZ2luVG9wOiAnYXV0bydcclxuICB9LFxyXG4gIG1haW46IHtcclxuICAgIGZsZXg6IDEsXHJcbiAgICBtYXhXaWR0aDogJzEwMCUnXHJcbiAgfSxcclxufSkpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEltYWdlMTtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2hlYWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xudmFyIF90b0Jhc2U2NCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3RvLWJhc2UtNjRcIik7XG52YXIgX2ltYWdlQ29uZmlnID0gcmVxdWlyZShcIi4uL3NlcnZlci9pbWFnZS1jb25maWdcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gICAgZm9yKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24oc3ltKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IHtcbiAgICB9O1xuICAgIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuY29uc3QgbG9hZGVkSW1hZ2VVUkxzID0gbmV3IFNldCgpO1xuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZ2xvYmFsLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWU7XG59XG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFtcbiAgICAnbGF6eScsXG4gICAgJ2VhZ2VyJyxcbiAgICB1bmRlZmluZWRcbl07XG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcChbXG4gICAgW1xuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgIGRlZmF1bHRMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2ltZ2l4JyxcbiAgICAgICAgaW1naXhMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2Nsb3VkaW5hcnknLFxuICAgICAgICBjbG91ZGluYXJ5TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdha2FtYWknLFxuICAgICAgICBha2FtYWlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2N1c3RvbScsXG4gICAgICAgIGN1c3RvbUxvYWRlclxuICAgIF0sIFxuXSk7XG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAgICdmaWxsJyxcbiAgICAnZml4ZWQnLFxuICAgICdpbnRyaW5zaWMnLFxuICAgICdyZXNwb25zaXZlJyxcbiAgICB1bmRlZmluZWQsIFxuXTtcbmZ1bmN0aW9uIGlzU3RhdGljUmVxdWlyZShzcmMpIHtcbiAgICByZXR1cm4gc3JjLmRlZmF1bHQgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1hZ2VEYXRhKHNyYykge1xuICAgIHJldHVybiBzcmMuc3JjICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNyYyA9PT0gJ29iamVjdCcgJiYgKGlzU3RhdGljUmVxdWlyZShzcmMpIHx8IGlzU3RhdGljSW1hZ2VEYXRhKHNyYykpO1xufVxuY29uc3QgeyBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMgLCBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzICwgbG9hZGVyOiBjb25maWdMb2FkZXIgLCBwYXRoOiBjb25maWdQYXRoICwgZG9tYWluczogY29uZmlnRG9tYWlucyAsICB9ID0gcHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgfHwgX2ltYWdlQ29uZmlnLmltYWdlQ29uZmlnRGVmYXVsdDtcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbXG4gICAgLi4uY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgLi4uY29uZmlnSW1hZ2VTaXplc1xuXTtcbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmFsbFNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmZ1bmN0aW9uIGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcykge1xuICAgIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgICAgIC8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0V2lkdGhSZSA9IC8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nO1xuICAgICAgICBjb25zdCBwZXJjZW50U2l6ZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBtYXRjaDsgbWF0Y2ggPSB2aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7IG1hdGNoKXtcbiAgICAgICAgICAgIHBlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBlcmNlbnRTaXplcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHNtYWxsZXN0UmF0aW8gPSBNYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpICogMC4wMTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcy5maWx0ZXIoKHMpPT5zID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8IGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHdpZHRocyA9IFtcbiAgICAgICAgLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgICAgW1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovIFxuICAgICAgICBdLm1hcCgodyk9PmFsbFNpemVzLmZpbmQoKHApPT5wID49IHdcbiAgICAgICAgICAgICkgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgKSksIFxuICAgIF07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGhzLFxuICAgICAgICBraW5kOiAneCdcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7IHNyYyAsIHVub3B0aW1pemVkICwgbGF5b3V0ICwgd2lkdGggLCBxdWFsaXR5ICwgc2l6ZXMgLCBsb2FkZXIgIH0pIHtcbiAgICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc2l6ZXM6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB7IHdpZHRocyAsIGtpbmQgIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpO1xuICAgIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICAgICAgc3JjU2V0OiB3aWR0aHMubWFwKCh3LCBpKT0+YCR7bG9hZGVyKHtcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgICAgICB3aWR0aDogd1xuICAgICAgICAgICAgfSl9ICR7a2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxfSR7a2luZH1gXG4gICAgICAgICkuam9pbignLCAnKSxcbiAgICAgICAgLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbiAgICAgICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgICAgICAvLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4gICAgICAgIC8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4gICAgICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgICAgICAvLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbiAgICAgICAgc3JjOiBsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aHNbbGFzdF1cbiAgICAgICAgfSlcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0SW50KHgpIHtcbiAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh4LCAxMCk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpIHtcbiAgICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtcbiAgICBpZiAobG9hZCkge1xuICAgICAgICByZXR1cm4gbG9hZChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgIHJvb3Q6IGNvbmZpZ1BhdGhcbiAgICAgICAgfSwgbG9hZGVyUHJvcHMpKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO1xufVxuLy8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmMsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgaWYgKCFpbWcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVMb2FkID0gKCk9PntcbiAgICAgICAgaWYgKCFpbWcuc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSAnZGVjb2RlJyBpbiBpbWcgPyBpbWcuZGVjb2RlKCkgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIHAuY2F0Y2goKCk9PntcbiAgICAgICAgICAgIH0pLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuZmlsdGVyID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxvYWRlZEltYWdlVVJMcy5hZGQoc3JjKTtcbiAgICAgICAgICAgICAgICBpZiAob25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBuYXR1cmFsV2lkdGggLCBuYXR1cmFsSGVpZ2h0ICB9ID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICAvLyBQYXNzIGJhY2sgcmVhZC1vbmx5IHByaW1pdGl2ZSB2YWx1ZXMgYnV0IG5vdCB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5kZXJseWluZyBET00gZWxlbWVudCBiZWNhdXNlIGl0IGNvdWxkIGJlIG1pc3VzZWQuXG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZGluZ0NvbXBsZXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdHVyYWxIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgICAgIGlmICgocmVmID0gaW1nLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGdldENvbXB1dGVkU3R5bGUoaW1nLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScgJiYgcGFyZW50LmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtYXkgbm90IHJlbmRlciBwcm9wZXJseSBhcyBhIGNoaWxkIG9mIGEgZmxleCBjb250YWluZXIuIENvbnNpZGVyIHdyYXBwaW5nIHRoZSBpbWFnZSB3aXRoIGEgZGl2IHRvIGNvbmZpZ3VyZSB0aGUgd2lkdGguYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpbGwnICYmIHBhcmVudC5wb3NpdGlvbiAhPT0gJ3JlbGF0aXZlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtYXkgbm90IHJlbmRlciBwcm9wZXJseSB3aXRoIGEgcGFyZW50IHVzaW5nIHBvc2l0aW9uOlwiJHtwYXJlbnQucG9zaXRpb259XCIuIENvbnNpZGVyIGNoYW5naW5nIHRoZSBwYXJlbnQgc3R5bGUgdG8gcG9zaXRpb246XCJyZWxhdGl2ZVwiIHdpdGggYSB3aWR0aCBhbmQgaGVpZ2h0LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChpbWcuY29tcGxldGUpIHtcbiAgICAgICAgLy8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIGRlc2lyZWQgYmVoYXZpb3IgZm9yIG5vdywgYW5kIHdpbGwgYmUgcmV2aXNpdGVkIHdoZW4gZXJyb3JcbiAgICAgICAgLy8gaGFuZGxpbmcgaXMgd29ya2VkIG9uIGZvciB0aGUgaW1hZ2UgY29tcG9uZW50IGl0c2VsZi5cbiAgICAgICAgaGFuZGxlTG9hZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGltZy5vbmxvYWQgPSBoYW5kbGVMb2FkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIEltYWdlMShfcGFyYW0pIHtcbiAgICB2YXIgeyBzcmMgLCBzaXplcyAsIHVub3B0aW1pemVkID1mYWxzZSAsIHByaW9yaXR5ID1mYWxzZSAsIGxvYWRpbmcgLCBsYXp5Qm91bmRhcnkgPScyMDBweCcgLCBjbGFzc05hbWUgLCBxdWFsaXR5ICwgd2lkdGggLCBoZWlnaHQgLCBvYmplY3RGaXQgLCBvYmplY3RQb3NpdGlvbiAsIG9uTG9hZGluZ0NvbXBsZXRlICwgbG9hZGVyID1kZWZhdWx0SW1hZ2VMb2FkZXIgLCBwbGFjZWhvbGRlciA9J2VtcHR5JyAsIGJsdXJEYXRhVVJMICB9ID0gX3BhcmFtLCBhbGwgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3BhcmFtLCBbXCJzcmNcIiwgXCJzaXplc1wiLCBcInVub3B0aW1pemVkXCIsIFwicHJpb3JpdHlcIiwgXCJsb2FkaW5nXCIsIFwibGF6eUJvdW5kYXJ5XCIsIFwiY2xhc3NOYW1lXCIsIFwicXVhbGl0eVwiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwib2JqZWN0Rml0XCIsIFwib2JqZWN0UG9zaXRpb25cIiwgXCJvbkxvYWRpbmdDb21wbGV0ZVwiLCBcImxvYWRlclwiLCBcInBsYWNlaG9sZGVyXCIsIFwiYmx1ckRhdGFVUkxcIl0pO1xuICAgIGxldCByZXN0ID0gYWxsO1xuICAgIGxldCBsYXlvdXQgPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnO1xuICAgIGlmICgnbGF5b3V0JyBpbiByZXN0KSB7XG4gICAgICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXQ7XG4gICAgICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICAgICAgZGVsZXRlIHJlc3RbJ2xheW91dCddO1xuICAgIH1cbiAgICBsZXQgc3RhdGljU3JjID0gJyc7XG4gICAgaWYgKGlzU3RhdGljSW1wb3J0KHNyYykpIHtcbiAgICAgICAgY29uc3Qgc3RhdGljSW1hZ2VEYXRhID0gaXNTdGF0aWNSZXF1aXJlKHNyYykgPyBzcmMuZGVmYXVsdCA6IHNyYztcbiAgICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgc3JjLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgYmx1ckRhdGFVUkwgPSBibHVyRGF0YVVSTCB8fCBzdGF0aWNJbWFnZURhdGEuYmx1ckRhdGFVUkw7XG4gICAgICAgIHN0YXRpY1NyYyA9IHN0YXRpY0ltYWdlRGF0YS5zcmM7XG4gICAgICAgIGlmICghbGF5b3V0IHx8IGxheW91dCAhPT0gJ2ZpbGwnKSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBoZWlnaHQgfHwgc3RhdGljSW1hZ2VEYXRhLmhlaWdodDtcbiAgICAgICAgICAgIHdpZHRoID0gd2lkdGggfHwgc3RhdGljSW1hZ2VEYXRhLndpZHRoO1xuICAgICAgICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0IHx8ICFzdGF0aWNJbWFnZURhdGEud2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNyYyA9IHR5cGVvZiBzcmMgPT09ICdzdHJpbmcnID8gc3JjIDogc3RhdGljU3JjO1xuICAgIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKTtcbiAgICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KTtcbiAgICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpO1xuICAgIGxldCBpc0xhenkgPSAhcHJpb3JpdHkgJiYgKGxvYWRpbmcgPT09ICdsYXp5JyB8fCB0eXBlb2YgbG9hZGluZyA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSB8fCBzcmMuc3RhcnRzV2l0aCgnYmxvYjonKSkge1xuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuICAgICAgICB1bm9wdGltaXplZCA9IHRydWU7XG4gICAgICAgIGlzTGF6eSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9hZGVkSW1hZ2VVUkxzLmhhcyhzcmMpKSB7XG4gICAgICAgIGlzTGF6eSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTih3aWR0aEludCkgfHwgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4oaGVpZ2h0SW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwid2lkdGhcIiBvciBcImhlaWdodFwiIHByb3BlcnR5LiBUaGVzZSBzaG91bGQgYmUgbnVtZXJpYyB2YWx1ZXMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnICYmICh3aWR0aCB8fCBoZWlnaHQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgYW5kIFwibGF5b3V0PSdmaWxsJ1wiIGhhcyB1bnVzZWQgcHJvcGVydGllcyBhc3NpZ25lZC4gUGxlYXNlIHJlbW92ZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJpb3JpdHkgJiYgbG9hZGluZyA9PT0gJ2xhenknKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgIGlmIChsYXlvdXQgIT09ICdmaWxsJyAmJiAod2lkdGhJbnQgfHwgMCkgKiAoaGVpZ2h0SW50IHx8IDApIDwgMTYwMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBzbWFsbGVyIHRoYW4gNDB4NDAuIENvbnNpZGVyIHJlbW92aW5nIHRoZSBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWJsdXJEYXRhVVJMKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgVkFMSURfQkxVUl9FWFQgPSBbXG4gICAgICAgICAgICAgICAgICAgICdqcGVnJyxcbiAgICAgICAgICAgICAgICAgICAgJ3BuZycsXG4gICAgICAgICAgICAgICAgICAgICd3ZWJwJ1xuICAgICAgICAgICAgICAgIF0gLy8gc2hvdWxkIG1hdGNoIG5leHQtaW1hZ2UtbG9hZGVyXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgncmVmJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJyZWZcIiBwcm9wZXJ0eS4gQ29uc2lkZXIgdXNpbmcgdGhlIFwib25Mb2FkaW5nQ29tcGxldGVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnc3R5bGUnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInN0eWxlXCIgcHJvcGVydHkuIFBsZWFzZSB1c2UgdGhlIFwiY2xhc3NOYW1lXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCkgKyAxMDA7XG4gICAgICAgIGlmICghdW5vcHRpbWl6ZWQgJiYgIWxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB3aWR0aDogcmFuZCxcbiAgICAgICAgICAgIHF1YWxpdHk6IDc1XG4gICAgICAgIH0pLmluY2x1ZGVzKHJhbmQudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYSBcImxvYWRlclwiIHByb3BlcnR5IHRoYXQgZG9lcyBub3QgaW1wbGVtZW50IHdpZHRoLiBQbGVhc2UgaW1wbGVtZW50IGl0IG9yIHVzZSB0aGUgXCJ1bm9wdGltaXplZFwiIHByb3BlcnR5IGluc3RlYWQuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXItd2lkdGhgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBbc2V0UmVmLCBpc0ludGVyc2VjdGVkXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiBsYXp5Qm91bmRhcnksXG4gICAgICAgIGRpc2FibGVkOiAhaXNMYXp5XG4gICAgfSk7XG4gICAgY29uc3QgaXNWaXNpYmxlID0gIWlzTGF6eSB8fCBpc0ludGVyc2VjdGVkO1xuICAgIGxldCB3cmFwcGVyU3R5bGU7XG4gICAgbGV0IHNpemVyU3R5bGU7XG4gICAgbGV0IHNpemVyU3ZnO1xuICAgIGxldCBpbWdTdHlsZSA9IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG1heEhlaWdodDogJzEwMCUnLFxuICAgICAgICBvYmplY3RGaXQsXG4gICAgICAgIG9iamVjdFBvc2l0aW9uXG4gICAgfTtcbiAgICBjb25zdCBibHVyU3R5bGUgPSBwbGFjZWhvbGRlciA9PT0gJ2JsdXInID8ge1xuICAgICAgICBmaWx0ZXI6ICdibHVyKDIwcHgpJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IG9iamVjdEZpdCB8fCAnY292ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWAsXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogb2JqZWN0UG9zaXRpb24gfHwgJzAlIDAlJ1xuICAgIH0gOiB7XG4gICAgfTtcbiAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICAgICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludDtcbiAgICAgICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgO1xuICAgICAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YDtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBpbWdBdHRyaWJ1dGVzID0ge1xuICAgICAgICBzcmM6ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgc2l6ZXM6IHVuZGVmaW5lZFxuICAgIH07XG4gICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgIGxvYWRlclxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHNyY1N0cmluZyA9IHNyYztcbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHdyYXBwZXJTdHlsZVxuICAgIH0sIHNpemVyU3R5bGUgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogc2l6ZXJTdHlsZVxuICAgIH0sIHNpemVyU3ZnID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICBwYWRkaW5nOiAwXG4gICAgICAgIH0sXG4gICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgICAgICBzcmM6IGBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7KDAsIF90b0Jhc2U2NCkudG9CYXNlNjQoc2l6ZXJTdmcpfWBcbiAgICB9KSA6IG51bGwpIDogbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGltZ0F0dHJpYnV0ZXMsIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogbGF5b3V0LFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgcmVmOiAoaW1nKT0+e1xuICAgICAgICAgICAgc2V0UmVmKGltZyk7XG4gICAgICAgICAgICBoYW5kbGVMb2FkaW5nKGltZywgc3JjU3RyaW5nLCBsYXlvdXQsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgfSwgaW1nU3R5bGUsIGJsdXJTdHlsZSlcbiAgICB9KSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgc3JjLFxuICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgbGF5b3V0LFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgIHNpemVzLFxuICAgICAgICBsb2FkZXJcbiAgICB9KSwge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiBsYXlvdXQsXG4gICAgICAgIHN0eWxlOiBpbWdTdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIGxvYWRpbmc6IGxvYWRpbmcgfHwgJ2xhenknXG4gICAgfSkpKSwgcHJpb3JpdHkgPyAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgIC8vXG4gICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICBrZXk6ICdfX25pbWctJyArIGltZ0F0dHJpYnV0ZXMuc3JjICsgaW1nQXR0cmlidXRlcy5zcmNTZXQgKyBpbWdBdHRyaWJ1dGVzLnNpemVzLFxuICAgICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgICBhczogXCJpbWFnZVwiLFxuICAgICAgICBocmVmOiBpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjLFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzcmNzZXQ6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0LFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNpemVzOiBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgfSkpIDogbnVsbCkpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYykge1xuICAgIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyYztcbn1cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/YXV0bz1mb3JtYXQmZml0PW1heCZ3PTMwMFxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfWApO1xuICAgIGNvbnN0IHBhcmFtcyA9IHVybC5zZWFyY2hQYXJhbXM7XG4gICAgcGFyYW1zLnNldCgnYXV0bycsIHBhcmFtcy5nZXQoJ2F1dG8nKSB8fCAnZm9ybWF0Jyk7XG4gICAgcGFyYW1zLnNldCgnZml0JywgcGFyYW1zLmdldCgnZml0JykgfHwgJ21heCcpO1xuICAgIHBhcmFtcy5zZXQoJ3cnLCBwYXJhbXMuZ2V0KCd3JykgfHwgd2lkdGgudG9TdHJpbmcoKSk7XG4gICAgaWYgKHF1YWxpdHkpIHtcbiAgICAgICAgcGFyYW1zLnNldCgncScsIHF1YWxpdHkudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIHJldHVybiB1cmwuaHJlZjtcbn1cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAgfSkge1xuICAgIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gO1xufVxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICAgIGNvbnN0IHBhcmFtcyA9IFtcbiAgICAgICAgJ2ZfYXV0bycsXG4gICAgICAgICdjX2xpbWl0JyxcbiAgICAgICAgJ3dfJyArIHdpZHRoLFxuICAgICAgICAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKVxuICAgIF07XG4gICAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLyc7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gO1xufVxuZnVuY3Rpb24gY3VzdG9tTG9hZGVyKHsgc3JjICB9KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIG1pc3NpbmcgXCJsb2FkZXJcIiBwcm9wLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyYCk7XG59XG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXTtcbiAgICAgICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpO1xuICAgICAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJyk7XG4gICAgICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oJywgJyl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICAgICAgICBsZXQgcGFyc2VkU3JjO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJiAhY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICsgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpO1xudmFyIF9yb3V0ZXIxID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgcHJlZmV0Y2hlZCA9IHtcbn07XG5mdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVybjtcbiAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjdXJMb2NhbGUgPSBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWU7XG59XG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCB7IHRhcmdldCAgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMjtcbn1cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKSB7XG4gICAgY29uc3QgeyBub2RlTmFtZSAgfSA9IGUuY3VycmVudFRhcmdldDtcbiAgICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCAmJiBhcy5pbmRleE9mKCcjJykgPj0gMCkge1xuICAgICAgICBzY3JvbGwgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICAgIHNoYWxsb3csXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgc2Nyb2xsXG4gICAgfSk7XG59XG5mdW5jdGlvbiBMaW5rKHByb3BzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGhyZWY6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wcyA9IE9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7XG4gICAgICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gPT0gbnVsbCB8fCB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGFzOiB0cnVlLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgICAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICAgICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgICAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgICAgICAgbG9jYWxlOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHMgPSBPYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO1xuICAgICAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmVwbGFjZScgfHwga2V5ID09PSAnc2Nyb2xsJyB8fCBrZXkgPT09ICdzaGFsbG93JyB8fCBrZXkgPT09ICdwYXNzSHJlZicgfHwga2V5ID09PSAncHJlZmV0Y2gnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgICAgY29uc3QgaGFzV2FybmVkID0gX3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtcbiAgICAgICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2U7XG4gICAgY29uc3Qgcm91dGVyID0gKDAsIF9yb3V0ZXIxKS51c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGhyZWYgLCBhcyAgfSA9IF9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9PntcbiAgICAgICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5ocmVmLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGFzOiBwcm9wcy5hcyA/ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmFzKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIH07XG4gICAgfSwgW1xuICAgICAgICByb3V0ZXIsXG4gICAgICAgIHByb3BzLmhyZWYsXG4gICAgICAgIHByb3BzLmFzXG4gICAgXSk7XG4gICAgbGV0IHsgY2hpbGRyZW4gLCByZXBsYWNlICwgc2hhbGxvdyAsIHNjcm9sbCAsIGxvY2FsZSAgfSA9IHByb3BzO1xuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNoaWxkcmVuID0gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBudWxsLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGxldCBjaGlsZDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiIFxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRSZWYgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZjtcbiAgICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46ICcyMDBweCdcbiAgICB9KTtcbiAgICBjb25zdCBzZXRSZWYgPSBfcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZihlbCk7XG4gICAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgY2hpbGRSZWYsXG4gICAgICAgIHNldEludGVyc2VjdGlvblJlZlxuICAgIF0pO1xuICAgIF9yZWFjdC5kZWZhdWx0LnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmICgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpO1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldO1xuICAgICAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgICAgIGxvY2FsZTogY3VyTG9jYWxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgYXMsXG4gICAgICAgIGhyZWYsXG4gICAgICAgIGlzVmlzaWJsZSxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBwLFxuICAgICAgICByb3V0ZXJcbiAgICBdKTtcbiAgICBjb25zdCBjaGlsZFByb3BzID0ge1xuICAgICAgICByZWY6IHNldFJlZixcbiAgICAgICAgb25DbGljazogKGUpPT57XG4gICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGUpPT57XG4gICAgICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTtcbiAgICAgICAgfVxuICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICBwcmlvcml0eTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChwcm9wcy5wYXNzSHJlZiB8fCBjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSB7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IHJvdXRlciAmJiByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiYgKDAsIF9yb3V0ZXIpLmdldERvbWFpbkxvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlcyk7XG4gICAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IGxvY2FsZURvbWFpbiB8fCAoMCwgX3JvdXRlcikuYWRkQmFzZVBhdGgoKDAsIF9yb3V0ZXIpLmFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKTtcbiAgICB9XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKSk7XG59XG52YXIgX2RlZmF1bHQgPSBMaW5rO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoO1xufVxuY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0ggPyAocGF0aCk9PntcbiAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO1xuICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nO1xuICAgIH1cbn0gOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEpO1xufTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubWFya0Fzc2V0RXJyb3IgPSBtYXJrQXNzZXRFcnJvcjtcbmV4cG9ydHMuaXNBc3NldEVycm9yID0gaXNBc3NldEVycm9yO1xuZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0ID0gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtcbmV4cG9ydHMuY3JlYXRlUm91dGVMb2FkZXIgPSBjcmVhdGVSb3V0ZUxvYWRlcjtcbnZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwO1xuZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksIG1hcCwgZ2VuZXJhdG9yKSB7XG4gICAgbGV0IGVudHJ5ID0gbWFwLmdldChrZXkpO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5mdXR1cmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7XG4gICAgfVxuICAgIGxldCByZXNvbHZlcjtcbiAgICBjb25zdCBwcm9tID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIHJlc29sdmVyID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgICBtYXAuc2V0KGtleSwgZW50cnkgPSB7XG4gICAgICAgIHJlc29sdmU6IHJlc29sdmVyLFxuICAgICAgICBmdXR1cmU6IHByb21cbiAgICB9KTtcbiAgICByZXR1cm4gZ2VuZXJhdG9yID8gZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpPT4ocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSlcbiAgICApIDogcHJvbTtcbn1cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspIHtcbiAgICB0cnkge1xuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICByZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkgfHwgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5jb25zdCBjYW5QcmVmZXRjaCA9IGhhc1ByZWZldGNoKCk7XG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLCBhcywgbGluaykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopPT57XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICAgICAgaWYgKGFzKSBsaW5rLmFzID0gYXM7XG4gICAgICAgIGxpbmsucmVsID0gYHByZWZldGNoYDtcbiAgICAgICAgbGluay5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIGxpbmsub25sb2FkID0gcmVzO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSByZWo7XG4gICAgICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfSk7XG59XG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7XG59XG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLCBzY3JpcHQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9ICgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcbiAgICAgICAgO1xuICAgICAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAgICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XG4gICAgICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSk7XG59XG4vLyBXZSB3YWl0IGZvciBwYWdlcyB0byBiZSBidWlsdCBpbiBkZXYgYmVmb3JlIHdlIHN0YXJ0IHRoZSByb3V0ZSB0cmFuc2l0aW9uXG4vLyB0aW1lb3V0IHRvIHByZXZlbnQgYW4gdW4tbmVjZXNzYXJ5IGhhcmQgbmF2aWdhdGlvbiBpbiBkZXZlbG9wbWVudC5cbmxldCBkZXZCdWlsZFByb21pc2U7XG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLCBtcywgZXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcC50aGVuKChyKT0+e1xuICAgICAgICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUocik7XG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIC8vIFdlIHdyYXAgdGhlc2UgY2hlY2tzIHNlcGFyYXRlbHkgZm9yIGJldHRlciBkZWFkLWNvZGUgZWxpbWluYXRpb24gaW5cbiAgICAgICAgLy8gcHJvZHVjdGlvbiBidW5kbGVzLlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgIChkZXZCdWlsZFByb21pc2UgfHwgUHJvbWlzZS5yZXNvbHZlKCkpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSB7XG4gICAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgfVxuICAgIGNvbnN0IG9uQnVpbGRNYW5pZmVzdCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO1xuICAgICAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKT0+e1xuICAgICAgICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7XG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgICAgICAgICBhc3NldFByZWZpeCArICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgKyBlbmNvZGVVUkkoKDAsIF9nZXRBc3NldFBhdGhGcm9tUm91dGUpLmRlZmF1bHQocm91dGUsICcuanMnKSksIFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgICAgICAgIGNzczogW11cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpPT57XG4gICAgICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoKGVudHJ5KT0+YXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuanMnKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmNzcycpXG4gICAgICAgICAgICApXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCkge1xuICAgIGNvbnN0IGVudHJ5cG9pbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGxvYWRlZFNjcmlwdHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgc3R5bGVTaGVldHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgcm91dGVzID0gbmV3IE1hcCgpO1xuICAgIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpIHtcbiAgICAgICAgbGV0IHByb20gPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgcHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKSB7XG4gICAgICAgIGxldCBwcm9tID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpO1xuICAgICAgICBpZiAocHJvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb207XG4gICAgICAgIH1cbiAgICAgICAgc3R5bGVTaGVldHMuc2V0KGhyZWYsIHByb20gPSBmZXRjaChocmVmKS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHRleHRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHdoZW5FbnRyeXBvaW50IChyb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FbnRyeXBvaW50IChyb3V0ZSwgZXhlY3V0ZSkge1xuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oKGZuKT0+Zm4oKVxuICAgICAgICAgICAgKS50aGVuKChleHBvcnRzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCB8fCBleHBvcnRzLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICwgKGVycik9Pih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS50aGVuKChpbnB1dCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpO1xuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpO1xuICAgICAgICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRSb3V0ZSAocm91dGUsIHByZWZldGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgcm91dGVzLCAoKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlRmlsZXNQcm9taXNlID0gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKHsgc2NyaXB0cyAsIGNzcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSkgPyBbXSA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSwgXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpPT4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRldkJ1aWxkUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlRmlsZXNQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlRmlsZXNQcm9taXNlLmZpbmFsbHkoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocm91dGVGaWxlc1Byb21pc2UsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHsgZW50cnlwb2ludCAsIHN0eWxlcyAgfSk9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlc1xuICAgICAgICAgICAgICAgICAgICB9LCBlbnRyeXBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXM7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHByZWZldGNoIChyb3V0ZSkge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgICAgICAgbGV0IGNuO1xuICAgICAgICAgICAgaWYgKGNuID0gbmF2aWdhdG9yLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKG91dHB1dCk9PlByb21pc2UuYWxsKGNhblByZWZldGNoID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpPT5wcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKVxuICAgICAgICAgICAgICAgICkgOiBbXSlcbiAgICAgICAgICAgICkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgICAoKT0+e1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndpdGhSb3V0ZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF93aXRoUm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5leHBvcnRzLnVzZVJvdXRlciA9IHVzZVJvdXRlcjtcbmV4cG9ydHMuY3JlYXRlUm91dGVyID0gY3JlYXRlUm91dGVyO1xuZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2UgPSBtYWtlUHVibGljUm91dGVySW5zdGFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIikpO1xudmFyIF9yb3V0ZXJDb250ZXh0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHRcIik7XG52YXIgX3dpdGhSb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHNpbmdsZXRvblJvdXRlciA9IHtcbiAgICByb3V0ZXI6IG51bGwsXG4gICAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICAgIHJlYWR5IChjYikge1xuICAgICAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncm91dGUnLFxuICAgICdxdWVyeScsXG4gICAgJ2FzUGF0aCcsXG4gICAgJ2NvbXBvbmVudHMnLFxuICAgICdpc0ZhbGxiYWNrJyxcbiAgICAnYmFzZVBhdGgnLFxuICAgICdsb2NhbGUnLFxuICAgICdsb2NhbGVzJyxcbiAgICAnZGVmYXVsdExvY2FsZScsXG4gICAgJ2lzUmVhZHknLFxuICAgICdpc1ByZXZpZXcnLFxuICAgICdpc0xvY2FsZURvbWFpbicsXG4gICAgJ2RvbWFpbkxvY2FsZXMnLCBcbl07XG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAgICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAgICdoYXNoQ2hhbmdlQ29tcGxldGUnLCBcbl07XG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAgICdwdXNoJyxcbiAgICAncmVwbGFjZScsXG4gICAgJ3JlbG9hZCcsXG4gICAgJ2JhY2snLFxuICAgICdwcmVmZXRjaCcsXG4gICAgJ2JlZm9yZVBvcFN0YXRlJywgXG5dO1xuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgICBnZXQgKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICB9XG59KTtcbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbiAgICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgICAgIGdldCAoKSB7XG4gICAgICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcbiAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7XG4gICAgfTtcbn0pO1xucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KT0+e1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e1xuICAgICAgICBfcm91dGVyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7XG4gICAgICAgICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyO1xuICAgICAgICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbmZ1bmN0aW9uIGdldFJvdXRlcigpIHtcbiAgICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbnZhciBfZGVmYXVsdCA9IHNpbmdsZXRvblJvdXRlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuZnVuY3Rpb24gdXNlUm91dGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVyKC4uLmFyZ3MpIHtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IF9yb3V0ZXIuZGVmYXVsdCguLi5hcmdzKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpPT5jYigpXG4gICAgKTtcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXTtcbiAgICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjtcbn1cbmZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpIHtcbiAgICBjb25zdCBfcm91dGVyMSA9IHJvdXRlcjtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICB9O1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe1xuICAgICAgICBpZiAodHlwZW9mIF9yb3V0ZXIxW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyMVtwcm9wZXJ0eV0pID8gW10gOiB7XG4gICAgICAgICAgICB9LCBfcm91dGVyMVtwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyMVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgICBpbnN0YW5jZS5ldmVudHMgPSBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIF9yb3V0ZXIxW2ZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlSW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7IHJvb3RNYXJnaW4gLCBkaXNhYmxlZCAgfSkge1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3QgdW5vYnNlcnZlID0gKDAsIF9yZWFjdCkudXNlUmVmKCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKGVsLCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKVxuICAgICAgICAgICAgLCB7XG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCk9PigwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykuY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzZXRSZWYsXG4gICAgICAgIHZpc2libGVcbiAgICBdO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgLCBvYnNlcnZlciAsIGVsZW1lbnRzICB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKSB7XG4gICAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJyc7XG4gICAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZCk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIG9ic2VydmVycy5zZXQoaWQsIGluc3RhbmNlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgb2JzZXJ2ZXIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gd2l0aFJvdXRlcjtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcykge1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHJvdXRlcjogKDAsIF9yb3V0ZXIpLnVzZVJvdXRlcigpXG4gICAgICAgIH0sIHByb3BzKSkpO1xuICAgIH1cbiAgICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgV2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xuICAgICAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYDtcbiAgICB9XG4gICAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0RG9tYWluTG9jYWxlID0gZ2V0RG9tYWluTG9jYWxlO1xuZXhwb3J0cy5hZGRMb2NhbGUgPSBhZGRMb2NhbGU7XG5leHBvcnRzLmRlbExvY2FsZSA9IGRlbExvY2FsZTtcbmV4cG9ydHMuaGFzQmFzZVBhdGggPSBoYXNCYXNlUGF0aDtcbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmV4cG9ydHMuaXNMb2NhbFVSTCA9IGlzTG9jYWxVUkw7XG5leHBvcnRzLmludGVycG9sYXRlQXMgPSBpbnRlcnBvbGF0ZUFzO1xuZXhwb3J0cy5yZXNvbHZlSHJlZiA9IHJlc29sdmVIcmVmO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7XG52YXIgX3JvdXRlTG9hZGVyID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7XG52YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGggPSByZXF1aXJlKFwiLi4vLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTtcbnZhciBfbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTtcbnZhciBfbWl0dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBfaXNEeW5hbWljID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbnZhciBfcGFyc2VSZWxhdGl2ZVVybCA9IHJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTtcbnZhciBfcXVlcnlzdHJpbmcgPSByZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTtcbnZhciBfcmVzb2x2ZVJld3JpdGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTtcbnZhciBfcm91dGVNYXRjaGVyID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbnZhciBfcm91dGVSZWdleCA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtcbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTtcbn1cbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgICAgICBjYW5jZWxsZWQ6IHRydWVcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCwgcHJlZml4KSB7XG4gICAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhdGggPT09ICcvJyA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KSA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWAgOiBwYXRoO1xufVxuZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsIGxvY2FsZSwgbG9jYWxlcywgZG9tYWluTG9jYWxlcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGxvY2FsZSA9IGxvY2FsZSB8fCAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKTtcbiAgICAgICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICAgICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRoIHx8ICcnfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCwgbG9jYWxlLCBkZWZhdWx0TG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXIgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLCBsb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fCBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKSA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICsgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCkge1xuICAgIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKTtcbiAgICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKTtcbiAgICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKTtcbn1cbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICAgIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKTtcbn1cbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO1xuICAgIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gO1xuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpIHtcbiAgICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSB8fCB1cmwuc3RhcnRzV2l0aCgnPycpKSByZXR1cm4gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICAgICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgICAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbik7XG4gICAgICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSkge1xuICAgIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnO1xuICAgIGNvbnN0IGR5bmFtaWNSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHM7XG4gICAgY29uc3QgZHluYW1pY01hdGNoZXMgPSAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8IC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeTtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlO1xuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO1xuICAgIGlmICghcGFyYW1zLmV2ZXJ5KChwYXJhbSk9PntcbiAgICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnO1xuICAgICAgICBjb25zdCB7IHJlcGVhdCAsIG9wdGlvbmFsICB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV07XG4gICAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWA7XG4gICAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJiAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID0gaW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCwgcmVwZWF0ID8gdmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgKHNlZ21lbnQpPT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgKS5qb2luKCcvJykgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKSB8fCAnLycpO1xuICAgIH0pKSB7XG4gICAgICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbiAgICAgICAgO1xuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zLFxuICAgICAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlXG4gICAgfTtcbn1cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSB7XG4gICAgY29uc3QgZmlsdGVyZWRRdWVyeSA9IHtcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmlsdGVyZWRRdWVyeTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlciwgaHJlZiwgcmVzb2x2ZUFzKSB7XG4gICAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgICBsZXQgYmFzZTtcbiAgICBsZXQgdXJsQXNTdHJpbmcgPSB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZik7XG4gICAgLy8gcmVwZWF0ZWQgc2xhc2hlcyBhbmQgYmFja3NsYXNoZXMgaW4gdGhlIFVSTCBhcmUgY29uc2lkZXJlZFxuICAgIC8vIGludmFsaWQgYW5kIHdpbGwgbmV2ZXIgbWF0Y2ggYSBOZXh0LmpzIHBhZ2UvZmlsZVxuICAgIGNvbnN0IHVybFByb3RvTWF0Y2ggPSB1cmxBc1N0cmluZy5tYXRjaCgvXlthLXpBLVpdezEsfTpcXC9cXC8vKTtcbiAgICBjb25zdCB1cmxBc1N0cmluZ05vUHJvdG8gPSB1cmxQcm90b01hdGNoID8gdXJsQXNTdHJpbmcuc3Vic3RyKHVybFByb3RvTWF0Y2hbMF0ubGVuZ3RoKSA6IHVybEFzU3RyaW5nO1xuICAgIGNvbnN0IHVybFBhcnRzID0gdXJsQXNTdHJpbmdOb1Byb3RvLnNwbGl0KCc/Jyk7XG4gICAgaWYgKCh1cmxQYXJ0c1swXSB8fCAnJykubWF0Y2goLyhcXC9cXC98XFxcXCkvKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIG5leHQvcm91dGVyOiAke3VybEFzU3RyaW5nfSwgcmVwZWF0ZWQgZm9yd2FyZC1zbGFzaGVzICgvLykgb3IgYmFja3NsYXNoZXMgXFxcXCBhcmUgbm90IHZhbGlkIGluIHRoZSBocmVmYCk7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRVcmwgPSAoMCwgX3V0aWxzKS5ub3JtYWxpemVSZXBlYXRlZFNsYXNoZXModXJsQXNTdHJpbmdOb1Byb3RvKTtcbiAgICAgICAgdXJsQXNTdHJpbmcgPSAodXJsUHJvdG9NYXRjaCA/IHVybFByb3RvTWF0Y2hbMF0gOiAnJykgKyBub3JtYWxpemVkVXJsO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICAgIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYmFzZSA9IG5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpID8gcm91dGVyLmFzUGF0aCA6IHJvdXRlci5wYXRobmFtZSwgJ2h0dHA6Ly9uJyk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICAvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuICAgICAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpO1xuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpO1xuICAgICAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJztcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiYgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmIHJlc29sdmVBcykge1xuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSAoMCwgX3F1ZXJ5c3RyaW5nKS5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7XG4gICAgICAgICAgICBjb25zdCB7IHJlc3VsdCAsIHBhcmFtcyAgfSA9IGludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsIGZpbmFsVXJsLnBhdGhuYW1lLCBxdWVyeSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKSA6IGZpbmFsVXJsLmhyZWY7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgXSA6IHJlc29sdmVkSHJlZjtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxufVxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKSB7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmw7XG59XG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLCB1cmwsIGFzKSB7XG4gICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIsIHVybCwgdHJ1ZSk7XG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtcbiAgICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBcztcbiAgICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO1xuICAgIGNvbnN0IHByZXBhcmVkQXMgPSBhcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlciwgYXMpKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmO1xuICAgIHJldHVybiB7XG4gICAgICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKVxuICAgIH07XG59XG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcykge1xuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKCgwLCBfZGVub3JtYWxpemVQYWdlUGF0aCkuZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSkpO1xuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICAgIHJldHVybiBwYXRobmFtZTtcbiAgICB9XG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICBwYWdlcy5zb21lKChwYWdlKT0+e1xuICAgICAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lID0gcGFnZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKTtcbn1cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID0gcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmICEhZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHYgPSAnX19uZXh0JztcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZTtcbiAgICB9IGNhdGNoIChuKSB7XG4gICAgfVxufSgpO1xuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtcbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cykge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlcikge1xuICAgIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgKDAsIF9yb3V0ZUxvYWRlcikubWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lMSwgcXVlcnkxLCBhczEsIHsgaW5pdGlhbFByb3BzICwgcGFnZUxvYWRlciAsIEFwcCAsIHdyYXBBcHAgLCBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBlcnI6IGVycjEgLCBzdWJzY3JpcHRpb24gLCBpc0ZhbGxiYWNrICwgbG9jYWxlICwgbG9jYWxlcyAsIGRlZmF1bHRMb2NhbGUgLCBkb21haW5Mb2NhbGVzICwgaXNQcmV2aWV3ICB9KXtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gICAgICAgIHRoaXMuc2RyID0ge1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9pZHggPSAwO1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSk9PntcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZm9yY2VkU2Nyb2xsO1xuICAgICAgICAgICAgY29uc3QgeyB1cmwgLCBhczogYXMxICwgb3B0aW9ucyAsIGlkeCAgfSA9IHN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2Uodik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2lkeCA9IGlkeDtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAgfSA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3NyICYmIGFzMSA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUxID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhczEsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgfSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICAgICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICB9KSwgZm9yY2VkU2Nyb2xsKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycjogZXJyMSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgICAgICAgIENvbXBvbmVudDogQXBwLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lMTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5MTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPSAoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGF0aG5hbWUxKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lMSA6IGFzMTtcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHwgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uYXBwR2lwICYmICFzZWxmLl9fTkVYVF9EQVRBX18uZ3NwIHx8ICFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiYgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO1xuICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3O1xuICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzMS5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSBhczEgIT09IHBhdGhuYW1lMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi8gYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHB1c2godXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcbiAgICAgICAgICAgIC8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG4gICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBhc3luYyBjaGFuZ2UobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zLCBmb3JjZWRTY3JvbGwpIHtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCBvcHRpb25zLl9oIHx8IG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmO1xuICAgICAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAgICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgICAgIGlmIChvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZMb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlID8gdGhpcy5kZWZhdWx0TG9jYWxlIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyk7XG4gICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgICAgICAgICAgaWYgKCEoKHJlZiA9IHRoaXMubG9jYWxlcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYuaW5jbHVkZXModGhpcy5sb2NhbGUpKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgICAgICAgICAgaWYgKCFkaWROYXZpZ2F0ZSAmJiBkZXRlY3RlZERvbWFpbiAmJiB0aGlzLmlzTG9jYWxlRG9tYWluICYmIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLycpfWA7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgIGlmIChfdXRpbHMuU1QpIHtcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzaGFsbG93ID1mYWxzZSAgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7XG4gICAgICAgICAgICBzaGFsbG93XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSkpO1xuICAgICAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzO1xuICAgICAgICBsZXQgbG9jYWxlQ2hhbmdlID0gcHJldkxvY2FsZSAhPT0gdGhpcy5sb2NhbGU7XG4gICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBcztcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gcGFyc2VkO1xuICAgICAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgICAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgICAgICBsZXQgcGFnZXMsIHJld3JpdGVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAgICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAgICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzO1xuICAgICAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAgICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICAgICAgcGF0aG5hbWUxID0gcGF0aG5hbWUxID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZTEpKSA6IHBhdGhuYW1lMTtcbiAgICAgICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IHRydWU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcXVlcnkxLCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGg7XG4gICAgICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUxLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKTtcbiAgICAgICAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZSA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5MSkgOiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcigocGFyYW0pPT4hcXVlcnkxW3BhcmFtXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlID8gYEludGVycG9sYXRpbmcgaHJlZmAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICsgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZSA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGUgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCcgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIH0sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkxLCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnkxLCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgcmVmLCByZWYxO1xuICAgICAgICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgbGV0IHsgZXJyb3IgLCBwcm9wcyAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICAgICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMucGFnZVByb3BzICYmIHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgICAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCAsIGFzOiBuZXdBcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVc7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0JztcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLCBub3RGb3VuZFJvdXRlLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFsbG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPSBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25zLl9oICYmIHBhdGhuYW1lMSA9PT0gJy9fZXJyb3InICYmICgocmVmID0gc2VsZi5fX05FWFRfREFUQV9fLnByb3BzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYxID0gcmVmLnBhZ2VQcm9wcykgPT09IG51bGwgfHwgcmVmMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmMS5zdGF0dXNDb2RlKSA9PT0gNTAwICYmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMucGFnZVByb3BzKSkge1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGU7XG4gICAgICAgICAgICB2YXIgX3Njcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFNjcm9sbCA9IChfc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwpICE9PSBudWxsICYmIF9zY3JvbGwgIT09IHZvaWQgMCA/IF9zY3JvbGwgOiAhaXNWYWxpZFNoYWxsb3dSb3V0ZTtcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0U2Nyb2xsID0gc2hvdWxkU2Nyb2xsID8ge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgfSA6IG51bGw7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGNsZWFuZWRBcywgcm91dGVJbmZvLCBmb3JjZWRTY3JvbGwgIT09IG51bGwgJiYgZm9yY2VkU2Nyb2xsICE9PSB2b2lkIDAgPyBmb3JjZWRTY3JvbGwgOiByZXNldFNjcm9sbCkuY2F0Y2goKGUpPT57XG4gICAgICAgICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGU7XG4gICAgICAgICAgICAgICAgZWxzZSB0aHJvdyBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIGlmIChlcnIxLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycjE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgKDAsIF91dGlscykuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93O1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDFcbiAgICAgICAgICAgIH0sIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDAsIF9yb3V0ZUxvYWRlcikuaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IENvbXBvbmVudDE7XG4gICAgICAgICAgICBsZXQgc3R5bGVTaGVldHM7XG4gICAgICAgICAgICBsZXQgcHJvcHM7XG4gICAgICAgICAgICBpZiAodHlwZW9mIENvbXBvbmVudDEgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBzdHlsZVNoZWV0cyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAoeyBwYWdlOiBDb21wb25lbnQxICwgc3R5bGVTaGVldHMgIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0ge1xuICAgICAgICAgICAgICAgIHByb3BzLFxuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm8gPyB1bmRlZmluZWQgOiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mbyA/IGNhY2hlZFJvdXRlSW5mbyA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQ29tcG9uZW50MSAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSAgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50MSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhSHJlZjtcbiAgICAgICAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVxuICAgICAgICAgICAgICAgIH0pLCByZXNvbHZlZEFzLCBfX05fU1NHLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSA6IF9fTl9TU1AgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdExvY2FsZTogdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChlcnIyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbiAgICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqLyBhc3luYyBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMiAgfSA9IHBhcnNlZDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUyLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICAgICAgYXNQYXRoID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBsZXQgcmV3cml0ZXM7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcGFyc2VkLnF1ZXJ5LCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXG4gICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpO1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUyKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTIpO1xuICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2cpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzU3NnID8gdGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLCByZXNvbHZlZEFzLCB0cnVlLCB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiB0aGlzLmxvY2FsZSkpIDogZmFsc2U7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSwgXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IHRoaXMuY2xjID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCk9PntcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyMiA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVycjIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAhdGhpcy5pc1ByZXZpZXcgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZikge1xuICAgICAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KS5jYXRjaCgoZXJyMik9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICB0aHJvdyBlcnIyO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAxICB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAxKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscykubG9hZEdldEluaXRpYWxQcm9wcyhBcHAxLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMsIHJvdXRlUHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LCByZXNldFNjcm9sbCk7XG4gICAgfVxufVxuUm91dGVyLmV2ZW50cyA9ICgwLCBfbWl0dCkuZGVmYXVsdCgpO1xuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiaW1wb3J0IEJhc2ljTGF5b3V0IGZyb20gJy4uL2xheW91dHMvQmFzaWNMYXlvdXQnO1xuaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9NYWluUGFnZS9IZXJvJztcbmltcG9ydCBTZXJ2aWNlcyBmcm9tICcuLi9jb21wb25lbnRzL01haW5QYWdlL1NlcnZpY2VzJztcbmltcG9ydCBIZXJvU2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpblBhZ2UvSGVyby9IZXJvU2xpZGVyJ1xuaW1wb3J0IEhvbWVIZXJvQ29udGVudCBmcm9tICcuLi9jb21wb25lbnRzL01haW5QYWdlL0hlcm8vSG9tZUhlcm9Db250ZW50JztcbmltcG9ydCBFbXB0eUJhciBmcm9tICcuLi9jb21wb25lbnRzL0VtcHR5QmFyJztcbmltcG9ydCBGbG9hdGluZ01lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9GbG9hdGluZ01lbnUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIHJldHVybiAoXG4gICAgPEJhc2ljTGF5b3V0PlxuICAgICAgPEZsb2F0aW5nTWVudSAvPlxuICAgICAgPEhlcm8gPlxuICAgICAgICA8SGVyb1NsaWRlciAvPlxuICAgICAgICA8SG9tZUhlcm9Db250ZW50IC8+XG4gICAgICA8L0hlcm8+XG5cbiAgICAgIDxFbXB0eUJhciAvPlxuXG4gICAgICA8U2VydmljZXMgLz5cblxuICAgICAgPEVtcHR5QmFyIC8+XG4gICAgPC9CYXNpY0xheW91dD5cbiAgKVxufVxuXG5cbiIsImV4cG9ydCBjb25zdCBCQVNFX1BBVEggPSAnaHR0cDovL2Rldi1hcGktc3Ryb2plLmFnZW5jamEtaW1wdWxzLmF0dGhvc3QyNC5wbCc7XHJcbmV4cG9ydCBjb25zdCBUT0tFTiA9ICdhY2Nlc3NUb2tlbic7XHJcblxyXG5leHBvcnQgY29uc3QgbWVudSA9IFt7XHJcbiAgXCJpdGVtXCI6IFwiU3Ryb25hIGfFgsOzd25hXCIsIFwidXJsXCI6IFwiXCIsIFwib3Bpc1wiOiBcIlN0cm9uYSBnxYLDs3duYVwiXHJcbn0sIHtcclxuICBcIml0ZW1cIjogXCJXeXN6dWthalwiLCBcInVybFwiOiBcInd5c3p1a2FqXCIsIFwib3Bpc1wiOiBcIld5c3p1a2l3YXJrYSBzdHJvasOzd1wiLFxyXG59LCB7XHJcbiAgXCJpdGVtXCI6IFwiS29udGFrdFwiLCBcInVybFwiOiBcImtvbnRha3RcIiwgXCJvcGlzXCI6IFwiU3Ryb25hIGtvbnRha3Rvd2FcIixcclxufVxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdFByaXplID0gMjU7XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0RGlzcGxheUNhcnRzID0gMTg7IiwiaW1wb3J0IHsgZ2V0VG9rZW4sIGhhc0V4cGlyZWRUb2tlbiB9IGZyb20gJy4uL2FwaS90b2tlbic7XHJcbmltcG9ydCB7IGRlZmF1bHREaXNwbGF5Q2FydHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXV0aEZldGNoKHVybCwgcGFyYW1zLCBsb2dvdXQpIHtcclxuICBjb25zdCB0b2tlbiA9IGdldFRva2VuKCk7XHJcblxyXG4gIGlmICghdG9rZW4pIHtcclxuICAgIC8vIHVzdWFyaW8gbm8gbG9nZWFkb3JcclxuICAgIGxvZ291dCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoaGFzRXhwaXJlZFRva2VuKHRva2VuKSkge1xyXG4gICAgICAvLyBUb2tlbiBjYWR1Y2Fkb1xyXG4gICAgICBsb2dvdXQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHBhcmFtc1RlbXAgPSB7XHJcbiAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIC4uLnBhcmFtcz8uaGVhZGVycyxcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgcGFyYW1zVGVtcCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbGltaXRQZXJQYWdlID0gKHF1ZXJ5KSA9PiB7XHJcbiAgY29uc3QgY3VycmVudExpbWl0ID0gcGFyc2VJbnQocXVlcnkubGltaXQpIHx8IDY7XHJcbiAgaWYgKCFxdWVyeS5saW1pdCB8fCBNYXRoLmFicyhjdXJyZW50TGltaXQpID4gMzYpIHJldHVybiBkZWZhdWx0RGlzcGxheUNhcnRzO1xyXG4gIGVsc2UgcmV0dXJuIGN1cnJlbnRMaW1pdDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGFydEl0ZW0gPSAocXVlcnkpID0+IHtcclxuICBjb25zdCBjdXJyZW50UGFnZSA9IHBhcnNlSW50KHF1ZXJ5LnBhZ2UpIHx8IDA7XHJcbiAgY29uc3QgbGltaXQgPSBsaW1pdFBlclBhZ2UocXVlcnkpO1xyXG4gIGlmICghcXVlcnkucGFnZSB8fCBjdXJyZW50UGFnZSA9PT0gMSkgcmV0dXJuIDA7XHJcbiAgZWxzZSByZXR1cm4gY3VycmVudFBhZ2UgKiBsaW1pdCAtIGxpbWl0O1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBSRUFDVF9GUkFHTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxOCsuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01vdmVUb0luYm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9QbGF5bGlzdEFkZENoZWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0F2YXRhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0NhcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9DYXJkQWN0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0NhcmRIZWFkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9Db2xsYXBzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0RpdmlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvTGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0xpc3RJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1JY29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1UZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvU3dpcGVhYmxlRHJhd2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsc3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiand0LWRlY29kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibWF0ZXJpYWwtdWktaW1hZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNsaWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiQkFTRV9QQVRIIiwiZ2V0Q2F0ZWdvcmllc0FwaSIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXN1bHQiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZ2V0R2VuZGVyc0FwaSIsImdldE1vZGVsc0FwaSIsImxpbWl0Iiwic29ydCIsInBhZ2UiLCJsaW1pdEl0ZW1zIiwic29ydEl0ZW1zIiwic3RhcnRJdGVtcyIsImdldE1vZGVsQnlDdXN0b21Qcm9wcyIsInF1ZXJ5IiwiZ2V0TW9kZWxCeUN1c3RvbVByb3BzQ291bnQiLCJUT0tFTiIsImp3dERlY29kZSIsInNldFRva2VuIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0VG9rZW4iLCJnZXRJdGVtIiwicmVtb3ZlVG9rZW4iLCJyZW1vdmVJdGVtIiwiaGFzRXhwaXJlZFRva2VuIiwidG9rZW5EZWNvZGUiLCJleHBpcmVEYXRlIiwiZXhwIiwiY3VycmVudERhdGUiLCJEYXRlIiwiZ2V0VGltZSIsIlJlYWN0IiwiU2xpZGVyIiwiXyIsIkltYWdlIiwiZGVmYXVsdFNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwic2xpZGVzVG9TY3JvbGwiLCJDYXJvdXNlbFNjcmVlbnNob3RzIiwiaW1hZ2VzIiwic2V0dGluZ3MiLCJhc3BlY3RSYXRpbyIsIm9wdGlvbnMiLCJtYXAiLCJpbWciLCJhbHRlcm5hdGl2ZVRleHQiLCJjYXB0aW9uIiwiZm9ybWF0cyIsImlkIiwiZGVmYXVsdCIsInVzZVRoZW1lIiwiZWxlbWVudEljb25zIiwibmFtZSIsInBhdGgiLCJFbGVtZW50SWNvbiIsInByb3BzIiwidGhlbWUiLCJzcmMiLCJmaW5kIiwid2lkdGgiLCJoZWlnaHQiLCJjb2xvciIsInBhbGV0dGUiLCJncmV5IiwidGl0bGUiLCJtYWtlU3R5bGVzIiwiQm94IiwiRW1wdHlCYXIiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJzcGFjZSIsIm1pbkhlaWdodCIsIkxpbmsiLCJUeXBvZ3JhcGh5IiwiQ2F0ZWdvcnlNZW51IiwibWVudSIsIm1lbnVMaXN0IiwibGlzdCIsInNpemUiLCJpdGVtIiwiQ2F0ZWdvcnlJdGVtIiwic2VhcmNoTGluayIsImthdGVnb3JpYSIsImxvYWRlciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImJvcmRlckJvdHRvbSIsImxpc3RTdHlsZVR5cGUiLCJtYXJnaW5MZWZ0IiwicGFkZGluZ0xlZnQiLCJmbGV4V3JhcCIsImJyZWFrcG9pbnRzIiwidXAiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwic3BhY2luZyIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblJpZ2h0Iiwib25seSIsImRvd24iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvbnRhaW5lciIsIkRpdmlkZXIiLCJMaXN0TWVudSIsInVzZUFwcENvbnRleHQiLCJGbG9hdGluZ01lbnUiLCJhZGRpdGlvbmFsTWVudUl0ZW1zIiwiZ2VuZGVycyIsImNhdGVnb3JpZXMiLCJzZWN0aW9uIiwiY29udGFpbmVyIiwiZGl2aWRlciIsImJhY2tncm91bmQiLCJBZGRyZXNzIiwiYWRkcmVzcyIsInZhbHVlcyIsInBob25lcyIsImVtYWlsIiwiY2l0eSIsInN0cmVldCIsInBvc3RDb2RlIiwic2VjdGlvbnMiLCJhbGlnbkl0ZW1zIiwiRm9vdGVyQ2F0ZWdvcmllc0xpc3QiLCJDYXRlZ29yaWEiLCJsaW5rIiwiZm9vdGVyIiwidGV4dEFsaWduIiwidGV4dERlY29yYXRpb24iLCJDYXRlZ29yaWVzIiwiUGFydG5lcnMiLCJGb290ZXIiLCJmb290ZXJNZW51IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJjb21tb24iLCJwcmltYXJ5IiwibWFpbiIsImZvbnRTaXplIiwibGlzdFN0eWxlIiwicGFydG5lcnMiLCJwIiwiUGFydG5lciIsInBhcnRuZXIiLCJUb29sYmFyIiwiVG9wQmFyIiwiTWVudSIsIkhlYWRlciIsInRvb2xiYXIiLCJwYWRkaW5nIiwicGFkZGluZ1JpZ2h0IiwiU3dpcGVhYmxlRHJhd2VyIiwiQnV0dG9uIiwiTGlzdCIsIlBsYXlsaXN0QWRkQ2hlY2tJY29uIiwiTGlzdEl0ZW0iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJJbmJveEljb24iLCJ1c2VNZWRpYVF1ZXJ5IiwiTWVudUljb24iLCJzdGF0ZSIsInNldFN0YXRlIiwicmlnaHQiLCJpc01vYmlsZSIsInRvZ2dsZURyYXdlciIsImFuY2hvciIsIm9wZW4iLCJldmVudCIsInR5cGUiLCJrZXkiLCJsaXN0SGVhZGVyIiwiTWVudURyYXdlciIsInJvb3QiLCJNZW51TGlzdCIsIm5vSWNvbiIsInNlcnZpY2VzTGlzdFRvcEJhciIsIk1lbnVJdGVtIiwiUGFydG5lcnNMaXN0IiwiZnVsbExpc3QiLCJmb250V2VpZ2h0IiwiYXV0aExpc3QiLCJ1c2VyRGV0YWlscyIsInVzZXJTdHlsZXMiLCJTZWFyY2hJY29uIiwiaW5kZXhQYWdlSXRlbSIsImhlYWQiLCJmaWx0ZXIiLCJzZWFyY2hQYWdlSXRlbSIsIkxvZ28iLCJpbmRleFBhZ2UiLCJsb2dvIiwiY3VzdG9tQnV0dG9ucyIsInNlYXJjaEljb24iLCJjZW50cmVJY29uIiwiYWxpZ25Db250ZW50IiwiSWNvblR5cGVMaXN0IiwibW9kZWwiLCJpY29ucyIsInBhcnRzIiwicGFydCIsInR5dHVsIiwiSW1hZ2VDdXN0b20iLCJpc0tvbXB1dGVyIiwiaXNUYWJsZXQiLCJsYXJnZSIsIm1lZGl1bSIsInNtYWxsIiwiR3JpZCIsIk1vZGVsQ2FyZCIsIkxpc3RNb2RlbHMiLCJtb2RlbHMiLCJtYXJnaW4iLCJmbGV4R3JvdyIsIkNhcmRDb250ZW50IiwiU2l6ZUxpc3QiLCJDdXN0b21DYXJkQ29udGVudCIsImNhcmRDb250ZW50Iiwib3BpcyIsIm9waXNDb250ZW50Iiwic2l6ZXMiLCJzZWNvbmRhcnkiLCJDYXJkSGVhZGVyIiwiQXZhdGFyIiwicmVkIiwiQ3VzdG9tQ2FyZEhlYWRlciIsImF2YXRhciIsInBsZWMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbHN4IiwiQ2FyZCIsIkNhcmRBY3Rpb25zIiwiQ29sbGFwc2UiLCJJY29uQnV0dG9uIiwiRXhwYW5kTW9yZUljb24iLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwiaGFzUGhvdG9zIiwiemRqZWNpYSIsImhhbmRsZUV4cGFuZENsaWNrIiwibGkiLCJDdXN0b21Db2xsYXBzZSIsIkN1c3RvbUFjdGlvbnMiLCJhY3Rpb25zIiwiZXhwYW5kIiwiZXhwYW5kT3BlbiIsIm1heFdpZHRoIiwidHJhbnNmb3JtIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZHVyYXRpb24iLCJzaG9ydGVzdCIsIkNpcmN1bGFyUHJvZ3Jlc3MiLCJHZW5kZXJCdXR0b25zIiwiZ2VuZGVyIiwic2V0R2VuZGVyIiwic2V0TG9hZGVyIiwiQnV0dG9uTGlzdCIsImJ1dHRvbnMiLCJnZW5kZXJJdGVtIiwiQnV0dG9uQ3RhIiwiY3RhQnV0dG9uIiwic3ViSGVhZGluZyIsIlBhcGVyIiwiSGVyb1NsaWRlciIsInNldEltYWdlcyIsInRlbXBJbWFnZXMiLCJzbGlkZXIiLCJwaG90byIsImNhcm91c2VsIiwib3JkZXIiLCJtYXhIZWlnaHQiLCJIb21lSGVybyIsIkhvbWVIZXJvQ29udGVudCIsInNjcm9sbFRvRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYWN0aW9uIiwiY3Vyc29yIiwidXNlUm91dGVyIiwiTGlzdE1vZGVsQ2FyZHMiLCJsaW1pdFBlclBhZ2UiLCJnZXRTdGFydEl0ZW0iLCJTZXJ2aWNlcyIsInNldE1vZGVscyIsInNlY3Rpb25IZWFkZXIiLCJ3aXRoU3R5bGVzIiwiVG9vbHRpcCIsInNpemVMaXN0IiwicyIsInJvem1pYXIiLCJIdG1sVG9vbHRpcCIsInRvb2x0aXAiLCJ0eXBvZ3JhcGh5IiwicHhUb1JlbSIsImJvcmRlciIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsIkFwcFdyYXBwZXIiLCJzZXRDYXRlZ29yaWVzIiwic2V0R2VuZGVycyIsIkJhc2ljTGF5b3V0IiwiYXBwIiwidG9wQmFyIiwiYm94U2l6aW5nIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZsZXgiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIkltYWdlMSIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2hlYWQiLCJfdG9CYXNlNjQiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX19lc01vZHVsZSIsIl9vYmplY3RTcHJlYWQiLCJ0YXJnZXQiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJjb25jYXQiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJmb3JFYWNoIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiZXhjbHVkZWQiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsInNvdXJjZVN5bWJvbEtleXMiLCJpbmRleE9mIiwicHJvdG90eXBlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJjYWxsIiwic291cmNlS2V5cyIsImxvYWRlZEltYWdlVVJMcyIsIlNldCIsImdsb2JhbCIsIl9fTkVYVF9JTUFHRV9JTVBPUlRFRCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwidW5kZWZpbmVkIiwibG9hZGVycyIsIk1hcCIsImRlZmF1bHRMb2FkZXIiLCJpbWdpeExvYWRlciIsImNsb3VkaW5hcnlMb2FkZXIiLCJha2FtYWlMb2FkZXIiLCJjdXN0b21Mb2FkZXIiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiaXNTdGF0aWNSZXF1aXJlIiwiaXNTdGF0aWNJbWFnZURhdGEiLCJpc1N0YXRpY0ltcG9ydCIsImRldmljZVNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwiY29uZmlnSW1hZ2VTaXplcyIsImNvbmZpZ0xvYWRlciIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfSU1BR0VfT1BUUyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwiYSIsImIiLCJnZXRXaWR0aHMiLCJsYXlvdXQiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJtYXRjaCIsImV4ZWMiLCJwdXNoIiwicGFyc2VJbnQiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIm1pbiIsIndpZHRocyIsImtpbmQiLCJ3IiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJqb2luIiwiZ2V0SW50IiwieCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwibG9hZCIsImdldCIsIkVycm9yIiwiVkFMSURfTE9BREVSUyIsImhhbmRsZUxvYWRpbmciLCJwbGFjZWhvbGRlciIsIm9uTG9hZGluZ0NvbXBsZXRlIiwiaGFuZGxlTG9hZCIsInN0YXJ0c1dpdGgiLCJkZWNvZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhdGNoIiwidGhlbiIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhZGQiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0IiwicmVmIiwicGFyZW50RWxlbWVudCIsInBhcmVudCIsImdldENvbXB1dGVkU3R5bGUiLCJ3YXJuIiwicG9zaXRpb24iLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9wYXJhbSIsInByaW9yaXR5IiwibG9hZGluZyIsImxhenlCb3VuZGFyeSIsImNsYXNzTmFtZSIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiYmx1ckRhdGFVUkwiLCJhbGwiLCJyZXN0Iiwic3RhdGljU3JjIiwic3RhdGljSW1hZ2VEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImlzTGF6eSIsImhhcyIsImluY2x1ZGVzIiwiU3RyaW5nIiwiaXNOYU4iLCJWQUxJRF9CTFVSX0VYVCIsInJhbmQiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwic2V0UmVmIiwiaXNJbnRlcnNlY3RlZCIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwidG9wIiwibGVmdCIsImJvdHRvbSIsIm1pbldpZHRoIiwiYmx1clN0eWxlIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwib3ZlcmZsb3ciLCJxdW90aWVudCIsImltZ0F0dHJpYnV0ZXMiLCJzcmNTdHJpbmciLCJjcmVhdGVFbGVtZW50IiwiYWx0IiwidG9CYXNlNjQiLCJhc3NpZ24iLCJkZWNvZGluZyIsInJlbCIsImFzIiwiaHJlZiIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInNsaWNlIiwiVVJMIiwicGFyYW1zIiwic2VhcmNoUGFyYW1zIiwic2V0IiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImVyciIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiX3JvdXRlciIsIl9yb3V0ZXIxIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwicm91dGVyIiwiaXNMb2NhbFVSTCIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwiZSIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwidXNlUmVmIiwiY3VycmVudCIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwiZW5kc1dpdGgiLCJfX05FWFRfVFJBSUxJTkdfU0xBU0giLCJ0ZXN0IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwid2luZG93IiwiY2IiLCJzdGFydCIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJmdXR1cmUiLCJyZXNvbHZlciIsInByb20iLCJoYXNQcmVmZXRjaCIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJjcm9zc09yaWdpbiIsIl9fTkVYVF9DUk9TU19PUklHSU4iLCJvbmVycm9yIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYXBwZW5kU2NyaXB0Iiwic2NyaXB0IiwicmVqZWN0IiwiYm9keSIsImRldkJ1aWxkUHJvbWlzZSIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJvayIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsInJvdXRlRmlsZXNQcm9taXNlIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImZpbmFsbHkiLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJfd2l0aFJvdXRlciIsImNyZWF0ZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yb3V0ZXJDb250ZXh0Iiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4IiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiX19ORVhUX0kxOE5fU1VQUE9SVCIsImJhc2VQYXRoIiwiX19ORVhUX1JPVVRFUl9CQVNFUEFUSCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwiZG9tYWluIiwicGF0aG5hbWUiLCJwYXRoTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUxvd2VyIiwic3Vic3RyIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJ1cmxQcm90b01hdGNoIiwidXJsQXNTdHJpbmdOb1Byb3RvIiwidXJsUGFydHMiLCJzcGxpdCIsIm5vcm1hbGl6ZWRVcmwiLCJub3JtYWxpemVSZXBlYXRlZFNsYXNoZXMiLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJzb21lIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIl9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04iLCJoaXN0b3J5Iiwic2Vzc2lvblN0b3JhZ2UiLCJuIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJkYXRhIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwicGF0aG5hbWUxIiwicXVlcnkxIiwiYXMxIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJDb21wb25lbnQxIiwiZXJyMSIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJzZGMiLCJzZHIiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFnZVhPZmZzZXQiLCJ5IiwicGFnZVlPZmZzZXQiLCJwYXJzZSIsInBhcnNlUmVsYXRpdmVVcmwiLCJpc1NzciIsIl9icHMiLCJjaGFuZ2UiLCJfc2hhbGxvdyIsImNvbXBvbmVudHMiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJpc1JlYWR5IiwiZ3NzcCIsImdpcCIsImFwcEdpcCIsImdzcCIsImxvY2F0aW9uIiwic2VhcmNoIiwiX19ORVhUX0hBU19SRVdSSVRFUyIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlbG9hZCIsImJhY2siLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwicHJldkxvY2FsZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJfc2Nyb2xsIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImVycjIiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIkhlcm8iLCJIb21lIiwiZGVmYXVsdFByaXplIiwiZGVmYXVsdERpc3BsYXlDYXJ0cyIsImF1dGhGZXRjaCIsImxvZ291dCIsInBhcmFtc1RlbXAiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImN1cnJlbnRMaW1pdCIsImFicyIsImN1cnJlbnRQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==