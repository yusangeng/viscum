'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _commit2 = require('../dom/commit');

var _commit3 = _interopRequireDefault(_commit2);

var _dodele = require('dodele');

var _dodele2 = _interopRequireDefault(_dodele);

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

var MyDelegate = (0, _dodele2.default)(function Dummy() {
  (0, _classCallCheck3.default)(this, Dummy);
});

exports.default = function (superclass) {
  var _desc, _value, _class;

  return _class = function (_superclass) {
    (0, _inherits3.default)(DOMBackend, _superclass);

    function DOMBackend() {
      (0, _classCallCheck3.default)(this, DOMBackend);
      return (0, _possibleConstructorReturn3.default)(this, (DOMBackend.__proto__ || (0, _getPrototypeOf2.default)(DOMBackend)).apply(this, arguments));
    }

    (0, _createClass3.default)(DOMBackend, [{
      key: 'initBackend',
      value: function initBackend(_ref) {
        var useWrap = _ref.useWrap;

        this.useWrap_ = !!useWrap;
        this.delegator_ = null;
        this.listenerOffs_ = [];
        this.mounted_ = false;
        this.el_ = null;
      }
    }, {
      key: 'dispose',
      value: function dispose() {
        this.unmount();

        if (this.delegator) {
          this.delegator.dispose();
          this.delegator_ = null;
        }

        (0, _get3.default)(DOMBackend.prototype.__proto__ || (0, _getPrototypeOf2.default)(DOMBackend.prototype), 'dispose', this).call(this);
      }
    }, {
      key: 'mount',
      value: function mount(el) {
        if (this.disposed) {
          console.warn('\u7EC4\u4EF6\u5DF2\u7ECF\u88AB\u91CA\u653E, \u4E0D\u53EF\u6267\u884Cmount\u6D41\u7A0B.');
          return;
        }

        if (this.mounted) {
          console.warn('\u7EC4\u4EF6\u5DF2\u7ECF\u88ABmount\u5230DOM\u4E0A.');
          return;
        }

        var vdom = this.render();
        var useWrap = this.useWrap;

        var wrap = void 0;

        if (useWrap) {
          wrap = this.wrap_ = document.createElement('widget');
        } else {
          wrap = el;
        }

        wrap.classList.add('benny-widget-wrap');
        (0, _commit3.default)(wrap, vdom);

        if (useWrap) {
          this.el.appendChild(wrap);
        }

        this.wrap_ = wrap;
        this.el_ = el;

        this.addDecoratedEventListeners();
        this.mounted_ = true;
        this.afterMount();
      }
    }, {
      key: 'unmount',
      value: function unmount() {
        var wrap = this.wrap,
            el = this.el;


        this.beforeUnmount();
        this.removeDecoratedEventListeners();

        if (this.useWrap) {
          el.removeChild(wrap);
        }

        delete this.el_;
        delete this.wrap_;
        this.mounted_ = false;
      }
    }, {
      key: 'on$',
      value: function on$(type, sel, callback) {
        if (!this.delegator) {
          this.delegator_ = new MyDelegate(this.wrap);
        }

        return this.delegator.on$(type, sel, callback);
      }
    }, {
      key: 'addDecoratedEventListeners',
      value: function addDecoratedEventListeners() {
        var _this2 = this;

        this.constructor.prototype.__decorated_listeners__.forEach(function (el) {
          var type = el.type,
              sel = el.sel,
              callback = el.callback;

          _this2.listenerOffs_.push(_this2.on$(type, sel, callback));
        });
      }
    }, {
      key: 'removeDecoratedEventListeners',
      value: function removeDecoratedEventListeners() {
        this.listenerOffs_.forEach(function (el) {
          return el();
        });
        this.listenerOffs_ = [];
      }
    }, {
      key: 'commit',
      value: function commit(vdom) {
        if (this.wrap) {
          (0, _commit3.default)(this.wrap, vdom);
        }
      }
    }, {
      key: 'wrap',
      get: function get() {
        return this.wrap_;
      }
    }, {
      key: 'el',
      get: function get() {
        return this.el_;
      }
    }, {
      key: 'useWrap',
      get: function get() {
        return this.useWrap_;
      }
    }, {
      key: 'delegator',
      get: function get() {
        return this.delegator_;
      }
    }, {
      key: 'mounted',
      get: function get() {
        return this.mounted_;
      }
    }]);
    return DOMBackend;
  }(superclass), (_applyDecoratedDescriptor(_class.prototype, 'mount', [_undisposed2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'mount'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'on$', [_undisposed2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'on$'), _class.prototype)), _class;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9XaWRnZXQvRE9NQmFja2VuZC5qcyJdLCJuYW1lcyI6WyJNeURlbGVnYXRlIiwidXNlV3JhcCIsInVzZVdyYXBfIiwiZGVsZWdhdG9yXyIsImxpc3RlbmVyT2Zmc18iLCJtb3VudGVkXyIsImVsXyIsInVubW91bnQiLCJkZWxlZ2F0b3IiLCJkaXNwb3NlIiwiZWwiLCJkaXNwb3NlZCIsImNvbnNvbGUiLCJ3YXJuIiwibW91bnRlZCIsInZkb20iLCJyZW5kZXIiLCJ3cmFwIiwid3JhcF8iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsImFkZERlY29yYXRlZEV2ZW50TGlzdGVuZXJzIiwiYWZ0ZXJNb3VudCIsImJlZm9yZVVubW91bnQiLCJyZW1vdmVEZWNvcmF0ZWRFdmVudExpc3RlbmVycyIsInJlbW92ZUNoaWxkIiwidHlwZSIsInNlbCIsImNhbGxiYWNrIiwib24kIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJfX2RlY29yYXRlZF9saXN0ZW5lcnNfXyIsImZvckVhY2giLCJwdXNoIiwic3VwZXJjbGFzcyIsInVuZGlzcG9zZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYTtBQUFBO0FBQUEsRUFBbkI7O2tCQUVlO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsd0NBcUJhO0FBQUEsWUFBWEMsT0FBVyxRQUFYQSxPQUFXOztBQUN4QixhQUFLQyxRQUFMLEdBQWdCLENBQUMsQ0FBQ0QsT0FBbEI7QUFDQSxhQUFLRSxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsYUFBS0MsYUFBTCxHQUFxQixFQUFyQjtBQUNBLGFBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxhQUFLQyxHQUFMLEdBQVcsSUFBWDtBQUNEO0FBM0JZO0FBQUE7QUFBQSxnQ0E2QkY7QUFDVCxhQUFLQyxPQUFMOztBQUVBLFlBQUksS0FBS0MsU0FBVCxFQUFvQjtBQUNsQixlQUFLQSxTQUFMLENBQWVDLE9BQWY7QUFDQSxlQUFLTixVQUFMLEdBQWtCLElBQWxCO0FBQ0Q7O0FBRUQ7QUFDRDtBQXRDWTtBQUFBO0FBQUEsNEJBeUNOTyxFQXpDTSxFQXlDRjtBQUNULFlBQUksS0FBS0MsUUFBVCxFQUFtQjtBQUNqQkMsa0JBQVFDLElBQVI7QUFDQTtBQUNEOztBQUVELFlBQUksS0FBS0MsT0FBVCxFQUFrQjtBQUNoQkYsa0JBQVFDLElBQVI7QUFDQTtBQUNEOztBQUVELFlBQU1FLE9BQU8sS0FBS0MsTUFBTCxFQUFiO0FBWFMsWUFZRGYsT0FaQyxHQVlXLElBWlgsQ0FZREEsT0FaQzs7QUFhVCxZQUFJZ0IsYUFBSjs7QUFFQSxZQUFJaEIsT0FBSixFQUFhO0FBQ1hnQixpQkFBUSxLQUFLQyxLQUFMLEdBQWFDLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBckI7QUFDRCxTQUZELE1BRU87QUFDTEgsaUJBQU9QLEVBQVA7QUFDRDs7QUFFRE8sYUFBS0ksU0FBTCxDQUFlQyxHQUFmLENBQW1CLG1CQUFuQjtBQUNBLDhCQUFPTCxJQUFQLEVBQWFGLElBQWI7O0FBRUEsWUFBSWQsT0FBSixFQUFhO0FBQ1gsZUFBS1MsRUFBTCxDQUFRYSxXQUFSLENBQW9CTixJQUFwQjtBQUNEOztBQUVELGFBQUtDLEtBQUwsR0FBYUQsSUFBYjtBQUNBLGFBQUtYLEdBQUwsR0FBV0ksRUFBWDs7QUFFQSxhQUFLYywwQkFBTDtBQUNBLGFBQUtuQixRQUFMLEdBQWdCLElBQWhCO0FBQ0EsYUFBS29CLFVBQUw7QUFDRDtBQTNFWTtBQUFBO0FBQUEsZ0NBNkVGO0FBQUEsWUFDRFIsSUFEQyxHQUNZLElBRFosQ0FDREEsSUFEQztBQUFBLFlBQ0tQLEVBREwsR0FDWSxJQURaLENBQ0tBLEVBREw7OztBQUdULGFBQUtnQixhQUFMO0FBQ0EsYUFBS0MsNkJBQUw7O0FBRUEsWUFBSSxLQUFLMUIsT0FBVCxFQUFrQjtBQUNoQlMsYUFBR2tCLFdBQUgsQ0FBZVgsSUFBZjtBQUNEOztBQUVELGVBQU8sS0FBS1gsR0FBWjtBQUNBLGVBQU8sS0FBS1ksS0FBWjtBQUNBLGFBQUtiLFFBQUwsR0FBZ0IsS0FBaEI7QUFDRDtBQTFGWTtBQUFBO0FBQUEsMEJBNkZSd0IsSUE3RlEsRUE2RkZDLEdBN0ZFLEVBNkZHQyxRQTdGSCxFQTZGYTtBQUN4QixZQUFJLENBQUMsS0FBS3ZCLFNBQVYsRUFBcUI7QUFDbkIsZUFBS0wsVUFBTCxHQUFrQixJQUFJSCxVQUFKLENBQWUsS0FBS2lCLElBQXBCLENBQWxCO0FBQ0Q7O0FBRUQsZUFBTyxLQUFLVCxTQUFMLENBQWV3QixHQUFmLENBQW1CSCxJQUFuQixFQUF5QkMsR0FBekIsRUFBOEJDLFFBQTlCLENBQVA7QUFDRDtBQW5HWTtBQUFBO0FBQUEsbURBcUdpQjtBQUFBOztBQUM1QixhQUFLRSxXQUFMLENBQWlCQyxTQUFqQixDQUEyQkMsdUJBQTNCLENBQW1EQyxPQUFuRCxDQUEyRCxjQUFNO0FBQUEsY0FDdkRQLElBRHVELEdBQy9CbkIsRUFEK0IsQ0FDdkRtQixJQUR1RDtBQUFBLGNBQ2pEQyxHQURpRCxHQUMvQnBCLEVBRCtCLENBQ2pEb0IsR0FEaUQ7QUFBQSxjQUM1Q0MsUUFENEMsR0FDL0JyQixFQUQrQixDQUM1Q3FCLFFBRDRDOztBQUUvRCxpQkFBSzNCLGFBQUwsQ0FBbUJpQyxJQUFuQixDQUF3QixPQUFLTCxHQUFMLENBQVNILElBQVQsRUFBZUMsR0FBZixFQUFvQkMsUUFBcEIsQ0FBeEI7QUFDRCxTQUhEO0FBSUQ7QUExR1k7QUFBQTtBQUFBLHNEQTRHb0I7QUFDL0IsYUFBSzNCLGFBQUwsQ0FBbUJnQyxPQUFuQixDQUEyQjtBQUFBLGlCQUFNMUIsSUFBTjtBQUFBLFNBQTNCO0FBQ0EsYUFBS04sYUFBTCxHQUFxQixFQUFyQjtBQUNEO0FBL0dZO0FBQUE7QUFBQSw2QkFpSExXLElBakhLLEVBaUhDO0FBQ1osWUFBSSxLQUFLRSxJQUFULEVBQWU7QUFDYixnQ0FBTyxLQUFLQSxJQUFaLEVBQWtCRixJQUFsQjtBQUNEO0FBQ0Y7QUFySFk7QUFBQTtBQUFBLDBCQUNEO0FBQ1YsZUFBTyxLQUFLRyxLQUFaO0FBQ0Q7QUFIWTtBQUFBO0FBQUEsMEJBS0g7QUFDUixlQUFPLEtBQUtaLEdBQVo7QUFDRDtBQVBZO0FBQUE7QUFBQSwwQkFTRTtBQUNiLGVBQU8sS0FBS0osUUFBWjtBQUNEO0FBWFk7QUFBQTtBQUFBLDBCQWFJO0FBQ2YsZUFBTyxLQUFLQyxVQUFaO0FBQ0Q7QUFmWTtBQUFBO0FBQUEsMEJBaUJFO0FBQ2IsZUFBTyxLQUFLRSxRQUFaO0FBQ0Q7QUFuQlk7QUFBQTtBQUFBLElBQXVDaUMsVUFBdkMsMERBd0NaQyxvQkF4Q1ksOElBNEZaQSxvQkE1Rlk7QUFBQSxDIiwiZmlsZSI6IkRPTUJhY2tlbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29tbWl0IGZyb20gJy4uL2RvbS9jb21taXQnXG5pbXBvcnQgRGVsZWdhdGUgZnJvbSAnZG9kZWxlJ1xuaW1wb3J0IHVuZGlzcG9zZWQgZnJvbSAnbGl0Y2h5L2xpYi9kZWNvcmF0b3IvdW5kaXNwb3NlZCdcblxuY29uc3QgTXlEZWxlZ2F0ZSA9IERlbGVnYXRlKGNsYXNzIER1bW15IHt9KVxuXG5leHBvcnQgZGVmYXVsdCBzdXBlcmNsYXNzID0+IGNsYXNzIERPTUJhY2tlbmQgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcbiAgZ2V0IHdyYXAgKCkge1xuICAgIHJldHVybiB0aGlzLndyYXBfXG4gIH1cblxuICBnZXQgZWwgKCkge1xuICAgIHJldHVybiB0aGlzLmVsX1xuICB9XG5cbiAgZ2V0IHVzZVdyYXAgKCkge1xuICAgIHJldHVybiB0aGlzLnVzZVdyYXBfXG4gIH1cblxuICBnZXQgZGVsZWdhdG9yICgpIHtcbiAgICByZXR1cm4gdGhpcy5kZWxlZ2F0b3JfXG4gIH1cblxuICBnZXQgbW91bnRlZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMubW91bnRlZF9cbiAgfVxuXG4gIGluaXRCYWNrZW5kICh7IHVzZVdyYXAgfSkge1xuICAgIHRoaXMudXNlV3JhcF8gPSAhIXVzZVdyYXBcbiAgICB0aGlzLmRlbGVnYXRvcl8gPSBudWxsXG4gICAgdGhpcy5saXN0ZW5lck9mZnNfID0gW11cbiAgICB0aGlzLm1vdW50ZWRfID0gZmFsc2VcbiAgICB0aGlzLmVsXyA9IG51bGxcbiAgfVxuXG4gIGRpc3Bvc2UgKCkge1xuICAgIHRoaXMudW5tb3VudCgpXG5cbiAgICBpZiAodGhpcy5kZWxlZ2F0b3IpIHtcbiAgICAgIHRoaXMuZGVsZWdhdG9yLmRpc3Bvc2UoKVxuICAgICAgdGhpcy5kZWxlZ2F0b3JfID0gbnVsbFxuICAgIH1cblxuICAgIHN1cGVyLmRpc3Bvc2UoKVxuICB9XG5cbiAgQHVuZGlzcG9zZWRcbiAgbW91bnQgKGVsKSB7XG4gICAgaWYgKHRoaXMuZGlzcG9zZWQpIHtcbiAgICAgIGNvbnNvbGUud2Fybihg57uE5Lu25bey57uP6KKr6YeK5pS+LCDkuI3lj6/miafooYxtb3VudOa1geeoiy5gKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMubW91bnRlZCkge1xuICAgICAgY29uc29sZS53YXJuKGDnu4Tku7blt7Lnu4/ooqttb3VudOWIsERPTeS4ii5gKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdmRvbSA9IHRoaXMucmVuZGVyKClcbiAgICBjb25zdCB7IHVzZVdyYXAgfSA9IHRoaXNcbiAgICBsZXQgd3JhcFxuXG4gICAgaWYgKHVzZVdyYXApIHtcbiAgICAgIHdyYXAgPSAodGhpcy53cmFwXyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3dpZGdldCcpKVxuICAgIH0gZWxzZSB7XG4gICAgICB3cmFwID0gZWxcbiAgICB9XG5cbiAgICB3cmFwLmNsYXNzTGlzdC5hZGQoJ2Jlbm55LXdpZGdldC13cmFwJylcbiAgICBjb21taXQod3JhcCwgdmRvbSlcblxuICAgIGlmICh1c2VXcmFwKSB7XG4gICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHdyYXApXG4gICAgfVxuXG4gICAgdGhpcy53cmFwXyA9IHdyYXBcbiAgICB0aGlzLmVsXyA9IGVsXG5cbiAgICB0aGlzLmFkZERlY29yYXRlZEV2ZW50TGlzdGVuZXJzKClcbiAgICB0aGlzLm1vdW50ZWRfID0gdHJ1ZVxuICAgIHRoaXMuYWZ0ZXJNb3VudCgpXG4gIH1cblxuICB1bm1vdW50ICgpIHtcbiAgICBjb25zdCB7IHdyYXAsIGVsIH0gPSB0aGlzXG5cbiAgICB0aGlzLmJlZm9yZVVubW91bnQoKVxuICAgIHRoaXMucmVtb3ZlRGVjb3JhdGVkRXZlbnRMaXN0ZW5lcnMoKVxuXG4gICAgaWYgKHRoaXMudXNlV3JhcCkge1xuICAgICAgZWwucmVtb3ZlQ2hpbGQod3JhcClcbiAgICB9XG5cbiAgICBkZWxldGUgdGhpcy5lbF9cbiAgICBkZWxldGUgdGhpcy53cmFwX1xuICAgIHRoaXMubW91bnRlZF8gPSBmYWxzZVxuICB9XG5cbiAgQHVuZGlzcG9zZWRcbiAgb24kICh0eXBlLCBzZWwsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0aGlzLmRlbGVnYXRvcikge1xuICAgICAgdGhpcy5kZWxlZ2F0b3JfID0gbmV3IE15RGVsZWdhdGUodGhpcy53cmFwKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRlbGVnYXRvci5vbiQodHlwZSwgc2VsLCBjYWxsYmFjaylcbiAgfVxuXG4gIGFkZERlY29yYXRlZEV2ZW50TGlzdGVuZXJzICgpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9yLnByb3RvdHlwZS5fX2RlY29yYXRlZF9saXN0ZW5lcnNfXy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGNvbnN0IHsgdHlwZSwgc2VsLCBjYWxsYmFjayB9ID0gZWxcbiAgICAgIHRoaXMubGlzdGVuZXJPZmZzXy5wdXNoKHRoaXMub24kKHR5cGUsIHNlbCwgY2FsbGJhY2spKVxuICAgIH0pXG4gIH1cblxuICByZW1vdmVEZWNvcmF0ZWRFdmVudExpc3RlbmVycyAoKSB7XG4gICAgdGhpcy5saXN0ZW5lck9mZnNfLmZvckVhY2goZWwgPT4gZWwoKSlcbiAgICB0aGlzLmxpc3RlbmVyT2Zmc18gPSBbXVxuICB9XG5cbiAgY29tbWl0ICh2ZG9tKSB7XG4gICAgaWYgKHRoaXMud3JhcCkge1xuICAgICAgY29tbWl0KHRoaXMud3JhcCwgdmRvbSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==