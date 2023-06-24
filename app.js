function closeBtn(){
    var list=document.getElementsByTagName('li')

    for(var i=0;i<list.length;i++){
        var span = document.createElement('span')
        var txt = document.createTextNode('\u00D7')
        span.className='close'
        span.appendChild(txt)
        list[i].appendChild(span)
    }

    var close=document.getElementsByClassName('close')

    for(var i=0;i<close.length;i++){
        close[i].onclick=function(){
            var div =this.parentElement;
            div.style.display='none'
        }
    }
    
    var list=document.querySelector('ul')
    list.addEventListener('click',function(e){
        if(e.target.tagName === 'li'){
            e.target.classList.toggle('checked')
        }
    },false)
}
closeBtn();


function newElement(){
    var li=document.createElement('li')
    var val=document.getElementById('task').value
    var t=document.createTextNode(val)
    li.appendChild(t)
    if(val === ''){
        alert("Task need to be mentioned")
    }else{
        document.getElementById('list').appendChild(li)
    }
    document.getElementById('task').value=''
    closeBtn();
}