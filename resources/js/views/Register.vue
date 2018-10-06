<template>
    <div class="registration">
        <div class="registration-wrapper card">
            <div class="card-body">
                <h2>Registration</h2>
                <form v-on:submit.prevent="onSubmit">
                    <div class="form-group">
                        <label>Name</label>
                        <input class="form-control"
                            type="text"
                            v-model="user.name"
                            name="name"
                            placeholder="Enter full name"/>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input class="form-control"
                            type="email"
                            v-model="user.email"
                            name="email"
                            placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input class="form-control"
                            type="password"
                            v-model="user.password"
                            name="password"
                            placeholder="Enter password" />
                    </div>
                    <div class="form-group">
                        <label>Confirm Password</label>
                        <input class="form-control"
                            type="password"
                            v-model="user.password_confirmation"
                            name="password_confirmation"
                            placeholder="Re-enter password" />
                    </div>
                    <div class="alert alert-danger" v-show="errorMessage">
                        {{ errorMessage }}
                    </div>
                    <input class="btn btn-primary" type="submit" value="Register">
                </form>
            </div>
        </div>
    </div>
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
            },
            errorMessage: ''
        }
    },
    methods: {
        onSubmit(e) {
            axios.post('/api/register' , this.user)
                .then((response) => {
                    console.log(response.data)
                })
                .catch((error) => {
                    this.errorMessage = error.response.data.message
                })
        }
    }
}
</script>
<style>
.registration-wrapper  {
    width: 28rem;
    margin: 15vh auto 0;
}
</style>
