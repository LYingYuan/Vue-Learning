const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: '',
			confirm_name: '',
		}
	},
	methods: {
		confirmName() {
			this.confirm_name = this.name
		},
		submitForm(event) {
			// event.preventDefault();
			alert('submitted!')
		},
		setName(event, last_name) {
			this.name = event.target.value + ' ' + last_name
		},
		add(num) {
			this.counter = this.counter + num
		},
		reduce(num) {
			this.counter = this.counter - num
		},
	},
})

app.mount('#events')
