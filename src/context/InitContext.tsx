import React,{

    createContext,
    SetStateAction,
    useContext,
    useState

} from "react";

import login from "../types/typeLogin";

const InitContext = createContext<
[login, React.Dispatch<SetStateAction<login>>] | null
>(null);

//CARCAR LA INFORMACIÓN
const useUser = () => {
    const [data, setData] = useContext(InitContext) as any;
    return {data, setData};
};

//Pasar la información
const UserProvider = ({children}:{children: any}) =>{

    const authUser = useState<login>({

        user: children.user,
        password: children.password,        
    });

    return(
        <InitContext.Provider value={authUser}>{children}</InitContext.Provider>
    );

};

export {UserProvider, useUser}