class MiFooter extends HTMLElement{
  connectedCallback(){
    this.innerHTML = /* html */
      `Copyright &copy; 2021 Edgar Alejandro Ortiz Trejo.`;
  }
}
customElements.define(`mi-footer`, MiFooter);
