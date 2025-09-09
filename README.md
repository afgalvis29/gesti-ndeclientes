# Automatización de Notificación y Gestión de Clientes

Automatización desarrollada con **Google Apps Script** para Propiedata, que optimiza el flujo operativo desde el ingreso de nuevos clientes hasta su asignación, capacitación y cierre de proceso.

---

##  Objetivos

- Detectar nuevos registros de clientes y asignar automáticamente el operador correspondiente.  
- Automatizar notificaciones vía Gmail a operadores.  
- Monitorear el ciclo completo: agendamiento de capacitaciones y calificación final.  
- Generar seguimiento automatizado sin intervención manual constante.

---

##  Estructura del repositorio

- `gs/` → Archivos `.gs` del script (ej. `Correo_operador.gs`)  
- `html/` → Plantillas HTML utilizadas por el script para correos  
- `README.md` → Esta guía de presentación, uso e impacto

---

##  Cómo funciona

1. Al ingresarse un nuevo cliente en la hoja de cálculo, el script se activa automáticamente.  
2. Envía un correo personalizado al operador responsable.  
3. Actualiza el estado del cliente reflejando el avance (p. ej., “Asignado”, “Capacitación agendada”).  
4. Al finalizar, registra una calificación de satisfacción por parte del cliente.  

*(Puedes agregar capturas o diagrama si lo deseas)*

---

##  Tecnologías utilizadas

- **Google Apps Script** para automatización de flujo operativo  
- **HTML** para plantillas de correo personalizadas  
- **Google Sheets** como base de datos operativa y disparador del script

---

##  Impacto / Resultados

- Reducción del tiempo de respuesta y asignación a segundos.  
- Eliminación de tareas repetitivas manuales.  
- Mayor trazabilidad y visibilidad del ciclo de atención al cliente.  

---

##  Próximos pasos

- Adaptación del sistema para múltiples tipos de procesos (capacitación, soporte, renovaciones).  
- Integración con APIs externas para automatización multicanal.  
- Visualización de indicadores en dashboard BI (Power BI, Looker Studio).

---

##  Conecta conmigo

¿Quieres colaborar o replicar este proyecto?  
- Email: **afgalvis29@gmail.com**  
- LinkedIn: [Andrés Galvis](https://www.linkedin.com/in/andresgalvis99)

