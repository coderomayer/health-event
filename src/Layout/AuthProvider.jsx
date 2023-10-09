import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react"
import auth from "../../public/firebase.config";

export const userAuth = createContext(null);

const AuthProvider = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const allData = {createUser, }

    return (

        <userAuth.Provider value={allData}>
            {children}
        </userAuth.Provider>

    )
}

export default AuthProvider;