'use strict';

const showModalBtn = document.querySelector('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

showModalBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.code === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
