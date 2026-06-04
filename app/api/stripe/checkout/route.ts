import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { COURSES } from "@/lib/courses-data";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-04-22.dahlia",
});

export async function POST(req: NextRequest) {
  try {
    const { courseId, courseSlug } = await req.json();

    const course = COURSES.find((c) => c.id === courseId);
    if (!course) {
      return NextResponse.json({ error: "Curso no encontrado" }, { status: 404 });
    }

    const origin = req.headers.get("origin") || "http://localhost:3002";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      locale: "es",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: course.title,
              description: course.subtitle,
              metadata: { courseId: course.id, courseSlug },
            },
            unit_amount: course.price * 100,
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/academia/${courseSlug}?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/academia?canceled=true`,
      metadata: {
        courseId: course.id,
        courseSlug,
        instructor: course.instructor,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: "Error al crear sesión de pago" }, { status: 500 });
  }
}
