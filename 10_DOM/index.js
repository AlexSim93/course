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
      this.element = document.createElement(tag);
      this.element.textContent = text;
      this.element.classList.add('new-element');
      this.elementRemoveLink = document.createElement('a');
      this.elementRemoveLink.textContent = "Удалить элемент";
      this.elementRemoveLink.classList.add('link-remove-element');
      this.id = id;
      this.elementRemoveLink.addEventListener('click', this.removeElement.bind(this));
      this.renderElement('content');
    }
    renderElement(containerId){
      let container = document.getElementById(containerId);
      container.appendChild(this.element);
      container.appendChild(this.elementRemoveLink);
    }
    getHTMLCode(){
      return this.element.outerHTML;
    }
    getId(){
      return this.id;
    }
    removeElement(evt){
      evt.preventDefault();
      let index = elements.findIndex((element)=>element.getId() === this.getId());
      this.element.remove();
      this.elementRemoveLink.remove();
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
    let buttonSubmit = createDOMElement('button', [['type', 'submit']], ['Добавить Элемент'], ['btn-submit']);
    let textareaText = createDOMElement('textarea', [['id', 'text-textarea'], ['name', 'content']], null ,['text-textarea']);
    let labelText = createDOMElement('label', [['for', 'text-textarea']], ['Текст'], ['label-text']);
    let inputTag = createDOMElement('input', [['id', 'tag-input'], ['name', 'tag']], null ,['input-tag']);
    let labelTag = createDOMElement('label', [['for', 'tag-input']], ['Тег'], ['label-tag']);
    let close = createDOMElement('a', [], ['X'], ['link-close'], 'click', closeForm);
    let title = createDOMElement('h1', [], ['Добавление элемента'], ['title']);
    let form = createDOMElement('form',[],[close, title, labelTag, inputTag, labelText, textareaText, buttonSubmit], ['add-tag-form'], 'submit', submitForm);
    let fragment = document.createDocumentFragment();
    let wrapper = createDOMElement('div', [], [form], ['form-wrapper']);
    fragment.appendChild(wrapper);
    container.appendChild(fragment);
    function closeForm(evt){
      evt.preventDefault();
      wrapper.remove();
    }
    function submitForm(evt){
      evt.preventDefault();
      elements.push(new Element(inputTag.value, textareaText.value, idGenerator()));
      wrapper.remove();
    }
  }
  function generateHTMLCode(){
    let container = document.getElementById("html-code");
    let htmlCode = '';
    elements.forEach((element)=>htmlCode+= `${element.getHTMLCode()}\n`);
    container.textContent = htmlCode;
  }
})();
