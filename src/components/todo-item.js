import { LitElement, html} from '@polymer/lit-element';

class TodoItem extends LitElement {
	static get properties() {
		return {
			todoItem: { type: Object }
		}
	}

	constructor() {
		super();
		this.todoItem = {};
	}

	render() {
		return html`
			<li>${this.todoItem.item}</li>
			<div>
				<button @click="${this.onRemove}">
					<strong>X</strong>
				</button>
			</div>
		`;
	}

	onRemove() {
		this.dispatchEvent(new CustomEvent('remove-item', {
			bubbles: true,
			composed: true,
			detail: {
			  item: this.todoItem.id
			}
		  }
		));    
	  }

}

customElements.define('todo-item', TodoItem);