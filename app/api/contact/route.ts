import { NextRequest, NextResponse } from "next/server";

// GoHighLevel webhook URL — add to .env.local:
// GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/YOUR_WEBHOOK_ID/webhook-trigger/YOUR_KEY

type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  department: string;
  service: string;
  message: string;
};

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();
    const { name, phone, email, department, service, message } = body;

    if (!name?.trim() || !phone?.trim() || !department?.trim()) {
      return NextResponse.json({ error: "Campos requeridos faltantes" }, { status: 400 });
    }

    const ghlWebhookUrl = process.env.GHL_WEBHOOK_URL;

    if (ghlWebhookUrl) {
      // Send to GoHighLevel CRM
      const ghlPayload = {
        firstName: name.split(" ")[0] || name,
        lastName: name.split(" ").slice(1).join(" ") || "",
        phone,
        email: email || "",
        tags: ["master-tax-web", department],
        customField: {
          departamento: department,
          servicio: service || "Sin especificar",
          mensaje: message || "",
          fuente: "Website Master Tax",
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
      // Log locally when GHL URL not configured
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
