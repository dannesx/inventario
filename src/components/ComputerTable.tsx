import ComputerRow from './ComputerRow'
import { Table, TableBody, TableHead, TableHeader, TableRow } from './ui/table'
import { useComputer } from '@/contexts/ComputerContext'

function ComputerTable() {
	const { computers } = useComputer()

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-16">ID</TableHead>
					<TableHead className="text-center">Marca</TableHead>
					<TableHead className="text-center">Modelo</TableHead>
					<TableHead className="text-center">Sala</TableHead>
					<TableHead className="text-center">SSD?</TableHead>
					<TableHead className="text-right w-32">Ações</TableHead>
				</TableRow>
			</TableHeader>

			<TableBody>
				{computers.map(computer => <ComputerRow computer={computer} key={computer.id}/>)}
			</TableBody>
		</Table>
	)
}
export default ComputerTable
