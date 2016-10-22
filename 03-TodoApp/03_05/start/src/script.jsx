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
        alert('Save a todo.');
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
                    <input type="text" placeholder="Edit Todo" defaultValue={this.props.children}/>
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

ReactDOM.render(
    <div>
        <h1>Things to DO</h1>
        <div className="form-inline">
            <div className="form-group">
                <input className="form-control" placeholder="Add Todo"/>
                <button className="btn btn-default btn-sm">+</button>
            </div>
        </div>
        
        <ul>
            <Todo>Call Henry</Todo>
            <Todo>Pay phone bill</Todo>
            <Todo>Make dentist appointment</Todo>        
        </ul>
    </div>, 
document.getElementById('todo'));