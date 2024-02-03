const app = Vue.createApp({
    // data, functions to react to events that we want
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            books: [
                { title: 'Name of the wind', author: 'patric rothfus' },
                { title: 'the way of kings', author: 'pffric ff' },
                { title: 'the final empire', author: 'wsaffic qqoffus' },
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },

    }
})

app.mount('#app')