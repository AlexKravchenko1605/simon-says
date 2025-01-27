import { createBasicStructure } from "./module/ui-functions/createBasicStructure.js";
import { createStartPage } from "./module/ui-functions/createStartPage.js";

const basicStructure = createBasicStructure();
document.body.append(basicStructure);

export const container = document.querySelector(".container");

createStartPage(container);
