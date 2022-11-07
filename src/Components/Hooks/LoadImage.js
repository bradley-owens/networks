import { useState } from "react";
import { storage } from "../../Store/Firebase";
import { ref, getDownloadURL, listAll } from "firebase/storage";
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
