<script setup lang="ts">
const menu1 = [
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
  <div class="flex">
    <div class="w-1/6">
      <aside class="h-screen bg-primary-500">
        <x-menu :items="menu1" class="text-white" />
      </aside>
      <header></header>
    </div>

    <main class="border-3 w-full h-screen">
      <router-view></router-view>
    </main>
  </div>
</template>
