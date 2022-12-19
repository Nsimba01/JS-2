//Mettre le code JavaScript lié à la page photographer.html

const queryString = window.location.search;

console.log(queryString); // Affichage de parametres de l'URL


const urlParams = new URLSearchParams(queryString); // instance de URLSearchParams
// pour récuperer les paramètres de l'URL



const name = urlParams.get('name');

const country = urlParams.get('country');

const city = urlParams.get('city');

const picture = urlParams.get('picture');

const price = urlParams.get('price');   



const id_param=urlParams.get('id');



 async function getPhotographers() { // outils developpeur pour voir les bugs et autres

  return fetch('../OC-P6-Fisheye/data/photographers.json')
      .then(res => {
          return res.json();
      })
      .then(dataJSON => {
          return dataJSON;
      })
}

// Design pattern factory for photographers


async function mediaFactory(data) {
	
	// Les champs pour le media :
	
    const { photographerId } = data;
	
	
	const photographerId_=`${photographerId}`;
	
	const mediaSection = document.querySelector(".mediaSelect");
	
	mediaSection.setAttribute("style", "float:left");


	

	if(photographerId_==id_param){
		
		
		// on utilise le await dans une fonction async uniquement sinon error evidemment
		
		 const { photographers } =  await getPhotographers(); 
		 
		 
		 
		  // forEach s'applique aux (objets)  const { photographers } autrement dit photographers
		 
		  photographers.forEach((photographer) => {
			  
			  
			  if(photographerId_==photographer.id){
				  
				  
			    let name_photographer=photographer.name;
				
				let name_split=name_photographer.split(" ");
				
				// name_split[0], contient la première partie du name
				
				if(name_split[0].includes("-")){
					
					let name_tiret= name_split[0];
					
					let name_tiret_split=name_tiret.split("-");
					
					
					
					
					if(data.image != null){
						
						    // On recupere les champs image, title, date et price
							// de tableau media dans les  données json 
						
						     const { image, title, date, price } = data;
							 
						     const picture = `assets/images/${name_tiret_split}/${image}`;

							 const article = document.createElement( 'article' );

							 
							 const img = document.createElement('img'); 
							 
							 img.setAttribute("src", picture);
							 
							 img.setAttribute("style","width:300px;height:300px");
							 
							 const quote = document.createElement( 'p' ); //je crée une balise pour la citation


							 quote.innerHTML = `${title}, ${date}, ${price}`;
							 
							 article.appendChild(img);
							 
							 article.appendChild(quote);
							 
							 	 
							 mediaSection.appendChild(article);

							 
							 

							 


							 
							 console.log(picture);

						
						
					}else{
						
						
						     const { video, title, date, price } = data;
							 
						
							 
						     const picture = `assets/images/${name_tiret_split}/${video}`;
							 
							 const article = document.createElement( 'article' );
							 
							 const quote = document.createElement( 'p' ); //je crée une balise pour la citation


							 quote.innerHTML = `${title}, ${date}, ${price}`;
							 
							 
							 // CREATION DE LA BALISE VIDEO HTML
							 
							 const videos = document.createElement( 'video' );
							 
                             videos.src =picture;
							 
							 videos.controls = true;
							 
							 videos.height = 240; // in px
							 
							 videos.width = 320; // in px
							 
							 article.appendChild(videos);
							 
							 article.appendChild(quote);
							 
							 mediaSection.appendChild(article);


						
						
						
						
						
					}
					
					
					console.log(name_tiret_split[0]);
					
					
				}else {
					
					
				   if(data.image != null){
						
						    // On recupere les champs image, title, date et price
							// de tableau media dans les  données json 
						
						     const { image, title, date, price } = data;
							 
							 
							 	 
							 let nom=name_split[0];
							 
						
							 
						     const picture = `assets/images/${nom}/${image}`;
							 

							 const article = document.createElement( 'article' );

							 
							 const img = document.createElement('img'); 
							 
							 img.setAttribute("src", picture);
							 
							 img.setAttribute("style","width:300px;height:300px");
							 
							 const quote = document.createElement( 'p' ); //je crée une balise pour la citation


							 quote.innerHTML = `${title}, ${date}, ${price}`;
							 
							 article.appendChild(img);
							 
							 article.appendChild(quote);
							 
							 	 
							 mediaSection.appendChild(article);

							 
							 

							 


							 
							 console.log(picture);

						
						
					}else{
						
						
						     const { video, title, date, price } = data;
							 
							 let nom=name_split[0];
							 
						
							 
						     const picture = `assets/images/${nom}/${video}`;
							 
							 const article = document.createElement( 'article' );
							 
							 const quote = document.createElement( 'p' ); //je crée une balise pour la citation


							 quote.innerHTML = `${title}, ${date}, ${price}`;
							 
							 
							 // CREATION DE LA BALISE VIDEO HTML
							 
							 const videos = document.createElement( 'video' );
							 
                             videos.src =picture;
							 
							 videos.controls = true;
							 
							 videos.height = 240; // in px
							 
							 videos.width = 320; // in px
							 
							 article.appendChild(videos);
							 
							 article.appendChild(quote);
							 
							 mediaSection.appendChild(article);


						
						
						
						
						
					}
						
						
						    


							 
							

						
				
					         console.log(name_split[0]);

					
					
				}
			  
			  
			   
			   
			   
	        //const picture = `assets/images/${image}`;
			
			
			
			  
			  
			  }
		  });
		
		/*
		
		if(data.image != null){
			
			  const { title, image } = data;
			
			   	

			  
			
		}
		
		*/
	
	
	/*

    const picture = `assets/images/${image}`;

    //function getUserCardDOM() {

      const article = document.createElement( 'article' );
      article.classList.add('photographer-card') // je crée un article avec les infos photographes

      const link = document.createElement('a');  //je crée un lien
      link.setAttribute("href", `photographer.html?id=${id}&name=${name}
	  &city=${city}&country=${country}&picture=${picture}&price=${price}`); //
      console.log("window location")
      link.classList.add("photographerPage__link");  // j'ajoute la classe "photographerPage__link"

      const img = document.createElement('img'); //je crée l'avatar
      img.setAttribute("src", picture);
      img.setAttribute("alt", `Portrait de ${name}`);
      img.setAttribute("role", "button");
      img.setAttribute("aria-label", `Accéder à la page de ${name}`);

      const photographerName = document.createElement( 'h2' ); //je crée le nom/prénom
      photographerName.classList.add('photographer-name');
      photographerName.innerHTML = name;

      const location = document.createElement('p'); //je crée une balise pour la ville
      location.classList.add('location');
      location.innerHTML = `${city}, ${country}`;


      const quote = document.createElement( 'p' ); //je crée une balise pour la citation
      quote.innerHTML = tagline;

      const pricePerDay = document.createElement('p');  //je crée un emplacement pour le tarif
      pricePerDay.classList.add('pricePerDay');
      pricePerDay.innerHTML = `${price}€/jour`;

      link.appendChild(img); //j'insère mes éléments créés dans leur emplacement
      link.appendChild(photographerName);

      article.appendChild(link);
      article.appendChild(location);
      article.appendChild(quote);
      article.appendChild(pricePerDay);

      return (article);
	  
	  
	  */
	}
   // }
    //return { name, picture, getUserCardDOM }
}




