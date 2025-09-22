import ColourText from './components/ColourText'

customElements.define('colour-text', ColourText)
render();

function render() {
  const app: HTMLElement | null = document.getElementById('app');
  if (app) {
    app.innerHTML = /*HTML*/`
      <colour-text colour="blue" text="Hello World"></colour-text>
    `;
  }

  // const colourText1 = ColourText('Hello World', 'blue');
  // app.appendChild(colourText1);
}