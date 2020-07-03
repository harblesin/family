import React, { Component } from "react";
import "./HomePage.css";
import axios from 'axios';

class HomePage extends Component {
	state = {
		music: []
	}

	componentDidMount = () => {
		axios.get("/api/music/").then(result => {


			console.log(result)
			this.setState({ music: result.data})
		})
	}

	render = () => {
		return <div id="homepage-body">
				<h4> Welcome to the Bot Control Panel!</h4>
				<table>
					<thead>
						<tr>
							<th>Artist</th>
							<th>Song</th>
							<th>Album</th>
						</tr>
					</thead>
					<tbody>
					{this.state.music.map( (m, index) => (

						<tr key={index}>
							<td>{m.artist_name}</td>
							<td>{m.song_name}</td>
							<td>{m.album_name}</td>
						</tr>


						))}

					</tbody>
				</table>
		</div>
	}

}

export default HomePage