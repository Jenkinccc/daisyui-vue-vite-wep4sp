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
        <button class="btn btn-primary">Get Started</button>
        
      </div>
    </div>
  </div>
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
