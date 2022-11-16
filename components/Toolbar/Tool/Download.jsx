import React, { useState } from 'react'
import {ArrowDownTrayIcon} from '@heroicons/react/24/outline';
import { toast } from 'react-toastify'
import * as htmlToImage from 'html-to-image'
import imgConverter from "image-converter-pro";

const Download = () => {

  const [isVisible , setIsVisible] = useState(false);
  const [isDownloadButtonDisabled , setIsDownloadButtonDisabled] = useState(false);
  const [ downloadFormat , setDownloadFormat ] = useState(false);

  function downloadCustom(size) {
    setIsVisible(false);
    setIsDownloadButtonDisabled(true);
    toast.info("Starting Download...", { toastId: "start" });
    document.getElementById("my-node").style.transform = "scale(1)"; //*TEST THIS
    let width = document.getElementById("my-node").offsetWidth;
    let height = document.getElementById("my-node").offsetHeight;
    let style = { borderRadius: 0 };
    // JPG
    htmlToImage
      .toSvg(document.getElementById("my-node"), {
        style: style,
      })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        imgConverter(
          dataUrl,
          width,
          height,
          downloadFormat,
          size / height
        ).then((dataUri) => {
          link.download = `spiffy.${downloadFormat}`;
          link.href = dataUri;
          link.click();
          toast.dismiss("start");
          toast.success("Downloaded Successfully!");
          setIsDownloadButtonDisabled(false);
        });
      });
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center rounded-xl cursor-pointer active:scale-95 transform transition-all ease-in-out duration-200">
        <button
          className=""
          onClick={()=>setIsVisible(true)}
          disabled={isDownloadButtonDisabled}
          
        />

        <ArrowDownTrayIcon/>
      </div>
    </>
  )
}

export default Download