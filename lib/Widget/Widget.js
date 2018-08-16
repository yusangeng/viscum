'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _mix = require('litchy/lib/mix');

var _mix2 = _interopRequireDefault(_mix);

var _Eventable = require('litchy/lib/Eventable');

var _Eventable2 = _interopRequireDefault(_Eventable);

var _DOMBackend = require('./DOMBackend');

var _DOMBackend2 = _interopRequireDefault(_DOMBackend);

var _Hookable = require('./Hookable');

var _Hookable2 = _interopRequireDefault(_Hookable);

var _Renderer = require('./Renderer');

var _Renderer2 = _interopRequireDefault(_Renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Widget = function (_mix$with) {
  (0, _inherits3.default)(Widget, _mix$with);

  function Widget(_ref) {
    var useWrap = _ref.useWrap,
        hooks = _ref.hooks,
        data = _ref.data;
    (0, _classCallCheck3.default)(this, Widget);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Widget.__proto__ || (0, _getPrototypeOf2.default)(Widget)).call(this));

    _this.initBackend({ useWrap: useWrap });
    _this.initHookable({ hooks: hooks });
    _this.initRenderer({ initData: data });
    return _this;
  }

  (0, _createClass3.default)(Widget, [{
    key: 'render',
    value: function render() {
      return Benny.createElement(
        'div',
        null,
        'render\u65B9\u6CD5\u5E94\u7531\u5B50\u7C7B\u91CD\u5199.'
      );
    }
  }]);
  return Widget;
}((0, _mix2.default)(_Eventable2.default).with(_DOMBackend2.default, _Hookable2.default, _Renderer2.default));

exports.default = Widget;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9XaWRnZXQvV2lkZ2V0LmpzIl0sIm5hbWVzIjpbIldpZGdldCIsInVzZVdyYXAiLCJob29rcyIsImRhdGEiLCJpbml0QmFja2VuZCIsImluaXRIb29rYWJsZSIsImluaXRSZW5kZXJlciIsImluaXREYXRhIiwiRXZlbnRhYmxlIiwid2l0aCIsIkJhY2tlbmQiLCJIb29rYWJsZSIsIlJlbmRlcmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFcUJBLE07OztBQUVuQix3QkFBdUM7QUFBQSxRQUF4QkMsT0FBd0IsUUFBeEJBLE9BQXdCO0FBQUEsUUFBZkMsS0FBZSxRQUFmQSxLQUFlO0FBQUEsUUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQUE7O0FBQUE7O0FBRXJDLFVBQUtDLFdBQUwsQ0FBaUIsRUFBRUgsZ0JBQUYsRUFBakI7QUFDQSxVQUFLSSxZQUFMLENBQWtCLEVBQUVILFlBQUYsRUFBbEI7QUFDQSxVQUFLSSxZQUFMLENBQWtCLEVBQUVDLFVBQVVKLElBQVosRUFBbEI7QUFKcUM7QUFLdEM7Ozs7NkJBRVM7QUFDUixhQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBUDtBQUNEOzs7RUFWRCxtQkFBSUssbUJBQUosRUFBZUMsSUFBZixDQUFvQkMsb0JBQXBCLEVBQTZCQyxrQkFBN0IsRUFBdUNDLGtCQUF2QyxDOztrQkFEbUJaLE0iLCJmaWxlIjoiV2lkZ2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1peCBmcm9tICdsaXRjaHkvbGliL21peCdcbmltcG9ydCBFdmVudGFibGUgZnJvbSAnbGl0Y2h5L2xpYi9FdmVudGFibGUnXG5pbXBvcnQgQmFja2VuZCBmcm9tICcuL0RPTUJhY2tlbmQnXG5pbXBvcnQgSG9va2FibGUgZnJvbSAnLi9Ib29rYWJsZSdcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL1JlbmRlcmVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXQgZXh0ZW5kc1xuICBtaXgoRXZlbnRhYmxlKS53aXRoKEJhY2tlbmQsIEhvb2thYmxlLCBSZW5kZXJlcikge1xuICBjb25zdHJ1Y3RvciAoeyB1c2VXcmFwLCBob29rcywgZGF0YSB9KSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuaW5pdEJhY2tlbmQoeyB1c2VXcmFwIH0pXG4gICAgdGhpcy5pbml0SG9va2FibGUoeyBob29rcyB9KVxuICAgIHRoaXMuaW5pdFJlbmRlcmVyKHsgaW5pdERhdGE6IGRhdGEgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIDxkaXY+cmVuZGVy5pa55rOV5bqU55Sx5a2Q57G76YeN5YaZLjwvZGl2PlxuICB9XG59XG4iXX0=