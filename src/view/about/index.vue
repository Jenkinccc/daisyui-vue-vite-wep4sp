<template>
  <div class="hero min-h-screen ">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div >
        <img src="/resource/portrait.webp" class="mask mask-squircle max-w-sm rounded-lg shadow-2xl" />
        <div v-for="(item,index) in SocialIcons" :key="index" class="flex items-center mt-6 ml-5" >
          <svg class="iconpark-icon text-2xl">
            <use :href="item.Icon"></use>
          </svg>
          <span class="text-1xl ml-5">
            <span v-if="item.IDkey != '005'">Follow Jenkin on  {{ item.Name }}</span>
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
  
	<section class="dark:bg-gray-800 dark:text-gray-100">
		<div class="container px-6 py-12 mx-auto">
			<div class="grid items-center gap-4 xl:grid-cols-5">
				<div class="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
					<h2 class="text-4xl font-bold">Duo assum utroque appetere an</h2>
					<p class="dark:text-gray-400">Pri ex magna scaevola moderatius. Nullam accommodare no vix, est ei diceret alienum, et sit cetero malorum. Et sea iudico consequat, est sanctus adipisci ex.</p>
				</div>
				<div class="p-6 xl:col-span-3">
					<div class="grid gap-4 md:grid-cols-2">
						<div class="grid content-center gap-4">
							<div class="p-6 rounded shadow-md dark:bg-gray-900">
								<p>An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in, nec democritum intellegam ne. Propriae volutpat dissentiet ea sit, nec at lorem inani tritani, an ius populo perfecto vituperatoribus. Eu cum case modus salutandi, ut eum vocent sensibus reprehendunt.</p>
								<div class="flex items-center mt-4 space-x-4">
									<img src="https://source.unsplash.com/50x50/?portrait?1" alt="" class="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500">
									<div>
										<p class="text-lg font-semibold">Leroy Jenkins</p>
										<p class="text-sm dark:text-gray-400">CTO of Company Co.</p>
									</div>
								</div>
							</div>
							<div class="p-6 rounded shadow-md dark:bg-gray-900">
								<p>Sit wisi sapientem ut, pri civibus temporibus voluptatibus et, ius cu hinc fabulas. Nam meliore minimum et, regione convenire cum id. Ex pro eros mucius consectetuer, pro magna nulla nonumy ne, eam putent iudicabit consulatu cu.</p>
								<div class="flex items-center mt-4 space-x-4">
									<img src="https://source.unsplash.com/50x50/?portrait?2" alt="" class="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500">
									<div>
										<p class="text-lg font-semibold">Leroy Jenkins</p>
										<p class="text-sm dark:text-gray-400">CTO of Company Co.</p>
									</div>
								</div>
							</div>
						</div>
						<div class="grid content-center gap-4">
							<div class="p-6 rounded shadow-md dark:bg-gray-900">
								<p>Putant omnium elaboraret per ut. Id dicta tritani nominavi quo, mea id justo errem elaboraret. Agam mollis scripserit ea his, ut nec postea verear persecuti. Ea noster senserit eam, ferri omittantur ei nec. Id mel solet libris efficiantur, commune explicari et eos. Case movet ad est, sed tota vocent appetere ea.</p>
								<div class="flex items-center mt-4 space-x-4">
									<img src="https://source.unsplash.com/50x50/?portrait?3" alt="" class="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500">
									<div>
										<p class="text-lg font-semibold">Leroy Jenkins</p>
										<p class="text-sm dark:text-gray-400">CTO of Company Co.</p>
									</div>
								</div>
							</div>
							<div class="p-6 rounded shadow-md dark:bg-gray-900">
								<p>Te omnes virtute volutpat sed. Ei esse eros interesset vel, ei populo denique ocurreret vix, eu cum pertinax mandamus vituperatoribus. Solum nihil luptatum per ex, ei amet viderer eos. Ea illum labitur mnesarchum pro. Eius meis salutandi ei nam, alterum expetenda et nec. Expetenda intellegat at eum, per mazim sanctus honestatis ad. Ei noluisse invenire vix. Te ancillae patrioque qui, probo bonorum vivendum ex vim.</p>
								<div class="flex items-center mt-4 space-x-4">
									<img src="https://source.unsplash.com/50x50/?portrait?4" alt="" class="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500">
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
	</section>

</template>

<script>
export default {
    data(){
        return{
            SocialIcons:[
                { Name: "Github",Icon:'#github-one',IDkey:'001'},
                { Name: "Linkedin",Icon:'#linkedin',IDkey:'002'},
                { Name: "Instagram",Icon:'#instagram',IDkey:'003'},
                { Name: "Facebook",Icon:'#facebook-one',IDkey:'004'},
                { Name: "Mail",Icon:'#maill-one',IDkey:'005'},
            ]
        }
    }
}
</script>

<style type="text/css">
.iconpark-icon {
  width: 1em;
  height: 1em;
  /* <!-- your css code --> */
  /* <!-- ... --> */
}
</style>
