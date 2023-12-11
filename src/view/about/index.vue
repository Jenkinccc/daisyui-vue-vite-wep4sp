<template>
	<div class="hero min-h-screen ">
		<div class="hero-content flex-col lg:flex-row-reverse">
			<div>
				<!-- <video width="320" height="240" loop muted>
					<source src="/resource/7883.mp4" type="video/mp4">
				</video> -->
				<div class="container2">
					<div class="hi-memoji">
						<video class="h-[190px] w-[190px] md:h-[210px] md:w-[210px]" muted autoplay="" loop=""
							playsinline="">
							<source src="/resource/7885.mp4" type="video/mp4">Your browser does not support the video tag.
						</video>
					</div>
					
					<div class="circle class1">
						<div class="inner-circle">
							<img width="47" height="47" src="https://img.icons8.com/3d-fluency/47/weixing.png"
								alt="weixing" />
						</div>
					</div>
					<div class="circle class2">
						<div class="inner-circle">
							<img width="47" height="47" src="https://img.icons8.com/3d-fluency/47/filled-message.png" alt="filled-message"/>
						</div>
					</div>
					<div class="circle class3">
						<div class="inner-circle">
							<img width="47" height="47" src="https://img.icons8.com/3d-fluency/47/github.png"
								alt="github" />
						</div>
					</div>
					<div class="circle class4">
						<div class="inner-circle">
							<img width="47" height="47" src="https://img.icons8.com/3d-fluency/47/spotify.png" alt="spotify"/>
						</div>
					</div>
					<div class="circle class5">
						<div class="inner-circle">
							<img width="47" height="47" src="https://cdn.jim-nielsen.com/macos/64/messages-2021-05-25.png" alt="imessage"/>
						</div>
					</div>
					<div class="circle class6">
						<div class="inner-circle">
							<img width="47" height="47" src="https://img.icons8.com/3d-fluency/47/instagram-new.png" alt="instagram-new"/>
						</div>
					</div>
					<div class="circle class7">
						<div class="inner-circle">
							<img width="47" height="47" src="https://img.icons8.com/3d-fluency/47/twitter-circled.png" alt="twitter-circled"/>
						</div>
					</div>
					
					<div class="circle class8">
						<div class="inner-circle">
							<img width="47" height="47" src="https://cdn.jim-nielsen.com/macos/64/mail-2021-05-25.png" alt="mail"/>
						</div>
					</div>
				</div>
				<!-- <img src="/resource/portrait.webp" class="mask mask-squircle max-w-sm rounded-lg shadow-2xl" /> -->
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
				<h1 class="text-5xl font-bold hi-jenkin FontUI group">
					Hi✋, I'm
					<span class="text-yellow-600">Jenkin</span>.
				</h1>
				<div class="py-6 text-3xl  FontUI">
					<div class="text-sky-500">Web Developer. </div>
					<div class="text-rose-500">Software designer.</div>
					<div class="text-teal-500">Independent Developer </div>
					and
					<div class="text-lime-700">Tech Enthusiast，</div>
				</div>
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
							<div v-for="(item, index) in Tools" :key="index" class="dropdown">
								<div :tabindex="index" role="button"
									class="mt-2 mr-2 line-clamp-3 text-sm leading-4 text-gray-50">
									<button :class="item.bcolor" class="btn btn-circle btn-outline ">
										<div :class="item.icon"></div>
									</button>
								</div>
								<div :tabindex="index"
									class="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-base-content text-primary-content">
									<div class="card-body">
										<h3 class="card-title text-gray-50">{{ item.title }}</h3>
										<p class="text-gray-50">{{ item.desc }}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</article>
			</div>
			<div
				class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  border-gray-200 pt-6 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
				<div class="card w-84 bg-primary text-primary-content opacity-80 location-bg">
					<div class="card-body">
						<h2 class="card-title flex text-gray-100">
							<img width="34" height="34" src="https://img.icons8.com/3d-fluency/34/location.png"
								alt="location" />
							Location
						</h2>
						<p class="text-gray-200">I'm living in</p>
						<p class="text-gray-200">Guangdong,China</p>
						<div class="card-actions justify-end">
						</div>
					</div>
				</div>
				<div class="card w-84 bg-slate-300 text-primary-content">
					<div class="card-body">
						<h2 class="card-title flex text-gray-700">
							<img width="45" height="45" src="https://img.icons8.com/fluency/45/apple-fitness.png"
								alt="apple-fitness" />
							Sport
						</h2>
						<p>I use Apple Fitness </p>
						<p>to improve my exercise.</p>
						<div class="card-actions justify-end">
						</div>
					</div>
				</div>
				<div class="card w-84 bg-gray-950 text-primary-content">
					<div class="card-body">
						<h2 class="card-title flex text-gray-200">
							<img width="34" height="34" src="https://img.icons8.com/3d-fluency/34/scroll.png"
								alt="scroll" />
							Rusume
						</h2>
						<p class="text-gray-300">Open Jenkin Rusume/CV</p>
						<div class="card-actions justify-end">
						</div>
					</div>
				</div>
				<div class="card w-84 bg-primary text-primary-content">
					<div class="card-body">
						<h2 class="card-title">Card title!</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div class="card-actions justify-end">
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="dark:bg-gray-800 dark:text-gray-100">
		<div class="container px-6 py-12 mx-auto">
			<div class="grid items-center gap-4 xl:grid-cols-5">
				<div class="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
					<!-- <h2 class="text-4xl font-bold">Duo assum utroque appetere an</h2> -->
					<img class="mx-4" width="141" height="141" src="https://img.icons8.com/3d-fluency/141/chat.png"
						alt="chat.png" />
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
			menu: ["Home", "About", "Services", "Careers", "Prices", "Contact"],
			colors: ["#ee6055", "#ff9b85", "#ffd97d", "#60d394", "#348aa7"],
			SocialIcons: [
				{ Name: "Github", Icon: '#github-one', IDkey: '001' },
				{ Name: "Linkedin", Icon: '#linkedin', IDkey: '002' },
				{ Name: "Instagram", Icon: '#instagram', IDkey: '003' },
				{ Name: "Facebook", Icon: '#facebook-one', IDkey: '004' },
				{ Name: "Mail", Icon: '#maill-one', IDkey: '005' },
			],
			Tools: [
				{ icon: 'icons8-bing', bcolor: 'text-blue-400', title: 'Bing', desc: '强大的搜索工具' },
				{ icon: 'icons8-notion', bcolor: 'text-gray-300', title: 'Notion', desc: '用来做项目管理，也适合做个人知识库' },
				{ icon: 'icons8-chatgpt', bcolor: 'text-teal-200', title: 'ChatGPT', desc: '生产力工具，无需多言' },
				{ icon: 'icons8-vscode', bcolor: 'text-blue-500', title: 'VsCode', desc: '代码工程师们最喜爱的轻量编辑器' },
				{ icon: 'icons8-twitterx', bcolor: 'text-neutral-800', title: 'X', desc: '原Twitter，获取世界最新趋势和科技热点的社交媒体' },
				{ icon: 'icons8-github', bcolor: 'text-neutral-900', title: 'Github', desc: '源代码托管服务平台，有各种开源项目可以学习' },
				{ icon: 'icons8-stack-overflow', bcolor: 'text-red-400', title: 'StackOverflow', desc: '开发人员社区' },
				{ icon: 'icons8-youtube', bcolor: 'text-red-400', title: 'YouTube', desc: '全球最大的视频媒体，可以在上面学习各种创意和技术' },
				{ icon: 'icons8-figma', bcolor: 'text-green-400', title: 'figma', desc: '优秀的产品设计工具' },
				{ icon: 'icons8-duckduckgo', bcolor: 'text-teal-200', title: 'duckduckgo', desc: '保护隐私的搜索引擎' },
				{ icon: 'icons8-dribbble', bcolor: 'text-red-400', title: 'dribbble', desc: '设计社区' },
				{ icon: 'icons8-linkedin', bcolor: 'text-blue-400', title: 'linkedin', desc: '职业社交软件，在上面可以关注一些海外大佬的动态' },
				{ icon: 'icons8-powerpoint', bcolor: 'text-orange-600', title: 'powerpoint', desc: '幻灯片展示，项目路演' },
				{ icon: 'icons8-photoshop', bcolor: 'text-blue-600', title: 'photoshop', desc: '图像编辑工具' },
				{ icon: 'icons8-illustrator', bcolor: 'text-orange-400', title: 'illustrator', desc: '插画设计工具' },

			]
		}
	},
	setup() {
		const box = ref(null);
		const box2 = ref(null);
		onMounted(() => {
			gsap.from('.hi-memoji', {
				duration: 2,
				scale: 0.5,
				ease: "back.out(1.4)",
				stagger: 0.4,
			});
			//创建一个时间轴对象
			var tl = gsap.timeline();
			gsap.from('.class1', {
				duration: 1,
				scale: 0,
				ease: "back.out(1.7)",
				stagger: 0.9,
			});
			gsap.from('.class2', {
				duration: 1,
				scale: 0,
				ease: "back.out(1.7)",
				stagger: 0.7,
			});
			gsap.from('.class3', {
				duration: 1,
				scale: 0,
				ease: "back.out(1.7)",
				stagger: 0.2,
			});
			gsap.from('.class4', {
				duration: 1,
				scale: 0,
				ease: "back.out(1.7)",
				stagger: 0.2,
			});
			gsap.from('.class5', {
				duration: 1,
				scale: 0,
				ease: "back.out(1.7)",
				stagger: 0.2,
			});
			gsap.from('.class6', {
				duration: 1,
				scale: 0,
				ease: "back.out(1.7)",
				stagger: 0.2,
			});
			gsap.from('.class7', {
				duration: 1,
				scale: 0,
				ease: "back.out(1.7)",
				stagger: 0.2,
			});
			gsap.from('.class8', {
				duration: 1,
				scale: 0,
				ease: "back.out(1.7)",
				stagger: 0.2,
			});
			// gsap.to('.class1', { y: -60, scale: 0, duration: 1, });
			tl.to(".class1", {
				duration: 14,             // 持续时间
				rotate: 360,             // 旋转
				transformOrigin: "50% 50%",  // 旋转的中心点在元素的中心
				repeat: -1,              // 无限重复动画
				ease: "linear",
			});
			tl.to(".class2", {
				duration: 14,
				rotate: 360,
				transformOrigin: "50% 50%",
				repeat: -1,
				ease: "linear",

			}, "-=15");
			tl.to(".class3", {
				duration: 14,
				rotate: 360,
				transformOrigin: "50% 50%",
				repeat: -1,
				ease: "linear",

			}, "-=17");
			tl.to(".class4", {
				duration: 14,
				rotate: 360,
				transformOrigin: "50% 50%",
				repeat: -1,
				ease: "linear",

			}, "-=19");
			tl.to(".class5", {
				duration: 14,
				rotate: 360,
				transformOrigin: "50% 50%",
				repeat: -1,
				ease: "linear",

			}, "-=13");
			tl.to(".class6", {
				duration: 14,
				rotate: 360,
				transformOrigin: "50% 50%",
				repeat: -1,
				ease: "linear",

			}, "-=11");
			tl.to(".class7", {
				duration: 14,
				rotate: 360,
				transformOrigin: "50% 50%",
				repeat: -1,
				ease: "linear",

			}, "-=20");
			tl.to(".class8", {
				duration: 14,
				rotate: 360,
				transformOrigin: "50% 50%",
				repeat: -1,
				ease: "linear",

			}, "-=29");
			// gsap.to('.hi-memoji', { y: -60, opacity: 1, duration: 1, });
			gsap.to('.hi-jenkin', { y: -30, opacity: 0.9, duration: 1.5, });
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

div {
	font-family: SmileySans;
}

.location-bg {
	background-image: url('../../../resource/location.png');
	background-size: 16em;
}

.box {}

.box2 {}

.hi-jenkin {
	opacity: 0.2
}

.iconpark-icon {
	width: 1em;
	height: 1em;
	/* <!-- your css code --> */
	/* <!-- ... --> */
}

.container2 {
	width: 300px;
	height: 300px;
	/* min-height: 300px; */
	position: relative;
	display: grid;
	place-items: center;
	pointer-events: none;
}

.circle {
	position: absolute;
	inset: 0;
	display: grid;
	place-items: center;
	/* pointer-events: none; */
	/* transition: 550ms ease; */
}

.inner-circle {
	position: absolute;
	width: 40px;
	border-radius: 100%;
	/* aspect-ratio: 1; */
	top: 0;
	/* display: grid; */
	place-items: center;
	/* pointer-events: auto; */
	/* transition: background 350ms ease, color 350ms ease-in-out; */
}

.inner-circle:hover {
	background-color: coral;
	color: white;
}</style>
