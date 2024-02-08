import React, { useState, useEffect } from "react";
// import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";

const MainPage = () => {
	return (
		<>
			<Outlet />
		</>
	);
};

export default MainPage;
