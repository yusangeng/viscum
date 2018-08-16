'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = commit;

var _createDOMNode = require('./createDOMNode');

var _createDOMNode2 = _interopRequireDefault(_createDOMNode);

var _patchDOM = require('./patchDOM');

var _patchDOM2 = _interopRequireDefault(_patchDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function commit(el, vdom) {
  var root = el.firstElementChild;
  if (!root) {
    el.appendChild((0, _createDOMNode2.default)(vdom));
    return;
  }

  if (root.tagName !== vdom.tag) {
    el.removeChild(root);
    el.appendChild((0, _createDOMNode2.default)(vdom));
    return;
  }
  (0, _patchDOM2.default)(root, vdom);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29tbWl0LmpzIl0sIm5hbWVzIjpbImNvbW1pdCIsImVsIiwidmRvbSIsInJvb3QiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImFwcGVuZENoaWxkIiwidGFnTmFtZSIsInRhZyIsInJlbW92ZUNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFHd0JBLE07O0FBSHhCOzs7O0FBQ0E7Ozs7OztBQUVlLFNBQVNBLE1BQVQsQ0FBaUJDLEVBQWpCLEVBQXFCQyxJQUFyQixFQUEyQjtBQUN4QyxNQUFNQyxPQUFPRixHQUFHRyxpQkFBaEI7QUFDQSxNQUFJLENBQUNELElBQUwsRUFBVztBQUNURixPQUFHSSxXQUFILENBQWUsNkJBQWNILElBQWQsQ0FBZjtBQUNBO0FBQ0Q7O0FBRUQsTUFBSUMsS0FBS0csT0FBTCxLQUFpQkosS0FBS0ssR0FBMUIsRUFBK0I7QUFDN0JOLE9BQUdPLFdBQUgsQ0FBZUwsSUFBZjtBQUNBRixPQUFHSSxXQUFILENBQWUsNkJBQWNILElBQWQsQ0FBZjtBQUNBO0FBQ0Q7QUFDRCwwQkFBV0MsSUFBWCxFQUFpQkQsSUFBakI7QUFDRCIsImZpbGUiOiJjb21taXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlRE9NTm9kZSBmcm9tICcuL2NyZWF0ZURPTU5vZGUnXG5pbXBvcnQgcGF0Y2hUb0RPTSBmcm9tICcuL3BhdGNoRE9NJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21taXQgKGVsLCB2ZG9tKSB7XG4gIGNvbnN0IHJvb3QgPSBlbC5maXJzdEVsZW1lbnRDaGlsZFxuICBpZiAoIXJvb3QpIHtcbiAgICBlbC5hcHBlbmRDaGlsZChjcmVhdGVET01Ob2RlKHZkb20pKVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHJvb3QudGFnTmFtZSAhPT0gdmRvbS50YWcpIHtcbiAgICBlbC5yZW1vdmVDaGlsZChyb290KVxuICAgIGVsLmFwcGVuZENoaWxkKGNyZWF0ZURPTU5vZGUodmRvbSkpXG4gICAgcmV0dXJuXG4gIH1cbiAgcGF0Y2hUb0RPTShyb290LCB2ZG9tKVxufVxuIl19