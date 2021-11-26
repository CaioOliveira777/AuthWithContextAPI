import React, {useState,createContext,useContext} from 'react';
import users from './users';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
interface User {
    id:string,
    name:string,
    email:string,
    password:string,
    revenues:string,
    madeProjects:string,
    premium:boolean
}


export interface UserContextData {
    user: User | null,
    login: (email:string, password:string) => void,
    logout: () => void,
    loginFake: (email:string, password:string) => boolean
  }

 
  export const UserContext = createContext<UserContextData>({} as UserContextData);


const UserProvider: React.FC = ({children}) =>{
    const [user,setUser] = useState<User | null>(null)
    let token:string;
    function login(email:string,password:string){
        const result = users.find(user => user.email === email && user.password===password)
        if (result) {
            setUser(result);
            token = result.id;
            cookies.set('token', token, { path: '/' });
        } else {
            cookies.remove('login');
            cookies.remove('token');
            cookies.remove('senha');
            window.location.reload();
        }
    }
    function logout() {
        cookies.remove('login');
        cookies.remove('token');
        cookies.remove('senha');
    }
    function loginFake(email:string,password:string) {
    const result2 = users.find(user => user.email === email && user.password===password)
        if(result2) {
            return true
        } else  {
            return false
        }
    }

    return(
        <UserContext.Provider value={{user, login, logout,loginFake}}>
            {children}
        </UserContext.Provider>
    )
}
export const useUser = () =>{
    return useContext(UserContext)
}


export default UserProvider