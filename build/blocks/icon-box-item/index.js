/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/icon-box-item/attributes.js":
/*!************************************************!*\
  !*** ./src/blocks/icon-box-item/attributes.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/blocks/icon-box-item/constants/index.js");
/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../generators */ "./src/generators/index.js");


const {
  generateResRangleControlAttributes
} = _generators__WEBPACK_IMPORTED_MODULE_1__;
const {
  GRID_COLUMNS
} = _constants__WEBPACK_IMPORTED_MODULE_0__;
const attributes = {
  uniqueId: {
    type: 'string'
  },
  blockStyle: {
    type: 'object'
  },
  title: {
    type: 'string'
  },
  headingTag: {
    type: 'string'
  },
  contentTag: {
    type: 'string'
  },
  titleColor: {
    type: 'string'
  },
  titleHoverColor: {
    type: 'string'
  },
  description: {
    type: 'string'
  },
  descColor: {
    type: 'string'
  },
  alignment: {
    type: 'string'
  },
  btnLinkObj: {
    type: 'object'
  },
  btnLabel: {
    type: 'string',
    default: 'Button'
  },
  btnLink: {
    type: 'string'
  },
  btnTarget: {
    type: 'string'
  },
  btnBgColor: {
    type: 'string',
    default: '#fff'
  },
  btnColor: {
    type: 'string',
    default: '#ccc'
  },
  btnBgHovercolor: {
    type: 'string',
    default: ' #e6ffe6'
  },
  btnHoverColor: {
    type: 'string',
    default: '#ec0707'
  },
  icons: {
    type: 'string'
  },
  align: {
    type: 'string'
  },
  ...generateResRangleControlAttributes({
    controlName: GRID_COLUMNS,
    defaults: {
      [`${GRID_COLUMNS}DeskRange`]: 3,
      [`${GRID_COLUMNS}TabRange`]: 2,
      [`${GRID_COLUMNS}MobRange`]: 1
    }
  })
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/blocks/icon-box-item/constants/index.js":
/*!*****************************************************!*\
  !*** ./src/blocks/icon-box-item/constants/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GRID_COLUMNS": function() { return /* binding */ GRID_COLUMNS; }
/* harmony export */ });
const GRID_COLUMNS = 'gridColumns';

/***/ }),

/***/ "./src/blocks/icon-box-item/edit.js":
/*!******************************************!*\
  !*** ./src/blocks/icon-box-item/edit.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/blocks/icon-box-item/constants/index.js");
/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../generators */ "./src/generators/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/icon-box-item/editor.scss");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inspector */ "./src/blocks/icon-box-item/inspector.js");
/* harmony import */ var _helper_softminify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helper/softminify */ "./src/helper/softminify.js");


/* eslint-disable no-console */



const {
  Fragment,
  useEffect
} = wp.element;

const {
  GRID_COLUMNS
} = _constants__WEBPACK_IMPORTED_MODULE_4__; //generator

 // editor style


/**
 * Internal dependencies
 */



