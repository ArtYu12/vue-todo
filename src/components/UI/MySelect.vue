<template>
    <select :value="optionValue" @change="this.$emit(`update:optionValue`,$event.target.value)">
        <option disabled>{{ defaultValue }}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.title }}</option>
    </select>
</template>

<script>
export default {
    name:"my-select",
    props: {
        options: {
            type: Array,
            default: () => []
        },
        optionValue: {
            type: String
        },
        defaultValue: String
    },
    data() {
        return {

        }
    }
}
</script>