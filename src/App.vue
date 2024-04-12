<script setup lang="ts">
const routes = [
  {
    label: 'Admin',
    active: false,
    collapsible: true,
    items: [
      {
        label: 'User',
        to: '/users'
      },
      {
        label: 'Roles',
        to: '/roles'
      },
      {
        label: 'Permissions',
        to: '/permissions'
      }
    ]
  }
]
</script>

<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <div class="w-1/6 bg-primary-500">
      <aside class="h-full">
        <x-menu :items="routes" class="text-white" />
      </aside>
    </div>

    <!-- Main Content -->
    <div class="flex flex-col w-full">
      <!-- Header -->
      <header
        class="sticky top-0 z-40 flex h-[6rem] w-full shrink-0 items-center border-b-2 border-gray-300 bg-white shadow-gray-500"
      >
        <!-- Header content goes here -->
      </header>

      <!-- Main Content Area -->
      <main class="flex-grow border-3 p-10 flex-1 w-full mx-auto md:px-6 lg:px-8 max-w-full">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>
