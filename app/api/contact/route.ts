import { NextRequest, NextResponse } from "next/server";
import { sanitizeInput, sanitizeEmail, sanitizePhone } from "@/lib/sanitize";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const name       = sanitizeInput(body.name, 120);
    const phone      = sanitizePhone(body.phone);
    const email      = sanitizeEmail(body.email);
    const department = sanitizeInput(body.department, 60);
    const service    = sanitizeInput(body.service, 120);
    const message    = sanitizeInput(body.message, 1000);

    if (!name || !phone || !department) {
      return NextResponse.json({ error: "Campos requeridos faltantes" }, { status: 400 });
    }

    const DEPT_LABELS: Record<string, string> = {
      "impuestos-finanzas":    "Impuestos y Finanzas",
      "formas-migratorias":    "Formas Migratorias",
      "aseguradoras":          "Aseguradoras",
      "credito-financiamiento":"Crédito y Financiamiento",
      "general":               "General",
    };

    const deptLabel = DEPT_LABELS[department] || department;

    // Send email via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: "Master Tax Website <onboarding@resend.dev>",
        to:   "martinez@mastertaxnotary.com",
        subject: `Nueva solicitud de ${name} — ${deptLabel}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f8fafc;border-radius:12px;">
            <div style="background:#0033CC;padding:20px 24px;border-radius:8px 8px 0 0;">
              <h1 style="color:white;margin:0;font-size:20px;">Nueva Solicitud de Contacto</h1>
              <p style="color:rgba(255,255,255,0.7);margin:4px 0 0;font-size:13px;">mastertaxnotary.com</p>
            </div>
            <div style="background:white;padding:24px;border-radius:0 0 8px 8px;border:1px solid #e2e8f0;border-top:none;">
              <table style="width:100%;border-collapse:collapse;">
                <tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;width:140px;">Nombre</td><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-weight:600;color:#0f172a;">${name}</td></tr>
                <tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;">Teléfono</td><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-weight:600;color:#0f172a;"><a href="tel:${phone}" style="color:#0033CC;">${phone}</a></td></tr>
                ${email ? `<tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;">Email</td><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-weight:600;color:#0f172a;">${email}</td></tr>` : ""}
                <tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;">Departamento</td><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;"><span style="background:#eff6ff;color:#0033CC;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:700;">${deptLabel}</span></td></tr>
                ${service ? `<tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;">Servicio</td><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-weight:600;color:#0f172a;">${service}</td></tr>` : ""}
                ${message ? `<tr><td style="padding:10px 0;color:#64748b;font-size:13px;vertical-align:top;">Mensaje</td><td style="padding:10px 0;color:#334155;">${message}</td></tr>` : ""}
              </table>
              <div style="margin-top:20px;padding:16px;background:#f8fafc;border-radius:8px;font-size:12px;color:#94a3b8;">
                Enviado el ${new Date().toLocaleString("es-US", { timeZone: "America/Chicago", dateStyle: "full", timeStyle: "short" })} (Houston, TX)
              </div>
            </div>
          </div>
        `,
      });
    }

    // Also forward to GHL if configured
    const ghlWebhookUrl = process.env.GHL_WEBHOOK_URL;
    if (ghlWebhookUrl) {
      await fetch(ghlWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: name.split(" ")[0] || name,
          lastName:  name.split(" ").slice(1).join(" ") || "",
          phone, email,
          tags: ["master-tax-web", department],
          customField: { departamento: deptLabel, servicio: service || "Sin especificar", mensaje: message || "" },
        }),
      }).catch(() => null);
    }

    if (!resendKey && !ghlWebhookUrl) {
      console.log("Contact submission (no email service configured):", { name, phone, email, department, service, message });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
