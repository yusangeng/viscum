'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.default = createDOMNode;

var _const = require('./const');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createDOMNode(data) {
  if (!data) {
    return document.createElement('noscript');
  }

  var props = data.props,
      tag = data.tag,
      children = data.children;

  var node = null;

  if (tag === _const.TEXT_TAG_NAME) {
    node = document.createTextNode(props.text);
    return node;
  }

  node = document.createElement(tag);

  (0, _keys2.default)(props).forEach(function (key) {
    var attrKey = ('' + key).toLowerCase();
    var value = props[key];

    node.setAttribute(attrKey, value);
  });

  children.forEach(function (child) {
    var childNode = createDOMNode(child);
    node.appendChild(childNode);
  });

  return node;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY3JlYXRlRE9NTm9kZS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVET01Ob2RlIiwiZGF0YSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInByb3BzIiwidGFnIiwiY2hpbGRyZW4iLCJub2RlIiwiVEVYVF9UQUdfTkFNRSIsImNyZWF0ZVRleHROb2RlIiwidGV4dCIsImZvckVhY2giLCJhdHRyS2V5Iiwia2V5IiwidG9Mb3dlckNhc2UiLCJ2YWx1ZSIsInNldEF0dHJpYnV0ZSIsImNoaWxkTm9kZSIsImNoaWxkIiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0JBRXdCQSxhOztBQUZ4Qjs7OztBQUVlLFNBQVNBLGFBQVQsQ0FBd0JDLElBQXhCLEVBQThCO0FBQzNDLE1BQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1QsV0FBT0MsU0FBU0MsYUFBVCxDQUF1QixVQUF2QixDQUFQO0FBQ0Q7O0FBSDBDLE1BS25DQyxLQUxtQyxHQUtWSCxJQUxVLENBS25DRyxLQUxtQztBQUFBLE1BSzVCQyxHQUw0QixHQUtWSixJQUxVLENBSzVCSSxHQUw0QjtBQUFBLE1BS3ZCQyxRQUx1QixHQUtWTCxJQUxVLENBS3ZCSyxRQUx1Qjs7QUFNM0MsTUFBSUMsT0FBTyxJQUFYOztBQUVBLE1BQUlGLFFBQVFHLG9CQUFaLEVBQTJCO0FBQ3pCRCxXQUFPTCxTQUFTTyxjQUFULENBQXdCTCxNQUFNTSxJQUE5QixDQUFQO0FBQ0EsV0FBT0gsSUFBUDtBQUNEOztBQUVEQSxTQUFPTCxTQUFTQyxhQUFULENBQXVCRSxHQUF2QixDQUFQOztBQUVBLHNCQUFZRCxLQUFaLEVBQW1CTyxPQUFuQixDQUEyQixlQUFPO0FBQ2hDLFFBQU1DLFVBQVUsQ0FBQyxLQUFLQyxHQUFOLEVBQVdDLFdBQVgsRUFBaEI7QUFDQSxRQUFNQyxRQUFRWCxNQUFNUyxHQUFOLENBQWQ7O0FBRUFOLFNBQUtTLFlBQUwsQ0FBa0JKLE9BQWxCLEVBQTJCRyxLQUEzQjtBQUNELEdBTEQ7O0FBT0FULFdBQVNLLE9BQVQsQ0FBaUIsaUJBQVM7QUFDeEIsUUFBTU0sWUFBWWpCLGNBQWNrQixLQUFkLENBQWxCO0FBQ0FYLFNBQUtZLFdBQUwsQ0FBaUJGLFNBQWpCO0FBQ0QsR0FIRDs7QUFLQSxTQUFPVixJQUFQO0FBQ0QiLCJmaWxlIjoiY3JlYXRlRE9NTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRFWFRfVEFHX05BTUUgfSBmcm9tICcuL2NvbnN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVET01Ob2RlIChkYXRhKSB7XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdub3NjcmlwdCcpXG4gIH1cblxuICBjb25zdCB7IHByb3BzLCB0YWcsIGNoaWxkcmVuIH0gPSBkYXRhXG4gIGxldCBub2RlID0gbnVsbFxuXG4gIGlmICh0YWcgPT09IFRFWFRfVEFHX05BTUUpIHtcbiAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocHJvcHMudGV4dClcbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbiAgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKVxuXG4gIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgY29uc3QgYXR0cktleSA9ICgnJyArIGtleSkudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IHZhbHVlID0gcHJvcHNba2V5XVxuXG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cktleSwgdmFsdWUpXG4gIH0pXG5cbiAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlID0gY3JlYXRlRE9NTm9kZShjaGlsZClcbiAgICBub2RlLmFwcGVuZENoaWxkKGNoaWxkTm9kZSlcbiAgfSlcblxuICByZXR1cm4gbm9kZVxufVxuIl19