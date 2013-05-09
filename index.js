

module.exports = function(obj, name, val_or_fn, fn){
  try {
    var newName = "__ministub__" + name;
    obj[newName] = obj[name];
    obj[name] = function(){
      if (typeof val_or_fn == 'function') {
        return val_or_fn.apply(this, arguments);
      } else {
        return val_or_fn;
      }
    };

    return fn(obj);

  } finally {
    obj[name] = obj[newName];
    delete obj[newName];
  }
}
