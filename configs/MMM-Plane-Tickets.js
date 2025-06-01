Module.register("MMM-Plane-Tickets",{
	// Default module config.
	defaults: {
	},

	// Update function
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.style = "margin: 50px;";

		var title = document.createElement("div");
		title.style = "text-align: center; font-size: 60px;";
		title.className = "bright";
		title.innerHTML="Best prices for a next adventure...";

		/* barcelona */

		var barcelona = document.createElement("div");
		barcelona.style = "margin-top: 40px; font-size: 40px; color: #FFAA00;";
		barcelona.className = "bright";
		barcelona.innerHTML="Barcelona";

		var barcelonaFirst = document.createElement("div");

		var barcelonaFirstDates = document.createElement("div");
		barcelonaFirstDates.style = "float: left; font-size: 40px;";
		barcelonaFirstDates.className = "medium bright";
		barcelonaFirstDates.innerHTML="Dec 20 - Dec 24";

		var barcelonaFirstPrice = document.createElement("div");
		barcelonaFirstPrice.style = "float: right; font-size: 40px;";
		barcelonaFirstPrice.className = "medium bright";
		barcelonaFirstPrice.innerHTML="64 €";

		barcelonaFirst.appendChild(barcelonaFirstDates);
		barcelonaFirst.appendChild(barcelonaFirstPrice);

		var barcelonaSecond = document.createElement("div");
		barcelonaSecond.style = "margin-top: 20px;";
		barcelonaSecond.style = "clear: both;";

		var barcelonaSecondDates = document.createElement("div");
		barcelonaSecondDates.style = "float: left;";
		barcelonaSecondDates.className = "medium";
		barcelonaSecondDates.innerHTML="Dec 19 - Dec 24";

		var barcelonaSecondPrice = document.createElement("div");
		barcelonaSecondPrice.style = "float: right;";
		barcelonaSecondPrice.className = "medium";
		barcelonaSecondPrice.innerHTML="64 €";

		barcelonaSecond.appendChild(barcelonaSecondDates);
		barcelonaSecond.appendChild(barcelonaSecondPrice);

		var barcelonaThird = document.createElement("div");
		barcelonaThird.style = "margin-top: 20px;";
		barcelonaThird.style = "clear: both;";

		var barcelonaThirdDates = document.createElement("div");
		barcelonaThirdDates.style = "float: left;";
		barcelonaThirdDates.className = "medium";
		barcelonaThirdDates.innerHTML="Dec 20 - Dec 25";

		var barcelonaThirdPrice = document.createElement("div");
		barcelonaThirdPrice.style = "float: right;";
		barcelonaThirdPrice.className = "medium";
		barcelonaThirdPrice.innerHTML="74 €";

		barcelonaThird.appendChild(barcelonaThirdDates);
		barcelonaThird.appendChild(barcelonaThirdPrice);

		/* bangkok */

		var bangkok = document.createElement("div");
		bangkok.style = "margin-top: 80px; font-size: 40px; color: #FFAA00;";
		bangkok.className = "bright";
		bangkok.innerHTML="Bangkok";

		var bangkokFirst = document.createElement("div");

		var bangkokFirstDates = document.createElement("div");
		bangkokFirstDates.style = "float: left; font-size: 40px;";
		bangkokFirstDates.className = "medium bright";
		bangkokFirstDates.innerHTML="Dec 18 - Dec 31";

		var bangkokFirstPrice = document.createElement("div");
		bangkokFirstPrice.style = "float: right; font-size: 40px;";
		bangkokFirstPrice.className = "medium bright";
		bangkokFirstPrice.innerHTML="1127 €";

		bangkokFirst.appendChild(bangkokFirstDates);
		bangkokFirst.appendChild(bangkokFirstPrice);

		var bangkokSecond = document.createElement("div");
		bangkokSecond.style = "margin-top: 20px;";
		bangkokSecond.style = "clear: both;";

		var bangkokSecondDates = document.createElement("div");
		bangkokSecondDates.style = "float: left;";
		bangkokSecondDates.className = "medium";
		bangkokSecondDates.innerHTML="Dec 19 - Jan 01";

		var bangkokSecondPrice = document.createElement("div");
		bangkokSecondPrice.style = "float: right;";
		bangkokSecondPrice.className = "medium";
		bangkokSecondPrice.innerHTML="1130 €";

		bangkokSecond.appendChild(bangkokSecondDates);
		bangkokSecond.appendChild(bangkokSecondPrice);

		var bangkokThird = document.createElement("div");
		bangkokThird.style = "margin-top: 20px;";
		bangkokThird.style = "clear: both;";

		var bangkokThirdDates = document.createElement("div");
		bangkokThirdDates.style = "float: left;";
		bangkokThirdDates.className = "medium";
		bangkokThirdDates.innerHTML="Dec 24 - Dec 31";

		var bangkokThirdPrice = document.createElement("div");
		bangkokThirdPrice.style = "float: right;";
		bangkokThirdPrice.className = "medium";
		bangkokThirdPrice.innerHTML="1200 €";

		bangkokThird.appendChild(bangkokThirdDates);
		bangkokThird.appendChild(bangkokThirdPrice);

		/* newyork */

		var newyork = document.createElement("div");
		newyork.style = "margin-top: 80px; font-size: 40px; color: #FFAA00;";
		newyork.className = "bright";
		newyork.innerHTML="New York";

		var newyorkFirst = document.createElement("div");

		var newyorkFirstDates = document.createElement("div");
		newyorkFirstDates.style = "float: left; font-size: 40px;";
		newyorkFirstDates.className = "medium bright";
		newyorkFirstDates.innerHTML="Dec 19 - Dec 30";

		var newyorkFirstPrice = document.createElement("div");
		newyorkFirstPrice.style = "float: right; font-size: 40px;";
		newyorkFirstPrice.className = "medium bright";
		newyorkFirstPrice.innerHTML="394 €";

		newyorkFirst.appendChild(newyorkFirstDates);
		newyorkFirst.appendChild(newyorkFirstPrice);

		var newyorkSecond = document.createElement("div");
		newyorkSecond.style = "margin-top: 20px;";
		newyorkSecond.style = "clear: both;";

		var newyorkSecondDates = document.createElement("div");
		newyorkSecondDates.style = "float: left;";
		newyorkSecondDates.className = "medium";
		newyorkSecondDates.innerHTML="Dec 18 - Dec 30";

		var newyorkSecondPrice = document.createElement("div");
		newyorkSecondPrice.style = "float: right;";
		newyorkSecondPrice.className = "medium";
		newyorkSecondPrice.innerHTML="430 €";

		newyorkSecond.appendChild(newyorkSecondDates);
		newyorkSecond.appendChild(newyorkSecondPrice);

		var newyorkThird = document.createElement("div");
		newyorkThird.style = "margin-top: 20px;";
		newyorkThird.style = "clear: both;";

		var newyorkThirdDates = document.createElement("div");
		newyorkThirdDates.style = "float: left;";
		newyorkThirdDates.className = "medium";
		newyorkThirdDates.innerHTML="Dec 21 - Dec 30";

		var newyorkThirdPrice = document.createElement("div");
		newyorkThirdPrice.style = "float: right;";
		newyorkThirdPrice.className = "medium";
		newyorkThirdPrice.innerHTML="433 €";

		newyorkThird.appendChild(newyorkThirdDates);
		newyorkThird.appendChild(newyorkThirdPrice);

		/* tokyo */

		var tokyo = document.createElement("div");
		tokyo.style = "margin-top: 80px; font-size: 40px; color: #FFAA00;";
		tokyo.className = "bright";
		tokyo.innerHTML="Tokyo";

		var tokyoFirst = document.createElement("div");

		var tokyoFirstDates = document.createElement("div");
		tokyoFirstDates.style = "float: left; font-size: 40px;";
		tokyoFirstDates.className = "medium bright";
		tokyoFirstDates.innerHTML="Dec 20 - Dec 30";

		var tokyoFirstPrice = document.createElement("div");
		tokyoFirstPrice.style = "float: right; font-size: 40px;";
		tokyoFirstPrice.className = "medium bright";
		tokyoFirstPrice.innerHTML="1058 €";

		tokyoFirst.appendChild(tokyoFirstDates);
		tokyoFirst.appendChild(tokyoFirstPrice);

		var tokyoSecond = document.createElement("div");
		tokyoSecond.style = "margin-top: 20px;";
		tokyoSecond.style = "clear: both;";

		var tokyoSecondDates = document.createElement("div");
		tokyoSecondDates.style = "float: left;";
		tokyoSecondDates.className = "medium";
		tokyoSecondDates.innerHTML="Dec 20 - Dec 31";

		var tokyoSecondPrice = document.createElement("div");
		tokyoSecondPrice.style = "float: right;";
		tokyoSecondPrice.className = "medium";
		tokyoSecondPrice.innerHTML="1058 €";

		tokyoSecond.appendChild(tokyoSecondDates);
		tokyoSecond.appendChild(tokyoSecondPrice);

		var tokyoThird = document.createElement("div");
		tokyoThird.style = "margin-top: 20px;";
		tokyoThird.style = "clear: both;";

		var tokyoThirdDates = document.createElement("div");
		tokyoThirdDates.style = "float: left;";
		tokyoThirdDates.className = "medium";
		tokyoThirdDates.innerHTML="Dec 19 - Dec 30";

		var tokyoThirdPrice = document.createElement("div");
		tokyoThirdPrice.style = "float: right;";
		tokyoThirdPrice.className = "medium";
		tokyoThirdPrice.innerHTML="1071 €";

		tokyoThird.appendChild(tokyoThirdDates);
		tokyoThird.appendChild(tokyoThirdPrice);

		/* hongkong */

		var hongkong = document.createElement("div");
		hongkong.style = "margin-top: 80px; font-size: 40px; color: #FFAA00;";
		hongkong.className = "bright";
		hongkong.innerHTML="Hong Kong";

		var hongkongFirst = document.createElement("div");

		var hongkongFirstDates = document.createElement("div");
		hongkongFirstDates.style = "float: left; font-size: 40px;";
		hongkongFirstDates.className = "medium bright";
		hongkongFirstDates.innerHTML="Dec 19 - Jan 01";

		var hongkongFirstPrice = document.createElement("div");
		hongkongFirstPrice.style = "float: right; font-size: 40px;";
		hongkongFirstPrice.className = "medium bright";
		hongkongFirstPrice.innerHTML="1134 €";

		hongkongFirst.appendChild(hongkongFirstDates);
		hongkongFirst.appendChild(hongkongFirstPrice);

		var hongkongSecond = document.createElement("div");
		hongkongSecond.style = "margin-top: 20px;";
		hongkongSecond.style = "clear: both;";

		var hongkongSecondDates = document.createElement("div");
		hongkongSecondDates.style = "float: left;";
		hongkongSecondDates.className = "medium";
		hongkongSecondDates.innerHTML="Dec 23 - Dec 31";

		var hongkongSecondPrice = document.createElement("div");
		hongkongSecondPrice.style = "float: right;";
		hongkongSecondPrice.className = "medium";
		hongkongSecondPrice.innerHTML="1185 €";

		hongkongSecond.appendChild(hongkongSecondDates);
		hongkongSecond.appendChild(hongkongSecondPrice);

		var hongkongThird = document.createElement("div");
		hongkongThird.style = "margin-top: 20px;";
		hongkongThird.style = "clear: both;";

		var hongkongThirdDates = document.createElement("div");
		hongkongThirdDates.style = "float: left;";
		hongkongThirdDates.className = "medium";
		hongkongThirdDates.innerHTML="Dec 22 - Dec 30";

		var hongkongThirdPrice = document.createElement("div");
		hongkongThirdPrice.style = "float: right;";
		hongkongThirdPrice.className = "medium";
		hongkongThirdPrice.innerHTML="1218 €";

		hongkongThird.appendChild(hongkongThirdDates);
		hongkongThird.appendChild(hongkongThirdPrice);

		/* sanfrancisco */

		var sanfrancisco = document.createElement("div");
		sanfrancisco.style = "margin-top: 80px; font-size: 40px; color: #FFAA00;";
		sanfrancisco.className = "bright";
		sanfrancisco.innerHTML="San Francisco";

		var sanfranciscoFirst = document.createElement("div");

		var sanfranciscoFirstDates = document.createElement("div");
		sanfranciscoFirstDates.style = "float: left; font-size: 40px;";
		sanfranciscoFirstDates.className = "medium bright";
		sanfranciscoFirstDates.innerHTML="Dec 20 - Dec 28";

		var sanfranciscoFirstPrice = document.createElement("div");
		sanfranciscoFirstPrice.style = "float: right; font-size: 40px;";
		sanfranciscoFirstPrice.className = "medium bright";
		sanfranciscoFirstPrice.innerHTML="694 €";

		sanfranciscoFirst.appendChild(sanfranciscoFirstDates);
		sanfranciscoFirst.appendChild(sanfranciscoFirstPrice);

		var sanfranciscoSecond = document.createElement("div");
		sanfranciscoSecond.style = "margin-top: 20px;";
		sanfranciscoSecond.style = "clear: both;";

		var sanfranciscoSecondDates = document.createElement("div");
		sanfranciscoSecondDates.style = "float: left;";
		sanfranciscoSecondDates.className = "medium";
		sanfranciscoSecondDates.innerHTML="Dec 20 - Dec 30";

		var sanfranciscoSecondPrice = document.createElement("div");
		sanfranciscoSecondPrice.style = "float: right;";
		sanfranciscoSecondPrice.className = "medium";
		sanfranciscoSecondPrice.innerHTML="704 €";

		sanfranciscoSecond.appendChild(sanfranciscoSecondDates);
		sanfranciscoSecond.appendChild(sanfranciscoSecondPrice);

		var sanfranciscoThird = document.createElement("div");
		sanfranciscoThird.style = "margin-top: 20px;";
		sanfranciscoThird.style = "clear: both;";

		var sanfranciscoThirdDates = document.createElement("div");
		sanfranciscoThirdDates.style = "float: left;";
		sanfranciscoThirdDates.className = "medium";
		sanfranciscoThirdDates.innerHTML="Dec 20 - Dec 26";

		var sanfranciscoThirdPrice = document.createElement("div");
		sanfranciscoThirdPrice.style = "float: right;";
		sanfranciscoThirdPrice.className = "medium";
		sanfranciscoThirdPrice.innerHTML="711 €";

		sanfranciscoThird.appendChild(sanfranciscoThirdDates);
		sanfranciscoThird.appendChild(sanfranciscoThirdPrice);

		/* shanghai */

		var shanghai = document.createElement("div");
		shanghai.style = "margin-top: 80px; font-size: 40px; color: #FFAA00;";
		shanghai.className = "bright";
		shanghai.innerHTML="Shanghai";

		var shanghaiFirst = document.createElement("div");

		var shanghaiFirstDates = document.createElement("div");
		shanghaiFirstDates.style = "float: left; font-size: 40px;";
		shanghaiFirstDates.className = "medium bright";
		shanghaiFirstDates.innerHTML="Dec 18 - Dec 30";

		var shanghaiFirstPrice = document.createElement("div");
		shanghaiFirstPrice.style = "float: right; font-size: 40px;";
		shanghaiFirstPrice.className = "medium bright";
		shanghaiFirstPrice.innerHTML="1061 €";

		shanghaiFirst.appendChild(shanghaiFirstDates);
		shanghaiFirst.appendChild(shanghaiFirstPrice);

		var shanghaiSecond = document.createElement("div");
		shanghaiSecond.style = "margin-top: 20px;";
		shanghaiSecond.style = "clear: both;";

		var shanghaiSecondDates = document.createElement("div");
		shanghaiSecondDates.style = "float: left;";
		shanghaiSecondDates.className = "medium";
		shanghaiSecondDates.innerHTML="Dec 18 - Dec 31";

		var shanghaiSecondPrice = document.createElement("div");
		shanghaiSecondPrice.style = "float: right;";
		shanghaiSecondPrice.className = "medium";
		shanghaiSecondPrice.innerHTML="1061 €";

		shanghaiSecond.appendChild(shanghaiSecondDates);
		shanghaiSecond.appendChild(shanghaiSecondPrice);

		var shanghaiThird = document.createElement("div");
		shanghaiThird.style = "margin-top: 20px;";
		shanghaiThird.style = "clear: both;";

		var shanghaiThirdDates = document.createElement("div");
		shanghaiThirdDates.style = "float: left;";
		shanghaiThirdDates.className = "medium";
		shanghaiThirdDates.innerHTML="Dec 18 - Dec 28";

		var shanghaiThirdPrice = document.createElement("div");
		shanghaiThirdPrice.style = "float: right;";
		shanghaiThirdPrice.className = "medium";
		shanghaiThirdPrice.innerHTML="1062 €";

		shanghaiThird.appendChild(shanghaiThirdDates);
		shanghaiThird.appendChild(shanghaiThirdPrice);

		/* seoul */

		var seoul = document.createElement("div");
		seoul.style = "margin-top: 80px; font-size: 40px; color: #FFAA00;";
		seoul.className = "bright";
		seoul.innerHTML="Seoul";

		var seoulFirst = document.createElement("div");

		var seoulFirstDates = document.createElement("div");
		seoulFirstDates.style = "float: left; font-size: 40px;";
		seoulFirstDates.className = "medium bright";
		seoulFirstDates.innerHTML="Dec 21 - Dec 31";

		var seoulFirstPrice = document.createElement("div");
		seoulFirstPrice.style = "float: right; font-size: 40px;";
		seoulFirstPrice.className = "medium bright";
		seoulFirstPrice.innerHTML="987 €";

		seoulFirst.appendChild(seoulFirstDates);
		seoulFirst.appendChild(seoulFirstPrice);

		var seoulSecond = document.createElement("div");
		seoulSecond.style = "margin-top: 20px;";
		seoulSecond.style = "clear: both;";

		var seoulSecondDates = document.createElement("div");
		seoulSecondDates.style = "float: left;";
		seoulSecondDates.className = "medium";
		seoulSecondDates.innerHTML="Dec 24 - Dec 31";

		var seoulSecondPrice = document.createElement("div");
		seoulSecondPrice.style = "float: right;";
		seoulSecondPrice.className = "medium";
		seoulSecondPrice.innerHTML="995 €";

		seoulSecond.appendChild(seoulSecondDates);
		seoulSecond.appendChild(seoulSecondPrice);

		var seoulThird = document.createElement("div");
		seoulThird.style = "margin-top: 20px;";
		seoulThird.style = "clear: both;";

		var seoulThirdDates = document.createElement("div");
		seoulThirdDates.style = "float: left;";
		seoulThirdDates.className = "medium";
		seoulThirdDates.innerHTML="Dec 24 - Jan 01";

		var seoulThirdPrice = document.createElement("div");
		seoulThirdPrice.style = "float: right;";
		seoulThirdPrice.className = "medium";
		seoulThirdPrice.innerHTML="995 €";

		seoulThird.appendChild(seoulThirdDates);
		seoulThird.appendChild(seoulThirdPrice);

		/* -- */

		//wrapper.appendChild(title);

		wrapper.appendChild(barcelona);
		wrapper.appendChild(barcelonaFirst);
		wrapper.appendChild(barcelonaSecond);
		wrapper.appendChild(barcelonaThird);

		wrapper.appendChild(bangkok);
		wrapper.appendChild(bangkokFirst);
		wrapper.appendChild(bangkokSecond);
		wrapper.appendChild(bangkokThird);

		wrapper.appendChild(tokyo);
		wrapper.appendChild(tokyoFirst);
		wrapper.appendChild(tokyoSecond);
		wrapper.appendChild(tokyoThird);

		wrapper.appendChild(hongkong);
		wrapper.appendChild(hongkongFirst);
		wrapper.appendChild(hongkongSecond);
		wrapper.appendChild(hongkongThird);

		wrapper.appendChild(shanghai);
		wrapper.appendChild(shanghaiFirst);
		wrapper.appendChild(shanghaiSecond);
		wrapper.appendChild(shanghaiThird);

		wrapper.appendChild(seoul);
		wrapper.appendChild(seoulFirst);
		wrapper.appendChild(seoulSecond);
		wrapper.appendChild(seoulThird);

		wrapper.appendChild(newyork);
		wrapper.appendChild(newyorkFirst);
		wrapper.appendChild(newyorkSecond);
		wrapper.appendChild(newyorkThird);

		wrapper.appendChild(sanfrancisco);
		wrapper.appendChild(sanfranciscoFirst);
		wrapper.appendChild(sanfranciscoSecond);
		wrapper.appendChild(sanfranciscoThird);

		return wrapper;
	}
});
