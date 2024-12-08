import throttle from 'lodash.throttle';

// Selectăm formularul și câmpurile sale
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Funcție pentru salvarea stării formularului în localStorage
const saveFormState = () => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
};

// Verificăm dacă există date salvate în localStorage și le completăm în formular
const savedFormState = localStorage.getItem('feedback-form-state');
if (savedFormState) {
  const { email, message } = JSON.parse(savedFormState);
  emailInput.value = email || '';
  messageInput.value = message || '';
}

// Adăugăm evenimentul de input pe câmpuri pentru a salva starea
form.addEventListener('input', throttle(saveFormState, 500));

// La trimiterea formularului, ștergem datele din localStorage și le afișăm în consolă
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Previne trimiterea formularului
  
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log('Form data submitted:', formData);
  localStorage.removeItem('feedback-form-state'); // Ștergem datele salvate din localStorage

  // Opțional: Resetați câmpurile formularului
  form.reset();
});

