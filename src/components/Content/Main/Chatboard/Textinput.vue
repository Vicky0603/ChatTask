<template>
    <div class="textinput">
        <div class="input-text__wrapper">
            <div class="input-text__field-wrapper">
                <div class="input-text__field" @click="$refs.typeBox.focus()" contenteditable>{{inputText}}</div>
            </div>
            <div class="input-text__button">
                <img class="input-text__image" src="../../../../assets/send.svg" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data:()=>({
        inputText:'',
    })
}
</script>