const app = Vue.createApp({
    data() {
        return {
            name: "oyy",
            age: 25,
            imgLink: "http://www.pororopark.com/images/sub/char_pororo.jpg"
        }
    },
    methods: {
        favoriteNumber() {
            return Math.random();
        },

    }
});

app.mount("#assignment");