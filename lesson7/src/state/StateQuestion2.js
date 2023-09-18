import { useState } from "react";

export default function StateQuestion2() {
  const [data, setData] = useState({
    count: 0,
    btnName: "Read more",
    content: "",
  });
  const handleButton = () => {
    if (data.count % 2 === 0) {
      setData({
        count: data.count + 1,
        btnName: "Show less",
        content: 'Khi click vào "Show Less" Button thì ẩn nội dung đi',
      });
    } else {
      setData({ count: data.count + 1, btnName: "Read more", content: "" });
    }
  };
  return (
    <div>
      <h3>Welcome to JavaTpoint!!!</h3>
      <p>{data.content}</p>
      <button onClick={handleButton}>{data.btnName}</button>
    </div>
  );
}
