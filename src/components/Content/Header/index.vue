<template>
    <header class="header">
        <div class="avatar">
            
            <!-- <img v-if="!userimage" class="avatar__img" src="../../../assets/private.svg" /> -->
            <img v-if="userimage" class="avatar__img" src="https://cdn.vuetifyjs.com/images/john.png" /> 
            <PrivateLogo v-else />
        </div>
    </header>
</template>

<script>
import PrivateLogo from '../../global/private-logo'
export default {
    data:()=>({
        userimage: null,
    }),
    components:{
        PrivateLogo
    }
}
</script>