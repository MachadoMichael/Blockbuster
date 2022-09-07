import { collection, getDocs } from "firebase/firestore/lite";
import { useState } from "react";
import { db } from "../libs/firebase";
import { Serie } from "../types/Serie";

export const getAll = async () => {
  const seriesList: Serie[] = [];
  const seriesFolder = collection(db, "series");
  const seriesSnapshot = await getDocs(seriesFolder);
  seriesSnapshot.docs.forEach((doc) => {
    seriesList.push({
      seasons: doc.data().Seasons,
      description: doc.data().description,
      image: doc.data().image,
      name: doc.data().name,
      type: doc.data().type,
      url: doc.data().url,
      release: doc.data().release,
      genre: doc.data().genre,
      favorite: false,
    });
  });

  return seriesList;
};

export const searchSerie = (series: Serie[], search: string) => {
  const searchList: Serie[] = [];
  let index = 31;

  for (let i = 0; i < index; i++) {
    if (series[i].name.includes(search.toUpperCase()) === true) {
      searchList.push({
        seasons: series[i].seasons,
        description: series[i].description,
        image: series[i].image,
        name: series[i].name,
        type: series[i].type,
        url: series[i].url,
        release: series[i].release,
        genre: series[i].genre,
        favorite: series[i].favorite,
      });
    }
  }
  console.log("searchListSERIES");
  console.log(searchList);
  return searchList;
};
