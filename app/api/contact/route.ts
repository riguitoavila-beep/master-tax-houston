import { NextRequest, NextResponse } from "next/server";
import { sanitizeInput, sanitizeEmail, sanitizePhone } from "@/lib/sanitize";

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

    const ghlWebhookUrl = process.env.GHL_WEBHOOK_URL;

    if (ghlWebhookUrl) {
      const ghlPayload = {
        firstName: name.split(" ")[0] || name,
        lastName:  name.split(" ").slice(1).join(" ") || "",
        phone,
        email,
        tags: ["master-tax-web", department],
        customField: {
          departamento: department,
          servicio:     service || "Sin especificar",
          mensaje:      message || "",
          fuente:       "Website Master Tax",
        },
      };

      const ghlRes = await fetch(ghlWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ghlPayload),
      });

      if (!ghlRes.ok) {
        console.error("GHL webhook error:", ghlRes.status, await ghlRes.text());
      }
    } else {
      console.log("Contact form submission (GHL_WEBHOOK_URL not set):", {
        name, phone, email, department, service, message,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
