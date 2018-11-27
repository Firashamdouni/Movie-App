import React, { Component } from 'react';
import $ from 'jquery';
import Header from '../headercomponent/header';
import Filter from './filtermovies'
import './galery.css';
import { Button, ButtonGroup } from 'reactstrap';

import { faSearch } from '@fortawesome/free-solid-svg-icons';



const Galery = (props) => (
      props.obj.map((el) => 
         <div className="card  col-lg-6 col-md-4 col-sm d-flex flex-column  m-5 " key={el.id} >
              <div className=" row btn-group" id="this">
              <button type="button" class="btn btn-danger btn-circle btn-lg"><i class="glyphicon glyphicon-remove"></i></button>
              <button type="button" class="btn btn-success btn-circle btn-lg " data-toggle="modal" data-target="#edit-modal"><i class="glyphicon glyphicon-link"></i></button>
                                              
                                              </div>
                                                    <img className="card-img-top mt-2"  src = {el.poster} alt="Card image cap" />
                                               <div className="card-body">
                                               <h5 className="card-title titre">{el.title}</h5>
                                            <p className="description ">{el.overview}</p>
                                              </div>


                                              
<div className="modal" id="edit-modal" tabIndex="-1" role="dialog">
<div className="modal-dialog" role="document">
<form className="modal-content">
<div className="modal-header">
<h5 className="modal-title" id="exampleModalLabel">Edit Movie</h5>

</div>
<div className=" modal-body p-5 " >
<div className="input-group mb-3 ">
<div className="input-group-prepend">
<span className="input-group-text" id="basic-addon3">Movie Name :</span>
</div>
<input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" value={el.title}/>
</div>

<div className="input-group mb-3 ">
<div className="input-group-prepend">
<span className="input-group-text" id="basic-addon3">image url :</span>
</div>
<input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" value={el.poster} />
</div>
<div className="input-group">
<div className="input-group-prepend">
<span className="input-group-text" >Overview :</span>
</div>
<textarea className="form-control" aria-label="With textarea" value={el.overview}/>
</div>
<div className="modal-footer">
<button type="submit"  className="btn btn-primary">
Save changes</button>
</div>
</div>

</form>
</div>
</div>
      )
                             </div>            
      )                                                                                
)

export default Galery










































































// class Galery extends Component {
       
//     constructor(props){
//         // super(props)
//         // this.state= {rows : 'Hello , nothing to show now' , 
//         //             count : 0                  
//         //         }
//              // this.state={ movies: this.state.movies.concat(this.state.newmovies)};   
//                 // let Listmovies = [];
//                 //      props.obj.forEach(movie => {
//                 //         console.log("aa : " + this.props.obj);
//                 //             console.log(movie.title);     
//                 //             // if ((movie.title.includes(this.props.obj))){
//                 //             const moviesRows =  <div className="card  col-lg-3 col-md-6 col-xg-3 col-sm d-flex flex-column align-items-center m-5 " key={movie.id} >
//                 //                                            <img className="card-img-top mt-2"  src = {movie.poster} alt="Card image cap" />
//                 //                                          <div className="card-body">
//                 //                                          <h5 className="card-title titre">{movie.title}</h5>
//                 //                                    <p className="description ">{movie.overview}</p>
//                 //                                         </div>
//                 //                                          </div>
//                 //              Listmovies.push(moviesRows)
//                 //              console.log(moviesRows);
//                 //              this.state={count : this.state.count+1};
//                 //              console.log(this.state.count);
//                 //             // }
//                 //         })
//                         // if (this.state.count=== 0)   {
//                         //     console.log("failed")
//                         //      const failed = <div className="w-100 h-100 p-3 align-center" style={{backgroundColor: "#eee"}}><h1 className="font-italic text-center">PAGE NOT FOUND : 404</h1></div>
//                         //             Listmovies.push(failed)
                                
//                         // } 
                                       
//                     // this.state={rows:Listmovies};      
     
//     // }
//     // onAddItem =  event  => {
//     //     this.setState({movies:movies.concat(movie)  })  ;  
//     //   }
//     // onChangeposter = event => {
//     //     this.setState({poster: event.target.value });
//     //   };
//     //   onChangetitle = event => {
//     //     this.setState({title: event.target.value });
//     //   };
//     //   onChangeoverview = event => {
//     //     this.setState({overview: event.target.value });
//     //   };
 
      

