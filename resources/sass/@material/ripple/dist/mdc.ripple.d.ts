// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../../@material/base/types
//   ../../@material/base/component
//   ../../@material/base/foundation

declare module '@material/ripple' {
    /**
      * @license
      * Copyright 2019 Google Inc.
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
    import * as util from 'resources/sass/@material/ripple/util';
    export { util };
    export * from 'resources/sass/@material/ripple/adapter';
    export * from 'resources/sass/@material/ripple/component';
    export * from 'resources/sass/@material/ripple/constants';
    export * from 'resources/sass/@material/ripple/foundation';
    export * from 'resources/sass/@material/ripple/types';
}

declare module '@material/ripple/util' {
    /**
      * @license
      * Copyright 2016 Google Inc.
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
    import { MDCRipplePoint } from 'resources/sass/@material/ripple/types';
    export function supportsCssVariables(windowObj: typeof globalThis, forceRefresh?: boolean): boolean;
    export function getNormalizedEventCoords(evt: Event | undefined, pageOffset: MDCRipplePoint, clientRect: ClientRect): MDCRipplePoint;
}

declare module '@material/ripple/adapter' {
    /**
        * @license
        * Copyright 2016 Google Inc.
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
    import { EventType, SpecificEventListener } from 'resources/sass/@material/base/types';
    import { MDCRipplePoint } from 'resources/sass/@material/ripple/types';
    /**
        * Defines the shape of the adapter expected by the foundation.
        * Implement this adapter for your framework of choice to delegate updates to
        * the component in your framework of choice. See architecture documentation
        * for more details.
        * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
        */
    export interface MDCRippleAdapter {
            browserSupportsCssVars(): boolean;
            isUnbounded(): boolean;
            isSurfaceActive(): boolean;
            isSurfaceDisabled(): boolean;
            addClass(className: string): void;
            removeClass(className: string): void;
            containsEventTarget(target: EventTarget | null): boolean;
            registerInteractionHandler<K extends EventType>(evtType: K, handler: SpecificEventListener<K>): void;
            deregisterInteractionHandler<K extends EventType>(evtType: K, handler: SpecificEventListener<K>): void;
            registerDocumentInteractionHandler<K extends EventType>(evtType: K, handler: SpecificEventListener<K>): void;
            deregisterDocumentInteractionHandler<K extends EventType>(evtType: K, handler: SpecificEventListener<K>): void;
            registerResizeHandler(handler: SpecificEventListener<'resize'>): void;
            deregisterResizeHandler(handler: SpecificEventListener<'resize'>): void;
            updateCssVariable(varName: string, value: string | null): void;
            computeBoundingRect(): ClientRect;
            getWindowPageOffset(): MDCRipplePoint;
    }
}

declare module '@material/ripple/component' {
    /**
        * @license
        * Copyright 2016 Google Inc.
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
    import { MDCComponent } from 'resources/sass/@material/base/component';
    import { MDCRippleAdapter } from 'resources/sass/@material/ripple/adapter';
    import { MDCRippleFoundation } from 'resources/sass/@material/ripple/foundation';
    import { MDCRippleAttachOpts, MDCRippleCapableSurface } from 'resources/sass/@material/ripple/types';
    export type MDCRippleFactory = (el: Element, foundation?: MDCRippleFoundation) => MDCRipple;
    export class MDCRipple extends MDCComponent<MDCRippleFoundation> implements MDCRippleCapableSurface {
            static attachTo(root: Element, opts?: MDCRippleAttachOpts): MDCRipple;
            static createAdapter(instance: MDCRippleCapableSurface): MDCRippleAdapter;
            disabled: boolean;
            get unbounded(): boolean;
            set unbounded(unbounded: boolean);
            activate(): void;
            deactivate(): void;
            layout(): void;
            getDefaultFoundation(): MDCRippleFoundation;
            initialSyncWithDOM(): void;
    }
}

declare module '@material/ripple/constants' {
    /**
      * @license
      * Copyright 2016 Google Inc.
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
    export const cssClasses: {
        BG_FOCUSED: string;
        FG_ACTIVATION: string;
        FG_DEACTIVATION: string;
        ROOT: string;
        UNBOUNDED: string;
    };
    export const strings: {
        VAR_FG_SCALE: string;
        VAR_FG_SIZE: string;
        VAR_FG_TRANSLATE_END: string;
        VAR_FG_TRANSLATE_START: string;
        VAR_LEFT: string;
        VAR_TOP: string;
    };
    export const numbers: {
        DEACTIVATION_TIMEOUT_MS: number;
        FG_DEACTIVATION_MS: number;
        INITIAL_ORIGIN_SCALE: number;
        PADDING: number;
        TAP_DELAY_MS: number;
    };
}

declare module '@material/ripple/foundation' {
    /**
        * @license
        * Copyright 2016 Google Inc.
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
    import { MDCFoundation } from 'resources/sass/@material/base/foundation';
    import { MDCRippleAdapter } from 'resources/sass/@material/ripple/adapter';
    export class MDCRippleFoundation extends MDCFoundation<MDCRippleAdapter> {
            static get cssClasses(): {
                    BG_FOCUSED: string;
                    FG_ACTIVATION: string;
                    FG_DEACTIVATION: string;
                    ROOT: string;
                    UNBOUNDED: string;
            };
            static get strings(): {
                    VAR_FG_SCALE: string;
                    VAR_FG_SIZE: string;
                    VAR_FG_TRANSLATE_END: string;
                    VAR_FG_TRANSLATE_START: string;
                    VAR_LEFT: string;
                    VAR_TOP: string;
            };
            static get numbers(): {
                    DEACTIVATION_TIMEOUT_MS: number;
                    FG_DEACTIVATION_MS: number;
                    INITIAL_ORIGIN_SCALE: number;
                    PADDING: number;
                    TAP_DELAY_MS: number;
            };
            static get defaultAdapter(): MDCRippleAdapter;
            constructor(adapter?: Partial<MDCRippleAdapter>);
            init(): void;
            destroy(): void;
            /**
                * @param evt Optional event containing position information.
                */
            activate(evt?: Event): void;
            deactivate(): void;
            layout(): void;
            setUnbounded(unbounded: boolean): void;
            handleFocus(): void;
            handleBlur(): void;
    }
    export default MDCRippleFoundation;
}

declare module '@material/ripple/types' {
    /**
        * @license
        * Copyright 2019 Google Inc.
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
    export interface MDCRipplePoint {
            x: number;
            y: number;
    }
    /**
        * Options passed in when attaching a ripple to an object.
        */
    export interface MDCRippleAttachOpts {
            isUnbounded?: boolean;
    }
    /**
        * See Material Design spec for more details on when to use ripples.
        * https://material.io/guidelines/motion/choreography.html#choreography-creation
        * unbounded Whether or not the ripple bleeds out of the bounds of the element.
        * disabled Whether or not the ripple is attached to a disabled component.
        */
    export interface MDCRippleCapableSurface {
            root: Element;
            unbounded?: boolean;
            disabled?: boolean;
    }
}

