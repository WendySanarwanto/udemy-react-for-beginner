var Todo = React.createClass({
    /**
     * edit a Todo item
     */
    edit: function(){
        alert('Edit a todo.');
    },

    /**
     * remove a Todo item
     */
    remove: function(){
        alert('Remove a todo.');
    },

    /**
     * Render Todo's tags
     */
    render: function() {
        return (
            <li className="todo">
                <span onClick={this.edit}>            
                    {this.props.children}
                </span>
                <button className="btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right" onClick={this.remove}></button>
            </li>
        );
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