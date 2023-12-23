import { getDatabase, ref, set, push } from "firebase/database";
import { app } from "../firebase-config";

let db = getDatabase(app);

export let fbAdd = (nodeName, body, id) => {
  return new Promise((resolve, reject) => {
    const id = push(ref(db, `${nodeName}/`)).key;
    body.id = id;
    const referece = ref(db, `${nodeName}/${body.id}`);
    set(referece, body)
      .then((res) => {
        resolve("Data Send Successfully");
      })
      .catch((err) => {
        reject(err);
      });
  });
};
