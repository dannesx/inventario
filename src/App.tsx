import NewComputer from './components/NewComputer'
import ComputerTable from './components/ComputerTable'
import { ComputerChart } from './components/ComputerChart'

function App() {
	return (
		<main className="max-w-screen-xl mx-auto py-6 space-y-6">
			<header className="flex justify-between">
				<h1 className="text-3xl font-bold">Inventário</h1>

				<NewComputer />
			</header>

			<div className="grid grid-cols-6 gap-12">
				<div className="col-span-4">
					<ComputerTable />
				</div>
				<div className="col-span-2">
					<ComputerChart />
				</div>
			</div>
		</main>
	)
}
export default App
