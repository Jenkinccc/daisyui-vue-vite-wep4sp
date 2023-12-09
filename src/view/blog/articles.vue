<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0 border-solid border-blue-500">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600 border-solid border-blue-500">Writing on Software designer,
          Web Developer, and Trendy Technology.</p>
      </div>
      <div
        class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <!-- <div>{{ this.blogList[0].Title }}</div> -->
        <article
          class="card shadow-xl image-full justify-between border border-blue-400 ">
          <figure><img src="/resource/sjjcdl.png" alt="Shoes" /></figure>
          <div class="card-body">
            <div class="flex items-center gap-x-4 text-xs ">
              <time datetime="2020-03-16" class="text-gray-50">Mar 16, 2023</time>
              <a href="#"
                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Web</a>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-50 group-hover:text-green-300">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  Boost your conversion rate
                </a>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-50">Illo sint voluptas. Error voluptates culpa
                eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat
                consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogList: [],
    };
  },
  mounted() {
    // 调用后端API获取数据
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        this.data = data;
        console.log(' this.data', this.data)
        this.blogList = data;
        console.log(' this.blogList', this.blogList)

      })
      .catch(error => {
        console.error('Error fetching data: ' + error);
      });
  },
}
</script>

<style></style>