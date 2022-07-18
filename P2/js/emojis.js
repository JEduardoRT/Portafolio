(function ($) {
    "use strict";
	var jsonData;
	var codigo;
	var contenedor;
	fetch("https://emojihub.herokuapp.com/api/all")
      .then(response => response.text())
      .then(data => { 
        jsonData = JSON.parse(data);
        contenedor = document.querySelector('div.emoji-container')
		for (var i = 0; i < jsonData.length; i++) { 
			codigo = jsonData[i].htmlCode[0];
			contenedor.innerHTML += `<p>${codigo}</p>`
		}
      }); 
})(jQuery);