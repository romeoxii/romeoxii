export const projects = [
	{
		name: 'Nucleus',
		slug: 'nucleus',
		desc: 'An AI workspace platform that helps individuals and teams access, manage, and collaborate with multiple AI tools through a single unified dashboard.',
		longDesc:
			'Nucleus brings multiple AI tools into a single unified dashboard, so individuals and teams can access, manage, and collaborate without juggling tabs and subscriptions. Built with Nuxt.js, TypeScript, and Tailwind CSS.',
		tags: ['Nuxt.js', 'Tailwind CSS', 'TypeScript'],
		color: 'blue',
		link: 'https://nucleus-ashy.vercel.app',
		repo: null,
		image: null
	},
	{
		name: 'AniTracker',
		slug: 'anitracker',
		desc: 'An anime watchlist website, to organize your favorite animes and get good recommendations of trending animes.',
		longDesc:
			'AniTracker is an anime watchlist app for organizing your favorites and discovering trending shows. Track what you are watching, plan what is next, and get recommendations. Built with Vue.js, Tailwind CSS, and Supabase for auth and data.',
		tags: ['Vue.js', 'Tailwind CSS', 'Supabase'],
		color: 'yellow',
		link: 'https://ani-tracker-beta.vercel.app',
		repo: null,
		image: null
	},

	{
		name: "Celine's Treats",
		slug: 'celines-treats',
		desc: 'Pastries e-commerce website.',
		longDesc:
			"An e-commerce website for Celine's Treats — browse the pastry menu, place orders, and manage products. Built with Vue.js, Tailwind CSS, and Supabase.",
		tags: ['Vue.js', 'Tailwind CSS', 'Supabase'],
		color: 'pink',
		link: 'https://celinestreatss.vercel.app',
		repo: null,
		image: null
	},

	{
		name: 'ApexPanel',
		slug: 'apexpanel',
		desc: 'ApexPanel is a fullstack admin dashboard application designed to be a secure, centralized control panel for managing users, products, and system access.',
		longDesc:
			'ApexPanel is a full-stack admin dashboard: a secure, centralized control panel for managing users, products, and system access. Built with Vue.js, Tailwind CSS, Node.js, and Express.js.',
		tags: ['Vue.js', 'Tailwind CSS', 'Node.js', 'Express.js'],
		color: 'mint',
		link: 'https://apex-panel.vercel.app',
		repo: null,
		image: null
	},

	{
		name: 'FetchFlow',
		slug: 'fetchflow',
		desc: 'A batch file & folder downloader with a FastAPI backend and React frontend — built as a learning project while studying Python, HTTP requests, file handling, and full-stack development.',
		longDesc: `FetchFlow is a batch file & folder downloader with a FastAPI backend and React frontend.

Current Features:
- Direct file downloads — paste any HTTP/HTTPS file URL
- Folder batch downloads — paste an Alist-compatible folder URL and every file inside is queued automatically
- Streaming downloads — files are written chunk-by-chunk, so large files stay light on memory
- Live progress — speed, percentage, and time remaining update in real time for every active download
- Resume support — interrupted downloads continue via Range requests when the server allows it
- Cancel & retry — stop a running download or retry a failed one without re-adding it
- Duplicate detection — skips files that already exist locally
- Queue view — active downloads show as full cards, pending files stack in a scrollable queue, finished ones collapse into a history section`,
		tags: ['Python', 'FastAPI', 'React', 'TypeScript', 'Tailwind CSS'],
		color: 'blue',
		link: null,
		repo: 'https://github.com/romeoxii/fetchflow',
		image: null
	},

	{
		name: 'Hedraios',
		slug: 'hedraios',
		desc: 'An offline-first daily faith journal with timestamped notes, prayer tracking, and scripture logging in one calm place. Everything saves instantly on-device and syncs to Supabase when online.',
		longDesc: `Hedraios is an offline-first daily faith journal — timestamped notes, prayer tracking, and scripture logging in one calm place. Everything saves instantly on-device and syncs to Supabase backend when online. Built with React and Supabase for real-time sync across devices.`,
		tags: ['React', 'Supabase', 'TypeScript', 'Tailwind CSS', 'PWA'],
		color: 'purple',
		link: 'https://hedraios.vercel.app',
		repo: 'https://github.com/romeoxii/hedraios',
		image: null
	}
];