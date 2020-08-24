"use strict";

$.ajax("../data/page-1.json").then((data) => {
  data.forEach((val, idx) => {
    // console.log(val.image_url);
    let newHornes = new Hornes(
      val.image_url,
      val.title,
      val.description,
      val.keyword,
      val.horns
    );
    newHornes.render();
  });
  $("section").first().remove();
});

let keyWords = [];

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
  hornClone.find("img").attr("alt", this.title);
  hornClone.find("p").text(this.description);
  hornClone.addClass(this.keyword);
  $("main").append(hornClone);

  let checkKeyword = keyWords.includes(this.keyword);

  if (checkKeyword == false) {
    keyWords.push(this.keyword);
    $("#select").append(`<option value="${this.keyword}"> 
    ${this.keyword} 
  </option>`);
  } else {
  }
};

$("#select").change(function () {
  let selectedE = $(this).children("option:selected").val();
  console.log(selectedE);
  $("section").addClass("off");
  $("." + selectedE).removeClass("off");

  if (selectedE == "default") {
    $("section").removeClass("off");
  }
});
