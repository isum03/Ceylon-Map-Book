
document.addEventListener("DOMContentLoaded", function() {
    var galleries = document.querySelectorAll(".gallery");
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    galleries.forEach((gallery, galleryIndex) => {
        var slides = gallery.querySelectorAll(".slide");
        slides.forEach((slide, slideIndex) => {
            slide.addEventListener("click", function() {
                showModal(slide.src, slide.alt, galleryIndex, slideIndex);
            });
        });

        gallery.parentElement.querySelector(".prevBtn").addEventListener("click", function() {
            showSlides(galleryIndex, -1);
        });

        gallery.parentElement.querySelector(".nextBtn").addEventListener("click", function() {
            showSlides(galleryIndex, 1);
        });
    });

    var currentSlideIndices = Array(galleries.length).fill(0);

    function showSlides(galleryIndex, n) {
        var gallery = galleries[galleryIndex];
        var slides = gallery.querySelectorAll(".slide");
        currentSlideIndices[galleryIndex] += n;
        if (currentSlideIndices[galleryIndex] >= slides.length) {
            currentSlideIndices[galleryIndex] = 0;
        }
        if (currentSlideIndices[galleryIndex] < 0) {
            currentSlideIndices[galleryIndex] = slides.length - 1;
        }
        slides.forEach(slide => {
            slide.style.display = "none";
        });
        slides[currentSlideIndices[galleryIndex]].style.display = "block";
    }

    function showModal(src, alt, galleryIndex, slideIndex) {
        modal.style.display = "flex";
        modalImg.src = src;
        captionText.innerHTML = alt;
        currentSlideIndices[galleryIndex] = slideIndex;
        modal.setAttribute("data-gallery-index", galleryIndex);
    }

    document.querySelector(".close").addEventListener("click", function() {
        modal.style.display = "none";
    });

    document.querySelector(".modal-prevBtn").addEventListener("click", function() {
        changeModalSlide(-1);
    });

    document.querySelector(".modal-nextBtn").addEventListener("click", function() {
        changeModalSlide(1);
    });

    function changeModalSlide(n) {
        var galleryIndex = parseInt(modal.getAttribute("data-gallery-index"));
        var gallery = galleries[galleryIndex];
        var slides = gallery.querySelectorAll(".slide");
        currentSlideIndices[galleryIndex] += n;
        if (currentSlideIndices[galleryIndex] >= slides.length) {
            currentSlideIndices[galleryIndex] = 0;
        }
        if (currentSlideIndices[galleryIndex] < 0) {
            currentSlideIndices[galleryIndex] = slides.length - 1;
        }
        modalImg.src = slides[currentSlideIndices[galleryIndex]].src;
        captionText.innerHTML = slides[currentSlideIndices[galleryIndex]].alt;
    }
});
