const btn = document.querySelector('.increment_btn');
const pressedbtn=document.querySelector('.btn_pressed');
const btncount=document.querySelector('.btn_count')

var pressedCount=0;
var triggercount=0;




const mydebounce=(cb,d)=>{

    let timer;

    return function(){
        if(timer){
            clearTimeout(timer);
        }
        timer=setTimeout(() => {
         cb()   
        }, d);
    }

}


const debounceCount=mydebounce(()=>{
    btncount.innerHTML=++triggercount;
},800)

// const throttleCount=_.throttle(()=>{
//     btncount.innerHTML=++triggercount;
// },800)





btn.addEventListener('click',()=>{
pressedbtn.innerHTML =++pressedCount;

debounceCount()
})