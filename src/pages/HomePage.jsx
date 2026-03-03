import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Spinner,
} from "react-bootstrap";
import { getUsers } from "../calls";

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      (async () => {
        const characters = await getUsers();
        setCharacters(characters.data);
        setLoading(false);
      })();
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <div
        className="d-flex flex-wrap justify-content-center align-items-center gap-3 p-4"
        style={{
          backgroundColor: "rgba(204, 204, 204, 1)",
          borderRadius: "10px",
        }}
      >
        {loading && <Spinner animation="border" role="status"></Spinner>}
        {characters &&
          characters.map((char) => (
            <Card
              key={char.id}
              className="text-center p-3 d-flex flex-column gap-3"
            >
              <CardHeader>
                <img
                  className="rounded img-fluid"
                  src={char.imageUrl}
                  alt={char.name}
                  width="200px"
                  height="200px"
                />
              </CardHeader>
              <CardBody className="d-flex flex-column gap-3">
                <h3>{char.name}</h3>
                <p>{char.films[0]}</p>
              </CardBody>
            </Card>
          ))}
      </div>
    </Container>
  );
};

export default HomePage;
