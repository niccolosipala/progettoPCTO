import { Container, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router";

function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login o registrazione non ancora implementati 😉");
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <Card style={{ width: "400px", padding: "20px" }}>
        <h3 className="text-center mb-4">Accedi o Registrati</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Inserisci username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Entra
          </Button>
        </Form>

        <div className="text-center mt-3">
          
            Non hai un account?{" "}
            <Link to="/register" className="btn btn-secondary">
            Registrati qui
            </Link>
            <Link to="/" className="btn btn-danger ms-2">
            Annulla
            </Link>
          
        </div>
      </Card>
    </Container>
  );
}

export default LoginPage;