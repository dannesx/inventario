import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react'
import { Computer } from '@/types/Computer'
import { getComputadores, createComputador } from '@/controllers/computadores.js'

interface IComputerContext {
	computers: Computer[]
	newComputer: (computer: Computer) => void
}

const ComputerContext = createContext({} as IComputerContext)

type Props = {
	children: ReactNode
}

export function ComputerProvider({ children }: Props) {
	const [computers, setComputers] = useState([] as Computer[])
	const [refresh, setRefresh] = useState(true)

	useEffect(() => {
		async function fetchComputers() {
			const data = await getComputadores()

			setComputers(data)
		}

		if (refresh) {
			fetchComputers()
			setRefresh(false)
		}
	}, [refresh])

	async function newComputer(computer: Computer) {
		await createComputador(computer)
		setRefresh(true)
	}

	return (
		<ComputerContext.Provider value={{ computers, newComputer }}>
			{children}
		</ComputerContext.Provider>
	)
}

export function useComputer() {
	const context = useContext(ComputerContext)

	return context
}