import Constans from "./Constans.js";
import ModalUser from "./modalUser.js"
import Api from "./api.js"
const { modalClose, btnLogin } = Constans
const modalLogin = new ModalUser('modal-template')

// modalClose.addEventListener('click', () => {
// 	userModal.classlist.remove('.active');
// });
btnLogin.addEventListener('click', () => {
	modalLogin.render()
})
