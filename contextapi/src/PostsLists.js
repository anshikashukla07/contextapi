import React, {Component} from 'react';

class PostsLists extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		console.log(this.props);

		return (
		    <div className="avatarstyle ma4 bg-light-purple dib pa3 grow shadow-4 tc" onClick={this.props.onClick}>
			 	<img src={this.props.image} alt="Avatar"/>
			</div>
		)

	}
}

export default PostsLists;