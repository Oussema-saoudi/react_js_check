import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Form id="sign-in-form" className="text-center p-3 w-100">
        <img className="mb-4 bootstrap-logo" 
              src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" 
              alt="Bootstrap 5" />
        <h1 className="mb-3 fs-3 fw-normal">Please sign in</h1>
        <Form.Group controlId="sign-in-email-address">
          <Form.Control type="email" size="lg" placeholder="Email address" autoComplete="username" className="position-relative" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="sign-in-password">
          <Form.Control type="password" size="lg" placeholder="Password" autoComplete="current-password" className="position-relative" />
        </Form.Group>
        <Form.Group className="d-flex justify-content-center mb-4" controlId="remember-me">
          <Form.Check label="Remember me" />
        </Form.Group>
        <div className="d-grid">
        </div>
        <p className="mt-5 text-muted">&copy; 2021-2022</p>
      </Form>
    </div>
  );
}

export default App;
