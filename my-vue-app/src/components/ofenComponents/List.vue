<script setup>
defineProps(['names', 'items'])
</script>
<template>
        <thead>
            <tr>
                <th v-for="name in names">{{ name }}:</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.id">
                <td v-for="(value, key) in item" :key="key">
                    {{ value }}
                </td>
>
            </tr>
        </tbody>
</template>