
class Logo extends React.Component {
  render() {
    return (
      <div className='logo-container'>
        <img src={this.props.logo} />
      </div>
    )
  }
}

class Header extends React.Component {
  
  render() {
    return(
      <div className='head-container'>
        <h1>{this.props.crewName}</h1>
        <p>{this.props.crewDes}</p>
        <div class="captain-info">
          <img src={this.props.captainImage} alt="Captain"/>
     			<div class="captain-text">
    				<h2>Pirate Captain</h2>
            <h1>{this.props.crewCaptain}</h1>
       		</div>
     		</div>
      </div>
    )
  }
}


class Member extends React.Component {
  render() {
    return this.props.members.map(member => <div className='member'><img src={member['Member Image']} /> <h2>{member['Member Name']}</h2></div>)
  }
}



class Members extends React.Component {
  render() {
    return (
      <div className='center-container'>
        <h1>Members</h1>
        <div className='members'>
         <Member members={this.props.crewMembers} />
        </div>
      </div>
    )
  }
}

class Crews extends React.Component {
  render() {
    return(
      <div class="crews-bar">
      	<h1>Pirate Crews</h1>
        <div onClick={this.props.onPosition.bind(this, 0)} class="crew">
     			<h2>Strawhat Pirates</h2>
        </div>
     		<div onClick={this.props.onPosition.bind(this, 1)} class="crew">
    			<h2>Heart Pirates</h2>
        </div>
    		<div onClick={this.props.onPosition.bind(this, 2)} class="crew">
        	<h2>Rocks Pirates</h2>
     		</div>
        <div onClick={this.props.onPosition.bind(this, 3)} class="crew">
    			<h2>Roger Pirates</h2>
     		</div>
        <div onClick={this.props.onPosition.bind(this, 4)} class="crew">
     			<h2>Whitebeard Pirates</h2>
       	</div>
       	<div onClick={this.props.onPosition.bind(this, 5)} class="crew">
          <h2>Beast Pirates</h2>
       	</div>
      	<div onClick={this.props.onPosition.bind(this, 6)} class='crew'>
      	  <h2>Donquixote Pirates</h2>
      	</div>
      	<div onClick={this.props.onPosition.bind(this, 7)} class='crew'>
      	  <h2>Red Hair Pirates</h2>
      	</div>
      	<div onClick={this.props.onPosition.bind(this, 8)} class='crew'>
      	  <h2>Big Mom Pirates</h2>
      	</div>
      </div>
    )
  }
}




class App extends React.Component {
  
  state = {
    crews: null,
    dataLoaded: false,
    position: 0
  }
    
    componentDidMount() {
        fetch('crews.json')
        .then((response) => response.json())
        .then(crewList => {
           this.setState({
             crews: crewList,
             dataLoaded: true
            
           })
        });
    }
    
    onPosition = (id) => {
      this.setState({
        position: id
      })
    }
    
    
    render() {
        if (!this.state.dataLoaded) {
          return null
        } 
        
       return (
         <div>
         
          <Logo logo={this.state.crews['Crews'][this.state.position]['Crew Logo']}  />
          
          <Header crewName={this.state.crews['Crews'][this.state.position]['Crew Name']} 
          crewDes={this.state.crews['Crews'][this.state.position]['Crew Description']}
          crewCaptain={this.state.crews['Crews'][this.state.position]['Pirate Captain']}
          captainImage={this.state.crews['Crews'][this.state.position]['Captain Image']}/>
          
         <Members crewMembers={this.state.crews['Crews'][this.state.position]['Members']} />
         <Crews onPosition={this.onPosition} />
         </div>
       ) 
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));