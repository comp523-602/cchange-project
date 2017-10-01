$(document).ready(function () {
	makeTOC();
});

var makeTOC = function () {

	// Setup headers array
	var headers = [];

	// Add IDs to headers, populate array
	$(".content h2").each(function () {

		// Make ID for header
		var id = $(this).text().replace(/\s+/g, '-').toLowerCase();

		// Add id to header
		$(this).attr('id', id);

		// Push header into array
		headers.push($(this));
	});

	// Make HTML
	var toc = "";
	for (var i in headers) {
		toc += "<a href='#"+headers[i].attr('id')+"'>"+headers[i].text()+"</a>";
	}

	// Put HTML in TOC
	$("#toc").html(toc);

};