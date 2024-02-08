import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import HomePage from "../pages/Home/HomePage";

const router = createBrowserRouter([
	{
		element: <MainPage />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
		],
	},
]);
export default router;
