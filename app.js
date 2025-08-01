function saveNote() {
  const input = document.getElementById('noteInput');
  const note = input.value.trim();
  if (!note) return;
  
  let notes = JSON.parse(localStorage.getItem('esoNotes')) || [];
  notes.push(note);
  localStorage.setItem('esoNotes', JSON.stringify(notes));
  
  input.value = '';
  showNotes();
}

function showNotes() {
  const notes = JSON.parse(localStorage.getItem('esoNotes')) || [];
  const list = document.getElementById('notesList');
  list.innerHTML = '';
  notes.forEach((note, index) => {
    const li = document.createElement('li');
    li.textContent = note;
    list.appendChild(li);
  });
}

showNotes();