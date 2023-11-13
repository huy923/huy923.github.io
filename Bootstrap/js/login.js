function togglePassword() {
    const passwordInput = document.querySelector('#password');
    const eyeIcon = document.querySelector('#eyeIcon');

    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    eyeIcon.classList.toggle('bi-eye-slash-fill', type === 'password');
    eyeIcon.classList.toggle('bi-eye-fill', type === 'text');
}
