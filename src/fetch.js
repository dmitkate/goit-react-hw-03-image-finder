 export function FetchAPI(name) {
    return fetch(`https://pixabay.com/api?q=${name}&page=1&key=29731703-4e8659812dd82e74a79e4fb84&image_type=photo&orientation=horizontal&per_page=12`)
        .then(r => {
            if (r.ok) {
                return r.json();
                
            }
            return Promise.reject(new Error(`did not finde ${name}`));
        }
        );
}
//  import React,{ Component } from 'react';
// import axios from 'axios';

// axios.defaults.baseUrl = "https://pixabay.com/api";

// const List = ({ gallerys }) => {
//   gallerys.map(({ id, img }) => (
//     <li key={id}>
//       {img}
//     </li>

//   )

//   )
  
// }
// export class ImgGalley extends Component {
//   state = {
//     img: [],
//   };

//   async componentDidMount() {
//     const response = await axios.get("?q=car");
//     this.setState({ articles: response.data.hits });
//   }

//   render() {
//     const { img } = this.state;
//     return (
//       <div>
//          <List img={img} /> 
//       </div>
//     );
//   }
// }
// export class ImgGalley extends Component{
//   state = {
//     title: null,
//     error: null,
//     loading:' ',
//   }

//   componentDidUpdate(prevState, prevProps) {
//     const prevName = prevProps.imgName;
//     const postName = this.props.imgName;
//     console.log("bsgfbsrgfbsgbstgbs");
//     if (postName !== prevName) {
//       fetch(`https://pixabay.com/api/?q=${postName}&page=1&key=29731703-4e8659812dd82e74a79e4fb84&image_type=photo&orientation=horizontal&per_page=12`)
//         .then(r => { if (r.ok) { return r.json(); } })
        
//         .then(this.props.search(this.state.title));
//     }
//   }
//   render() {
//     return (
//       <div>
//         {this.state.title && <p>{this.props.imgName}</p>}
//       </div>
//     )
//   }
// }


