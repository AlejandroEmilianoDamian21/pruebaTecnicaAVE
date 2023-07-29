# Problema N°3

# Validador de Contraseña Segura

Este es un programa para validar contraseñas seguras basado en ciertos criterios específicos.

## Requerimientos de la Contraseña

Para que una contraseña sea considerada segura, debe cumplir con los siguientes requerimientos:

- Debe tener al menos 16 caracteres.
- Debe contener letras minúsculas y mayúsculas.
- No puede tener dos letras iguales consecutivas.
- Debe contener al menos 4 números.
- No puede tener dos números iguales consecutivos.
- Debe tener al menos 2 caracteres especiales (!@#$%ˆ&*-_+=?) pero ninguno de ellos puede repetirse en ninguna posición, y los caracteres especiales no pueden estar juntos.
- No se puede usar el número 0.
- No se pueden colocar espacios.

## Uso

1. Ejecuta el programa pasando la contraseña que vas a validar como argumento en la consola

```bash
node .\validadorContrasena.js  Daz@fghJk1!2345678
```	

# Respuesta

El programa imprimirá un mensaje indicando si la contraseña es segura o no.
