import { createContext } from "react"

const UserContext=createContext({
          loggedInUser:"default",
          vegBtn:0,
          nonVegBtn:0,
})
export default UserContext;