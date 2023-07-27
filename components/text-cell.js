export class TextCell extends HTMLElement {

    constructor(){
      
    }


    connectedCallback() {
      this.setAttribute('contenteditable', true);
      this.textContent = 'Hello World!';
    }
  
}

customElements.define( 'text-cell', TextCell )