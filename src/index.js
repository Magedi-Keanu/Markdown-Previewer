import React from "react";
import ReactDom from "react-dom";
import {marked} from "marked";
import DOMPurify from "dompurify";
import "./index.scss";



/*function Editor(){
  const markDown = "## Header 2";


  return <h2>{markDown}</h2>
}*/


marked.setOptions({
  breaks:true
})






class App extends React.Component{
constructor(props){
  super(props);
  this.state ={markdown : PlaceHolder};
  this.handleChange = this.handleChange.bind(this);
}

handleChange(e){

this.setState({
  markdown:e.target.value
});

}

render(){
  return(
    <div>
        <h1 className="title">Markdown Previewer</h1>
        <div className="editor-wrapper">
          <Toolbar text="Editor"/>
          <Editor
            markdown={this.state.markdown}
            onChange={this.handleChange}
           />
        </div>
        <div className="preview-wrapper">
          <Toolbar text="Preview"/>
          <Preview markdown={this.state.markdown}/>
        </div>
    </div>
  )
}
}


const Editor = props =>{
  return (
<textarea
  id="editor"
  value={props.markdown}
  onChange={props.onChange}
  type="text"
  /*cols="80"
  rows="25"*/
/>
  )
}

const Toolbar = props =>{
  return(
    <div className="toolbar">
      {props.text}
    </div>
  )
  
}




const Preview = props =>{
  return(
  <div 
  id="preview"
  dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(ConvertMarkdown(props.markdown))}}
  ></div>
  )
}


const ConvertMarkdown = (mark) =>{
  return marked.parse(mark);
  }


const PlaceHolder = `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
There's also [links](https://github.com/Magedi-Keanu/Random-Quote-Machine), and
> Block Quotes!
And if you want to get really crazy, even tables:
Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:
![Random image from picsum](https://picsum.photos/200/300)
`;




ReactDom.render(<App/>, document.getElementById("root"))



