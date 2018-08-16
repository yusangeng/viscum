'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createElement;

var _const = require('./const');

var isArray = Array.isArray;
function createElement(tag, props) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  var cs = (children || []).reduce(function (prev, el) {
    return isArray(el) ? prev.concat(el) : prev.concat([el]);
  }, []);

  return {
    tag: typeof tag === 'string' ? tag.toUpperCase() : tag,
    props: props || {},
    children: cs.map(function (child) {
      if (typeof child === 'string') {
        return {
          // 文本节点
          tag: _const.TEXT_TAG_NAME,
          props: {
            text: child
          }
        };
      }
      return child;
    })
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY3JlYXRlRWxlbWVudC5qcyJdLCJuYW1lcyI6WyJjcmVhdGVFbGVtZW50IiwiaXNBcnJheSIsIkFycmF5IiwidGFnIiwicHJvcHMiLCJjaGlsZHJlbiIsImNzIiwicmVkdWNlIiwicHJldiIsImVsIiwiY29uY2F0IiwidG9VcHBlckNhc2UiLCJtYXAiLCJjaGlsZCIsIlRFWFRfVEFHX05BTUUiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7OztrQkFJd0JBLGE7O0FBSnhCOztJQUVRQyxPLEdBQVlDLEssQ0FBWkQsTztBQUVPLFNBQVNELGFBQVQsQ0FBd0JHLEdBQXhCLEVBQTZCQyxLQUE3QixFQUFpRDtBQUFBLG9DQUFWQyxRQUFVO0FBQVZBLFlBQVU7QUFBQTs7QUFDOUQsTUFBTUMsS0FBSyxDQUFDRCxZQUFZLEVBQWIsRUFBaUJFLE1BQWpCLENBQXdCLFVBQUNDLElBQUQsRUFBT0MsRUFBUCxFQUFjO0FBQy9DLFdBQU9SLFFBQVFRLEVBQVIsSUFBY0QsS0FBS0UsTUFBTCxDQUFZRCxFQUFaLENBQWQsR0FBZ0NELEtBQUtFLE1BQUwsQ0FBWSxDQUFDRCxFQUFELENBQVosQ0FBdkM7QUFDRCxHQUZVLEVBRVIsRUFGUSxDQUFYOztBQUlBLFNBQU87QUFDTE4sU0FBSyxPQUFPQSxHQUFQLEtBQWUsUUFBZixHQUEwQkEsSUFBSVEsV0FBSixFQUExQixHQUE4Q1IsR0FEOUM7QUFFTEMsV0FBT0EsU0FBUyxFQUZYO0FBR0xDLGNBQVVDLEdBQUdNLEdBQUgsQ0FBTyxpQkFBUztBQUN4QixVQUFJLE9BQU9DLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDN0IsZUFBTztBQUNMO0FBQ0FWLGVBQUtXLG9CQUZBO0FBR0xWLGlCQUFPO0FBQ0xXLGtCQUFNRjtBQUREO0FBSEYsU0FBUDtBQU9EO0FBQ0QsYUFBT0EsS0FBUDtBQUNELEtBWFM7QUFITCxHQUFQO0FBZ0JEIiwiZmlsZSI6ImNyZWF0ZUVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBURVhUX1RBR19OQU1FIH0gZnJvbSAnLi9jb25zdCdcblxuY29uc3QgeyBpc0FycmF5IH0gPSBBcnJheVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50ICh0YWcsIHByb3BzLCAuLi5jaGlsZHJlbikge1xuICBjb25zdCBjcyA9IChjaGlsZHJlbiB8fCBbXSkucmVkdWNlKChwcmV2LCBlbCkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KGVsKSA/IHByZXYuY29uY2F0KGVsKSA6IHByZXYuY29uY2F0KFtlbF0pXG4gIH0sIFtdKVxuXG4gIHJldHVybiB7XG4gICAgdGFnOiB0eXBlb2YgdGFnID09PSAnc3RyaW5nJyA/IHRhZy50b1VwcGVyQ2FzZSgpIDogdGFnLFxuICAgIHByb3BzOiBwcm9wcyB8fCB7fSxcbiAgICBjaGlsZHJlbjogY3MubWFwKGNoaWxkID0+IHtcbiAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLy8g5paH5pys6IqC54K5XG4gICAgICAgICAgdGFnOiBURVhUX1RBR19OQU1FLFxuICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB0ZXh0OiBjaGlsZFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfSlcbiAgfVxufVxuIl19