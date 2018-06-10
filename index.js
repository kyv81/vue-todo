const app = new Vue({
	el: '#app',
	data: {
		title: 'Todo List',
		tasks: [
			{ text: 'Learn Vue.js' },
			{ text: 'Learn Vue-Router' },
			{ text: 'Learn Vuex' },
			{ text: 'Learn Nuxt.js' },
		],
		inputValue: '',
	},
	methods: {
		addTask() {
			if (this.inputValue !== '') {
				this.tasks.push({ text: this.inputValue });
				this.inputValue = '';
			}
		},
		removeTask(idx) {
			this.tasks.splice(idx, 1);
		},
	},
});
