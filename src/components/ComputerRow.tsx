import { TableCell, TableRow } from './ui/table'
import DeleteComputer from './DeleteComputer'
import EditComputer from './EditComputer'

function ComputerRow() {
	return (
		<TableRow>
			<TableCell className="font-medium">PC101</TableCell>
			<TableCell className="text-center">Lenovo</TableCell>
			<TableCell className="text-center">Ideapad 3</TableCell>
			<TableCell className="text-center">1</TableCell>
			<TableCell className="text-center">Sim</TableCell>
			<TableCell className="space-x-2 text-right">
				<EditComputer />
				<DeleteComputer />
			</TableCell>
		</TableRow>
	)
}
export default ComputerRow
