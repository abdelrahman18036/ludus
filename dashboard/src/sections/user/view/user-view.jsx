import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseURL } from 'src/components/Auth/API';
import {
  Card,
  Container,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';

import UserTableToolbar from '../user-table-toolbar';
import UserTableHead from '../user-table-head';
import UserTableRow from '../user-table-row';
import TableEmptyRows from '../table-empty-rows';
import TableNoData from '../table-no-data';
import Scrollbar from 'src/components/scrollbar';
import { applyFilter, getComparator, emptyRows } from '../utils';

export default function UserPage() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const fetchUsers = async () => {
      const userToken = localStorage.getItem('userToken');
      try {
        const response = await axios.get(`${baseURL}/api/users/all/`, {
          headers: { 'x-access-token': userToken }
        });
        const data = response.data.map(user => ({
          ...user,
          avatarUrl: user.profilePicture || '/assets/images/avatars/avatar_25.jpg'
        }));
        setUsers(data);
        console.log('Users:', data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.username);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = selectedIndex === -1
      ? [...selected, name]
      : [...selected.slice(0, selectedIndex), ...selected.slice(selectedIndex + 1)];
    setSelected(newSelected);
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
    setPage(0);
  };

  const dataFiltered = applyFilter({
    inputData: users,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Users</Typography>
      </Stack>
      <Card>
        <UserTableToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />
        <Scrollbar>
          <TableContainer>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={users.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: 'username', label: 'Username' },
                  { id: 'email', label: 'Email' },
                  { id: 'profilePicture', label: 'Profile Picture', align: 'center' },
                ]}
              />
              <TableBody>
                {dataFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, index) => (
                  <TableRow key={user._id}>
                    <TableCell></TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell align="center">
                      <img src={user.avatarUrl} alt="Avatar" style={{ width: 50, borderRadius: '50%' }} />
                    </TableCell>

                  </TableRow>
                ))}
                <TableEmptyRows emptyRows={emptyRows(page, rowsPerPage, users.length)} />
                {notFound && (
                  <TableRow>
                    <TableCell colSpan={4}>
                      <Typography align="center" variant="body1">
                        No users found for "{filterName}".
                      </Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />


      </Card>
    </Container>
  );
}
