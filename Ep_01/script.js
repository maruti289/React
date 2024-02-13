const h1=React.createElement('h1',{id:"HeadingId"},"This is React Code");
console.log(h1)
const DomHead = ReactDOM.createRoot(document.getElementById('MainDiv'));
console.log(DomHead)
DomHead.render(h1);
//Creating the nested Div Elements using react
//React.createElement()=>this always cretes an object 
 
const div1=React.createElement('div',{id:"m1"},
React.createElement('div',{id:"m2"},
[React.createElement('h1',{id:"Heading1"},"This Is Heading Insisde The Dev"),
React.createElement('h2',{id:'h2'},"heading 2")]))
//Appending the divs and h1 into the main div
const root =ReactDOM.createRoot(document.getElementById('MainDiv'));
//While Rendering the into the browser  it will cronvert it into the HTML 
root.render(div1)



