"use strict";

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = _interopRequireDefault(require("./"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Button', function () {
  test('renders correctly', function () {
    var tree = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_["default"], null, 'Test')).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9idXR0b24uc3BlYy50c3giXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJ0ZXN0IiwidHJlZSIsInJlbmRlcmVyIiwiY3JlYXRlIiwidG9KU09OIiwiZXhwZWN0IiwidG9NYXRjaFNuYXBzaG90Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBOztBQUNBOztBQUVBOzs7O0FBR0FBLFFBQVEsQ0FBQyxRQUFELEVBQVcsWUFBTTtBQUNyQkMsRUFBQUEsSUFBSSxDQUFDLG1CQUFELEVBQXNCLFlBQU07QUFDNUIsUUFBTUMsSUFBSSxHQUFHQyw4QkFBU0MsTUFBVCxlQUFnQixnQ0FBQyxZQUFELFFBQVMsTUFBVCxDQUFoQixFQUEyQ0MsTUFBM0MsRUFBYjs7QUFDQUMsSUFBQUEsTUFBTSxDQUFDSixJQUFELENBQU4sQ0FBYUssZUFBYjtBQUNILEdBSEcsQ0FBSjtBQUlILENBTE8sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnamVzdC1zdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlcic7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi8nO1xuXG5cbmRlc2NyaWJlKCdCdXR0b24nLCAoKSA9PiB7XG4gICAgdGVzdCgncmVuZGVycyBjb3JyZWN0bHknLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRyZWUgPSByZW5kZXJlci5jcmVhdGUoPEJ1dHRvbj57J1Rlc3QnfTwvQnV0dG9uPikudG9KU09OKCk7XG4gICAgICAgIGV4cGVjdCh0cmVlKS50b01hdGNoU25hcHNob3QoKTtcbiAgICB9KTtcbn0pO1xuIl19