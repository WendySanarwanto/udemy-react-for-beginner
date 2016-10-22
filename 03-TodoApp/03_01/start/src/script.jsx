var Todo = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Things to DO</h1>
            </div>
        );
    }
});

ReactDOM.render(<Todo/>, document.getElementById('todo'));