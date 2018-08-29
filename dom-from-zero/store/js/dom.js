'use strict';

function createElement(node) {
    if (!node){
        return document.createTextNode('');
    }

    if (Array.isArray(node)) {
        return node.reduce(function(f, item) {
            f.appendChild(createElement(item));

            return f;
        }, document.createDocumentFragment());
    }

    if(typeof node === 'string' || typeof node === 'number'){
        return document.createTextNode(node.toString());
    }

    const element = document.createElement(node.name);


    if (node.props) {
        Object.keys(node.props).forEach(key => {
            element.setAttribute(key, node.props[key]);
        });
    }

    if (node.childs) {
        element.appendChild(createElement(node.childs));
    }

    return element;

}