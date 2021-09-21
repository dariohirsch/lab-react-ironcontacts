import "./App.css"
import { useState } from "react"

import contactsData from "./contacts.json"

// const copiedArray = [...contactsData]

function App() {
	const [contacts, setContacts] = useState(contactsData.slice(0, 5))

	function getRandom() {
		const randomIndex = Math.floor(Math.random() * contactsData.length)
		const randomContact = contactsData[randomIndex]

		const newArray = contacts.map((contact) => {
			return contact
		})

		newArray.push(randomContact)

		setContacts(newArray)
	}

	function sortByPopularity() {
		const copyOfArray = contacts.map((contact) => {
			return contact
		})

		const sortedArray = copyOfArray.sort(function (contactOne, contactTwo) {
			return contactTwo.popularity - contactOne.popularity
		})

		setContacts(sortedArray)
	}

	function sortByName() {
		const copyOfArray2 = contacts.map((contact) => {
			return contact
		})
		const sortedByName = copyOfArray2.sort(function (contactOne, contactTwo) {
			if (contactTwo.name > contactOne.name) {
				return -1
			}
			if (contactTwo.name < contactOne.name) {
				return 1
			}
			return 0
		})

		setContacts(sortedByName)
	}

	function deleteContact(contactId) {
		const filteredContacts = contacts.filter((contact) => {
			return contact.id !== contactId
		})
		setContacts(filteredContacts)
	}

	return (
		<>
			<div className="App">
				<h2>IronContacts</h2>
				<button onClick={() => getRandom()}>Add random contact</button>
				<button onClick={() => sortByPopularity()}>Sort by popularity</button>
				<button onClick={() => sortByName()}>Sort by name</button>

				<div>
					<table>
						<tr>
							<th>Picture</th>
							<th>Name</th>
							<th>Popularity</th>
							<th>Won Oscar</th>
							<th>Won Emmy</th>
							<th>Actions</th>
						</tr>
						{contacts.map((contact) => (
							<tr>
								<td>
									<img src={contact.pictureUrl} class="image" alt="images"></img>
								</td>
								<td>{contact.name}</td>
								<td>{Math.round(contact.popularity * 100) / 100}</td>
								<td>{contact.wonOscar ? "🏆 " : ""}</td>
								<td>{contact.wonEmmy ? "🏆 " : ""}</td>
								<td>
									<button onClick={() => deleteContact(contact.id)}>Delete</button>
								</td>
							</tr>
						))}
					</table>
				</div>
			</div>
		</>
	)
}
export default App
