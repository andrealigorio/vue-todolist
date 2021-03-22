Vue.config.devtools = true;
var root = new Vue({
    el: '#root',
    data: {
        todoList: ["Fare la spesa", "Fare il bucato"],
        newTodo: ""
    },
    methods: {
        addTodo() {
            this.todoList.push(this.newTodo);
            this.newTodo = "";
        },
        removeTodo(index) {
            this.todoList.splice(index, 1);
        }
    }
});
