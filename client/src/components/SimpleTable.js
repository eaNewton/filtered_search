import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  }
};

let id = 0;
function createData(first_name, last_name, email, primary_phone, secondary_phone, address1_street1, address1_street2, address1_city, address1_state, address1_zip) {
  id += 1;
  return { id, first_name, last_name, email, primary_phone, secondary_phone, address1_street1, address1_street2, address1_city, address1_state, address1_zip };
}

const data = [
  createData('Tom', 'Jones', 'thekingofpop@gmail.com', '512-555-0189', '1-800-RENT-A-CAR'),
  createData('John', 'Cougar Mellencamp', 'whoami@yahoo.com'),
  createData('James', 'Hendrix', 'littlewing@hotmail.com', '444-CAS-TLES', ''),
  createData('Darryl', 'Hall', 'outoftouch@gmail.com', '555-OOT-OUCH', '985-SHE-GONE'),
  createData('Charles', 'Berry', 'hey_marvin@yahoo.com', '344-689-8990'),
  createData('Pete', 'Gabriel', 'iusedtobeingenesis@genesis.com', '911'),
];

function SimpleTable(props) {
  const { classes } = props;

  return(
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Primary Phone</TableCell>
            <TableCell>Secondary Phone</TableCell>
            <TableCell>Shipping Address 1</TableCell>
            <TableCell>Shipping Address 2</TableCell>
            <TableCell>Shipping City</TableCell>
            <TableCell>Shipping State</TableCell>
            <TableCell>Shipping ZIP</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => (
            <TableRow key={n.id}>
              <TableCell component="th" scope="row">
                {n.id}
              </TableCell>
              <TableCell>{n.first_name}</TableCell>
              <TableCell>{n.last_name}</TableCell>
              <TableCell>{n.email}</TableCell>
              <TableCell>{n.primary_phone}</TableCell>
              <TableCell>{n.secondary_phone}</TableCell>
              <TableCell>{n.address1_street1}</TableCell>
              <TableCell>{n.address1_street2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleTable);