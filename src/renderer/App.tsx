import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import {
  MDBBtn,
  MDBIcon,
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';
import { TitlebarProps } from '../main/types/index';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './index.scss';

const Hello = () => {
  return (
    <div className="app">
      <MDBBtn floating tag="a" className="add m-2" size="lg" color="danger">
        <MDBIcon fas icon="plus" />
      </MDBBtn>
    </div>
  );
};

const Titlebar = (props: TitlebarProps) => {
  const { name } = props;
  return (
    <>
      <MDBNavbar sticky light bgColor="light" className="titlebar">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.png"
              height="30"
              alt=""
              loading="lazy"
            />
            {name}
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Titlebar name="Hello" />
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
