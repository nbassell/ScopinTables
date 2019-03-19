import React from 'react';

export const PRICE_OPTIONS = ["$", "$$", "$$$", "$$$$"];
export const CUISINE_OPTIONS = [
  "American",
  "Asian",
  "Chinese",
  "Contemporary American",
  "French",
  "Indian",
  "Israeli",
  "Italian",
  "Japanese",
  "Lebanese",
  "Mediterranean",
  "Pan-Asian",
  "Seafood",
  "Sushi",
  "Steakhouse",
  "Spanish"
];

const categoryHash = {
  "price": [1, 2, 3, 4],
  "cuisines": CUISINE_OPTIONS
};

const mapChoiceToText = (choiceOption, category) => {
  const idx = parseInt(choiceOption) - 1;
  return categoryHash[category][idx];
};

export const parseHash = (string) => {
  const hashSets = string.split("&");

  let result = [];
  hashSets.forEach(set => {
    set = set.split("=");
    result.push([
      set[0],
      set[1].split("+").map(choiceOption => mapChoiceToText(choiceOption, set[0]))
    ]);
  });
  return result;
};

export const parseQuery = (string) => {
  const queryPairs = string.split("&");

  let result = {};
  queryPairs.forEach((pair) => {
    pair = pair.split("=");
    result[pair[0]] = pair[1];
  });
  return result;
};

export const priceConvert = (price) => {
  let dollars = [];

  for (let i = 1; i <= 4; i++) {
    if (i > price) {
      dollars.push(<span key={i} className="light-dollar">$</span>);
    } else {
      dollars.push(<span key={i} className="dollar">$</span>);
    }
  }
  return dollars;
};