import React from 'react';

import axios from 'axios';

	


class Insert extends React.Component{

	state ={
		notes: '', 
		description: '',
		area: '',
		priority: ''
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
					<input onChange={this.handleInput} name="notes" className="form-control mb-2" type="text" placeholder="Write Note Title"/>
					<textarea onChange={this.handleInput} className="form-control mb-2" name="description"></textarea>
					<select onChange={this.handleInput} name="area" className="form-select form-control mb-2" aria-label="Default select">
					  <option >Select area</option>
					  <option value="Dhaka">Dhaka</option>
					  <option value="Chittagong">Chittagong</option>
					  <option value="Khulna">Khulna</option>
					</select>
					<p className="text-left">Priority Level:</p>
					<div className="form-control mb-2">
						<div className="form-check form-check-inline" id="checkbox">
						  <input onChange={this.handleInput} className="form-check-input" type="radio" name="priority" id="inlineRadio1" value="High" />
						  <label className="form-check-label" htmlFor="inlineRadio1">High</label>
						</div>
						<div className="form-check form-check-inline">
						  <input onChange={this.handleInput} className="form-check-input" type="radio" name="priority" id="inlineRadio2" value="Medium" />
						  <label className="form-check-label" htmlFor="inlineRadio2">Medium</label>
						</div>
						<div className="form-check form-check-inline">
						  <input onChange={this.handleInput} className="form-check-input" type="radio" name="priority" id="inlineRadio3" value="Low" />
						  <label className="form-check-label" htmlFor="inlineRadio3">Low</label>
						</div>
					</div>
	                <button className="btn btn-primary" type="submit">Insert</button>
				</form>
			</div>
		);
	}
}


export default Insert;