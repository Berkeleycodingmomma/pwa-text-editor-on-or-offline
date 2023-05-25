const butInstall = document.getElementById('buttonInstall');

let deferredPrompt; // To store the deferred prompt

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default browser prompt
  event.preventDefault();
  // Store the event for later use
  deferredPrompt = event;
  // Show the custom install button
  butInstall.style.display = 'block';
});

butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    // Show the browser install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    // Reset the deferred prompt variable
    deferredPrompt = null;
    // Hide the install button if the user declined or accepted the prompt
    if (outcome === 'dismissed' || outcome === 'accepted') {
      butInstall.style.display = 'none';
    }
  }
});

window.addEventListener('appinstalled', (event) => {
  // PWA was successfully installed
  // Perform any necessary actions after installation
});
