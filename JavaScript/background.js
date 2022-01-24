const images = ["0", "1", "2", "3", "4"];
const chosenimage = images[Math.floor(Math.random() * images.length)];
// document.body.classList.add(`background_${chosenimage}`);


// 아래는 단순히 img 태그 삽입을 위한 코드

// const backimage = document.createElement("img");
// backimage.src=`IMAGE/${chosenimage}`;
// // img 태그에서는 `TMAGE/` 를 하는 순간 자동으로 디렉토리를 한단계 벗어나서 IMAGE 디렉토리를 찾는 것 같음.

// document.body.appendChild(backimage);
