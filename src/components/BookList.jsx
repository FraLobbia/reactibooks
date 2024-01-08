import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";

class BookList extends Component {
	state = {
		searchQuery: "",
	};

	render() {
		return (
			<Col xs={this.props.colonne}>
				<Row className="justify-content-center mt-5">
					<Col
						xs={12}
						className="text-center"
					>
						<Form.Group>
							<Form.Control
								type="search"
								placeholder="Cerca un libro"
								value={this.state.searchQuery}
								onChange={(e) =>
									this.setState({
										searchQuery: e.target.value,
									})
								}
							/>
						</Form.Group>
					</Col>
				</Row>
				<Row className="g-2 mt-3">
					{this.props.books
						.filter((b) =>
							b.title
								.toLowerCase()
								.includes(this.state.searchQuery)
						)
						.map((b) => (
							<Col
								xs={12}
								md={6}
								xl={4}
								key={b.asin}
							>
								<SingleBook
									setAppState={this.props.setAppState}
									book={b}
								/>
							</Col>
						))}
				</Row>
			</Col>
		);
	}
}

export default BookList;
