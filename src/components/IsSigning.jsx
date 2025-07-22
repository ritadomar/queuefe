import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

const IsSigning = props => {
  const { IsSigning } = useContext(AuthContext);

  // //   if the authentication is still loading
  // if (isLoading) {
  //   <p>Loading...</p>;
  // }

  if (!IsSigning) {
    return props.children;
  } else {
    return <></>;
  }
};

export default IsSigning;
