const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let facturas = []; // Almacén temporal en memoria
let notificaciones = []; // Historial de notificaciones

// 📌 1. Ruta para crear una factura
app.post("/crear/factura", (req, res) => {
  const { cliente, monto, descripcion } = req.body;
  const nuevaFactura = {
    id: facturas.length + 1,
    cliente,
    monto,
    descripcion,
    estado: "Pendiente",
    transaccionId: null, // Se llenará al pagar
  };

  facturas.push(nuevaFactura);
  res.status(201).json(nuevaFactura);
});

// 📌 2. Ruta para obtener todas las facturas
app.get("/facturas", (req, res) => {
  res.json(facturas);
});

// 📌 3. Ruta para pagar una factura (simulación de pasarela de pago)
app.post("/facturas/pagar/:id", async (req, res) => {
  const facturaId = parseInt(req.params.id);
  const factura = facturas.find((f) => f.id === facturaId);

  if (!factura) {
    return res.status(404).json({ mensaje: "Factura no encontrada" });
  }

  if (factura.estado === "Pagada") {
    return res.status(400).json({ mensaje: "Esta factura ya fue pagada" });
  }

  // Simulación de procesamiento de pago con retraso (3 segundos)
  setTimeout(() => {
    const transaccionId = `TXN-${Math.floor(Math.random() * 1000000)}`;
    factura.estado = "Pagada";
    factura.transaccionId = transaccionId;

    // Guardar notificación
    const mensajeNotificacion = `✅ Usuario ${factura.cliente} ha pagado la factura #${factura.id} con transacción ${transaccionId}.`;
    notificaciones.push(mensajeNotificacion);
    
    console.log(mensajeNotificacion); // Para verificar en la terminal

    res.json({ mensaje: "Pago realizado exitosamente", transaccionId, factura });
  }, 3000);
});

// 📌 4. Ruta para obtener notificaciones
app.get("/notificaciones", (req, res) => {
  res.json(notificaciones);
});

// 📌 Iniciar el servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
