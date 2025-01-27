export function createBasicStructure() {
  const root = document.createElement("div");
  const header = document.createElement("header");
  const main = document.createElement("main");
  const footer = document.createElement("footer");
  const container = document.createElement("div");

  root.setAttribute("id", "root");
  header.className = "header";
  main.className = "main";
  footer.className = "footer";
  container.className = "container";

  main.append(container);
  root.append(header);
  root.append(main);
  root.append(footer);

  return root;
}
