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
		// I created a variable for the image name and changed the image name for each genre
		var genreImage = "other.jpg"; 
			if(genre == "Comedy"){ genreImage = "comedy.jpg"; }
			if(genre == "Drama"){ genreImage = "drama.jpg"; }
			if(genre == "Action"){ genreImage = "action.jpg"; }
			if(genre == "Horror"){ genreImage = "horror.jpg"; }
			if(genre == "Documentary"){ genreImage = "documentary.jpg"; }
		
		// Listed all information neatly
		var viewMovie = "<strong>Genre:</strong> " + genre + "<br />" + 
			"<strong>Title:</strong> " + title + "<br />" + 
			"<strong>Actor/Actress:</strong> " + actor + "<br />" + 
			"<strong>Director:</strong> " + director + "<br />" + 
			"<strong>Rating:</strong> " + rating + "<br />" + 
			"<strong>Favorite Movie? </strong> " + favorites + "<br />" + 
			"<strong>Family Movie? </strong>" + family + "<br />" + 
			"<strong>Release Date:</strong> " + release + "<br />" + 
			"<strong>Description:</strong> " + description + "<br /><br />" + 
			"<img src=\"images/" + genreImage + "\" border=\"0\" />"; // added image tag
		
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
		if(actor == "Enter Actor/Actress Name"){ 
			actor = "";
		}
		// if you left the value with the default text than this will make the value blank
	var director = document.getElementById('director').value;
		if(director == "Enter Director Name"){
			director = "";
		}
	var rating = document.getElementById('rating').value;
	var favorites = document.getElementById('favorites').value;
	if(favorites == "on"){ 
		var favorites = "Yes" // if favorite is checked say yes
	}else{
		var favorites = "No" // if not, say no
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
	
	if(getGenre == "choose"){ // if you didn't choose a genre than you get an alert and it returns to the form
		alert("You must choose a genre.");
		document.getElementById("genre").style.border = "1px solid red";
		return false;
	}
	
	if(getTitle == "" || getTitle == "Enter Movie Title"){ // must enter a title
		alert("You must enter a movie title.");
		document.getElementById("title").style.border = "1px solid red";
		return false;
	}
	
	if(getDate == ""){
		alert("You must enter a release date."); // must enter a release date
		document.getElementById("release").style.border = "1px solid red";
		return false;
	}else{
		document.getElementById("title").style.border = "1px solid #ccc";
		document.getElementById("genre").style.border = "1px solid #ccc";
		alert("Form Submitted!");
		saveItems(); // if all is good than run the saveItems function
	}
}
