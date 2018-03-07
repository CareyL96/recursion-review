var stringifyJSON = function(obj) {

  var result = [];

  if (obj === null || typeof obj === 'number' || typeof obj === 'boolean') {
    return '' + obj;
  } else if (typeof obj === 'string') {
    return '"' + obj + '"'; 
  
  } else if (Array.isArray(obj)) {

    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return "[" + result.join() + "]";
  } else {

    if (!Object.keys(obj).length) {
      return '{}';
    }
    for (var key in obj) {
      if (!(typeof obj[key] === 'function' || obj[key] === undefined)) {
        result.push("\"" + key + '\":' + stringifyJSON(obj[key]));
      }
    }
    return "{" + result.join() + "}";
  }
};