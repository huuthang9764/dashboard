import React, { Fragment } from 'react';
import './../App.css';



const ConnectItem = ({ QuestionProps }) => {
   

   
    return (
        <Fragment>
            <table className="table">
                <thead className="thead-darkstriped"> 
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tên Câu Hỏi</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>                
                {QuestionProps.map((item, index) => {
                    return (
                <tbody key={index}>
                    <tr>
                        <th scope="row">{item.id}</th>
                        <td>{item.question}</td>
                        
                        <td>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal">Xem</button>
                            <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#exampleModal">Sửa</button>
                            <button type="button" className="btn btn-danger" >Xóa</button>
                        </div>
                        </td>
                    </tr>
                </tbody>
                    )
                })}
            </table>
        </Fragment>
    )
}

export default ConnectItem

