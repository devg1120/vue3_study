import { defineStore } from "pinia";
import { getItemById, getListById, getListByItemId } from "../utils/board";
import { makeItem, makeList } from "../utils/board";
import data from "../api";

function moveAt(array, index, at) {
    if (index === at || index > array.length -1 || at > array.length - 1) {
      return array;
    }
    
    const value = array[index];
    const tail = array.slice(index + 1);

    array.splice(index);

    Array.prototype.push.apply(array, tail);

    array.splice(at, 0, value);

    return array;
  }

export const useBoardStore = defineStore({
	id: "board",
	state: () => ({
		lists: data,
	}),
	getters: {
		getListById: (state) => (listId) => {
			return getListById(state.lists, listId);
		},
		getListByItemId: (state) => (itemId) => {
			return getListByItemId(state.lists, itemId);
		},
		getItemById: (state) => (itemId) => {
			return getItemById(state.lists, itemId);
		},
	},
	actions: {
		getAllList() {                                       // GUSA
			return this.lists;
    	        },
		addList({ title }) {                         
			this.lists.push(makeList(title));
		},
		insertList(  index, { title }) {                      // GUSA
			this.lists.splice(index -1,0, makeList(title));
		},
		removeList({ listId }) {
			const index = this.lists.findIndex((list) => list.id === listId);
			this.lists.splice(index, 1);
		},
		// GUSA
		shiftLeftList({ listId }) {
			const index = this.lists.findIndex((list) => list.id === listId);
			if ( index == 0 ) return;
			moveAt(this.lists, index, index  -1);
		},
		// GUSA
		shiftRightList({ listId }) {
			const index = this.lists.findIndex((list) => list.id === listId);
			moveAt(this.lists, index, index  +1);
		},
		addItem({ listId, title, description, date }) {
			const list = getListById(this.lists, listId);
			list.items.push(makeItem(title, description, date, null));
		},
		updateItem({ itemId, title, description, date }) {
			const item = getItemById(this.lists, itemId);
			if (item) {
				Object.assign(item, makeItem(title, description, date, itemId));
			}
		},
		removeItem({ itemId }) {
			const list = getListByItemId(this.lists, itemId);
			list.items.splice(
				list.items.findIndex((item) => item.id === itemId),
				1
			);
		},
		moveItem([fromListRef, fromIndex, toListRef, toIndex]) {
			const fromList = getListById(this.lists, fromListRef);
			const toList = getListById(this.lists, toListRef);
			toList.items.splice(toIndex, 0, fromList.items.splice(fromIndex, 1)[0]);
		},
	},
});
