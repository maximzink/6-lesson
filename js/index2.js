

const header = document.querySelector('h1').style.backgroundColor = "#99ee00";;


const myDivContainer = document.getElementById('myDiv');
const styleParams = ['font-weight: bold', 'color: red', 'text-decoration: underline', 'font-style: italic','fontSize: 24px'];
styleParams.forEach((item, index)=>{
    myDivContainer.children[index].style = item;
})

const myList = document.getElementById('myList');
myList.style = 'display: flex', 'justifyContent: center','listStyle: none','padding:0';

document.querySelector('span').hidden = true;


