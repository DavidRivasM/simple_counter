import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Home(props) {
	return (
		<div
			className="container"
			style={{
				backgroundColor: "black",
				fontSize: "70px",
				color: "white",
				borderRadius: "15px",
				padding: "20px"
			}}>
			<div className="row">
				<div className="col-4">
					<i className="fas fa-stopwatch" />
				</div>
				<div className="col-2">
					<div className="digito3">{props.hora}</div>
				</div>
				<div className="col-2">
					<div className="digito2">{props.minuto}</div>
				</div>
				<div className="col-2">
					<div className="digito1">{props.segundo}</div>
				</div>
			</div>
		</div>
	);
}

Home.propTypes = {
	segundo: PropTypes.number,
	minuto: PropTypes.number,
	hora: PropTypes.number,
	valor: PropTypes.number
};
