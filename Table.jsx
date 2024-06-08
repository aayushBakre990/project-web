import './Table.css';

export default function Table(props) {
  return (
    <>
      <table cellPadding={props.cellPad} cellSpacing={props.cellSpace} style={props.styling}>
        <TableHead></TableHead>
        <TableRow rank="1" name="Kolkata Knight Riders" matches="9" points="20" icon="./images/table/logoKkr.png"></TableRow>
        <TableRow rank="2" name="Sunrisers Hyderabad" matches="8" points="17" icon="./images/table/logoSrh.png"></TableRow>
        <TableRow rank="3" name="Rajasthan Royals" matches="8" points="17" icon="./images/table/logoRr.png"></TableRow>
        <TableRow rank="4" name="Royal Challengers Bengaluru" matches="7" points="14" icon="./images/table/logoRcb.png"></TableRow>  
      </table>
    </>
  );
}

function TableHead() {
  return(
    <>
      <tr>
        <th colSpan={3}>Team</th>
        <th>Matches Won</th>
        <th>Points</th>
      </tr>
    </>
  )
}

function TableRow(props) {
  return (
    <>
      <tr>
        <td>{props.rank}</td>
        <td><img src={props.icon} alt={props.name} /></td>
        <td style={{textAlign:"left"}}>{props.name}</td>
        <td>{props.matches}</td>
        <td>{props.points}</td>
      </tr>
    </>
  )
}