function Edit(_ref) {
  let {
    attributes,
    setAttributes,
    clientId
  } = _ref;
  const {
    uniqueId,
    blockStyle,
    title,
    titleColor,
    titleHoverColor,
    description,
    descColor,
    headingTag,
    contentTag,
    btnLabel,
    alignment,
    btnBgColor,
    btnColor,
    btnBgHovercolor,
    btnHoverColor,
    icons,
    // btnLinkObj,
    gridLine
  } = attributes;
  useEffect(() => {
    if (!uniqueId) {
      setAttributes({
        uniqueId: `bdt-blocks-${clientId.slice(0, 8)}`
      });
    }
  }, []);
  const {
    deskRange: gridDesktop,
    tabRange: gridTab,
    mobRange: gridmob
  } = (0,_generators__WEBPACK_IMPORTED_MODULE_5__.generateResRangleControlAttributes)({
    controlName: GRID_COLUMNS,
    defaults: 3
  });
  const deskStyles = `
	${uniqueId} .bdt-advanced-container, .block-editor-block-list__layout,.wp-block-bdt-advanced-icon-box .bdt-container  {
			grid-template-columns: repeat(${gridLine}, 1fr);
			column-gap: 2px;
			
			
		}
	
	 	.${uniqueId} .bdt-title {
			color: ${titleColor};
		 }
		 
		 .${uniqueId} .bdt-title:hover {
			color: ${titleHoverColor};
		 }
		
	 	.${uniqueId} .bdt-desc {
			 color: ${descColor};
		
		 }
			.${uniqueId} .bdt-icon-wrap {
			 text-align: ${alignment};
		
		 }
		 .${uniqueId} .bdt-advanced-icon-box .bdt-item .bdt-link-btn span{
			color: ${btnColor};
	 		background-color: ${btnBgColor};
		 }
		 .${uniqueId} .bdt-advanced-icon-box .bdt-item .bdt-link-btn a{
			color: ${btnColor};
	 		background-color: ${btnBgColor};
		 }
		 .${uniqueId} .bdt-advanced-icon-box .bdt-item:hover .bdt-link-btn span{
			color: ${btnHoverColor};
	 		background-color: ${btnBgHovercolor};
		 }
		 .${uniqueId} .bdt-advanced-icon-box .bdt-item:hover .bdt-link-btn a{
			color: ${btnHoverColor};
	 		background-color: ${btnBgHovercolor};
		 }
		}


	`;
  const tabStyles = ``;
  const mobStyles = ``;
  /**
   * Block All Styles
   */

  const blockStyleCss = `
		${deskStyles}
		@media (max-width: 1024px) and (min-width: 768px) {
			${tabStyles}
		}
		@media (max-width: 767px) {
			${mobStyles}
		}
	`;
  useEffect(() => {
    if (JSON.stringify(blockStyle) !== JSON.stringify(blockStyleCss)) {
      setAttributes({
        blockStyle: blockStyleCss
      });
    }
  }, [attributes]);
  console.log(deskStyles);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `${(0,_helper_softminify__WEBPACK_IMPORTED_MODULE_8__.softMinifyCssStrings)(blockStyleCss)}`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: uniqueId
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-advanced-icon-box bdt-avnaced-icon-box-style-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-item"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-icon-wrap"
  }, icons && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    role: "img",
    "aria-label": "sheep"
  }, icons)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-body-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: headingTag,
    value: title,
    placeholder: "Title",
    onChange: v => setAttributes({
      title: v
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-desc"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: contentTag,
    value: description,
    placeholder: "Description Here",
    onChange: v => setAttributes({
      description: v
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-link-btn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "button",
    tagName: "span",
    value: btnLabel,
    onChange: value => setAttributes({
      btnLabel: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Label', 'text-domain')
  }))))))));
}

/***/ }),

/***/ "./src/blocks/icon-box-item/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/icon-box-item/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/icon-box-item/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/icon-box-item/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/icon-box-item/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/icon-box-item/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/blocks/icon-box-item/attributes.js");



/**
 * Internal dependencies
 */


 // import attributes


/**
 * Block Registration
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  icon: {
    src: 'welcome-view-site'
  },
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/blocks/icon-box-item/inspector.js":
/*!***********************************************!*\
  !*** ./src/blocks/icon-box-item/inspector.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/blocks/icon-box-item/constants/index.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controls */ "./src/controls/index.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/blocks/icon-box-item/attributes.js");


/* eslint-disable @wordpress/no-unsafe-wp-apis */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



const {
  ResRangleControl,
  ColorControl,
  TabPanelControl,
  IconPickerControl
} = _controls__WEBPACK_IMPORTED_MODULE_5__;
const {
  GRID_COLUMNS
} = _constants__WEBPACK_IMPORTED_MODULE_4__;

const headingTagOptions = [{
  label: 'h1',
  value: 'h1'
}, {
  label: 'h2',
  value: 'h2'
}, {
  label: 'h3',
  value: 'h3'
}, {
  label: 'h4',
  value: 'h4'
}, {
  label: 'h5',
  value: 'h5'
}, {
  label: 'h6',
  value: 'h6'
}, {
  label: 'div',
  value: 'div'
}, {
  label: 'span',
  value: 'span'
}, {
  label: 'p',
  value: 'p'
}];

