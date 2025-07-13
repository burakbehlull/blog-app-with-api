import React from "react"
import { useParams } from "react-router-dom"

const Post = ()=> {

	const { userId } = useParams()
	const { postId } = useParams()
	
	return (
		<>Post: {userId} - {postId} </>
	)
}

export default Post