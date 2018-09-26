import {LitElement, html} from '@polymer/lit-element';
import '@polymer/paper-dialog';

/**
 * `sdl-dialog`
 * Basic Dialog Window
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class SdlDialog extends LitElement {

  constructor() {
    super();

    this.addEventListener('rendered', async (e) => {

      if (typeof this.opened == 'undefined') {
        this.opened = "false";
      }

      var dialog = this.shadowRoot.querySelector('#dialog');
      if (this.opened === "true") {
        dialog.open();
      } else {
        dialog.close();
      }

    });
  }

  firstUpdated(properties) {
    console.log("updated...");
    this.dispatchEvent(new CustomEvent('rendered'));  
  }

  _didRender(props, changedProps, prevProps) {
    console.log('_didRender');
    this.dispatchEvent(new CustomEvent('rendered'));  
  }

  renderComplete() {
    console.log("completed render...")
  }

  static get properties() { 
    return { 
      opened: {
        type: String
      }
    }
  }

  render() {
      return html`
      <paper-dialog id="dialog">
        <slot></slot>
      </paper-dialog>
      `

  }

}

window.customElements.define('sdl-dialog', SdlDialog);