//   render() {
//       return     <div> 
//       <div className="row flex-container  movie " >  
// {this.state.rows}
//    <img className="button button5" src={add} alt="add button" data-toggle="modal" data-target="#modal"/>
//           <div className="modal" id="modal" tabIndex="-1" role="dialog">
//           <div className="modal-dialog" role="document">
//     <div className="modal-content">
//       <div className="modal-header">
//       <h5 className="modal-title" id="exampleModalLabel">Add Movie</h5>
      
//       </div>
//       <div className="modal-body p-5">
//       <div className="input-group mb-3 ">
//   <div className="input-group-prepend">
//     <span className="input-group-text" id="basic-addon3">Movie Name :</span>
//   </div>
//   <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"  value={this.title} onChange={this.onChangetitle}/><p>{this.state.title}</p>
// </div>

// <div className="input-group mb-3 ">
//   <div className="input-group-prepend">
//     <span className="input-group-text" id="basic-addon3">image url :</span>
//   </div>
//   <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" value={this.poster} onChange={this.onChangeposter} />
// </div>
//     <div className="input-group">
//   <div className="input-group-prepend">
//     <span className="input-group-text" value={this.overview} onChange={this.onChangeoverview}>Overview :</span>
//   </div>
//   <textarea className="form-control" aria-label="With textarea" ></textarea>
// </div>

//       </div>
//       <div className="modal-footer">
//         <button type="button" className="btn btn-primary" onClick={this.onAddItem}>Save changes</button>
//       </div>
//       </div>
//       </div>
//       </div>
// </div>
// </div>
//   }

// }
// export default Galery;
































/**************************/
        // movies.forEach(movie => {
        //     console.log(movie.title);
        //     const moviesRows =<div className="row container-fluid  movie">
        //         <div className="col-lg-3 col-md-3 col-12 d-flex flex-column align-items-center m-5 " key={movie.id}>
        //         <div className="image mt-3"><img src={movie.poster} alt="poster" /></div>
        //         <div className="description mt-5"style={{display:"none"}}>
        //         <p className="text-muted titre">{movie.title}</p>
        //         <p className="desc">{movie.overview}</p>
        //         </div>
        //         </div>
        //     </div>
        //      movieRows.push(moviesRows)
        // });

     
        // this.state = {rows : movieRows }
    //     let a = this.state.filtervalue;

    // this.performSearch(this.state.filtervalue);
    // }

    // handleChange =(event) =>{
    //     this.setState({filtervalue : event.target.value})
    //     this.x = this.state.filtervalue;
    // }
    
    // performSearch = (a) =>{
    //     const urlString = "https://api.themoviedb.org/3/search/movie?api_key=fa03e7fa263bee89235064f09003010c&language=en-US&page=1&include_adult=false&query="+a 
    //   console.log("aa"+this.state.filtervalue);
    //     $.ajax({
    //                 url:urlString,
    //                 success: (searchResult ) =>{
    //                     var movieRows = []
    //                     console.log("success")
    //                     console.log("aa"+this.state.filtervalue)
    //                     const result =searchResult.results
    //                     console.log(result[0])
    //                     result.forEach((movie) => {
    //                         const href ="https://image.tmdb.org/t/p/w185" + movie.poster_path;
    //                         console.log(movie.poster_path);
    //                         const moviee= 
    //                                 <div className="card  col-lg-3 col-md-6 col-xg-3 col-sm d-flex flex-column align-items-center m-5 " key={movie.id} >
    //                                <img className="card-img-top mt-2"  src = {href} alt="Card image cap" />
    //                               <div className="card-body">
    //                                 <h5 className="card-title titre">{movie.title}</h5>
    //                              <p className="description ">{movie.overview}</p>
    //                                </div>
    //                                </div>
    //                         movieRows.push(moviee)
    //                     });
    //                     this.setState({rows : movieRows})
    //                 },
    //                 error: (xhr , status , err) => {
    //                     console.log('failed')
    //                 }  
    //         })
    // }
