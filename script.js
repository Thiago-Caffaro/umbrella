const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'usuario' && password === 'senha') {
    window.location.href = 'sus.html';
  } else {
    alert('Usuário ou senha incorretos. Tente novamente.');
  }
});
