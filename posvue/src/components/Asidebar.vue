<template>
   <div class="sidebar">
      <div class="logo-details">
        <!-- icon -->
        <i class="bx bx-grid-alt"></i>
        <span class="logo_name">Company</span>
      </div>

      <!-- WATCHLIST -->
      <div class="watch">
        <div class="watch-title">WATCHLIST</div>
      <div class="Watch-details" style="margin-top: 5px;">
        <div class="watch-content">
          <div class="branch_name">Branch E</div>
          <div class="branch_id">123213</div>
        </div>
        <p class="watch-profit">+3.45%</p>
      </div>
      <div class="Watch-details">
        <div class="watch-content">
          <div class="branch_name">Branch C</div>
          <div class="branch_id">127454</div>
        </div>
        <p class="watch-loss">-3.45%</p>
      </div>
      </div>

      <ul class="nav-links">
        <div class="nav-title">MAIN MENU</div>
        <li>
          <a href="#">
            <!-- icon -->
            <i class="bx bx-tachometer has-text-black"></i>
            <span class="link_name">Dashboard</span>
          </a>
          <ul class="sub-menu blank">
            <li><a class="link_name" href="#">Dashboard</a></li>
          </ul>
        </li>

        <li>
          <div class="iocn-link">
            <a href="#">
              <!-- icon -->
              <i class="bx bx-bar-chart has-text-black"></i>
              <span class="link_name">Products</span>
            </a>
            <!-- dropdown icon  -->
            <i class="bx bxs-chevron-down arrow" @click='handleStyles'></i>
            
          </div>

          <ul class="sub-menu">
            <li><a class="link_name" href="#">Products</a></li>
            <li><a href="#" class='pl-2'>web design</a></li>
            <li><a href="#" class='pl-2'>web design</a></li>
            <li><a href="#" class='pl-2'>web design</a></li>
          </ul>
        </li>

        <li>
          <div class="iocn-link">
            <a href="#">
              <!-- icon -->
              <i class="bx bx-chart has-text-black"></i>
              <span class="link_name">Customers</span>
            </a>
            <!-- dropdown icon  -->
                        <i class="bx bxs-chevron-down arrow"></i>

          </div>
          <ul class="sub-menu">
            <li><a class="link_name" href="#">Customers</a></li>
            <li><a href="#" class='pl-2'>web design</a></li>
            <li><a href="#" class='pl-2'>web design</a></li>
            <li><a href="#" class='pl-2'>web design</a></li>
          </ul>
        </li>

         <li>
          <div class="iocn-link">
            <a href="#">
              <!-- icon -->
              <i class="bx bxs-business has-text-black"></i>
              <span class="link_name">Branches</span>
            </a>
            <!-- dropdown icon  -->
                        <i class="bx bxs-chevron-down arrow"></i>

          </div>
          <ul class="sub-menu">
            <li><a class="link_name" href="#">Branches</a></li>
            <li><a href="#" class='pl-2'>web design</a></li>
            <li><a href="#" class='pl-2'>web design</a></li>
            <li><a href="#" class='pl-2'>web design</a></li>
          </ul>
        </li>


        <li>
          <div class="iocn-link">
            <a href="#">
              <!-- icon -->
              <i class="bx bx-spreadsheet has-text-black"></i>
              <span class="link_name">Reports</span>
            </a>
            <!-- dropdown icon  -->
                        <i class="bx bxs-chevron-down arrow"></i>

          </div>
          <ul class="sub-menu">
            <li><a class="link_name" href="#">Reports</a></li>
            <li><a href="#" class='pl-2'>web design</a></li>
            <li><a href="#" class='pl-2'>web design</a></li>
            <li><a href="#" class='pl-2'>web design</a></li>
          </ul>
        </li>

        <li>
          <div class="iocn-link">
            <a href="#">
              <!-- icon -->
              <i class="bx bx-select-multiple has-text-black"></i>
              <span class="link_name">Employees</span>
            </a>
            <!-- dropdown icon  -->
            <i class="bx bxs-chevron-down arrow"></i>
          </div>
          <ul class="sub-menu">
            <li><a class="link_name" href="#">Employees</a></li>
            <li><a href="#" class='pl-2'>web design</a></li>
            <li><a href="#" class='pl-2'>web design</a></li>
            <li><a href="#" class='pl-2'>web design</a></li>
          </ul>
        </li>


        <li>
          <a href="#">
            <!-- icon -->
            <i class="bx bx-cog has-text-black"></i>
            <span class="link_name">Settings</span>
          </a>
          <ul class="sub-menu blank">
            <li><a class="link_name" href="#">Settings</a></li>
          </ul>
        </li>
        <li>
          <div class="profile-details">
            
            <!-- logout icon  -->
            <i class="bx bx-log-out"></i>
            <div class="name-job">
              <div class="profile_name">Dark Mode</div>
            </div>
            <div class="profile-content">
              <img id="slideout" v-bind:src="darkmode" alt="img" @click="updateImage" />
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
  name: "Asidebar",
  data(){
    return{
      darkmode: require("../assets/LandSwitchLightlight.svg"),
    }
  },
  methods: {
    
    updateImage(){
      
      console.log('dark')
      if (this.darkmode===require("../assets/LandSwitchLightlight.svg")){
        this.darkmode= require("../assets/LandSwitchDark.svg")
      }
      else{
        this.darkmode=require("../assets/LandSwitchLightlight.svg")
      }
      var slider= document.getElementById("slideout");
      slider.className +=" slideout";
      setTimeout(function(){
        slider.classList.remove("slideout")
      },100);
    }
            // handleStyles() {
            //     console.log('handlestyles');

            //     // let sidebar = document.querySelector(".sidebar");
            //     // let menu = document.querySelector(".menu");
            //     // console.log(menu);
            //     // sidebar.classList.toggle("close");
            //     // console.log('menu');


            //     let arrow = document.querySelectorAll(".arrow");(e) => {
            //         let arrowParent = e.target.parentElement.parentElement;
            //         arrowParent.classList.toggle("showMenu");
            //         console.log('arrow')
            //     }

            // }

        },
};
</script>
<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 260px;
  background: linear-gradient(177.08deg, #892bda -7.99%, #9362f7 118.63%);
  z-index: 100;
  transition: all 0.5s ease;
}
.sidebar.close {
  width: 78px;
}
.sidebar .watch {
  margin-top: 30px;
}
.sidebar.close .watch {
  display: none;
  transition: all 0.5s ease;

}
.sidebar .watch .watch-title {
  margin: 0 30px;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #c4c4c4;
}
.sidebar .Watch-details {
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #c4c4c480;
  padding: 10px 10px;
  transition: all 0.5s ease;
  margin: 10px 30px;
  border-radius: 10px;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.05em;
  color: #000000;
}
.sidebar .Watch-details .branch_id{
  color: #24242490;

}
.sidebar .watch .watch-profit {
  color: #24ff00;
}
.sidebar .watch .watch-loss {
  color: #ff0000;
}

