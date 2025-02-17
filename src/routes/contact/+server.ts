import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import type { RequestHandler } from './$types';
import type { Options } from 'nodemailer/lib/smtp-transport';
import { env } from '$env/dynamic/private';

const transporter = nodemailer.createTransport({
	host: env.MAIL_HOST,
	port: Number(env.MAIL_PORT),
	secure: false,
	auth: {
		user: env.GOOGLE_EMAIL,
		pass: env.GOOGLE_EMAIL_PASSWORD
	}
} as Options);

export const POST: RequestHandler = async ({ request }) => {
	const { name, email, phone, message } = await request.json();

	try {
		await transporter.sendMail({
			from: {
				name: '<-- Web Inquiry -->',
				address: env.GOOGLE_EMAIL
			},
			to: 'mike@bigbearded.dev',
			subject: `New Contact Form Submission from ${name}`,
			html: `
				<h2>New Contact Form Submission</h2>
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Phone:</strong> ${phone}</p>
				<p><strong>Message:</strong> ${message}</p>
			`
		});

		return json({ success: true });
	} catch (error) {
		console.error('Email error:', error);
		return json({ success: false, error: 'Failed to send email' }, { status: 500 });
	}
};
