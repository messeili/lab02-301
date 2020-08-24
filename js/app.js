"use strict";
$.ajax("../data/page-1.json").then((data) => {
  // console.log(data);
  data.forEach((val, idx) => {
    // console.log(val.image_url);
    let newHornes = new Hornes(
      val.image_url,
      val.title,
      val.description,
      val.keyword,
      val.horns
    );
    // allHornes.push(newHornes);
    newHornes.render();
    console.log(Hornes);
  });
  // $('li').first().remove();
});

function Hornes(image_url, title, description, keyword, horns) {
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
}
Hornes.prototype.render = function () {
  let hornClone = $("#photo-template").clone();
  hornClone.find("h2").text(this.title);
  hornClone.find("img").attr("src", this.image_url);
  hornClone.find("img").attr("alt", this.keyword);
  hornClone.find("p").text(this.description);
  $("section").append(hornClone);
};
