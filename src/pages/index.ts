import MainLayout from "./layouts/MainLayout";
import ProfileLayout from "./layouts/ProfileLayout";
import UserProfile from "./UserProfile";

import Login from "./auth/Login";
import Register from "./auth/Register";


// post pages
import CreatePost from "./post/CreatePost";
import Post from "./post/Post";
import PostEdit from "./post/PostEdit";

import Home from "./Home";

export {
	// layouts
	MainLayout,
	ProfileLayout,
	
	// main
	Home,
	
	// public user pages
	UserProfile,
	
	// post
	CreatePost,
	Post,
	PostEdit,
	
	
	// auth
	Register,
	Login
}