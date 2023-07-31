import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const FormContainer = styled('form')(({ theme }) => ({
  padding: theme.spacing(3),
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
  textAlign: 'center',
  fontWeight: 600,
  fontSize: '1.5rem',
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: '#fff',
  width:'300px',
  margin: '10px',
  '&:hover': {
    background: theme.palette.primary.dark,
  },
}));

const ClearButton = styled(Button)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: '#fff',
  width:'300px',
  '&:hover': {
    background: theme.palette.secondary.dark,
  },
}));

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    name: '',
    date: '',
    priority: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({
      name: '',
      date: '',
      priority: '',
      description: '',
    });
  };

  const handleClear = () => {
    setTask({
      name: '',
      date: '',
      priority: '',
      description: '',
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Paper elevation={3}>
        <Grid container spacing={2} style={{padding:'10px'}}>
          <Grid item xs={12}>
            <Title variant="h5">Formulario de Tareas</Title>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nombre de la tarea"
              name="name"
              value={task.name}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Fecha"
              name="date"
              type="date"
              value={task.date}
              onChange={handleInputChange}
              fullWidth
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Prioridad"
              name="priority"
              value={task.priority}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Descripción"
              name="description"
              value={task.description}
              onChange={handleInputChange}
              fullWidth
              multiline
              required
            />
          </Grid>
          <Grid item xs={12}>
            <div style={{textAlign: 'center'}}>
              <SubmitButton variant="contained" type="submit">
                Aceptar
              </SubmitButton>
              <ClearButton variant="contained" onClick={handleClear}>
                Limpiar
              </ClearButton>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </FormContainer>
  );
};

export default TaskForm;
