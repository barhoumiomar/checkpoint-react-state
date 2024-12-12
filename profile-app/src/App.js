import React, { Component } from 'react'; // 3mlna importation de react wel component 
import './App.css'; // importation t3 fichier css
class App extends Component { //definition t3 classe App
  constructor(props) { // constructeur de la classe App n3ayytoulou w9teli nouvelle instance est crée
    super(props); // t3ayyet lel constructor mel classe parent
    this.state = {//ta3ml définition lel etat initiale t3 composant
      personne: { // objet fih des information
        fullName: 'omar barhoumi',
        bio: 'Développeur web passionné par React.',
        imgSrc: './pic.jpeg', 
        profession: 'Développeur'
      },
      show: false, // varible booleene bch detemine si le profile de la personne doit etre afficher ou non 
      timeElapsed: 0 //compteur ymarki
    };
  }

  componentDidMount() {// methode de cycle de vie  juste t3ayytelha wa9teli composant deja mahtout
    
    this.interval = setInterval(() => { //execute le temp eli 9a3d yemchy kol seconde...
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1 // kol seconde taaml mis a jour lel timeElapsed tzidha wehd 
      }));
    }, 1000); 
  }

  componentWillUnmount() { //methode de cycle de vie n3aytoulhaa juste 9ball ma composant yet7att
    
    clearInterval(this.interval); // tfasee5 el wa9t w y3awd ml lowl jid kol ma ta3ml actualisation
  }

  toggleProfile = () => { //n3ayoulha w9teli utilisateur yenzel alaa el bouton w w9teli yenzel 3l bouton ysir basculement  
    
    this.setState((prevState) => ({ 
      show: ! prevState.show // si show = true --> masquer ; si show = false --> afficher 
    }));
  };

  render() { // el render obligatoire bch koll jsx sera afficher fel interface utilisateur 
    const { fullName, bio, imgSrc, profession } = this.state.personne; // 3mlna extraire  ll proprietés lel objet personne pour faciliter ll accés t3 jsx
    const { show, timeElapsed } = this.state; // 3mlna extraire zeda lel show wl timeElapsed

    return (
      <div className="App">
        <h1>Profil de la personne</h1>
        <button onClick={this.toggleProfile}>
          {show ? 'Cacher le profil' : 'Afficher le profil'}
        </button>

        {show && (
          <div className="profile">
            <img src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p><strong>Profession :</strong> {profession}</p>
          </div>
        )}

        <p>Temps écoulé depuis le montage : {timeElapsed} secondes</p>
      </div>
    );
  }
}

export default App;
