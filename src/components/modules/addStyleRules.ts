// keyframes適用のための関数
// API : https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule
// types of CSSStyleSheet : https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.cssstylesheet.html

const addStyleRules = (rules: string) => {
  const styleElem = document.createElement("style");
  document.head.appendChild(styleElem);
  let styleSheet = styleElem.sheet as CSSStyleSheet | null;
  styleSheet === null
    ? console.log("err")
    : styleSheet.insertRule(rules, styleSheet.cssRules.length);
};

export default addStyleRules;
