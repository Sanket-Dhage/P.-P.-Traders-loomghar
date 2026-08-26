<html>
<script>
	$('.portfolio-item').isotope({
		
  itemSelector: '.item',
  layoutMode: 'fitRows'
});
		$('.portfolio-menu ul li').click(function(){
		$('.portfolio-menu ul li').removeClass('active');
		$(this).addClass('active');

			var selector = $(this).attr('data-filter');
		$('.portfolio-item').isotope({
			filter:selector
		});
		return false;
	});
</script>

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
  AOS.init();

</script>
</html>