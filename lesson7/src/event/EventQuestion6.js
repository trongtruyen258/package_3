import { useState } from "react";

export default function EventQuestion6() {
  const [imgUrl, setImgUrl] = useState("#");
  const onError = () => {
    setImgUrl("https://dummyimage.com/100x100/7080b5/000000&text=No+image");
  };
  return (
    <div>
      <img src={imgUrl} onError={onError} alt="hinh anh" />
    </div>
  );
}
