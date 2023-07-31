import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { TextField, Button, Typography, InputAdornment } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import './PasswordForm.css';

const PasswordForm = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (event) => {
        setPassword(event.target.value);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const esContrasenaSegura = () => {
        // Requerimientos de la contraseña
        const longitudMinima = 16;
        const caracteresEspeciales = ['!', '@', '#', '$', '%', 'ˆ', '&', '*', '-', '_', '+', '=', '?'];
        const caracteresNoPermitidos = ['0', ' '];

        // Verificar longitud mínima
        if (password.length < longitudMinima) {
            return false;
        }

        // Verificar letras minúsculas y mayúsculas
        if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
            return false;
        }

        // Verificar caracteres especiales
        const caracteresEspecialesEncontrados = [];
        for (const caracter of password) {
            if (caracteresEspeciales.includes(caracter)) {
                if (caracteresEspecialesEncontrados.includes(caracter)) {
                    return false;
                }
                caracteresEspecialesEncontrados.push(caracter);
            }
        }

        // Verificar números
        let numeroConsecutivo = 0;
        const numerosPermitidos = new Set();
        for (let i = 0; i < password.length; i++) {
            const caracter = password[i];
            if (!isNaN(caracter) && caracter !== '0') {
                if (numerosPermitidos.has(caracter)) {
                    return false;
                }
                numerosPermitidos.add(caracter);
                numeroConsecutivo = (i > 0 && password[i - 1] === caracter) ? numeroConsecutivo + 1 : 0;
                if (numeroConsecutivo >= 2) {
                    return false;
                }
            }
        }

        // Verificar caracteres repetidos
        for (let i = 1; i < password.length; i++) {
            if (password[i] === password[i - 1]) {
                return false;
            }
        }

        return true;
    };
    const renderCondition = (condition, valid) => {
        return (
            <p style={{ color: valid ? 'green' : 'red' }}>
                {valid ? '✓' : 'X'} {condition}
            </p>
        );
    };

    const handleFormSubmit = () => {
        if (esContrasenaSegura()) {
            // Contraseña segura, mostrar SweetAlert de éxito
            Swal.fire(
                'Contraseña segura!',
                '',
                'success'
            );
        } else {
            // Contraseña insegura, mostrar SweetAlert de error
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'La contraseña no cumple con los requisitos de seguridad.',
            });
        }
    };

    return (
        
        <div className="form-container">
            <div className="form-wrapper">
                <Typography variant="h4" gutterBottom>
                    Password Validator
                </Typography>
                <TextField
                    className="form-input" 
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                    variant="outlined"
                    fullWidth
                    value={password}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                {showPassword ? (
                                    <VisibilityOff onClick={handleTogglePasswordVisibility} />
                                ) : (
                                    <Visibility onClick={handleTogglePasswordVisibility} />
                                )}
                            </InputAdornment>
                        ),
                    }}
                />
                <div className='container-button'>
                <Button
                    variant="contained"
                    color="success"
                    fullWidth
                    onClick={handleFormSubmit}
                >
                    Submit
                </Button>
                </div>
                <p>Password must contain the following:</p>
                {renderCondition('A lowercase letter', /[a-z]/.test(password))}
                {renderCondition('A capital (uppercase) letter', /[A-Z]/.test(password))}
                {renderCondition('A number', /\d/.test(password))}
                {renderCondition('Minimum 8 characters', password.length >= 8)}
                {renderCondition('At least 16 characters', password.length >= 16)}
                {renderCondition('At least 4 numbers', password.match(/\d/g)?.length >= 4)}
                {renderCondition('At least 2 special characters', password.match(/[$&+,:;=?@#|'<>.^*()%!-]/g)?.length >= 2)}

            </div>
        </div>
        

    );
};

export default PasswordForm;
