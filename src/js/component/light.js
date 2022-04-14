import React from "react";
import { useState } from "react";

const Light = () => {
	const [selectedColor, setSelectedColor] = useState("none");
	let colors = ["red", "yellow", "green"];
	const [lightsOn, setLightsOn] = useState(false);

	return (
		<div className="vw-100 vh-100 d-flex flex-column align-items-center">
			<div className="lightTop"></div>
			<div className="lightBox d-flex flex-column align-items-center rounded-3">
				<div
					onClick={() => setSelectedColor("red")}
					className={
						"light bg-danger rounded-circle" +
						(selectedColor === "red" ? " glowRed" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("yellow")}
					className={
						"light bg-warning rounded-circle" +
						(selectedColor === "yellow" ? " glowYellow" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("green")}
					className={
						"light bg-success rounded-circle" +
						(selectedColor === "green" ? " glowGreen" : "")
					}></div>
			</div>
			<button
				className="btn btn-primary m-3"
				onClick={() => setLightsOn(true)}>
				Click to Start Lights
			</button>
		</div>
	);
};

export default Light;
