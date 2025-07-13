import React from "react"
import { useParams } from "react-router-dom"

const UserProfile = ()=> {

	const { userId } = useParams()
	
	return (
		<>User Profile Page userId: {userId} </>
	)
}

export default UserProfile