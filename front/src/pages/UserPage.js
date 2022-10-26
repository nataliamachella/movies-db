import { useParams } from "react-router-dom";

const UserPage = () => {
  const { id } = useParams();

  return <h1>Hola {id}!</h1>;
};

export default UserPage;
