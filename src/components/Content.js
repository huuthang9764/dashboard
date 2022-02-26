import React, {  useState} from 'react';
import ConnectItem from './ConnectItem';
import Control from './Control';




const Content = () => {



    const [QuestionState, setQuestiontState] = useState([
        {
            id: '1',
            question: 'Đâu là chương trình trong máy tính?',
            option_a: 'Word',
            option_b: 'Excel',
            option_c: 'Powerpoint',
            option_d: 'Tất cả đáp án trên',
            answer: 'D',
            status: true
        },
        {
            id: '2',
            question: 'Luật Tổ chức chính quyền địa phương được Quốc Hội thông qua ngày tháng năm nào?',
            option_a: 'Ai là triệu phú',
            option_b: 'Hãy chọn giá đúng',
            option_c: 'Vietnam got Talents',
            option_d: 'All',
            answer: 'D',
            status: true
        }
        
    ]);
   
    const addQuestion = question =>{
        const newQuestion =[...QuestionState,{
            id:'3',
            question,
            status: true
        }]
        setQuestiontState(newQuestion);
    }
    
   
    return (
        <div className="container">
            <h2>Danh Sách Câu Hỏi</h2>
            <Control addQuestionFunc={addQuestion} />            
            <ConnectItem QuestionProps={QuestionState} />
        </div>
    )


}

export default Content