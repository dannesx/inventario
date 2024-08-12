import { Label, Pie, PieChart } from 'recharts'

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart'

const computers = [
	{ ssd: 'yes', count: 3, fill: "var(--color-yes)" },
	{ ssd: 'no', count: 2, fill: "var(--color-no)" },
]

const chartConfig = {
	computers: {
		label: 'Computadores',
	},
	yes: {
		label: 'Com SSD',
		color: 'hsl(var(--chart-2))',
	},
	no: {
		label: 'Sem SSD',
		color: 'hsl(var(--chart-5))',
	},
} satisfies ChartConfig

export function ComputerChart() {
	return (
		<Card className="flex flex-col">
			<CardHeader className="items-center pb-0">
				<CardTitle>Visão Geral</CardTitle>
				<CardDescription>Total de computadores</CardDescription>
			</CardHeader>
			<CardContent className="flex-1 pb-0">
				<ChartContainer
					config={chartConfig}
					className="mx-auto aspect-square max-h-[250px]"
				>
					<PieChart>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Pie
							data={computers}
							dataKey="count"
							nameKey="ssd"
							innerRadius={60}
						>
							<Label
								content={({ viewBox }) => {
									if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
										return (
											<text
												x={viewBox.cx}
												y={viewBox.cy}
												textAnchor="middle"
												dominantBaseline="middle"
											>
												<tspan
													x={viewBox.cx}
													y={viewBox.cy}
													className="fill-foreground text-3xl font-bold"
												>
													{computers[0].count + computers[1].count}
												</tspan>
												<tspan
													x={viewBox.cx}
													y={(viewBox.cy || 0) + 24}
													className="fill-muted-foreground"
												>
													Computadores
												</tspan>
											</text>
										)
									}
								}}
							/>
						</Pie>
					</PieChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col gap-2 text-sm">
				<div className="leading-none text-muted-foreground">
					Total de computadores categorizado por SSD
				</div>
			</CardFooter>
		</Card>
	)
}
