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
        alert('Edit a todo.');
        // Set editing state as true
        this.setState({editing: true});
    },

    /**
     * remove a Todo item
     */
    remove: function(){
        alert('Remove a todo.');
    },

    /**
     * Save a todo item
     */
    save: function(){
        var val = this.refs.newValue.value;
        alert('Todo: '+val+' is saved!');
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
            todos: [ 'Call Henry', 'Pay phone bill', 'Make dentist appointment']
        };
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
                        <input className="form-control" placeholder="Add Todo" />
                        <button className="btn btn-default btn-sm">+</button>
                    </div>
                </div>

                <ul>
                    {this.state.todos.map(function(todo){
                        return <Todo>{todo}</Todo>
                    })}
                </ul>
            </div>            
        );
    }
});

ReactDOM.render(<TodoList/>, document.getElementById('todo'));