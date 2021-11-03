import React from 'react';
import axios from 'axios';

	


class Edit extends React.Component{

	state ={
		notes: '', 
		description: '',
		area: '',
		priority: ''
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
		this.setState({description: res.data.description});
		this.setState({area: res.data.area});
		this.setState({priority: res.data.priority});
	}
	render(){
		return (
			<div className="container-fluid w-50 text-center">
				<form method="post" onSubmit={this.editData}> 
					<input name="notes" value={this.state.notes} onChange={this.handleInput} className="form-control mb-2" type="text" />
					<textarea value={this.state.description}  onChange={this.handleInput}  className="form-control mb-2" name="description" />
					<select value={this.state.area} onChange={this.handleInput} name="area" className="form-select form-control mb-2" aria-label="Default select">
					  <option >Select area</option>
					  <option  value="Dhaka">Dhaka</option>
					  <option value="Chittagong">Chittagong</option>
					  <option value="Khulna">Khulna</option>
					</select>
					<p className="text-left">Priority Level:</p>
					<div onChange={this.handleInput} className="form-control mb-2">
						<div className="form-check form-check-inline" id="checkbox">
						  <input checked={this.state.priority === "High"} className="form-check-input" type="radio" name="priority" id="inlineRadio1" value="High" />
						  <label className="form-check-label" htmlFor="inlineRadio1">High</label>
						</div>
						<div className="form-check form-check-inline">
						  <input checked={this.state.priority === "Medium"} className="form-check-input" type="radio" name="priority" id="inlineRadio2" value="Medium" />
						  <label className="form-check-label" htmlFor="inlineRadio2">Medium</label>
						</div>
						<div className="form-check form-check-inline">
						  <input checked={this.state.priority === "Low"} className="form-check-input" type="radio" name="priority" id="inlineRadio3" value="Low" />
						  <label className="form-check-label" htmlFor="inlineRadio3">Low</label>
						</div>
					</div>
	                <button className="btn btn-primary" type="submit">Update</button>
				</form>
			</div>
		);
	}
}


export default Edit;