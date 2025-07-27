import getBackground from "./img/formats.js";

const template = document.createElement("div");
template.innerHTML = `
    <label>
        <input type="checkbox">
        <span><slot></slot></span>
    </label>
`;

class DrakeCheckbox extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            <style>
                label {
                    display: inline-block;
                }
                span {
                    display: inline-block;
                    height: 100%;
                    transform: translateY(0.075em);
                }
                input {
                    appearance: none;
                    width: 1.6em;
                    height: 1.6em;
                    background-size: 100%;
                    background-position: 50% 0%;
                    transition: background-position 300ms;
                    vertical-align: middle;
                    border-radius: 0.2em;

                    &:checked {
                        background-position: 50% 100%;
                    }

                    &:disabled {
                        filter: saturate(0);
                    }
                }
                [disabled] {
                    opacity: 50%;
                }
            </style>
            <label>
                <input type="checkbox">
                <span><slot></slot></span>
            </label>
        `;
        this.input = this.shadowRoot.querySelector("input");
        this.input.addEventListener("change", () => this.onChange());
        this.update();
    }

    onChange() {
        if (this.input.checked) this.setAttribute("checked", "true");
        else this.removeAttribute("checked");
    }

    get checked() {
        return this.input.checked;
    }

    set checked(value) {
        this.input.checked = value;
        this.onChange();
    }

    get disabled() {
        return this.input.disabled;
    }

    set disabled(value) {
        this.input.disabled = value;
        this.onChange();
    }

    attributeChangedCallback() {
        this.update();
    }

    update() {
        const checked = this.getAttribute("checked");
        this.input.checked = checked !== null && checked !== "false";
        const disabled = this.getAttribute("disabled");
        this.input.disabled = disabled !== null && disabled !== "false";
        this.input.style.backgroundImage = getBackground(this.getAttribute("format"));
        this.input.setAttribute("name", this.getAttribute("name"));
    }
}

customElements.define("drake-checkbox", DrakeCheckbox);

