(function(){
    let listElement = document.getElementById('message-list').children;
    const getMessage = () => {
        let promise = fetch('/messages/1')
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data.title);
            let title = document.getElementById('title');
            title.innerHTML = data.title;
        })
        .catch(); 
    };
    for(let i = 0; i < listElement.length; i++){
        el.addEventListener('click', getMessage);
    }
    // let item = document.getElementById('item');
    // item.addEventListener('click', ()=>{
    //     let promise = fetch('/messages/1')
    //     .then((response)=>response.json())
    //     .then((data)=>{
    //         console.log(data.title);
    //         let title = document.getElementById('title');
    //         title.innerHTML = data.title;
    //     })
    //     .catch(); 
    // })
    

})();