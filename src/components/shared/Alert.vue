<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-alert dismissible :color="color" border="left" @c = "onClose" :value="true">
        {{text}}
    </v-alert>
</template>
<script>
export default {
    props: ['text', 'color'],
    methods: {
        onClose(){
            this.$emit('dismissed')
        }
    }
}
</script>