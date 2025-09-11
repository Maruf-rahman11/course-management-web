
 const scrollToNavbar = () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      // Using smooth scroll behavior
      navbar.scrollIntoView({ behavior: 'smooth' });
    }
  };
  export default scrollToNavbar;



