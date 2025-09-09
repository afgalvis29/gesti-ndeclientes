function Correoimplementacion() {
  const nHojaDatos = "Clientes";
  const filasencabezado = 1;
  const colCondicion = 24;
  const valorcondicion = "Enviado";

  const archivo = SpreadsheetApp.getActiveSpreadsheet();
  var plantillaa = archivo.getSheetByName("Asuntos").getRange(1, 1).getValue();

  const celdaActiva = SpreadsheetApp.getCurrentCell();
  const valorActivo = celdaActiva.getValue();
  const colActiva = celdaActiva.getColumn();
  const filaActiva = celdaActiva.getRow();
  const nHojaActiva = celdaActiva.getSheet().getName();

  // Variables de configuración
  const email= celdaActiva.getSheet().getRange(filaActiva,8).getValue();
  const cliente= celdaActiva.getSheet().getRange(filaActiva,2).getValue();
  const fecha= celdaActiva.getSheet().getRange(filaActiva,13).getValue();
  const plan = celdaActiva.getSheet().getRange(filaActiva, 4).getValue();
  const nombreoperador= celdaActiva.getSheet().getRange(filaActiva,20).getValue();
  const administrador= celdaActiva.getSheet().getRange(filaActiva,6).getValue();

  // Cargar y rellenar la plantilla HTML
  var plantilla = HtmlService.createTemplateFromFile('implementacion');
  plantilla.email = email;
  plantilla.cliente = cliente;
  plantilla.fecha = fecha;
  plantilla.plan = plan;
  plantilla.nombreoperador = nombreoperador;
  plantilla.administrador = administrador;

  // Nueva variable para obtener los correos en copia de la columna 15 (puedes cambiar la columna según sea necesario)
  const copias = celdaActiva.getSheet().getRange(filaActiva, 21).getValue(); 

  var asunto = plantillaa.replace("cliente", cliente)
    .replace("plan", plan);

  // Generar el cuerpo del mensaje en HTML
  var mensajeHtml = plantilla.evaluate().getContent();

  if (nHojaDatos == nHojaActiva && filaActiva > filasencabezado && colActiva == colCondicion && valorActivo == valorcondicion) {
    // Configuración del envío de correo con copias dinámicas
    MailApp.sendEmail({
      to: email,
      subject: asunto,
      htmlBody: mensajeHtml, // Aquí está el cambio importante, ahora se envía el HTML correctamente
      name: "PROPIEDATA", // Cambia el nombre del remitente
      cc: copias // Correos en copia sacados de la columna 15
    });

    // Marca la columna 14 como "Enviada"
    celdaActiva.getSheet().getRange(filaActiva, 25).setValue("Enviada");
  }
}
