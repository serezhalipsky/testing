import Api from "../modules/api.js";
import Constans from "./Constans.js";



const { btnLogin, userFormModal, btnOutput } = Constans
const api = new Api()

export default class ModalUser {
	constructor(modalTemplate) {
		this.modalTemplate = document.getElementById(modalTemplate)
	}

	render() {
		const modalTpl = this.modalTemplate.content;
		const userModal = modalTpl.querySelector('.user-modal').cloneNode(false);
		const userModalOverlay = modalTpl.querySelector('.user-modal-overlay').cloneNode(false);
		const userModalForm = modalTpl.querySelector('.user-modal_form').cloneNode(false);
		const userModalHeader = modalTpl.querySelector('.user-modal_header').cloneNode(false);
		const modalName = modalTpl.querySelector('.modal-name').cloneNode(false);
		modalName.textContent = 'Login'
		const modalClose = modalTpl.querySelector('.modal-close').cloneNode(false);
		const userModalInput = modalTpl.querySelector('.user-modal_input').cloneNode(false);
		const email = modalTpl.querySelector('.email').cloneNode(false);
		const password = modalTpl.querySelector('.password').cloneNode(false);
		const userModalBtn = modalTpl.querySelector('.user-modal_btn').cloneNode(false);
		const modalConfm = modalTpl.querySelector('.modal-confm').cloneNode(false);
		userFormModal.append(userModal);
		userModal.append(userModalOverlay);
		userModalOverlay.append(userModalForm);
		userModalForm.append(userModalHeader, userModalInput, userModalBtn);
		userModalHeader.append(modalName, modalClose);
		userModalInput.append(email, password);
		userModalBtn.append(modalConfm);
		modalClose.addEventListener('click', () => {
			if (userModal.classList !== 'active') {
				userModal.classList.add('show')
			}
		});
		modalConfm.addEventListener('click', () => {
			console.log(email.value);
			console.log(password.value);
			let user = { email: email.value, password: password.value };
			console.log(user);
			api.authorization(user);
			if (userModal.classList !== 'active') {
				userModal.classList.add('show')
			}
			btnLogin.classList.add('show');
			btnOutput.classList.contains('show');
			btnOutput.classList.remove('show');
		})


		// userModal.addEventListener("submit", (e) => {
		// 	e.preventDefault();
		// });
	}

}