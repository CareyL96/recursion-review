// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  var results = [];
  node = node || document.body;
  
  if (node.className && node.classList.contains(className)) {
    results.push(node);
  }

  for (var i = 0; i < node.childNodes.length; i++) {
    results = results.concat(getElementsByClassName(className, node.childNodes[i]));
  }

  return results;
};
