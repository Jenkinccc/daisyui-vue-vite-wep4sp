<template>
	<div class="hero min-h-screen ">
		<div class="hero-content flex-col lg:flex-row-reverse">
			<div>
				<img src="/resource/portrait.webp" class="mask mask-squircle max-w-sm rounded-lg shadow-2xl" />
				<div v-for="(item, index) in SocialIcons" :key="index" class="flex items-center mt-6 ml-5">
					<svg class="iconpark-icon text-2xl">
						<use :href="item.Icon"></use>
					</svg>
					<span class="text-1xl ml-5">
						<span v-if="item.IDkey != '005'">Follow Jenkin on {{ item.Name }}</span>
						<span v-else>Send Mail to Jenkin</span>
					</span>
				</div>
			</div>
			<div>
				<h1 class="text-5xl font-bold">Jenkin</h1>
				<p class="py-6">Software designer, founder, and amateur astronaut.</p>
				<button class="btn btn-primary shadow-lg shadow-green-500/50">Get Started</button>
			</div>
		</div>
	</div>

	<section class="dark:bg-gray-500 dark:text-gray-100">
		<div class="container px-6 py-12 mx-auto">
			<div class="text-3xl font-bold flex">
				I create using these
				<div class="flex items-center">
					<img width="36" height="36" src="https://img.icons8.com/3d-fluency/36/flash-on.png"
						alt="flash-on" />Techniques
				</div>
				and
				<div class="flex items-center">
					<img width="36" height="36" src="https://img.icons8.com/3d-fluency/36/layers.png" alt="layers" />Tools
				</div>
			</div>
			<div
				class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  border-gray-200 pt-6 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
				<article class="card shadow-xl image-full justify-between border border-blue-400 ">
					<div class="card-body">
						<div class="flex items-center gap-x-4 text-xs ">
							<div class="flex items-center">
								<img width="28" height="28" src="https://img.icons8.com/3d-fluency/28/flash-on.png"
									alt="flash-on" />
								<p class="text-lg ">Techniques</p>
							</div>
						</div>
						<div class="group relative flex flex-wrap">
							<!-- <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-50 group-hover:text-green-300">
								<a href="#">
									<span class="absolute inset-0"></span>
									Boost your conversion rate
								</a>
							</h3> -->
							<div class="mt-2 mr-2 line-clamp-3 text-sm leading-4 text-gray-50">
								<button class="btn btn-outline  text-yellow-500 btn-sm">
									<div class="icons8-javascript"></div>
									Javascript
								</button>
							</div>
							<div class="mt-2 mr-2 line-clamp-3 text-sm leading-4 text-gray-50">
								<button class="btn btn-outline  text-green-600 btn-sm">
									<div class="icons8-vuejs"></div>
									Vue
								</button>
							</div>
							<div class="mt-2 mr-2 line-clamp-3 text-sm leading-4 text-gray-50">
								<button class="btn btn-outline  text-amber-600 btn-sm">
									<div class="icons8-html-5"></div>
									Html
								</button>
							</div>
							<div class="mt-2 mr-2 line-clamp-3 text-sm leading-4 text-gray-50">
								<button class="btn btn-outline  text-slate-400 btn-sm">
									<div class="icons8-下一个js"></div>
									Next
								</button>
							</div>
							<div class="mt-2 mr-2 line-clamp-3 text-sm leading-4 text-gray-50">
								<button class="btn btn-outline  text-violet-500 btn-sm">
									<div class="icons8-迅速地"></div>
									Vite
								</button>
							</div>
							<div class="mt-2 mr-2 line-clamp-3 text-sm leading-4 text-gray-50">
								<button class="btn btn-outline  text-blue-500 btn-sm">
									<div class="icons8-css3"></div>
									Css3
								</button>
							</div>
							<div class="mt-2 mr-2 line-clamp-3 text-sm leading-4 text-gray-50">
								<button class="btn btn-outline  text-cyan-500 btn-sm">
									<div class="icons8-mysql徽标"></div>
									MySql
								</button>
							</div>
							<div class="mt-2 mr-2 line-clamp-3 text-sm leading-4 text-gray-50">
								<button class="btn btn-outline  text-teal-600 btn-sm">
									<div class="icons8-node-js"></div>
									Node
								</button>
							</div>
						</div>
					</div>
				</article>

				<article class="card shadow-xl image-full justify-between border border-blue-400 ">
					<div class="card-body">
						<div class="flex items-center gap-x-4 text-xs ">
							<div class="flex items-center">
								<img width="28" height="28" src="https://img.icons8.com/3d-fluency/28/layers.png"
									alt="flash-on" />
								<p class="text-lg ">Tools</p>
							</div>
						</div>
						<div class="group relative flex flex-wrap">
							<block v-for="(item, index) in Tools" :key="index">
								<div class="mt-2 mr-2 line-clamp-3 text-sm leading-4 text-gray-50">
									<button :class="item.bcolor" class="btn btn-circle btn-outline ">
										<div :class="item.icon"></div>
									</button>
								</div>
							</block>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
	<section class="dark:bg-gray-800 dark:text-gray-100">
		<div class="container px-6 py-12 mx-auto">
			<div class="grid items-center gap-4 xl:grid-cols-5">
				<div class="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
					<!-- <h2 class="text-4xl font-bold">Duo assum utroque appetere an</h2> -->
					<img class="mx-4" width="141" height="141"
						src="https://img.icons8.com/3d-fluency/141/collaboration-female-male--v4.png"
						alt="collaboration-female-male--v4" />
					<p class="dark:text-gray-400 text-4xl font-bold mx-3">That's what they say about Jenkin.</p>
				</div>
				<div class="p-6 xl:col-span-3">
					<div class="grid gap-4 md:grid-cols-2">
						<div id="app">
							<div ref="box" class="box">
								<div class="grid content-center gap-4">

									<div class="p-6 rounded shadow-md dark:bg-gray-900">
										<p>An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip
											democritum pro in, nec democritum intellegam ne. Propriae volutpat dissentiet ea
											sit, nec at lorem inani tritani, an ius populo perfecto vituperatoribus. Eu cum
											case modus salutandi, ut eum vocent sensibus reprehendunt.</p>
										<div class="flex items-center mt-4 space-x-4">
											<img src="https://source.unsplash.com/50x50/?portrait?1" alt=""
												class="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500">
											<div>
												<p class="text-lg font-semibold">Leroy Jenkins</p>
												<p class="text-sm dark:text-gray-400">CTO of Company Co.</p>
											</div>
										</div>
									</div>

									<div class="p-6 rounded shadow-md dark:bg-gray-900">
										<p>Sit wisi sapientem ut, pri civibus temporibus voluptatibus et, ius cu hinc
											fabulas. Nam
											meliore minimum et, regione convenire cum id. Ex pro eros mucius consectetuer,
											pro magna
											nulla nonumy ne, eam putent iudicabit consulatu cu.</p>
										<div class="flex items-center mt-4 space-x-4">
											<img src="https://source.unsplash.com/50x50/?portrait?2" alt=""
												class="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500">
											<div>
												<p class="text-lg font-semibold">Leroy Jenkins</p>
												<p class="text-sm dark:text-gray-400">CTO of Company Co.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div id="app">
							<div ref="box2" class="box2">
								<div class="grid content-center gap-4">
									<div class="p-6 rounded shadow-md dark:bg-gray-900">
										<p>Putant omnium elaboraret per ut. Id dicta tritani nominavi quo, mea id justo
											errem
											elaboraret. Agam mollis scripserit ea his, ut nec postea verear persecuti. Ea
											noster
											senserit eam, ferri omittantur ei nec. Id mel solet libris efficiantur, commune
											explicari et eos. Case movet ad est, sed tota vocent appetere ea.</p>
										<div class="flex items-center mt-4 space-x-4">
											<img src="https://source.unsplash.com/50x50/?portrait?3" alt=""
												class="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500">
											<div>
												<p class="text-lg font-semibold">Leroy Jenkins</p>
												<p class="text-sm dark:text-gray-400">CTO of Company Co.</p>
											</div>
										</div>
									</div>
									<div class="p-6 rounded shadow-md dark:bg-gray-900">
										<p>Te omnes virtute volutpat sed. Ei esse eros interesset vel, ei populo denique
											ocurreret
											vix, eu cum pertinax mandamus vituperatoribus. Solum nihil luptatum per ex, ei
											amet
											viderer eos. Ea illum labitur mnesarchum pro. Eius meis salutandi ei nam,
											alterum
											expetenda et nec. Expetenda intellegat at eum, per mazim sanctus honestatis ad.
											Ei
											noluisse invenire vix. Te ancillae patrioque qui, probo bonorum vivendum ex vim.
										</p>
										<div class="flex items-center mt-4 space-x-4">
											<img src="https://source.unsplash.com/50x50/?portrait?4" alt=""
												class="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500">
											<div>
												<p class="text-lg font-semibold">Leroy Jenkins</p>
												<p class="text-sm dark:text-gray-400">CTO of Company Co.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted, ref } from 'vue';


