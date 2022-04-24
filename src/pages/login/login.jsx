import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";

import "./login.scss";

const Login = (props) => {
  const emailNode = useRef();
  const passwordNode = useRef();
  const handleSubmit = () => {
    const email = emailNode.current.value;
    const password = passwordNode.current.value;
    console.log(props);
	props.history.replace('/')
	
  };

  return (
    <div className="login-content">
      <h2 className="font-size-1 login-title">用戶登錄</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            ref={emailNode}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordNode}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button
          className="login-form-btn"
          variant="primary"
          type="button"
          onClick={handleSubmit}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;

// class Login extends Component {
//   handleSubmit = () => {
//     console.log("trigger handleSubmit");
//   };
//   render() {
//     return (
//       <div className="login-content">
//         <h2 className="font-size-1 login-title">用戶登錄</h2>
//         <Form>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" placeholder="Enter email" />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" placeholder="Password" />
//           </Form.Group>
//           <Button className="login-form-btn" variant="primary" type="button">
//             Login
//           </Button>
//         </Form>
//       </div>
//     );
//   }
// }

// export default Login;
