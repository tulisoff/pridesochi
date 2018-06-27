window.onload = getMyLocation; //Вызываем функцию, которую создадим чуть ниже, она срабатывает сразу же после загрузки нашего сайта.

function getMyLocation () { //собственно наша функция для определения местоположения
	if (navigator.geolocation) { //для начала надо проверить, доступна ли геолокация, а то еще у некоторых браузеры то древние. Там о таком и не слышали.
		navigator.geolocation.getCurrentPosition(displayLocation1); //если все ок, то вызываем метод getCurrentPosition и передаем ей нашу функцию displayLocation, реализую ее ниже.
		navigator.geolocation.getCurrentPosition(displayLocation2);
		navigator.geolocation.getCurrentPosition(displayLocation3);
		navigator.geolocation.getCurrentPosition(displayLocation4);
		navigator.geolocation.getCurrentPosition(displayLocation5);
	}

	else {
		alert("Упс, геолокация не поддерживается"); //выведем сообщение для старых браузеров.
	}
}

function  displayLocation(position1) { //передаем в нашу функцию объект position - этот объект содержит ширину и долготу и еще массу всяких вещей.
	var	latitude = position1.coords.latitude; // излвекаем широту
	var	longitude = position1.coords.longitude; // извлекаем долготу
	//Теперь пришло время все это записать в наш  DOM
	var div = document.getElementById("location");//получаем доступ к нашему элементу location в DOM
	div.innerHTML = "Ваша широта: " + latitude + ", Ваша долгота: " +  longitude; //Вставляем нужнные данные в DOM.
}








 function displayError (error) { //вот наш обработчик, API интерфейс передает сюда объект error.
	var errorTypes = {//объект error содержит числовые значения от 0 до 3. Вот собственно с нашим массивом мы и будем сравнивать его.
		0: "Неизвестная ошибка",
		1: "Доступ запрещен",
		2: "Координаты не определены",
		3: "Время запроса истекло"
	};
	var errorMessage = errorTypes[error.code];//свойство code объекта error даст нам числовое значение
	if (error.code == 0 || error.code == 2) {
		errorMessage = errorMessage + " " + error.message; //message свойство объекта error, которое содержит иногда текстовое сообщение
 	}
 	var div = document.getElementById('location');
 	div.innerHTML = errorMessage; //собственно уведомляем пользователя об ошибке.
 	//заметьте, мы не рассматриваем другие ошибки, так как это бессмысленно, ниже в статье дам комментарий.
}


function computeDistance (startCoords, destCoords) {
	var startLatRads = degreesToRadians(startCoords.latitude);
	var startLongRads = degreesToRadians(startCoords.longitude);
	var destLatRads = degreesToRadians(destCoords.latitude);
	var destLongRads = degreesToRadians(destCoords.longitude);

	var	Radius = 6371; //радиус Земли в километрах
	var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + Math.cos(startLatRads) * Math.cos(destLatRads) * Math.cos(startLongRads - destLongRads)) * Radius;

	return distance;
}

function degreesToRadians (degrees) {
	var radians = (degrees * Math.PI)/180;
	return radians;
}




var ourCoords2 = {
	latitude: 43.4045962,
	longitude: 39.9622171
}


function  displayLocation2(position) { //передаем в нашу функцию объект position - этот объект содержит ширину и долготу и еще массу всяких вещей.
	var	latitude = position.coords.latitude; // излвекаем широту
	var	longitude = position.coords.longitude; // извлекаем долготу
	//Теперь пришло время все это записать в наш  DOM
	

	var km2 = computeDistance(position.coords, ourCoords2); //передаем координаты  и Ваши координаты.
	var distance2 = document.getElementById("distance2");//получаем доступ к нашему элементу DOM
	distance2.innerHTML = km2.toFixed(1) + " км. от Вас"; //Выводим наше расстояние.
}









var ourCoords1 = {
	latitude: 43.5271,
	longitude: 39.875509
}


function  displayLocation1(position) { //передаем в нашу функцию объект position - этот объект содержит ширину и долготу и еще массу всяких вещей.
	var	latitude = position.coords.latitude; // излвекаем широту
	var	longitude = position.coords.longitude; // извлекаем долготу
	//Теперь пришло время все это записать в наш  DOM
	

	var km1 = computeDistance(position.coords, ourCoords1); //передаем координаты  и Ваши координаты.
	var distance1 = document.getElementById("distance1");//получаем доступ к нашему элементу DOM
	distance1.innerHTML = km1.toFixed(1) + " км. от Вас"; //Выводим наше расстояние.
}















var ourCoords3 = {
	latitude: 43.5255263,
	longitude: 39.9946788
}


function  displayLocation3(position) { //передаем в нашу функцию объект position - этот объект содержит ширину и долготу и еще массу всяких вещей.
	var	latitude = position.coords.latitude; // излвекаем широту
	var	longitude = position.coords.longitude; // извлекаем долготу
	//Теперь пришло время все это записать в наш  DOM
	

	var km3 = computeDistance(position.coords, ourCoords3); //передаем координаты  и Ваши координаты.
	var distance3 = document.getElementById("distance3");//получаем доступ к нашему элементу DOM
	distance3.innerHTML = km3.toFixed(1) + " км. от Вас"; //Выводим наше расстояние.
}








var ourCoords4 = {
	latitude: 43.6724581,
	longitude: 40.2942344
}


function  displayLocation4(position) { //передаем в нашу функцию объект position - этот объект содержит ширину и долготу и еще массу всяких вещей.
	var	latitude = position.coords.latitude; // излвекаем широту
	var	longitude = position.coords.longitude; // извлекаем долготу
	//Теперь пришло время все это записать в наш  DOM
	

	var km4 = computeDistance(position.coords, ourCoords4); //передаем координаты  и Ваши координаты.
	var distance4 = document.getElementById("distance4");//получаем доступ к нашему элементу DOM
	distance4.innerHTML = km4.toFixed(1) + " км. от Вас"; //Выводим наше расстояние.
}




var ourCoords5 = {
	latitude: 43.4785096,
	longitude: 40.5362678
}


function  displayLocation5(position) { //передаем в нашу функцию объект position - этот объект содержит ширину и долготу и еще массу всяких вещей.
	var	latitude = position.coords.latitude; // излвекаем широту
	var	longitude = position.coords.longitude; // извлекаем долготу
	//Теперь пришло время все это записать в наш  DOM
	

	var km5 = computeDistance(position.coords, ourCoords5); //передаем координаты  и Ваши координаты.
	var distance5 = document.getElementById("distance5");//получаем доступ к нашему элементу DOM
	distance5.innerHTML = km5.toFixed(1) + " км. от Вас"; //Выводим наше расстояние.
}