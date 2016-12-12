let selectedRivers = []

$('.river').click(function() {
	let clickedId = parseInt($(this).attr('data-id'))
	// if clicked river already selected
	if (selectedRivers.indexOf(clickedId) >= 0) {
		// remove selected style
		$(this).removeClass('selected')
		// and drop river from array
		selectedRivers.splice(selectedRivers.indexOf(clickedId), 1)
	}
	else {
		if (selectedRivers.length < 3) {
			// add selected style
			$(this).addClass('selected')
			selectedRivers.push(clickedId)
		} else {
			//alert('More than 3 selected!')
			$(this).animate({ backgroundColor: '#f99', color: '#fff' }, 200,
				function () { 
					$(this).animate({ backgroundColor: '#fff', color: '#000' },
						200)
				}
			)
		}
	}
})

$('#clear-btn').click(function () {
	restoreDefault()
	$('.selected').each(function () {
		$(this).removeClass('selected')
	})
	selectedRivers = []
})

$('#go-btn').click(function () {
    location.href='./vizrivers.html?rivers='+selectedRivers.toString();
});

$('.river').hover(function() {
	let hoveredId = $(this).attr('data-id')
	restoreDefault()
	setPrevID(hoveredId)
	display3(hoveredId)
})