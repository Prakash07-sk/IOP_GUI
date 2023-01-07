
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {HiHomeModern} from 'react-icons/hi2'

export const NavbarComponent = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                      <HiHomeModern size={22}/>  IOP-UI
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );

};