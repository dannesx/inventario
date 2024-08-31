import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react'
import { Computer } from '@/types/Computer'
import { getComputadores } from "@/controllers/computadores.js"

interface IComputerContext {
	computers: Computer[]
}

const ComputerContext = createContext({} as IComputerContext)

type Props = {
	children: ReactNode
}

export function ComputerProvider({ children }: Props) {
	const [computers, setComputers] = useState([] as Computer[])

	useEffect(() => {
		async function fetchComputers() {
      const data = await getComputadores()

			setComputers(data)
    }

		fetchComputers()
	}, [computers])

	return (
		<ComputerContext.Provider value={{ computers }}>
			{children}
		</ComputerContext.Provider>
	)
}

export function useComputer() {
	const context = useContext(ComputerContext)

	return context
}
