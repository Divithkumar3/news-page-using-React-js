import React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';
import App from './App.js';
import Header from './header.js';
import './header.css';
import Footer from './footer.js';
import './content.css';
import Content from './content.js';
// import React from 'react';
// import ReactDOM from 'react-dom';
// class ReactState extends React.Component{
//     constructor(){
//         super();
//             this.state={MyWebsite:"Welcome to my Website"}
//         }
//         render(){
//         return <h1>{this.state.MyWebsite}</h1>
//         }
// }
// ReactDOM.render(<ReactState />,document.getElementById,('root'));
// const root = document.getElementById('root');
// ReactDOM.render(<ReactState />, root);

// export default ReactState;
// class Reactprops extends React.Component{
//     render(){
//         return<h1>Welcome DK {this.props.MyWebsite}</h1>
//     }
// }
// ReactDOM.render(<Reactprops MyWebsite="To Email id dividivithkumar@gmail.com"/>,document.getElementById('root'));




function Website(){
  
  return (
   
    <div>
      <App/>
      <Header/>
      <Content/>
      <Footer/>
      
      
    </div>
  );

  }


ReactDOM.render(<Website/>,document.getElementById("root"));



 
// //multiple classes have to see


// function HEADER(){
//   return(
//     <div>
//       <h1>hi</h1>
//     </div>
//   )
// }
// function HEADER1(){
//   return(
//     <div>
//       <h1>hello</h1>
//     </div>
//   )
// }
// function HEADER2(){
//   return(
//     <div>
//       <h1>hi hello</h1>
//     </div>
//   )
// }
// function CALL(){
//   return(
//     <div>
//       <HEADER/>
//       <HEADER1/>
//       <HEADER2/>
//     </div>
//   )
// }
// ReactDOM.render(<CALL/>,document.getElementById("root"));

// var a=()=>{
//   var n=50;
//   if(n==30)
//   document.getElementById('root').innerHTML=n;
//   else
//   document.getElementById('root').innerHTML="Not equal";
// };
// a();


// function a(){
//   var a=10;
//   var b=20;
//   var c=a+b;
//   document.getElementById('root').innerHTML=c;
// }
// a();


// var a=function(){
//   var a=10;
//   var b=20;
//   var c=a%b;
//   document.getElementById('root').innerHTML=c;
// }
// a();


// class demo{
//   methoddone(){
//     var a=100;
//     var b=10;
//     var c=a+b;
//     document.getElementById('root').innerHTML=c;
//   }


// }
// var demoone=new demo()
// demoone.methoddone();