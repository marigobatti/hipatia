"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _theme = require("@hipatia/theme");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledContainer = _styledComponents["default"].div.withConfig({
  displayName: "src__StyledContainer",
  componentId: "sc-9z43hk-0"
})(["width:100%;"]);

var StyledLabel = _styledComponents["default"].label.withConfig({
  displayName: "src__StyledLabel",
  componentId: "sc-9z43hk-1"
})(["color:#868686;font-family:'Fira Sans';font-size:0.8rem;text-transform:uppercase;"]);

var StyledInput = _styledComponents["default"].input.withConfig({
  displayName: "src__StyledInput",
  componentId: "sc-9z43hk-2"
})(["background-color:transparent;border-radius:4px;border:1px solid #ccc;box-shadow:none;box-sizing:border-box;caret-color:#000;color:#000;display:block;font-size:14px;height:40px;line-height:26px;padding:10px;margin:", " 0 ", ";width:100%;::placeholder{color:#999;}", ""], _theme.spacing.extraSmall, _theme.spacing.small, function (props) {
  return props.disabled && (0, _styledComponents.css)(["color:#999999;background-color:#fafafa;cursor:not-allowed;"]);
});

var Input = function Input(_ref) {
  var disabled = _ref.disabled,
      id = _ref.id,
      label = _ref.label,
      placeholder = _ref.placeholder;
  return /*#__PURE__*/_react["default"].createElement(StyledContainer, null, /*#__PURE__*/_react["default"].createElement(StyledLabel, {
    htmlFor: id
  }, label), /*#__PURE__*/_react["default"].createElement(StyledInput, {
    disabled: disabled,
    id: id,
    placeholder: placeholder,
    type: "text"
  }));
};

var _default = Input;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50c3giXSwibmFtZXMiOlsiU3R5bGVkQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiU3R5bGVkTGFiZWwiLCJsYWJlbCIsIlN0eWxlZElucHV0IiwiaW5wdXQiLCJzcGFjaW5nIiwiZXh0cmFTbWFsbCIsInNtYWxsIiwicHJvcHMiLCJkaXNhYmxlZCIsImNzcyIsIklucHV0IiwiaWQiLCJwbGFjZWhvbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7O0FBR0EsSUFBTUEsZUFBZSxHQUFHQyw2QkFBT0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxtQkFBckI7O0FBSUEsSUFBTUMsV0FBVyxHQUFHRiw2QkFBT0csS0FBVjtBQUFBO0FBQUE7QUFBQSx3RkFBakI7O0FBYUEsSUFBTUMsV0FBVyxHQUFHSiw2QkFBT0ssS0FBVjtBQUFBO0FBQUE7QUFBQSxtUkFhSEMsZUFBUUMsVUFiTCxFQWFxQkQsZUFBUUUsS0FiN0IsRUFrQlgsVUFBQUMsS0FBSztBQUFBLFNBQ0hBLEtBQUssQ0FBQ0MsUUFBTixRQUNBQyxxQkFEQSxpRUFERztBQUFBLENBbEJNLENBQWpCOztBQTZCQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLE1BQUdGLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWFHLEVBQWIsUUFBYUEsRUFBYjtBQUFBLE1BQWlCVixLQUFqQixRQUFpQkEsS0FBakI7QUFBQSxNQUF3QlcsV0FBeEIsUUFBd0JBLFdBQXhCO0FBQUEsc0JBQ1YsZ0NBQUMsZUFBRCxxQkFDSSxnQ0FBQyxXQUFEO0FBQWEsSUFBQSxPQUFPLEVBQUVEO0FBQXRCLEtBQTJCVixLQUEzQixDQURKLGVBRUksZ0NBQUMsV0FBRDtBQUFhLElBQUEsUUFBUSxFQUFFTyxRQUF2QjtBQUFpQyxJQUFBLEVBQUUsRUFBRUcsRUFBckM7QUFBeUMsSUFBQSxXQUFXLEVBQUVDLFdBQXREO0FBQW1FLElBQUEsSUFBSSxFQUFDO0FBQXhFLElBRkosQ0FEVTtBQUFBLENBQWQ7O2VBT2VGLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IHNwYWNpbmcgfSBmcm9tICdAaGlwYXRpYS90aGVtZSc7XG5cblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IFN0eWxlZExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICAgIGNvbG9yOiAjODY4Njg2O1xuICAgIGZvbnQtZmFtaWx5OiAnRmlyYSBTYW5zJztcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuYDtcblxuaW50ZXJmYWNlIFN0eWxlZElucHV0UHJvcHMge1xuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgICBpZDogc3RyaW5nO1xuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xufVxuXG5jb25zdCBTdHlsZWRJbnB1dCA9IHN0eWxlZC5pbnB1dDxTdHlsZWRJbnB1dFByb3BzPmBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY2FyZXQtY29sb3I6ICMwMDA7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogJHtzcGFjaW5nLmV4dHJhU21hbGx9IDAgJHtzcGFjaW5nLnNtYWxsfTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICA6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgfVxuICAgICR7cHJvcHMgPT5cbiAgICAgICAgcHJvcHMuZGlzYWJsZWQgJiZcbiAgICAgICAgY3NzYFxuICAgICAgICAgICAgY29sb3I6ICM5OTk5OTk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgYH1cbmA7XG5cbmV4cG9ydCB0eXBlIElucHV0UHJvcHMgPSBTdHlsZWRJbnB1dFByb3BzICYgeyBsYWJlbDogc3RyaW5nIH07XG5cbmNvbnN0IElucHV0ID0gKHsgZGlzYWJsZWQsIGlkLCBsYWJlbCwgcGxhY2Vob2xkZXIgfTogSW5wdXRQcm9wcykgPT4gKFxuICAgIDxTdHlsZWRDb250YWluZXI+XG4gICAgICAgIDxTdHlsZWRMYWJlbCBodG1sRm9yPXtpZH0+e2xhYmVsfTwvU3R5bGVkTGFiZWw+XG4gICAgICAgIDxTdHlsZWRJbnB1dCBkaXNhYmxlZD17ZGlzYWJsZWR9IGlkPXtpZH0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSB0eXBlPVwidGV4dFwiIC8+XG4gICAgPC9TdHlsZWRDb250YWluZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdfQ==