import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import BarChart from '@/components/charts/BarChart'

function BarCard({ title, desc, data, }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>

      <CardContent className="w-full h-[200px] sm:h-[250px] md:[300px]">
        <BarChart data={data} />
      </CardContent>

    </Card>
  )
}
export default BarCard
