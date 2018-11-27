import React, { Component } from 'react';
import Header from './headercomponent/header';
import Galery from './galerycomponent/galery'
import Filter from './galerycomponent/filtermovies';
import Modal from './addmovie/addmovie';
import add from './image/add.png';
import $ from 'jquery';

  
class App extends Component {
  constructor(props){
    super(props)
    this.state= {  filtervalue : '',
                    count:0,
                    event : 0,
                    movies : [
                      {   id:0,poster:"https://media-cache.cinematerial.com/p/500x/jtt9b4vh/get-out-movie-poster.jpg",title:"GET OUT ",overview:"Maintenant que Chris et sa copine Rose vont rencontrer leurs parents respectifs, elle l'invite dans la résidence secondaire de sa famille pour un week-end. D'abord Chris comprend que le comportement un peu étrange de la famille de Rose est lié au fait qu'il est noir et qu'elle est blanche. Cependant, il découvre que la vérité est bien plus dérangeante."},
                     {id:1,poster:"https://img08.mgo-images.com/image/thumbnail?id=1MVf3707c5a6513adf14c7394402be653ef&ql=70&sizes=310x465",title:"Spider Man ",overview:"Peter Parker a enfin réussi à concilier son amour pour Mary-Jane et ses devoirs de super-héros, mais l'horizon s'obscurcit. La brutale mutation de son costume, qui devient noir, décuple ses pouvoirs et transforme également sa personnalité pour laisser ressortir l'aspect sombre et vengeur que Peter s'efforce de contrôler."},
                     {id:2,poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkPhDZakfVvHbBGZcCoISA8cTPdZJOjhGH2SRNDwdyz182YWXC",title:"Seigneur des anneaux",overview:"Un jeune et timide `Hobbit', Frodon Sacquet, hérite d'un anneau magique. Bien loin d'être une simple babiole, il s'agit d'un instrument de pouvoir absolu qui permettrait à Sauron, le `Seigneur des ténèbres', de régner sur la `Terre du Milieu' et de réduire en esclavage ses peuples. Frodon doit parvenir jusqu'à la `Crevasse du Destin' pour détruire l'anneau."},
                     {id:3,poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIIFMFgMvZZY6Wjtlj1n5Cwj_4L4_XoQYlyOFjppcg-ETWu5l",title:"Rempage",overview:"Primatologue de profession, David Okoye a plus de mal à nouer des liens avec ses semblables qu'avec les singes. Pas étonnant qu'il se soit pris d'affection pour George, adorable gorille d'une intelligence hors du commun, dont il s'occupe depuis sa naissance. Pourtant, suite à une expérience génétique catastrophique, George se métamorphose en monstre incontrôlable."}                   
                    ] ,
                      title:'',
                      poster:'',
                      overview:''
                    
                  }
       
              
  }

Changevaluetitle = (e) =>{
  const {title} = this.state;
  e.preventDefault();
  this.setState({
    title:e.target.value
  })
}

Changevalueposter = (e) =>{
  const {poster} = this.state;
  e.preventDefault();
  this.setState({
    poster:e.target.value
  })
}
Changevalueoverview = (e) =>{
  const {overview} = this.state;
  e.preventDefault();
  this.setState({
    overview:e.target.value
  })
}
  submitMovie = (e) => {
    e.preventDefault();
    const {movies} = this.state;
    const movie={
      id:Math.random(),
      title:this.state.title,
      poster:this.state.poster,
      overview:this.state.overview
    } 
    if (movie.title ===''||movie.poster===''){
      alert ('cant add empty movie')
      this.setState({
        movies: this.state.movies
      })


    }
    else{
      this.setState({
        movies: this.state.movies.concat(movie),
        overview:'',
        title:'',
        poster:''
      })
    
    }
   
  }



  fetchMovies = () => {
    console.log("azazazz:"+ this.state.filtervalue)
    console.log(this.state.title)
    console.log("azazazz:"+ this.state.movies)
   const a = this.state.movies.filter(
      el =>
        el.title.toLowerCase().includes(
          this.state.filtervalue.toLowerCase()
        
        )
      )
      if ( a.length === 0 ){
        alert('we didnt find this movie its seems sucks!')
      return this.state.movies
      }
    return  a ;
  }



    
  render() {
    return (
      <div className="App">
          <Header  value= {this.state.filtervalue} onChange={(value) =>{let a =this.setState({
            filtervalue:value 
          }) }}/>
             <img className="button button5" src={add} alt="add button" data-toggle="modal" data-target="#modal"/>
              <div className="modal" id="modal" tabIndex="-1" role="dialog">
              <div className="modal-dialog" role="document">
        <form className="modal-content" onSubmit={(e) => {this.submitMovie(e)}}>
          <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Add Movie</h5>
          
          </div>
          <div className=" modal-body p-5 " >
          <div className="input-group mb-3 ">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon3">Movie Name :</span>
      </div>
      <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" value={this.state.title} onChange={(e)=>{this.Changevaluetitle(e)}} /><p>{this.state.title}</p>
    </div>
    
    <div className="input-group mb-3 ">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon3">image url :</span>
      </div>
      <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" value={this.state.poster} onChange={(e)=>{this.Changevalueposter(e)}} />
    </div>
        <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" >Overview :</span>
      </div>
      <textarea className="form-control" aria-label="With textarea" value={this.state.overview} onChange={(e)=>{this.Changevalueoverview(e)}}/>
    </div>
    <div className="modal-footer">
            <button type="submit"  className="btn btn-primary">
            Add Movie</button>
          </div>
          </div>
      
          </form>
          </div>
          </div>
   
              <Galery   obj = {this.fetchMovies()}  />   

      </div>
      
  
    );
  }
}

export default App;
