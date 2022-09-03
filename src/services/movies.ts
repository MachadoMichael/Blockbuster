import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../libs/firebase";
import { Movie } from "../types/Movie";

export const getAll = async () => {
  const moviesList: Movie[] = [];
  const moviesFolder = collection(db, "movies");
  const moviesSnapshot = await getDocs(moviesFolder);
  moviesSnapshot.docs.forEach((doc) => {
    moviesList.push({
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
  return moviesList;
};

export const searchMovie = async (movies: Movie[], search: string) => {
  const searchList: Movie[] = [];
  movies.forEach((doc) => {
    if (doc.name.includes(search.toUpperCase()) === true) {
      searchList.push({
        description: doc.description,
        image: doc.image,
        name: doc.name,
        type: doc.type,
        url: doc.url,
        release: doc.release,
        genre: doc.genre,
        favorite: doc.favorite,
      });
    }
  });
  return searchList;
};
