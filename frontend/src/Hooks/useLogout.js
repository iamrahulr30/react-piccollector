import { useAuthContext } from "./useAuthContext"
import { usePicsContext } from "./usePicContext"

export const useLogout = () => {

    const { dispatch } = useAuthContext()
    const { dispatch : PicsDispatch } =  usePicsContext()

    const logout = () => {
        // remove user from storage
        localStorage.removeItem("user")
        console.log(useAuthContext)
        dispatch({ type : "LOGOUT"})
        PicsDispatch({ type : "SET_WORKOUTS" , payload : null})
    }

    return { logout }
}