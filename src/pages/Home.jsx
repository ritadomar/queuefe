// import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
// import { getAllEntries, addEntry, deleteEntry } from '../api/entries.api';
import SignUp from '../components/SignUp';
import Queue from '../components/Queue';

function Home() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  //   const [entries, setEntries] = useState(null);

  //   const getEntries = async () => {
  //     try {
  //       const response = await getAllEntries();
  //       setEntries(response.data.reverse().slice(0, 10));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     getEntries();
  //   }, []);

  return (
    <main>
      {!isLoggedIn && (
        <>
          <h2>What's your name?</h2>
          <SignUp />
        </>
      )}
      {isLoggedIn && (
        <>
          <button onClick={logOutUser}>Log Out</button>
          <h2>Hello {user.name}</h2>
          <h2>Next in line</h2>
          <Queue />
        </>
      )}
    </main>
  );
}

export default Home;
