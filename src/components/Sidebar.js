import React from 'react';
import { Col, Nav, Row, Sidebar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SidebarMenu = () => {
  return (
    <Row>
      <Col xs={12} md={3} className="bg-light p-3">
        <h4>Menu</h4>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/compare">Compare</Nav.Link>
          <Nav.Link as={Link} to="/news">News/Articles</Nav.Link>
        </Nav>
      </Col>
      <Col xs={12} md={9} className="p-4">
        {/* Main content will go here */}
      </Col>
    </Row>
  );
};

export default SidebarMenu;
