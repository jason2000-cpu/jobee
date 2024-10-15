import { useState, createContext, useContext, useEffect } from "react";


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
	const [ isAuthenticated, setIsAuthenticated ] = useState(true);

	const user = localStorage.getItem('user');

	useEffect(() => {
		user ? setIsAuthenticated(true) : setIsAuthenticated(false);
	}, [user])

	const login = () => {
		setIsAuthenticated(true);
	}

	const logout = () => {
		setIsAuthenticated(false);
	}

	return (
		<AuthContext.Provider value={{ setIsAuthenticated, isAuthenticated }} >
			{ children }
		</AuthContext.Provider>
	)
}

export default AuthProvider;