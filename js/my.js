const email = document. querySelector('#email');
const web = document. querySelector('#website');

const submitBtn = document. getElementById('your-comment');
const userName = document. querySelector('#name');
const newComment = document. querySelector('#comment');
const commentsCont = document.querySelector('.mb5');

const date = new Date();
const n = date. toDateString();
viewArr = []

submitBtn.addEventListener('click',submitFeedback);

function submitFeedback(e){
//console. log('try');

//get user name
const userForm = userName.value;

//get feedback
const feedback = newComment.value;
//console.log(userForm,feedback);

//if inputs are not empty
if(userForm && feedback !== ''){
   newFeedback = {
       // "id":Math.floor((math.random() * 1000)+ 1),
       "userName":userForm,
        "newComment":feedback,
       
        
    }
   // viewArr.push(newFeedback);
        addFeedback(newFeedback);
    //clear user inputs
    resetForm();
    //addFeedback();
    
}
else{
    alert('Please fill the comment form corrrectly!!');
}
console.log(userForm)
console.log(feedback)
console.log(n)

e.preventDefault();
}

function resetForm(){
    userName.value= '';
    newComment.value= '';
    email.value= '';
    web.value= '';
}
function addFeedback(){
    //select first letter of the user name
   // const letter = (userName.charAt(0));
    //console.log(letter);

    //create new div
    const div = document.createElement('div');
    //add class
    div.classList = 'd-flex ms-5 mb-4';
    //add id
    div.id = 'response';
    //add html
    div.innerHTML = `
    <img src="img/team-3.jpg" class="img-fluid rounded-circle" style="width: 45px; height: 45px; ">
    <div class="ps-3">
        <h6><a href="">${userName.value}</a> <small><i>${n}</i></small></h6>
        <p>${newComment.value}</p>
       
    </div>
    `
    commentsCont.insertAdjacentElement('afterend',div);

    console.log('yeey!');
}
