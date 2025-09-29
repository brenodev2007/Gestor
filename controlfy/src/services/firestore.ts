
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where 
} from "firebase/firestore";
import { db, auth } from "../config/firebase";

export const addTransaction = (name, value, type) => {
  const userId = auth.currentUser?.uid;
  if (userId) {
    return addDoc(collection(db, "transactions"), {
      name,
      value,
      type,
      userId,
      createdAt: new Date(),
    });
  }
  throw new Error("User not authenticated");
};

export const getTransactions = () => {
  const userId = auth.currentUser?.uid;
  if (userId) {
    const transactionsCollection = collection(db, "transactions");
    const q = query(transactionsCollection, where("userId", "==", userId));
    return getDocs(q);
  }
  return Promise.resolve({ docs: [] });
};
