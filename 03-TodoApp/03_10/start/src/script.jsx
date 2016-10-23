/**
 * Todo Item component
 */
var Todo = React.createClass({
    /**
     * Overrides React Component's getInitialState 
     */
    getInitialState: function(){
        return {editing: false};
    },

    /**
     * edit a Todo item
     */
    edit: function(){
        // Set editing state as true
        this.setState({editing: true});
    },

    /**
     * remove a Todo item
     */
    remove: function(){
        this.props.onRemove(this.props.index);
    },

    /**
     * Save a todo item
     */
    save: function(){
        var val = this.refs.newValue.value;
        this.props.onChange(val, this.props.index);
        this.setState({editing: false});
    },

    /**
     * A helper for rendering the Todo Item
     */
    todoDisplay: function(){
        return (
            <li className="todo">
                <span onClick={this.edit}>            
                    {this.props.children}
                </span>
                <button className="btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right" onClick={this.remove}></button>
            </li>
        );
    },

    /**
     * A helper for rendering the Todo Form
     */
    todoForm: function(){
        return (
            <li className="todo">
                <span>            
                    <input type="text" placeholder="Edit Todo" ref="newValue" defaultValue={this.props.children}/>
                </span>
                <button className="btn btn-default btn-sm glyphicon glyphicon-floppy-disk remove pull-right" onClick={this.save}></button>
            </li>
        );
    },

    /**
     * Render Todo's tags
     */
    render: function() {
        return this.state.editing ? this.todoForm() : this.todoDisplay();
    }
});

/**
 * Todo Items list component
 */
var TodoList = React.createClass({
    /**
     * Overrides React Component's getInitialState 
     */    
    getInitialState: function(){
        return {
            todos: [ 'Call Henry', 'Pay phone bill', 'Make dentist appointment'],
            text: '',
            placeholder: 'Add Todo',
            input_style: 'form-control'
        };
    },

    /**
     * A helper for adding a new todo item
     */
    add: function(e){
        var todosList = this.state.todos;
        var newTodo = this.refs.newTodo.value;
        // TODO: validate newTodo
        if (!newTodo){
            e.preventDefault();
            this.setState({placeholder: 'Please add a Todo', input_style: 'form-control red'});
        }
        else{ 
            todosList.push(newTodo);
            this.setState({todos: todosList, text: '', placeholder: 'Add Todo', input_style:'form-control'});
        }
    },

    /**
     * A helper for removing a todo from the list
     */
    remove: function(i){
        console.log('[DEBUG-TodosList] - Removed todo\'s index='+i);
        var todosList = this.state.todos;
        todosList.splice(i, 1);
        this.setState({todos: todosList});
    },

    /**
     * A helper for updating the content of a todo item
     */
    update: function(newValue, i){
        var todosList = this.state.todos;
        todosList[i] = newValue;
        this.setState({todos: todosList});
    },

    /**
     * Handle onChange event on Todo's input test'
     */
    onInputChange: function(e){
        console.log('[DEBUG-TodoList] - onInputChange is called. e.target.value = '+e.target.value);
        this.setState({text: e.target.value});
    },

    /**
     * A helper for rendering a Todo Item inside Todo Items list
     */
    renderTodoItem: function(todo, i){
        return (
            <Todo key={i} index={i} onChange={this.update} onRemove={this.remove}>
                {todo}
            </Todo>
        );
    },

    /**
     * Render Todos List's tags
     */
    render: function(){
        return (
            <div>
                <h1>Things to DO</h1>
                <div className="form-inline">
                    <div className="form-group">
                        <input className={this.state.input_style} ref="newTodo" value={this.state.text} onChange={this.onInputChange} placeholder={this.state.placeholder} />
                        <button className="btn btn-default btn-sm" onClick={this.add}>+</button>
                    </div>
                </div>

                <ul>
                    {this.state.todos.map(this.renderTodoItem)}
                </ul>
            </div>            
        );
    }
});

ReactDOM.render(<TodoList/>, document.getElementById('todo'));