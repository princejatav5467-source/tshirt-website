// Tab switching for Login/Register
function showTab(tabName) {
    // Hide all tab contents
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Remove active class from all tab buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// Handle Register Form
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const fullName = e.target[0].value;
    const mobile = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;

    // Store in localStorage (simple simulation)
    const user = { fullName, mobile, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Registration successful!');
    e.target.reset();
});

// Handle Login Form
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const loginInput = e.target[0].value;
    const password = e.target[1].value;

    // Retrieve from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && (storedUser.email === loginInput || storedUser.mobile === loginInput) && storedUser.password === password) {
        alert('Login successful!');
    } else {
        alert('Invalid credentials!');
    }
    e.target.reset();
});