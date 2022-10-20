import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import data from "../utils/data.json";
import { useParams } from "react-router-dom";
import Spinner from "../../Spinner"
import {getDoc, doc, getFirestore, collection, getDocs, query, where, limit} from "firebase/firestore";

const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState ([]);
  const [loading, setLoading] = useState(true);
  
  useEffect (() => {

    setLoading(true);
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const collectionFiltered = query(
      collection(db, 'items'),
      where('category', '==', `${name}`),
    )
    getDocs(!name ? itemsCollection : collectionFiltered)
      .then((_snapshot_) => {
        setItems(
          _snapshot_.docs.map((_doc_) => ({ id: _doc_.id, ..._doc_.data() })),
        )
      })
      .finally(() => setLoading(false))

  }, [name]);

  if (loading) { return <Spinner/>;
}

  return (
  <>
      <div className="mt-5">
      <ItemList items={items} />
      </div>
  </>
  );
};

export default ItemListContainer;