import Button from '@widgets/button/Button';
import {useState} from 'react';
import SignInModal from '@widgets/modals/sign-in-modal/SignInModal';

const SignInButton = ({onSignIn}) => {
    const [showAuth, setShowAuth] = useState(false);

    return (
        <>
            <Button appearance="button_alternate" onClick={() => setShowAuth(true)}>
                Войти
            </Button>

            { 
                showAuth 
                ? <SignInModal 
                    onClose={() => setShowAuth(false)}
                    onEnter={onSignIn}
                /> 
                : null 
            }
        </>
    );
};

export default SignInButton