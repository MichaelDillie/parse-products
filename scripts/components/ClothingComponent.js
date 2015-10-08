var React = require('react');

var ProductModel = require('../models/ProductModel.js');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			books: [],
			currentState: null
		};
	},
	componentWillMount: function() {
		var query = new Parse.Query(ProductModel);
		query.find().then(
			(books) => {
				this.setState({books: books});
			},
			(err) => {
				console.log(err);
			}
		);
	},
	render: function() {
		var bookElements = this.state.books.filter((book) => {
			if(this.state.currentState === null) {
				return true;
			}
			return (book.get('name') == this.state.currentState)
		})
		.map(function(book) {
			return (<a href={'#pet/details/'+pet.id}>{pet.get('name')}</a>);
		})
		return (
			<div className="container">
				<div className="row">
					<h1>Clothing</h1>
				</div>
			</div>
		);
	}
});
