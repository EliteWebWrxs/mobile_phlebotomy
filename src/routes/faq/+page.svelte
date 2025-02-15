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
	<button on:click={closeAll}>Close All</button>
	<div class="faqContainer">
		<input type="checkbox" id="faq1" />
		<label for="faq1">What is a phlebotomy service?</label>
		<div class="faqAnswer">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.
			</p>
		</div>
	</div>

	<div class="faqContainer">
		<input type="checkbox" id="faq2" />
		<label for="faq2">How long does a typical appointment take?</label>
		<div class="faqAnswer">
			<p>
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat.
			</p>
		</div>
	</div>

	<div class="faqContainer">
		<input type="checkbox" id="faq3" />
		<label for="faq3">Do you accept insurance?</label>
		<div class="faqAnswer">
			<p>
				Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur.
			</p>
		</div>
	</div>

	<div class="faqContainer">
		<input type="checkbox" id="faq4" />
		<label for="faq4">What areas do you serve?</label>
		<div class="faqAnswer">
			<p>
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
				anim id est laborum.
			</p>
		</div>
	</div>

	<div class="faqContainer">
		<input type="checkbox" id="faq5" />
		<label for="faq5">What should I do to prepare?</label>
		<div class="faqAnswer">
			<p>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
				laudantium.
			</p>
		</div>
	</div>

	<div class="faqContainer">
		<input type="checkbox" id="faq6" />
		<label for="faq6">Are your phlebotomists certified?</label>
		<div class="faqAnswer">
			<p>
				Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
				consequuntur magni.
			</p>
		</div>
	</div>

	<div class="faqContainer">
		<input type="checkbox" id="faq7" />
		<label for="faq7">What payment methods do you accept?</label>
		<div class="faqAnswer">
			<p>
				At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
				voluptatum.
			</p>
		</div>
	</div>

	<div class="faqContainer">
		<input type="checkbox" id="faq8" />
		<label for="faq8">How quickly will I receive my results?</label>
		<div class="faqAnswer">
			<p>
				Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
				quod maxime placeat.
			</p>
		</div>
	</div>

	<div class="faqContainer">
		<input type="checkbox" id="faq9" />
		<label for="faq9">Do you offer weekend appointments?</label>
		<div class="faqAnswer">
			<p>
				Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut
				et voluptates.
			</p>
		</div>
	</div>

	<div class="faqContainer">
		<input type="checkbox" id="faq10" />
		<label for="faq10">What if I need to cancel my appointment?</label>
		<div class="faqAnswer">
			<p>
				Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
				alias consequatur.
			</p>
		</div>
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
</style>
