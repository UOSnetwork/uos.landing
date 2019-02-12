const openTab = (title, event) => {
  let i, content, link;

  content = document.getElementsByClassName("tab__content");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }

  link = document.getElementsByClassName("tab__links");
  for (i = 0; i < link.length; i++) {
    link[i].className = link[i].className.replace(" tab__links_active", "");
  }

  document.getElementById(title).style.display = "flex";
  event.currentTarget.className += " tab__links_active";
}