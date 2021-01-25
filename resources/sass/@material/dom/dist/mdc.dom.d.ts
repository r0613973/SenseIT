// Generated by dts-bundle v0.7.3

declare module '@material/dom' {
    /**
      * @license
      * Copyright 2018 Google Inc.
      *
      * Permission is hereby granted, free of charge, to any person obtaining a copy
      * of this software and associated documentation files (the "Software"), to deal
      * in the Software without restriction, including without limitation the rights
      * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      * copies of the Software, and to permit persons to whom the Software is
      * furnished to do so, subject to the following conditions:
      *
      * The above copyright notice and this permission notice shall be included in
      * all copies or substantial portions of the Software.
      *
      * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
      * THE SOFTWARE.
      */
    import * as events from 'resources/sass/@material/dom/events';
    import * as focusTrap from 'resources/sass/@material/dom/focus-trap';
    import * as keyboard from 'resources/sass/@material/dom/keyboard';
    import * as ponyfill from 'resources/sass/@material/dom/ponyfill';
    export { events, focusTrap, keyboard, ponyfill };
}

declare module '@material/dom/events' {
    /**
        * Determine whether the current browser supports passive event listeners, and
        * if so, use them.
        */
    export function applyPassive(globalObj?: Window): boolean | EventListenerOptions;
}

declare module '@material/dom/focus-trap' {
    /**
        * Utility to trap focus in a given root element, e.g. for modal components such
        * as dialogs. The root should have at least one focusable child element,
        * for setting initial focus when trapping focus.
        * Also tracks the previously focused element, and restores focus to that
        * element when releasing focus.
        */
    export class FocusTrap {
            constructor(root: HTMLElement, options?: FocusOptions);
            /**
                * Traps focus in `root`. Also focuses on either `initialFocusEl` if set;
                * otherwises sets initial focus to the first focusable child element.
                */
            trapFocus(): void;
            /**
                * Releases focus from `root`. Also restores focus to the previously focused
                * element.
                */
            releaseFocus(): void;
    }
    /** Customization options. */
    export interface FocusOptions {
            initialFocusEl?: HTMLElement;
            skipInitialFocus?: boolean;
    }
}

declare module '@material/dom/keyboard' {
    /**
        * KEY provides normalized string values for keys.
        */
    export const KEY: {
            UNKNOWN: string;
            BACKSPACE: string;
            ENTER: string;
            SPACEBAR: string;
            PAGE_UP: string;
            PAGE_DOWN: string;
            END: string;
            HOME: string;
            ARROW_LEFT: string;
            ARROW_UP: string;
            ARROW_RIGHT: string;
            ARROW_DOWN: string;
            DELETE: string;
            ESCAPE: string;
    };
    /**
        * normalizeKey returns the normalized string for a navigational action.
        */
    export function normalizeKey(evt: KeyboardEvent): string;
    /**
        * isNavigationEvent returns whether the event is a navigation event
        */
    export function isNavigationEvent(evt: KeyboardEvent): boolean;
}

declare module '@material/dom/ponyfill' {
    /**
        * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
        * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
        */
    export function closest(element: Element, selector: string): Element | null;
    export function matches(element: Element, selector: string): boolean;
    /**
        * Used to compute the estimated scroll width of elements. When an element is
        * hidden due to display: none; being applied to a parent element, the width is
        * returned as 0. However, the element will have a true width once no longer
        * inside a display: none context. This method computes an estimated width when
        * the element is hidden or returns the true width when the element is visble.
        * @param {Element} element the element whose width to estimate
        */
    export function estimateScrollWidth(element: Element): number;
}

