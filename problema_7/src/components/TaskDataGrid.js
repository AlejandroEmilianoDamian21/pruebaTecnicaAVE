import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import '../components/styles/tableStyle.css'

const TaskDataGrid = ({ tasks, onDelete, sortByDate, sortDirection }) => {
  const sortTasksByDate = (a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
  };

  const sortedTasks = tasks.slice().sort(sortTasksByDate);

  const columns = [
    { field: 'name', headerName: 'Nombre de la tarea', width: 200 },
    {
      field: 'date',
      headerName: 'Fecha',
      width: 150,
      sortComparator: (v1, v2, cellParams1, cellParams2) =>
        sortDirection === 'asc' ? cellParams1.value - cellParams2.value : cellParams2.value - cellParams1.value,
    },
    { field: 'priority', headerName: 'Prioridad', width: 150 },
    { field: 'description', headerName: 'Descripción', width: 300 },
    {
      field: 'actions',
      headerName: 'Acciones',
      width: 150,
      renderCell: (params) => (
        <IconButton color="secondary" onClick={() => onDelete(params.row.id)}>
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  const rows = sortedTasks.map((task, index) => ({ ...task, id: index }));
  const tableStyle = {
    height: 400,
    width: '100%',
    fontSize: '16px', 
  };

  const headerCellStyle = {
    fontWeight: 'bold',
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        sortingOrder={['asc', 'desc']}
        onSortModelChange={(model) => {
          if (model.length > 0) {
            sortByDate(model[0].sort === 'asc' ? 'asc' : 'desc');
          }
        }}
        components={{
          Toolbar: () => (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px' }}>
              <h2  >Tabla de Tareas</h2>
            </div>
          ),
        }}
        componentsProps={{
          toolbar: {
            className: 'custom-toolbar',
          },
        }}
        className="custom-table"
        style={tableStyle}
        headerClassName="custom-header" />
    </div>
  );
};

export default TaskDataGrid;