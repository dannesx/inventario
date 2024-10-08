import { Pencil } from 'lucide-react'
import { Button } from './ui/button'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Checkbox } from './ui/checkbox'

function EditComputer() {
	return (
		<Dialog>
			<DialogTrigger>
				<Button size="icon" variant="outline">
					<Pencil size={16} />
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-sm">
				<form className="space-y-4">
					<DialogHeader>
						<DialogTitle>Editar computador</DialogTitle>
						<DialogDescription>
							Formulário de edição de computador
						</DialogDescription>
					</DialogHeader>

					<div className="grid grid-cols-4 gap-4 items-center">
						<Label htmlFor="id" className="text-right">
							ID
						</Label>
						<Input
							id="id"
							name="id"
							className="col-span-3"
							type="number"
							required
						/>

						<Label htmlFor="brand" className="text-right">
							Marca
						</Label>
						<Input id="brand" name="brand" className="col-span-3" type="text" />

						<Label htmlFor="model" className="text-right">
							Modelo
						</Label>
						<Input id="model" name="model" className="col-span-3" type="text" />

						<Label htmlFor="classroom" className="text-right">
							Sala
						</Label>
						<Input
							id="classroom"
							name="classroom"
							className="col-span-3"
							type="number"
							required
						/>

						<Label htmlFor="ssd" className="text-right">
							SSD
						</Label>
						<Checkbox id="ssd" name="ssd" />
					</div>

					<DialogFooter className="flex gap-2">
						<DialogClose>Cancelar</DialogClose>
						<Button type="submit">
							<Pencil size={16} className="mr-1" />
							Editar
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	)
}
export default EditComputer
