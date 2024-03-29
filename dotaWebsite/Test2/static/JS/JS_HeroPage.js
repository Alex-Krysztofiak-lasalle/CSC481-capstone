class MySkillDisplay extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
        skillIndex: 0,
        selectedIndices: [],
        skills: [],
        isLoading: true,
        
       }
    }

    handleChange = e => {
        // I could change selctedIndices "directly" but it was not affecting the page
        // so I made a copy, changed the copy, and then used the copy to set the state
        let copy = this.state.selectedIndices;
        if (e.target.checked) {
           //add to selectedIndices
           copy.push(e.target.value);
           copy.sort(function (a, b) { return a - b });
           //sort() assumes strings ("10"<"9") -- added anonymous "compare" function to force number (9<10)
        } else {
           //remove from selectedIndices
           copy = copy.filter(function (element) {
              return element != e.target.value;
           });
        }
        this.setState({ selectedIndices: copy });
     }


    //note the JSON has a slightly different structure than before
    componentDidMount() {
        fetch('static\\JSON\\heroList.json')
           .then(response => response.json())
           .then(data => this.setState({ skills: data, isLoading: false }));
     }
     
     render() {
        if (this.state.isLoading) {
           return (<p>Loading ....</p>)
        } else {
            return (
                <>
                 
                   {
                      this.state.skills.map((skill_element, i) => {
                        if (this.state.selectedIndices.indexOf(i) == -1) { //not found in selectedIndices array
                            //even though this is a map within a render it did not work with the single parent thing 
                            return (
                               <>
                                    <div name={"name_" + i} key={"key_" + i} className="flexChild" >
                                       <h1 name={"h1name_" + i} key={"h1key_" + i} className="flexChildH1" style={{zIndex: "3"}}>
                                          
                                          {(() => {
                                          switch (skill_element.primary_attribute) {
                                             case "str":   return <img className="priAttrImg" src={"static\\MiscImages\\hero_strength.png"}></img>;
                                             case "agi": return <img className="priAttrImg" src={"static\\MiscImages\\hero_agility.png"}></img>;
                                             case "int":  return <img className="priAttrImg" src={"static\\MiscImages\\hero_intelligence.png"}></img>;
                                             default:      return "#FFFFFF";
                                          }
                                          })()}
                                          {skill_element.name} 
                                       </h1>
                                       
                                       <a href={skill_element.link} target="_blank"><img name={"imgname_" + i} key={"imgkey_" + i} className="flexChildImg" src={skill_element.img}></img></a>
                                    </div> 
                                     
                               </>
                            )//match return of the if inside map 
                         }//match if
                         else { //found in selectedIndices array  -- add "checked" property
                            return (
                               <>
                                 <div name={"name_" + i} key={"key_" + i} className="flexChild" style={{ backgroundImage:`url(${skill_element.img})`}}>
                                    {/* <h1 name={"h1name_" + i} key={"h1key_" + i} className="flexChildH1">{skill_element.name}</h1> */}
                                    {/* <img name={"imgname_" + i} key={"imgkey_" + i} className="flexChildImg" src={skill_element.img}></img> */}
                                 </div> 
                               </>
                            ) //match return of the else inside map					
                         } //match else
                      }
                      )
                   }
                </>
             ) //match return in else of isLoading 
          
        } //match else of isLoading
     }
  

}
ReactDOM.render(<MySkillDisplay />, document.querySelector('#divSkillDisplay'))