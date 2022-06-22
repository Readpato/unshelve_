<template>
  <main
    class="flex h-[calc(100vh-144px)] flex-col items-center justify-center space-y-10 md:flex-col lg:h-[calc(100vh-300px)] lg:flex-row lg:space-y-0"
  >
    <div class="max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <img
        data-cy="main-image"
        class="h-auto max-w-full"
        src="@/assets/main-image.png"
        alt="A girl sitting on a couch reading a book"
      />
    </div>
    <div
      class="flex flex-col items-center justify-center space-y-2 text-center lg:space-y-5 lg:text-left"
    >
      <h1
        data-cy="main-title"
        class="text-3xl font-medium md:text-4xl xl:text-5xl"
      >
        Share those moments
      </h1>
      <p
        data-cy="main-paragraph"
        class="w-72 p-1 text-lg lg:self-start lg:p-0 lg:text-xl xl:w-96 xl:text-2xl"
      >
        Unshelve the books you love and tell us your experience
      </p>
      <button
        data-cy="main-button"
        class="w-32 bg-main-orange p-1 text-center text-white lg:self-start lg:p-2 lg:text-lg"
      >
        Start now
      </button>
    </div>
  </main>
</template>
