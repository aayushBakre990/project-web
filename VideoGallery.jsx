import { act, useState } from "react";
import "./Exam.css";
import Video from "./Video";

export default function VideoGallery() {
  const nextVideo = () => {
    let activeIndex, prevIndex, nextIndex;
    const vids = document.getElementsByClassName("video");
    let videos = [].slice.call(vids);
    videos.forEach((video, index) => {
      if (video.className == "video active") {
        activeIndex = index;
      }
    });
    if(activeIndex == 0) {
      nextIndex = 1;
      prevIndex = videos.length - 1;
    } else if (activeIndex == videos.length - 1) {
      prevIndex = activeIndex - 1;
      nextIndex = 0;
    } else {
      prevIndex = activeIndex - 1;
      nextIndex = activeIndex + 1;
    }
    videos.forEach((video, index) => { 
      if(index == activeIndex) {
        video.className = "video prev";
      } else if (index == nextIndex) {
        video.className = "video active";
      } else {
        video.className = "video inactive-next";
      }
    });
  };

  const prevVideo = () => {
    let activeIndex, prevIndex, nextIndex;
    const vids = document.getElementsByClassName("video");
    let videos = [].slice.call(vids);
    videos.forEach((video, index) => {
      if (video.className == "video active") {
        activeIndex = index;
      }
    });
    if(activeIndex == 0) {
      nextIndex = 1;
      prevIndex = videos.length - 1;
    } else if (activeIndex == videos.length - 1) {
      prevIndex = activeIndex - 1;
      nextIndex = 0;
    } else {
      prevIndex = activeIndex - 1;
      nextIndex = activeIndex + 1;
    }
    videos.forEach((video, index) => {
      if(index == activeIndex) {
        video.className = "video next";
      } else if (index == prevIndex) {
        video.className = "video active";
      } else {
        video.className = "video inactive-prev";
      } 
    });
  };

  return (
    <>
      <h1 id="video-gallery-heading">Video Gallery</h1>
      <div className="video-gallery">
        <Video src="./images/gallery/vid1.mp4" state="video prev" />
        <Video src="./images/gallery/vid2.mp4" state="video active" />
        <Video src="./images/gallery/vid3.mp4" state="video next" />
        <Video src="./images/gallery/vid4.mp4" state="video inactive-next" />
        <Video src="./images/gallery/vid5.mp4" state="video inactive-next" />
        <Video src="./images/gallery/vid6.mp4" state="video inactive-next" />
      </div>
      <div id="video-buttons">
        <button onClick={prevVideo}>PREV</button>
        <button onClick={nextVideo}>NEXT</button>
      </div>
    </>
  );
}
