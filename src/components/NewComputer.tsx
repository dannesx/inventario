import { Plus } from 'lucide-react'
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
import { FormEvent, useState } from 'react'
import { createComputador } from '@/controllers/computadores.js'

function NewComputer() {
	const [id, setId] = useState(0)
	const [marca, setMarca] = useState('')
	const [modelo, setModelo] = useState('')
	const [sala, setSala] = useState(0)
	const [SSD, setSSD] = useState(false)

	async function handleSubmit(e: FormEvent) {
		e.preventDefault()

		const computer = { id, marca, modelo, sala, SSD }

		const data = await createComputador(computer)
		console.log(data)
	}

	return (
		<Dialog>
			<DialogTrigger>
				<Button size="sm">
					<Plus size={18} className="mr-1" />
					Novo computador
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-sm">
				<form className="space-y-4" onSubmit={e => handleSubmit(e)}>
					<DialogHeader>
						<DialogTitle>Adicionar computador</DialogTitle>
						<DialogDescription>
							Formulário de registro para novo computador
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
							onChange={e => setId(e.target.value)}
						/>

						<Label htmlFor="brand" className="text-right">
							Marca
						</Label>
						<Input
							id="brand"
							name="brand"
							className="col-span-3"
							type="text"
							onChange={e => setMarca(e.target.value)}
						/>

						<Label htmlFor="model" className="text-right">
							Modelo
						</Label>
						<Input
							id="model"
							name="model"
							className="col-span-3"
							type="text"
							onChange={e => setModelo(e.target.value)}
						/>

						<Label htmlFor="classroom" className="text-right">
							Sala
						</Label>
						<Input
							id="classroom"
							name="classroom"
							className="col-span-3"
							type="number"
							required
							onChange={e => setSala(e.target.value)}
						/>

						<Label htmlFor="ssd" className="text-right">
							SSD
						</Label>
						<Checkbox
							id="ssd"
							name="ssd"
							onChange={e => setSSD(e.target.checked)}
						/>
					</div>

					<DialogFooter className="flex gap-2">
						<DialogClose>Cancelar</DialogClose>
						<Button type="submit">
							<Plus size={16} className="mr-1" />
							Adicionar
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	)
}
export default NewComputer
