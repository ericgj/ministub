
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

```

## License

  MIT

[mt]: https://github.com/seattlerb/minitest

