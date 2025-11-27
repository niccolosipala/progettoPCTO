import { useState } from "react";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router";

function RegisterPage() {
  const [isCompany, setIsCompany] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Registrazione completata come ${isCompany ? "Azienda" : "Studente"}!`
    );
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <Card style={{ width: "550px", padding: "25px" }}>
        <h3 className="text-center mb-4">Registrazione</h3>

        {/* Switch scelta */}
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Registrati come Azienda"
          checked={isCompany}
          onChange={() => setIsCompany(!isCompany)}
          className="mb-4"
        />

        <Form onSubmit={handleSubmit}>
          {/* Campi comuni */}
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci username"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Inserisci password"
              required
            />
          </Form.Group>

          {/* Campi specifici */}
          {isCompany ? (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Nome azienda</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci il nome dell'azienda"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Settore</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Es: Informatica, Biologia..."
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Indirizzo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci indirizzo sede"
                  required
                />
              </Form.Group>

              {/* LOGO */}
              <Form.Group className="mb-3">
                <Form.Label>Logo aziendale</Form.Label>
                <Form.Control type="file" accept="image/*" />
                <Form.Text className="text-muted">
                  (Opzionale — JPG, PNG)
                </Form.Text>
              </Form.Group>

              {/* CONTATTI */}
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Email aziendale</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="esempio@azienda.it"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="+39 ..."
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* PERIODO STAGE */}
              <Form.Group className="mb-3">
                <Form.Label>Periodo dello stage</Form.Label>
                <Form.Select required>
                  <option value="">Seleziona periodo</option>
                  <option value="inverno">Inverno</option>
                  <option value="estate">Estate</option>
                </Form.Select>
              </Form.Group>

              {/* DURATA */}
              <Form.Group className="mb-3">
                <Form.Label>Durata dello stage</Form.Label>
                <Form.Select required>
                  <option value="">Seleziona durata</option>
                  <option value="1 settimana">1 settimana</option>
                  <option value="3 settimane">3 settimane</option>
                </Form.Select>
              </Form.Group>
            </>
          ) : (
            <>
              {/* STUDENTE */}
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Inserisci nome" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Cognome</Form.Label>
                <Form.Control type="text" placeholder="Inserisci cognome" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Scuola </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci istituto di provenienza"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Indirizzo di Studio </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci istituto di provenienza"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="esempio@studenti.it"
                  required
                />
              </Form.Group>
            </>
          )}

          <div className="text-center mt-4">
            <Button variant="success" type="submit" className="px-4">
              Registrati
            </Button>
            <Link to="/login" className="btn btn-danger ms-3 text-decoration-none">
                Hai già un account? Accedi
            </Link>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default RegisterPage;
