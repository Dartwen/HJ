'use strict';

let parseContacs = loadContacts();
let contacts = JSON.parse(parseContacs);

var classContact = document.querySelector('.contacts-list');

classContact.innerHTML = contacts.map((el)=>`<li data-email=${el.email} data-phone="${el.phone}"><strong>${el.name}</strong></li>`).join('');


