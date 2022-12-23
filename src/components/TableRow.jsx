import TableCell from './TableCell'

const TableRow = ({ flight }) => {
  // console.log(flight) 

  const words = Object.values(flight)

  // console.log(words)

  return (
    <tr>
      <td>✈</td>
      {/* <td>{flight.departing}</td>
      <td>{flight.destination}</td>
      <td>{flight.flightNumber}</td>
      <td>{flight.gate}</td>
      <td>{flight.status}</td> */}
      {words?.map((word, index) => (
      <TableCell key={index} word={word} index={index}/>
      )).slice(1)}
    </tr>
  )
}

export default TableRow;