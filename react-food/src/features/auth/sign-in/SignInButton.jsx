import Button from '@widgets/button/Button';
import {useState, useContext} from 'react';
import SignInModal from '@widgets/modals/sign-in-modal/SignInModal';
import {AuthContext} from '@shared/contexts/AuthContext'

const SignInButton = () => {
    const [showAuth, setShowAuth] = useState(false);
    const {setUserValue} = useContext(AuthContext);

    return (
        <>
            <Button onClick={() => setShowAuth(true)}>
                Войти
            </Button>

            { 
                showAuth 
                ? <SignInModal 
                    onClose={() => setShowAuth(false)}
                    onEnter={value => setUserValue(value)}
                /> 
                : null 
            }
        </>
    );
};

export default SignInButton