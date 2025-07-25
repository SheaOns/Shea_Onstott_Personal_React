import React from "react";
import "../css/HomePage.css";
import logo from "."

export const Home = () => {
	return (
		<div className="container">
			<div className="photo">
				<img src="/static/images/pic1.jpg" alt="Photo"></img>
			</div>
			<div className="content">
				<h1>Hi, there.</h1>
				<div className="content-list">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Quod maxime quisquam doloribus numquam consectetur
						nihil optio reiciendis minima ut dicta repellat ducimus
						accusamus explicabo inventore, sed quasi delectus,
						corrupti expedita.
					</p>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Quod maxime quisquam doloribus numquam consectetur
						nihil optio reiciendis minima ut dicta repellat ducimus
						accusamus explicabo inventore, sed quasi delectus,
						corrupti expedita.
					</p>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Quod maxime quisquam doloribus numquam consectetur
						nihil optio reiciend.
					</p>
				</div>
			</div>
		</div>
	);
};
