import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import HomePage from "../pages/Home/HomePage";
import CustomCam from "../pages/WebCam/CustomCam";

const router = createBrowserRouter([
	{
		element: <MainPage />,
		children: [
			{
				path: "/",
				element: <HomePage />,
				children: [
					{
						// path: "/product/:productId",
						element: <CustomCam />,
					},
				],
			},
		],
	},
]);
export default router;
