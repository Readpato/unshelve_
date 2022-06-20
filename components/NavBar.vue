<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { ref } from 'vue'

  const isModalShown = ref(false)

  const showModal = (): void => {
    isModalShown.value = !isModalShown.value
  }
</script>

<template>
  <nav
    data-cy="navigation-bar"
    class="lg: mx-10 flex h-36 items-center justify-between md:mx-20 lg:mx-36 lg:h-48"
  >
    <img class="h-20 w-20 lg:h-28 lg:w-28" src="@/assets/unshelve-logo.png" />
    <ul
      data-cy="navigation-links-lg"
      class="hidden md:flex md:space-x-10 lg:space-x-24 lg:text-xl xl:space-x-32"
    >
      <li
        class="hover:underline hover:decoration-main-orange hover:decoration-2 lg:hover:decoration-4"
      >
        <NuxtLink to="/">Search a book</NuxtLink>
      </li>
      <li
        class="hover:underline hover:decoration-main-orange hover:decoration-2 lg:hover:decoration-4"
      >
        <NuxtLink to="/">Find a bookstore</NuxtLink>
      </li>
    </ul>
    <div
      data-cy="navigation-links-mobile-wrapper"
      class="relative flex items-center justify-center space-x-2 md:hidden"
    >
      <span class="text-lg">Menu</span>
      <button
        data-cy="navigation-links-button"
        @click="showModal"
        class="focus:rounded-lg focus:outline focus:outline-main-orange"
      >
        <Icon class="h-7 w-7" icon="eva:menu-fill" />
      </button>
      <ul
        data-cy="navigation-links-mobile"
        v-if="isModalShown"
        class="absolute -bottom-16 right-0 w-32 space-y-2 rounded-lg p-1 text-end text-sm outline outline-main-orange"
      >
        <li
          class="hover:underline hover:decoration-main-orange hover:decoration-2"
        >
          <NuxtLink to="/">Search a book</NuxtLink>
        </li>
        <li
          class="hover:underline hover:decoration-main-orange hover:decoration-2"
        >
          <NuxtLink to="/">Find a bookstore</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
