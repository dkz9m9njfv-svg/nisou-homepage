const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {

    accordion.addEventListener("click", () => {

        const panel = accordion.nextElementSibling;
        const plus = accordion.querySelector(".plus");

        if(panel.style.display === "block"){

            panel.style.display = "none";
            plus.textContent = "＋";

        }else{

            panel.style.display = "block";
            plus.textContent = "－";

        }

    });

});
