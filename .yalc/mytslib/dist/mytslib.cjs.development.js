'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var styles = {"button":"buttonStyles-module_button__3bTuQ"};

var Button = function Button(_ref) {
  var label = _ref.label,
      onClick = _ref.onClick,
      className = _ref.className;
  return React.createElement("div", {
    className: styles.button + " " + (className || ''),
    onClick: onClick
  }, label);
};

var styles$1 = {"panel":"panelStyles-module_panel__1m42W","title":"panelStyles-module_title__acH7n"};

var Panel = function Panel(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return React.createElement("div", {
    className: styles$1.panel
  }, React.createElement("div", {
    className: styles$1.title
  }, title, React.createElement("i", {
    className: 'icon-heart'
  })), React.createElement("div", {
    className: styles$1.contentContainer
  }, children));
};

var sum = function sum(a, b) {
  return a + b;
};

exports.Button = Button;
exports.Panel = Panel;
exports.sum = sum;
//# sourceMappingURL=mytslib.cjs.development.js.map
