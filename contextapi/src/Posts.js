import React, {Component} from 'react';
import './Posts.css';
import PostsLists from './PostsLists';
import ModalClass from './ModalClass';

class Posts extends Component {
	constructor() {
		super();
		this.state = {
			name: "Welcome to Posts",
			users: [],
			show: false,
		}

	}

	showModal = () => {
		console.log(this.state)
		this.setState({
			...this.state,
			show: !this.state.show
		});
	}


	componentDidMount() {
		this.getData()
		.then(i=> {
		    this.setState({users : i.results})
		})
	}

	nameChange() {
		this.setState({
			name: "You are inside the Posts"
		})
	}

	async getData (){
	    let result = await fetch("https://randomuser.me/api/?results=10");
	    result = await result.json();
	    return result;
	}

	render() {
		const {users} = this.state;
		console.log(this.state)

		const avatarcardarray = users.map((user,idx)=> {
			return <PostsLists key={idx+1} id={idx+1} name={user.name.first} image={user.picture.large} onClick={this.showModal}/>
		})

		return (
			<div>
				<div className="mainpage">
					<h1>{this.state.name}</h1>
					{avatarcardarray}
					<div><button onClick={() => this.nameChange()}> Subscribe </button></div>
				</div>

				<ModalClass  
					onClose={this.showModal}
					show={this.state.show} >
					Welcome to modal
				</ModalClass>
			</div>
		)
	}
}

export default Posts;