# 🧾 Gestión de Facturas - Backend

Este es el backend de la aplicación **Gestión de Facturas**, desarrollado con **Node.js y Express**. Permite la creación, consulta y simulación de pago de facturas, almacenando la información en memoria y proporcionando un historial de notificaciones.

## 🚀 Características principales  
✅ API REST para gestionar facturas (crear, obtener y pagar).  
✅ Simulación de una pasarela de pagos con un **ID de transacción**.  
✅ Almacenamiento temporal de datos en memoria.  
✅ Sistema de notificaciones con historial de pagos.  
✅ CORS habilitado para permitir el acceso desde el frontend.  

---

## 🛠 Tecnologías utilizadas  
- 🌐 **Backend:** Node.js + Express  
- 🔄 **CORS:** Para permitir peticiones del frontend  
- 📡 **API REST:** Métodos HTTP para gestionar facturas y pagos  

---

## 📂 Instalación y Configuración  

### 1️⃣ **Clonar el repositorio**  
```bash
git clone https://github.com/MLxFernando/backend_factura.git
cd frontend_factura
```

## Instalar dependencias
```bash
npm install
```
## Ejecutar el proyecto
```bash
npm run start
```

## 🔌 Endpoints de la API  

### 📌 1️⃣ **Crear una factura**  
**Método:** `POST`  
**URL:** `/crear/factura`  
**Descripción:** Crea una nueva factura con los datos proporcionados.  

📌 **Body JSON:**  
```json
{
  "cliente": "Fernando",
  "monto": 200,
  "descripcion": "Pago de Arriendo"
}
```

### 📌 2️⃣ **Obtener todas las facturas**
**Método:** `GET`
**URL:** `/facturas`
**Descripción:** Obtiene la lista de todas las facturas registradas.

### 📌 3️⃣ **Pagar una factura**
**Método:** `POST`
**URL:** `/facturas/pagar/:id`
**Descripción:** Simula el pago de una factura cambiando su estado a "Pagada" y generando un ID de transacción.
📌 **Body JSON:**  
```json
{
  {
    "metodo_pago": "Tarjeta de Crédito"
  }
}
```


### 📌 4️⃣ **Obtener notificaciones de pago**
**Método:** `GET`
**URL:** `/notificaciones`
**Descripción:** Obtiene el historial de notificaciones de pagos realizados.

