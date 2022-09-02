import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import detailedItems from "../utils/data.json";
import Spinner from "./../../Spinner";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();


  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemDoc = doc(db, "details", id);
    getDoc(itemDoc).then((snapshot) => {
      setItem({ ...snapshot.data(), id: snapshot.id });
      setLoading(false);
    });
  }, [id]);
  return loading ? <Spinner /> : <ItemDetail item={item} />;
};

export default ItemDetailContainer;