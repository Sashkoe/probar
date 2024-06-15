
<script>
  document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".benefits-title", { duration: 1, y: -50, opacity: 0, ease: "power3.out" });
    gsap.from(".benefits-item", {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out"
    });
    gsap.from(".benefits-icon", {
      duration: 1,
      scale: 0,
      opacity: 0,
      stagger: 0.2,
      ease: "elastic.out(1, 0.3)"
    });
  });
</script>