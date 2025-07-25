addEventListener("DOMContentLoaded", () => {

    const chosenFile = document.getElementById("file-input");
    const font_title_frame = document.querySelector(".font_title_frame");

    
    const savedFontName = localStorage.getItem("font_name");
    const savedFontDataUrl = localStorage.getItem("font_data_url");
    if (savedFontName && savedFontDataUrl) {
        change_Font(savedFontName, savedFontDataUrl);
        font_title_frame.textContent = `${savedFontName}`;
    }




    chosenFile.addEventListener("change", function () {
        if (chosenFile.files.length > 0) {
            const file = chosenFile.files[0];
            const file_name = file.name.replace(/\.[^/.]+$/, ""); 
            const reader = new FileReader();

            reader.onload = function(e) {
                const dataUrl = e.target.result;
                change_Font(file_name, dataUrl);

                // Save to localStorage
                localStorage.setItem("font_name", file_name);
                localStorage.setItem("font_data_url", dataUrl);

                // Update the title frame
                font_title_frame.textContent = `${file_name}`;
            };

            reader.readAsDataURL(file);
        }
    });



    



    function change_Font(fontName, fontUrl) {
        const font_style = document.createElement("style");
        font_style.textContent = `
            @font-face {
                font-family: "${fontName}";
                src: url("${fontUrl}");
            }
            .san_serif_frame .font_size {
                font-family: "${fontName}" !important;
            }
        `;
        document.head.appendChild(font_style);
    }

});