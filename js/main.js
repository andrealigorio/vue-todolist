Vue.config.devtools = true;
var root = new Vue({
    el: '#root',
    data: {
        todoList: ["Fare la spesa", "Fare il bucato"],
        newTodo: ""
    },
    methods: {
        addTodo() {
            if (this.newTodo != "") {
            this.todoList.push(this.newTodo.charAt(0).toUpperCase() + this.newTodo.slice(1).toLowerCase());
            this.newTodo = "";
            }
        },
        removeTodo(index) {
            this.todoList.splice(index, 1);
        }
    }
});
