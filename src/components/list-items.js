import { LitElement, html} from '@polymer/lit-element';
import { repeat } from 'lit-html/directives/repeat';
import './todo-item';

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
			<ul>${repeat(this.todoList, (todoItem) => html`<todo-item todoItem=${JSON.stringify(todoItem)}></todo-item>`)}</ul>
		`;
	}
} 

customElements.define('list-items', ListItems);