import { Nav, Container, Navbar } from "react-bootstrap";
import logo from "../logo.svg";
import navBarConfig from "../data/navBarConfig.json";
function MyNav() {
	return (
		<Navbar
			expand="md"
			data-bs-theme="dark"
			bg="dark"
		>
			<Container fluid>
				<Navbar.Brand href="#">
					<img
						src={logo}
						className="App-logo"
						alt="logo"
						style={{ height: "50px" }}
					/>
					<span>Reactibooks</span>
				</Navbar.Brand>
				<Navbar.Toggle
					className="ms-auto"
					aria-controls="myNavbar"
				/>

				<Navbar.Collapse
					id="myNavbar"
					className="justify-content-between"
				>
					<Nav>
						{navBarConfig.map((navItem, index) => {
							return (
								<Nav.Link
									href={navItem.link}
									key={`navItem-${index}`}
								>
									{navItem.name}
								</Nav.Link>
							);
						})}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default MyNav;
