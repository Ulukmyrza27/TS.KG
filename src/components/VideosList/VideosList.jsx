// import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { videosContext } from "../../contexts/videosContext";
import Card from "../Card/Card";

const VideosList = () => {
  const { getAllVideos, videos } = useContext(videosContext);
  useEffect(() => {
    // console.log("страница загрузилась");
    getAllVideos();
  }, []);
  console.log(videos);
  // const [state, setState] = useState("");
  // const [state2, setState2] = useState("");
  // console.log(getAllVideos);
  // ! Реагирует при каждом изменении в компоненте
  // useEffect(() => {
  //   console.log("useEffect!!");
  // });
  // !реагирует при изменении State

  // useEffect(() => {
  //   console.log("state изменился");
  // }, [state]);
  // ! реагирует при загрузке страницы
  useEffect(() => {
    // console.log("страница загрузилась");
    getAllVideos();
  }, []);
  console.log(videos);

  return (
    <div>
      {videos.map((item) => (
        <Card key={item.id} item={item} />
      ))}
      List
    </div>
  );
};

export default VideosList;
