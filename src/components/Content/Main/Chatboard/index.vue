<template>
    <section class="chatboard">
        <Textoutput />
        <Textinput />
    </section>
</template>

<script>
import Textoutput from './Textoutput';
import Textinput from './Textinput';
export default {
    components:{
        Textinput,
        Textoutput
    }
}
</script>