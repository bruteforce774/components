export default class ColourText extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const text = this.getAttribute('text') ?? "Hello World";
        const colour = this.getAttribute('colour') ?? "blue";
        this.shadowRoot!.innerHTML = /*HTML*/`
            <style>
                div {
                    color: ${colour};
                    font-family: Arial, sans-serif;
                    font-size: 20px;
                }
            </style>
            <div>${text}</div>
        `;
        const div = this.shadowRoot!.querySelector('div')!;
        div.style.color = colour;
    }
}

// export function ColourText(text: string, colour: string) : HTMLElement {
//     const element = document.createElement('div');
//     element.classList.add('colour-text');
//     element.textContent = text;
//     element.style.color = colour;
//     return element;
// }