const token = localStorage.getItem('token')
fetch('http://localhost:3000/api/notes', {
  headers: {Authorization: 'Bearer' + token }
})
.then(res => res.json())
.then(notes => {
  const div = document.getElementById('notes')
  div.innerHTML = notes.map(n => `<p>${n.title}: ${n.body}</p>`).join('')
})