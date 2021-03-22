Vue.config.devtools = true;
var root = new Vue({
    el: '#root',
    data: {
        todoList: ["Fare la spesa", "Fare il bucato"],
        newTodo: "",
        undo: [],
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
            var deleted = this.todoList.splice(index, 1).join();
            this.undo.push(deleted);
            this.undoControl = true;
        },
        undoTodo() {
            this.todoList.push(this.undo[this.undo.length-1]);
            this.undo.pop();
            if (this.undo.length == 0) {
                this.undoControl = false;
            }
        }
    }
});
