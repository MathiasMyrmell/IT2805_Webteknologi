function changeTab(tab){
  var placeholder = document.getElementById("placeholder");
  var content = document.getElementById(tab);
  placeholder.innerHTML = content.innerHTML;
  
}

// Standard output
changeTab("Multiplexer");
