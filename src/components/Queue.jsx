import { getAllEntries, addEntry } from '../api/entries.api';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/auth.context';
import { useNavigate } from 'react-router-dom';

function Queue() {
  const [entries, setEntries] = useState(null);
  const [entry, setEntry] = useState(null);
  const [userId, setUserId] = useState(null);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const getEntries = async () => {
    try {
      const response = await getAllEntries();

      console.log(response.data.reverse().slice(0, 10));
      setEntries(response.data.reverse().slice(0, 10));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      setEntry(userId);
      const entry = {
        userId,
      };

      await addEntry(entry);
      navigate('/');
      setEntry(null);
    } catch (error) {
      console.log(error);
      //   setError(error.response.data.message);
    }
  };

  useEffect(() => {
    getEntries();
  }, [entry]);

  return (
    <>
      {(!entries || entries.length <= 0) && <p>No entries yet</p>}
      {entries && (
        <ol>
          {entries.map(entry => {
            return <li key={entry._id}>{entry.entry.name}</li>;
          })}
        </ol>
      )}
      {user && (
        <form onSubmit={handleSubmit}>
          <button
            onClick={() => {
              setUserId(user._id);
            }}
            type="submit"
          >
            Put me on the queue
          </button>
        </form>
      )}
    </>
  );
}

export default Queue;
