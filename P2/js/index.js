var categoria = true;
var myChart1, myChart2;
var labs= [];
var dataSet= [];
var jsonData;
var grupos={};
let llamadoApi = () => {
	fetch("https://emojihub.herokuapp.com/api/all")
      .then(response => response.text())
      .then(data => { 
        jsonData = JSON.parse(data);
		
		for (var i = 0; i < jsonData.length; i++) { 
			if(categoria){
				if(grupos[jsonData[i].category] == null){
					grupos[jsonData[i].category] = 0;
				}else{
					grupos[jsonData[i].category] += 1;
				}
			}
			else {
				if(grupos[jsonData[i].group] == null){
					grupos[jsonData[i].group] = 0;
				}else{
					grupos[jsonData[i].group] += 1;
				}
			}
		}
		
		Object.entries(grupos).forEach((entry) => {
			const [key, value] = entry;
			labs[labs.length]=key;
			dataSet[dataSet.length]=value;
		});
		
		Chart.defaults.color = "#6C7293";
		Chart.defaults.borderColor = "#000000";

		// Single Bar Chart
		var ctx1 = $("#bar-chart").get(0).getContext("2d");
		myChart1 = new Chart(ctx1, {
			type: "bar",
			data: {
				labels: labs,
				datasets: [{
					backgroundColor: [
						"rgba(235, 22, 22, .7)"
					],
					data: dataSet
				}]
			},
			options: {
				responsive: true
			}
		});

		// Pie Chart Categoría
		var ctx2 = $("#pie-chart").get(0).getContext("2d");
		myChart2 = new Chart(ctx2, {
			type: "pie",
			data: {
				labels: labs,
				datasets: [{
					backgroundColor: [
						"rgba(235, 22, 22, .7)"
					],
					data: dataSet
				}]
			},
			options: {
				responsive: true
			}
		});
    });
}

let updateChart1 = () => {
	grupos={};
	labs=[];
	dataSet=[];
	fetch("https://emojihub.herokuapp.com/api/all")
      .then(response => response.text())
      .then(data => { 
        jsonData = JSON.parse(data);
		
		for (var i = 0; i < jsonData.length; i++) { 
			if(categoria){
				if(grupos[jsonData[i].category] == null){
					grupos[jsonData[i].category] = 0;
				}else{
					grupos[jsonData[i].category] += 1;
				}
			}
			else {
				if(grupos[jsonData[i].group] == null){
					grupos[jsonData[i].group] = 0;
				}else{
					grupos[jsonData[i].group] += 1;
				}
			}
		}

		Object.entries(grupos).forEach((entry) => {
			const [key, value] = entry;
			labs[labs.length]=key;
			dataSet[dataSet.length]=value;
		});

		myChart1.data.labels =  labs;
		myChart1.data.datasets[0].data =  dataSet;
		myChart1.update();
    });
}

let updateChart2 = () => {
	grupos={};
	labs=[];
	dataSet=[];
	fetch("https://emojihub.herokuapp.com/api/all")
      .then(response => response.text())
      .then(data => { 
        jsonData = JSON.parse(data);
		
		for (var i = 0; i < jsonData.length; i++) { 
			if(categoria){
				if(grupos[jsonData[i].category] == null){
					grupos[jsonData[i].category] = 0;
				}else{
					grupos[jsonData[i].category] += 1;
				}
			}
			else {
				if(grupos[jsonData[i].group] == null){
					grupos[jsonData[i].group] = 0;
				}else{
					grupos[jsonData[i].group] += 1;
				}
			}
		}

		Object.entries(grupos).forEach((entry) => {
			const [key, value] = entry;
			labs[labs.length]=key;
			dataSet[dataSet.length]=value;
		});

		myChart2.data.labels =  labs;
		myChart2.data.datasets[0].data =  dataSet;
		myChart2.update();
    });
}

(function ($) {
    "use strict";
	var aGroup;
	var aCategory;
	aGroup = document.querySelector('a.bar-group-ref');
	aGroup.addEventListener('click', () => {
		categoria=false;
		updateChart1();
	});
	aCategory = document.querySelector('a.bar-categoria-ref');
	aCategory.addEventListener('click', () => {
		categoria=true;
		updateChart1();
	});
	aGroup = document.querySelector('a.pie-group-ref');
	aGroup.addEventListener('click', () => {
		categoria=false;
		updateChart2();
	});
	aCategory = document.querySelector('a.pie-categoria-ref');
	aCategory.addEventListener('click', () => {
		categoria=true;
		updateChart2();
	});	
	llamadoApi();

    
})(jQuery);