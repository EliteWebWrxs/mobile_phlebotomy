<h1 class="pageTitle">Contact Us</h1>

<div class="contentContainer">
	<div class="contactForm">
		<h2>Do you have any questions?</h2>
		<p>Please fill out the form below and we will get back to you as soon as possible.</p>
		<form class="contactForm">
			<div class="formGroup">
				<label for="name">Name:</label>
				<input type="text" id="name" name="name" />
			</div>
			<div class="formGroup">
				<label for="email">Email:</label>
				<input type="email" id="email" name="email" />
			</div>
			<div class="formGroup">
				<label for="phone">Phone:</label>
				<input type="tel" id="phone" name="phone" />
			</div>
			<div class="formGroup">
				<label for="message">Message:</label>
				<textarea id="message" name="message"></textarea>
			</div>
			<button type="submit">Submit</button>
		</form>
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
</style>
