if (!PRERENDER) {
	const ga = (window.ga =
		window.ga || ((...args) => (ga.q = ga.q || []).push(args)));

	ga('create', 'UA-6031694-20', 'auto');
	ga('set', 'transport', 'beacon');
	ga('send', 'pageview');
}
