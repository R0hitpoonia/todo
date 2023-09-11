import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { tasks } from "./tasks";
import { projects } from "./projects";

export const addbasicdata = async (uid) => {
  const docRef = doc(db, "user", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    const td = docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }

  await setDoc(doc(db, "user", uid), {
    tasks,
    projects,
  }).catch((e) => {
    console.log(e);
  });
};
