document.querySelectorAll('.sound-button').forEach(button => {
  button.addEventListener('click', () => {
    const sound = button.dataset.sound;
    const audio = new Audio(`sounds/${sound}.wav`);
    audio.play();
  });
});
