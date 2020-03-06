import React, { useState } from 'react';
import { Container, Header, Footer, Content, Sidebar, Dropdown, Sidenav, Icon, Nav, Navbar, Button } from 'rsuite';

import './home-page.styles.css';

const iconStyles = {
    width: 56,
    height: 56,
    lineHeight: '56px',
    textAlign: 'center'
  };
  
  const headerStyles = {
    padding: 18,
    fontSize: 16,
    height: 56,
    background: '#34c3ff',
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  };

  const NavToggle = ({ expand, onChange }) => {
    return (
      <Navbar appearance="subtle" className="nav-toggle">
        <Navbar.Body>
          <Nav>
            <Dropdown
              placement="topStart"
              trigger="click"
              renderTitle={children => {
                return <Icon style={iconStyles} icon="cog" />;
              }}
            >
              <Dropdown.Item>Help</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </Nav>
  
          <Nav pullRight>
            <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
              <Icon icon={expand ? 'angle-left' : 'angle-right'} />
            </Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    );
  };

const HomePage = () => {

    const [expand, setExpandSidebar] = useState(false);
    const [signedIn, setSignedIn] = useState(false);

    return (
        <Container style={{height: '100%'}}>
            <Sidebar
                style={{ display: 'flex', flexDirection: 'column' }}
                width={expand ? 260 : 56}
                >
                
                <Sidenav expanded={expand} appearance="subtle" style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', overflowY: 'auto' }}>              
                    <Sidenav.Header>
                    <div style={headerStyles}>
                        <Icon icon="logo-analytics" size="lg" style={{ verticalAlign: 0 }} />
                        <span style={{ marginLeft: 12 }}> BRAND</span>
                    </div>
                    </Sidenav.Header>
                    <Sidenav.Body>
                    <Nav>
                        <Nav.Item eventKey="1" active icon={<Icon icon="dashboard" />}>
                        Dashboard
                        </Nav.Item>
                        <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                        User Group
                        </Nav.Item>
                        <Dropdown
                        eventKey="3"
                        trigger="hover"
                        title="Advanced"
                        icon={<Icon icon="magic" />}
                        placement="rightStart"
                        >
                        <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
                        <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
                        <Dropdown.Item eventKey="3-3">Brand</Dropdown.Item>
                        <Dropdown.Item eventKey="3-4">Loyalty</Dropdown.Item>
                        <Dropdown.Item eventKey="3-5">Visit Depth</Dropdown.Item>
                        </Dropdown>
                        <Dropdown
                        eventKey="4"
                        trigger="hover"
                        title="Settings"
                        icon={<Icon icon="gear-circle" />}
                        placement="rightStart"
                        >
                        <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
                        <Dropdown.Item eventKey="4-2">Websites</Dropdown.Item>
                        <Dropdown.Item eventKey="4-3">Channels</Dropdown.Item>
                        <Dropdown.Item eventKey="4-4">Tags</Dropdown.Item>
                        <Dropdown.Item eventKey="4-5">Versions</Dropdown.Item>
                        </Dropdown>
                        <Dropdown
                        eventKey="5"
                        trigger="hover"
                        title="test"
                        icon={<Icon icon="gear-circle" />}
                        placement="rightStart"
                        >
                        <Dropdown.Item eventKey="5-1">Applications</Dropdown.Item>
                        <Dropdown.Item eventKey="5-2">Websites</Dropdown.Item>
                        <Dropdown.Item eventKey="5-3">Channels</Dropdown.Item>
                        <Dropdown.Item eventKey="5-4">Tags</Dropdown.Item>
                        <Dropdown.Item eventKey="5-5">Versions</Dropdown.Item>
                        </Dropdown>
                    </Nav>
                    </Sidenav.Body>
                </Sidenav>
                <NavToggle expand={expand} onChange={()=>{setExpandSidebar(!expand)}}/>
                </Sidebar>
            <Container>
                <Header>
                <Navbar style={{paddingLeft: 20}} >
                    <Navbar.Body>
                    <Nav pullRight>
                        {
                            signedIn                        
                            ? 
                            <Dropdown title="Rakesh" trigger={['click','hover']} placement="bottomEnd" noCaret>                    
                                <Dropdown.Item><Icon icon="profile" /> View Profile</Dropdown.Item>
                                <Dropdown.Item><Icon icon="sign-out" /> SignOut</Dropdown.Item>
                            </Dropdown>    
                            : <Nav.Item>SignIn</Nav.Item>                        
                        }                                      
                    </Nav>
                    </Navbar.Body>
                </Navbar>
                </Header>
                <Content style={{padding: 20, margin: 20}}>Content</Content>
                <Footer>
                <Navbar style={{paddingLeft: 20}} >
                    <Navbar.Body>
                    <Nav pullRight>
                        <Nav.Item>Copyright @2020</Nav.Item>
                    </Nav>
                    </Navbar.Body>
                </Navbar>
                </Footer>
            </Container>
        </Container>
    );
}

export default HomePage;