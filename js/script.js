let formContainer = document.getElementById('formContainer');

let loginButton = document.getElementById('login').value;
let registerButton = document.getElementById('register').value;
let toggleOption = 'Login';

function toggle(){
  if (toggleOption === loginButton) {
    formContainer.innerHTML = `
    <div>
      <label for="username">Username</label>
      <input type="text" name="username" required>
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" name="password" required>
    </div>
    <div>
      <button class="submit" type="submit">Login</button>
    </div>
    `;
    toggleOption = registerButton;
  }else {
    formContainer.innerHTML = `
    <div>
      <div>
        <label for="firstname">First Name</label>
        <input type="text" name="firstname" required>
      </div>
      <div>
        <label for="lastname">Last Name</label>
        <input type="text" name="lastname" required>
      </div>
    </div>
    <div>
      <label for="phone">Phone Number</label>
      <input type="tel" name="phone" required>
    </div>
    <div>
      <label for="gender">Gender</label>
      <select class="priority" name="gender" id="gender">
        <option value="">Choose a gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
    <div>
      <label for="country">Country</label>
      <input type="text" name="country" required>
    </div>
    <div>
      <label for="state">State</label>
      <input type="text" name="state" required>
    </div>
    <div>
      <label for="username">Username</label>
      <input type="text" name="username" required>
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" name="password" required>
    </div>
    <div>
      <label for="confirmpassword">Confirm Password</label>
      <input type="password" name="confirmpassword" required>
    </div>
    <div>
      <button class="submit" type="submit">Login</button>
    </div>
    `;
    toggleOption = loginButton;
  }
}
document.addEventListener('click', toggle);

