# bind-event

> Bind event handler for all browsers by adding prefix automaticlly.

## Install

```sh
npm install bind-event --save
```

## Usage

```js
import bindEvent from 'bind-event';

// bind some event
bindEvent(
    document.getElementById('some-element'),
    'transitionend',
    function(evt) {
        if (evt.propertyName == 'opacity' && !evt.target.style.opacity)
            evt.target.parentNode.removeChild(evt.target)
    }
)
```

### result

If client's browser support `transitionend` event type, it will bind listener function directly to the element. If not, it will automaticlly bind listener function to event type prefix with vendor prefix, such as `webkitTransitionend`, `mozTransitionend`, etc...

## Options

```js
bindEvent( HTMLElement, type, listener[, options] );
bindEvent( HTMLElement, type, listener[, useCapture] );
```

### `HTMLElement`

The Element object you want bind for.

### `type`, `listener`, `options`, `useCapture`

The same as `EventTarget.addEventListener()`, read more at [MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).