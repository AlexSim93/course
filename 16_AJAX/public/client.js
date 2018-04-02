(function(){
    const messageList = document.getElementById('message-list');
    const messageTitleElement = document.getElementById('message-title');
    const messageContentElement = document.getElementById('message-content');
    const form = document.getElementById('form-add-message');
    const renderMessage = (titleText, contentText) => {
        messageTitleElement.textContent = titleText;
        messageContentElement.textContent = contentText;
    };
    const handleResponse = (response) => {
            if(response.ok){
                return response.json();
            }
            throw Error(response.statusText);
    }
    const createAJAXRequestForMessage = (element) => {
        fetch(element.href)
        .then(handleResponse)
        .then((message)=>{
            renderMessage(message.title, message.content);
        })
        .catch((err)=>{
            console.log('This is error in AJAX request', err);
        });
    };
    const createHTMLElement = (tag, attrArr, children) => {
        const element = document.createElement(tag);
        attrArr.forEach((attr)=>{
            element.setAttribute(attr[0], attr[1]);
        });
        children.forEach((child)=>{
            if(typeof child === 'string'){
                element.textContent = child;
            } else {
                element.appendChild(child);
            }     
        });
        return element;
    };
    const addMessageToList = (id, title) => {
        const messageLink = createHTMLElement('a', [['class', 'message-link'], ['href', `/messages/${id}`]], [title]);
        const messageItem = createHTMLElement('li', [['class', 'message-item']], [messageLink]);
        messageList.appendChild(messageItem);
    }
    const createAJAXRequestAddMessage = () => {
       const formData = new FormData(form);
       const request = new Request('/messages', {
           method: 'POST', 
           headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
           },
           body: JSON.stringify({title: formData.get('title'), content: formData.get('content')})
         }
       );
       fetch(request)
        .then(handleResponse)
        .then((message)=>{
            form.reset();
            addMessageToList(message.id, message.title);
        })
        .catch(err=> {
            console.log('This is error in AJAX request', err);
        }); 
    }
    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        createAJAXRequestAddMessage();
    });
    messageList.addEventListener('click', event => {
        event.preventDefault();
        if(event.target && event.target.nodeName === 'A'){
            createAJAXRequestForMessage(event.target);
        }
    });
})();