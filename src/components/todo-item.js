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
		`;
	}
}

customElements.define('todo-item', TodoItem);