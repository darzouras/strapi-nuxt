<template>
  <div>
    <button
      class="nav-button"
      :aria-expanded="this.navExpanded.toString()"
      :class="{expanded : navExpanded}"
      @click="navExpanded = !navExpanded"
    >
      <div class="nav-button__plus">
        <span />
        <span />
      </div>
    </button>

    <transition name="fade-in-up">
      <nav
        class="nav"
        v-if="navExpanded"
        @click="navExpanded = false"
      >
        <ul class="nav-list">
          <li>
            <nuxt-link to="/" tag="a">Home</nuxt-link>
          </li>
        </ul>
      </nav>
    </transition>

    <div id="modal-full" class="uk-modal-full" uk-modal>
      <div class="uk-modal-dialog">
        <div
          class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle"
          uk-grid
        >
          <div
            class="uk-background-cover"
          />
          <div class="uk-padding-large">
            <h1 class="headline">DarZouras.com</h1>
            <div class="uk-width-1-2@s">
              <ul class="uk-nav-primary uk-nav-parent-icon" uk-nav>
                <li v-for="category in categories" :key="category.id">
                  <nuxt-link
                    class="uk-modal-close"
                    :to="{
                      name: 'categories-slug',
                      params: { slug: category.slug },
                    }"
                    tag="a"
                  >
                    {{ category.name }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <p class="uk-text-light">Built with strapi</p>
          </div>
        </div>
      </div>
    </div>

    <main id="main">
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.categories = await this.$strapi.find("categories");
  },
  data: function () {
    return {
      categories: [],
      navExpanded: false,
    };
  },
};
</script>

<style lang="scss">
.fade-in-up-enter-active, .fade-in-up-leave-active {
  transition: all .25s ease-out;
}
.fade-in-up-enter, .fade-in-up-leave-to {
  opacity: 0;
  transform: translateY(50vh);
}
</style>