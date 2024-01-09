import { Component } from "react";
import CommentList from "./CommentList";
import Loading from "./Loading";
import Error from "./Error";
import { token } from "./token";
import { Col } from "react-bootstrap";

class CommentArea extends Component {
	state = {
		comments: [],
		isLoading: true,
		isError: false,
	};

	fecthingData = async () => {
		try {
			let response = await fetch(
				"https://striveschool-api.herokuapp.com/api/comments/" +
					this.props.asin,
				{
					headers: {
						Authorization: token,
					},
				}
			);
			console.log(response);
			if (response.ok) {
				let comments = await response.json();
				console.log(comments);
				this.setState({
					comments: comments,
					isLoading: false,
					isError: false,
				});
			} else {
				this.setState({ isLoading: false, isError: true });
			}
		} catch (error) {
			console.log(error);
			this.setState({ isLoading: false, isError: true });
		} finally {
			console.log(this.state);
		}
	};

	componentDidUpdate = (prevProps) => {
		if (this.props.asin !== prevProps.asin) {
			this.fecthingData();
		}
	};

	componentDidMount = () => {
		this.fecthingData();
	};

	render() {
		return (
			<>
				<Col xs={this.props.colonne}>
					<div className="text-center">
						{this.state.isLoading && <Loading />}
						{this.state.isError && <Error />}
						{/* <AddComment asin={this.props.asin} /> */}
						<CommentList commentsToShow={this.state.comments} />
					</div>
				</Col>
			</>
		);
	}
}

export default CommentArea;
