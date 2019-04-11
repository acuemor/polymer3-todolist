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
		const storedTodoList = localStorage.getItem('todo-list');
		this.todoList = storedTodoList === null ? [] : JSON.parse(storedTodoList);
	}

	inputKeyPress(e) {
		if(e.keyCode === 13) {
			this.onAddItem();
		} else {
			this.todoItem = e.target.value;
		}
	}

	onAddItem() {
		if (this.todoItem.length > 0) {
			this.todoList.push(
				{
				  id: new Date().valueOf(),
				  item: this.todoItem,
				  done: false
				}
			  );
			  localStorage.setItem('todo-list', JSON.stringify(this.todoList));
			  this.dispatchEvent(new CustomEvent('add-item', {
				  bubbles: true,
				  composed: true,
				  detail: {
					  todoList: this.todoList
				  }
				}))
			  this.todoItem = '';
		}	
	}

	render() {
		return html`
		<div>
			<input .value=${this.todoItem} @keyup="${this.inputKeyPress}" />
			<button @click="${this.onAddItem}">Add Item </button>
		</div>
		`;
	}
}

customElements.define('add-item', AddItem);
