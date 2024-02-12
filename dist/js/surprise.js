const wrapper =document.querySelector('.wrapper');
const question =document.querySelector('.question');
const Yes =document.querySelector('.Yes');
const No =document.querySelector('.No');



const wrapperRect = wrapper.getBoundingClientRect();
const nobtnreact = No.getBoundingClientRect();



Yes.addEventListener('click',()=>{
    question.innerHTML = "Nanti Ku Telfon Ya !!";
});

    No.addEventListener('mouseover',()=>{
        const i = Math.floor(Math.random() *(wrapperRect.width-
            nobtnreact.width)) + 1;
        const j = Math.floor(Math.random() *(wrapperRect.height-
            nobtnreact.height)) + 1;

            No.style.left = i + "px";
            No.style.top = j + "px";

    });