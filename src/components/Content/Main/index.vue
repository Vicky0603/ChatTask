<template>
    <main id="main" class="main">
        <Chatlist />
        <Chatboard />
    </main>
</template>

<script>
import Chatlist from './Chatlist';
import Chatboard from './Chatboard';
export default {
    components:{
        Chatlist,
        Chatboard
    }
    
}
</script>