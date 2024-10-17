import { formDisplayName } from '@/common/layoutData'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table'

export default function Data({ patientData }) {
  if (!Array.isArray(patientData)) {
    console.error('patientData is not an array:', patientData)
    return null
  }

  return (
    <Table className="min-w-[1000px]">
      <TableHeader>
        <TableRow>
          {Object.keys(formDisplayName).map((key) => (
            <TableHead key={key}>{formDisplayName[key]}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {patientData.map((row) => (
          <TableRow key={row._id}>
            {/* Add cells for each key in the row */}
            {Object.keys(formDisplayName).map((key) => (
              <TableCell key={key}>
                {row[key] !== undefined ? row[key] : 'NaN'}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
