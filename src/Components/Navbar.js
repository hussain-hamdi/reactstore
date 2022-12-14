import React from 'react';
//Library
import {Badge , Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
//Redux
import {useSelector} from "react-redux";

const Navbar = () => {

    const cardState = useSelector(state => state.cardState);

    return (
        <header className="bg-white py-4 mb-5">
            <Container>
                <div className="d-flex align-items-center justify-content-between">
                    <Link to="/Products" className="fw-bolder" style={{fontSize : "1.2rem"}}>Products</Link>
                    <Link to="/Cart" className="d-flex align-items-center justify-content-center text-decoration-none">
                        <FontAwesomeIcon icon={faCartShopping} color="blue" style={{fontSize : "1.2rem"}} />
                        <Badge bg="success" className="ms-1">{cardState.itemCounter}</Badge>
                    </Link>
                </div>
            </Container>
        </header>
    );
};

export default Navbar;
