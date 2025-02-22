<script lang="ts">
	import { imask } from 'svelte-imask';
	import { fade } from 'svelte/transition';
	const maskConfig = { mask: '(000) 000-0000' };

	let formData = $state({
		name: '',
		email: '',
		phone: '',
		message: ''
	});

	let status = $state({
		sending: false,
		success: false,
		error: null as string | null
	});

	let formIsValid = $state(false);
	let errors = $state({
		name: '',
		email: '',
		phone: '',
		message: ''
	});

	async function handleSubmit(e: SubmitEvent) {
		const emailTest = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,6}$/;

		if (formData.name.length < 2) {
			formIsValid = false;
			errors.name = 'Please enter your name.';
		} else {
			errors.name = '';
		}

		if (emailTest.test(formData.email) === false) {
			formIsValid = false;
			errors.email = 'Please enter a valid email address.';
		} else {
			errors.email = '';
		}

		if (formData.message.length < 3) {
			formIsValid = false;
			errors.message = 'Please tell us how we can help you.';
		} else {
			errors.message = '';
		}

		if (formData.phone.length < 10) {
			formIsValid = false;
			errors.phone = 'Please enter a valid phone number.';
		} else {
			errors.phone = '';
		}

		e.preventDefault();

		if (!formIsValid) {
			return;
		}

		status.sending = true;
		status.error = null;

		try {
			const response = await fetch('/contact', {
				method: 'POST',
				body: JSON.stringify(formData),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			const result = await response.json();

			if (result.success) {
				status.success = true;
				formData = { name: '', email: '', phone: '', message: '' };
			} else {
				status.error = result.error || 'Failed to send message';
			}
		} catch (error) {
			status.error = 'Failed to send message';
		} finally {
			status.sending = false;
		}
	}

	function handleInput(field: keyof typeof formData) {
		errors[field] = '';
		formIsValid = true;
	}
</script>

<svelte:head>
	<meta
		name="description"
		content="Contact our mobile phlebotomy team for questions or to learn more about our services. We're here to help with your blood drawing needs."
	/>
</svelte:head>

<h1 class="pageTitle">Contact Us</h1>

<div class="contentContainer">
	<div class="contactForm">
		<h2>Do you have any questions?</h2>
		<p>
			Please fill out the form below and we will get back to you as soon as possible (all fields are
			required).
		</p>

		{#if status.success}
			<div class="success">Thank you for your message! We'll get back to you soon.</div>
		{:else}
			<form class="contactForm" onsubmit={handleSubmit}>
				<div class="formGroup">
					<label for="name">Name:</label>
					<input
						type="text"
						id="name"
						bind:value={formData.name}
						oninput={() => handleInput('name')}
					/>
					{#if errors.name}
						<div class="error" transition:fade>{errors.name}</div>
					{/if}
				</div>
				<div class="formGroup">
					<label for="email">Email:</label>
					<input
						type="text"
						id="email"
						bind:value={formData.email}
						oninput={() => handleInput('email')}
					/>
					{#if errors.email}
						<div class="error" transition:fade>{errors.email}</div>
					{/if}
				</div>
				<div class="formGroup">
					<label for="phone">Phone:</label>
					<input
						use:imask={maskConfig}
						type="tel"
						id="phone"
						bind:value={formData.phone}
						oninput={() => handleInput('phone')}
					/>
					{#if errors.phone}
						<div class="error" transition:fade>{errors.phone}</div>
					{/if}
				</div>
				<div class="formGroup">
					<label for="message">Message:</label>
					<textarea
						id="message"
						bind:value={formData.message}
						oninput={() => handleInput('message')}
					></textarea>
					{#if errors.message}
						<div class="error" transition:fade>{errors.message}</div>
					{/if}
				</div>
				<button type="submit" disabled={status.sending}>
					{status.sending ? 'Sending...' : 'Submit'}
				</button>
				{#if status.error}
					<div class="error" transition:fade>{status.error}</div>
				{/if}
			</form>
		{/if}
	</div>
</div>

<style>
	h2 {
		font-size: 2rem;
		margin-bottom: 0.25rem;
	}

	p {
		font-size: 1.25rem;
		margin: 0.25rem 0 1rem;
	}

	.contactForm {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
		max-width: 600px;
		margin: 0 auto;
	}

	.formGroup {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	input,
	textarea {
		padding: 0.5rem;
		border-radius: 5px;
		border: none;
	}
	textarea {
		min-height: 150px;
	}

	.success {
		padding: 1rem;
		background-color: #d4edda;
		color: #155724;
		border-radius: 5px;
		text-align: center;
	}

	.error {
		padding: 1rem;
		background-color: #f8d7da;
		color: #721c24;
		border-radius: 5px;
		text-align: center;
	}

	button:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}
</style>
