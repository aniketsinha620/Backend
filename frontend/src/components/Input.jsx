// import { useState } from 'react';
// import axios from "axios"

// function Input() {
//     const [input, setInput] = useState('');
//     const [description, setDescription] = useState('');
//     const [arr, setArr] = useState([]);



//     async function handleSubmit(e) {
//         e.preventDefault()

//         try {

//             await axios.post("http://localhost:8000/", {
//                 input, description
//             })
//                 .then(res => {
//                     if (res.data) {
//                         // setArr([...arr, res.data])
//                         console.log( res.data)
//                     }
//                 }).catch(e => {
//                     console.log(e)
//                 })

//             // await axios.get("http://localhost:8000/")
//             //     .then(res => {
//             //         const data = res.data
//             //         setArr(data)
//             //         console.log(arr)
//             //     }).catch(e => {
//             //         console.log(e)
//             //     })


//         } catch (e) {
//             console.log(e)
//         }
//     }







//     const handleClick = (index) => {
//         const newArr = arr.filter((ele, i) => i !== index);
//         setArr(newArr);
//     };


//     const display = arr.map((ele, i) => (
//         <li key={i}>
//             <p>{ele.input}</p>
//             <p className="description">{ele.description}</p>
//             <button className="delete" onClick={() => handleClick(i)}>
//                 X
//             </button>
//         </li>
//     ));
//     return (
//         <div className="todoContainer">
//             <div className="todo">
//                 <div className="task-enter">
//                     <form action="" onSubmit={handleSubmit}>
//                         <input type="text" placeholder="Title" value={input} onChange={(e) => setInput(e.target.value)} />
//                         <textarea
//                             name=""
//                             id=""
//                             cols="30"
//                             rows="10"
//                             placeholder="Description"
//                             value={description}
//                             onChange={(e) => setDescription(e.target.value)}
//                         >

//                         </textarea>
//                         <button className='save'>Post</button>
//                     </form>
//                 </div>
//                 <div className="display">
//                     <div className="pending">
//                         <div className="heading">
//                             <p>Title</p>
//                             <p>Description</p>
//                             <p>Delete</p>
//                         </div>
//                         <div className="task-display">
//                             {arr.length > 0 && <ul>{display}</ul>}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>


//     );
// }

// export default Input;
