import React, {createRef} from 'react';

const FirstForm = () => {

    let login = createRef();
    let password = createRef();
    
    function onSubmit(e) {
        console.log(login.current.value);
        console.log(password.current.value);
        e.preventDefault();
    }
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name={'login'} ref={login}/>
                <input type="text" name={'password'} ref={password}/>
                <button>submit</button>
            </form>
        </div>
    );
};

export default FirstForm;