let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function showDetails(carType) {
    const detailsContainer = document.getElementById("details-container");

    // Clear previous details
    detailsContainer.innerHTML = "";

    // Display details based on the selected car type
    if (carType === "sedan") {
        detailsContainer.innerHTML = `
            <h2>Sedan Details</h2>
            <p>Our sedan models offer a perfect blend of luxury, comfort, and advanced technology. Whether you're commuting or taking a long drive, our sedans ensure a smooth and enjoyable experience.</p>
        `;
    } else if (carType === "suv") {
        detailsContainer.innerHTML = `
            <h2>SUV Details</h2>
            <p>Explore the great outdoors with our robust SUVs. Designed to handle various terrains, our SUVs provide ample space, advanced safety features, and cutting-edge technology for your adventurous journeys.</p>
        `;
    } else if (carType === "convertible") {
        detailsContainer.innerHTML = `
            <h2>Convertible Details</h2>
            <p>Experience the joy of driving with the wind in your hair in our convertible models. These stylish cars offer a thrilling open-road experience, combining performance and elegance for an unforgettable ride.</p>
        `;
    }
}
