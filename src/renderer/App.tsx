import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import {
  MDBBtn,
  MDBIcon,
  MDBContainer,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';
import AddGameModal from './AddGame.modal';
import { TitlebarProps } from '../main/types/index';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './index.scss';

const Main = () => {
  const [modal, setModal] = React.useState(false);
  return (
    <div className="app">
      <MDBBtn>test</MDBBtn>
      <MDBBtn
        floating
        tag="a"
        className="add m-2"
        size="lg"
        color="danger"
        onClick={() => setModal(!modal)}
      >
        <MDBIcon fas icon="plus" />
      </MDBBtn>

      <AddGameModal modal={modal} setModal={setModal} />
    </div>
  );
};

const Titlebar = (props: TitlebarProps) => {
  const { name } = props;
  return (
    <>
      <MDBContainer
        sticky
        light
        fluid
        bgColor="light"
        className="titlebar shadow-3 flex"
      >
        <MDBNavbarBrand href="#">
          <img
            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.png"
            height="20"
            alt=""
            loading="lazy"
          />
        </MDBNavbarBrand>
        <MDBContainer className="auto">{name}</MDBContainer>
      </MDBContainer>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Titlebar name="Game Launcher" />
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
};

export default App;
