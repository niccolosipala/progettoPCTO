import { Outlet } from "react-router";
import NavHeader from "./NavHeader";
import { Alert, Container,Row } from "react-bootstrap";


function DefaultLayout(){
    return(<>
            <NavHeader />
            <Container fluid>
                <Outlet/>
            </Container>
        </>
    );
}

export default DefaultLayout;