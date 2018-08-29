'use strict';

function showComments(list) {
    const commentsContainer = document.querySelector('.comments');
    const comments = list.map(createComment);
    const fragment = comments.reduce((fragment, currentValue) => {
        fragment.appendChild(currentValue);
        return fragment;
    }, document.createDocumentFragment());
    commentsContainer.appendChild(fragment);
}

function el(tagName, attributes, children) {
    const element = document.createElement(tagName);
    if (typeof attributes === 'object') {
        Object.keys(attributes).forEach(i => element.setAttribute(i, attributes[i]));
    }
    if (typeof children === 'string') {
        element.textContent = children;
    } else if (children instanceof Array) {
        children.forEach(child => element.appendChild(child));
    }
    return element;
}

function createComment(comment) {
    const photoBlock = el('div', {class: 'photo', title: comment.author.name}, [el('div',{
        class: 'avatar',
        style: `background-image: url('${comment.author.pic}')`
    })]);
    const commentBlock = el('div', {class: 'comment-block'}, [
        el('p', {class: 'comment-text'}, comment.text.split('\n').map(line => line ? el('p', {}, line) : el('br', {}, ''))),
        el('div', {class: 'bottom-comment'}, [
            el('div', {class: 'comment-date'}, `${new Date(comment.date).toLocaleString('ru-Ru')}`),
            el('ul', {class: 'comment-actions'}, [
                el('li', {class: 'complain'}, 'Пожаловаться'),
                el('li', {class: 'reply'}, 'Ответить')
            ])
        ])
    ]);
    const wrapper = document.createElement('div');
    wrapper.classList.add('comment-wrap');
    wrapper.appendChild(photoBlock);
    wrapper.appendChild(commentBlock);
    return wrapper;
    /*return `<div class="comment-wrap">
    <div class="photo" title="${comment.author.name}">
      <div class="avatar" style="background-image: url('${comment.author.pic}')"></div>
    </div>
    <div class="comment-block">
      <p class="comment-text">
        ${comment.text.split('\n').join('<br>')}
      </p>
      <div class="bottom-comment">
        <div class="comment-date">${new Date(comment.date).toLocaleString('ru-Ru')}</div>
        <ul class="comment-actions">
          <li class="complain">Пожаловаться</li>
          <li class="reply">Ответить</li>
        </ul>
      </div>
    </div>
  </div>`*/
}

fetch('https://neto-api.herokuapp.com/comments')
    .then(res => res.json())
    .then(showComments);
