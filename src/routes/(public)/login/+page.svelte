<script>
	export let form;
</script>

<div class="container">
	<div class="row flex-center min-vh-100 py-5">
		<div class="col-sm-10 col-md-8 col-lg-5 col-xl-5 col-xxl-3">
			<a class="d-flex flex-center text-decoration-none mb-4" href="../../../index.html">
				<div class="d-flex align-items-center fw-bolder fs-5 d-inline-block">
					<img src="../../../assets/img/icons/logo.png" alt="phoenix" width="58" />
				</div>
			</a>
			<div class="text-center mb-7">
				<h3 class="text-1000">Sign In</h3>
				<p class="text-700">Get access to your account</p>
			</div>
			<form method="post">
				<div class="mb-3 text-start">
					<label class="form-label" for="email">Email address</label>
					<div class="form-icon-container">
						<input
							class="form-control form-icon-input"
							id="email"
							type="email"
							placeholder="name@example.com"
						/><span class="fas fa-user text-900 fs--1 form-icon" />
					</div>
				</div>
				<div class="mb-3 text-start">
					<label class="form-label" for="password">Password</label>
					<div class="form-icon-container">
						<input
							class="form-control form-icon-input"
							id="password"
							type="password"
							placeholder="Password"
						/><span class="fas fa-key text-900 fs--1 form-icon" />
					</div>
				</div>
				<div class="row flex-between-center mb-7">
					<div class="col-auto">
						<!-- <div class="form-check mb-0">
							<input class="form-check-input" id="basic-checkbox" type="checkbox" checked />
							<label class="form-check-label mb-0" for="basic-checkbox">Remember me</label>
						</div> -->
					</div>
					<div class="col-auto">
						<a
							class="fs--1 fw-semi-bold"
							href="../../../pages/authentication/simple/forgot-password.html">Forgot Password?</a
						>
					</div>
				</div>
				<button class="btn btn-primary w-100 mb-3">Sign In</button>
			</form>

			<div class="text-center">
				<a class="fs--1 fw-bold" href="../../../pages/authentication/simple/sign-up.html"
					>Create an account</a
				>
			</div>
		</div>
	</div>
</div>
