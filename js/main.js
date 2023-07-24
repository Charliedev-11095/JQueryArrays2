$(document).ready(function() {
    $("#processButton").on("click", function() {
        const inputText = $("#inputText").val();
        const vocalCount = {};
        const digitCount = {};
        const consonantCount = {};

        for (let i = 0; i < inputText.length; i++) {
            const char = inputText.charAt(i).toLowerCase();

            if ('aeiouáéíóú'.includes(char)) {
                if (vocalCount[char]) {
                    vocalCount[char]++;
                } else {
                    vocalCount[char] = 1;
                }
            } else if ('0123456789'.includes(char)) {
                if (digitCount[char]) {
                    digitCount[char]++;
                } else {
                    digitCount[char] = 1;
                }
            } else if ('abcdefghijklmnopqrstuvwxyzñ'.includes(char)) {
                if (consonantCount[char]) {
                    consonantCount[char]++;
                } else {
                    consonantCount[char] = 1;
                }
            }
        }

        const vocalResultArray = Object.entries(vocalCount);
        const digitResultArray = Object.entries(digitCount);
        const consonantResultArray = Object.entries(consonantCount);

        // Ordenar los resultados alfabéticamente por el carácter
        vocalResultArray.sort((a, b) => a[0].localeCompare(b[0]));
        digitResultArray.sort((a, b) => a[0].localeCompare(b[0]));
        consonantResultArray.sort((a, b) => a[0].localeCompare(b[0]));

        // Mostrar los resultados solo después de hacer clic en el botón
        $("#vocalesResult").text(JSON.stringify(vocalResultArray, null, 0));
        $("#digitosResult").text(JSON.stringify(digitResultArray, null, 0));
        $("#consonantesResult").text(JSON.stringify(consonantResultArray, null, 0));

        $("#vocalesSection").show();
        $("#digitosSection").show();
        $("#consonantesSection").show();
    });
});
