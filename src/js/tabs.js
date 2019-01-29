const openTab = (title, e = event) => {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tab__content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tab__links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" tab__links_active", "");
  }

  document.getElementById(title).style.display = "block";
  e.currentTarget.className += " tab__links_active";
}