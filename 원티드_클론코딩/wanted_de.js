let dev_fliter = document.querySelector(".deve_main1");
let dev_article = document.querySelector(".deve_main1_article");
let deve_main2 = document.querySelector(".deve_main2");
window.addEventListener("scroll", () => {
  if (window.scrollY > 253) {
    dev_fliter.style.position = "fixed";
    dev_fliter.style.marginTop = "51px";
    dev_article.style.display = "none";
    deve_main2.style.display = "none";
  } else {
    dev_fliter.style.position = "unset";
    dev_fliter.style.marginTop = "90px";
    dev_article.style.display = "block";
    deve_main2.style.display = "block";
  }
});
/*
let dev_fliter = document.getElementsByClassName("deve_main1");
let dev_article = document.getElementsByClassName("deve_main1_article");
window.addEventListener("scroll", () => {
  if (window.scrollY > 253) {
    dev_fliter.style.position = "fixed";
    dev_fliter.style.marginTop = "51px";
    dev_article.style.display = "none";
  } else {
    dev_fliter.style.position = "unset";
    dev_fliter.style.marginTop = "90px";
    dev_article.style.display = "block";
  }
});
*/