.sidebar .logo-details {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
}

.sidebar .logo-details i {
  font-size: 30px;
  color: #fff;
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
}

.sidebar .logo-details .logo_name {
  font-size: 25px;
  color: #fff;
  font-weight: 600;
  transition: 0.5s ease;
  transition-delay: 0.1s;
}

.sidebar.close .logo-details .logo_name {
  transition-delay: 0s;
  opacity: 0;
  pointer-events: none;
}
.sidebar .nav-links {
  height: 75%;
  padding: 10px 0 150px 0;
  overflow: auto;
  margin-top: 0;
}
.sidebar.close .nav-links {
  overflow: visible;
}

.sidebar .nav-links::-webkit-scrollbar {
    display: none;
  }

.sidebar .nav-links .nav-title {
  margin: 0 30px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #c4c4c4;
}
.sidebar.close .nav-links .nav-title{
  display: none;

}


.sidebar .nav-links li {
  position: relative;
  list-style: none;
  transition: all 0.4s ease;
}
.sidebar .nav-links li:hover {
  border-radius:20px;
  background: rgba(196, 196, 196, 0.18);
border: 1px solid rgba(196, 196, 196, 0.3);
/*margin: 0 5px;*/

}
.sidebar .nav-links li:hover .link_name {
  color: #000000;
}

