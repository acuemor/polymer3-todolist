import { LitElement, html} from '@polymer/lit-element';
import { repeat } from 'lit-html/directives/repeat';

class ListItems extends LitElement {
	static get properties() {
		return {
			todoList: { type: Array }
		}
	}

	constructor() {
		super();
		this.todoList = [];
	}

	render() {
		return html`
			<ul>${repeat(this.todoList, (todoItem) => html`<li>${todoItem.item}</li>`)}</ul>
		`;
	}
} 

customElements.define('list-items', ListItems);