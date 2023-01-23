import styles from './Register.module.css';
import {useState, useEffect} from 'react'

const Register = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(''); // this is a front end error
    const handleSubmit = async (e) => {
        e.preventDefault();

        setError('');

        const user = {
            displayName,
            email,
            password
        };

        if (password !== confirmPassword) {
            setError('As senhas precisam ser iguais!');
            return;
        }

        // send user to back end
        //const res = await createUser(user);

        console.log(user);
    };

  return (
    <div className={styles.register}>
        <h1>Cadastre-se</h1>
        <p>Crie seu usuário e compartilhe suas histórias</p>
        {error && <p className= "error">{error}</p>}
        <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input
                        type="text"
                        name='displayName'
                        required
                        placeholder="Nome do usuário"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </label>
                <label>
                    E-mail:
                    <input
                        type="email"
                        name='email'
                        required
                        placeholder="E-mail do usuário"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                       
                    />
                </label>
                <label>
                    Senha:
                    <input
                        type="password"
                        name='password'
                        required
                        placeholder="Insira sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                       
                    />
                </label>
                <label>
                    Confirme sua senha:
                    <input
                        type="password"
                        name='confirmPassword'
                        required
                        placeholder="Confirma sua senha"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                       
                    />
                </label>
                <button className='btn'>Cadastrar</button>
                
            </form>
    </div>
  )
}

export default Register