import { useState, useContext } from 'react';
import { signUp, logIn } from '../api/auth.api';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

function SignUp() {
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [submitType, setSubmitType] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    const user = {
      name,
    };

    try {
      if (submitType === 'reg') {
        await signUp(user);
      }
      const response = await logIn(user);
      storeToken(response.data.authToken);
      authenticateUser();
      navigate('/');
    } catch (error) {
      console.log(error);
      //   setError(error.response.data.message);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={({ target }) => setName(target.value)}
            placeholder="Robalo"
          />
        </label>
        <button
          value="reg"
          onClick={({ target }) => setSubmitType(target.value)}
          type="submit"
        >
          Register
        </button>
        <button
          value="log"
          onClick={({ target }) => setSubmitType(target.value)}
          type="submit"
        >
          Log In
        </button>
      </form>
    </main>
  );
}

export default SignUp;
