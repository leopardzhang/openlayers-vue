export default {
	name: 'AppHeader',
	props: {
		name: String
	},

	methods: {
		handleSave() {
			this.$emit('handleSave');
		},

		goBack() {
			this.$router.back(-1)
		}
	},
}