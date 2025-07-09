import { useRoutes } from "react-router-dom";

export default function Routes() {
    return useRoutes([
        {
            path: "/",
            element: <div>Welcome to the Home Page</div>
            
        }
    ])
}