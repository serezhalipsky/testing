export default class Api {
	authorization(user) {
		fetch("https://ajax.test-danit.com/api/v2/cards/login", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify(user)
		})
			.then(response => response.text())

	}
}