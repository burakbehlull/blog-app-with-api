import { Outlet, useRoutes } from "react-router-dom";


const Test = ()=> {
    console.log("Test component rendered");
    return <Outlet />
}

export default function Routes() {
    return useRoutes([
        // main routes
        {
            path: '/',
            element: <>Welcome to the Home Page</>
        },
		
        // auth routes
        {
            element: <></>,
            children: [
                {
                    path: "/login",
                    element: <>Login Page</>
                },
                {
                    path: "/register",
                    element: <>Register Page</>
                }
            ]
        },

        // user routes
        {
            element: <Test />,
            children: [
                {
                    path: '/:userId',
                    element: <>User Profile Page</>
                },
                {
                    path: '/:userId/:postId',
                    element: <>User Post Page</>
                }
            ]
        },

        // private user routes
        {
            element: <></>,
            children: [
                {
                    path: '/create-post',
                    element: <>Create Post Page</>
                }
            ]
        },

        // admin routes
        {
            element: <></>,
            children: [
                {
                    path: '/admin',
                    element: <>Admin Dashboard</>
                }
            ]
        }
		
    ])
}