import react, { useState } from "react";

function Register() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")
    const [userErr, setUserErr] = useState(false)
    const [userMsg, setUserMsg] = useState("")


    async function SignUp() {
        var phoneExp=/^\d{10}$/;
        var emailExp= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(username.length<3){
            setUserErr(true)
        }

        else if(!phoneExp.test(mobile.trim())) {
            alert('invalid phone')
        }

        else if(!emailExp.test(email.trim())){
            alert('invalid email') 
        }
        
        else if(password.length<8){
            setUserErr(true)
        }

        else{
            
            setUserErr(false)
        
        let user = { username, email, mobile, password, cpassword }
        if (password === cpassword) {
            
            console.warn(user)

            await fetch("http://localhost:3000/users/signup", {

                mode: 'cors',
                method: 'POST',
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
      

       else{
           window.alert("Password not matched")
       }
    }
    }


    return (

        <div style={{ marginTop: 200, textAlign: "center", fontSize: 20, height: 100 }}>
            <h3>Register With Us !</h3>

            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='formcontrol' placeholder='your name' />
           {userErr?<span style={{fontSize: 13}}>User Not valid</span>:""}
            <br /><br />
            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} className='formcontrol' placeholder='your email' />
            <br /><br />
            <input type='text' value={mobile} onChange={(e) => setMobile(e.target.value)} className='formcontrol' placeholder='your mobile' />
            <br /><br />
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='formcontrol' placeholder='your password' />
            {userErr?<span style={{fontSize: 13}}>Password min.length 8 characters</span>:""}
            <br /><br />
            <input type='password' value={cpassword} onChange={(e) => setCpassword(e.target.value)} className='formcontrol' placeholder='confirm password' />
            <br /><br />

            <button onClick={SignUp} className='btn-btn-primary' > Submit </button>
            {userMsg}
        </div>

    )



}

export default Register;