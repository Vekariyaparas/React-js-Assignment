import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <>
      <div className='container mx-auto'>
        <form className='w-50 p-5 mx-auto bg-dark text-light form-control'>
          <h4>Log in</h4>
          <label>Email</label><br/>
          <input type='email' className='form-control'></input><br/>
          <label>Password</label><br/>
          <input type='password' className='form-control'></input><br/>
          <button type='submit' className='form-control bg-primary text-light border-0'>Log in</button>
          <hr/>
          <button type='button' className='form-control bg-success text-light border-0'>Create account</button>
        </form>
      </div>
    </>
  );
}

export default App;
