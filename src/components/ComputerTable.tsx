import ComputerRow from './ComputerRow'
import { Table, TableBody, TableHead, TableHeader, TableRow } from './ui/table'

function ComputerTable() {
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
				<ComputerRow />
				<ComputerRow />
				<ComputerRow />
				<ComputerRow />
				<ComputerRow />
			</TableBody>
		</Table>
	)
}
export default ComputerTable
