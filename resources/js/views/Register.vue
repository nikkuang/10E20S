<template>
    <form v-on:submit.prevent="onSubmit">
        <label>Name</label>
        <input type="text" v-model="user.name" name="name"  placeholder="Fullname"/>
        <label>Email</label>
        <input type="text" v-model="user.email" name="email" placeholder="Email" />
        <label>Password</label>
        <input type="text" v-model="user.password" name="email" placeholder="Password" />
        <label>Confirm Password</label>
        <input type="text" v-model="user.password_confirmation" name="email" placeholder="Confirm password" />
        <input class="right" type="submit" value="Submit">
    </form>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            user: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            }
        }
    },
    methods: {
        onSubmit() {
            axios.post('/api/register' , this.user)
                .then((response) => {
                    console.log(response)
                })
        }
    }
}
</script>
<style scoped>
form {
  padding: 16px;
  box-shadow: 2px 1px #ddd;
  border: 1px solid #ddd;
  overflow: auto;
}

form *:not(:last-child) {
  margin-bottom: 5px;
}

form label, form input {
  display: block;
}

form input[type=text] {
  width: 100%;
}

form label:after {
  content: ':';
}


form input.right {
  float: right;
}

form input:after {
  content: "";
  clear: both;
  display: table;
}
</style>
