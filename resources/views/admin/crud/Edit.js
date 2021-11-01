import React from 'react';
import axios from 'axios';

	


class Edit extends React.Component{

	state ={
		notes: '', 
	}

	handleInput = (e) => {
		this.setState({[e.target.name] : e.target.value  });
	}
	editData = async (e) => {
		e.preventDefault();
		const id = this.props.match.params.id;
		const res = await axios.post(`/update/${id}`, this.state);
		this.props.history.push("/list");
	}
	async componentDidMount()
	{
		var id = this.props.match.params.id;
		const res = await axios.post(`/editdata/${id}/edit`);
		this.setState({notes: res.data.notes});
	}
	render(){
		return (
			<div className="container-fluid w-50 text-center">
				<form method="post" onSubmit={this.editData}> 
					<input name="notes" value={this.state.notes} onChange={this.handleInput} className="form-control mb-2" type="text" />
	                <button className="btn btn-primary" type="submit">Update</button>
				</form>
			</div>
		);
	}
}


export default Edit;