import { EventEmitter } from '../../stencil-public-runtime';
export declare class DzuBcrumb {
    active: boolean;
    disabled: boolean;
    /**
     * Emitted when the breadcrumb has focus.
     */
    ionFocus: EventEmitter<void>;
    /**
     * Contains a URL or a URL fragment that the hyperlink points to.
     * If this property is set, an anchor tag will be rendered.
     */
    href: string | undefined;
    /**
     * Emitted when the breadcrumb loses focus.
     */
    ionBlur: EventEmitter<void>;
    private onFocus;
    private onBlur;
    render(): any;
}
