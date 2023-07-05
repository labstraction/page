export class TextCell extends HTMLElement {

    constructor(){
      this.setAttribute('contenteditable', true);
    }


    connectedCallback() {
      this.textContent = 'Hello World!';
    }
  
}

customElements.define( 'text-cell', TextCell )