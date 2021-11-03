import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';



class Show extends React.Component{

	state = {
		notes: [],
		loading: true
	}

	fetchData = async () => {
		const res = await axios.get('/fetchdata');
		this.setState({notes: res.data});
		this.setState({loading: false});
	}

	deleteData = async (id) => {
		const res = await axios.post(`/deletedata/${id}`);
		this.fetchData();
	}

	componentDidMount(){
		this.fetchData();
	}

	render(){
		if (this.state.loading) {
				return <li>Loading</li>
			}
		return (
		<div className="container">	
			<table className="table">
			  <thead>
			    <tr>
			      <th scope="col">#</th>
			      <th scope="col">Notes</th>
			      <th>Action</th>
			    </tr>
			  </thead>
			  <tbody>
			  {this.state.notes.map(note => (
			    <tr key={note.id}>
			      <th scope="row">{note.id} </th>
			      <td>{note.notes}</td>
			      <td>
			      <Link to={`/edit/${note.id}`} className="btn btn-success">edit</Link>
			      <span className="btn btn-danger" onClick={() => this.deleteData(note.id)}>delete</span>
			      </td>
			    </tr>
			  ))}
			  </tbody>
			</table>
		</div>
		);
	}
}

export default Show;