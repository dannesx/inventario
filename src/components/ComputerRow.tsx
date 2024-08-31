import { TableCell, TableRow } from './ui/table'
import DeleteComputer from './DeleteComputer'
import EditComputer from './EditComputer'
import { Computer } from '@/types/Computer'

type Props = {
	computer: Computer
}

function ComputerRow({ computer }: Props) {
	return (
		<TableRow>
			<TableCell className="font-medium">{computer.id}</TableCell>
			<TableCell className="text-center">{computer.marca}</TableCell>
			<TableCell className="text-center">{computer.modelo}</TableCell>
			<TableCell className="text-center">{computer.sala}</TableCell>
			<TableCell className="text-center">{computer.SSD == 1 ? "Sim" : "Não"}</TableCell>
			<TableCell className="space-x-2 text-right">
				<EditComputer />
				<DeleteComputer />
			</TableCell>
		</TableRow>
	)
}
export default ComputerRow
