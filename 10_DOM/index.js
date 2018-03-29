"use strict";
(function getHTML(){
  let container = document.getElementById('container');
  let elements = [];
  let buttonGenerateHTMLCode = document.getElementById('add-html-code');
  buttonGenerateHTMLCode.addEventListener('click', generateHTMLCode);
  let buttonAddElement = document.getElementById('add-button');
  buttonAddElement.addEventListener('click', renderForm);
  function generateId(){
    let id = 0;
    return function(){
      return id++;
    }
  }
  let idGenerator = generateId();
  class Element {
    constructor(tag, text, id){
      this.elementContainer = document.createElement('div');
      this.elementContainer.classList.add('new-element');
      this.element = document.createElement(tag);
      this.element.textContent = text;
      this.element.classList.add('new-element__content');
      this.elementRemoveLink = document.createElement('a');
      this.elementRemoveLink.textContent = "Удалить элемент";
      this.elementRemoveLink.classList.add('new-element__link-remove-element');
      this.id = id;
      this.elementRemoveLink.addEventListener('click', this.removeElement.bind(this));
      this.renderElement('content');
    }
    renderElement(containerId){
      let container = document.getElementById(containerId);
      this.elementContainer.appendChild(this.element);
      this.elementContainer.appendChild(this.elementRemoveLink);
      container.appendChild(this.elementContainer);
    }
    getHTMLCode(){
      return `<${this.element.tagName.toLowerCase()}> \n${this.element.innerHTML} \n</${this.element.tagName.toLowerCase()}>`;
    }
    getId(){
      return this.id;
    }
    removeElement(evt){
      evt.preventDefault();
      let index = elements.findIndex((element)=>element.getId() === this.getId());
      this.elementContainer.remove();
      elements.splice(index, 1);
    }
  }
  function setAttributesCustom(DOMElement, attrArr){
    attrArr.forEach((element)=>DOMElement.setAttribute(element[0], element[1]));
  }
  function appendChildren(parentElement, childrenElementArr){
    if(childrenElementArr){
      childrenElementArr.forEach((element)=>{
        if(typeof element === 'string'){
          parentElement.textContent = element;
        } else {
          parentElement.appendChild(element);
        }
      });
    }
  }
  function createDOMElement(tagName, attr, children, classList, event, handler){
    let element = document.createElement(tagName);
    setAttributesCustom(element, attr);
    appendChildren(element, children);
    element.classList.add(...classList);
    if(event){
      element.addEventListener(event, handler);
    }
    return element;
  }
  function renderForm(){
    let closeWindowIcon = createDOMElement('a', [], [
      createDOMElement('div', [], [""], ["form__close-line-1"]),
      createDOMElement('div', [], [""], ["form__close-line-2"])
    ], ['form__close'], 'click', closeForm);
    let form = createDOMElement('form', [], [
      closeWindowIcon,
      createDOMElement('h1', [], ['Добавление элемента'], ['form__title']),
      createDOMElement('label', [['for', 'tag-input']], ['Тег'], ['form__tag-label']),
      createDOMElement('input', [['id', 'tag-input'], ['name', 'tag'], ['required', 'required']], null ,['form__tag-input']),
      createDOMElement('label', [['for', 'text-textarea']], ['Текст'], ['form__text-label']),
      createDOMElement('textarea', [['id', 'text-textarea'], ['name', 'content'], ['required', 'required']], null ,['form__text-textarea']),
      createDOMElement('button', [['type', 'submit']], ['Добавить Элемент'], ['form__button','button','button_color_green']),
    ], ['form'], 'submit', submitForm);
    let formWrapper = createDOMElement('div', [], [form], ['container__modal', 'modal']);
    let fragment = document.createDocumentFragment();
    fragment.appendChild(formWrapper);
    container.appendChild(fragment);
    function closeForm(evt){
      evt.preventDefault();
      formWrapper.remove();
    }
    function submitForm(evt){
      evt.preventDefault();
      elements.push(new Element(document.getElementById('tag-input').value, document.getElementById('text-textarea').value, idGenerator()));
      formWrapper.remove();
    }
  }
  function generateHTMLCode(){
    let container = document.getElementById("html-code");
    let htmlCode = '';
    elements.forEach((element)=>htmlCode+= `${element.getHTMLCode()}\n`);
    container.textContent = htmlCode;
  }
})();
