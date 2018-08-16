'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

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

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _isFunction = require('lodash/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _undisposed = require('litchy/lib/decorator/undisposed');

var _undisposed2 = _interopRequireDefault(_undisposed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var assign = _assign2.default;

exports.default = function (superclass) {
  var _desc, _value, _class;

  return _class = function (_superclass) {
    (0, _inherits3.default)(Renderer, _superclass);

    function Renderer() {
      (0, _classCallCheck3.default)(this, Renderer);
      return (0, _possibleConstructorReturn3.default)(this, (Renderer.__proto__ || (0, _getPrototypeOf2.default)(Renderer)).apply(this, arguments));
    }

    (0, _createClass3.default)(Renderer, [{
      key: 'initRenderer',
      value: function initRenderer(_ref) {
        var _ref$initData = _ref.initData,
            initData = _ref$initData === undefined ? {} : _ref$initData;

        var myData = (0, _isFunction2.default)(initData) ? initData() : initData;

        this.data_ = assign({}, this.defaultData, myData);
      }
    }, {
      key: 'update',
      value: function update(data) {
        if (this.updateDataOnly(data)) {
          this.updateDOM();
        }
      }
    }, {
      key: 'updateDataOnly',
      value: function updateDataOnly(data) {
        var newData = assign({}, this.data, data);
        var oldData = this.data;
        var render = !!this.shouldUpdate(newData, oldData);

        this.data = newData;

        return render;
      }
    }, {
      key: 'updateDOM',
      value: function updateDOM() {
        var vdom = this.render();
        this.commit(vdom);
      }
    }, {
      key: 'render',
      value: function render() {
        return null;
      }
    }, {
      key: 'data',
      get: function get() {
        return this.data_;
      }
    }, {
      key: 'defaultData',
      get: function get() {
        return {};
      }
    }]);
    return Renderer;
  }(superclass), (_applyDecoratedDescriptor(_class.prototype, 'update', [_undisposed2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'update'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'updateDataOnly', [_undisposed2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'updateDataOnly'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'updateDOM', [_undisposed2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'updateDOM'), _class.prototype)), _class;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9XaWRnZXQvUmVuZGVyZXIuanMiXSwibmFtZXMiOlsiYXNzaWduIiwiaW5pdERhdGEiLCJteURhdGEiLCJkYXRhXyIsImRlZmF1bHREYXRhIiwiZGF0YSIsInVwZGF0ZURhdGFPbmx5IiwidXBkYXRlRE9NIiwibmV3RGF0YSIsIm9sZERhdGEiLCJyZW5kZXIiLCJzaG91bGRVcGRhdGUiLCJ2ZG9tIiwiY29tbWl0Iiwic3VwZXJjbGFzcyIsInVuZGlzcG9zZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxNOztrQkFFTztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHlDQVNvQjtBQUFBLGlDQUFqQkMsUUFBaUI7QUFBQSxZQUFqQkEsUUFBaUIsaUNBQU4sRUFBTTs7QUFDL0IsWUFBSUMsU0FBUywwQkFBV0QsUUFBWCxJQUF1QkEsVUFBdkIsR0FBb0NBLFFBQWpEOztBQUVBLGFBQUtFLEtBQUwsR0FBYUgsT0FBTyxFQUFQLEVBQVcsS0FBS0ksV0FBaEIsRUFBNkJGLE1BQTdCLENBQWI7QUFDRDtBQWJZO0FBQUE7QUFBQSw2QkFnQkxHLElBaEJLLEVBZ0JDO0FBQ1osWUFBSSxLQUFLQyxjQUFMLENBQW9CRCxJQUFwQixDQUFKLEVBQStCO0FBQzdCLGVBQUtFLFNBQUw7QUFDRDtBQUNGO0FBcEJZO0FBQUE7QUFBQSxxQ0F1QkdGLElBdkJILEVBdUJTO0FBQ3BCLFlBQU1HLFVBQVVSLE9BQU8sRUFBUCxFQUFXLEtBQUtLLElBQWhCLEVBQXNCQSxJQUF0QixDQUFoQjtBQUNBLFlBQU1JLFVBQVUsS0FBS0osSUFBckI7QUFDQSxZQUFJSyxTQUFTLENBQUMsQ0FBQyxLQUFLQyxZQUFMLENBQWtCSCxPQUFsQixFQUEyQkMsT0FBM0IsQ0FBZjs7QUFFQSxhQUFLSixJQUFMLEdBQVlHLE9BQVo7O0FBRUEsZUFBT0UsTUFBUDtBQUNEO0FBL0JZO0FBQUE7QUFBQSxrQ0FrQ0E7QUFDWCxZQUFNRSxPQUFPLEtBQUtGLE1BQUwsRUFBYjtBQUNBLGFBQUtHLE1BQUwsQ0FBWUQsSUFBWjtBQUNEO0FBckNZO0FBQUE7QUFBQSwrQkF1Q0g7QUFDUixlQUFPLElBQVA7QUFDRDtBQXpDWTtBQUFBO0FBQUEsMEJBQ0Q7QUFDVixlQUFPLEtBQUtULEtBQVo7QUFDRDtBQUhZO0FBQUE7QUFBQSwwQkFLTTtBQUNqQixlQUFPLEVBQVA7QUFDRDtBQVBZO0FBQUE7QUFBQSxJQUFxQ1csVUFBckMsMkRBZVpDLG9CQWZZLDBKQXNCWkEsb0JBdEJZLDZKQWlDWkEsb0JBakNZO0FBQUEsQyIsImZpbGUiOiJSZW5kZXJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJ2xvZGFzaC9pc0Z1bmN0aW9uJ1xuaW1wb3J0IHVuZGlzcG9zZWQgZnJvbSAnbGl0Y2h5L2xpYi9kZWNvcmF0b3IvdW5kaXNwb3NlZCdcblxuY29uc3QgeyBhc3NpZ24gfSA9IE9iamVjdFxuXG5leHBvcnQgZGVmYXVsdCBzdXBlcmNsYXNzID0+IGNsYXNzIFJlbmRlcmVyIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG4gIGdldCBkYXRhICgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhX1xuICB9XG5cbiAgZ2V0IGRlZmF1bHREYXRhICgpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGluaXRSZW5kZXJlciAoeyBpbml0RGF0YSA9IHt9IH0pIHtcbiAgICBsZXQgbXlEYXRhID0gaXNGdW5jdGlvbihpbml0RGF0YSkgPyBpbml0RGF0YSgpIDogaW5pdERhdGFcblxuICAgIHRoaXMuZGF0YV8gPSBhc3NpZ24oe30sIHRoaXMuZGVmYXVsdERhdGEsIG15RGF0YSlcbiAgfVxuXG4gIEB1bmRpc3Bvc2VkXG4gIHVwZGF0ZSAoZGF0YSkge1xuICAgIGlmICh0aGlzLnVwZGF0ZURhdGFPbmx5KGRhdGEpKSB7XG4gICAgICB0aGlzLnVwZGF0ZURPTSgpXG4gICAgfVxuICB9XG5cbiAgQHVuZGlzcG9zZWRcbiAgdXBkYXRlRGF0YU9ubHkgKGRhdGEpIHtcbiAgICBjb25zdCBuZXdEYXRhID0gYXNzaWduKHt9LCB0aGlzLmRhdGEsIGRhdGEpXG4gICAgY29uc3Qgb2xkRGF0YSA9IHRoaXMuZGF0YVxuICAgIGxldCByZW5kZXIgPSAhIXRoaXMuc2hvdWxkVXBkYXRlKG5ld0RhdGEsIG9sZERhdGEpXG5cbiAgICB0aGlzLmRhdGEgPSBuZXdEYXRhXG5cbiAgICByZXR1cm4gcmVuZGVyXG4gIH1cblxuICBAdW5kaXNwb3NlZFxuICB1cGRhdGVET00gKCkge1xuICAgIGNvbnN0IHZkb20gPSB0aGlzLnJlbmRlcigpXG4gICAgdGhpcy5jb21taXQodmRvbSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuIl19