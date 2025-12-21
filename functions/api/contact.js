export async function onRequestPost(context) {
    const { request, env } = context;

    try {
        const { name, email, message } = await request.json();

        // Validate
        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: 'All fields required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Send email using Resend API directly
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${env.RESEND_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'Portfolio Contact <onboarding@resend.dev>', // Change to your verified domain
                to: 'noahhett@gmail.com',
                subject: `Portfolio Contact from ${name}`,
                html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
                reply_to: email
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Resend error:', data);
            return new Response(JSON.stringify({ error: 'Failed to send email' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        return new Response(JSON.stringify({ success: true, id: data.id }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('Error:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}