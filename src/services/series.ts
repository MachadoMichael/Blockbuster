import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../libs/firebase";
import { Serie } from "../types/Serie";

export const getAll = async () => {
  let seriesList: Serie[] = [];

  const seriesFolder = collection(db, "series");
  const seriesSnapshot = await getDocs(seriesFolder);

  seriesSnapshot.docs.forEach((doc) => {
    seriesList.push({
      season1: doc.data().Season1,
      season2: doc.data().Season2,
      season3: doc.data().Season3,
      season4: doc.data().Season4,
      season5: doc.data().Season5,
      season6: doc.data().Season6,
      season7: doc.data().Season7,
      season8: doc.data().Season8,
      season9: doc.data().Season9,
      season10: doc.data().Season10,
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
