<script>
	const closeAll = () => {
		const inputs = document.querySelectorAll('input');
		inputs.forEach((input) => {
			input.checked = false;
		});
	};
</script>

<h1 class="pageTitle">Frequently Asked Questions</h1>

<div class="contentContainer">
	<div class="faqContainer">
		<input type="checkbox" id="faq1" />
		<label for="faq1">What is a phlebotomy service?</label>
		<div class="faqAnswer">
			<p>
				A phlebotomy service involves the collection of blood samples for medical testing,
				donations, or research. A trained phlebotomist draws blood from patients in a safe and
				professional manner. Our in-home phlebotomy service provides a convenient way to have your
				blood drawn from the comfort of your home, avoiding long waits at labs or clinics.
			</p>
		</div>
	</div>

	<div class="faqContainer">
		<input type="checkbox" id="faq2" />
		<label for="faq2">How long does a typical appointment take?</label>
		<div class="faqAnswer">
			<p>
				A typical appointment takes about 15 to 30 minutes. This includes time for verifying your
				information, preparing for the blood draw, collecting the sample, and ensuring you’re
				comfortable before we leave. The actual blood draw usually takes just a few minutes.
			</p>
		</div>
	</div>

	<div class="faqContainer">
		<input type="checkbox" id="faq3" />
		<label for="faq3">Do you accept insurance?</label>
		<div class="faqAnswer">
			<p>
				We do not accept insurance for the blood draw itself. However, the lab processing your
				samples may accept insurance for the testing. We recommend checking with your insurance
				provider and the lab to confirm coverage for your specific tests.
			</p>
		</div>
	</div>

	<div class="faqContainer">
		<input type="checkbox" id="faq4" />
		<label for="faq4">What areas do you serve?</label>
		<div class="faqAnswer">
			<p>
				We serve the greater Tampa Bay area and surrounding suburbs. If you’re unsure whether we
				cover your location, feel free to contact us!
			</p>
		</div>
	</div>

	<div class="faqContainer">
		<input type="checkbox" id="faq5" />
		<label for="faq5">What should I do to prepare?</label>
		<div class="faqAnswer">
			<p>
				Preparation depends on the type of test your doctor has ordered. Here are some general
				guidelines:
			</p>
			<ul>
				<li>
					<strong>Fasting Tests:</strong> If your test requires fasting, avoid eating or drinking anything
					except water for 8–12 hours before your appointment.
				</li>
				<li>
					<strong>Stay Hydrated:</strong> Drink plenty of water to make your veins easier to access.
				</li>
				<li>
					<strong>Wear Loose Clothing:</strong> A short-sleeve shirt or one with sleeves that can be
					rolled up will make the process smoother.
				</li>
				<li>
					<strong>Have Your Lab Order Ready:</strong> If your doctor provided a lab requisition form,
					have it available.
				</li>
				<li>
					<strong>Avoid Caffeine & Strenuous Exercise:</strong> If required for your test, avoid these
					before your draw.
				</li>
			</ul>
			<p>
				If you have any specific instructions from your doctor, be sure to follow them. Feel free to
				contact us with any questions!
			</p>
		</div>
	</div>

	<div class="faqContainer">
		<input type="checkbox" id="faq6" />
		<label for="faq6">Are your phlebotomists certified?</label>
		<div class="faqAnswer">
			<p>
				Yes! I am a certified professional with extensive experience in safely and efficiently
				drawing blood. We follow strict safety and hygiene protocols to ensure a comfortable and
				stress-free experience for every patient.
			</p>
		</div>
	</div>

	<div class="faqContainer">
		<input type="checkbox" id="faq7" />
		<label for="faq7">What payment methods do you accept?</label>
		<div class="faqAnswer">
			<p>We accept the following payment methods:</p>
			<ul>
				<li>Credit and Debit Cards (Visa, MasterCard, American Express, Discover)</li>
				<li>Cash</li>
			</ul>
			<p>If you have any other payment inquiries, feel free to contact us!</p>
		</div>
	</div>

	<div class="faqContainer">
		<input type="checkbox" id="faq8" />
		<label for="faq8">How quickly will I receive my results?</label>
		<div class="faqAnswer">
			<p>
				The timing for receiving your results depends on the lab processing your samples and your
				doctor’s office. Typically, results are available within 2–7 business days, but this can
				vary based on the type of test and the lab’s processing times. We recommend checking with
				your doctor or the lab for a more specific timeframe.
			</p>
		</div>
	</div>

	<div class="faqContainer">
		<input type="checkbox" id="faq9" />
		<label for="faq9">Do you offer weekend appointments?</label>
		<div class="faqAnswer">
			<p>
				Yes, we do offer Saturday appointments! We understand that weekdays can be busy, so we’re
				happy to accommodate you on Saturdays. Please contact us to directly to schedule a time that
				works best for you.
			</p>
		</div>
	</div>

	<div class="faqContainer">
		<input type="checkbox" id="faq10" />
		<label for="faq10">What if I need to cancel my appointment?</label>
		<div class="faqAnswer">
			<p>
				If you need to cancel your appointment, please let us know as soon as possible. We kindly
				ask for at least 24 hours’ notice to avoid any cancellation fees. You can reach us by phone
				or email to reschedule or cancel your appointment.
			</p>
		</div>
	</div>
	<div class="buttonContainer">
		<button on:click={closeAll} class="closeAll">Close All</button>
	</div>
</div>

<style>
	.faqContainer {
		margin-bottom: 1rem;
	}

	label {
		display: block;
		padding: 1rem;
		border-radius: 4px;
		cursor: pointer;
		font-weight: 500;
		position: relative;
		transition: background 300ms ease;
		&::after {
			content: '+';
			position: absolute;
			right: 1rem;
			font-size: 1.2rem;
			color: #777;
			transition: rotate 300ms ease;
		}
	}

	label:hover {
		background: #ebebeb;
	}

	input {
		display: none;
	}

	.faqAnswer {
		transition-behavior: allow-discrete;
		height: 0;
		overflow: clip;
		transition: height 300ms ease;
		background: #f9f9f9;
		padding: 0 1rem;
	}

	input:checked ~ .faqAnswer {
		height: fit-content;
		padding: 1rem;
		transition: height 300ms ease;
	}

	input:checked ~ label::after {
		rotate: 45deg;
	}

	.faqAnswer p {
		margin: 0;
		line-height: 1.6;
	}
	.buttonContainer {
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}
	li {
		line-height: 1.5;
		margin-bottom: 0.5rem;
	}
</style>
