<template>
<section>
    <header><h1>My Friends</h1></header>
    <ul>
        <friend-contact></friend-contact>
        <friend-contact></friend-contact>
    </ul>
</section>

</template>

<script>
import FriendContact from './components/FriendContact.vue';
    export default {
  components: { FriendContact },
        data() {
            return {
                friends: [
                    {
                        id: 'manuel',
                        name: 'Manuel Lorenz',
                        phone: '0123 45678 90',
                        email: 'manuel@localhost.com',
                    },
                    {
                        id: 'lyy',
                        name: 'Luo YingYuan',
                        phone: '0123 45678 90',
                        email: 'lyy@localhost.com',
                    }
                ]
            }
        },
    };
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
</style>