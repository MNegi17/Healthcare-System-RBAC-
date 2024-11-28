import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import { registerUser } from '../api';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Updated usage

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            await registerUser(username, email, password);
            navigate('/login');  // Updated to use `navigate`
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                    />
                </div>
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                </div>
                {error && <p>{error}</p>}
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
