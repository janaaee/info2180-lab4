document.getElementById("searchBtn").addEventListener("click", function () {
  const query = document.getElementById("search").value.trim();

  fetch("superheroes.php?query=" + encodeURIComponent(query))
    .then(response => response.text())
    .then(data => {
      document.getElementById("result").innerHTML = data;
    });
});