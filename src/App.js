import {useState} from 'react';

function App() {
  let name = "world";
  let obj = { name : "YES" , age : 24 };
  let arr = ["String",10,20,"AND",3.14];

  let onClickEvent = () => {
    console.log("button click !");
  }

  return (
    // <div className="App">
    <>
      <h1> Hello, {name} </h1>
      <p> This is a paragraph. </p>
      <button onClick={onClickEvent}> Click </button>
      <h3> obj.name : {obj.name} </h3>
      <h3> arr : {arr} </h3>
      <h3> arr[0] : {arr[0]} </h3>
    </>
    // </div>
  );
}

export default App;


// JSX syntax rule
  // return 되는 값은 하나의 block ( div ) 로 리턴되어야 한다.
  //    - <></> 빈 태그로 return 할 수 있다.
  // HTML 은 소문자 적용, 반드시 닫는태그가 존재 해야 한다.
  //    - <img />, <br />, <hr />, <input /> 등등
  // HTML : class , JSX : className
  // HTML 내에 javaScript 변수 값을 불러 올 때 {} 사용.
  // 변수 값 출력 : boolean, number, null, undefine
  // 객체 or 배열의 경우 속성 값을 출력.

  // component : html, css, javaScript 를 모듈화. 호출해서 사용.
