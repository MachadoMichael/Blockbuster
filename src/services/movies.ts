import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../libs/firebase";
import { Movie } from "../types/Movie";

export const getAll = async () => {
  let moviesList: Movie[] = [];

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
