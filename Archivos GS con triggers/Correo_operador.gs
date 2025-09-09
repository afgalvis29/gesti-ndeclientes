function Correooperador2 () {
  const nHojaDatos ="Clientes";
  const filasencabezado = 1;
  const colCondicion = 22;
  const valorcondicion = "SI";

  const archivo = SpreadsheetApp.getActiveSpreadsheet();
  var plantillam = archivo.getSheetByName("Plantilla Operadores").getRange(3,1).getValue();
  var plantillaa = archivo.getSheetByName("Plantilla Operadores").getRange(1,1).getValue();

  const celdaActiva = SpreadsheetApp.getCurrentCell();
  const valorActivo = celdaActiva.getValue();
  const colActiva = celdaActiva.getColumn();
  const filaActiva = celdaActiva.getRow();
  const nHojaActiva = celdaActiva.getSheet().getName();
//Variables de configuración
  const email= celdaActiva.getSheet().getRange(filaActiva,21).getValue();
  const cliente= celdaActiva.getSheet().getRange(filaActiva,2).getValue();
  const fecha= celdaActiva.getSheet().getRange(filaActiva,13).getValue();
  const plan= celdaActiva.getSheet().getRange(filaActiva,4).getValue();
  const nombreoperador= celdaActiva.getSheet().getRange(filaActiva,20).getValue();
  const correocliente= celdaActiva.getSheet().getRange(filaActiva,8).getValue();
  const necesidad= celdaActiva.getSheet().getRange(filaActiva,10).getValue();
  const administrador= celdaActiva.getSheet().getRange(filaActiva,6).getValue();
  const celular= celdaActiva.getSheet().getRange(filaActiva,9).getValue();
  var asunto = plantillaa.replace("cliente",cliente)
  .replace("plan",plan)

  var mensaje = plantillam.replace("{{email}}",email)
  .replace("{{cliente}}",cliente)
  .replace("{{fecha}}",fecha)
  .replace("{{plan}}",plan)
  .replace("{{nombreoperador}}",nombreoperador)
  .replace("{{correocliente}}",correocliente)
  .replace("{{necesidad}}", necesidad)
  .replace("{{administrador}}", administrador)
  .replace("{{celular}}", celular)



  if(nHojaDatos==nHojaActiva && filaActiva > filasencabezado && colActiva == colCondicion && valorActivo == valorcondicion ){
MailApp.sendEmail(email,asunto,mensaje);
celdaActiva.getSheet().getRange(filaActiva,23).setValue("Enviada");

}
}
