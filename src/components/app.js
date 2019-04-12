import { LitElement, html } from '@polymer/lit-element';
import './add-item';
import './list-items';

class TodoApp extends LitElement {
	static get properties() {
		return {
			todoList: Array
		};
	}

	constructor() {
		super();
		const list = JSON.parse(localStorage.getItem('todo-list'));
		this.todoList = list === null ? [] : list;
	}

	firstUpdated() {
		this.addEventListener('add-item', (e) => {
			this.todoList = e.detail.todoList;
			this.requestUpdate();
		});

		this.addEventListener('remove-item', (e) => {
			let index = this.todoList
				.map((item) => item.id)
				.indexOf(e.detail.item);
				
			this.todoList.splice(index, 1);
			this.requestUpdate();
			localStorage.setItem('todo-list', JSON.stringify(this.todoList));
		  });
	}

	render() {
		return html`<p>Hello todo app</p>
		<add-item></add-item>
		<list-items todoList=${JSON.stringify(this.todoList)}></list-items>`;
	}
}

customElements.define('todo-app', TodoApp);
