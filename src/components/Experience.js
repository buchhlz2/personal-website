import React from 'react'

const Experience = (props) => {
	return (
		<div className='container-fluid'>
			<div className='row align-items-center mt-4'>
				<div className='col-lg-10 mx-auto experience-lg-show'>
					<div className='row'>
						<div className='col-lg-6 timeline-item-left timeline-vertical-border'>
							<div className='row'>
								<div className='col-10 pe-0'>
									<div className='d-flex justify-content-end'>
										<div className='card timeline-card'>
											<div className='card-body'>
												<h5 className='timeline-card-title'>Solutions Engineer</h5>
												<p className='card-text'>
													<small>FourKites, Inc.</small>
													<br />
													<small>
														<i>Apr. 2017 - Jan. 2021</i>
													</small>
												</p>

												<ul className='mb-0'>
													<li>Technical lead for pre-sales engagements</li>
													<li>
														Managed integrations, ran POCs, and led cross-functional efforts to ensure client success
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className='col-2 mx-0 px-0 mt-5'>
									<hr className='timeline-horizontal' />
								</div>
							</div>
							<div className='row mt-3'>
								<div className='col-10 pe-0'>
									<div className='d-flex justify-content-end'>
										<div className='card timeline-card'>
											<div className='card-body'>
												<h5 className='timeline-card-title'>Consultant</h5>
												<p className='card-text'>
													<small>Hitachi Consulting</small>
													<br />
													<small>Sept. 2015 - Oct. 2016</small>
												</p>

												<ul className='mb-0'>
													<li>Created IoT strategy for a Fortune 50 automotive manufacturer</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className='col-2 mx-0 px-0 mt-5'>
									<hr className='timeline-horizontal' />
								</div>
							</div>
						</div>

						<div className='col-lg-6 timeline-item-right'>
							<div className='row'>
								<div className='col-2 mx-0 px-0 mt-2'>
									<hr className='timeline-horizontal' />
								</div>
								<div className='col-10 ps-0'>
									<div className='d-flex justify-content-start'>
										<div className='card timeline-card'>
											<div className='card-body'>
												<h5 className='timeline-card-title'>TBD</h5>
												<p className='card-text'>
													<small>TBD</small>
													<br />
													<small>
														<i>Current</i>
													</small>
												</p>

												<ul className='mb-0'>
													<li>
														Open to opportunities across any of the interests mentioned in the{' '}
														<a href='#/about'> about</a> page where my <a href='#/skillset'> skillset</a> applies
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='row mt-3'>
								<div className='col-2 mx-0 px-0 mt-5'>
									<hr className='timeline-horizontal' />
								</div>
								<div className='col-10 ps-0'>
									<div className='d-flex justify-content-start'>
										<div className='card timeline-card'>
											<div className='card-body'>
												<h5 className='timeline-card-title'>Operations</h5>
												<p className='card-text'>
													<small>FourKites, Inc.</small>
													<br />
													<small>
														<i>Nov. 2016 - Mar. 2017</i>
													</small>
												</p>

												<ul className='mb-0'>
													<li>Began as Ops Assoc.; promoted to Ops Trainer / Mgr.</li>
													<li>Onboarded new client integrations & acted as initial line of support</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='col-lg-10 mx-auto experience-lg-hide justify-content-center'>
					<div className='row pb-3'>
						<div className='col-10 mx-auto'>
							<div className='card timeline-card'>
								<div className='card-body'>
									<h5 className='timeline-card-title'>TBD</h5>
									<p className='card-text'>
										<small>TBD</small>
										<br />
										<small>
											<i>Current</i>
										</small>
									</p>

									<ul>
										<li>
											Open to opportunities across any of the interests mentioned in the <a href='#/about'> about</a>{' '}
											page where my <a href='#/skillset'> skillset</a> applies
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='row pb-3'>
						<div className='col-10 mx-auto'>
							<div className='card timeline-card'>
								<div className='card-body'>
									<h5 className='timeline-card-title'>Solutions Engineer</h5>
									<p className='card-text'>
										<small>FourKites, Inc.</small>
										<br />
										<small>
											<i>Apr. 2017 - Jan. 2021</i>
										</small>
									</p>

									<ul>
										<li>Technical lead for pre-sales engagements</li>
										<li>Managed integrations, ran POCs, and led cross-functional efforts to ensure client success</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='row pb-3'>
						<div className='col-10 mx-auto'>
							<div className='card timeline-card'>
								<div className='card-body'>
									<h5 className='timeline-card-title'>Operations</h5>
									<p className='card-text'>
										<small>FourKites, Inc.</small>
										<br />
										<small>
											<i>Nov. 2016 - Mar. 2017</i>
										</small>
									</p>

									<ul>
										<li>Began as Ops Assoc.; promoted to Ops Trainer / Mgr.</li>
										<li>Onboarded new client integrations & acted as initial line of support</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='row pb-3'>
						<div className='col-10 mx-auto'>
							<div className='card timeline-card'>
								<div className='card-body'>
									<h5 className='timeline-card-title'>Consultant</h5>
									<p className='card-text'>
										<small>Hitachi Consulting</small>
										<br />
										<small>Sept. 2015 - Oct. 2016</small>
									</p>

									<ul>
										<li>Created IoT strategy for a Fortune 50 automotive manufacturer</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Experience
