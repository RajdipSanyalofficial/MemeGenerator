const generate_meme_btn = document.querySelector(".generate_meme_btn");
const meme_title = document.querySelector(".meme_title");
const meme_author = document.querySelector(".meme_author");

const meme_img = document.getElementById("meme_img");

const api_url = "https://meme-api.com/gimme";

generate_meme_btn.addEventListener("click", async () => {
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data);
  console.log(data.title);

  meme_title.innerHTML = data.title;
  meme_img.src = data.url;
  meme_author.innerHTML=data.author;
});
