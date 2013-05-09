
# ministub

  Simple stub utility translated from Ruby's [MiniTest][mt]

## Installation

    $ component install ericgj/ministub

## API

### Stub( obj, name, val_or_fn, fn )

  Stub the method `name` of `obj` with `val_or_fn` for the duration of block `fn`.

## Examples

```javascript

var stub = require('ministub');

var foo = { bar: 'bar' };

stub(foo, 'bar', 'baz', function(){
  foo.bar  // 'baz'
});

foo.bar  // 'bar'

/* example using a spy */

var Spy = function(){
  this.calls = [];
  return this;
}
Spy.prototype.listen = function(){
  this.calls.push([].slice.call(arguments,0));
}

var spy = new Spy;

foo.bar = function(x){ /* ... */ }

stub(foo, 'bar', spy.listen, function(){
  foo.bar(23);
}); 

spy.calls[0]  // [23]
```

## License

  MIT

[mt]: https://github.com/seattlerb/minitest

