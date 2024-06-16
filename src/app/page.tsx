"use client";

import { useEffect, useState } from "react";
import styled from "./page.module.css";
import axios from "axios";
import ReposCard from "@/components/ReposCard";
import Filter from "@/components/Filter";

export default function Home() {
  const [repos, setRepos] = useState<any[]>([]);
  const [languages, setLanguages] = useState<any[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  useEffect(() => {
    const fetchRepos = async () => {
      const res = await axios.get(`http://localhost:3001/repos/list`);
      setRepos(res.data);

      let uniqueLanguages = res.data.reduce((unique: any[], item: any) => {
        return unique.includes(item.language)
          ? unique
          : [...unique, item.language];
      }, []);

      setLanguages(uniqueLanguages);
    };

    fetchRepos();
  }, []);

  console.log({ selected });

  return (
    <>
      <Filter data={languages} setSelected={setSelected} />

      <div className={styled.list}>
        {selected.length > 0
          ? repos
              .filter((item) => selected.includes(item.language))
              .map((item) => <ReposCard key={item.id} data={item} />)
          : repos.map((item) => <ReposCard key={item.id} data={item} />)}
      </div>
    </>
  );
}
