import {elementComposer} from './composer.js';

let form = document.querySelector('form');

let baseUrl = `http://localhost:3030/jsonstore/collections/myboard/posts`;

let cancelBtn = form.querySelector('.cancel');
let submitBtn = form.querySelector('.public');


let topicNameInput = document.querySelector('#topicName');
let userNameInput = document.querySelector('#username');
let postTextInput = document.querySelector('#postText');

cancelBtn.addEventListener('click', (ev)=>{
    ev.preventDefault();

    topicNameInput.value = '';
    userNameInput.value = '';
    postTextInput.value = '';
})

form.addEventListener('submit', (ev)=>{
    ev.preventDefault();

    let formData = new FormData(form);

    let title = formData.get('topicName');
    let username = formData.get('username');
    let content = formData.get('postText');

    if (!title ||
        !username ||
        !content) {
        return;
    }

    let data = {
        title,
        username,
        content,
    }

    fetch(baseUrl, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data =>{
        elementComposer(data.title,data.username,data._id);
    })
    .catch(err =>{
        console.log(err);
    })
})