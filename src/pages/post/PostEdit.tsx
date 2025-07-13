import React from "react"
import { useParams } from "react-router-dom"

const PostEdit = ()=> {

	const { postId } = useParams()
	
	return (
		<>Post Edit Page: {postId} </>
	)
}

export default PostEdit