function TodoView(model) {
    this.model = model;
    this.addTodoSubject = new Observable(this);
    this.init();
};

TodoView.prototype = {

    init: function () {
        this.$container = $('.main-container');
        this.$addTodoButton = this.$container.find('.add-todo-button');
        this.$todoTextBox = this.$container.find('.todo-textbox');
        this.$todoContainer = this.$container.find('.todo-container');

        this.$addTodoButton.click(() => this.addTodoButtonClicked());

        this.model.addTodoSubject.register(() => this.refreshTodoList());

        return this;
    },

    addTodoButtonClicked: function () {
        this.addTodoSubject.notify({
            todo: this.$todoTextBox.val()
        });
        this.$todoTextBox.val('');
    },

    refreshTodoList: function () {
        const todos = this.model.getTodos();
        
        const $todoContainer = this.$todoContainer;

        $todoContainer.html('');

        let index = 0;
        for (let todo in todos) {
            $todoContainer.append("<div><label><input type='checkbox' class='todo' data-index='" + index + "' data-task-selected='false'>" + todos[todo].name+"</label></div>");
            index++;
        }
    }

};