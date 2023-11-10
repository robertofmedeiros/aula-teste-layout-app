import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'nome',
    headerName: 'Nome',
    width: 150,
    editable: true,
  },
  {
    field: 'sobreNome',
    headerName: 'Sobre Nome',
    width: 150,
    editable: true,
  },
  {
    field: 'idade',
    headerName: 'Idade',
    type: 'number',
    width: 110,
    editable: true,
  },
];

const rows = [
  { id: 1, sobreNome: 'Snow', nome: 'Jon', idade: 35 },
  { id: 2, sobreNome: 'Lannister', nome: 'Cersei', idade: 42 },
  { id: 3, sobreNome: 'Lannister', nome: 'Jaime', idade: 45 },
  { id: 4, sobreNome: 'Stark', nome: 'Arya', idade: 16 },
  { id: 5, sobreNome: 'Targaryen', nome: 'Daenerys', idade: null },
  { id: 6, sobreNome: 'Melisandre', nome: null, idade: 150 },
  { id: 7, sobreNome: 'Clifford', nome: 'Ferrara', idade: 44 },
  { id: 8, sobreNome: 'Frances', nome: 'Rossini', idade: 36 },
  { id: 9, sobreNome: 'Roxie', nome: 'Harvey', idade: 65 },
];

function App() {
  return (
    <div style={{maxWidth: "100%"}}>
      <header style={{display: "flex"}}>
        <div style={{display: "flex", width: "100%", padding: "27px"}}>
          <h1>
            <img style={{display: "block", width: "100px", height: "59px"}} src="./senac_logo.png" />
          </h1>
          <div style={{display: "flex", width: "100%", justifyContent: "center", alignContent: "center"}}>
            <p style={{fontSize: "35px", color: "#004587"}}>Teste</p>
          </div>
        </div>
      </header>
      <div style={{display: "flex", padding: "0 40px", backgroundImage:"url(http://localhost:3000/slide_senac.jpg", backgroundSize: "cover", height: "200px", alignItems: "center"}}>
        <p style={{color: "white", fontSize: "24px"}}>Senac</p> 
      </div>
      <div style={{display: "flex"}}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
}

export default App;
