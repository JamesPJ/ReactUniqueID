# ReactUniqueID
A HOC for react to get/create unique element ID
---------------

This ReactJS HOC provides methods letting you generate unique IDs for
your current component. This is useful when you need to assign `for=""`
attributes for labels and their respective inputs.

Install
-------

    ```//Will be updating soon```

Example Usage
-------------

```js
import uniqueElementID from 'react-unique-id';

class MyComponent extends Component{

    render() {
        const {getNextUid} = this.props;
        return (
            <div>
                <label htmlFor={getNextUid( 'unique-string' ) }>Label</label>
                <input id={ getNextUid( 'unique-string' ) } type="text" />
            </div>
        );
    }
};
```

The above can be a bit verbose to type, and has the problem that you need to
duplicate the string between each HTML element. There is also a convenience
method that will generate UIDs every *other* call. The first two calls will
return the same UID, then the next two calls will return a new UID, etc.

```xml
<!-- Both function calls return the same UID -->
<label htmlFor={ getNextHtmlFor() }>Label</label>
<input id={ getNextHtmlFor() } type="text" />

<!-- Both calls now return the same UID, but different than above -->
<label htmlFor={ getNextHtmlFor() }>Label</label>
<input id={ getNextHtmlFor() } type="text" />
```

Props
---
The HOC provides two prop functions

**`getNextUid( identifier:String )`**

Returns a UID generated using the `identifier`. If `identifier` has already
been passed, the cached UID will be returned.

**`getNextHtmlFor()`**

Returns a UID which changes every other call.


Credits
---
The base functionality is inherited from [Unique-Id-Mixin](https://github.com/AndrewRayCode/Unique-Id-Mixin)