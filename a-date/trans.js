
        // Function to get the full browser language code
        function getBrowserLanguage() {
            return navigator.language || navigator.userLanguage;
        }

        // Function to dynamically load translations
        async function loadTranslations(lang) {
            const primaryLang = lang.split('-')[0];  // Extract primary language (e.g., "fr" from "fr-CA")
            
            // Try to load the full language code translations first, then fallback to the primary language
            try {
                const response = await fetch(`translations/${lang}.json`);
                if (response.ok) {
                    return await response.json();
                }
            } catch (error) {
                console.warn(`No specific translations found for: ${lang}. Trying primary language: ${primaryLang}`);
            }

            // Fallback to primary language
            try {
                const response = await fetch(`translations/${primaryLang}.json`);
                if (response.ok) {
                    return await response.json();
                }
            } catch (error) {
                console.warn(`No primary language translations found for: ${primaryLang}.`);
            }

            // Fallback to English if all else fails
            try {
                const response = await fetch(`translations/en.json`);
                if (response.ok) {
                    return await response.json();
                }
            } catch (error) {
                console.error("Failed to load fallback English translations.");
            }

            return null;
        }

        // Function to apply translations to the specified elements
        async function applyTranslations() {
            const lang = getBrowserLanguage();
            console.log(`Detected language: ${lang}`);

            // Try to load translations for the detected language
            const translations = await loadTranslations(lang);
            if (translations) {
                // Apply translations to the elements
                document.getElementById('trans1').innerHTML = translations['trans1'] || document.getElementById('trans1').innerHTML;
                document.getElementById('trans2').innerHTML = translations['trans2'] || document.getElementById('trans2').innerHTML;
                document.getElementById('trans3').innerHTML = translations['trans3'] || document.getElementById('trans3').innerHTML;
                document.getElementById('trans4').innerHTML = translations['trans4'] || document.getElementById('trans4').innerHTML;
            } else {
                console.log(`No translations available for the language: ${lang}`);
            }
        }

        // Apply translations on document load
        document.addEventListener('DOMContentLoaded', applyTranslations);