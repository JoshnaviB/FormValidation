function Login() {
    // State variables for username and password inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    // Function to handle form submission
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        // Perform login validation by sending a request to your backend API
        const response = await axios.post('http://localhost:3000/api/login', { username, password });
  
        // Handle the response accordingly (e.g., redirect to a different page)
        console.log(response.data);
      } catch (error) {
        // Handle any errors that occur during the login process
        console.error(error);
      }
    };
  
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Username input */}
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          {/* Password input */}
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          {/* Submit button */}
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
  
  export default Login;