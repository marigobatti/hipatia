"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _theme = require("@hipatia/theme");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledButton = _styledComponents["default"].button.withConfig({
  displayName: "src__StyledButton",
  componentId: "sc-513ncg-0"
})(["background-color:#000;border-radius:4px;color:#fff;cursor:pointer;flex-shrink:0;font-size:0.88rem;font-weight:500;height:40px;line-height:38px;min-width:200px;outline:none;overflow:hidden;padding:0 ", ";text-align:center;text-decoration:none;text-transform:capitalize;transition:all 0.2s ease 0s;user-select:none;white-space:nowrap;:hover{color:#000;border:1px solid #000;background-color:#fff;}", ""], _theme.spacing.extraLarge, function (props) {
  return props.variant === 'secondary' && (0, _styledComponents.css)(["color:#666;background-color:white;border:1px solid #eaeaea;:hover{color:#fff;border:1px solid #000;background-color:#000;}"]);
});

var Button = function Button(props) {
  return /*#__PURE__*/_react["default"].createElement(StyledButton, props);
};

exports.Button = Button;
var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50c3giXSwibmFtZXMiOlsiU3R5bGVkQnV0dG9uIiwic3R5bGVkIiwiYnV0dG9uIiwic3BhY2luZyIsImV4dHJhTGFyZ2UiLCJwcm9wcyIsInZhcmlhbnQiLCJjc3MiLCJCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7OztBQUtBLElBQU1BLFlBQVksR0FBR0MsNkJBQU9DLE1BQVY7QUFBQTtBQUFBO0FBQUEsd1pBYURDLGVBQVFDLFVBYlAsRUF5QlosVUFBQUMsS0FBSztBQUFBLFNBQ0hBLEtBQUssQ0FBQ0MsT0FBTixLQUFrQixXQUFsQixRQUNBQyxxQkFEQSxpSUFERztBQUFBLENBekJPLENBQWxCOztBQTZDTyxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDSCxLQUFEO0FBQUEsc0JBQXdCLGdDQUFDLFlBQUQsRUFBa0JBLEtBQWxCLENBQXhCO0FBQUEsQ0FBZjs7O2VBRVFHLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IHNwYWNpbmcgfSBmcm9tICdAaGlwYXRpYS90aGVtZSc7XG5cblxudHlwZSBBcHBlYXJhbmNlcyA9ICdwcmltYXJ5JyB8ICdzZWNvbmRhcnknO1xuXG5jb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQuYnV0dG9uPEJ1dHRvblByb3BzPmBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgZm9udC1zaXplOiAwLjg4cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDAgJHtzcGFjaW5nLmV4dHJhTGFyZ2V9O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAwcztcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIDpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAke3Byb3BzID0+XG4gICAgICAgIHByb3BzLnZhcmlhbnQgPT09ICdzZWNvbmRhcnknICYmXG4gICAgICAgIGNzc2BcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICAgICAgOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG5gO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvblByb3BzIHtcbiAgICBkaXNhYmxlZD86IGJvb2xlYW47XG4gICAgdmFyaWFudD86IEFwcGVhcmFuY2VzO1xuICAgIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHByb3BzOiBCdXR0b25Qcm9wcykgPT4gPFN0eWxlZEJ1dHRvbiB7Li4ucHJvcHN9IC8+O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXX0=