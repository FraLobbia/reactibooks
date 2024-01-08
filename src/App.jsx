import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import MyFooter from "./components/MyFooter";
import { Container, Row } from "react-bootstrap";
import { Component } from "react";

import fantasy from "./data/fantasy.json";
import CommentArea from "./components/CommentArea";
const endpoint = "https://striveschool-api.herokuapp.com/api/comments/";
class App extends Component {
	state = {
		data: [],
	};

	render() {
		return (
			<>
				<MyNav />
				<Container>
					<Welcome />
					<Row>
						<BookList
							books={fantasy}
							colonne={6}
						/>
						<CommentArea
							asin={"0316389706"}
							colonne={6}
						/>
					</Row>
				</Container>
				<MyFooter />
			</>
		);
	}
}

export default App;
