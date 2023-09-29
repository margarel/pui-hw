/* https://www.tutorialrepublic.com/faq/how-to-include-a-javascript-file-in-another-javascript-file.php */
import { rolls } from "./rollsData";

/* https://www.w3schools.com/js/js_window_location.asp */
function navtoProductDetail(rollName) {
    window.location.href = `product-detail.html?roll=${(rollName)}`
}

for (i = 0; i < rollsData.length; i++) {
    
}