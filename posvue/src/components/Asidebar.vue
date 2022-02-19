<template>
  <div class="sidebar">
    <div class="logo-details">
      <!-- icon -->
      <i>P</i>
      <span class="logo_name">Company</span>
    </div>

    <ul class="nav-links">
      <li>
        <a href="#">
          <!-- icon -->
          <i>D</i>
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
            <i>C</i>
            <span class="link_name">Category</span>
          </a>
          <!-- dropdown icon  -->
          <i class="arrow">s</i>
        </div>

        <ul class="sub-menu">
          <li><a class="link_name" href="#">Category</a></li>
          <li><a href="#">web design</a></li>
          <li><a href="#">web design</a></li>
          <li><a href="#">web design</a></li>
        </ul>
      </li>

      <li>
        <div class="iocn-link">
          <a href="#">
            <!-- icon -->
            <i>P</i>
            <span class="link_name">Posts</span>
          </a>
          <!-- dropdown icon  -->
          <i class="arrow">s</i>
        </div>
        <ul class="sub-menu">
          <li><a class="link_name" href="#">Posts</a></li>
          <li><a href="#">web design</a></li>
          <li><a href="#">web design</a></li>
          <li><a href="#">web design</a></li>
        </ul>
      </li>

      <li>
        <a href="#">
          <!-- icon -->
          <i>D</i>
          <span class="link_name">Analytics</span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="#">Analytics</a></li>
        </ul>
      </li>

      <li>
        <a href="#">
          <!-- icon -->
          <i>D</i>
          <span class="link_name">Chart</span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="#">Chart</a></li>
        </ul>
      </li>

      <li>
        <div class="iocn-link">
          <a href="#">
            <!-- icon -->
            <i>P</i>
            <span class="link_name">Plugins</span>
          </a>
          <!-- dropdown icon  -->
          <i class="arrow">s</i>
        </div>
        <ul class="sub-menu">
          <li><a class="link_name" href="#">Plugins</a></li>
          <li><a href="#">web design</a></li>
          <li><a href="#">web design</a></li>
          <li><a href="#">web design</a></li>
        </ul>
      </li>

      <li>
        <a href="#">
          <!-- icon -->
          <i>D</i>
          <span class="link_name">Explore</span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="#">Explore</a></li>
        </ul>
      </li>

      <li>
        <a href="#">
          <!-- icon -->
          <i>D</i>
          <span class="link_name">History</span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="#">History</a></li>
        </ul>
      </li>

      <li>
        <a href="#">
          <!-- icon -->
          <i>D</i>
          <span class="link_name">Settings</span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="#">Settings</a></li>
        </ul>
      </li>
      <li>
        <div class="profile-details">
          <div class="profile-content">
            <img src="#" alt="img" />
          </div>
          <div class="name-job">
            <div class="profile_name">Kelvin Principal</div>
            <div class="job">Web Designer</div>
          </div>
          <!-- logout icon  -->
          <i>L</i>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Asidebar",
};
</script>
