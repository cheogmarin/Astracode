import express from "express";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();
app.use(express.json());

// Security Headers Middleware
app.use((req, res, next) => {
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://images.unsplash.com https://picsum.photos https://i.ibb.co; connect-src 'self' https://www.google-analytics.com;");
  next();
});

// API routes
app.post("/api/contact", async (req, res) => {
  const { name, email, projectTitle, message, handlesSensitiveData } = req.body;

  if (!name || !email || !projectTitle || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const prioritySecurity = handlesSensitiveData === 'si';

  try {
    if (process.env.RESEND_API_KEY) {
      const { data, error } = await resend.emails.send({
        from: "Astra Code <onboarding@resend.dev>",
        to: ["josegmarin2012@gmail.com"],
        subject: `${prioritySecurity ? '⚠️ PRIORIDAD SEGURIDAD: ' : ''}Nuevo Proyecto: ${projectTitle}`,
        html: `
          <div style="font-family: sans-serif; color: #0A192F; padding: 20px;">
            <h2 style="color: #64FFDA; border-bottom: 1px solid #eee; padding-bottom: 10px;">Nuevo Lead de Astra Code</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Proyecto:</strong> ${projectTitle}</p>
            <p><strong>Maneja Datos Sensibles/Pagos:</strong> ${handlesSensitiveData === 'si' ? 'SÍ (Priorizar Seguridad)' : 'No'}</p>
            <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 5px;">
              <p><strong>Mensaje:</strong></p>
              <p>${message}</p>
            </div>
            ${prioritySecurity ? `
              <div style="margin-top: 20px; padding: 15px; background: #FFF5F5; border: 1px solid #FEB2B2; border-radius: 5px; color: #C53030;">
                <strong>NOTA ESTRATÉGICA:</strong> Este cliente requiere una Auditoría de Seguridad como prioridad absoluta en la propuesta.
              </div>
            ` : ''}
          </div>
        `,
      });

      if (error) {
        console.error("Resend Error:", error);
        return res.status(500).json({ error: "Failed to send email" });
      }

      res.json({ success: true, data });
    } else {
      res.json({ success: true, message: "Demo mode: Email triggered (see server logs)" });
    }
  } catch (err) {
    console.error("Server Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/report-request", async (req, res) => {
  const { name, email, url } = req.body;

  if (!name || !email || !url) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    if (process.env.RESEND_API_KEY) {
      const { data, error } = await resend.emails.send({
        from: "Astra Code <onboarding@resend.dev>",
        to: ["josegmarin2012@gmail.com"],
        subject: `SOLICITUD DE REPORTE: ${url}`,
        html: `
          <div style="font-family: sans-serif; color: #0A192F; padding: 20px;">
            <h2 style="color: #64FFDA; border-bottom: 1px solid #eee; padding-bottom: 10px;">Nueva Solicitud de Reporte Astra</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>URL de Plataforma:</strong> <a href="${url}">${url}</a></p>
            <div style="margin-top: 20px; padding: 15px; background: #E6FFFA; border: 1px solid #B2F5EA; border-radius: 5px; color: #2C7A7B;">
              <strong>ACCION RECOMENDADA:</strong> Enviar el PDF de muestra y agendar una llamada de auditoría gratuita.
            </div>
          </div>
        `,
      });

      if (error) {
        console.error("Resend Error:", error);
        return res.status(500).json({ error: "Failed to send email" });
      }

      res.json({ success: true, data });
    } else {
      res.json({ success: true, message: "Demo mode: Report request triggered" });
    }
  } catch (err) {
    console.error("Server Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export { app };
