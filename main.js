function getItems(){
	if(localStorage.getItem('apptitle')){
		var genre = localStorage.getItem('appgenre');
		var title = localStorage.getItem('apptitle');
		var actor = localStorage.getItem('appactor');
		var director = localStorage.getItem('appdirector');
		var rating = localStorage.getItem('apprating');
		var favorites = localStorage.getItem('appfavorites');
		var family = localStorage.getItem('appfamily');
		var release = localStorage.getItem('apprelease');
		var description = localStorage.getItem('appdescription');
		
		var viewMovie = "<strong>Genre:</strong> " + genre + "<br />" + 
			"<strong>Title:</strong> " + title + "<br />" + 
			"<strong>Actor/Actress:</strong> " + actor + "<br />" + 
			"<strong>Director:</strong> " + director + "<br />" + 
			"<strong>Rating:</strong> " + rating + "<br />" + 
			"<strong>Favorite Movie? </strong> " + favorites + "<br />" + 
			"<strong>Family Movie? </strong>" + family + "<br />" + 
			"<strong>Release Date:</strong> " + release + "<br />" + 
			"<strong>Description:</strong> " + description;
		
		document.getElementById('main').style.display = "none";
		document.write("<div id='newmovie'><h2>New Movie Added</h2><p>" + viewMovie + "</p>");
		var clearLink = document.getElementById('clear');
		clearLink.style.display = "block";
	}else{
		var title = "Enter Movie Title";
		var actor = "Enter Actor/Actress Name";
		var director = "Enter Director Name";
		var title = document.getElementById('title').value = title;
		var actor = document.getElementById('actor').value = actor;
		var director = document.getElementById('director').value = director;
	}
}

function saveItems(id){
	var genre = document.getElementById('genre').value;
	var title = document.getElementById('title').value;
	var actor = document.getElementById('actor').value;
	var director = document.getElementById('director').value;
	var rating = document.getElementById('rating').value;
	var favorites = document.getElementById('favorites').value;
	if(favorites == "on"){
		var favorites = "Yes"
	}else{
		var favorites = "No"
	}
	
	if(document.getElementById('yes').checked){
		var family = "This is a family movie"
	}else{
		var family = "This is not a family movie"
	}
	var release = document.getElementById('release').value;
	var description = document.getElementById('description').value;
	localStorage.setItem('appgenre', genre);
	localStorage.setItem('apptitle', title);
	localStorage.setItem('appactor', actor);
	localStorage.setItem('appdirector', director);
	localStorage.setItem('apprating', rating);
	localStorage.setItem('appfavorites', favorites);
	localStorage.setItem('appfamily', family);
	localStorage.setItem('apprelease', release);
	localStorage.setItem('appdescription', description);
}

function clearItems(){
	localStorage.clear();
	return false;
}

function validateForm(){
	var getGenre = document.getElementById('genre').value;
	var getTitle = document.getElementById('title').value;
	var getActor = document.getElementById('actor').value;
	var getDirector = document.getElementById('director').value;
	var getDate = document.getElementById('release').value;
	
	if(getActor == "Enter Actor/Actress Name"){
		getActor = "";
	}
	
	if(getDirector == "Enter Director Name"){
		getDirector = "";
	}
	
	if(getGenre == "choose"){
		alert("You must choose a genre.");
		document.getElementById("genre").style.border = "1px solid red";
		return false;
	}
	
	if(getTitle == "" || getTitle == "Enter Movie Title"){
		alert("You must enter a movie title.");
		document.getElementById("title").style.border = "1px solid red";
		return false;
	}
	
	if(getDate == ""){
		alert("You must enter a release date.");
		document.getElementById("release").style.border = "1px solid red";
		return false;
	}else{
		document.getElementById("title").style.border = "1px solid #ccc";
		document.getElementById("genre").style.border = "1px solid #ccc";
		saveItems();
	}
}
