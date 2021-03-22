Vue.config.devtools = true;
var root = new Vue({
    el: '#root',
    data: {
        todoList: ["Fare la spesa", "Fare il bucato"],
        newTodo: "",
        undo: "",
        undoControl: false
    },
    methods: {
        addTodo() {
            if (this.newTodo != "") {
            this.todoList.push(this.newTodo.charAt(0).toUpperCase() + this.newTodo.slice(1).toLowerCase());
            this.newTodo = "";
            }
        },
        removeTodo(index) {
            this.undo = this.todoList.splice(index, 1);
            this.undoControl = true;
        },
        undoTodo() {
            this.todoList.push(this.undo[0]);
            this.undoControl = false;
        }
    }
});