gsap.registerPlugin(ScrollTrigger);

export default {
	data() {
		return {
			hoverIndex: -1, // 初始时没有按钮被悬停

			SocialIcons: [
				{ Name: "Github", Icon: '#github-one', IDkey: '001' },
				{ Name: "Linkedin", Icon: '#linkedin', IDkey: '002' },
				{ Name: "Instagram", Icon: '#instagram', IDkey: '003' },
				{ Name: "Facebook", Icon: '#facebook-one', IDkey: '004' },
				{ Name: "Mail", Icon: '#maill-one', IDkey: '005' },
			],
			Tools: [
				{ icon: 'icons8-bing', bcolor: 'text-blue-400' },
				{ icon: 'icons8-notion', bcolor: 'text-gray-300' },
				{ icon: 'icons8-chatgpt', bcolor: 'text-teal-200' },
				{ icon: 'icons8-vscode', bcolor: 'text-blue-500' },
				{ icon: 'icons8-twitterx', bcolor: 'text-neutral-800' },
				{ icon: 'icons8-github', bcolor: 'text-neutral-900' },
				{ icon: 'icons8-stack-overflow', bcolor: 'text-red-400' },
				{ icon: 'icons8-youtube', bcolor: 'text-red-400' },
				{ icon: 'icons8-duckduckgo', bcolor: 'text-teal-200' },
				{ icon: 'icons8-dribbble', bcolor: 'text-red-400' },
				{ icon: 'icons8-linkedin', bcolor: 'text-blue-400' },
				{ icon: 'icons8-powerpoint', bcolor: 'text-orange-600' },
				{ icon: 'icons8-photoshop', bcolor: 'text-blue-600' },
				{ icon: 'icons8-illustrator', bcolor: 'text-orange-400' },

			]
		}
	},
	setup() {
		const box = ref(null);
		const box2 = ref(null);

		onMounted(() => {
			gsap.from(box.value, {
				scrollTrigger: {
					trigger: box.value,
					start: 'top center', // 当方块的顶部到达视口中心时开始动画
					scrub: true,
				},
				opacity: 0,
				x: -100,
				duration: 1,
			});
			gsap.from(box2.value, {
				scrollTrigger: {
					trigger: box2.value,
					start: 'top center', // 当方块的顶部到达视口中心时开始动画
					scrub: true,
				},
				opacity: 0,
				x: 100,
				duration: 1,
			});
		});

		return { box, box2 };
	},
}
</script>


<style type="text/css">
@import '/src/view/about/badge.css';

button {}

.red-dot {
	z-index: 9999;
	position: absolute;
	top: 0;
	right: 0;
	width: 100px;
	height: 100px;

}

.box {}

.box2 {}


.iconpark-icon {
	width: 1em;
	height: 1em;
	/* <!-- your css code --> */
	/* <!-- ... --> */
}
</style>
