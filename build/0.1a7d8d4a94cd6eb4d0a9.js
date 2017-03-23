webpackJsonp([0],{

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _Tangerine = __webpack_require__(272);

var _Tangerine2 = _interopRequireDefault(_Tangerine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//The super short way:
var Home = function Home() {
  return _react2.default.createElement(
    'div',
    null,
    'You are standing in the jungle with a ',
    _react2.default.createElement(_Tangerine2.default, null),
    ' in your hand.'
  );
};

/*
  class Home extends Component{
    render(){
      return <div>You are standing in the jungle with a <Tangerine/> in your hand.</div>
    }
  }
*/

exports.default = Home;

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tangerine = function (_React$Component) {
  _inherits(Tangerine, _React$Component);

  function Tangerine() {
    _classCallCheck(this, Tangerine);

    return _possibleConstructorReturn(this, (Tangerine.__proto__ || Object.getPrototypeOf(Tangerine)).apply(this, arguments));
  }

  _createClass(Tangerine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        null,
        '\uD83C\uDF4A'
      );
    }
  }]);

  return Tangerine;
}(_react2.default.Component);

exports.default = Tangerine;

/***/ })

});