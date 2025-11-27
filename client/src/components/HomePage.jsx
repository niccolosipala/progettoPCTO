import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

function HomePage() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Container>
        <h1 className="display-2 fw-bold mb-3">StageLink</h1>
        <p className="lead mb-5" style={{ fontSize: "1.4rem" }}>
          <h3>Connetti studenti e aziende per esperienze di stage reali.</h3>
        </p>
        <Button
          variant="primary"
          size="lg"
          onClick={goToLogin}
          className="fw-bold px-4 py-2"
        >
          Accedi o Registrati
        </Button>
      </Container>
    </div>
  );
}

export default HomePage;