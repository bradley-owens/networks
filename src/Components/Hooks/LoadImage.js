import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { storage } from "../../Store/Firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import noImage from "../IMG/noProfile.png";

const LoadImage = (userName) => {
  const [url, setUrl] = useState(noImage);
  const imageListRef = ref(storage, "images/users/");

  listAll(imageListRef).then((res) => {
    res.items.forEach((item) => {
      if (item._location.path_ === "images/users/" + userName)
        getDownloadURL(item).then((imageUrl) => {
          setUrl(imageUrl);
        });
    });
  });

  return url;
};

export default LoadImage;
