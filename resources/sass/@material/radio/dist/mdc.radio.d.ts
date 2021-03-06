// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../../@material/base/component
//   ../../@material/ripple/component
//   ../../@material/ripple/types
//   ../../@material/base/foundation

declare module '@material/radio' {
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
    export * from 'resources/sass/@material/radio/adapter';
    export * from 'resources/sass/@material/radio/component';
    export * from 'resources/sass/@material/radio/constants';
    export * from 'resources/sass/@material/radio/foundation';
}

declare module '@material/radio/adapter' {
    /**
        * Defines the shape of the adapter expected by the foundation.
        * Implement this adapter for your framework of choice to delegate updates to
        * the component in your framework of choice. See architecture documentation
        * for more details.
        * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
        */
    export interface MDCRadioAdapter {
            addClass(className: string): void;
            removeClass(className: string): void;
            setNativeControlDisabled(disabled: boolean): void;
    }
}

declare module '@material/radio/component' {
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
    import { MDCRipple } from 'resources/sass/@material/ripple/component';
    import { MDCRippleCapableSurface } from 'resources/sass/@material/ripple/types';
    import { MDCRadioFoundation } from 'resources/sass/@material/radio/foundation';
    export class MDCRadio extends MDCComponent<MDCRadioFoundation> implements MDCRippleCapableSurface {
        static attachTo(root: Element): MDCRadio;
        get checked(): boolean;
        set checked(checked: boolean);
        get disabled(): boolean;
        set disabled(disabled: boolean);
        get value(): string;
        set value(value: string);
        get ripple(): MDCRipple;
        destroy(): void;
        getDefaultFoundation(): MDCRadioFoundation;
    }
}

declare module '@material/radio/constants' {
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
    const strings: {
        NATIVE_CONTROL_SELECTOR: string;
    };
    const cssClasses: {
        DISABLED: string;
        ROOT: string;
    };
    export { strings, cssClasses };
}

declare module '@material/radio/foundation' {
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
    import { MDCRadioAdapter } from 'resources/sass/@material/radio/adapter';
    export class MDCRadioFoundation extends MDCFoundation<MDCRadioAdapter> {
        static get cssClasses(): {
            DISABLED: string;
            ROOT: string;
        };
        static get strings(): {
            NATIVE_CONTROL_SELECTOR: string;
        };
        static get defaultAdapter(): MDCRadioAdapter;
        constructor(adapter?: Partial<MDCRadioAdapter>);
        setDisabled(disabled: boolean): void;
    }
    export default MDCRadioFoundation;
}

