import react, { useEffect, useState } from 'react';


function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userErr, setUserErr] = useState(false)
    const [userMsg, setUserMsg] = useState("")

   async function signin() {
   
    var emailExp= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


     if(!emailExp.test(email.trim())){
        alert('invalid email') 
    }
    else{
       
        let user = {email,password}

        const res = await fetch('http://localhost:3000/users/signin', {

            mode: 'cors',
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }


        })
        .then(result => result.json())
        .then(res => {setUserMsg(res.message)
            console.log(res);
        })
    }

}

    return (

        <div style={{ marginTop: 200, textAlign: "center", fontSize: 20, height: 100 }}>
            <h3>Login Here</h3>

            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} className='formcontrol' placeholder='enter email' />
            <br /><br />
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='formcontrol' placeholder='enter password' />
            <br /><br />

            <button onClick={signin} className='btn-btn-primary' > Submit </button>

        </div>

    )

}

export default Login;