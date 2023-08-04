"use client"
/* Components */
import { useEffect } from "react"
import { Home } from "./components/Home/pages/Home"
import { TravelTable } from "../database/database.config"
import db from "../database/database.config"
import { initialData } from "../database/initialData"

export default function IndexPage() {
  useEffect(() => {
    db.open().then(() => {
      db.table('travel').count((count) => {
        if (count === 0) {
          db.table('travel').bulkAdd(initialData);
        }
      });
    });
  }, [])
  return <>
      <Home />
  </>
}

export const metadata = {
  title: 'Travel App with Redux',
}