const Inspector = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    title,
    headingTag,
    titleColor,
    titleHoverColor,
    description,
    descColor,
    contentTag,
    btnLabel,
    alignment,
    btnBgColor,
    btnColor,
    btnBgHovercolor,
    btnHoverColor,
    icons,
    btnLinkObj,
    gridLine
  } = attributes;
  const objAttrs = {
    attributes,
    setAttributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"]
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Content', 'advanced-icon-box'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title', 'advanced-icon-box'),
    onChange: value => setAttributes({
      title: value
    }),
    value: title,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter title', 'advanced-icon-box')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title Tag', 'advanced-icon-box'),
    value: headingTag,
    onChange: value => setAttributes({
      headingTag: value
    }),
    options: headingTagOptions
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardDivider, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter description. Press Enter to create a new line.', 'advanced-icon-box'),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Description', 'advanced-icon-box'),
    onChange: text => setAttributes({
      description: text
    }),
    value: description,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter description', 'advanced-icon-box')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Description Tag', 'advanced-icon-box'),
    value: contentTag,
    onChange: value => setAttributes({
      contentTag: value
    }),
    options: headingTagOptions
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icon Picker', 'advacned-icon-box'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconPickerControl, {
    label: "Icon Picker",
    onHandle: v => setAttributes({
      icons: v
    }),
    icon: [{
      name: 'man',
      value: '😎'
    }, {
      name: 'football',
      value: '⚽'
    }, {
      name: 'star',
      value: '😎'
    }, {
      name: 'settings',
      value: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "currentColor",
        className: "bi bi-gear",
        viewBox: "0 0 16 16"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"
      }))
    }],
    objAttrs: objAttrs
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Advanced Icon Settings', 'advanced-icon-box'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconPickerControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Alignment', 'advanced-icon-box'),
    onHandle: v => setAttributes({
      alignment: v
    }),
    className: "btn-align",
    variant: "primary",
    iconv: "",
    icon: [{
      name: 'editor-alignleft',
      value: 'left'
    }, {
      name: 'editor-aligncenter',
      value: 'center'
    }, {
      name: 'editor-alignleft',
      value: 'right'
    }],
    objAttrs: objAttrs
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title Tag', 'advanced-icon-box'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('HEADING TAG', 'advanced-icon-box'),
    value: headingTag,
    options: [{
      label: 'h1',
      value: 'h1'
    }, {
      label: 'h2',
      value: 'h2'
    }, {
      label: 'h3',
      value: 'h3'
    }, {
      label: 'h4',
      value: 'h4'
    }, {
      label: 'h5',
      value: 'h5'
    }, {
      label: 'h6',
      value: 'h6'
    }],
    onChange: v => {
      setAttributes({
        headingTag: v
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TabPanelControl, {
    normalComponents: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'advanced-icon-box'),
      color: titleColor,
      onChange: colorValu => setAttributes({
        titleColor: colorValu
      })
    }),
    hoverComponents: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hover Color', 'advanced-icon-box'),
      color: titleHoverColor,
      onChange: colorValu => setAttributes({
        titleHoverColor: colorValu
      })
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Content Tag', 'advanced-icon-box'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('CONTENT TAG', 'advanced-icon-box'),
    value: contentTag,
    options: [{
      label: 'p',
      value: 'p'
    }, {
      label: 'span',
      value: 'span'
    }, {
      label: 'div',
      value: 'div'
    }, {
      label: 'h1',
      value: 'h1'
    }],
    onChange: v => {
      setAttributes({
        contentTag: v
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Settings', 'advanced-icon-box'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Label', 'advanced-icon-box'),
    value: btnLabel,
    onChange: v => setAttributes({
      btnLabel: v
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalLinkControl, {
    searchInputPlaceholder: "Search here...",
    value: btnLinkObj,
    settings: [{
      id: 'openInNewTab',
      title: 'Open in new tab?'
    }],
    onChange: data => setAttributes({
      btnLinkObj: data
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TabPanelControl, {
    normalComponents: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'advanced-icon-box'),
      color: btnBgColor,
      onChange: colorValu => setAttributes({
        btnBgColor: colorValu
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardDivider, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'advanced-icon-box'),
      color: btnColor,
      onChange: colorValu => setAttributes({
        btnColor: colorValu
      })
    })),
    hoverComponents: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bg Hover Color', 'advanced-icon-box'),
      color: btnBgHovercolor,
      onChange: colorValu => setAttributes({
        btnBgHovercolor: colorValu
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardDivider, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'advanced-icon-box'),
      color: btnHoverColor,
      onChange: colorValu => setAttributes({
        btnHoverColor: colorValu
      })
    }))
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/icon-box-item/save.js":
/*!******************************************!*\
  !*** ./src/blocks/icon-box-item/save.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    uniqueId,
    title,
    description,
    headingTag,
    contentTag,
    btnLabel,
    btnLinkObj,
    icons
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: `${uniqueId}`
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-advanced-icon-box bdt-avnaced-icon-box-style-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-item"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-icon-wrap"
  }, icons && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    role: "img",
    "aria-label": "sheep"
  }, icons)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-body-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: headingTag,
    value: title
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-desc"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: contentTag,
    value: description
  })), btnLinkObj && btnLinkObj.url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-link-btn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: btnLinkObj && btnLinkObj.url && btnLinkObj.url,
    target: btnLinkObj && btnLinkObj.openInNewTab && '_blank',
    rel: btnLinkObj && btnLinkObj.openInNewTab ? 'noopener noreferrer' : 'noopener'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    value: btnLabel
  })))))))));
}

/***/ }),

/***/ "./src/controls/color-control/index.js":
/*!*********************************************!*\
  !*** ./src/controls/color-control/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */



/**
 * Color Control
 */

const ColorControl = _ref => {
  let {
    label,
    color,
    onChange
  } = _ref;
  const [showColorPanel, setShowColorPanel] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-color-control-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
					.bdt-color-control-wrapper .components-base-control__label, .bdt-color-control-wrapper .components-base-control__field, .bdt-color-control-wrapper .components-base-control {
						margin-bottom: 0 !important;
					}
				`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    justify: {
      justifyContent: 'flex-end'
    },
    gap: 0
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
    id: "color-control",
    label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'bdt-review-blocks')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "bdt-color-control",
    onClick: () => setShowColorPanel(true)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorIndicator, {
    colorValue: color
  }))), showColorPanel && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Popover, {
    position: "bottom right",
    onClose: () => setShowColorPanel(false),
    onFocusOutside: () => setShowColorPanel(false)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
    color: color,
    disableAlpha: false,
    onChangeComplete: value => {
      onChange(value.hex);
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorControl);

/***/ }),

/***/ "./src/controls/icon-picker-control/index.js":
/*!***************************************************!*\
  !*** ./src/controls/icon-picker-control/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/controls/icon-picker-control/style.scss");




const IconPickerControl = _ref => {
  let {
    label,
    icon,
    onHandle,
    className,
    variant
  } = _ref;
  // const { attributes, setAttributes } = objAttrs;
  // const { icons } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "aib-containter"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "aib-label"
  }, label), icon && icon.map((item, i) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => onHandle(item.value),
    className: className,
    key: i,
    variant: variant
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    role: "img",
    "aria-label": "sheep",
    className: "iconValue"
  }, item.value))));
};

/* harmony default export */ __webpack_exports__["default"] = (IconPickerControl);

/***/ }),

/***/ "./src/controls/index.js":
/*!*******************************!*\
  !*** ./src/controls/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResRangleControl": function() { return /* reexport safe */ _res_rangle_control__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "ColorControl": function() { return /* reexport safe */ _color_control__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "TabPanelControl": function() { return /* reexport safe */ _tab_panel__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "IconPickerControl": function() { return /* reexport safe */ _icon_picker_control__WEBPACK_IMPORTED_MODULE_3__["default"]; }
/* harmony export */ });
/* harmony import */ var _res_rangle_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./res-rangle-control */ "./src/controls/res-rangle-control/index.js");
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-control */ "./src/controls/color-control/index.js");
/* harmony import */ var _tab_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-panel */ "./src/controls/tab-panel/index.js");
/* harmony import */ var _icon_picker_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon-picker-control */ "./src/controls/icon-picker-control/index.js");





/***/ }),

/***/ "./src/controls/res-btn/index.js":
/*!***************************************!*\
  !*** ./src/controls/res-btn/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);




const ResBtn = _ref => {
  let {
    resMode,
    setAttributes
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "res-btn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: resMode === 'Desktop' ? 'primary' : 'secondary',
    onClick: () => {
      setAttributes({
        resMode: 'Desktop'
      });

      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('core/edit-post').__experimentalSetPreviewDeviceType('Desktop');
    },
    icon: "desktop",
    title: "Desktop"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: resMode === 'Tablet' ? 'primary' : 'secondary',
    onClick: () => {
      setAttributes({
        resMode: 'Tablet'
      });

      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('core/edit-post').__experimentalSetPreviewDeviceType('Tablet');
    },
    icon: "tablet",
    title: "Tablet"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: resMode === 'Mobile' ? 'primary' : 'secondary',
    onClick: () => {
      setAttributes({
        resMode: 'Mobile'
      });

      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('core/edit-post').__experimentalSetPreviewDeviceType('Mobile');
    },
    icon: "smartphone",
    title: "Mobile"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ResBtn);

/***/ }),

/***/ "./src/controls/res-rangle-control/index.js":
/*!**************************************************!*\
  !*** ./src/controls/res-rangle-control/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _res_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../res-btn */ "./src/controls/res-btn/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/controls/res-rangle-control/style.scss");





const ResRangleControl = _ref => {
  let {
    label,
    controlName,
    objAttrs,
    noUnits,
    units,
    min,
    max
  } = _ref;
  const {
    attributes,
    setAttributes
  } = objAttrs;
  const {
    resMode
  } = attributes;
  const {
    [`${controlName}DeskRange`]: deskRange,
    [`${controlName}TabRange`]: tabRange,
    [`${controlName}MobRange`]: mobRange
  } = attributes;
  if (!units) units = units || ['px', '%'];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bdt-res-rangle-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    align: "flex-start"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    id: "res-label",
    label: label
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_res_btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    resMode: resMode,
    setAttributes: setAttributes
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexItem, null, !noUnits && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "units-wrapper"
  }, units && units.map((unit, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "single-unit",
      key: index
    }, unit);
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "res-controls"
  }, resMode === 'Desktop' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-rangle"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: deskRange,
    onChange: value => setAttributes({
      [`${controlName}DeskRange`]: value
    }),
    min: min,
    max: max
  })), resMode === 'Tablet' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-rangle"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: tabRange,
    onChange: value => setAttributes({
      [`${controlName}TabRange`]: value
    }),
    min: min,
    max: max
  })), resMode === 'Mobile' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "single-rangle"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    value: mobRange,
    onChange: value => setAttributes({
      [`${controlName}MobRange`]: value
    }),
    min: min,
    max: max
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ResRangleControl);

/***/ }),

/***/ "./src/controls/tab-panel/index.js":
/*!*****************************************!*\
  !*** ./src/controls/tab-panel/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


const {
  Fragment
} = wp.element;
/**
 * Tab Panel Control
 */

const TabPanelControl = _ref => {
  let {
    normalComponents,
    hoverComponents
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "bdt-tab-panel",
    activeClass: "active-tab",
    initialTabName: "bdt_review_normal",
    tabs: [{
      name: 'bdt_review_normal',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Normal', 'bdt-review-blocks'),
      className: 'bdt-tab bdt-general'
    }, {
      name: 'bdt_review_hover',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hover', 'bdt-review-blocks'),
      className: 'bdt-tab bdt-style'
    }]
  }, tabContent => {
    if (tabContent.name === 'bdt_review_normal') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, normalComponents);
    } else if (tabContent.name === 'bdt_review_hover') {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, hoverComponents);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TabPanelControl);

/***/ }),

/***/ "./src/generators/index.js":
/*!*********************************!*\
  !*** ./src/generators/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateResRangleControlAttributes": function() { return /* binding */ generateResRangleControlAttributes; }
/* harmony export */ });
const generateResRangleControlAttributes = _ref => {
  let {
    controlName,
    defaults = {}
  } = _ref;
  const {
    [`${controlName}DeskRange`]: deskRange,
    [`${controlName}TabRange`]: tabRange,
    [`${controlName}MobRange`]: mobRange
  } = defaults;
  return {
    [`${controlName}DeskRange`]: {
      type: 'number',
      default: deskRange
    },
    [`${controlName}TabRange`]: {
      type: 'number',
      default: tabRange
    },
    [`${controlName}MobRange`]: {
      type: 'number',
      default: mobRange
    }
  };
};

/***/ }),

/***/ "./src/helper/softminify.js":
/*!**********************************!*\
  !*** ./src/helper/softminify.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "softMinifyCssStrings": function() { return /* binding */ softMinifyCssStrings; }
/* harmony export */ });
// softMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js
const softMinifyCssStrings = function () {
  let cssString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
  return cssString.replace(/\s+/g, ' ').replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g, '');
};

/***/ }),

/***/ "./src/blocks/icon-box-item/editor.scss":
/*!**********************************************!*\
  !*** ./src/blocks/icon-box-item/editor.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/icon-box-item/style.scss":
/*!*********************************************!*\
  !*** ./src/blocks/icon-box-item/style.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/controls/icon-picker-control/style.scss":
/*!*****************************************************!*\
  !*** ./src/controls/icon-picker-control/style.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/controls/res-rangle-control/style.scss":
/*!****************************************************!*\
  !*** ./src/controls/res-rangle-control/style.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/icon-box-item/block.json":
/*!*********************************************!*\
  !*** ./src/blocks/icon-box-item/block.json ***!
  \*********************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"name":"bdt/icon-box-item","version":"0.1.0","title":"icon box item","category":"advanced-icon-box","description":"Advanced icon box.","parent":["bdt/advanced-icon-box"],"supports":{"html":false,"anchor":true},"textdomain":"advanced-icon-box","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/icon-box-item/index": 0,
/******/ 			"blocks/advanced-icon-box/style-index": 0,
/******/ 			"blocks/icon-box-item/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgutenberg_boilerplate"] = self["webpackChunkgutenberg_boilerplate"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/advanced-icon-box/style-index","blocks/icon-box-item/style-index"], function() { return __webpack_require__("./src/blocks/icon-box-item/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map