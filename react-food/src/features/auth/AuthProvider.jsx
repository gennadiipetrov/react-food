
import {useState, useMemo} from 'react';
import {AuthContext} from '@shared/contexts/AuthContext'

const AuthProvider = ({ children }) => {
    const [userValue, setAuthValue] = useState(null);

    const contextValue = useMemo(() => (
        {
            userValue,
            setUserValue: value => setAuthValue(value) 
        }
    ), [userValue]);
  
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider