'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.default = mapProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keys = _keys2.default;
function mapProps(props) {
  var ret = {};
  var names = keys(props);

  names.forEach(function (name) {
    ret[('' + name).toLowerCase()] = props[name];
  });

  return ret;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vbWFwUHJvcHMuanMiXSwibmFtZXMiOlsibWFwUHJvcHMiLCJrZXlzIiwicHJvcHMiLCJyZXQiLCJuYW1lcyIsImZvckVhY2giLCJuYW1lIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0JBRXdCQSxROzs7O0lBRmhCQyxJO0FBRU8sU0FBU0QsUUFBVCxDQUFtQkUsS0FBbkIsRUFBMEI7QUFDdkMsTUFBTUMsTUFBTSxFQUFaO0FBQ0EsTUFBTUMsUUFBUUgsS0FBS0MsS0FBTCxDQUFkOztBQUVBRSxRQUFNQyxPQUFOLENBQWMsZ0JBQVE7QUFDcEJGLFFBQUksQ0FBQyxLQUFLRyxJQUFOLEVBQVlDLFdBQVosRUFBSixJQUFpQ0wsTUFBTUksSUFBTixDQUFqQztBQUNELEdBRkQ7O0FBSUEsU0FBT0gsR0FBUDtBQUNEIiwiZmlsZSI6Im1hcFByb3BzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBrZXlzIH0gPSBPYmplY3RcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFwUHJvcHMgKHByb3BzKSB7XG4gIGNvbnN0IHJldCA9IHt9XG4gIGNvbnN0IG5hbWVzID0ga2V5cyhwcm9wcylcblxuICBuYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIHJldFsoJycgKyBuYW1lKS50b0xvd2VyQ2FzZSgpXSA9IHByb3BzW25hbWVdXG4gIH0pXG5cbiAgcmV0dXJuIHJldFxufVxuIl19