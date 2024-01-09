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

class App extends Component {
	state = {
		data: [],
		asin: null,
	};

	setAppStateAsin = (selectedItem) => {
		this.setState({ asin: selectedItem });
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
							setAppStateAsin={this.setAppStateAsin}
							colonne={6}
						/>
						{this.state.asin && (
							<CommentArea
								asin={this.state.asin}
								colonne={6}
							/>
						)}
					</Row>
				</Container>
				<MyFooter />
			</>
		);
	}
}

export default App;
