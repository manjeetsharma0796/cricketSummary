const textFormat = function(colorCode, text) {
  return "\033[" + colorCode + "m" + text + "\033[0m"
};

const boldUnderline = function(text) {
  return textFormat("1;4", text);
};

const highlighterBlue = function(text) {
  return textFormat("38;5;123", text);
}; 

const highlighterYellow = function(text) {
  return textFormat("38;5;226", text);
};

exports.boldUnderline = boldUnderline;
exports.highlighterBlue = highlighterBlue;
exports.highlighterYellow = highlighterYellow;
