const views =  document.querySelectorAll('.view-section')
function hideAll () {
    
  views.forEach(x => x.style.display = 'none')
}

export function showView (section) {
    hideAll()
   section.style.display = 'block'

}

export function updatenavCondition() {
  const user = JSON.parse(localStorage.getItem("user"))
  const welcomeMsg = document.querySelector('#welcome-msg')
  if (user) {
    document.querySelectorAll('.user').forEach(x => x.style.display = 'inline-block')
    document.querySelectorAll('.guest').forEach(x => x.style.display = 'none')
    welcomeMsg.textContent = `Welcome ${user.email}`

  }else {
    document.querySelectorAll('.user').forEach(x => x.style.display = 'none')
    document.querySelectorAll('.guest').forEach(x => x.style.display = 'inline-block')
    welcomeMsg.textContent = ''

  }
}