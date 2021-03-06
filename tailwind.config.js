module.exports = {
	purge: [
		'./assets/src/scripts/**/*.js',
		'./views/**/*.php',
		'./page-templates/**/*.php',
		'./inc/**/*.php',
		'./404.php',
		'./archive.php',
		'./comments.php',
		'./footer.php',
		'./functions.php',
		'./header.php',
		'./index.php',
		'./page.php',
		'./search.php',
		'./searchform.php',
		'./sidebar.php',
		'./single.php',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [ require( '@tailwindcss/aspect-ratio' ) ],
};
