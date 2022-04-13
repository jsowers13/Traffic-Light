import React from "react";
import { useState, useEffect } from "react";

const Light = () => {
	return (
		<div className="vw-100 vh-100 bg-secondary d-flex flex-column align-items-center">
			<div className="lightTop"></div>
			<div className="lightBox d-flex flex-column align-items-center rounded-3">
				<button className="btn bg-danger rounded-circle"></button>
				<button className="btn bg-warning rounded-circle"></button>
				<button className="btn bg-success rounded-circle"></button>
			</div>
		</div>
	);
};

export default Light;
