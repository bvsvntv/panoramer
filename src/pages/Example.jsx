import Layout from '../components/Layout';

const Example = () => {
	const images = [
		{ path: '/examples/1.JPG', name: 'Image One' },
		{ path: '/examples/2.JPG', name: 'Image Two' },
		{ path: '/examples/3.JPG', name: 'Image Three' },
		{ path: '/examples/4.JPG', name: 'Image Four' },
		{ path: '/examples/5.JPG', name: 'Image Five' },
		{ path: '/examples/6.JPG', name: 'Image Six' },
		{ path: '/examples/7.JPG', name: 'Image Seven' },
		{ path: '/examples/8.JPG', name: 'Image Eight' },
		{ path: '/examples/9.JPG', name: 'Image Nine' },
		{ path: '/examples/10.JPG', name: 'Image Ten' }
	];
	return (
		<Layout>
			<div className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
				<section aria-labelledby="products-heading" className="pb-24 pt-6">
					<div className="mx-auto max-w-xl text-center">
						<h2 className="text-2xl font-semibold leading-tight text-white md:text-3xl md:leading-tight lg:text-[36px] lg:leading-tight lg:tracking-tight">
							Examples
						</h2>
					</div>

					<div className="mt-16 grid">
						<div>
							<img
								className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
								src="/examples/panorama.png"
								alt=""
							/>
						</div>

						<div className="mt-10 grid grid-cols-8 gap-2">
							{images.map((image) => (
								<div key={image.name}>
									<img
										src={image.path}
										className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
										alt="gallery-image"
									/>
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
};

export default Example;
