
const pencilModal = document.querySelector('.pencil');
const formModal = document.querySelector('.form');

const closeBtn = document.querySelector('.close-btn');
const submitBtn = document.querySelector('.submit-btn');

const usersQueryObject = [];

submitBtn.addEventListener('click', function(e) {
    // e.preventDefault();
     
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    today.toDateString();
 
    const _newUserQuery = {
        Name: document.querySelector('.name').value,
        Email: document.querySelector('.email').value,
        Message: document.querySelector('.message').value,
        Date: today,
    }
    
    usersQueryObject.push(_newUserQuery);
    console.log(usersQueryObject);
    document.querySelector('form').reset();
    formModal.style.display = "none"

    localStorage.setItem('MyGuestList', JSON.stringify(usersQueryObject));  
})

pencilModal.addEventListener('click', function() {
    formModal.style.display = 'block';
})

closeBtn.onclick = function(e) {
    e.preventDefault();
    formModal.style.display = "none"
}