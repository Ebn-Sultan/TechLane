const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.navigation-links');
  
    // فتح/إغلاق القائمة عند الضغط على الزر
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation(); // يمنع تفعيل الحدث العام
      navLinks.classList.toggle('active');
    });
  
    // إغلاق القائمة عند الضغط خارجها
    document.addEventListener('click', (e) => {
      const clickedInsideMenu = navLinks.contains(e.target);
      const clickedMenuToggle = menuToggle.contains(e.target);
  
      if (!clickedInsideMenu && !clickedMenuToggle) {
        navLinks.classList.remove('active');
      }
    });


const searchInput = document.querySelector("div.search-container input");

  searchInput.addEventListener("keydown", function(event) {
    console.log("Here")
    if (event.key === "Enter" && searchInput.value.length > 0) {
      window.location.href = "/index/SearchProduct.html";
    }
  });