import React from 'react';

import axios from 'axios';

	


class Insert extends React.Component{

	state ={
		notes: '', 
	}

	handleInput = (e) => {
		this.setState({[e.target.name] : e.target.value  });
	}
	insertData = async (e) => {
		e.preventDefault();
		const res = await axios.post("/insertdata", this.state);
		this.props.history.push("/list");
	}
	render(){
		return (
			<div className="container-fluid w-50 text-center">
				<form method="post" onSubmit={this.insertData}> 
					<input onChange={this.handleInput} name="notes" className="form-control mb-2" type="text" placeholder="Write note"/>
	                <button className="btn btn-primary" type="submit">Insert</button>
				</form>
			</div>
		);
	}
}


export default Insert;