<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <div id="navbar-item" class="mt-3">
                <span class="icon">
                    <i class="bx bx-menu bx-lg menu" @click="handleStyles"></i>
                </span>
            </div>
            <!--search button-->
            <div class="navbar-start">
                <div class="navbar-item">
                    <form method="get" action="/search">
                        <div class="field ">
<!--search input-->
                            <div class="control is-flex">
                                <input type="text" class="input is-small is-rounded" placeholder="&#xebf7; Search..." name="query" />
                            </div>

<!--search input icon-->
                            <!-- <div class="control">
                                <button class="button">
                                    <span class="icon">
                                        <i class="bx bx-search"></i>
                                    </span>
                                </button>
                            </div> -->
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
               <!--<router-link to="/home" class="navbar-item">HOME</router-link>
                <router-link to="/about" class="navbar-item">ABOUT US</router-link>-->
                <router-link to="/about" class="navbar-item "><i class="bx bx-bell bx-sm "></i></router-link>
                
                               
                <div>
                    <div class="profile-details mr-6">
                        <div class="profile-content">
                            <img src="../assets/img/CRAZY_BAE.jpg" alt="img" />
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

input::placeholder{
  font-family: "boxicons";
  color: rgba(0, 0, 0, 0.809);
}
.navbar .profile-details {
        width: 105px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px 0 0 0;
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
        margin:0 .4em 0 0;
        
    }

    .profile-details .profile_name,
    .profile-details .job {
        color: #fff;
        font-size: 13px;
    }
    .navbar-item i.bx.bx-bell{
        position:'relative';
        width:40px;
    }
    .navbar-item i.bx.bx-bell::after{
        content:'9';
        position:absolute;
        background:#c4c4c4;
        width:20px;
        height:20px;
        border-radius:50%;
        border:2px solid #FF0000;
        bottom:20%;
        right:30%;
        font-size:12px;
        font-weight: 600;
        text-align:center;
        padding:1.5px 0;
    }
    a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover, a.navbar-item.is-active, .navbar-link:focus, .navbar-link:focus-within, .navbar-link:hover, .navbar-link.is-active {
    background-color: transparent;
    color: #ffffff;
    }
    ::placeholder{
        font-family:"Boxicon";
    }
</style>