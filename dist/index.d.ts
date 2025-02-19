export default class AutoCheckElement extends HTMLElement {
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string): void;
    static get observedAttributes(): string[];
    get input(): HTMLInputElement | null;
    get src(): string;
    set src(value: string);
    get csrf(): string;
    set csrf(value: string);
    get required(): boolean;
    set required(required: boolean);
    get csrfField(): string;
    set csrfField(value: string);
    get useJsonHeader(): boolean;
    get useJsonField(): boolean;
    get json(): string;
    set json(value: string);
}
declare global {
    interface Window {
        AutoCheckElement: typeof AutoCheckElement;
    }
    interface HTMLElementTagNameMap {
        'auto-check': AutoCheckElement;
    }
}
