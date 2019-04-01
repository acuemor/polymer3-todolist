import { LitElement, html } from '@polymer/lit-element';

class AddItem extends LitElement {
	static get properties() {
		return {
			todoList: { type: Array },
      		todoItem: { type: String }
		};
	}

	constructor() {
		super();
		this.todoItem = '';
	}

	inputKeyPress(e) {
		if(e.keyCode === 13) {
			// call add item function
		} else {
			this.todoItem = e.target.value;
		}
		console.log(this.todoItem);
	}

	render() {
		return html`
		<div>
			<input .value=${this.todoItem} @keyup="${this.inputKeyPress}" />
		</div>
		`;
	}
}

customElements.define('add-item', AddItem);
