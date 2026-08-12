<script setup>
const BIO = ``;
const skills = ['Vue,', 'Nuxt,', 'Tailwindcss,', 'TypeScript,', 'Python,', 'Supabase.'];
</script>

<template>
	<main class="w-full mx-auto max-w-3xl px-6 pb-35 pt-18">
		<h2 class="mb-5 text-3xl font-extrabold font-mono">// about</h2>

		<div
			class="max-w-160 overflow-hidden rounded-2xl border-2 border-(--border) bg-[#14142B] shadow-[4px_4px_0_var(--border)]"
		>
			<div class="flex gap-1.5 bg-black/15 px-3.5 py-2.5">
				<span class="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
				<span class="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
				<span class="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
			</div>
			<div class="px-5 py-5 text-sm leading-relaxed text-[#E6E6F5] font-mono">
				<div class="text-(--mint)">$ whoami</div>
				<div class="mb-3">Romeoxii</div>
				<div class="text-(--mint)">$ cat about.md</div>
				<div class="mb-3 text-sm">
					Software developer who likes small, sharp tools over big frameworks. Currently
					making things faster than they need to be and occasionally shipping them.
					<br />
					<br />
					An introvert by nature, web developer by passion. Eager to build things that
					speak louder than I do, using Vue.js , Tailwind CSS , and lately, Nuxt.js .
					<br />
					<br />
					Thinking of picking up Python for the backend of a project I'm working on. I'm
					not a big fan of Javascript for backend, didn't complete my ExpressJs project.
					<br />
					My happy place? A quiet dark room, all the gospel albums i can lay my hands on,
					and a UI that just feels right. I love clean design, smooth flows, and websites
					that don't need instructions. When I'm not writing code, I'm either watching a
					new anime, reading a manhwa, reading a book (just picked this up out of
					nowhere), or just enjoying some quiet time offline (sleeping) . Language, tools
					or frameworks I'm familiar with I don't really have a stack per say but maybe
					that'll be revealed when I dive deeper into ths niche or get more curious about
					how things work, but for now my go-to for front-end is Vuejs / Nuxtjs , Tailwind
					CSS and Supabase .
				</div>
				<div class="text-(--mint)">$ ls skills/</div>
				<div class="mt-1.5 flex flex-wrap gap-2">
					<span v-for="s in skills" :key="s" class="text-(--yellow)">{{ s }}</span>
				</div>
			</div>
		</div>

		<div class="mt-5 flex gap-4">
			<a
				href="https://github.com/romeoxii"
				target="_blank"
				class="text-[14px] text-(--ink) no-underline hover:underline flex items-end gap-1"
			>
				<span class="text-(--ink)">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1.5em"
						height="1.5em"
						viewBox="0 0 24 24"
					>
						<path d="M0 0h24v24H0z" fill="none" />
						<path
							fill="currentColor"
							d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.64 3.64 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2 2 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.1 2.1 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.9 3.9 0 0 1 1.025-2.688a3.6 3.6 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.43 9.43 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.6 3.6 0 0 1 .1 2.65a3.87 3.87 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.562 4.937a2.37 2.37 0 0 1 .674 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247"
						/>
					</svg>
				</span>
				github
			</a>
			<!-- <a
				href="#"
				class="text-[14px] text-(--ink) no-underline hover:underline flex items-end gap-1"
			>
				<span class="text-(--ink)">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1.5em"
						height="1.5em"
						viewBox="0 0 20 20"
					>
						<path d="M0 0h20v20H0z" fill="none" />
						<g fill="none">
							<path
								fill="currentColor"
								d="M6.5 12.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm0 2.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1z"
							/>
							<path
								fill="currentColor"
								fill-rule="evenodd"
								d="M11.185 1H4.5A1.5 1.5 0 0 0 3 2.5v15A1.5 1.5 0 0 0 4.5 19h11a1.5 1.5 0 0 0 1.5-1.5V7.202a1.5 1.5 0 0 0-.395-1.014l-4.314-4.702A1.5 1.5 0 0 0 11.185 1M4 2.5a.5.5 0 0 1 .5-.5h6.685a.5.5 0 0 1 .369.162l4.314 4.702a.5.5 0 0 1 .132.338V17.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5z"
								clip-rule="evenodd"
							/>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M11.5 2.1v4.7h4.7"
							/>
							<path
								fill="currentColor"
								d="M8.134 6.133a1.067 1.067 0 1 0 0-2.133a1.067 1.067 0 0 0 0 2.133"
							/>
							<path
								fill="currentColor"
								fill-rule="evenodd"
								d="M10.266 8.444c0-1.134-.955-1.955-2.133-1.955S6 7.309 6 8.444v.534a.356.356 0 0 0 .356.355h3.555a.356.356 0 0 0 .355-.355z"
								clip-rule="evenodd"
							/>
						</g>
					</svg>
				</span>
				resume
			</a> -->
		</div>
	</main>
</template>
