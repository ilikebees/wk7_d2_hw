const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:selected-instrument-ready', (event) => {
    const instrument = event.detail;
    this.render(instrument);
  });
};



InstrumentInfoView.prototype.render = function(instrument){
  this.container.innerHTML = '';

  const infoHeader = document.createElement('h3');
  infoHeader.textContent = `${instrument.name}`;

  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `${instrument.description}`;

  const infoList = document.createElement('ul');
  infoList.textContent = `${instrument.instruments}`;

  this.container.appendChild(infoHeader);
  this.container.appendChild(infoParagraph);
  this.container.appendChild(infoList);

};

//
// InstrumentInfoView.prototype.createInfoList = function(instrument) {
//   const infoList = document.createElement('ul');
//
//   // infoList.textContent = (`${instrument.instruments}`, infoList);
//
//
//   infoList.forEach((instrument) => {
//     infoList.textContent =(`${instrument.instruments}`, infoList);
//   });
//
//
//   return infoList;
// };
//
//
//
//
// InstrumentInfoView.prototype.createLi = function(textContent, ul) {
//   const li = document.createElement('li');
//   li.textContent = textContent;
//   ul.appendChild(li);
// };



module.exports = InstrumentInfoView;


// const infoList = document.createElement('ul');
//
//   instruments.forEach((instrument) => {
//     infoList.textContent = `${instrument}`}
