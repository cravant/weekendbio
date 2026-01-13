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
const emailForm = document.getElementById("emailForm");
const successMsg = document.getElementById("successMsg");

emailForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // stop redirect
  const formData = new FormData(emailForm);

  try {
    const response = await fetch("https://formspree.io/f/mwvpgbnw", {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      successMsg.style.display = "block";
      emailForm.reset();
      // optionally close modal automatically after 2 seconds
      setTimeout(() => modal.classList.add("hidden"), 2000);
    } else {
      alert("Oops, something went wrong. Try again!");
    }
  } catch (err) {
    alert("Network error. Try again!");
  }
});
