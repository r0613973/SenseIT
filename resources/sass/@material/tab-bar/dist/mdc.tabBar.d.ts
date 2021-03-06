// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../../@material/tab/types
//   ../../@material/base/component
//   ../../@material/tab-scroller/component
//   ../../@material/tab/component
//   ../../@material/base/foundation

declare module '@material/tab-bar' {
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
    export * from 'resources/sass/@material/tab-bar/adapter';
    export * from 'resources/sass/@material/tab-bar/component';
    export * from 'resources/sass/@material/tab-bar/constants';
    export * from 'resources/sass/@material/tab-bar/foundation';
    export * from 'resources/sass/@material/tab-bar/types';
}

declare module '@material/tab-bar/adapter' {
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
    import { MDCTabDimensions } from 'resources/sass/@material/tab/types';
    /**
        * Defines the shape of the adapter expected by the foundation.
        * Implement this adapter for your framework of choice to delegate updates to
        * the component in your framework of choice. See architecture documentation
        * for more details.
        * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
        */
    export interface MDCTabBarAdapter {
            /**
                * Scrolls to the given position
                * @param scrollX The position to scroll to
                */
            scrollTo(scrollX: number): void;
            /**
                * Increments the current scroll position by the given amount
                * @param scrollXIncrement The amount to increment scroll
                */
            incrementScroll(scrollXIncrement: number): void;
            /**
                * Returns the current scroll position
                */
            getScrollPosition(): number;
            /**
                * Returns the width of the scroll content
                */
            getScrollContentWidth(): number;
            /**
                * Returns the root element's offsetWidth
                */
            getOffsetWidth(): number;
            /**
                * Returns if the Tab Bar language direction is RTL
                */
            isRTL(): boolean;
            /**
                * Sets the tab at the given index to be activated
                * @param index The index of the tab to activate
                */
            setActiveTab(index: number): void;
            /**
                * Activates the tab at the given index with the given client rect
                * @param index The index of the tab to activate
                * @param clientRect The client rect of the previously active Tab Indicator
                */
            activateTabAtIndex(index: number, clientRect?: ClientRect): void;
            /**
                * Deactivates the tab at the given index
                * @param index The index of the tab to deactivate
                */
            deactivateTabAtIndex(index: number): void;
            /**
                * Focuses the tab at the given index
                * @param index The index of the tab to focus
                */
            focusTabAtIndex(index: number): void;
            /**
                * Returns the client rect of the tab's indicator
                * @param index The index of the tab
                */
            getTabIndicatorClientRectAtIndex(index: number): ClientRect;
            /**
                * Returns the tab dimensions of the tab at the given index
                * @param index The index of the tab
                */
            getTabDimensionsAtIndex(index: number): MDCTabDimensions;
            /**
                * Returns the length of the tab list
                */
            getTabListLength(): number;
            /**
                * Returns the index of the previously active tab
                */
            getPreviousActiveTabIndex(): number;
            /**
                * Returns the index of the focused tab
                */
            getFocusedTabIndex(): number;
            /**
                * Returns the index of the given tab
                * @param id The ID of the tab whose index to determine
                */
            getIndexOfTabById(id: string): number;
            /**
                * Emits the MDCTabBar:activated event
                * @param index The index of the activated tab
                */
            notifyTabActivated(index: number): void;
    }
}

declare module '@material/tab-bar/component' {
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
    import { MDCComponent } from 'resources/sass/@material/base/component';
    import { MDCTabScrollerFactory } from 'resources/sass/@material/tab-scroller/component';
    import { MDCTabFactory } from 'resources/sass/@material/tab/component';
    import { MDCTabBarFoundation } from 'resources/sass/@material/tab-bar/foundation';
    export class MDCTabBar extends MDCComponent<MDCTabBarFoundation> {
            static attachTo(root: Element): MDCTabBar;
            set focusOnActivate(focusOnActivate: boolean);
            set useAutomaticActivation(useAutomaticActivation: boolean);
            initialize(tabFactory?: MDCTabFactory, tabScrollerFactory?: MDCTabScrollerFactory): void;
            initialSyncWithDOM(): void;
            destroy(): void;
            getDefaultFoundation(): MDCTabBarFoundation;
            /**
                * Activates the tab at the given index
                * @param index The index of the tab
                */
            activateTab(index: number): void;
            /**
                * Scrolls the tab at the given index into view
                * @param index THe index of the tab
                */
            scrollIntoView(index: number): void;
    }
}

declare module '@material/tab-bar/constants' {
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
    const strings: {
        ARROW_LEFT_KEY: string;
        ARROW_RIGHT_KEY: string;
        END_KEY: string;
        ENTER_KEY: string;
        HOME_KEY: string;
        SPACE_KEY: string;
        TAB_ACTIVATED_EVENT: string;
        TAB_SCROLLER_SELECTOR: string;
        TAB_SELECTOR: string;
    };
    const numbers: {
        ARROW_LEFT_KEYCODE: number;
        ARROW_RIGHT_KEYCODE: number;
        END_KEYCODE: number;
        ENTER_KEYCODE: number;
        EXTRA_SCROLL_AMOUNT: number;
        HOME_KEYCODE: number;
        SPACE_KEYCODE: number;
    };
    export { numbers, strings };
}

declare module '@material/tab-bar/foundation' {
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
    import { MDCFoundation } from 'resources/sass/@material/base/foundation';
    import { MDCTabInteractionEvent } from 'resources/sass/@material/tab/types';
    import { MDCTabBarAdapter } from 'resources/sass/@material/tab-bar/adapter';
    export class MDCTabBarFoundation extends MDCFoundation<MDCTabBarAdapter> {
            static get strings(): {
                    ARROW_LEFT_KEY: string;
                    ARROW_RIGHT_KEY: string;
                    END_KEY: string;
                    ENTER_KEY: string;
                    HOME_KEY: string;
                    SPACE_KEY: string;
                    TAB_ACTIVATED_EVENT: string;
                    TAB_SCROLLER_SELECTOR: string;
                    TAB_SELECTOR: string;
            };
            static get numbers(): {
                    ARROW_LEFT_KEYCODE: number;
                    ARROW_RIGHT_KEYCODE: number;
                    END_KEYCODE: number;
                    ENTER_KEYCODE: number;
                    EXTRA_SCROLL_AMOUNT: number;
                    HOME_KEYCODE: number;
                    SPACE_KEYCODE: number;
            };
            static get defaultAdapter(): MDCTabBarAdapter;
            constructor(adapter?: Partial<MDCTabBarAdapter>);
            /**
                * Switches between automatic and manual activation modes.
                * See https://www.w3.org/TR/wai-aria-practices/#tabpanel for examples.
                */
            setUseAutomaticActivation(useAutomaticActivation: boolean): void;
            activateTab(index: number): void;
            handleKeyDown(evt: KeyboardEvent): void;
            /**
                * Handles the MDCTab:interacted event
                */
            handleTabInteraction(evt: MDCTabInteractionEvent): void;
            /**
                * Scrolls the tab at the given index into view
                * @param index The tab index to make visible
                */
            scrollIntoView(index: number): void;
    }
    export default MDCTabBarFoundation;
}

declare module '@material/tab-bar/types' {
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
    export interface MDCTabBarActivatedEventDetail {
        index: number;
    }
    export interface MDCTabBarActivatedEvent extends Event {
        readonly detail: MDCTabBarActivatedEventDetail;
    }
}

