"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assign = _assign2.default;

var noop = function noop(_) {
  return _;
};

var defaultHooks = {
  afterMount: noop,
  beforeUnmount: noop,
  shouldUpdate: function shouldUpdate(_) {
    return true;
  },
  afterUpdate: noop
};

exports.default = function (superclass) {
  return function (_superclass) {
    (0, _inherits3.default)(Hookable, _superclass);

    function Hookable() {
      (0, _classCallCheck3.default)(this, Hookable);
      return (0, _possibleConstructorReturn3.default)(this, (Hookable.__proto__ || (0, _getPrototypeOf2.default)(Hookable)).apply(this, arguments));
    }

    (0, _createClass3.default)(Hookable, [{
      key: "initHookable",
      value: function initHookable(_ref) {
        var _ref$hooks = _ref.hooks,
            hooks = _ref$hooks === undefined ? {} : _ref$hooks;

        this.hooks_ = assign({}, defaultHooks, hooks);
      }
    }, {
      key: "afterMount",
      value: function afterMount() {
        this.hooks_.afterMount.call(this);
      }
    }, {
      key: "shouldUpdate",
      value: function shouldUpdate() {
        return this.hooks_.shouldUpdate.call(this);
      }
    }, {
      key: "afterUpdate",
      value: function afterUpdate() {
        this.hooks_.afterUpdate.call(this);
      }
    }, {
      key: "beforeUnmount",
      value: function beforeUnmount() {
        this.hooks_.beforeUnmount.call(this);
      }
    }]);
    return Hookable;
  }(superclass);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9XaWRnZXQvSG9va2FibGUuanMiXSwibmFtZXMiOlsiYXNzaWduIiwibm9vcCIsIl8iLCJkZWZhdWx0SG9va3MiLCJhZnRlck1vdW50IiwiYmVmb3JlVW5tb3VudCIsInNob3VsZFVwZGF0ZSIsImFmdGVyVXBkYXRlIiwiaG9va3MiLCJob29rc18iLCJjYWxsIiwic3VwZXJjbGFzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBUUEsTTs7QUFDUixJQUFNQyxPQUFPLFNBQVBBLElBQU87QUFBQSxTQUFLQyxDQUFMO0FBQUEsQ0FBYjs7QUFFQSxJQUFNQyxlQUFlO0FBQ25CQyxjQUFZSCxJQURPO0FBRW5CSSxpQkFBZUosSUFGSTtBQUduQkssZ0JBQWM7QUFBQSxXQUFLLElBQUw7QUFBQSxHQUhLO0FBSW5CQyxlQUFhTjtBQUpNLENBQXJCOztrQkFPZTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHlDQUNpQjtBQUFBLDhCQUFkTyxLQUFjO0FBQUEsWUFBZEEsS0FBYyw4QkFBTixFQUFNOztBQUM1QixhQUFLQyxNQUFMLEdBQWNULE9BQU8sRUFBUCxFQUFXRyxZQUFYLEVBQXlCSyxLQUF6QixDQUFkO0FBQ0Q7QUFIWTtBQUFBO0FBQUEsbUNBS0M7QUFDWixhQUFLQyxNQUFMLENBQVlMLFVBQVosQ0FBdUJNLElBQXZCLENBQTRCLElBQTVCO0FBQ0Q7QUFQWTtBQUFBO0FBQUEscUNBU0c7QUFDZCxlQUFPLEtBQUtELE1BQUwsQ0FBWUgsWUFBWixDQUF5QkksSUFBekIsQ0FBOEIsSUFBOUIsQ0FBUDtBQUNEO0FBWFk7QUFBQTtBQUFBLG9DQWFFO0FBQ2IsYUFBS0QsTUFBTCxDQUFZRixXQUFaLENBQXdCRyxJQUF4QixDQUE2QixJQUE3QjtBQUNEO0FBZlk7QUFBQTtBQUFBLHNDQWlCSTtBQUNmLGFBQUtELE1BQUwsQ0FBWUosYUFBWixDQUEwQkssSUFBMUIsQ0FBK0IsSUFBL0I7QUFDRDtBQW5CWTtBQUFBO0FBQUEsSUFBcUNDLFVBQXJDO0FBQUEsQyIsImZpbGUiOiJIb29rYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgYXNzaWduIH0gPSBPYmplY3RcbmNvbnN0IG5vb3AgPSBfID0+IF9cblxuY29uc3QgZGVmYXVsdEhvb2tzID0ge1xuICBhZnRlck1vdW50OiBub29wLFxuICBiZWZvcmVVbm1vdW50OiBub29wLFxuICBzaG91bGRVcGRhdGU6IF8gPT4gdHJ1ZSxcbiAgYWZ0ZXJVcGRhdGU6IG5vb3Bcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3VwZXJjbGFzcyA9PiBjbGFzcyBIb29rYWJsZSBleHRlbmRzIHN1cGVyY2xhc3Mge1xuICBpbml0SG9va2FibGUgKHsgaG9va3MgPSB7fSB9KSB7XG4gICAgdGhpcy5ob29rc18gPSBhc3NpZ24oe30sIGRlZmF1bHRIb29rcywgaG9va3MpXG4gIH1cblxuICBhZnRlck1vdW50ICgpIHtcbiAgICB0aGlzLmhvb2tzXy5hZnRlck1vdW50LmNhbGwodGhpcylcbiAgfVxuXG4gIHNob3VsZFVwZGF0ZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaG9va3NfLnNob3VsZFVwZGF0ZS5jYWxsKHRoaXMpXG4gIH1cblxuICBhZnRlclVwZGF0ZSAoKSB7XG4gICAgdGhpcy5ob29rc18uYWZ0ZXJVcGRhdGUuY2FsbCh0aGlzKVxuICB9XG5cbiAgYmVmb3JlVW5tb3VudCAoKSB7XG4gICAgdGhpcy5ob29rc18uYmVmb3JlVW5tb3VudC5jYWxsKHRoaXMpXG4gIH1cbn1cbiJdfQ==