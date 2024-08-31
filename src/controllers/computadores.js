import axios from 'axios'
const BASE_URL = import.meta.env.VITE_BASE_URL
const URL = `${BASE_URL}/computadores`

export async function getComputadores() {
	try {
		const response = await axios.get(URL)

		return response.data
	} catch (error) {
		console.error(error)
	}
}

export function getComputadorById() {}

export async function createComputador(computer) {
	try {
		const response = await axios.post(URL, computer, {
			headers: {
				'Content-Type': 'application/json',
			},
		})

    return response.data
	} catch (error) {
		console.error(error)
	}
}

export function updateComputador() {}
export function deleteComputador() {}
