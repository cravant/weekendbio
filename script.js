const modal = document.getElementById('modal');

function openModal() {
  modal.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  localStorage.setItem('wb_seen', 'true');
}

if (localStorage.getItem('wb_seen')) {
  modal.classList.add('hidden');
}