// display et pas displayData  pour éviter de conflits dans le code


async function display(media) {
	
    //const photographersSection = document.querySelector(".photographer_section");
	
	const mediaSelect = document.querySelector(".mediaSelect");


    media.forEach((medias) => {
        //const mediaModel = mediaFactory(medias);
		
		mediaFactory(medias);
		
        //const userCardDOM = mediaModel.getUserCardDOM();
        // console.log(userCardDOM);
       // mediaSelect.appendChild(mediaModel);
    });
}




// Récupère les datas des photographes


async function init() {

    //console.log(getPhotographers())
    //console.log(await getPhotographers())
	
	// photographers remplace cela par photographers media

    const { media } = await getPhotographers();
	
	

   // console.log(media)
    display(media);
}



init();

/*

 const article = document.createElement( 'article' );
 article.classList.add('photographer-card') // je crée un article avec les infos photographes

 const link = document.createElement('a');  //je crée un lien

    
  link.classList.add("photographerPage__link");  // j'ajoute la classe "photographerPage__link"

  const img = document.createElement('img'); //je crée l'avatar
  img.setAttribute("src", picture);
  img.setAttribute("alt", `Portrait de ${name}`);
  img.setAttribute("role", "button");
  img.setAttribute("aria-label", `Accéder à la page de ${name}`);
  img.setAttribute("style","width:300px;height:300px;");
  article.setAttribute("style","float:left;margin-top:-100px");

  const photographerName = document.createElement( 'h2' ); //je crée le nom/prénom
  photographerName.classList.add('photographer-name');
  photographerName.innerHTML = name;

  const location_ = document.createElement('p'); //je crée une balise pour la ville
  location_.classList.add('location');
  location_.innerHTML = `${city}, ${country}`;

  const pricePerDay = document.createElement('p');  //je crée un emplacement pour le tarif
  pricePerDay.classList.add('pricePerDay');
  pricePerDay.innerHTML = `${price}€/jour`;

  link.appendChild(img); //j'insère mes éléments créés dans leur emplacement
  link.appendChild(photographerName);

  article.appendChild(link);
  article.appendChild(location_);
  article.appendChild(pricePerDay);
  photographersSelect.appendChild(article);
  
  
  */




