import React, { useEffect, useState } from 'react'

const getStrength = (password) => {
  const getStrengthCriteria = password.length >= 8;
  const uCaseCriteria = /[A-Z]/.test(password)
  const lCaseCriteria = /[a-z]/.test(password)
  const numCriteria = /\d/.test(password)
  const charCriteria = /[!@#$%^&*()<>?]/.test(password)

  let score = 
    (getStrengthCriteria ? 1 : 0) +
    (uCaseCriteria ? 1 : -1) +
    (lCaseCriteria ? 1 : -1) +
    (numCriteria ? 1 : -1) +
    (charCriteria ? 1 : -1);
  
   return score == 5 ? `Strong` : score == 4 ? `Medium` : score == 3 ? `Moderate` : `easy` ;
}

export default function App() {
  
  const [pass, setPass] = useState("");
  const [length, setLength] = useState(5);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  function passwordGenerator() {
    let str = `qwertyuioasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM` + (num ? `1234567890` : '') + (char ? `!@#$%^&*()<>?` : '');

  let character;
  let result = '';
  for (let i = 0; i < length; i++) {
    character = Math.floor(Math.random() * str.length);
    result += str.charAt(character);
  }
  setPass(result);
  }
  
 const copyToClipboard = () => {
  navigator.clipboard.writeText(pass);
  alert('Password Copied');
};

useEffect(() => {
  passwordGenerator();
  setPasswordStrength(getStrength(pass));
}, [length, char, num, getStrength]);


  return (
    <div>
      <label htmlFor="password">Password</label>
      <br />
      <input type="text" aria-label='password' readOnly value={pass} />
      <button onClick={copyToClipboard}>Copy</button>
      <br />
      <input
        type="range"
        value={length}
        onChange={(e) => setLength(parseInt(e.target.value))}
        min={1}
        max={20}
        />
      <br />
      <input type="checkbox" value={char}
      onChange={()=>setChar(!char)}/>
      <label htmlFor="char">Charater</label>
      <br />
      <input type="checkbox" value={num}
      onChange={()=>setNum(!num)}/>
      <label htmlFor="num">Numbers</label>
      <br />
      <p>{passwordStrength}</p>
    </div>
  )
}
