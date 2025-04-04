function saveNote() {
  const noteText = document.getElementById('note').value;
  localStorage.setItem('note', noteText);
  alert('Nota salva com sucesso!');
}

function loadNote() {
  const savedNote = localStorage.getItem('note');
  if (savedNote) {
    document.getElementById('note').value = savedNote;
  } else {
    alert('Nenhuma nota salva encontrada.');
  }
}