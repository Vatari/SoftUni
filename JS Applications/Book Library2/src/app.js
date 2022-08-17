import { deleteExercise, getExercises } from './requests.js'
import { clearFields, getFormData } from './helper.js'
import { editExercise, displayEditForm } from './editFunctionality.js'
import { createBook, createBookElement } from './createFunctionality.js'

const [submitForm, editForm] = [
	document.getElementById('submitForm'), document.getElementById('editForm')
]
const displayExercises = async () => displayBase(await getExercises())

function displayBase (data) {
	const display = document.querySelector('body > table > tbody')
	display.innerHTML = ''

	Object.entries(data)
		.forEach(([id, data]) => {
			const element = createBookElement({ ...data, id })
			display.appendChild(element)
		})
}

document.getElementById('submitForm').addEventListener('submit', async (e) => {
	e.preventDefault()
	const formData = getFormData(e.target)

	if (formData.author !== '' && formData.title !== '') {
		await createBook(formData)
		displayExercises()
		clearFields(submitForm)
	} else {
		alert('All fields are required!')
	}
})

document.getElementById('editForm').addEventListener('submit', async (e) => {
	e.preventDefault()
	const formData = getFormData(e.target)

	await editExercise(e, formData, submitForm, editForm)
	displayExercises()
})

document.addEventListener('click', e => {

	if (e.target.tagName === 'BUTTON') {
		const bookElement = e.target.parentNode.parentNode
		const actions = {
			loadBooks: displayExercises,
			editBook: () => displayEditForm(bookElement.id, submitForm, editForm),
			deleteBook: async () => {
				await deleteExercise(bookElement.id)
				bookElement.outerHTML = ''
			},
		}

		try {
			e.target.id ? actions[e.target.id]() : actions[e.target.className]()
		} catch (e) {
			console.log(e)
		}
	}
})
