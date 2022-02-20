<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <div id="navbar-item" class="mt-3">
                <span class="icon">
                    <i class="bx bx-menu menu" @click="handleStyles"></i>
                </span>
            </div>
            <!--search button-->
            <div class="navbar-start">
                <div class="navbar-item">
                    <form method="get" action="/search">
                        <div class="field has-addons">
                            <div class="control">
                                <input type="text" class="input" placeholder="What are you looking for?" name="query" />
                            </div>
                            <div class="control">
                                <button class="button">
                                    <span class="icon">
                                        <i class="bx bx-search"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <a class="navbar-burger burger has-text-white" aria-label="menu" aria-expanded="false"
                data-target="navbar-menu" @click="showMobileMenu = !showMobileMenu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu" id="navbar-menu" v-bind:class="{ 'is-active': showMobileMenu }">
            <div class="navbar-end">
                <router-link to="/home" class="navbar-item">HOME</router-link>
                <router-link to="/about" class="navbar-item">ABOUT US</router-link>

               
                <div>
                    <div class="profile-details">
                        <div class="profile-content">
                            <img src="../assets/logo.png" alt="img" />
                        </div>
                        <div class="name-job">
                            <div class="profile_name">Principal</div>
                            <div class="job">Admin</div>
                        </div>
                    </div>
                </div>
                <!--<div class="buttons">
                    <router-link to="#" class="button is-success"><span class="icon"><i class="bx bx-bell"
                                aria-hidden="true"></i></span><span></span>
                    </router-link>
                </div>-->

            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navbar",
        data() {
            return {
                showMobileMenu: false,
            };
        },
        methods: {
            handleStyles() {
                console.log('handlestyles');

                let sidebar = document.querySelector(".sidebar");
                let menu = document.querySelector(".menu");
                console.log(menu);
                sidebar.classList.toggle("close");
                console.log('menu');


                // let arrow = document.querySelectorAll(".arrow");
                // for (var i = 0; i < arrow.length; i++) {
                //   arrow[i].addEventListener("click", (e) => {
                //     let arrowParent = e.target.parentElement.parentElement;
                //     arrowParent.classList.toggle("showMenu");
                //     console.log('arrow')
                //   });
                // }

            }

        },
    };
</script>

<style lang="scss" scoped>
    .navbar .profile-details {
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 6px;
        transition: all 0.4s ease;
    }

    .profile-details .profile_content {
        display: flex;
        align-items: center;
    }

    .profile-details img {
        height: 40px;
        width: 40px;
        object-fit: cover;
          border-radius: 50%;
        transition: all 0.5s ease;
        background: red;
    }

    .profile-details .profile_name,
    .profile-details .job {
        color: #fff;
        font-size: 12px;
    }
</style>