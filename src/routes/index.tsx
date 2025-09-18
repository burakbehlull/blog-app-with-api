import { Outlet, useRoutes } from "react-router-dom";
import { Home, UserProfile, 
	CreatePost, Post, PostEdit,
	Login, Register, ProfileLayout 
} from "@pages";


const Test = ({text})=> {
    console.log(text)
    return <Outlet />
}

export default function Routes() {
    return useRoutes([
        // main routes
        {
            path: '/',
            element: <Home />
        },
		
        // auth routes
        {
            element: <Test text="auth route render-ed" />,
            children: [
                {
                    path: "/login",
                    element: <Login />
                },
                {
                    path: "/register",
                    element: <Register />
                }
            ]
        },

        // user routes
        {
            element: <Test text="public user route render-ed" />,
            children: [
                {
                    path: '/:userId',
                    element: <ProfileLayout />
                },
                {
                    path: '/posts/:postId',
                    element: <Post />
                }
            ]
        },

        // private user routes
        {
            element: <Test text="private auth route render-ed" />,
            children: [
                {
                    path: '/create-post',
                    element: <CreatePost />
                },
				{
					path: '/posts/:postId/edit',
					element: <PostEdit />
				}
            ]
        },

        // admin routes
        {
            element: <Test text="admin route render-ed" />,
            children: [
                {
                    path: '/admin',
                    element: <>Admin Dashboard</>
                }
            ]
        }
		
    ])
}