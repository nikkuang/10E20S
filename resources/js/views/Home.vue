<template>
    <div class="home">
        <nav class="navigation">
            <router-link class="fr" to="/register">
                Register
            </router-link>
        </nav>
        <span class="logo">
            <span class="lara">Lara</span><span class="vel">vel</span>
        </span>
    </div>
</template>
<style>

.home {
    width: 100%;
}

.logo {
    display: block;
    font-weight: bold;
    margin-top: 30vh;
    font-size: 100px;
    width: 100%;
    text-align: center;
}

.navigation {
    padding: 16px;
    overflow: auto;
}

.navigation a {
    text-decoration: none;
    color: rgb(88, 88, 88);
}

.navigation .fr {
    float: right;
}

.vel {
    color: #38c172;
}
</style>
