export default class ColourText extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot!.innerHTML
    }
}

// export function ColourText(text: string, colour: string) : HTMLElement {
//     const element = document.createElement('div');
//     element.classList.add('colour-text');
//     element.textContent = text;
//     element.style.color = colour;
//     return element;
// }