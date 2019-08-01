declare module 'bindEvent';

function bindEvent(
    elm: HTMLElement,
    type: string,
    listener: (this: HTMLDocument, ev: DocumentEventMap[K]) => any,
    options: boolean | AddEventListenerOptions
):void

export default bindEvent