.sidebar.close .nav-links li:hover .link_name {
    color: #c4c4c4;
}

.sidebar.close .nav-links li:hover{
  background: linear-gradient(177.08deg, #9362f7 -7.99%, #892bda 118.63%);
  border-radius:2px;
  border: 0;


}
.sidebar .nav-links li .iocn-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sidebar.close .nav-links li .iocn-link {
  display: block;
}

.sidebar .nav-links li i {
  height: 40px;
  min-width: 78px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.5s ease;
}


.sidebar.close .nav-links li i{
  line-height: 50px;
  height: 50px;


}

.sidebar .nav-links li.showMenu i.arrow {
  transform: rotate(-180deg);
  color: black;
}
.sidebar.close .nav-links i.arrow {
  display: none;
}
.sidebar .nav-links li a {
  display: flex;
  align-items: center;
  text-decoration: none;
  padding:0 5px;

}

.sidebar .nav-links li a .link_name {
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */
  letter-spacing: 0.05em;
  color: #c4c4c4;
  transition: all 0.4s ease;

}

.sidebar.close .nav-links li a .link_name {
  opacity: 0;
  pointer-events: none;
}
.sidebar .nav-links li .sub-menu {
  padding: 6px 6px 14px 80px;
  margin-top: -10px;
  display: none;
}
.sidebar.close .nav-links li .sub-menu{
  background: linear-gradient(177.08deg, #9362f7 -7.99%, #892bda 118.63%);

}

.sidebar .nav-links li.showMenu .sub-menu {
  display: block;
}

.sidebar .nav-links li .sub-menu a {
  color: #fff;
  font-size: 15px;
  padding: 5px;
  white-space: nowrap;
  opacity: 0.6;
  border-radius:20px;
  transition: all 0.3s ease;
}

.sidebar .nav-links li .sub-menu a:hover {
  opacity: 1;

}

.sidebar.close .nav-links li .sub-menu {
  position: absolute;
  left: 100%;
  top: -10px;
  margin-top: 0;
  padding: 10px 20px;
  border-radius: 0 6px 6px 0;
  opacity: 0;
  display: block;
  pointer-events: none;
  transition: 0s;
}

.sidebar.close .nav-links li:hover .sub-menu {
  top: 0;
  opacity: 1;
  pointer-events: auto;
  transition: all 0.5s ease;
}

.sidebar .nav-links li .sub-menu .link_name {
  display: none;
}
.sidebar.close .nav-links li .sub-menu .link_name {
  display: none;
}

.sidebar.close .nav-links li .sub-menu .link_name {
  font-size: 18px;
  opacity: 1;
  display: block;
}

.sidebar .nav-links li .sub-menu.blank {
  opacity: 1;
  pointer-events: auto;
  padding: 3px 20px 6px 16px;
  opacity: 0;
  pointer-events: none;
}

.sidebar .nav-links li:hover .sub-menu.blank {
  top: 50%;
  transform: translateY(-50%);
}

.sidebar .profile-details {
  position: fixed;
  bottom: 0;
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(177.08deg, #9362f7 -7.99%, #892bda 118.63%);
  padding: 0 0 6px 2px;
  transition: all 0.5s ease;
}
.sidebar.close .profile-details {
  width: 78px;
  background: none;
}

.sidebar .profile-details .profile_content {
  display: flex;
  align-items: center;
}
.sidebar .profile-details img {
  height: 1.2em;
  object-fit: cover;
  margin: 0 15px 0 14px;
  transition: all 0.6s ease;
  cursor:pointer;


}

.sidebar.close .profile-details img {
  cursor:pointer;
}

.sidebar .profile-details .profile_name,
.sidebar .profile-details .job {
  color: #c4c4c4;
  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;
}

.sidebar.close .profile-details i,
.sidebar.close .profile-details .profile_name,
.sidebar.close .profile-details .job {
  display: none;
}

.sidebar .profile-details .job {
  font-size: 11px;
}

/* slide fade out */
    .slideout{
      /* animation: 1s ease-in 0s 1 slideInFromLeft; */
      animation: fade 1s ease-in-out;
    }
    @keyframes fade {
      from{
        opacity: 0;
      }
      to{
        opacity: 1;
      }
    }
</style>
