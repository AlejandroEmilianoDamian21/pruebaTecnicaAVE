function esContrasenaSegura(contrasena) {
    // Requerimientos de la contraseña
    const longitudMinima = 16;
    const caracteresEspeciales = ['!', '@', '#', '$', '%', 'ˆ', '&', '*', '-', '_', '+', '=', '?'];
    const caracteresNoPermitidos = ['0', ' '];
  
    // Verificar longitud mínima
    if (contrasena.length < longitudMinima) {
      return false;
    }
  
    // Verificar letras minúsculas y mayúsculas
    if (!/[a-z]/.test(contrasena) || !/[A-Z]/.test(contrasena)) {
      return false;
    }
  
    // Verificar caracteres especiales
    const caracteresEspecialesEncontrados = [];
    for (const caracter of contrasena) {
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
    for (let i = 0; i < contrasena.length; i++) {
      const caracter = contrasena[i];
      if (!isNaN(caracter) && caracter !== '0') {
        if (numerosPermitidos.has(caracter)) {
          return false;
        }
        numerosPermitidos.add(caracter);
        numeroConsecutivo = (i > 0 && contrasena[i - 1] === caracter) ? numeroConsecutivo + 1 : 0;
        if (numeroConsecutivo >= 2) {
          return false;
        }
      }
    }
  
    // Verificar caracteres repetidos
    for (let i = 1; i < contrasena.length; i++) {
      if (contrasena[i] === contrasena[i - 1]) {
        return false;
      }
    }
  
    return true;
  }

  
  // Obtener la contraseña desde la consola
  const contrasenaIngresada = process.argv[2];
  
  // Verificar si se proporcionó una contraseña
  if (!contrasenaIngresada) {
    console.log('Por favor, ingresa una contraseña como argumento de la consola.');
  } else {
    // Validar la contraseña ingresada
    const esSegura = esContrasenaSegura(contrasenaIngresada);
    console.log(`La contraseña "${contrasenaIngresada}" es segura: ${esSegura}`);
  }
